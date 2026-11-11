import './style.css';
import { gsap } from 'gsap';
import { createWorld } from './world.js';

const $ = (s) => document.querySelector(s);
const asset = path => import.meta.env.BASE_URL + path.replace(/^\//, '');
const categories = [
  {id:'wild', name:'山野旷途', en:'THE GREAT WIDE', photo:'p005', description:'山川、旷野与远行'},
  {id:'street', name:'街巷人间', en:'ORDINARY LIVES', photo:'p001', description:'人与街头的日常'},
  {id:'city', name:'城市几何', en:'URBAN FORMS', photo:'p076', description:'建筑、线条与空间'},
  {id:'night', name:'入夜以后', en:'AFTER HOURS', photo:'p115', description:'灯火里的生活'},
  {id:'nature', name:'草木时序', en:'SEASONS IN LIGHT', photo:'p130', description:'自然与季节的细节'},
];
const statusLabel = (p) => p.status==='to-edit'?'待精修':p.status==='ready'?'精选直出':'已精修';
const category = (id) => categories.find(c=>c.id===id);
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let photos=[], filtered=[], filter='all', shown=24, query='', order='curated', statusFilter='all';
let viewerList=[], viewerIndex=0, slideshow=null, spatial=null, spaceLoading=false;
let soundEnabled=false, audioContext=null, toastTimer=null;
try { soundEnabled=localStorage.getItem('light-between-sound')==='on'; } catch {}
const featuredOrder=['p002','p001','p005','p003','p115','p130','p004','p084','p109','p104','p006','p103','p038'];

function toast(message){
  $('#toast').textContent=message;
  $('#toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3000);
}

function syncSound(){
  $('#sound-toggle').setAttribute('aria-pressed',String(soundEnabled));
  $('#sound-toggle').setAttribute('aria-label',soundEnabled?'关闭交互音效':'开启交互音效');
  $('#sound-toggle span').textContent=soundEnabled?'音效开':'音效关';
}

function tick(deep=false){
  if(!soundEnabled) return;
  try{
    audioContext??=new(window.AudioContext||window.webkitAudioContext)();
    if(audioContext.state==='suspended') audioContext.resume();
    const time=audioContext.currentTime, duration=deep?.075:.035;
    const buffer=audioContext.createBuffer(1,audioContext.sampleRate*duration,audioContext.sampleRate);
    const samples=buffer.getChannelData(0);
    for(let i=0;i<samples.length;i++) samples[i]=(Math.random()*2-1)*Math.pow(1-i/samples.length,3);
    const source=audioContext.createBufferSource(), gain=audioContext.createGain(), lowpass=audioContext.createBiquadFilter();
    source.buffer=buffer; lowpass.type='lowpass'; lowpass.frequency.value=deep?900:1800;
    gain.gain.setValueAtTime(deep?.055:.035,time); gain.gain.exponentialRampToValueAtTime(.0001,time+duration);
    source.connect(lowpass);lowpass.connect(gain);gain.connect(audioContext.destination);source.start(time);
    source.onended=()=>{source.disconnect();lowpass.disconnect();gain.disconnect();};
  }catch{soundEnabled=false;syncSound();toast('当前浏览器无法开启音效');}
}
$('#sound-toggle').addEventListener('click',()=>{
  soundEnabled=!soundEnabled;syncSound();tick(true);
  try{localStorage.setItem('light-between-sound',soundEnabled?'on':'off');}catch{}
});
syncSound();

let world=null,view='home',mode='space',transitionTimer=null;
const panels={home:$('#home-panel'),space:$('#space-ui'),atlas:$('#space-ui'),archive:$('#archive-panel'),about:$('#about-panel')};
function animateEntry(){
  if(reduced.matches)return;
  gsap.from('.site-header',{y:-25,autoAlpha:0,duration:1.1,ease:'power3.out'});
  gsap.from('.title-line>span',{yPercent:110,rotate:4,duration:1.8,stagger:.15,delay:.25,ease:'power4.out'});
  gsap.from('.intro-item',{y:20,autoAlpha:0,duration:1.4,stagger:.12,delay:.55,ease:'power3.out'});
  gsap.from('#home-bottom,#home-annotation',{autoAlpha:0,duration:1.5,delay:1.2});
}
function sweep(){
  if(reduced.matches)return;
  document.body.classList.remove('is-transitioning');void document.body.offsetWidth;
  document.body.classList.add('is-transitioning');clearTimeout(transitionTimer);
  transitionTimer=setTimeout(()=>document.body.classList.remove('is-transitioning'),1700);
}
function setView(next){
  if(next===view)return;
  if(next==='space'&&mode==='atlas')next='atlas';
  const old=view;view=next;
  if(next==='space'||next==='atlas')mode=next;
  ['home','space','atlas','archive','about'].forEach(v=>document.body.classList.toggle('is-'+v,v===next));
  document.querySelectorAll('nav [data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===next||b.dataset.view==='space'&&next==='atlas'));
  document.querySelectorAll('[data-mode]').forEach(b=>{const active=b.dataset.mode===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  const show=panels[next],unique=[...new Set(Object.values(panels))];
  unique.forEach(el=>{
    gsap.killTweensOf(el);
    if(el===show){el.hidden=false;gsap.fromTo(el,{autoAlpha:0,y:next==='archive'?45:next==='about'?20:15},{autoAlpha:1,y:0,duration:reduced.matches?0:1.1,delay:reduced.matches?0:.25,ease:'power3.out'});}
    else if(!el.hidden){gsap.to(el,{autoAlpha:0,y:el===panels.home?-25:12,duration:reduced.matches?0:.4,onComplete:()=>{if(panels[view]!==el)el.hidden=true;}});}
  });
  ['#home-bottom','#home-annotation'].forEach(s=>{gsap.killTweensOf(s);gsap.to(s,{autoAlpha:next==='home'?1:0,duration:.5});});
  if(next==='atlas')$('#space-instruction').textContent='拖动，旋转影像星图 · 滚动，靠近或远离 · 点选任意一帧';
  else $('#space-instruction').textContent='拖动或滚动，穿行影像 · 点击照片，走近一点';
  world?.setView(next==='archive'?'atlas':next==='about'?'home':next);
  updateSpaceInfo();sweep();tick(true);
}
function updateSpaceInfo(photo,index,total){
  const list=photos.filter(p=>filter==='all'||p.category===filter);
  const p=photo||list[0];if(!p)return;
  if(view==='atlas'){
    $('#space-photo-category').textContent='AN ATLAS OF MOMENTS';
    $('#space-photo-title').textContent='影像，在此交汇。';
    $('#space-counter').textContent=list.length+' 帧目光 / 拖动旋转';
  }else{
    $('#space-photo-category').textContent=category(p.category).en;
    $('#space-photo-title').textContent=p.title;
    $('#space-counter').textContent=String((index||0)+1).padStart(2,'0')+' / '+(total||list.length);
  }
  $('#space-range').max=String((total||list.length)-1);
  $('#space-range').value=String(index||0);
  $('#timeline-current').textContent=String((index||0)+1).padStart(2,'0');
  $('#timeline-total').textContent=String(total||list.length).padStart(2,'0');
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;setView(mode);}));
$('#enter-exhibition').addEventListener('click',()=>{mode='space';setView('space');});
$('#scroll-enter').addEventListener('click',()=>{mode='space';setView('space');});
function setFilter(value){
  filter=value;shown=24;
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===value;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  world?.setFilter(photos.filter(p=>value==='all'||p.category===value));
  applyFilter();updateSpaceInfo();tick();
}
function buildFilters(){
  const items=[{id:'all',name:'全部'},...categories];
  $('#filters').innerHTML=items.map(c=>'<button class="filter'+(filter===c.id?' active':'')+'" data-filter="'+c.id+'" aria-pressed="'+(filter===c.id)+'">'+c.name+'<span>'+(c.id==='all'?photos.length:photos.filter(p=>p.category===c.id).length)+'</span></button>').join('');
  $('#space-filters').innerHTML=items.map(c=>'<button class="space-filter'+(filter===c.id?' active':'')+'" data-filter="'+c.id+'" aria-pressed="'+(filter===c.id)+'">'+(c.id==='all'?'全部目光':c.name)+'<sup>'+(c.id==='all'?photos.length:photos.filter(p=>p.category===c.id).length)+'</sup></button>').join('');
  $('#about-chapters').innerHTML=categories.map(c=>'<button data-about-category="'+c.id+'">'+c.name+' ↗</button>').join('');
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
  $('#about-chapters').addEventListener('click',e=>{const b=e.target.closest('[data-about-category]');if(b){setFilter(b.dataset.aboutCategory);mode='space';setView('space');}});
}
function applyFilter(){
  filtered=photos.filter(p=>(statusFilter==='all'||(p.status||'finished')===statusFilter)&&(filter==='all'||p.category===filter)&&(!query||(p.title+' '+p.filename+' '+category(p.category).name).toLowerCase().includes(query)));
  if(order==='date')filtered.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  if(order==='random')for(let i=filtered.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[filtered[i],filtered[j]]=[filtered[j],filtered[i]];}
  renderGrid();
}
function renderGrid(append=false){
  const start=append?$('#photo-grid').children.length:0;
  const cards=filtered.slice(start,shown).map((p,i)=>'<button class="photo-card" data-photo="'+p.id+'" style="animation-delay:'+Math.min(i%12,8)*.045+'s" aria-label="查看'+p.title+'，'+category(p.category).name+'"><div class="photo-card-image"><img src="'+p.thumb+'" width="'+p.width+'" height="'+p.height+'" loading="lazy" decoding="async" alt="'+p.title+'"></div><div class="photo-card-caption"><h3>'+p.title+'</h3><span>'+p.id.slice(1)+'</span></div><span class="photo-category">'+category(p.category).name+' · '+statusLabel(p)+'</span></button>').join('');
  if(append)$('#photo-grid').insertAdjacentHTML('beforeend',cards);else $('#photo-grid').innerHTML=cards;
  $('#filter-note').textContent=(filter==='all'?'全部作品':category(filter).name)+' / '+filtered.length+' 张影像'+(query?' · 搜索结果':'');
  $('#loaded-note').textContent=filtered.length?'已展出 '+Math.min(shown,filtered.length)+' / '+filtered.length:'';
  $('#load-more').hidden=shown>=filtered.length;$('#empty-state').hidden=filtered.length>0;
}
$('#work-status').addEventListener('change',e=>{statusFilter=e.target.value;shown=24;applyFilter();});
$('#sort').addEventListener('change',e=>{order=e.target.value;shown=24;applyFilter();tick();});
$('#search').addEventListener('input',e=>{query=e.target.value.trim().toLowerCase();shown=24;applyFilter();});
$('#reset-search').addEventListener('click',()=>{query='';$('#search').value='';statusFilter='all';$('#work-status').value='all';setFilter('all');});
$('#load-more').addEventListener('click',()=>{shown+=24;renderGrid(true);tick();});
$('#photo-grid').addEventListener('click',e=>{const b=e.target.closest('[data-photo]');if(b)openPhoto(b.dataset.photo);});
$('#space-prev').addEventListener('click',()=>{if(view==='atlas'){mode='space';setView('space');}world?.step(-1);tick();});
$('#space-next').addEventListener('click',()=>{if(view==='atlas'){mode='space';setView('space');}world?.step(1);tick();});
$('#space-range').addEventListener('input',e=>{if(view==='atlas'){mode='space';setView('space');}world?.goTo(Number(e.target.value));});
document.addEventListener('keydown',e=>{
  if(e.target.matches('input,select'))return;
  if($('#lightbox').open){if(e.key==='ArrowLeft'){e.preventDefault();advance(-1);}if(e.key==='ArrowRight'){e.preventDefault();advance(1);}}
  else if(view==='space'||view==='atlas'){
    if(e.key==='ArrowLeft'){e.preventDefault();world?.step(-1);tick();}
    if(e.key==='ArrowRight'){e.preventDefault();world?.step(1);tick();}
    if(e.key==='Escape'){setView('home');}
  }else if(e.key==='Escape')setView('home');
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){stopSlideshow();world?.pause();}else world?.resume();});
const cursor=$('#cursor');
document.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch'||reduced.matches)return;
  gsap.to(cursor,{left:e.clientX,top:e.clientY,duration:.2,ease:'power2.out',overwrite:true});
  const over=e.target.closest('#world');
  cursor.classList.toggle('visible',!!over&&!$('#lightbox').open);
  cursor.querySelector('span').textContent=view==='home'?'探索':'拖动';
});
document.addEventListener('pointerdown',()=>cursor.classList.add('dragging'));
document.addEventListener('pointerup',()=>cursor.classList.remove('dragging'));
document.addEventListener('pointerleave',()=>cursor.classList.remove('visible'));
async function initialize(){
  try{
    const response=await fetch(asset('photos.json'));if(!response.ok)throw new Error('Photo archive unavailable');
    photos=await response.json();
    photos=photos.map(p=>({...p,space:asset(p.space),thumb:asset(p.thumb),src:asset(p.src)}));
    categories.splice(0,categories.length,...categories.filter(c=>photos.some(p=>p.category===c.id)));
    $('#home-bottom .home-index').textContent=photos.length+' 帧目光 / '+categories.length+' 个主题';
    photos.sort((a,b)=>{const ai=featuredOrder.indexOf(a.id),bi=featuredOrder.indexOf(b.id);return(ai<0?999:ai)-(bi<0?999:bi)||a.id.localeCompare(b.id);});
    $('#nav-count').textContent=photos.length;$('#total-count').textContent=photos.length;
    buildFilters();applyFilter();updateSpaceInfo();
    try{
      world=createWorld({container:$('#world'),photos,reduced,onChange:updateSpaceInfo,onSelect:(id,list)=>openPhoto(id,list),onEnter:()=>{mode='space';setView('space');},onHover:hit=>{cursor.querySelector('span').textContent=hit?'查看':view==='home'?'探索':'拖动';}});
    }catch(e){$('#world-error').hidden=false;console.error('3D exhibition unavailable',e);}
    animateEntry();
  }catch(e){toast('作品档案暂时无法载入，请刷新重试。');console.error(e);}
}
initialize();
function updateBodyLock(){document.body.classList.toggle('modal-open',$('#lightbox').open);if($('#lightbox').open)world?.pause();else world?.resume();}
function openPhoto(id,list=filtered){
  viewerList=list.length?[...list]:[...photos];
  viewerIndex=viewerList.findIndex(p=>p.id===id);
  if(viewerIndex<0){viewerList=[...photos];viewerIndex=viewerList.findIndex(p=>p.id===id);}
  if(viewerIndex<0)return;
  $('#filmstrip').innerHTML=viewerList.map(p=>`<button data-id="${p.id}" aria-label="查看${p.title}"><img src="${p.thumb}" alt="" loading="lazy"></button>`).join('');
  if(!$('#lightbox').open){$('#lightbox').showModal();if(!reduced.matches)gsap.fromTo($('#lightbox'),{autoAlpha:0,clipPath:'inset(9% 8% 9% 8%)'},{autoAlpha:1,clipPath:'inset(0% 0% 0% 0%)',duration:.65,ease:'power3.out'});}
  updateBodyLock();showPhoto();tick(true);
}

function setZoom(value){
  $('#image-viewport').classList.toggle('zoomed',value);
  $('#zoom').setAttribute('aria-pressed',String(value));$('#zoom').textContent=value?'⊖ 还原':'⊕ 放大';
  if(!value){$('#image-viewport').scrollTop=0;$('#image-viewport').scrollLeft=0;}
}

function showPhoto(){
  const p=viewerList[viewerIndex];if(!p)return;
  setZoom(false);$('#image-error').hidden=true;
  const img=$('#lightbox-image');img.style.opacity='.35';img.alt=p.title;
  img.onload=()=>{img.style.opacity='1';$('#image-error').hidden=true;};
  img.onerror=()=>{$('#image-error').hidden=false;img.style.opacity='0';};
  img.src=p.src;
  if(img.complete&&img.naturalWidth)img.style.opacity='1';
  $('#lightbox-title').textContent=p.title;
  $('#lightbox-category').textContent=`${category(p.category).name} / ${category(p.category).en}`;
  $('#photo-meta').replaceChildren();
  const metadata=[statusLabel(p),p.date,p.camera,`${p.width} × ${p.height} 原片尺寸`,p.filename,p.status==='to-edit'?p.editNote:''].filter(Boolean);
  metadata.forEach(t=>{const el=document.createElement('div');el.textContent=t;$('#photo-meta').append(el);});
  $('#lightbox-counter').textContent=`${String(viewerIndex+1).padStart(2,'0')} / ${String(viewerList.length).padStart(2,'0')}`;
  $('#filmstrip').querySelectorAll('button').forEach(b=>b.setAttribute('aria-current',String(b.dataset.id===p.id)));
  const current=$('#filmstrip').querySelector('[aria-current=true]');
  if(current){const strip=$('#filmstrip');strip.scrollTo({left:current.offsetLeft-strip.offsetLeft-strip.clientWidth/2+current.clientWidth/2,behavior:reduced.matches?'instant':'smooth'});}
  const next=viewerList[(viewerIndex+1)%viewerList.length];if(next)new Image().src=next.src;
}
function advance(direction){viewerIndex=(viewerIndex+direction+viewerList.length)%viewerList.length;showPhoto();tick();}
function stopSlideshow(){clearInterval(slideshow);slideshow=null;$('#slideshow').setAttribute('aria-pressed','false');$('#slideshow').textContent='▶ 自动播放';}
function closeLightbox(){stopSlideshow();if(document.fullscreenElement=== $('#lightbox'))document.exitFullscreen().catch(()=>{});$('#lightbox').close();updateBodyLock();tick();}
$('#close-lightbox').addEventListener('click',closeLightbox);
$('#lightbox').addEventListener('cancel',e=>{e.preventDefault();closeLightbox();});
$('#prev-photo').addEventListener('click',()=>advance(-1));$('#next-photo').addEventListener('click',()=>advance(1));
$('#zoom').addEventListener('click',()=>setZoom(!$('#image-viewport').classList.contains('zoomed')));
$('#lightbox-image').addEventListener('dblclick',()=>setZoom(!$('#image-viewport').classList.contains('zoomed')));
$('#retry-image').addEventListener('click',()=>{const p=viewerList[viewerIndex];$('#lightbox-image').src=`${p.src}?retry=${Date.now()}`;});
$('#filmstrip').addEventListener('click',e=>{const b=e.target.closest('button');if(b){viewerIndex=viewerList.findIndex(p=>p.id===b.dataset.id);showPhoto();tick();}});
$('#slideshow').addEventListener('click',()=>{
  if(slideshow){stopSlideshow();return;}
  $('#slideshow').setAttribute('aria-pressed','true');$('#slideshow').textContent='Ⅱ 暂停播放';
  slideshow=setInterval(()=>advance(1),5000);tick();
});
$('#fullscreen').hidden=!document.fullscreenEnabled;
$('#fullscreen').addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else await $('#lightbox').requestFullscreen();}catch{$('#fullscreen').textContent='全屏不可用';}
});
let touchStart=null;
$('#image-viewport').addEventListener('touchstart',e=>{touchStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
$('#image-viewport').addEventListener('touchend',e=>{
  if(!touchStart||$('#image-viewport').classList.contains('zoomed'))return;
  const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y;
  if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4)advance(dx<0?1:-1);touchStart=null;
},{passive:true});
