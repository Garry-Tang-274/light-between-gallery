import * as THREE from 'three';

export function createWorld({container,photos,reduced,onChange,onSelect,onEnter,onHover}){
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x080f14);renderer.outputColorSpace=THREE.SRGBColorSpace;
  container.append(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(43,1,.1,180),root=new THREE.Group();scene.add(root);
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),mouse=new THREE.Vector2();
  const loader=new THREE.TextureLoader(),smallTextures=new Map(),highTextures=new Map();
  const blank=new THREE.DataTexture(new Uint8Array([35,52,48,255]),1,1);blank.needsUpdate=true;
  const plane=new THREE.PlaneGeometry(1,1,20,12),framePlane=new THREE.PlaneGeometry(1,1);
  const homePoses={
    p002:[2.7,.1,0,5.5,3.2,-.10,-.17,-.08],p001:[-.15,-1.4,1.4,1.65,2.4,.04,.16,.08],
    p003:[5.4,2,-1.5,1.5,2.25,-.08,-.3,.11],p103:[5.1,-2,1.5,2.7,1.9,.07,-.22,.10],
    p005:[1.4,2.8,-4,3.1,1.9,.15,.1,.08],p115:[7,.0,-4,3.1,2,-.10,-.4,-.07],
    p109:[-.6,2.7,-5,3.4,1.4,.08,.2,-.12],p130:[.5,-3.4,-5,2.8,1.8,.1,.1,-.12],
  };
  const mobileHome={p002:[1.05,-2.2,0,4.9,2.95,-.07,-.17,-.08],p001:[-2.1,-2.8,1,1.45,2.1,.02,.1,.08],p003:[2.9,-.25,-1.5,1,1.5,-.02,-.3,.1],p103:[2.4,-3.8,1.5,2.2,1.55,.05,-.2,.1],p005:[-1.4,-.5,-4,2.4,1.45,.07,.1,-.1]};
  let view='home',list=[...photos],indexTarget=0,indexPosition=0,current=-1,active=true,raf=0,last=0,transition=1.2,gate=0;
  let width=innerWidth,height=innerHeight,mobile=width<700,down=null,dragged=false,yaw=0,pitch=0,atlasZoom=1;
  const entries=photos.map((photo,i)=>{
    const material=new THREE.ShaderMaterial({transparent:true,depthWrite:true,side:THREE.DoubleSide,
      uniforms:{uMap:{value:blank},uOpacity:{value:0},uTime:{value:0},uBend:{value:0},uReveal:{value:0}},
      vertexShader:`varying vec2 vUv;uniform float uTime;uniform float uBend;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.x*3.14159+uTime*.7)*uBend;p.y+=sin(uv.x*6.28+uTime*.3)*uBend*.08;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      fragmentShader:`uniform sampler2D uMap;uniform float uOpacity;uniform float uReveal;varying vec2 vUv;float noise(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(uMap,vUv);float grain=noise(floor(vUv*350.));float reveal=smoothstep(grain*.2,grain*.2+.18,uReveal);gl_FragColor=vec4(color.rgb,color.a*uOpacity*reveal);#include <colorspace_fragment>}`.replace(';#include',';\n#include')
    });
    const mesh=new THREE.Mesh(plane,material),frame=new THREE.Mesh(framePlane,new THREE.MeshBasicMaterial({color:0xb0b69c,transparent:true,opacity:0,side:THREE.DoubleSide,depthWrite:false}));
    frame.position.z=-.055;mesh.renderOrder=2;frame.renderOrder=1;const group=new THREE.Group();group.add(frame,mesh);root.add(group);
    group.position.set((Math.random()-.5)*32,(Math.random()-.5)*22,-20-Math.random()*20);group.rotation.z=(Math.random()-.5)*.8;
    return{photo,group,mesh,frame,material,opacity:0,loaded:false,small:null,requested:false,highRequested:false,phase:i*2.399,scale:1};
  });
  function configureTexture(texture){texture.colorSpace=THREE.SRGBColorSpace;texture.generateMipmaps=false;texture.minFilter=THREE.LinearFilter;texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),4);return texture;}
  function requestSmall(entry){
    if(entry.requested)return;entry.requested=true;
    loader.load(entry.photo.space||entry.photo.thumb,texture=>{entry.small=configureTexture(texture);smallTextures.set(entry.photo.id,texture);if(!highTextures.has(entry.photo.id))entry.material.uniforms.uMap.value=texture;entry.loaded=true;},undefined,()=>{entry.requested=false;});
  }
  function requestHigh(entry){
    requestSmall(entry);if(entry.highRequested)return;entry.highRequested=true;
    loader.load(entry.photo.src,texture=>{
      configureTexture(texture);highTextures.set(entry.photo.id,texture);entry.material.uniforms.uMap.value=texture;entry.loaded=true;
      const cap=mobile?3:5;
      if(highTextures.size>cap)for(const [id,old]of highTextures){
        if(highTextures.size<=cap)break;if(id===entry.photo.id||id==='p002')continue;
        const previous=entries.find(e=>e.photo.id===id);if(previous?.small){previous.material.uniforms.uMap.value=previous.small;previous.highRequested=false;old.dispose();highTextures.delete(id);}
      }
    },undefined,()=>{entry.highRequested=false;});
  }

  // Thousands of points occupy depth rather than a flat decorative overlay.
  const dustCount=mobile?1100:2300,dustPositions=new Float32Array(dustCount*3),dustColors=new Float32Array(dustCount*3),sizes=new Float32Array(dustCount);
  for(let i=0;i<dustCount;i++){
    dustPositions[i*3]=(Math.random()-.5)*75;dustPositions[i*3+1]=(Math.random()-.5)*55;dustPositions[i*3+2]=(Math.random()-.5)*65;
    const c=new THREE.Color(i%6===0?0xd6be8a:0x719b9a);dustColors.set([c.r,c.g,c.b],i*3);sizes[i]=Math.random()*1.4+.35;
  }
  const dustGeometry=new THREE.BufferGeometry();dustGeometry.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));dustGeometry.setAttribute('color',new THREE.BufferAttribute(dustColors,3));dustGeometry.setAttribute('aSize',new THREE.BufferAttribute(sizes,1));
  const dustMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,vertexColors:true,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0},uTravel:{value:0}},
    vertexShader:`attribute float aSize;varying vec3 vColor;varying float vAlpha;uniform float uTime;uniform float uTravel;void main(){vColor=color;vec3 p=position;p.y+=sin(uTime*.07+p.x)*.5;p.z=mod(p.z+uTravel*9.+uTime*.12+32.5,65.)-32.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*45./max(1.,-mv.z),.5,4.5);vAlpha=clamp(1.-(-mv.z)/90.,.1,.7);}`,
    fragmentShader:`varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-vec2(.5));float alpha=smoothstep(.5,.05,d)*vAlpha;gl_FragColor=vec4(vColor,alpha*.65);}`});
  const dust=new THREE.Points(dustGeometry,dustMaterial);scene.add(dust);
  const orbits=new THREE.Group();scene.add(orbits);
  for(let j=0;j<3;j++){
    const points=[];for(let i=0;i<=220;i++){const a=i/220*Math.PI*2;points.push(new THREE.Vector3(Math.cos(a)*(7+j*3),Math.sin(a)*(7+j*3),0));}
    const geometry=new THREE.BufferGeometry().setFromPoints(points);const line=new THREE.Line(geometry,new THREE.LineBasicMaterial({color:j===0?0x8a9472:0x497b79,transparent:true,opacity:j===0?.17:.08}));
    line.material.depthTest=false;line.renderOrder=-10;
    line.rotation.set(1.15+j*.23,.15+j*.2,j*.8);line.position.set(2,-1,-6-j*2);orbits.add(line);
  }
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=256;const context=glowCanvas.getContext('2d');
  const gradient=context.createRadialGradient(128,128,0,128,128,128);gradient.addColorStop(0,'rgba(58,101,109,.45)');gradient.addColorStop(.4,'rgba(28,69,80,.19)');gradient.addColorStop(1,'rgba(0,0,0,0)');context.fillStyle=gradient;context.fillRect(0,0,256,256);
  const glow=new THREE.Mesh(new THREE.PlaneGeometry(55,40),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(glowCanvas),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));glow.position.set(4,2,-18);scene.add(glow);

  function resize(){width=container.clientWidth||innerWidth;height=container.clientHeight||innerHeight;mobile=width<700;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();}
  new ResizeObserver(resize).observe(container);resize();
  function wrapped(index){return((index%list.length)+list.length)%list.length;}
  function setView(next){view=next;current=-1;transition=1;gate=performance.now()+1050;if(view!=='atlas'){yaw=0;pitch=0;}if(view==='atlas')entries.forEach(e=>{if(list.includes(e.photo))requestSmall(e);});}
  function setFilter(next){list=next;indexTarget=0;indexPosition=0;current=-1;transition=1;if(view==='atlas')entries.forEach(e=>{if(list.includes(e.photo))requestSmall(e);});}
  function update(time,dt){
    const ease=reduced.matches?1:1-Math.pow(.925,dt),t=reduced.matches?0:time*.001;
    transition=Math.max(0,transition-dt*.012);indexPosition+=(indexTarget-indexPosition)*(reduced.matches?1:1-Math.pow(.88,dt));
    const center=wrapped(Math.round(indexPosition));
    if(center!==current&&list.length){current=center;onChange(list[center],center,list.length);const e=entries.find(e=>e.photo===list[center]);if(view==='space'&&e)requestHigh(e);}
    const worldWidth=view==='home'?(mobile?8.0:14.5):view==='atlas'?(mobile?27:31)*atlasZoom:(mobile?6.7:11.8);
    const cameraZ=worldWidth/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect);
    const targetZ=Math.max(view==='atlas'?23:8,cameraZ)-(reduced.matches?0:Math.sin(transition*Math.PI)*2.0);
    camera.position.z+=(targetZ-camera.position.z)*ease;camera.position.x+=(mouse.x*(view==='home'?.28:.10)-camera.position.x)*ease;
    camera.position.y+=((view==='space'?.7:view==='atlas'?1.5:0)+mouse.y*.10-camera.position.y)*ease;
    root.rotation.y+=((view==='atlas'?yaw+(reduced.matches?0:t*.018):mouse.x*.018)-root.rotation.y)*ease;
    root.rotation.x+=((view==='atlas'?pitch:mouse.y*.014)-root.rotation.x)*ease;
    entries.forEach((entry,i)=>{
      let x=0,y=0,z=-30,rx=0,ry=0,rz=0,w=2,h=2,opacity=0;
      if(view==='home'){
        const pose=(mobile?mobileHome:homePoses)[entry.photo.id];
        if(pose){[x,y,z,w,h,rx,ry,rz]=pose;if(mobile){y-=1.5;if(entry.photo.id==='p005')y-=1.2;}opacity=1;requestSmall(entry);if(entry.photo.id==='p002')requestHigh(entry);}
      }else if(view==='space'){
        const idx=list.indexOf(entry.photo);
        if(idx>=0){
          let delta=idx-indexPosition;delta=((delta+list.length/2)%list.length+list.length)%list.length-list.length/2;
          x=delta*5.8;y=1.0+Math.sin(delta*.8)*.3;z=-Math.abs(delta)*1.8-delta*delta*.13;ry=-delta*.20;rz=Math.sin(delta*.6)*.02;
          h=mobile?4.1:3.5;w=h*entry.photo.width/entry.photo.height;if(w>5.8){w=5.8;h=w*entry.photo.height/entry.photo.width;}
          opacity=Math.abs(delta)<4.5?Math.max(.25,1-Math.abs(delta)*.16):0;
          if(opacity>0)requestSmall(entry);
        }
      }else if(view==='atlas'){
        const idx=list.indexOf(entry.photo);
        if(idx>=0){
          const phi=Math.acos(1-2*(idx+.5)/list.length),theta=idx*2.399963;
          x=Math.cos(theta)*Math.sin(phi)*10.5;y=Math.cos(phi)*9+1;z=Math.sin(theta)*Math.sin(phi)*8;
          h=1.25;w=h*entry.photo.width/entry.photo.height;if(w>2.5){w=2.5;h=w*entry.photo.height/entry.photo.width;}
          ry=-root.rotation.y*.8;rx=-root.rotation.x*.8;rz=Math.sin(idx)*.04;opacity=.9;requestSmall(entry);
        }
      }
      if(opacity>0&&!reduced.matches){y+=Math.sin(t*.45+entry.phase)*.075;x+=Math.sin(t*.2+entry.phase)*.025;}
      const p=entry.group.position,r=entry.group.rotation;
      p.x+=(x-p.x)*ease;p.y+=(y-p.y)*ease;p.z+=(z-p.z)*ease;
      r.x+=(rx-r.x)*ease;r.y+=(ry-r.y)*ease;r.z+=(rz-r.z)*ease;
      entry.mesh.scale.x+=(w-entry.mesh.scale.x)*ease;entry.mesh.scale.y+=(h-entry.mesh.scale.y)*ease;
      entry.frame.scale.set(entry.mesh.scale.x+.045,entry.mesh.scale.y+.045,1);
      entry.opacity+=((entry.loaded?opacity:0)-entry.opacity)*ease;
      entry.material.uniforms.uOpacity.value=entry.opacity;entry.material.uniforms.uTime.value=t;
      entry.material.uniforms.uReveal.value=Math.min(1,entry.material.uniforms.uReveal.value+(entry.loaded?.025:0)*dt);
      entry.material.uniforms.uBend.value=reduced.matches?0:.012+Math.abs(indexTarget-indexPosition)*.10+transition*.13;
      entry.frame.material.opacity=entry.opacity*.55;entry.group.visible=entry.opacity>.005||opacity>0;
    });
    dustMaterial.uniforms.uTime.value=t;dustMaterial.uniforms.uTravel.value=transition;
    dust.rotation.y=t*.006;orbits.rotation.z=t*.004+transition*.1;
    const orbitOpacity=view==='atlas'?.35:1;orbits.children.forEach((line,j)=>{line.material.opacity=(j===0?.17:.08)*orbitOpacity;});
  }
  function draw(time){if(!active)return;const dt=Math.min((time-last)/16.67||1,3);last=time;update(time,dt);renderer.render(scene,camera);raf=requestAnimationFrame(draw);}
  camera.position.set(0,0,30);raf=requestAnimationFrame(draw);
  const canvas=renderer.domElement;
  canvas.addEventListener('wheel',e=>{
    if(document.body.classList.contains('modal-open'))return;
    e.preventDefault();if(performance.now()<gate)return;
    if(view==='home'){if(Math.abs(e.deltaY)>8)onEnter();}
    else if(view==='space')indexTarget+=Math.max(-.8,Math.min(.8,(e.deltaY+e.deltaX)*.0025));
    else if(view==='atlas')atlasZoom=THREE.MathUtils.clamp(atlasZoom+e.deltaY*.0008,.68,1.6);
  },{passive:false});
  canvas.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,index:indexTarget,yaw,pitch};dragged=false;canvas.setPointerCapture(e.pointerId);});
  function hitTest(e){const rect=canvas.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(entries.filter(e=>e.opacity>.3).map(e=>e.mesh))[0];return hit?entries.find(e=>e.mesh===hit.object):null;}
  canvas.addEventListener('pointermove',e=>{
    mouse.set(e.clientX/width-.5,-(e.clientY/height-.5));
    if(down){const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.abs(dx)+Math.abs(dy)>8)dragged=true;
      if(view==='space')indexTarget=down.index-dx/(mobile?160:280);
      if(view==='atlas'){yaw=down.yaw+dx*.004;pitch=THREE.MathUtils.clamp(down.pitch+dy*.002,-.5,.5);}
    }else onHover?.(!!hitTest(e));
  });
  canvas.addEventListener('pointerup',e=>{
    if(!down)return;
    if(view==='home'&&down.y-e.clientY>45){onEnter();}
    else if(!dragged){const entry=hitTest(e);if(entry)onSelect(entry.photo.id,view==='home'?photos:list);}
    indexTarget=Math.round(indexTarget);down=null;
  });
  canvas.addEventListener('pointercancel',()=>{down=null;indexTarget=Math.round(indexTarget);});
  canvas.addEventListener('pointerleave',()=>{mouse.set(0,0);onHover?.(false);});
  return{setView,setFilter,step(direction){indexTarget=Math.round(indexTarget)+direction;},goTo(index){indexTarget=index;},
    pause(){active=false;cancelAnimationFrame(raf);},resume(){if(!active){active=true;last=performance.now();raf=requestAnimationFrame(draw);}}
  };
}
