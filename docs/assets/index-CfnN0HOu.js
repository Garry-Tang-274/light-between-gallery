(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function $n(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Fu(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rs={duration:.5,overwrite:!1,delay:0},Cl,Ce,ae,vn=1e8,ee=1/vn,bo=Math.PI*2,xf=bo/4,Mf=0,Ou=Math.sqrt,Sf=Math.cos,Ef=Math.sin,Re=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},ei=function(t){return typeof t=="number"},Pl=function(t){return typeof t>"u"},Vn=function(t){return typeof t=="object"},We=function(t){return t!==!1},Dl=function(){return typeof window<"u"},Ps=function(t){return pe(t)||Re(t)},Bu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ne=Array.isArray,yf=/random\([^)]+\)/g,Tf=/,\s*/g,pc=/(?:-?\.?\d|\.)+/gi,zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ba=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ku=/[+-]=-?[.\d]+/,bf=/[^,'"\[\]\s]+/gi,Af=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,he,Fn,Ao,Ll,un={},fa={},Vu,Hu=function(t){return(fa=wr(t,un))&&$e},Ul=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ss=function(t,e){return!e&&console.warn(t)},Gu=function(t,e){return t&&(un[t]=e)&&fa&&(fa[t]=e)||un},as=function(){return 0},wf={suppressEvents:!0,isStart:!0,kill:!1},ra={suppressEvents:!0,kill:!1},Rf={suppressEvents:!0},Il={},mi=[],wo={},Wu,en={},za={},mc=30,sa=[],Nl="",Fl=function(t){var e=t[0],n,i;if(Vn(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=sa.length;i--&&!sa[i].targetTest(e););n=sa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new fh(t[i],n)))||t.splice(i,1);return t},Xi=function(t){return t._gsap||Fl(xn(t))[0]._gsap},Xu=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():Pl(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},ve=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},Er=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Cf=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=mi.length,e=mi.slice(0),n,i;for(wo={},mi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ol=function(t){return!!(t._initted||t._startAt||t.add)},qu=function(t,e,n,i){mi.length&&!Ce&&da(),t.render(e,n,!!(Ce&&e<0&&Ol(t))),mi.length&&!Ce&&da()},Yu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(bf).length<2?e:Re(t)?t.trim():t},Ku=function(t){return t},hn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Pf=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},wr=function(t,e){for(var n in e)t[n]=e[n];return t},_c=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Qr=function(t){var e=t.parent||he,n=t.keyframes?Pf(Ne(t.keyframes)):hn;if(We(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Df=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},$u=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Pa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Si=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},qi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Lf=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ro=function(t,e,n,i){return t._startAt&&(Ce?t._startAt.revert(ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Uf=function r(t){return!t||t._ts&&r(t.parent)},gc=function(t){return t._repeat?Rr(t._tTime,t=t.duration()+t._rDelay)*t:0},Rr=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Da=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ee)||0))},La=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Da(t),n._dirty||qi(n,t)),t},Zu=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ma(t.rawTime(),e),(!e._dur||Ss(0,e.totalDuration(),n)-e._tTime>ee)&&e.render(n,!0)),qi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ee}},Bn=function(t,e,n,i){return e.parent&&Si(e),e._start=ue((ei(n)?n:!n&&_a(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==he?mn(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),$u(t,e,"_first","_last",t._sort?"_start":0),_a(e)||(t._recent=e),i||Zu(t,e),t._ts<0&&La(t,t._tTime),t},ju=function(t,e){return(un.ScrollTrigger||Ul("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},Ju=function(t,e,n,i,s){if(zl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ce&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wu!==nn.frame)return mi.push(t),t._lazy=[s,i],1},If=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},_a=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Nf=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&If(t)&&!(!t._initted&&_a(t))||(t._ts<0||t._dp._ts<0)&&!_a(t))?0:1,o=t._rDelay,c=0,l,u,h;if(o&&t._repeat&&(c=Ss(0,t._tDur,e),u=Rr(c,o),t._yoyo&&u&1&&(a=1-a),u!==Rr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ce||i||t._zTime===ee||!e&&t._zTime){if(!t._initted&&Ju(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?ee:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Ro(t,e,n,!0),t._onUpdate&&!n&&sn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&sn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Si(t,1),!n&&!Ce&&(sn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ff=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Cr=function(t,e,n,i){var s=t._repeat,a=ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ue(a*(s+1)+t._rDelay*s):a,o>0&&!i&&La(t,t._tTime=t._tDur*o),t.parent&&Da(t),n||qi(t.parent,t),t},vc=function(t){return t instanceof Ge?qi(t):Cr(t,t._dur)},Of={_start:0,endTime:as,totalDuration:as},mn=function r(t,e,n){var i=t.labels,s=t._recent||Of,a=t.duration()>=vn?s.endTime(!1):t._dur,o,c,l;return Re(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Ne(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},ts=function(t,e,n){var i=ei(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=We(c.vars.inherit)&&c.parent;a.immediateRender=We(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ee(e[0],a,e[s+1])},bi=function(t,e){return t||t===0?e(t):e},Ss=function(t,e,n){return n<t?t:n>e?e:n},Ie=function(t,e){return!Re(t)||!(e=Af.exec(t))?"":e[1]},Bf=function(t,e,n){return bi(n,function(i){return Ss(t,e,i)})},Co=[].slice,Qu=function(t,e){return t&&Vn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vn(t[0]))&&!t.nodeType&&t!==Fn},zf=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Re(i)&&!e||Qu(i,1)?(s=n).push.apply(s,xn(i)):n.push(i)})||n},xn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Re(t)&&!n&&(Ao||!Pr())?Co.call((e||Ll).querySelectorAll(t),0):Ne(t)?zf(t,n):Qu(t)?Co.call(t,0):t?[t]:[]},Po=function(t){return t=xn(t)[0]||ss("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return xn(e,n.querySelectorAll?n:n===t?ss("Invalid scope")||Ll.createElement("div"):t)}},th=function(t){return t.sort(function(){return .5-Math.random()})},eh=function(t){if(pe(t))return t;var e=Vn(t)?t:{each:t},n=Yi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,u=i,h=i;return Re(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,T,y,M,A,w,b,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,vn])[1],!x){for(b=-vn;b<(b=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=c?Math.min(x,_)*u-.5:i%x,T=x===vn?0:c?_*h/x-.5:i/x|0,b=0,C=vn,w=0;w<_;w++)y=w%x-d,M=T-(w/x|0),m[w]=A=l?Math.abs(l==="y"?M:y):Ou(y*y+M*M),A>b&&(b=A),A<C&&(C=A);i==="random"&&th(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:l?l==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ie(e.amount||e.each)||0,n=n&&_<0?Jf(n):n}return _=(m[f]-m.min)/m.max||0,ue(m.b+(n?n(_):_)*m.v)+m.u}},Do=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ei(n)?0:Ie(n))}},nh=function(t,e){var n=Ne(t),i,s;return!n&&Vn(t)&&(i=n=t.radius||vn,t.values?(t=xn(t.values),(s=!ei(t[0]))&&(i*=i)):t=Do(t.increment)),bi(e,n?pe(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=vn,u=0,h=t.length,f,p;h--;)s?(f=t[h].x-o,p=t[h].y-c,f=f*f+p*p):f=Math.abs(t[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?t[u]:a,s||u===a||ei(a)?u:u+Ie(a)}:Do(t))},ih=function(t,e,n,i){return bi(Ne(t)?!e:n===!0?!!(n=0):!i,function(){return Ne(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},kf=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Vf=function(t,e){return function(n){return t(parseFloat(n))+(e||Ie(n))}},Hf=function(t,e,n){return sh(t,e,0,1,n)},rh=function(t,e,n){return bi(n,function(i){return t[~~e(i)]})},Gf=function r(t,e,n){var i=e-t;return Ne(t)?rh(t,r(0,t.length),e):bi(n,function(s){return(i+(s-t)%i)%i+t})},Wf=function r(t,e,n){var i=e-t,s=i*2;return Ne(t)?rh(t,r(0,t.length-1),e):bi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},os=function(t){return t.replace(yf,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Tf);return ih(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},sh=function(t,e,n,i,s){var a=e-t,o=i-n;return bi(s,function(c){return n+((c-t)/a*o||0)})},Xf=function r(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=Re(t),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ne(t)&&!Ne(e)){for(u=[],h=t.length,f=h-2,l=1;l<h;l++)u.push(r(t[l-1],t[l]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=e}else i||(t=wr(Ne(t)?[]:{},t));if(!u){for(c in e)Bl.call(o,t,c,"get",e[c]);s=function(g){return Hl(g,o)||(a?t.p:t)}}}return bi(n,s)},xc=function(t,e,n){var i=t.labels,s=vn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},sn=function(t,e,n){var i=t.vars,s=i[e],a=ae,o=t._ctx,c,l,u;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&mi.length&&da(),o&&(ae=o),u=c?s.apply(l,c):s.call(l),ae=a,u},$r=function(t){return Si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ce),t.progress()<1&&sn(t,"onInterrupt"),t},Mr,ah=[],oh=function(t){if(t)if(t=!t.name&&t.default||t,Dl()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:as,render:Hl,add:Bl,kill:ld,modifier:od,rawVars:0},a={targetTest:0,get:0,getSetter:Vl,aliases:{},register:0};if(Pr(),t!==i){if(en[e])return;hn(i,hn(pa(t,s),a)),wr(i.prototype,wr(s,pa(t,a))),en[i.prop=e]=i,t.targetTest&&(sa.push(i),Il[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gu(e,i),t.register&&t.register($e,i,qe)}else ah.push(t)},re=255,Zr={aqua:[0,re,re],lime:[0,re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,re],navy:[0,0,128],white:[re,re,re],olive:[128,128,0],yellow:[re,re,0],orange:[re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[re,0,0],pink:[re,192,203],cyan:[0,re,re],transparent:[re,re,re,0]},ka=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*re+.5|0},lh=function(t,e,n){var i=t?ei(t)?[t>>16,t>>8&re,t&re]:0:Zr.black,s,a,o,c,l,u,h,f,p,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])i=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&re,i&re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&re,t&re]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(pc),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=ka(c+1/3,s,a),i[1]=ka(c,s,a),i[2]=ka(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(zu),n&&i.length<4&&(i[3]=1),i}else i=t.match(pc)||Zr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/re,a=i[1]/re,o=i[2]/re,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?c=l=0:(p=h-f,l=u>.5?p/(2-h-f):p/(h+f),c=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ch=function(t){var e=[],n=[],i=-1;return t.split(_i).forEach(function(s){var a=s.match(xr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Mc=function(t,e,n){var i="",s=(t+i).match(_i),a=e?"hsla(":"rgba(",o=0,c,l,u,h;if(!s)return t;if(s=s.map(function(f){return(f=lh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ch(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(_i,"1").split(xr),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=t.split(_i),h=l.length-1;o<h;o++)i+=l[o]+s[o];return i+l[h]},_i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),qf=/hsl[a]?\(/,uh=function(t){var e=t.join(" "),n;if(_i.lastIndex=0,_i.test(e))return n=qf.test(e),t[1]=Mc(t[1],n),t[0]=Mc(t[0],n,ch(t[1])),!0},ls,nn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,h,f,p,g=function _(m){var d=r()-i,T=m===!0,y,M,A,w;if((d>t||d<0)&&(n+=d-e),i+=d,A=i-n,y=A-a,(y>0||T)&&(w=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,a+=y+(y>=s?0:s-y),M=1),T||(c=l(_)),M)for(p=0;p<o.length;p++)o[p](A,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Vu&&(!Ao&&Dl()&&(Fn=Ao=window,Ll=Fn.document||{},un.gsap=$e,(Fn.gsapVersions||(Fn.gsapVersions=[])).push($e.version),Hu(fa||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),ah.forEach(oh)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ls=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),ls=0,l=as},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,d,T){var y=d?function(M,A,w,b){m(M,A,w,b),h.remove(y)}:m;return h.remove(m),o[T?"unshift":"push"](y),Pr(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h})(),Pr=function(){return!ls&&nn.wake()},Wt={},Yf=/^[\d.\-M][\d.\-,\s]/,Kf=/["']/g,$f=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(Kf,"").trim():+l,i=c.substr(o+1).trim();return e},Zf=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jf=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[$f(e[1])]:Zf(t).split(",").map(Yu)):Wt._CE&&Yf.test(t)?Wt._CE("",t):n},Jf=function(t){return function(e){return 1-t(1-e)}},Yi=function(t,e){return t&&(pe(t)?t:Wt[t]||jf(t))||e},tr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Wt[o]=un[o]=s,Wt[a=o.toLowerCase()]=n;for(var c in s)Wt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Wt[o+"."+c]=s[c]}),s},hh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Va=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/bo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ef((u-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:hh(o);return s=bo/s,c.config=function(l,u){return r(t,l,u)},c},Ha=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:hh(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;tr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;tr("Elastic",Va("in"),Va("out"),Va());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};tr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);tr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});tr("Circ",function(r){return-(Ou(1-r*r)-1)});tr("Sine",function(r){return r===1?1:-Sf(r*xf)+1});tr("Back",Ha("in"),Ha("out"),Ha());Wt.SteppedEase=Wt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ee;return function(o){return((i*Ss(0,a,o)|0)+s)*n}}};rs.ease=Wt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nl+=r+","+r+"Params,"});var fh=function(t,e){this.id=Mf++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xu,this.set=e?e.getSetter:Vl},cs=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Cr(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),ls||nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Cr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Pr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(La(this,n),!s._dp||s.parent||Zu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Rr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ma(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-ee?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Ss(-Math.abs(this._delay),o,s),i!==!1),Da(this),Lf(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Pr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==ee,a;if(s)for(this._tTime-=ee,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+ee){s=!1;break}a=a._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(We(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Rf);var i=Ce;return Ce=n,Ol(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ce=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(mn(this,n),We(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,We(i)),this._dur||(this._zTime=-ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pe(n)?n:Ku,c=function(){var u=i.then;i.then=null,s&&s(),pe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){$r(this)},r})();hn(cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ee,_prom:0,_ps:!1,_rts:1});var Ge=(function(r){Fu(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=We(n.sortChildren),he&&Bn(n.parent||he,$n(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ju($n(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ts(0,arguments,this),this},e.from=function(i,s,a){return ts(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ts(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ee(i,s,mn(this,a),1),this},e.call=function(i,s,a){return Bn(this,Ee.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ee(i,a,mn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,Qr(a).immediateRender=We(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},e.staggerFromTo=function(i,s,a,o,c,l,u,h){return o.startAt=a,Qr(o).immediateRender=We(o.immediateRender),this.staggerTo(i,s,o,c,l,u,h)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:ue(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,p,g,_,m,d,T,y,M,A,w,b;if(this!==he&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,y=this._ts,d=!y,h&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=ue(u%m),u===c?(_=this._repeat,f=l):(A=ue(u/m),_=~~A,_&&_===A&&(f=l,_--),f>l&&(f=l)),A=Rr(this._tTime,m),!o&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(f=l-f,b=1),_!==A&&!this._lock){var C=w&&A&1,x=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:u%l?l:u,this._lock=1,this.render(o||(b?0:ue(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&sn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Ff(this,ue(o),ue(f)),T&&(u-=f-(f=T._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!A&&(sn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=-ee);break}}p=g}else{p=this._last;for(var S=i<0?i:f;p;){if(g=p._prev,(p._act||S<=p._end)&&p._ts&&T!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,a||Ce&&Ol(p)),f!==this._time||!this._ts&&!d){T=0,g&&(u+=this._zTime=S?-ee:ee);break}}p=g}}if(T&&!s&&(this.pause(),T.render(f>=o?0:-ee)._zTime=f>=o?1:-1,this._ts))return this._start=M,Da(this),this.render(i,s,a);this._onUpdate&&!s&&sn(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Si(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(sn(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ei(s)||(s=mn(this,s,i)),!(i instanceof cs)){if(Ne(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Re(i))return this.addLabel(i,s);if(pe(i))i=Ee.delayedCall(0,i);else return this}return this!==i?Bn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Ee?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Re(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&Pa(this,i),i===this._recent&&(this._recent=this._last),qi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=mn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ee.delayedCall(0,s||as,a);return o.data="isPause",this._hasPause=1,Bn(this,o,mn(this,i))},e.removePause=function(i){var s=this._first;for(i=mn(this,i);s;)s._start===i&&s.data==="isPause"&&Si(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)fi!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=xn(i),c=this._first,l=ei(s),u;c;)c instanceof Ee?Cf(c._targets,o)&&(l?(!fi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=mn(a,i),c=s,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,p,g=Ee.to(a,hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ee,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Cr(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,hn({startAt:{time:mn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xc(this,mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xc(this,mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return qi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=vn,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Bn(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=ue(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Cr(a,a===he&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(he._ts&&(qu(he,ma(i,he)),Wu=nn.frame),nn.frame>=mc){mc+=on.autoSleep||120;var s=he._first;if((!s||!s._ts)&&on.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t})(cs);hn(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qf=function(t,e,n,i,s,a,o){var c=new qe(this._pt,t,e,0,1,gh,null,s),l=0,u=0,h,f,p,g,_,m,d,T;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=os(i)),a&&(T=[n,i],a(T,t,e),n=T[0],i=T[1]),f=n.match(Ba)||[];h=Ba.exec(i);)g=h[0],_=i.substring(l,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Er(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},l=Ba.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(ku.test(i)||d)&&(c.e=0),this._pt=c,c},Bl=function(t,e,n,i,s,a,o,c,l,u){pe(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:pe(h)?l?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,p=pe(h)?l?rd:mh:kl,g;if(Re(i)&&(~i.indexOf("random(")&&(i=os(i)),i.charAt(1)==="="&&(g=Er(f,i)+(Ie(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Lo)return!isNaN(f*i)&&i!==""?(g=new qe(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?ad:_h,0,p),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&Ul(e,i),Qf.call(this,t,e,f,i,p,c||on.stringFilter,l))},td=function(t,e,n,i,s){if(pe(t)&&(t=es(t,s,e,n,i)),!Vn(t)||t.style&&t.nodeType||Ne(t)||Bu(t))return Re(t)?es(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=es(t[o],s,e,n,i);return a},dh=function(t,e,n,i,s,a){var o,c,l,u;if(en[t]&&(o=new en[t]).init(s,o.rawVars?e[t]:td(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new qe(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Mr))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o},fi,Lo,zl=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,T=d&&d.data==="nested"?d.vars.targets:m,y=t._overwrite==="auto"&&!Cl,M=t.timeline,A=i.easeReverse||h,w,b,C,x,S,D,F,z,W,X,G,Y,B;if(M&&(!f||!s)&&(s="none"),t._ease=Yi(s,rs.ease),t._rEase=A&&(Yi(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||f&&!i.stagger){if(z=m[0]?Xi(m[0]).harness:0,Y=z&&i[z.prop],w=pa(i,Il),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!p?_.render(-1,!0):_.revert(u&&g?ra:wf),_._lazy=0),a){if(Si(t._startAt=Ee.set(m,hn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&We(c),startAt:null,delay:0,onUpdate:l&&function(){return sn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce||!o&&!p)&&t._startAt.revert(ra),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),C=hn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&We(c),immediateRender:o,stagger:0,parent:d},w),Y&&(C[z.prop]=Y),Si(t._startAt=Ee.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ce?t._startAt.revert(ra):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ee,ee);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&We(c)||c&&!g,b=0;b<m.length;b++){if(S=m[b],F=S._gsap||Fl(m)[b]._gsap,t._ptLookup[b]=X={},wo[F.id]&&mi.length&&da(),G=T===m?b:T.indexOf(S),z&&(W=new z).init(S,Y||w,t,G,T)!==!1&&(t._pt=x=new qe(t._pt,S,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(st){X[st]=x}),W.priority&&(D=1)),!z||Y)for(C in w)en[C]&&(W=dh(C,w,t,G,S,T))?W.priority&&(D=1):X[C]=x=Bl.call(t,S,C,"get",w[C],G,T,0,i.stringFilter);t._op&&t._op[b]&&t.kill(S,t._op[b]),y&&t._pt&&(fi=t,he.killTweensOf(S,X,t.globalTime(e)),B=!t.parent,fi=0),t._pt&&c&&(wo[F.id]=1)}D&&vh(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!B,f&&e<=0&&M.render(vn,!0,!0)},ed=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,p;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(u=f[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Lo=1,t.vars[e]="+=0",zl(t,o),Lo=0,c?ss(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(p=l.length;p--;)h=l[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=ve(n)+Ie(h.e)),h.b&&(h.b=u.s+Ie(h.b))},nd=function(t,e){var n=t[0]?Xi(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=wr({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},id=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ne(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},es=function(t,e,n,i,s){return pe(t)?t.call(e,n,i,s):Re(t)&&~t.indexOf("random(")?os(t):t},ga=Nl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ph={};Xe(ga+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ph[r]=1});ga=ga.split(",");var Ee=(function(r){Fu(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Qr(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,p=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,d=i.parent||he,T=(Ne(n)||Bu(n)?ei(n[0]):"length"in i)?[n]:xn(n),y,M,A,w,b,C,x,S;if(o._targets=T.length?Fl(T):ss("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Ps(l)||Ps(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Ge({data:"nested",defaults:_||{},targets:d&&d.data==="nested"?d.vars.targets:T}),y.kill(),y.parent=y._dp=$n(o),y._start=0,f||Ps(l)||Ps(u)){if(w=T.length,x=f&&eh(f),Vn(f))for(b in f)~ga.indexOf(b)&&(S||(S={}),S[b]=f[b]);for(M=0;M<w;M++)A=pa(i,ph),A.stagger=0,D&&(A.easeReverse=D),S&&wr(A,S),C=T[M],A.duration=+es(l,$n(o),M,C,T),A.delay=(+es(u,$n(o),M,C,T)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),y.to(C,A,x?x(M,C,T):0),y._ease=Wt.none;y.duration()?l=u=0:o.timeline=0}else if(g){Qr(hn(y.vars.defaults,{ease:"none"})),y._ease=Yi(g.ease||i.ease||"none");var F=0,z,W,X;if(Ne(g))g.forEach(function(G){return y.to(T,G,">")}),y.duration();else{A={};for(b in g)b==="ease"||b==="easeEach"||id(b,g[b],A,g.easeEach);for(b in A)for(z=A[b].sort(function(G,Y){return G.t-Y.t}),F=0,M=0;M<z.length;M++)W=z[M],X={ease:W.e,duration:(W.t-(M?z[M-1].t:0))/100*l},X[b]=W.v,y.to(T,X,F),F+=X.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return p===!0&&!Cl&&(fi=$n(o),he.killTweensOf(T),fi=0),Bn(d,$n(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!g&&o._start===ue(d._time)&&We(h)&&Uf($n(o))&&d.data!=="nested")&&(o._tTime=-ee,o.render(Math.max(0,-u)||0)),m&&ju($n(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-ee&&!u?c:i<ee?0:i,f,p,g,_,m,d,T,y;if(!l)Nf(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=ue(h%_),h===c?(g=this._repeat,f=l):(m=ue(h/_),g=~~m,g&&g===m?(f=l,g--):f>l&&(f=l)),d=this._yoyo&&g&1,d&&(f=l-f),m=Rr(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(ue(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Ju(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=f<o;if(M!==this._inv){var A=M?o:l-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(f/l);if(this._from&&(this.ratio=T=1-T),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(sn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(T,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ro(this,i,s,a),sn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&sn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ro(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Si(this,1),!s&&!(u&&!o)&&(h||o||d)&&(sn(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){ls||nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zl(this,l),u=this._ease(l/this._dur),ed(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(La(this,0),this.parent||$u(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ce),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||$r(this),this.parent&&a!==this.timeline.totalDuration()&&Cr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?xn(i):o,l=this._ptLookup,u=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&Df(o,c))return s==="all"&&(this._pt=0),$r(this);for(h=this._op=this._op||[],s!=="all"&&(Re(s)&&(_={},Xe(s,function(T){return _[T]=1}),s=_),s=nd(o,s)),d=o.length;d--;)if(~c.indexOf(o[d])){f=l[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Pa(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&$r(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ts(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ts(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return he.killTweensOf(i,s,a)},t})(cs);hn(Ee.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){Ee[r]=function(){var t=new Ge,e=Co.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var kl=function(t,e,n){return t[e]=n},mh=function(t,e,n){return t[e](n)},rd=function(t,e,n,i){return t[e](i.fp,n)},sd=function(t,e,n){return t.setAttribute(e,n)},Vl=function(t,e){return pe(t[e])?mh:Pl(t[e])&&t.setAttribute?sd:kl},_h=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ad=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Hl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},od=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},ld=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Pa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},cd=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},vh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},qe=(function(){function r(e,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||_h,this.d=c||this,this.set=l||kl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cd,this.m=n,this.mt=s,this.tween=i},r})();Xe(Nl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Il[r]=1});un.TweenMax=un.TweenLite=Ee;un.TimelineLite=un.TimelineMax=Ge;he=new Ge({sortChildren:!1,defaults:rs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=uh;var Ki=[],aa={},ud=[],Sc=0,hd=0,Ga=function(t){return(aa[t]||ud).map(function(e){return e()})},us=function(){var t=Date.now(),e=[];t-Sc>2&&(Ga("matchMediaInit"),Ki.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Fn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Ga("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sc=t,Ga("matchMedia"))},xh=(function(){function r(e,n){this.selector=n&&Po(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hd++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){pe(n)&&(s=i,i=n,n=pe);var a=this,o=function(){var l=ae,u=a.selector,h;return l&&l!==a&&l.data.push(a),s&&(a.selector=Po(s)),ae=a,h=i.apply(a,arguments),pe(h)&&a._r.push(h),ae=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===pe?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ee&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Ge?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Ee)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Ki.length;a--;)Ki[a].id===this.id&&Ki.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(us):o.removeEventListener("change",us)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),fd=(function(){function r(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Vn(n)||(n={matches:n});var a=new xh(0,s||this.scope),o=a.conditions={},c,l,u;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Fn.matchMedia(n[l]),c&&(Ki.indexOf(a)<0&&Ki.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(us):c.addEventListener("change",us),(a._mqs||(a._mqs=[])).push(c)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),va={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return oh(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return he.getTweensOf(t,e)},getProperty:function(t,e,n,i){Re(t)&&(t=xn(t)[0]);var s=Xi(t||{}).get,a=n?Ku:Yu;return n==="native"&&(n=""),t&&(e?a((en[e]&&en[e].get||s)(t,e,n,i)):function(o,c,l){return a((en[o]&&en[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=xn(t),t.length>1){var i=t.map(function(u){return $e.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=en[e],o=Xi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(u){var h=new a;Mr._pt=0,h.init(t,n?u+n:u,Mr,0,[t]),h.render(1,h),Mr._pt&&Hl(1,Mr)}:o.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=$e.to(t,hn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(e,c,l,u)};return a.tween=s,a},isTweening:function(t){return he.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yi(t.ease,rs.ease)),_c(rs,t||{})},config:function(t){return _c(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!en[o]&&!un[o]&&ss(e+" effect requires "+o+" plugin.")}),za[e]=function(o,c,l){return n(xn(o),hn(c||{},s),l)},a&&(Ge.prototype[e]=function(o,c,l){return this.add(za[e](o,Vn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Wt[t]=Yi(e)},parseEase:function(t,e){return arguments.length?Yi(t,e):Wt},getById:function(t){return he.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,s;for(n.smoothChildTiming=We(t.smoothChildTiming),he.remove(n),n._dp=0,n._time=n._tTime=he._time,i=he._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ee&&i.vars.onComplete===i._targets[0]))&&Bn(n,i,i._start-i._delay),i=s;return Bn(he,n,0),n},context:function(t,e){return t?new xh(t,e):ae},matchMedia:function(t){return new fd(t)},matchMediaRefresh:function(){return Ki.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||us()},addEventListener:function(t,e){var n=aa[t]||(aa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=aa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Gf,wrapYoyo:Wf,distribute:eh,random:ih,snap:nh,normalize:Hf,getUnit:Ie,clamp:Bf,splitColor:lh,toArray:xn,selector:Po,mapRange:sh,pipe:kf,unitize:Vf,interpolate:Xf,shuffle:th},install:Hu,effects:za,ticker:nn,updateRoot:Ge.updateRoot,plugins:en,globalTimeline:he,core:{PropTween:qe,globals:Gu,Tween:Ee,Timeline:Ge,Animation:cs,getCache:Xi,_removeLinkedListItem:Pa,reverting:function(){return Ce},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return Cl=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return va[r]=Ee[r]});nn.add(Ge.updateRoot);Mr=va.to({},{duration:0});var dd=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},pd=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dd(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Wa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(Re(s)&&(c={},Xe(s,function(u){return c[u]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}pd(o,s)}}}},$e=va.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ce?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wa("roundProps",Do),Wa("modifiers"),Wa("snap",nh))||va;Ee.version=Ge.version=$e.version="3.15.1";Vu=1;Dl()&&Pr();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ec,di,yr,Gl,ki,yc,Wl,md=function(){return typeof window<"u"},ni={},Ni=180/Math.PI,Tr=Math.PI/180,nr=Math.atan2,Tc=1e8,Xl=/([A-Z])/g,_d=/(left|right|width|margin|padding|x)/i,gd=/[\s,\(]\S/,zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vd=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Md=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Sd=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Mh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Sh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ed=function(t,e,n){return t.style[e]=n},yd=function(t,e,n){return t.style.setProperty(e,n)},Td=function(t,e,n){return t._gsap[e]=n},bd=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ad=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wd=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},fe="transform",Ye=fe+"Origin",Rd=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ni&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Zn(i,o)}):this.tfm[t]=a.x?a[t]:Zn(i,t),t===Ye&&(this.tfm.zOrigin=a.zOrigin);else return zn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(fe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ye,e,"")),t=fe}(s||e)&&this.props.push(t,e,s[t])},Eh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Cd=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wl(),(!s||!s.isStart)&&!n[fe]&&(Eh(n),i.zOrigin&&n[Ye]&&(n[Ye]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},yh=function(t,e){var n={target:t,props:[],revert:Cd,save:Rd};return t._gsap||$e.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Th,Io=function(t,e){var n=di.createElementNS?di.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):di.createElement(t);return n&&n.style?n:di.createElement(t)},an=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Dr(e)||e,1)||""},bc="O,Moz,ms,Ms,Webkit".split(","),Dr=function(t,e,n){var i=e||ki,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(bc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?bc[a]:"")+t},No=function(){md()&&window.document&&(Ec=window,di=Ec.document,yr=di.documentElement,ki=Io("div")||{style:{}},Io("div"),fe=Dr(fe),Ye=fe+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Th=!!Dr("perspective"),Wl=$e.core.reverting,Gl=1)},Ac=function(t){var e=t.ownerSVGElement,n=Io("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),yr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),yr.removeChild(n),s},wc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},bh=function(t){var e,n;try{e=t.getBBox()}catch{e=Ac(t),n=1}return e&&(e.width||e.height)||n||(e=Ac(t)),e&&!e.width&&!e.x&&!e.y?{x:+wc(t,["x","cx","x1"])||0,y:+wc(t,["y","cy","y1"])||0,width:0,height:0}:e},Ah=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bh(t))},Ei=function(t,e){if(e){var n=t.style,i;e in ni&&e!==Ye&&(e=fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xl,"-$1").toLowerCase())):n.removeAttribute(e)}},pi=function(t,e,n,i,s,a){var o=new qe(t._pt,e,n,0,1,a?Sh:Mh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Rc={deg:1,rad:1,turn:1},Pd={grid:1,flex:1},yi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,c=_d.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,_,m,d;if(i===a||!s||Rc[i]||Rc[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),d=t.getCTM&&Ah(t),(p||a==="%")&&(ni[e]||~e.indexOf("adius")))return g=d?t.getBBox()[c?"width":"height"]:t[u],ve(p?s/g*h:s/100*g);if(o[c?"width":"height"]=h+(f?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===di||!_.appendChild)&&(_=di.body),m=_._gsap,m&&p&&m.width&&c&&m.time===nn.time&&!m.uncache)return ve(s/m.width*h);if(p&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=h+i,g=t[u],T?t.style[e]=T:Ei(t,e)}else(p||a==="%")&&!Pd[an(_,"display")]&&(o.position=an(t,"position")),_===t&&(o.position="static"),_.appendChild(ki),g=ki[u],_.removeChild(ki),o.position="absolute";return c&&p&&(m=Xi(_),m.time=nn.time,m.width=_[u]),ve(f?g*s/h:g&&s?h/g*s:0)},Zn=function(t,e,n,i){var s;return Gl||No(),e in zn&&e!=="transform"&&(e=zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ni[e]&&e!=="transform"?(s=fs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ma(an(t,Ye))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xa[e]&&xa[e](t,e,n)||an(t,e)||Xu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?yi(t,e,s,n)+n:s},Dd=function(t,e,n,i){if(!n||n==="none"){var s=Dr(e,t,1),a=s&&an(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=an(t,"borderTopColor"))}var o=new qe(this._pt,t.style,e,0,1,gh),c=0,l=0,u,h,f,p,g,_,m,d,T,y,M,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=an(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=an(t,e)||i,_?t.style[e]=_:Ei(t,e)),u=[n,i],uh(u),n=u[0],i=u[1],f=n.match(xr)||[],A=i.match(xr)||[],A.length){for(;h=xr.exec(i);)m=h[0],T=i.substring(c,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=f[l++]||"")&&(p=parseFloat(_)||0,M=_.substr((p+"").length),m.charAt(1)==="="&&(m=Er(p,m)+M),d=parseFloat(m),y=m.substr((d+"").length),c=xr.lastIndex-y.length,y||(y=y||on.units[e]||M,c===i.length&&(i+=y,o.e+=y)),M!==y&&(p=yi(t,e,_,y)||0),o._pt={_next:o._pt,p:T||l===1?T:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Sh:Mh;return ku.test(i)&&(o.e=0),this._pt=o,o},Cc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ld=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Cc[n]||n,e[1]=Cc[i]||i,e.join(" ")},Ud=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],ni[o]&&(c=1,o=o==="transformOrigin"?Ye:fe),Ei(n,o);c&&(Ei(n,fe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",fs(n,1),a.uncache=1,Eh(i)))}},xa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new qe(t._pt,e,n,0,0,Ud);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},hs=[1,0,0,1,0,0],wh={},Rh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pc=function(t){var e=an(t,fe);return Rh(e)?hs:e.substr(7).match(zu).map(ve)},ql=function(t,e){var n=t._gsap||Xi(t),i=t.style,s=Pc(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?hs:s):(s===hs&&!t.offsetParent&&t!==yr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,yr.appendChild(t)),s=Pc(t),c?i.display=c:Ei(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):yr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fo=function(t,e,n,i,s,a){var o=t._gsap,c=s||ql(t,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=c[0],g=c[1],_=c[2],m=c[3],d=c[4],T=c[5],y=e.split(" "),M=parseFloat(y[0])||0,A=parseFloat(y[1])||0,w,b,C,x;n?c!==hs&&(b=p*m-g*_)&&(C=M*(m/b)+A*(-_/b)+(_*T-m*d)/b,x=M*(-g/b)+A*(p/b)-(p*T-g*d)/b,M=C,A=x):(w=bh(t),M=w.x+(~y[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(y[1]||y[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(d=M-l,T=A-u,o.xOffset=h+(d*p+T*_)-d,o.yOffset=f+(d*g+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ye]="0px 0px",a&&(pi(a,o,"xOrigin",l,M),pi(a,o,"yOrigin",u,A),pi(a,o,"xOffset",h,o.xOffset),pi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},fs=function(t,e){var n=t._gsap||new fh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=an(t,Ye)||"0",u,h,f,p,g,_,m,d,T,y,M,A,w,b,C,x,S,D,F,z,W,X,G,Y,B,st,ct,gt,Rt,Yt,Ft,Ot;return u=h=f=_=m=d=T=y=M=0,p=g=1,n.svg=!!(t.getCTM&&Ah(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[fe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[fe]!=="none"?c[fe]:"")),i.scale=i.rotate=i.translate="none"),b=ql(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Fo(t,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),A=n.xOrigin||0,w=n.yOrigin||0,b!==hs&&(D=b[0],F=b[1],z=b[2],W=b[3],u=X=b[4],h=G=b[5],b.length===6?(p=Math.sqrt(D*D+F*F),g=Math.sqrt(W*W+z*z),_=D||F?nr(F,D)*Ni:0,T=z||W?nr(z,W)*Ni+_:0,T&&(g*=Math.abs(Math.cos(T*Tr))),n.svg&&(u-=A-(A*D+w*z),h-=w-(A*F+w*W))):(Ot=b[6],Yt=b[7],ct=b[8],gt=b[9],Rt=b[10],Ft=b[11],u=b[12],h=b[13],f=b[14],C=nr(Ot,Rt),m=C*Ni,C&&(x=Math.cos(-C),S=Math.sin(-C),Y=X*x+ct*S,B=G*x+gt*S,st=Ot*x+Rt*S,ct=X*-S+ct*x,gt=G*-S+gt*x,Rt=Ot*-S+Rt*x,Ft=Yt*-S+Ft*x,X=Y,G=B,Ot=st),C=nr(-z,Rt),d=C*Ni,C&&(x=Math.cos(-C),S=Math.sin(-C),Y=D*x-ct*S,B=F*x-gt*S,st=z*x-Rt*S,Ft=W*S+Ft*x,D=Y,F=B,z=st),C=nr(F,D),_=C*Ni,C&&(x=Math.cos(C),S=Math.sin(C),Y=D*x+F*S,B=X*x+G*S,F=F*x-D*S,G=G*x-X*S,D=Y,X=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=ve(Math.sqrt(D*D+F*F+z*z)),g=ve(Math.sqrt(G*G+Ot*Ot)),C=nr(X,G),T=Math.abs(C)>2e-4?C*Ni:0,M=Ft?1/(Ft<0?-Ft:Ft):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Rh(an(t,fe)),Y&&t.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(p*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ve(p),n.scaleY=ve(g),n.rotation=ve(_)+o,n.rotationX=ve(m)+o,n.rotationY=ve(d)+o,n.skewX=T+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ye]=Ma(l)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?Nd:Th?Ch:Id,n.uncache=0,n},Ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xa=function(t,e,n){var i=Ie(e);return ve(parseFloat(e)+parseFloat(yi(t,"x",n+"px",i)))+i},Id=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ch(t,e)},wi="0deg",Gr="0px",Ri=") ",Ch=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,T=n.target,y=n.zOrigin,M="",A=d==="auto"&&t&&t!==1||d===!0;if(y&&(h!==wi||u!==wi)){var w=parseFloat(u)*Tr,b=Math.sin(w),C=Math.cos(w),x;w=parseFloat(h)*Tr,x=Math.cos(w),a=Xa(T,a,b*x*-y),o=Xa(T,o,-Math.sin(w)*-y),c=Xa(T,c,C*x*-y+y)}m!==Gr&&(M+="perspective("+m+Ri),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||a!==Gr||o!==Gr||c!==Gr)&&(M+=c!==Gr||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ri),l!==wi&&(M+="rotate("+l+Ri),u!==wi&&(M+="rotateY("+u+Ri),h!==wi&&(M+="rotateX("+h+Ri),(f!==wi||p!==wi)&&(M+="skew("+f+", "+p+Ri),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Ri),T.style[fe]=M||"translate(0, 0)"},Nd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,T=n.forceCSS,y=parseFloat(a),M=parseFloat(o),A,w,b,C,x;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Tr,l*=Tr,A=Math.cos(c)*h,w=Math.sin(c)*h,b=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(u*=Tr,x=Math.tan(l-u),x=Math.sqrt(1+x*x),b*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),A*=x,w*=x)),A=ve(A),w=ve(w),b=ve(b),C=ve(C)):(A=h,C=f,w=b=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=yi(p,"x",a,"px"),M=yi(p,"y",o,"px")),(g||_||m||d)&&(y=ve(y+g-(g*A+_*b)+m),M=ve(M+_-(g*w+_*C)+d)),(i||s)&&(x=p.getBBox(),y=ve(y+i/100*x.width),M=ve(M+s/100*x.height)),x="matrix("+A+","+w+","+b+","+C+","+y+","+M+")",p.setAttribute("transform",x),T&&(p.style[fe]=x)},Fd=function(t,e,n,i,s){var a=360,o=Re(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Ni:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*Tc)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*Tc)%a-~~(l/a)*a)),t._pt=f=new qe(t._pt,e,n,i,l,vd),f.e=u,f.u="deg",t._props.push(n),f},Dc=function(t,e){for(var n in e)t[n]=e[n];return t},Od=function(t,e,n){var i=Dc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,p,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[fe]=e,o=fs(n,1),Ei(n,fe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[fe],a[fe]=e,o=fs(n,1),a[fe]=l);for(c in ni)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(p=Ie(l),g=Ie(u),h=p!==g?yi(n,c,l,g):parseFloat(l),f=parseFloat(u),t._pt=new qe(t._pt,o,c,h,f-h,Uo),t._pt.u=g||0,t._props.push(c));Dc(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});xa[t>1?"border"+r:r]=function(o,c,l,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Zn(o,g,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(c,p,h)}});var Ph={name:"css",register:No,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,u,h,f,p,g,_,m,d,T,y,M,A,w,b,C,x;Gl||No(),this.styles=this.styles||yh(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(en[_]&&dh(_,e,n,i,t,s)))){if(p=typeof u,g=xa[_],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=os(u)),g)g(this,t,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",_i.lastIndex=0,_i.test(l)||(m=Ie(l),d=Ie(u),d?m!==d&&(l=yi(t,_,l,d)+d):m&&(u+=m)),this.add(o,"setProperty",l,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,t,s):c[_],Re(l)&&~l.indexOf("random(")&&(l=os(l)),Ie(l+"")||l==="auto"||(l+=on.units[_]||Ie(Zn(t,_))||""),(l+"").charAt(1)==="="&&(l=Zn(t,_))):l=Zn(t,_),f=parseFloat(l),T=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),h=parseFloat(u),_ in zn&&(_==="autoAlpha"&&(f===1&&Zn(t,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,o.visibility),pi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in ni,y){if(this.styles.save(_),x=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=an(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=u,u=an(t,"perspective"),S?t.style.perspective=S:Ei(t,"perspective")}h=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||fs(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new qe(this._pt,o,fe,0,1,A.renderTransform,A,0,-1),M.dep=1),_==="scale")this._pt=new qe(this._pt,A,"scaleY",A.scaleY,(T?Er(A.scaleY,T+h):h)-A.scaleY||0,Uo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Ye,0,o[Ye]),u=Ld(u),A.svg?Fo(t,u,0,w,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==A.zOrigin&&pi(this,A,"zOrigin",A.zOrigin,d),pi(this,o,_,Ma(l),Ma(u)));continue}else if(_==="svgOrigin"){Fo(t,u,1,w,0,this);continue}else if(_ in wh){Fd(this,A,_,f,T?Er(f,T+u):u);continue}else if(_==="smoothOrigin"){pi(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){Od(this,u,t);continue}}else _ in o||(_=Dr(_)||_);if(y||(h||h===0)&&(f||f===0)&&!gd.test(u)&&_ in o)m=(l+"").substr((f+"").length),h||(h=0),d=Ie(u)||(_ in on.units?on.units[_]:m),m!==d&&(f=yi(t,_,l,d)),this._pt=new qe(this._pt,y?A:o,_,f,(T?Er(f,T+h):h)-f,!y&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Sd:Uo),this._pt.u=d||0,y&&x!==u?(this._pt.b=l,this._pt.e=x,this._pt.r=Md):m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=xd);else if(_ in o)Dd.call(this,t,_,l,T?T+u:u);else if(_ in t)this.add(t,_,l||t[_],T?T+u:u,i,s);else if(_!=="parseTransform"){Ul(_,u);continue}y||(_ in o?C.push(_,0,o[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,l||t[_])),a.push(_)}}b&&vh(this)},render:function(t,e){if(e.tween._time||!Wl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Zn,aliases:zn,getSetter:function(t,e,n){var i=zn[e];return i&&i.indexOf(",")<0&&(e=i),e in ni&&e!==Ye&&(t._gsap.x||Zn(t,"x"))?n&&yc===n?e==="scale"?bd:Td:(yc=n||{})&&(e==="scale"?Ad:wd):t.style&&!Pl(t.style[e])?Ed:~e.indexOf("-")?yd:Vl(t,e)},core:{_removeProperty:Ei,_getMatrix:ql}};$e.utils.checkPrefix=Dr;$e.core.getStyleSaver=yh;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){ni[s]=1});Xe(t,function(s){on.units[s]="deg",wh[s]=1}),zn[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");zn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});$e.registerPlugin(Ph);var gn=$e.registerPlugin(Ph)||$e;gn.core.Tween;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yl="180",Bd=0,Lc=1,zd=2,Dh=1,kd=2,Kn=3,Ti=0,Ke=1,An=2,gi=0,br=1,Sa=2,Uc=3,Ic=4,Vd=5,Bi=100,Hd=101,Gd=102,Wd=103,Xd=104,qd=200,Yd=201,Kd=202,$d=203,Oo=204,Bo=205,Zd=206,jd=207,Jd=208,Qd=209,tp=210,ep=211,np=212,ip=213,rp=214,zo=0,ko=1,Vo=2,Lr=3,Ho=4,Go=5,Wo=6,Xo=7,Lh=0,sp=1,ap=2,vi=0,op=1,lp=2,cp=3,up=4,hp=5,fp=6,dp=7,Uh=300,Ur=301,Ir=302,qo=303,Yo=304,Ua=306,Ko=1e3,Vi=1001,$o=1002,ln=1003,pp=1004,Ds=1005,Rn=1006,qa=1007,Hi=1008,ii=1009,Ih=1010,Nh=1011,ds=1012,Kl=1013,Ji=1014,jn=1015,Es=1016,$l=1017,Zl=1018,ps=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,Cn=1023,ms=1026,_s=1027,kh=1028,jl=1029,Vh=1030,Jl=1031,Ql=1033,oa=33776,la=33777,ca=33778,ua=33779,Zo=35840,jo=35841,Jo=35842,Qo=35843,tl=36196,el=37492,nl=37496,il=37808,rl=37809,sl=37810,al=37811,ol=37812,ll=37813,cl=37814,ul=37815,hl=37816,fl=37817,dl=37818,pl=37819,ml=37820,_l=37821,gl=36492,vl=36494,xl=36495,Ml=36283,Sl=36284,El=36285,yl=36286,mp=3200,_p=3201,gp=0,vp=1,hi="",He="srgb",Nr="srgb-linear",Ea="linear",te="srgb",ir=7680,Nc=519,xp=512,Mp=513,Sp=514,Hh=515,Ep=516,yp=517,Tp=518,bp=519,Fc=35044,Oc="300 es",kn=2e3,ya=2001;class Br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const ns=Math.PI/180,gs=180/Math.PI;function zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Gt(r,t,e){return Math.max(t,Math.min(e,r))}function tc(r,t){return(r%t+t)%t}function Ap(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function wp(r,t,e){return r!==t?(e-r)/(t-r):0}function is(r,t,e){return(1-e)*r+e*t}function Rp(r,t,e,n){return is(r,t,1-Math.exp(-e*n))}function Cp(r,t=1){return t-Math.abs(tc(r,t*2)-t)}function Pp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Dp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Lp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Up(r,t){return r+Math.random()*(t-r)}function Ip(r){return r*(.5-Math.random())}function Np(r){r!==void 0&&(Bc=r);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fp(r){return r*ns}function Op(r){return r*gs}function Bp(r){return(r&r-1)===0&&r!==0}function zp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function kp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vp(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":r.set(o*u,c*h,c*f,o*l);break;case"YZY":r.set(c*f,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*f,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*p,o*l);break;case"YXY":r.set(c*p,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Oe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ya={DEG2RAD:ns,RAD2DEG:gs,generateUUID:zr,clamp:Gt,euclideanModulo:tc,mapLinear:Ap,inverseLerp:wp,lerp:is,damp:Rp,pingpong:Cp,smoothstep:Pp,smootherstep:Dp,randInt:Lp,randFloat:Up,randFloatSpread:Ip,seededRandom:Np,degToRad:Fp,radToDeg:Op,isPowerOfTwo:Bp,ceilPowerOfTwo:zp,floorPowerOfTwo:kp,setQuaternionFromProperEuler:Vp,normalize:Oe,denormalize:vr};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-o;const d=c*f+l*p+u*g+h*_,T=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,d*T);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const M=o*T;if(c=c*m+f*M,l=l*m+p*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-o*p,t[e+2]=l*g+u*p+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),f=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new k,zc=new ys;class Bt{constructor(t,e,n,i,s,a,o,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],T=i[1],y=i[4],M=i[7],A=i[2],w=i[5],b=i[8];return s[0]=a*_+o*T+c*A,s[3]=a*m+o*y+c*w,s[6]=a*d+o*M+c*b,s[1]=l*_+u*T+h*A,s[4]=l*m+u*y+h*w,s[7]=l*d+u*M+h*b,s[2]=f*_+p*T+g*A,s[5]=f*m+p*y+g*w,s[8]=f*d+p*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*s,p=l*s-a*c,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(u*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($a.makeScale(t,e)),this}rotate(t){return this.premultiply($a.makeRotation(-t)),this}translate(t,e){return this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new Bt;function Gh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hp(){const r=vs("canvas");return r.style.display="block",r}const kc={};function xs(r){r in kc||(kc[r]=!0,console.warn(r))}function Gp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Vc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===te&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(i.r=Ar(i.r),i.g=Ar(i.g),i.b=Ar(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?Ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Nr]:{primaries:t,whitePoint:n,transfer:Ea,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),r}const $t=Wp();function Jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rr;class Xp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rr===void 0&&(rr=vs("canvas")),rr.width=t.width,rr.height=t.height;const i=rr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=rr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Jn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qp=0;class ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Za(i[a].image)):s.push(Za(i[a]))}else s=Za(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yp=0;const ja=new k;class Pe extends Br{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Vi,i=Vi,s=Rn,a=Hi,o=Cn,c=ii,l=Pe.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=zr(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ko:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ko:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Uh;Pe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,i=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(p+1)/2,A=(d+1)/2,w=(u+f)/4,b=(h+_)/4,C=(g+m)/4;return y>M&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=b/s,i=C/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kp extends Br{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Pe(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ec(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Kp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wh extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $p extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(t.matrixWorld),this.union(Ls)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),Us.subVectors(this.max,Wr),sr.subVectors(t.a,Wr),ar.subVectors(t.b,Wr),or.subVectors(t.c,Wr),si.subVectors(ar,sr),ai.subVectors(or,ar),Ci.subVectors(sr,or);let e=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Ci.z,Ci.y,si.z,0,-si.x,ai.z,0,-ai.x,Ci.z,0,-Ci.x,-si.y,si.x,0,-ai.y,ai.x,0,-Ci.y,Ci.x,0];return!Ja(e,sr,ar,or,Us)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,sr,ar,or,Us))?!1:(Is.crossVectors(si,ai),e=[Is.x,Is.y,Is.z],Ja(e,sr,ar,or,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,Ls=new Ts,sr=new k,ar=new k,or=new k,si=new k,ai=new k,Ci=new k,Wr=new k,Us=new k,Is=new k,Pi=new k;function Ja(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Pi.fromArray(r,s);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Zp=new Ts,Xr=new k,Qa=new k;class bs{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);const e=Xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(Qa)),this.expandByPoint(Xr.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Wn=new k,to=new k,Ns=new k,oi=new k,eo=new k,Fs=new k,no=new k;class Ia{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){to.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(to);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ns),o=oi.dot(this.direction),c=-oi.dot(Ns),l=oi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(to).addScaledVector(Ns,f),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,i,s){eo.subVectors(e,t),Fs.subVectors(n,t),no.crossVectors(eo,Fs);let a=this.direction.dot(no),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);const c=o*this.direction.dot(Fs.crossVectors(oi,Fs));if(c<0)return null;const l=o*this.direction.dot(eo.cross(oi));if(l<0||c+l>a)return null;const u=-o*oi.dot(no);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,s,a,o,c,l,u,h,f,p,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,u,h,f,p,g,_,m)}set(t,e,n,i,s,a,o,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/lr.setFromMatrixColumn(t,0).length(),s=1/lr.setFromMatrixColumn(t,1).length(),a=1/lr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f-_*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,_=o*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jp,t,Jp)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),li.crossVectors(n,Qe),li.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),li.crossVectors(n,Qe)),li.normalize(),Os.crossVectors(Qe,li),i[0]=li.x,i[4]=Os.x,i[8]=Qe.x,i[1]=li.y,i[5]=Os.y,i[9]=Qe.y,i[2]=li.z,i[6]=Os.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],T=n[3],y=n[7],M=n[11],A=n[15],w=i[0],b=i[4],C=i[8],x=i[12],S=i[1],D=i[5],F=i[9],z=i[13],W=i[2],X=i[6],G=i[10],Y=i[14],B=i[3],st=i[7],ct=i[11],gt=i[15];return s[0]=a*w+o*S+c*W+l*B,s[4]=a*b+o*D+c*X+l*st,s[8]=a*C+o*F+c*G+l*ct,s[12]=a*x+o*z+c*Y+l*gt,s[1]=u*w+h*S+f*W+p*B,s[5]=u*b+h*D+f*X+p*st,s[9]=u*C+h*F+f*G+p*ct,s[13]=u*x+h*z+f*Y+p*gt,s[2]=g*w+_*S+m*W+d*B,s[6]=g*b+_*D+m*X+d*st,s[10]=g*C+_*F+m*G+d*ct,s[14]=g*x+_*z+m*Y+d*gt,s[3]=T*w+y*S+M*W+A*B,s[7]=T*b+y*D+M*X+A*st,s[11]=T*C+y*F+M*G+A*ct,s[15]=T*x+y*z+M*Y+A*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*c*h-i*l*h-s*o*f+n*l*f+i*o*p-n*c*p)+_*(+e*c*p-e*l*f+s*a*f-i*a*p+i*l*u-s*c*u)+m*(+e*l*h-e*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+d*(-i*o*u-e*c*h+e*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=h*m*l-_*f*l+_*c*p-o*m*p-h*c*d+o*f*d,y=g*f*l-u*m*l-g*c*p+a*m*p+u*c*d-a*f*d,M=u*_*l-g*h*l+g*o*p-a*_*p-u*o*d+a*h*d,A=g*h*c-u*_*c-g*o*f+a*_*f+u*o*m-a*h*m,w=e*T+n*y+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=T*b,t[1]=(_*f*s-h*m*s-_*i*p+n*m*p+h*i*d-n*f*d)*b,t[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*d+n*c*d)*b,t[3]=(h*c*s-o*f*s-h*i*l+n*f*l+o*i*p-n*c*p)*b,t[4]=y*b,t[5]=(u*m*s-g*f*s+g*i*p-e*m*p-u*i*d+e*f*d)*b,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*d-e*c*d)*b,t[7]=(a*f*s-u*c*s+u*i*l-e*f*l-a*i*p+e*c*p)*b,t[8]=M*b,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*d-e*h*d)*b,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*d+e*o*d)*b,t[11]=(u*o*s-a*h*s-u*n*l+e*h*l+a*n*p-e*o*p)*b,t[12]=A*b,t[13]=(u*_*i-g*h*i+g*n*f-e*_*f-u*n*m+e*h*m)*b,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*c-e*h*c-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,h=o+o,f=s*l,p=s*u,g=s*h,_=a*u,m=a*h,d=o*h,T=c*l,y=c*u,M=c*h,A=n.x,w=n.y,b=n.z;return i[0]=(1-(_+d))*A,i[1]=(p+M)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-M)*w,i[5]=(1-(f+d))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+y)*b,i[9]=(m-T)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=lr.set(i[0],i[1],i[2]).length();const a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);const l=1/s,u=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=kn,c=!1){const l=this.elements,u=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===kn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ya)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=kn,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===kn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ya)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const lr=new k,yn=new me,jp=new k(0,0,0),Jp=new k(1,1,1),li=new k,Os=new k,Qe=new k,Gc=new me,Wc=new ys;class ri{constructor(t=0,e=0,n=0,i=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qp=0;const Xc=new k,cr=new ys,Xn=new me,Bs=new k,qr=new k,tm=new k,em=new ys,qc=new k(1,0,0),Yc=new k(0,1,0),Kc=new k(0,0,1),$c={type:"added"},nm={type:"removed"},ur={type:"childadded",child:null},io={type:"childremoved",child:null};class ke extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new k,e=new ri,n=new ys,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Bt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,e){return cr.setFromAxisAngle(t,e),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(qr,Bs,this.up):Xn.lookAt(Bs,qr,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Xn),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),ur.child=t,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new k(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new k,qn=new k,ro=new k,Yn=new k,hr=new k,fr=new k,Zc=new k,so=new k,ao=new k,oo=new k,lo=new xe,co=new xe,uo=new xe;class wn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Tn.subVectors(i,e),qn.subVectors(n,e),ro.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(qn),c=Tn.dot(ro),l=qn.dot(qn),u=qn.dot(ro),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return lo.setScalar(0),co.setScalar(0),uo.setScalar(0),lo.fromBufferAttribute(t,e),co.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(lo,s.x),a.addScaledVector(co,s.y),a.addScaledVector(uo,s.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),qn.subVectors(t,e),Tn.cross(qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;hr.subVectors(i,n),fr.subVectors(s,n),so.subVectors(t,n);const c=hr.dot(so),l=fr.dot(so);if(c<=0&&l<=0)return e.copy(n);ao.subVectors(t,i);const u=hr.dot(ao),h=fr.dot(ao);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(hr,a);oo.subVectors(t,s);const p=hr.dot(oo),g=fr.dot(oo);if(g>=0&&p<=g)return e.copy(s);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(fr,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Zc.subVectors(s,i),o=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(Zc,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(hr,a).addScaledVector(fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ho(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=tc(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ho(a,s,t+1/3),this.g=ho(a,s,t),this.b=ho(a,s,t-1/3)}return $t.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return $t.workingToColorSpace(Ue.copy(this),t),Math.round(Gt(Ue.r*255,0,255))*65536+Math.round(Gt(Ue.g*255,0,255))*256+Math.round(Gt(Ue.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,i=Ue.g,s=Ue.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=He){$t.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,i=Ue.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(zs);const n=is(ci.h,zs.h,e),i=is(ci.s,zs.s,e),s=is(ci.l,zs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Zt;Zt.NAMES=Xh;let im=0;class kr extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=br,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ta extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new k,ks=new jt;let rm=0;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ks.fromBufferAttribute(this,e),ks.applyMatrix3(t),this.setXY(e,ks.x,ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class qh extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yh extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xi extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let sm=0;const pn=new me,fo=new ke,dr=new k,tn=new Ts,Yr=new Ts,Ae=new k;class Un extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Yh:qh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xi(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(tn.min,Yr.min),tn.expandByPoint(Ae),Ae.addVectors(tn.max,Yr.max),tn.expandByPoint(Ae)):(tn.expandByPoint(Yr.min),tn.expandByPoint(Yr.max))}tn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),c&&(dr.fromBufferAttribute(t,l),Ae.add(dr)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new k,c[C]=new k;const l=new k,u=new k,h=new k,f=new jt,p=new jt,g=new jt,_=new k,m=new k;function d(C,x,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[C].add(_),o[x].add(_),o[S].add(_),c[C].add(m),c[x].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,x=T.length;C<x;++C){const S=T[C],D=S.start,F=S.count;for(let z=D,W=D+F;z<W;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const y=new k,M=new k,A=new k,w=new k;function b(C){A.fromBufferAttribute(i,C),w.copy(A);const x=o[C];y.copy(x),y.sub(A.multiplyScalar(A.dot(x))).normalize(),M.crossVectors(w,x);const D=M.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,x=T.length;C<x;++C){const S=T[C],D=S.start,F=S.count;for(let z=D,W=D+F;z<W;z+=3)b(t.getX(z+0)),b(t.getX(z+1)),b(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new k,s=new k,a=new k,o=new k,c=new k,l=new k,u=new k,h=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Un,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new me,Di=new Ia,Vs=new bs,Jc=new k,Hs=new k,Gs=new k,Ws=new k,po=new k,Xs=new k,Qc=new k,qs=new k;class Mn extends ke{constructor(t=new Un,e=new Ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Xs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(po.fromBufferAttribute(h,t),a?Xs.addScaledVector(po,u):Xs.addScaledVector(po.sub(e),u))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(Vs.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Vs,Jc)===null||Di.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(jc.copy(s).invert(),Di.copy(t.ray).applyMatrix4(jc),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,A=y;M<A;M+=3){const w=o.getX(M),b=o.getX(M+1),C=o.getX(M+2);i=Ys(this,d,t,n,l,u,h,w,b,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=Ys(this,a,t,n,l,u,h,T,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,A=y;M<A;M+=3){const w=M,b=M+1,C=M+2;i=Ys(this,d,t,n,l,u,h,w,b,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,y=m+1,M=m+2;i=Ys(this,a,t,n,l,u,h,T,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function am(r,t,e,n,i,s,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Ti,o),c===null)return null;qs.copy(o),qs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(qs);return l<e.near||l>e.far?null:{distance:l,point:qs.clone(),object:r}}function Ys(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,Hs),r.getVertexPosition(c,Gs),r.getVertexPosition(l,Ws);const u=am(r,t,e,n,Hs,Gs,Ws,Qc);if(u){const h=new k;wn.getBarycoord(Qc,Hs,Gs,Ws,h),i&&(u.uv=wn.getInterpolatedAttribute(i,o,c,l,h,new jt)),s&&(u.uv1=wn.getInterpolatedAttribute(s,o,c,l,h,new jt)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new k,materialIndex:0};wn.getNormal(Hs,Gs,Ws,f.normal),u.face=f,u.barycoord=h}return u}class As extends Un{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new xi(l,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(h,2));function g(_,m,d,T,y,M,A,w,b,C,x){const S=M/b,D=A/C,F=M/2,z=A/2,W=w/2,X=b+1,G=C+1;let Y=0,B=0;const st=new k;for(let ct=0;ct<G;ct++){const gt=ct*D-z;for(let Rt=0;Rt<X;Rt++){const Yt=Rt*S-F;st[_]=Yt*T,st[m]=gt*y,st[d]=W,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=w>0?1:-1,u.push(st.x,st.y,st.z),h.push(Rt/b),h.push(1-ct/C),Y+=1}}for(let ct=0;ct<C;ct++)for(let gt=0;gt<b;gt++){const Rt=f+gt+X*ct,Yt=f+gt+X*(ct+1),Ft=f+(gt+1)+X*(ct+1),Ot=f+(gt+1)+X*ct;c.push(Rt,Yt,Ot),c.push(Yt,Ft,Ot),B+=6}o.addGroup(p,B,x),p+=B,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const n=Fr(r[e]);for(const i in n)t[i]=n[i]}return t}function om(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Kh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const lm={clone:Fr,merge:Be};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,um=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=um,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $h extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new k,tu=new jt,eu=new jt;class _n extends $h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pr=-90,mr=1;class hm extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(pr,mr,t,e);i.layers=this.layers,this.add(i);const s=new _n(pr,mr,t,e);s.layers=this.layers,this.add(s);const a=new _n(pr,mr,t,e);a.layers=this.layers,this.add(a);const o=new _n(pr,mr,t,e);o.layers=this.layers,this.add(o);const c=new _n(pr,mr,t,e);c.layers=this.layers,this.add(c);const l=new _n(pr,mr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zh extends Pe{constructor(t=[],e=Ur,n,i,s,a,o,c,l,u){super(t,e,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends Qi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new As(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:gi});s.uniforms.tEquirect.value=e;const a=new Mn(i,s),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Rn),new hm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Gi extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dm={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class pm extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mm extends Pe{constructor(t=null,e=1,n=1,i,s,a,o,c,l=ln,u=ln,h,f){super(null,a,o,c,l,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _o=new k,_m=new k,gm=new Bt;class Fi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_o.subVectors(n,e).cross(_m.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gm.getNormalMatrix(t),i=this.coplanarPoint(_o).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new bs,vm=new jt(.5,.5),Ks=new k;class jh{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,a=new Fi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],T=s[12],y=s[13],M=s[14],A=s[15];if(i[0].setComponents(l-a,p-u,d-g,A-T).normalize(),i[1].setComponents(l+a,p+u,d+g,A+T).normalize(),i[2].setComponents(l+o,p+h,d+_,A+y).normalize(),i[3].setComponents(l-o,p-h,d-_,A-y).normalize(),n)i[4].setComponents(c,f,m,M).normalize(),i[5].setComponents(l-c,p-f,d-m,A-M).normalize();else if(i[4].setComponents(l-c,p-f,d-m,A-M).normalize(),e===kn)i[5].setComponents(l+c,p+f,d+m,A+M).normalize();else if(e===ya)i[5].setComponents(c,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){Li.center.set(0,0,0);const e=vm.distanceTo(t.center);return Li.radius=.7071067811865476+e,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ks.x=i.normal.x>0?t.max.x:t.min.x,Ks.y=i.normal.y>0?t.max.y:t.min.y,Ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jh extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new k,Aa=new k,nu=new me,Kr=new Ia,$s=new bs,go=new k,iu=new k;class xm extends ke{constructor(t=new Un,e=new Jh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ba.fromBufferAttribute(e,i-1),Aa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ba.distanceTo(Aa);t.setAttribute("lineDistance",new xi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,t.ray.intersectsSphere($s)===!1)return;nu.copy(i).invert(),Kr.copy(t.ray).applyMatrix4(nu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=u.getX(_),T=u.getX(_+1),y=Zs(this,t,Kr,c,d,T,_);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Zs(this,t,Kr,c,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const d=Zs(this,t,Kr,c,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Zs(this,t,Kr,c,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zs(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(ba.fromBufferAttribute(o,i),Aa.fromBufferAttribute(o,s),e.distanceSqToSegment(ba,Aa,go,iu)>n)return;go.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(go);if(!(l<t.near||l>t.far))return{distance:l,point:iu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Mm extends kr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ru=new me,Tl=new Ia,js=new bs,Js=new k;class Sm extends ke{constructor(t=new Un,e=new Mm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;ru.copy(i).invert(),Tl.copy(t.ray).applyMatrix4(ru);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Js.fromBufferAttribute(h,m),su(Js,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,_=p;g<_;g++)Js.fromBufferAttribute(h,g),su(Js,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function su(r,t,e,n,i,s,a){const o=Tl.distanceSqToPoint(r);if(o<e){const c=new k;Tl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Em extends Pe{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qh extends Pe{constructor(t,e,n=Ji,i,s,a,o=ln,c=ln,l,u=ms,h=1){if(u!==ms&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class tf extends Pe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $i extends Un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=t/o,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-a;for(let y=0;y<l;y++){const M=y*h-s;g.push(M,-T,0),_.push(0,0,1),m.push(y/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<o;T++){const y=T+l*d,M=T+l*(d+1),A=T+1+l*(d+1),w=T+1+l*d;p.push(y,M,w),p.push(M,A,w)}this.setIndex(p),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.widthSegments,t.heightSegments)}}class ym extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tm extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vo={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class bm{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Am=new bm;class ic{constructor(t){this.manager=t!==void 0?t:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ic.DEFAULT_MATERIAL_NAME="__DEFAULT";const _r=new WeakMap;class wm extends ic{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=vo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=_r.get(a);h===void 0&&(h=[],_r.set(a,h)),h.push({onLoad:e,onError:i})}return a}const o=vs("img");function c(){u(),e&&e(this);const h=_r.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}_r.delete(this),s.manager.itemEnd(t)}function l(h){u(),i&&i(h),vo.remove(`image:${t}`);const f=_r.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(h)}_r.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vo.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Rm extends ic{constructor(t){super(t)}load(t,e,n,i){const s=new Pe,a=new wm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Cm extends $h{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pm extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const au=new me;class Dm{constructor(t,e,n=0,i=1/0){this.ray=new Ia(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new nc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(au),this}intersectObject(t,e=!0,n=[]){return bl(t,this,n,e),n.sort(ou),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)bl(t[i],this,n,e);return n.sort(ou),n}}function ou(r,t){return r.distance-t.distance}function bl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)bl(s[a],t,e,!0)}}function lu(r,t,e,n){const i=Lm(n);switch(e){case Bh:return r*t;case kh:return r*t/i.components*i.byteLength;case jl:return r*t/i.components*i.byteLength;case Vh:return r*t*2/i.components*i.byteLength;case Jl:return r*t*2/i.components*i.byteLength;case zh:return r*t*3/i.components*i.byteLength;case Cn:return r*t*4/i.components*i.byteLength;case Ql:return r*t*4/i.components*i.byteLength;case oa:case la:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ca:case ua:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jo:case Qo:return Math.max(r,16)*Math.max(t,8)/4;case Zo:case Jo:return Math.max(r,8)*Math.max(t,8)/2;case tl:case el:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gl:case vl:case xl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ml:case Sl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case El:case yl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(r){switch(r){case ii:case Ih:return{byteLength:1,components:1};case ds:case Nh:case Es:return{byteLength:2,components:1};case $l:case Zl:return{byteLength:2,components:4};case Ji:case Kl:case jn:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ef(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Um(r){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,i_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,r_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,a_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u_="gl_FragColor = linearToOutputTexel( gl_FragColor );",h_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,m_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,E_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,A_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,G_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ag=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ig=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Im,alphahash_pars_fragment:Nm,alphamap_fragment:Fm,alphamap_pars_fragment:Om,alphatest_fragment:Bm,alphatest_pars_fragment:zm,aomap_fragment:km,aomap_pars_fragment:Vm,batching_pars_vertex:Hm,batching_vertex:Gm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:Km,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:t_,color_pars_vertex:e_,color_vertex:n_,common:i_,cube_uv_reflection_fragment:r_,defaultnormal_vertex:s_,displacementmap_pars_vertex:a_,displacementmap_vertex:o_,emissivemap_fragment:l_,emissivemap_pars_fragment:c_,colorspace_fragment:u_,colorspace_pars_fragment:h_,envmap_fragment:f_,envmap_common_pars_fragment:d_,envmap_pars_fragment:p_,envmap_pars_vertex:m_,envmap_physical_pars_fragment:A_,envmap_vertex:__,fog_vertex:g_,fog_pars_vertex:v_,fog_fragment:x_,fog_pars_fragment:M_,gradientmap_pars_fragment:S_,lightmap_pars_fragment:E_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:T_,lights_pars_begin:b_,lights_toon_fragment:w_,lights_toon_pars_fragment:R_,lights_phong_fragment:C_,lights_phong_pars_fragment:P_,lights_physical_fragment:D_,lights_physical_pars_fragment:L_,lights_fragment_begin:U_,lights_fragment_maps:I_,lights_fragment_end:N_,logdepthbuf_fragment:F_,logdepthbuf_pars_fragment:O_,logdepthbuf_pars_vertex:B_,logdepthbuf_vertex:z_,map_fragment:k_,map_pars_fragment:V_,map_particle_fragment:H_,map_particle_pars_fragment:G_,metalnessmap_fragment:W_,metalnessmap_pars_fragment:X_,morphinstance_vertex:q_,morphcolor_vertex:Y_,morphnormal_vertex:K_,morphtarget_pars_vertex:$_,morphtarget_vertex:Z_,normal_fragment_begin:j_,normal_fragment_maps:J_,normal_pars_fragment:Q_,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:sg,iridescence_pars_fragment:ag,opaque_fragment:og,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:_g,shadowmap_vertex:gg,shadowmask_pars_fragment:vg,skinbase_vertex:xg,skinning_pars_vertex:Mg,skinning_vertex:Sg,skinnormal_vertex:Eg,specularmap_fragment:yg,specularmap_pars_fragment:Tg,tonemapping_fragment:bg,tonemapping_pars_fragment:Ag,transmission_fragment:wg,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Dg,worldpos_vertex:Lg,background_vert:Ug,background_frag:Ig,backgroundCube_vert:Ng,backgroundCube_frag:Fg,cube_vert:Og,cube_frag:Bg,depth_vert:zg,depth_frag:kg,distanceRGBA_vert:Vg,distanceRGBA_frag:Hg,equirect_vert:Gg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:Kg,meshlambert_vert:$g,meshlambert_frag:Zg,meshmatcap_vert:jg,meshmatcap_frag:Jg,meshnormal_vert:Qg,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:r0,meshtoon_vert:s0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:u0,sprite_vert:h0,sprite_frag:f0},ht={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},On={basic:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Zt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Be([ht.points,ht.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Be([ht.common,ht.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Be([ht.sprite,ht.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Be([ht.common,ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Be([ht.lights,ht.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};On.physical={uniforms:Be([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Qs={r:0,b:0,g:0},Ui=new ri,d0=new me;function p0(r,t,e,n,i,s,a){const o=new Zt(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function _(y){let M=!1;const A=g(y);A===null?d(o,c):A&&A.isColor&&(d(A,1),M=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,M){const A=g(M);A&&(A.isCubeTexture||A.mapping===Ua)?(u===void 0&&(u=new Mn(new As(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Fr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ui.copy(M.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Ui)),u.material.toneMapped=$t.getTransfer(A.colorSpace)!==te,(h!==A||f!==A.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mn(new $i(2,2),new Hn({name:"BackgroundMaterial",uniforms:Fr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=$t.getTransfer(A.colorSpace)!==te,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,h=A,f=A.version,p=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,M){y.getRGB(Qs,Kh(r)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,M,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),c=M,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(o,c)},render:_,addToRenderList:m,dispose:T}}function m0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(S,D,F,z,W){let X=!1;const G=h(z,F,D);s!==G&&(s=G,l(s.object)),X=p(S,z,F,W),X&&g(S,z,F,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(S,D,F,z),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,D,F){const z=F.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let X=W[D.id];X===void 0&&(X={},W[D.id]=X);let G=X[z];return G===void 0&&(G=f(c()),X[z]=G),G}function f(S){const D=[],F=[],z=[];for(let W=0;W<e;W++)D[W]=0,F[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,D,F,z){const W=s.attributes,X=D.attributes;let G=0;const Y=F.getAttributes();for(const B in Y)if(Y[B].location>=0){const ct=W[B];let gt=X[B];if(gt===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(gt=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(gt=S.instanceColor)),ct===void 0||ct.attribute!==gt||gt&&ct.data!==gt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function g(S,D,F,z){const W={},X=D.attributes;let G=0;const Y=F.getAttributes();for(const B in Y)if(Y[B].location>=0){let ct=X[B];ct===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor));const gt={};gt.attribute=ct,ct&&ct.data&&(gt.data=ct.data),W[B]=gt,G++}s.attributes=W,s.attributesNum=G,s.index=z}function _(){const S=s.newAttributes;for(let D=0,F=S.length;D<F;D++)S[D]=0}function m(S){d(S,0)}function d(S,D){const F=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;F[S]=1,z[S]===0&&(r.enableVertexAttribArray(S),z[S]=1),W[S]!==D&&(r.vertexAttribDivisor(S,D),W[S]=D)}function T(){const S=s.newAttributes,D=s.enabledAttributes;for(let F=0,z=D.length;F<z;F++)D[F]!==S[F]&&(r.disableVertexAttribArray(F),D[F]=0)}function y(S,D,F,z,W,X,G){G===!0?r.vertexAttribIPointer(S,D,F,W,X):r.vertexAttribPointer(S,D,F,z,W,X)}function M(S,D,F,z){_();const W=z.attributes,X=F.getAttributes(),G=D.defaultAttributeValues;for(const Y in X){const B=X[Y];if(B.location>=0){let st=W[Y];if(st===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ct=st.normalized,gt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;const Yt=Rt.buffer,Ft=Rt.type,Ot=Rt.bytesPerElement,$=Ft===r.INT||Ft===r.UNSIGNED_INT||st.gpuType===Kl;if(st.isInterleavedBufferAttribute){const et=st.data,_t=et.stride,Ct=st.offset;if(et.isInstancedInterleavedBuffer){for(let yt=0;yt<B.locationSize;yt++)d(B.location+yt,et.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let yt=0;yt<B.locationSize;yt++)m(B.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let yt=0;yt<B.locationSize;yt++)y(B.location+yt,gt/B.locationSize,Ft,ct,_t*Ot,(Ct+gt/B.locationSize*yt)*Ot,$)}else{if(st.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)d(B.location+et,st.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let et=0;et<B.locationSize;et++)m(B.location+et);r.bindBuffer(r.ARRAY_BUFFER,Yt);for(let et=0;et<B.locationSize;et++)y(B.location+et,gt/B.locationSize,Ft,ct,gt*Ot,gt/B.locationSize*et*Ot,$)}}else if(G!==void 0){const ct=G[Y];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(B.location,ct);break;case 3:r.vertexAttrib3fv(B.location,ct);break;case 4:r.vertexAttrib4fv(B.location,ct);break;default:r.vertexAttrib1fv(B.location,ct)}}}}T()}function A(){C();for(const S in n){const D=n[S];for(const F in D){const z=D[F];for(const W in z)u(z[W].object),delete z[W];delete D[F]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const F in D){const z=D[F];for(const W in z)u(z[W].object),delete z[W];delete D[F]}delete n[S.id]}function b(S){for(const D in n){const F=n[D];if(F[S.id]===void 0)continue;const z=F[S.id];for(const W in z)u(z[W].object),delete z[W];delete F[S.id]}}function C(){x(),a=!0,s!==i&&(s=i,l(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function _0(r,t,e){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function g0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==Cn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const C=b===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ii&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==jn&&!C)}function c(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function v0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Fi,o=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:n,y=T*4;let M=d.clippingState||null;c.value=M,M=u(g,f,y,p);for(let A=0;A!==y;++A)M[A]=e[A];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,M=p;y!==_;++y,M+=4)a.copy(h[y]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function x0(r){let t=new WeakMap;function e(a,o){return o===qo?a.mapping=Ur:o===Yo&&(a.mapping=Ir),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Yo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fm(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Sr=4,cu=[.125,.215,.35,.446,.526,.582],zi=20,xo=new Cm,uu=new Zt;let Mo=null,So=0,Eo=0,yo=!1;const Oi=(1+Math.sqrt(5))/2,gr=1/Oi,hu=[new k(-Oi,gr,0),new k(Oi,gr,0),new k(-gr,0,Oi),new k(gr,0,Oi),new k(0,Oi,-gr),new k(0,Oi,gr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],M0=new k;class fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=M0}=s;Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,So,Eo),this._renderer.xr.enabled=yo,t.scissorTest=!1,ta(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),So=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Es,format:Cn,colorSpace:Nr,depthBuffer:!1},i=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(s)),this._blurMaterial=E0(s,t,e)}return i}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,i,s){const c=new _n(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(uu),h.toneMapping=vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new Ta({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),m=new Mn(new As,_);let d=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,d=!0):(_.color.copy(uu),d=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):M===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const A=this._cubeSize;ta(i,M*A,y>2?A:0,A,A),h.setRenderTarget(i),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ur||t.mapping===Ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ta(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hu[(i-s-1)%hu.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mn(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const d=[];let T=0;for(let b=0;b<zi;++b){const C=b/_,x=Math.exp(-C*C/2);d.push(x),b===0?T+=x:b<m&&(T+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const M=this._sizeLods[i],A=3*M*(i>y-Sr?i-y+Sr:0),w=4*(this._cubeSize-M);ta(e,A,w,3*M,2*M),c.setRenderTarget(e),c.render(h,xo)}}function S0(r){const t=[],e=[],n=[];let i=r;const s=r-Sr+1+cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Sr?c=cu[a-r+Sr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,C=w>2?0:-1,x=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];T.set(x,_*g*w),y.set(f,m*g*w);const S=[w,w,w,w,w,w];M.set(S,d*g*w)}const A=new Un;A.setAttribute("position",new cn(T,_)),A.setAttribute("uv",new cn(y,m)),A.setAttribute("faceIndex",new cn(M,d)),t.push(A),i>Sr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(r,t,e){const n=new Qi(r,t,e);return n.texture.mapping=Ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function E0(r,t,e){const n=new Float32Array(zi),i=new k(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function pu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function mu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===Yo,u=c===Ur||c===Ir;if(l||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new fu(r)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new fu(r)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function T0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b0(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const p in f)t.update(f[p],r.ARRAY_BUFFER)}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,M=T.length;y<M;y+=3){const A=T[y+0],w=T[y+1],b=T[y+2];f.push(A,w,w,b,b,A)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,M=T.length/3-1;y<M;y+=3){const A=y+0,w=y+1,b=y+2;f.push(A,w,w,b,b,A)}}else return;const m=new(Gh(f)?Yh:qh)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function A0(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){r.drawElements(n,p,s,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function w0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function R0(r,t,e){const n=new WeakMap,i=new xe;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let A=o.attributes.position.count*M,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const b=new Float32Array(A*w*4*h),C=new Wh(b,A,w,h);C.type=jn,C.needsUpdate=!0;const x=M*4;for(let D=0;D<h;D++){const F=d[D],z=T[D],W=y[D],X=A*w*4*D;for(let G=0;G<F.count;G++){const Y=G*x;g===!0&&(i.fromBufferAttribute(F,G),b[X+Y+0]=i.x,b[X+Y+1]=i.y,b[X+Y+2]=i.z,b[X+Y+3]=0),_===!0&&(i.fromBufferAttribute(z,G),b[X+Y+4]=i.x,b[X+Y+5]=i.y,b[X+Y+6]=i.z,b[X+Y+7]=0),m===!0&&(i.fromBufferAttribute(W,G),b[X+Y+8]=i.x,b[X+Y+9]=i.y,b[X+Y+10]=i.z,b[X+Y+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:C,size:new jt(A,w)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function C0(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const nf=new Pe,_u=new Qh(1,1),rf=new Wh,sf=new $p,af=new Zh,gu=[],vu=[],xu=new Float32Array(16),Mu=new Float32Array(9),Su=new Float32Array(4);function Vr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=gu[i];if(s===void 0&&(s=new Float32Array(i),gu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Te(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Na(r,t){let e=vu[t];e===void 0&&(e=new Int32Array(t),vu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function P0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function D0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2fv(this.addr,t),Te(e,t)}}function L0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;r.uniform3fv(this.addr,t),Te(e,t)}}function U0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4fv(this.addr,t),Te(e,t)}}function I0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;Su.set(n),r.uniformMatrix2fv(this.addr,!1,Su),Te(e,n)}}function N0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;Mu.set(n),r.uniformMatrix3fv(this.addr,!1,Mu),Te(e,n)}}function F0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;xu.set(n),r.uniformMatrix4fv(this.addr,!1,xu),Te(e,n)}}function O0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function B0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2iv(this.addr,t),Te(e,t)}}function z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3iv(this.addr,t),Te(e,t)}}function k0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4iv(this.addr,t),Te(e,t)}}function V0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function H0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2uiv(this.addr,t),Te(e,t)}}function G0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3uiv(this.addr,t),Te(e,t)}}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4uiv(this.addr,t),Te(e,t)}}function X0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(_u.compareFunction=Hh,s=_u):s=nf,e.setTexture2D(t||s,i)}function q0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sf,i)}function Y0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||af,i)}function K0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rf,i)}function $0(r){switch(r){case 5126:return P0;case 35664:return D0;case 35665:return L0;case 35666:return U0;case 35674:return I0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return O0;case 35667:case 35671:return B0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return V0;case 36294:return H0;case 36295:return G0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}function Z0(r,t){r.uniform1fv(this.addr,t)}function j0(r,t){const e=Vr(t,this.size,2);r.uniform2fv(this.addr,e)}function J0(r,t){const e=Vr(t,this.size,3);r.uniform3fv(this.addr,e)}function Q0(r,t){const e=Vr(t,this.size,4);r.uniform4fv(this.addr,e)}function tv(r,t){const e=Vr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ev(r,t){const e=Vr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nv(r,t){const e=Vr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function iv(r,t){r.uniform1iv(this.addr,t)}function rv(r,t){r.uniform2iv(this.addr,t)}function sv(r,t){r.uniform3iv(this.addr,t)}function av(r,t){r.uniform4iv(this.addr,t)}function ov(r,t){r.uniform1uiv(this.addr,t)}function lv(r,t){r.uniform2uiv(this.addr,t)}function cv(r,t){r.uniform3uiv(this.addr,t)}function uv(r,t){r.uniform4uiv(this.addr,t)}function hv(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||nf,s[a])}function fv(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||sf,s[a])}function dv(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||af,s[a])}function pv(r,t,e){const n=this.cache,i=t.length,s=Na(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Te(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rf,s[a])}function mv(r){switch(r){case 5126:return Z0;case 35664:return j0;case 35665:return J0;case 35666:return Q0;case 35674:return tv;case 35675:return ev;case 35676:return nv;case 5124:case 35670:return iv;case 35667:case 35671:return rv;case 35668:case 35672:return sv;case 35669:case 35673:return av;case 5125:return ov;case 36294:return lv;case 36295:return cv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return dv;case 36289:case 36303:case 36311:case 36292:return pv}}class _v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}}class gv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mv(e.type)}}class vv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Eu(r,t){r.seq.push(t),r.map[t.id]=t}function xv(r,t,e){const n=r.name,i=n.length;for(To.lastIndex=0;;){const s=To.exec(n),a=To.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Eu(e,l===void 0?new _v(o,r,t):new gv(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new vv(o),Eu(e,h)),e=h}}}class ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);xv(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function yu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Mv=37297;let Sv=0;function Ev(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Tu=new Bt;function yv(r){$t._getMatrix(Tu,$t.workingColorSpace,r);const t=`mat3( ${Tu.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(r)){case Ea:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function bu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Ev(r.getShaderSource(t),o)}else return s}function Tv(r,t){const e=yv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bv(r,t){let e;switch(t){case op:e="Linear";break;case lp:e="Reinhard";break;case cp:e="Cineon";break;case up:e="ACESFilmic";break;case fp:e="AgX";break;case dp:e="Neutral";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ea=new k;function Av(){$t.getLuminanceCoefficients(ea);const r=ea.x.toFixed(4),t=ea.y.toFixed(4),e=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function Rv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function jr(r){return r!==""}function Au(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(r){return r.replace(Pv,Lv)}const Dv=new Map;function Lv(r,t){let e=zt[t];if(e===void 0){const n=Dv.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Al(e)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(r){return r.replace(Uv,Iv)}function Iv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===kd?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Fv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Ir:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ov(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ir:t="ENVMAP_MODE_REFRACTION";break}return t}function Bv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case sp:t="ENVMAP_BLENDING_MIX";break;case ap:t="ENVMAP_BLENDING_ADD";break}return t}function zv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function kv(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Nv(e),l=Fv(e),u=Ov(e),h=Bv(e),f=zv(e),p=wv(e),g=Rv(s),_=i.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jr).join(`
`),d.length>0&&(d+=`
`)):(m=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),d=[Cu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?zt.tonemapping_pars_fragment:"",e.toneMapping!==vi?bv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Tv("linearToOutputTexel",e.outputColorSpace),Av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jr).join(`
`)),a=Al(a),a=Au(a,e),a=wu(a,e),o=Al(o),o=Au(o,e),o=wu(o,e),a=Ru(a),o=Ru(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=T+m+a,M=T+d+o,A=yu(i,i.VERTEX_SHADER,y),w=yu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(D){if(r.debug.checkShaderErrors){const F=i.getProgramInfoLog(_)||"",z=i.getShaderInfoLog(A)||"",W=i.getShaderInfoLog(w)||"",X=F.trim(),G=z.trim(),Y=W.trim();let B=!0,st=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const ct=bu(i,A,"vertex"),gt=bu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ct+`
`+gt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||Y==="")&&(st=!1);st&&(D.diagnostics={runnable:B,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:d}})}i.deleteShader(A),i.deleteShader(w),C=new ha(i,_),x=Cv(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let x;this.getAttributes=function(){return x===void 0&&b(this),x};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Mv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let Vv=0;class Hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gv(t),e.set(t,n)),n}}class Gv{constructor(t){this.id=Vv++,this.code=t,this.usedTimes=0}}function Wv(r,t,e,n,i,s,a){const o=new nc,c=new Hv,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,S,D,F,z){const W=F.fog,X=z.geometry,G=x.isMeshStandardMaterial?F.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),B=Y&&Y.mapping===Ua?Y.image.height:null,st=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=ct!==void 0?ct.length:0;let Rt=0;X.morphAttributes.position!==void 0&&(Rt=1),X.morphAttributes.normal!==void 0&&(Rt=2),X.morphAttributes.color!==void 0&&(Rt=3);let Yt,Ft,Ot,$;if(st){const Vt=On[st];Yt=Vt.vertexShader,Ft=Vt.fragmentShader}else Yt=x.vertexShader,Ft=x.fragmentShader,c.update(x),Ot=c.getVertexShaderID(x),$=c.getFragmentShaderID(x);const et=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Ct=z.isInstancedMesh===!0,yt=z.isBatchedMesh===!0,kt=!!x.map,_e=!!x.matcap,P=!!Y,ne=!!x.aoMap,Lt=!!x.lightMap,bt=!!x.bumpMap,xt=!!x.normalMap,Jt=!!x.displacementMap,Mt=!!x.emissiveMap,Nt=!!x.metalnessMap,Me=!!x.roughnessMap,oe=x.anisotropy>0,R=x.clearcoat>0,v=x.dispersion>0,O=x.iridescence>0,q=x.sheen>0,tt=x.transmission>0,L=oe&&!!x.anisotropyMap,nt=R&&!!x.clearcoatMap,j=R&&!!x.clearcoatNormalMap,ot=R&&!!x.clearcoatRoughnessMap,ft=O&&!!x.iridescenceMap,J=O&&!!x.iridescenceThicknessMap,ut=q&&!!x.sheenColorMap,Pt=q&&!!x.sheenRoughnessMap,Et=!!x.specularMap,K=!!x.specularColorMap,It=!!x.specularIntensityMap,U=tt&&!!x.transmissionMap,it=tt&&!!x.thicknessMap,lt=!!x.gradientMap,mt=!!x.alphaMap,rt=x.alphaTest>0,Z=!!x.alphaHash,pt=!!x.extensions;let At=vi;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(At=r.toneMapping);const Xt={shaderID:st,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:Ft,defines:x.defines,customVertexShaderID:Ot,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:yt,batchingColor:yt&&z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&z.instanceColor!==null,instancingMorph:Ct&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Nr,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:_e,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:B,aoMap:ne,lightMap:Lt,bumpMap:bt,normalMap:xt,displacementMap:f&&Jt,emissiveMap:Mt,normalMapObjectSpace:xt&&x.normalMapType===vp,normalMapTangentSpace:xt&&x.normalMapType===gp,metalnessMap:Nt,roughnessMap:Me,anisotropy:oe,anisotropyMap:L,clearcoat:R,clearcoatMap:nt,clearcoatNormalMap:j,clearcoatRoughnessMap:ot,dispersion:v,iridescence:O,iridescenceMap:ft,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:Et,specularColorMap:K,specularIntensityMap:It,transmission:tt,transmissionMap:U,thicknessMap:it,gradientMap:lt,opaque:x.transparent===!1&&x.blending===br&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:rt,alphaHash:Z,combine:x.combine,mapUv:kt&&_(x.map.channel),aoMapUv:ne&&_(x.aoMap.channel),lightMapUv:Lt&&_(x.lightMap.channel),bumpMapUv:bt&&_(x.bumpMap.channel),normalMapUv:xt&&_(x.normalMap.channel),displacementMapUv:Jt&&_(x.displacementMap.channel),emissiveMapUv:Mt&&_(x.emissiveMap.channel),metalnessMapUv:Nt&&_(x.metalnessMap.channel),roughnessMapUv:Me&&_(x.roughnessMap.channel),anisotropyMapUv:L&&_(x.anisotropyMap.channel),clearcoatMapUv:nt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(x.sheenRoughnessMap.channel),specularMapUv:Et&&_(x.specularMap.channel),specularColorMapUv:K&&_(x.specularColorMap.channel),specularIntensityMapUv:It&&_(x.specularIntensityMap.channel),transmissionMapUv:U&&_(x.transmissionMap.channel),thicknessMapUv:it&&_(x.thicknessMap.channel),alphaMapUv:mt&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||oe),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(kt||mt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:At,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&$t.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&$t.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===An,flipSided:x.side===Ke,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function d(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)S.push(D),S.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(T(S,x),y(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function T(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function M(x){const S=g[x.type];let D;if(S){const F=On[S];D=lm.clone(F.uniforms)}else D=x.uniforms;return D}function A(x,S){let D;for(let F=0,z=u.length;F<z;F++){const W=u[F];if(W.cacheKey===S){D=W,++D.usedTimes;break}}return D===void 0&&(D=new kv(r,S,x,s),u.push(D)),D}function w(x){if(--x.usedTimes===0){const S=u.indexOf(x);u[S]=u[u.length-1],u.pop(),x.destroy()}}function b(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:A,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:C}}function Xv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function qv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Pu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Du(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function o(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(h,f,p,g,_,m){const d=a(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||qv),n.length>1&&n.sort(f||Pu),i.length>1&&i.sort(f||Pu)}function u(){for(let h=t,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function Yv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Du,r.set(n,[a])):i>=s.length?(a=new Du,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Kv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Zt};break;case"SpotLight":e={position:new k,direction:new k,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function $v(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Zv=0;function jv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Jv(r){const t=new Kv,e=$v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const i=new k,s=new me,a=new me;function o(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,y=0,M=0,A=0,w=0,b=0;l.sort(jv);for(let x=0,S=l.length;x<S;x++){const D=l[x],F=D.color,z=D.intensity,W=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=F.r*z,h+=F.g*z,f+=F.b*z;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],z);b++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=G,p++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(F).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[_]=G;const Y=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,Y.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,D.castShadow){const B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=X,M++}_++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(F).multiplyScalar(z),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=G,m++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const Y=D.shadow,B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=G,g++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(z),G.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[d]=G,d++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==T||C.numPointShadows!==y||C.numSpotShadows!==M||C.numSpotMaps!==A||C.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=T,C.numPointShadows=y,C.numSpotShadows=M,C.numSpotMaps=A,C.numLightProbes=b,n.version=Zv++)}function c(l,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const y=l[d];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Lu(r){const t=new Jv(r),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Qv(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Lu(r),t.set(i,[o])):s>=a.length?(o=new Lu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nx(r,t,e){let n=new jh;const i=new jt,s=new jt,a=new xe,o=new ym({depthPacking:_p}),c=new Tm,l={},u=e.maxTextureSize,h={[Ti]:Ke,[Ke]:Ti,[An]:An},f=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:tx,fragmentShader:ex}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let d=this.type;this.render=function(w,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),F=r.state;F.setBlending(gi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==Kn&&this.type===Kn,W=d===Kn&&this.type!==Kn;for(let X=0,G=w.length;X<G;X++){const Y=w[X],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const st=B.getFrameExtents();if(i.multiply(st),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,B.mapSize.y=s.y)),B.map===null||z===!0||W===!0){const gt=this.type!==Kn?{minFilter:ln,magFilter:ln}:{};B.map!==null&&B.map.dispose(),B.map=new Qi(i.x,i.y,gt),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const ct=B.getViewportCount();for(let gt=0;gt<ct;gt++){const Rt=B.getViewport(gt);a.set(s.x*Rt.x,s.y*Rt.y,s.x*Rt.z,s.y*Rt.w),F.viewport(a),B.updateMatrices(Y,gt),n=B.getFrustum(),M(b,C,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Kn&&T(B,C),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(x,S,D)};function T(w,b){const C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qi(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,C,p,_,null)}function y(w,b,C,x){let S=null;const D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?c:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const F=S.uuid,z=b.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let X=W[z];X===void 0&&(X=S.clone(),W[z]=X,b.addEventListener("dispose",A)),S=X}if(S.visible=b.visible,S.wireframe=b.wireframe,x===Kn?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=r.properties.get(S);F.light=C}return S}function M(w,b,C,x,S){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=t.update(w),W=w.material;if(Array.isArray(W)){const X=z.groups;for(let G=0,Y=X.length;G<Y;G++){const B=X[G],st=W[B.materialIndex];if(st&&st.visible){const ct=y(w,st,x,S);w.onBeforeShadow(r,w,b,C,z,ct,B),r.renderBufferDirect(C,null,z,ct,w,B),w.onAfterShadow(r,w,b,C,z,ct,B)}}}else if(W.visible){const X=y(w,W,x,S);w.onBeforeShadow(r,w,b,C,z,X,null),r.renderBufferDirect(C,null,z,X,w,null),w.onAfterShadow(r,w,b,C,z,X,null)}}const F=w.children;for(let z=0,W=F.length;z<W;z++)M(F[z],b,C,x,S)}function A(w){w.target.removeEventListener("dispose",A);for(const C in l){const x=l[C],S=w.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}const ix={[zo]:ko,[Vo]:Wo,[Ho]:Xo,[Lr]:Go,[ko]:zo,[Wo]:Vo,[Xo]:Ho,[Go]:Lr};function rx(r,t){function e(){let U=!1;const it=new xe;let lt=null;const mt=new xe(0,0,0,0);return{setMask:function(rt){lt!==rt&&!U&&(r.colorMask(rt,rt,rt,rt),lt=rt)},setLocked:function(rt){U=rt},setClear:function(rt,Z,pt,At,Xt){Xt===!0&&(rt*=At,Z*=At,pt*=At),it.set(rt,Z,pt,At),mt.equals(it)===!1&&(r.clearColor(rt,Z,pt,At),mt.copy(it))},reset:function(){U=!1,lt=null,mt.set(-1,0,0,0)}}}function n(){let U=!1,it=!1,lt=null,mt=null,rt=null;return{setReversed:function(Z){if(it!==Z){const pt=t.get("EXT_clip_control");Z?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),it=Z;const At=rt;rt=null,this.setClear(At)}},getReversed:function(){return it},setTest:function(Z){Z?et(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Z){lt!==Z&&!U&&(r.depthMask(Z),lt=Z)},setFunc:function(Z){if(it&&(Z=ix[Z]),mt!==Z){switch(Z){case zo:r.depthFunc(r.NEVER);break;case ko:r.depthFunc(r.ALWAYS);break;case Vo:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case Ho:r.depthFunc(r.EQUAL);break;case Go:r.depthFunc(r.GEQUAL);break;case Wo:r.depthFunc(r.GREATER);break;case Xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Z}},setLocked:function(Z){U=Z},setClear:function(Z){rt!==Z&&(it&&(Z=1-Z),r.clearDepth(Z),rt=Z)},reset:function(){U=!1,lt=null,mt=null,rt=null,it=!1}}}function i(){let U=!1,it=null,lt=null,mt=null,rt=null,Z=null,pt=null,At=null,Xt=null;return{setTest:function(Vt){U||(Vt?et(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(Vt){it!==Vt&&!U&&(r.stencilMask(Vt),it=Vt)},setFunc:function(Vt,De,ge){(lt!==Vt||mt!==De||rt!==ge)&&(r.stencilFunc(Vt,De,ge),lt=Vt,mt=De,rt=ge)},setOp:function(Vt,De,ge){(Z!==Vt||pt!==De||At!==ge)&&(r.stencilOp(Vt,De,ge),Z=Vt,pt=De,At=ge)},setLocked:function(Vt){U=Vt},setClear:function(Vt){Xt!==Vt&&(r.clearStencil(Vt),Xt=Vt)},reset:function(){U=!1,it=null,lt=null,mt=null,rt=null,Z=null,pt=null,At=null,Xt=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,M=null,A=null,w=null,b=new Zt(0,0,0),C=0,x=!1,S=null,D=null,F=null,z=null,W=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=Y>=2);let st=null,ct={};const gt=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Yt=new xe().fromArray(gt),Ft=new xe().fromArray(Rt);function Ot(U,it,lt,mt){const rt=new Uint8Array(4),Z=r.createTexture();r.bindTexture(U,Z),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<lt;pt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(it,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,rt):r.texImage2D(it+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,rt);return Z}const $={};$[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(r.DEPTH_TEST),a.setFunc(Lr),bt(!1),xt(Lc),et(r.CULL_FACE),ne(gi);function et(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function _t(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function Ct(U,it){return h[U]!==it?(r.bindFramebuffer(U,it),h[U]=it,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=it),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=it),!0):!1}function yt(U,it){let lt=p,mt=!1;if(U){lt=f.get(it),lt===void 0&&(lt=[],f.set(it,lt));const rt=U.textures;if(lt.length!==rt.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,pt=rt.length;Z<pt;Z++)lt[Z]=r.COLOR_ATTACHMENT0+Z;lt.length=rt.length,mt=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,mt=!0);mt&&r.drawBuffers(lt)}function kt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const _e={[Bi]:r.FUNC_ADD,[Hd]:r.FUNC_SUBTRACT,[Gd]:r.FUNC_REVERSE_SUBTRACT};_e[Wd]=r.MIN,_e[Xd]=r.MAX;const P={[qd]:r.ZERO,[Yd]:r.ONE,[Kd]:r.SRC_COLOR,[Oo]:r.SRC_ALPHA,[tp]:r.SRC_ALPHA_SATURATE,[Jd]:r.DST_COLOR,[Zd]:r.DST_ALPHA,[$d]:r.ONE_MINUS_SRC_COLOR,[Bo]:r.ONE_MINUS_SRC_ALPHA,[Qd]:r.ONE_MINUS_DST_COLOR,[jd]:r.ONE_MINUS_DST_ALPHA,[ep]:r.CONSTANT_COLOR,[np]:r.ONE_MINUS_CONSTANT_COLOR,[ip]:r.CONSTANT_ALPHA,[rp]:r.ONE_MINUS_CONSTANT_ALPHA};function ne(U,it,lt,mt,rt,Z,pt,At,Xt,Vt){if(U===gi){_===!0&&(_t(r.BLEND),_=!1);return}if(_===!1&&(et(r.BLEND),_=!0),U!==Vd){if(U!==m||Vt!==x){if((d!==Bi||M!==Bi)&&(r.blendEquation(r.FUNC_ADD),d=Bi,M=Bi),Vt)switch(U){case br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sa:r.blendFunc(r.ONE,r.ONE);break;case Uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ic:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,y=null,A=null,w=null,b.set(0,0,0),C=0,m=U,x=Vt}return}rt=rt||it,Z=Z||lt,pt=pt||mt,(it!==d||rt!==M)&&(r.blendEquationSeparate(_e[it],_e[rt]),d=it,M=rt),(lt!==T||mt!==y||Z!==A||pt!==w)&&(r.blendFuncSeparate(P[lt],P[mt],P[Z],P[pt]),T=lt,y=mt,A=Z,w=pt),(At.equals(b)===!1||Xt!==C)&&(r.blendColor(At.r,At.g,At.b,Xt),b.copy(At),C=Xt),m=U,x=!1}function Lt(U,it){U.side===An?_t(r.CULL_FACE):et(r.CULL_FACE);let lt=U.side===Ke;it&&(lt=!lt),bt(lt),U.blending===br&&U.transparent===!1?ne(gi):ne(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const mt=U.stencilWrite;o.setTest(mt),mt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function bt(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function xt(U){U!==Bd?(et(r.CULL_FACE),U!==D&&(U===Lc?r.cullFace(r.BACK):U===zd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),D=U}function Jt(U){U!==F&&(G&&r.lineWidth(U),F=U)}function Mt(U,it,lt){U?(et(r.POLYGON_OFFSET_FILL),(z!==it||W!==lt)&&(r.polygonOffset(it,lt),z=it,W=lt)):_t(r.POLYGON_OFFSET_FILL)}function Nt(U){U?et(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function Me(U){U===void 0&&(U=r.TEXTURE0+X-1),st!==U&&(r.activeTexture(U),st=U)}function oe(U,it,lt){lt===void 0&&(st===null?lt=r.TEXTURE0+X-1:lt=st);let mt=ct[lt];mt===void 0&&(mt={type:void 0,texture:void 0},ct[lt]=mt),(mt.type!==U||mt.texture!==it)&&(st!==lt&&(r.activeTexture(lt),st=lt),r.bindTexture(U,it||$[U]),mt.type=U,mt.texture=it)}function R(){const U=ct[st];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(U){Yt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function Pt(U){Ft.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Ft.copy(U))}function Et(U,it){let lt=l.get(it);lt===void 0&&(lt=new WeakMap,l.set(it,lt));let mt=lt.get(U);mt===void 0&&(mt=r.getUniformBlockIndex(it,U.name),lt.set(U,mt))}function K(U,it){const mt=l.get(it).get(U);c.get(it)!==mt&&(r.uniformBlockBinding(it,mt,U.__bindingPointIndex),c.set(it,mt))}function It(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},st=null,ct={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,y=null,M=null,A=null,w=null,b=new Zt(0,0,0),C=0,x=!1,S=null,D=null,F=null,z=null,W=null,Yt.set(0,0,r.canvas.width,r.canvas.height),Ft.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:Ct,drawBuffers:yt,useProgram:kt,setBlending:ne,setMaterial:Lt,setFlipSided:bt,setCullFace:xt,setLineWidth:Jt,setPolygonOffset:Mt,setScissorTest:Nt,activeTexture:Me,bindTexture:oe,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:ft,texImage3D:J,updateUBOMapping:Et,uniformBlockBinding:K,texStorage2D:j,texStorage3D:ot,texSubImage2D:q,texSubImage3D:tt,compressedTexSubImage2D:L,compressedTexSubImage3D:nt,scissor:ut,viewport:Pt,reset:It}}function sx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):vs("canvas")}function _(R,v,O){let q=1;const tt=oe(R);if((tt.width>O||tt.height>O)&&(q=O/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const L=Math.floor(q*tt.width),nt=Math.floor(q*tt.height);h===void 0&&(h=g(L,nt));const j=v?g(L,nt):h;return j.width=L,j.height=nt,j.getContext("2d").drawImage(R,0,0,L,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+L+"x"+nt+")."),j}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,v,O,q,tt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let L=v;if(v===r.RED&&(O===r.FLOAT&&(L=r.R32F),O===r.HALF_FLOAT&&(L=r.R16F),O===r.UNSIGNED_BYTE&&(L=r.R8)),v===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(L=r.R8UI),O===r.UNSIGNED_SHORT&&(L=r.R16UI),O===r.UNSIGNED_INT&&(L=r.R32UI),O===r.BYTE&&(L=r.R8I),O===r.SHORT&&(L=r.R16I),O===r.INT&&(L=r.R32I)),v===r.RG&&(O===r.FLOAT&&(L=r.RG32F),O===r.HALF_FLOAT&&(L=r.RG16F),O===r.UNSIGNED_BYTE&&(L=r.RG8)),v===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(L=r.RG8UI),O===r.UNSIGNED_SHORT&&(L=r.RG16UI),O===r.UNSIGNED_INT&&(L=r.RG32UI),O===r.BYTE&&(L=r.RG8I),O===r.SHORT&&(L=r.RG16I),O===r.INT&&(L=r.RG32I)),v===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(L=r.RGB8UI),O===r.UNSIGNED_SHORT&&(L=r.RGB16UI),O===r.UNSIGNED_INT&&(L=r.RGB32UI),O===r.BYTE&&(L=r.RGB8I),O===r.SHORT&&(L=r.RGB16I),O===r.INT&&(L=r.RGB32I)),v===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(L=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(L=r.RGBA16UI),O===r.UNSIGNED_INT&&(L=r.RGBA32UI),O===r.BYTE&&(L=r.RGBA8I),O===r.SHORT&&(L=r.RGBA16I),O===r.INT&&(L=r.RGBA32I)),v===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&(L=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&(L=r.R11F_G11F_B10F)),v===r.RGBA){const nt=tt?Ea:$t.getTransfer(q);O===r.FLOAT&&(L=r.RGBA32F),O===r.HALF_FLOAT&&(L=r.RGBA16F),O===r.UNSIGNED_BYTE&&(L=nt===te?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(L=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(L=r.RGB5_A1)}return(L===r.R16F||L===r.R32F||L===r.RG16F||L===r.RG32F||L===r.RGBA16F||L===r.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function M(R,v){let O;return R?v===null||v===Ji||v===ps?O=r.DEPTH24_STENCIL8:v===jn?O=r.DEPTH32F_STENCIL8:v===ds&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ji||v===ps?O=r.DEPTH_COMPONENT24:v===jn?O=r.DEPTH_COMPONENT32F:v===ds&&(O=r.DEPTH_COMPONENT16),O}function A(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&u.delete(v)}function b(R){const v=R.target;v.removeEventListener("dispose",b),S(v)}function C(R){const v=n.get(R);if(v.__webglInit===void 0)return;const O=R.source,q=f.get(O);if(q){const tt=q[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&x(R),Object.keys(q).length===0&&f.delete(O)}n.remove(R)}function x(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const O=R.source,q=f.get(O);delete q[v.__cacheKey],a.memory.textures--}function S(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let tt=0;tt<v.__webglFramebuffer[q].length;tt++)r.deleteFramebuffer(v.__webglFramebuffer[q][tt]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=R.textures;for(let q=0,tt=O.length;q<tt;q++){const L=n.get(O[q]);L.__webglTexture&&(r.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(R)}let D=0;function F(){D=0}function z(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function W(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function X(R,v){const O=n.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,R,v);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+v)}function G(R,v){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+v)}function Y(R,v){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){$(O,R,v);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+v)}function B(R,v){const O=n.get(R);if(R.version>0&&O.__version!==R.version){et(O,R,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+v)}const st={[Ko]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[$o]:r.MIRRORED_REPEAT},ct={[ln]:r.NEAREST,[pp]:r.NEAREST_MIPMAP_NEAREST,[Ds]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[qa]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},gt={[xp]:r.NEVER,[bp]:r.ALWAYS,[Mp]:r.LESS,[Hh]:r.LEQUAL,[Sp]:r.EQUAL,[Tp]:r.GEQUAL,[Ep]:r.GREATER,[yp]:r.NOTEQUAL};function Rt(R,v){if(v.type===jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===qa||v.magFilter===Ds||v.magFilter===Hi||v.minFilter===Rn||v.minFilter===qa||v.minFilter===Ds||v.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,st[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,st[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,st[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ct[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==Ds&&v.minFilter!==Hi||v.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(R,v){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const q=v.source;let tt=f.get(q);tt===void 0&&(tt={},f.set(q,tt));const L=W(v);if(L!==R.__cacheKey){tt[L]===void 0&&(tt[L]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[L].usedTimes++;const nt=tt[R.__cacheKey];nt!==void 0&&(tt[R.__cacheKey].usedTimes--,nt.usedTimes===0&&x(v)),R.__cacheKey=L,R.__webglTexture=tt[L].texture}return O}function Ft(R,v,O){return Math.floor(Math.floor(R/O)/v)}function Ot(R,v,O,q){const L=R.updateRanges;if(L.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,O,q,v.data);else{L.sort((J,ut)=>J.start-ut.start);let nt=0;for(let J=1;J<L.length;J++){const ut=L[nt],Pt=L[J],Et=ut.start+ut.count,K=Ft(Pt.start,v.width,4),It=Ft(ut.start,v.width,4);Pt.start<=Et+1&&K===It&&Ft(Pt.start+Pt.count-1,v.width,4)===K?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++nt,L[nt]=Pt)}L.length=nt+1;const j=r.getParameter(r.UNPACK_ROW_LENGTH),ot=r.getParameter(r.UNPACK_SKIP_PIXELS),ft=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let J=0,ut=L.length;J<ut;J++){const Pt=L[J],Et=Math.floor(Pt.start/4),K=Math.ceil(Pt.count/4),It=Et%v.width,U=Math.floor(Et/v.width),it=K,lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,It),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,It,U,it,lt,O,q,v.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,j),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function $(R,v,O){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);const tt=Yt(R,v),L=v.source;e.bindTexture(q,R.__webglTexture,r.TEXTURE0+O);const nt=n.get(L);if(L.version!==nt.__version||tt===!0){e.activeTexture(r.TEXTURE0+O);const j=$t.getPrimaries($t.workingColorSpace),ot=v.colorSpace===hi?null:$t.getPrimaries(v.colorSpace),ft=v.colorSpace===hi||j===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let J=_(v.image,!1,i.maxTextureSize);J=Me(v,J);const ut=s.convert(v.format,v.colorSpace),Pt=s.convert(v.type);let Et=y(v.internalFormat,ut,Pt,v.colorSpace,v.isVideoTexture);Rt(q,v);let K;const It=v.mipmaps,U=v.isVideoTexture!==!0,it=nt.__version===void 0||tt===!0,lt=L.dataReady,mt=A(v,J);if(v.isDepthTexture)Et=M(v.format===_s,v.type),it&&(U?e.texStorage2D(r.TEXTURE_2D,1,Et,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,Et,J.width,J.height,0,ut,Pt,null));else if(v.isDataTexture)if(It.length>0){U&&it&&e.texStorage2D(r.TEXTURE_2D,mt,Et,It[0].width,It[0].height);for(let rt=0,Z=It.length;rt<Z;rt++)K=It[rt],U?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ut,Pt,K.data):e.texImage2D(r.TEXTURE_2D,rt,Et,K.width,K.height,0,ut,Pt,K.data);v.generateMipmaps=!1}else U?(it&&e.texStorage2D(r.TEXTURE_2D,mt,Et,J.width,J.height),lt&&Ot(v,J,ut,Pt)):e.texImage2D(r.TEXTURE_2D,0,Et,J.width,J.height,0,ut,Pt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&it&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Et,It[0].width,It[0].height,J.depth);for(let rt=0,Z=It.length;rt<Z;rt++)if(K=It[rt],v.format!==Cn)if(ut!==null)if(U){if(lt)if(v.layerUpdates.size>0){const pt=lu(K.width,K.height,v.format,v.type);for(const At of v.layerUpdates){const Xt=K.data.subarray(At*pt/K.data.BYTES_PER_ELEMENT,(At+1)*pt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,At,K.width,K.height,1,ut,Xt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,J.depth,ut,K.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,rt,Et,K.width,K.height,J.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?lt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,rt,0,0,0,K.width,K.height,J.depth,ut,Pt,K.data):e.texImage3D(r.TEXTURE_2D_ARRAY,rt,Et,K.width,K.height,J.depth,0,ut,Pt,K.data)}else{U&&it&&e.texStorage2D(r.TEXTURE_2D,mt,Et,It[0].width,It[0].height);for(let rt=0,Z=It.length;rt<Z;rt++)K=It[rt],v.format!==Cn?ut!==null?U?lt&&e.compressedTexSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ut,K.data):e.compressedTexImage2D(r.TEXTURE_2D,rt,Et,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,K.width,K.height,ut,Pt,K.data):e.texImage2D(r.TEXTURE_2D,rt,Et,K.width,K.height,0,ut,Pt,K.data)}else if(v.isDataArrayTexture)if(U){if(it&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Et,J.width,J.height,J.depth),lt)if(v.layerUpdates.size>0){const rt=lu(J.width,J.height,v.format,v.type);for(const Z of v.layerUpdates){const pt=J.data.subarray(Z*rt/J.data.BYTES_PER_ELEMENT,(Z+1)*rt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,ut,Pt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ut,Pt,J.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,J.width,J.height,J.depth,0,ut,Pt,J.data);else if(v.isData3DTexture)U?(it&&e.texStorage3D(r.TEXTURE_3D,mt,Et,J.width,J.height,J.depth),lt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ut,Pt,J.data)):e.texImage3D(r.TEXTURE_3D,0,Et,J.width,J.height,J.depth,0,ut,Pt,J.data);else if(v.isFramebufferTexture){if(it)if(U)e.texStorage2D(r.TEXTURE_2D,mt,Et,J.width,J.height);else{let rt=J.width,Z=J.height;for(let pt=0;pt<mt;pt++)e.texImage2D(r.TEXTURE_2D,pt,Et,rt,Z,0,ut,Pt,null),rt>>=1,Z>>=1}}else if(It.length>0){if(U&&it){const rt=oe(It[0]);e.texStorage2D(r.TEXTURE_2D,mt,Et,rt.width,rt.height)}for(let rt=0,Z=It.length;rt<Z;rt++)K=It[rt],U?lt&&e.texSubImage2D(r.TEXTURE_2D,rt,0,0,ut,Pt,K):e.texImage2D(r.TEXTURE_2D,rt,Et,ut,Pt,K);v.generateMipmaps=!1}else if(U){if(it){const rt=oe(J);e.texStorage2D(r.TEXTURE_2D,mt,Et,rt.width,rt.height)}lt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Pt,J)}else e.texImage2D(r.TEXTURE_2D,0,Et,ut,Pt,J);m(v)&&d(q),nt.__version=L.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function et(R,v,O){if(v.image.length!==6)return;const q=Yt(R,v),tt=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const L=n.get(tt);if(tt.version!==L.__version||q===!0){e.activeTexture(r.TEXTURE0+O);const nt=$t.getPrimaries($t.workingColorSpace),j=v.colorSpace===hi?null:$t.getPrimaries(v.colorSpace),ot=v.colorSpace===hi||nt===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const ft=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!ft&&!J?ut[Z]=_(v.image[Z],!0,i.maxCubemapSize):ut[Z]=J?v.image[Z].image:v.image[Z],ut[Z]=Me(v,ut[Z]);const Pt=ut[0],Et=s.convert(v.format,v.colorSpace),K=s.convert(v.type),It=y(v.internalFormat,Et,K,v.colorSpace),U=v.isVideoTexture!==!0,it=L.__version===void 0||q===!0,lt=tt.dataReady;let mt=A(v,Pt);Rt(r.TEXTURE_CUBE_MAP,v);let rt;if(ft){U&&it&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,It,Pt.width,Pt.height);for(let Z=0;Z<6;Z++){rt=ut[Z].mipmaps;for(let pt=0;pt<rt.length;pt++){const At=rt[pt];v.format!==Cn?Et!==null?U?lt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,It,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,At.width,At.height,Et,K,At.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,It,At.width,At.height,0,Et,K,At.data)}}}else{if(rt=v.mipmaps,U&&it){rt.length>0&&mt++;const Z=oe(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,It,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){U?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,Et,K,ut[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,ut[Z].width,ut[Z].height,0,Et,K,ut[Z].data);for(let pt=0;pt<rt.length;pt++){const Xt=rt[pt].image[Z].image;U?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Xt.width,Xt.height,Et,K,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,It,Xt.width,Xt.height,0,Et,K,Xt.data)}}else{U?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Et,K,ut[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,It,Et,K,ut[Z]);for(let pt=0;pt<rt.length;pt++){const At=rt[pt];U?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Et,K,At.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,It,Et,K,At.image[Z])}}}m(v)&&d(r.TEXTURE_CUBE_MAP),L.__version=tt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function _t(R,v,O,q,tt,L){const nt=s.convert(O.format,O.colorSpace),j=s.convert(O.type),ot=y(O.internalFormat,nt,j,O.colorSpace),ft=n.get(v),J=n.get(O);if(J.__renderTarget=v,!ft.__hasExternalTextures){const ut=Math.max(1,v.width>>L),Pt=Math.max(1,v.height>>L);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,L,ot,ut,Pt,v.depth,0,nt,j,null):e.texImage2D(tt,L,ot,ut,Pt,0,nt,j,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,tt,J.__webglTexture,0,Jt(v)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,tt,J.__webglTexture,L),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(R,v,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const q=v.depthTexture,tt=q&&q.isDepthTexture?q.type:null,L=M(v.stencilBuffer,tt),nt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=Jt(v);Mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,L,v.width,v.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,j,L,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,L,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,R)}else{const q=v.textures;for(let tt=0;tt<q.length;tt++){const L=q[tt],nt=s.convert(L.format,L.colorSpace),j=s.convert(L.type),ot=y(L.internalFormat,nt,j,L.colorSpace),ft=Jt(v);O&&Mt(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,ot,v.width,v.height):Mt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ft,ot,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ot,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);const tt=q.__webglTexture,L=Jt(v);if(v.depthTexture.format===ms)Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,tt,0);else if(v.depthTexture.format===_s)Mt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function kt(R){const v=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=q}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?yt(v.__webglFramebuffer[0],R):yt(v.__webglFramebuffer,R)}else if(O){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),Ct(v.__webglDepthbuffer[q],R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,L)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ct(v.__webglDepthbuffer,R,!1);else{const tt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,L)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(R,v,O){const q=n.get(R);v!==void 0&&_t(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&kt(R)}function P(R){const v=R.texture,O=n.get(R),q=n.get(v);R.addEventListener("dispose",b);const tt=R.textures,L=R.isWebGLCubeRenderTarget===!0,nt=tt.length>1;if(nt||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),L){O.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[j]=[];for(let ot=0;ot<v.mipmaps.length;ot++)O.__webglFramebuffer[j][ot]=r.createFramebuffer()}else O.__webglFramebuffer[j]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)O.__webglFramebuffer[j]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(nt)for(let j=0,ot=tt.length;j<ot;j++){const ft=n.get(tt[j]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Mt(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let j=0;j<tt.length;j++){const ot=tt[j];O.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[j]);const ft=s.convert(ot.format,ot.colorSpace),J=s.convert(ot.type),ut=y(ot.internalFormat,ft,J,ot.colorSpace,R.isXRRenderTarget===!0),Pt=Jt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,ut,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,O.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)_t(O.__webglFramebuffer[j][ot],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ot);else _t(O.__webglFramebuffer[j],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(v)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){for(let j=0,ot=tt.length;j<ot;j++){const ft=tt[j],J=n.get(ft);let ut=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),Rt(ut,ft),_t(O.__webglFramebuffer,R,ft,r.COLOR_ATTACHMENT0+j,ut,0),m(ft)&&d(ut)}e.unbindTexture()}else{let j=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Rt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let ot=0;ot<v.mipmaps.length;ot++)_t(O.__webglFramebuffer[ot],R,v,r.COLOR_ATTACHMENT0,j,ot);else _t(O.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,j,0);m(v)&&d(j),e.unbindTexture()}R.depthBuffer&&kt(R)}function ne(R){const v=R.textures;for(let O=0,q=v.length;O<q;O++){const tt=v[O];if(m(tt)){const L=T(R),nt=n.get(tt).__webglTexture;e.bindTexture(L,nt),d(L),e.unbindTexture()}}}const Lt=[],bt=[];function xt(R){if(R.samples>0){if(Mt(R)===!1){const v=R.textures,O=R.width,q=R.height;let tt=r.COLOR_BUFFER_BIT;const L=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=n.get(R),j=v.length>1;if(j)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);const ot=R.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);const J=n.get(v[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,O,q,0,0,O,q,tt,r.NEAREST),c===!0&&(Lt.length=0,bt.length=0,Lt.push(r.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Lt.push(L),bt.push(L),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,bt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,nt.__webglColorRenderbuffer[ft]);const J=n.get(v[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,J,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Jt(R){return Math.min(i.maxSamples,R.samples)}function Mt(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Nt(R){const v=a.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Me(R,v){const O=R.colorSpace,q=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Nr&&O!==hi&&($t.getTransfer(O)===te?(q!==Cn||tt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=_e,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Mt}function ax(r,t){function e(n,i=hi){let s;const a=$t.getTransfer(i);if(n===ii)return r.UNSIGNED_BYTE;if(n===$l)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return r.BYTE;if(n===Nh)return r.SHORT;if(n===ds)return r.UNSIGNED_SHORT;if(n===Kl)return r.INT;if(n===Ji)return r.UNSIGNED_INT;if(n===jn)return r.FLOAT;if(n===Es)return r.HALF_FLOAT;if(n===Bh)return r.ALPHA;if(n===zh)return r.RGB;if(n===Cn)return r.RGBA;if(n===ms)return r.DEPTH_COMPONENT;if(n===_s)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===jl)return r.RED_INTEGER;if(n===Vh)return r.RG;if(n===Jl)return r.RG_INTEGER;if(n===Ql)return r.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ua)if(a===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===jo||n===Jo||n===Qo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===el||n===nl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===tl||n===el)return a===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl||n===ml||n===_l)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===il)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===vl||n===xl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===gl)return a===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===El||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ml)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new tf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:ox,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ux extends Br{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new cx,d={},T=e.getContextAttributes();let y=null,M=null;const A=[],w=[],b=new jt;let C=null;const x=new _n;x.viewport=new xe;const S=new _n;S.viewport=new xe;const D=[x,S],F=new Pm;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=A[$];return et===void 0&&(et=new mo,A[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=A[$];return et===void 0&&(et=new mo,A[$]=et),et.getGripSpace()},this.getHand=function($){let et=A[$];return et===void 0&&(et=new mo,A[$]=et),et.getHandSpace()};function X($){const et=w.indexOf($.inputSource);if(et===-1)return;const _t=A[et];_t!==void 0&&(_t.update($.inputSource,$.frame,l||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let $=0;$<A.length;$++){const et=w[$];et!==null&&(w[$]=null,A[$].disconnect(et))}z=null,W=null,m.reset();for(const $ in d)delete d[$];t.setRenderTarget(y),p=null,f=null,h=null,i=null,M=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ct=null,yt=null;T.depth&&(yt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=T.stencil?_s:ms,Ct=T.stencil?ps:Ji);const kt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(kt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Qi(f.textureWidth,f.textureHeight,{format:Cn,type:ii,depthTexture:new Qh(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Qi(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ot.setContext(i),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let et=0;et<$.removed.length;et++){const _t=$.removed[et],Ct=w.indexOf(_t);Ct>=0&&(w[Ct]=null,A[Ct].disconnect(_t))}for(let et=0;et<$.added.length;et++){const _t=$.added[et];let Ct=w.indexOf(_t);if(Ct===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(_t),Ct=kt;break}else if(w[kt]===null){w[kt]=_t,Ct=kt;break}if(Ct===-1)break}const yt=A[Ct];yt&&yt.connect(_t)}}const B=new k,st=new k;function ct($,et,_t){B.setFromMatrixPosition(et.matrixWorld),st.setFromMatrixPosition(_t.matrixWorld);const Ct=B.distanceTo(st),yt=et.projectionMatrix.elements,kt=_t.projectionMatrix.elements,_e=yt[14]/(yt[10]-1),P=yt[14]/(yt[10]+1),ne=(yt[9]+1)/yt[5],Lt=(yt[9]-1)/yt[5],bt=(yt[8]-1)/yt[0],xt=(kt[8]+1)/kt[0],Jt=_e*bt,Mt=_e*xt,Nt=Ct/(-bt+xt),Me=Nt*-bt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Me),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const oe=_e+Nt,R=P+Nt,v=Jt-Me,O=Mt+(Ct-Me),q=ne*P/R*oe,tt=Lt*P/R*oe;$.projectionMatrix.makePerspective(v,O,q,tt,oe,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function gt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,_t=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=S.near=x.near=et,F.far=S.far=x.far=_t,(z!==F.near||W!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,W=F.far),F.layers.mask=$.layers.mask|6,x.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Ct=$.parent,yt=F.cameras;gt(F,Ct);for(let kt=0;kt<yt.length;kt++)gt(yt[kt],Ct);yt.length===2?ct(F,x,S):F.projectionMatrix.copy(x.projectionMatrix),Rt($,F,Ct)};function Rt($,et,_t){_t===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return d[$]};let Yt=null;function Ft($,et){if(u=et.getViewerPose(l||a),g=et,u!==null){const _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ct=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,Ct=!0);for(let P=0;P<_t.length;P++){const ne=_t[P];let Lt=null;if(p!==null)Lt=p.getViewport(ne);else{const xt=h.getViewSubImage(f,ne);Lt=xt.viewport,P===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let bt=D[P];bt===void 0&&(bt=new _n,bt.layers.enable(P),bt.viewport=new xe,D[P]=bt),bt.matrix.fromArray(ne.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(ne.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),P===0&&(F.matrix.copy(bt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ct===!0&&F.cameras.push(bt)}const yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const P=h.getDepthInformation(_t[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let P=0;P<_t.length;P++){const ne=_t[P].camera;if(ne){let Lt=d[ne];Lt||(Lt=new tf,d[ne]=Lt);const bt=h.getCameraImage(ne);Lt.sourceTexture=bt}}}}for(let _t=0;_t<A.length;_t++){const Ct=w[_t],yt=A[_t];Ct!==null&&yt!==void 0&&yt.update(Ct,et,l||a)}Yt&&Yt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Ot=new ef;Ot.setAnimationLoop(Ft),this.setAnimationLoop=function($){Yt=$},this.dispose=function(){}}}const Ii=new ri,hx=new me;function fx(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Kh(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,T,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,T,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ke&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ke&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),y=T.envMap,M=T.envMapRotation;y&&(m.envMap.value=y,Ii.copy(M),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ii)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ke&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dx(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const M=y.program;n.uniformBlockBinding(T,M)}function l(T,y){let M=i[T.id];M===void 0&&(g(T),M=u(T),i[T.id]=M,T.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(T,A);const w=t.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function u(T){const y=h();T.__bindingPointIndex=y;const M=r.createBuffer(),A=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,M),M}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const y=i[T.id],M=T.uniforms,A=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,b=M.length;w<b;w++){const C=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,S=C.length;x<S;x++){const D=C[x];if(p(D,w,x,A)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let X=0;X<z.length;X++){const G=z[X],Y=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,F+W,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,W),W+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,y,M,A){const w=T.value,b=y+"_"+M;if(A[b]===void 0)return typeof w=="number"||typeof w=="boolean"?A[b]=w:A[b]=w.clone(),!0;{const C=A[b];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[b]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(T){const y=T.uniforms;let M=0;const A=16;for(let b=0,C=y.length;b<C;b++){const x=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,D=x.length;S<D;S++){const F=x[S],z=Array.isArray(F.value)?F.value:[F.value];for(let W=0,X=z.length;W<X;W++){const G=z[W],Y=_(G),B=M%A,st=B%Y.boundary,ct=B+st;M+=st,ct!==0&&A-ct<Y.storage&&(M+=A-ct),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Y.storage}}}const w=M%A;return w>0&&(M+=A-w),T.__size=M,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:l,dispose:d}}class px{constructor(t={}){const{canvas:e=Hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let A=!1;this._outputColorSpace=He;let w=0,b=0,C=null,x=-1,S=null;const D=new xe,F=new xe;let z=null;const W=new Zt(0);let X=0,G=e.width,Y=e.height,B=1,st=null,ct=null;const gt=new xe(0,0,G,Y),Rt=new xe(0,0,G,Y);let Yt=!1;const Ft=new jh;let Ot=!1,$=!1;const et=new me,_t=new k,Ct=new xe,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function _e(){return C===null?B:1}let P=n;function ne(E,I){return e.getContext(E,I)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yl}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),P===null){const I="webgl2";if(P=ne(I,E),P===null)throw ne(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Lt,bt,xt,Jt,Mt,Nt,Me,oe,R,v,O,q,tt,L,nt,j,ot,ft,J,ut,Pt,Et,K,It;function U(){Lt=new T0(P),Lt.init(),Et=new ax(P,Lt),bt=new g0(P,Lt,t,Et),xt=new rx(P,Lt),bt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Jt=new w0(P),Mt=new Xv,Nt=new sx(P,Lt,xt,Mt,bt,Et,Jt),Me=new x0(M),oe=new y0(M),R=new Um(P),K=new m0(P,R),v=new b0(P,R,Jt,K),O=new C0(P,v,R,Jt),J=new R0(P,bt,Nt),j=new v0(Mt),q=new Wv(M,Me,oe,Lt,bt,K,j),tt=new fx(M,Mt),L=new Yv,nt=new Qv(Lt),ft=new p0(M,Me,oe,xt,O,p,c),ot=new nx(M,O,bt),It=new dx(P,Jt,bt,xt),ut=new _0(P,Lt,Jt),Pt=new A0(P,Lt,Jt),Jt.programs=q.programs,M.capabilities=bt,M.extensions=Lt,M.properties=Mt,M.renderLists=L,M.shadowMap=ot,M.state=xt,M.info=Jt}U();const it=new ux(M,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(G,Y,!1))},this.getSize=function(E){return E.set(G,Y)},this.setSize=function(E,I,V=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Y=I,e.width=Math.floor(E*B),e.height=Math.floor(I*B),V===!0&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(G*B,Y*B).floor()},this.setDrawingBufferSize=function(E,I,V){G=E,Y=I,B=V,e.width=Math.floor(E*V),e.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,I,V,H){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,I,V,H),xt.viewport(D.copy(gt).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(Rt)},this.setScissor=function(E,I,V,H){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,I,V,H),xt.scissor(F.copy(Rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(E){xt.setScissorTest(Yt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,V=!0){let H=0;if(E){let N=!1;if(C!==null){const at=C.texture.format;N=at===Ql||at===Jl||at===jl}if(N){const at=C.texture.type,dt=at===ii||at===Ji||at===ds||at===ps||at===$l||at===Zl,St=ft.getClearColor(),vt=ft.getClearAlpha(),Dt=St.r,Ut=St.g,Tt=St.b;dt?(g[0]=Dt,g[1]=Ut,g[2]=Tt,g[3]=vt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Dt,_[1]=Ut,_[2]=Tt,_[3]=vt,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}I&&(H|=P.DEPTH_BUFFER_BIT),V&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),ft.dispose(),L.dispose(),nt.dispose(),Mt.dispose(),Me.dispose(),oe.dispose(),O.dispose(),K.dispose(),It.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",ge),it.removeEventListener("sessionend",be),Nn.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=Jt.autoReset,I=ot.enabled,V=ot.autoUpdate,H=ot.needsUpdate,N=ot.type;U(),Jt.autoReset=E,ot.enabled=I,ot.autoUpdate=V,ot.needsUpdate=H,ot.type=N}function rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){const I=E.target;I.removeEventListener("dispose",Z),pt(I)}function pt(E){At(E),Mt.remove(E)}function At(E){const I=Mt.get(E).programs;I!==void 0&&(I.forEach(function(V){q.releaseProgram(V)}),E.isShaderMaterial&&q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,H,N,at){I===null&&(I=yt);const dt=N.isMesh&&N.matrixWorld.determinant()<0,St=df(E,I,V,H,N);xt.setMaterial(H,dt);let vt=V.index,Dt=1;if(H.wireframe===!0){if(vt=v.getWireframeAttribute(V),vt===void 0)return;Dt=2}const Ut=V.drawRange,Tt=V.attributes.position;let Ht=Ut.start*Dt,Qt=(Ut.start+Ut.count)*Dt;at!==null&&(Ht=Math.max(Ht,at.start*Dt),Qt=Math.min(Qt,(at.start+at.count)*Dt)),vt!==null?(Ht=Math.max(Ht,0),Qt=Math.min(Qt,vt.count)):Tt!=null&&(Ht=Math.max(Ht,0),Qt=Math.min(Qt,Tt.count));const de=Qt-Ht;if(de<0||de===1/0)return;K.setup(N,H,St,V,vt);let se,ie=ut;if(vt!==null&&(se=R.get(vt),ie=Pt,ie.setIndex(se)),N.isMesh)H.wireframe===!0?(xt.setLineWidth(H.wireframeLinewidth*_e()),ie.setMode(P.LINES)):ie.setMode(P.TRIANGLES);else if(N.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),xt.setLineWidth(wt*_e()),N.isLineSegments?ie.setMode(P.LINES):N.isLineLoop?ie.setMode(P.LINE_LOOP):ie.setMode(P.LINE_STRIP)}else N.isPoints?ie.setMode(P.POINTS):N.isSprite&&ie.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))ie.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,le=N._multiDrawCounts,Kt=N._multiDrawCount,je=vt?R.get(vt).bytesPerElement:1,er=Mt.get(H).currentProgram.getUniforms();for(let Je=0;Je<Kt;Je++)er.setValue(P,"_gl_DrawID",Je),ie.render(wt[Je]/je,le[Je])}else if(N.isInstancedMesh)ie.renderInstances(Ht,de,N.count);else if(V.isInstancedBufferGeometry){const wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,le=Math.min(V.instanceCount,wt);ie.renderInstances(Ht,de,le)}else ie.render(Ht,de)};function Xt(E,I,V){E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=Ke,E.needsUpdate=!0,Cs(E,I,V),E.side=Ti,E.needsUpdate=!0,Cs(E,I,V),E.side=An):Cs(E,I,V)}this.compile=function(E,I,V=null){V===null&&(V=E),d=nt.get(V),d.init(I),y.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==V&&E.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const at=N.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const St=at[dt];Xt(St,V,N),H.add(St)}else Xt(at,V,N),H.add(at)}),d=y.pop(),H},this.compileAsync=function(E,I,V=null){const H=this.compile(E,I,V);return new Promise(N=>{function at(){if(H.forEach(function(dt){Mt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){N(E);return}setTimeout(at,10)}Lt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Vt=null;function De(E){Vt&&Vt(E)}function ge(){Nn.stop()}function be(){Nn.start()}const Nn=new ef;Nn.setAnimationLoop(De),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(E){Vt=E,it.setAnimationLoop(E),E===null?Nn.stop():Nn.start()},it.addEventListener("sessionstart",ge),it.addEventListener("sessionend",be),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,I,C),d=nt.get(E,y.length),d.init(I),y.push(d),et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ft.setFromProjectionMatrix(et,kn,I.reversedDepth),$=this.localClippingEnabled,Ot=j.init(this.clippingPlanes,$),m=L.get(E,T.length),m.init(),T.push(m),it.enabled===!0&&it.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&Fa(at,I,-1/0,M.sortObjects)}Fa(E,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ct),kt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,kt&&ft.addToRenderList(m,E),this.info.render.frame++,Ot===!0&&j.beginShadows();const V=d.state.shadowsArray;ot.render(V,E,I),Ot===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(d.setupLights(),I.isArrayCamera){const at=I.cameras;if(N.length>0)for(let dt=0,St=at.length;dt<St;dt++){const vt=at[dt];uc(H,N,E,vt)}kt&&ft.render(E);for(let dt=0,St=at.length;dt<St;dt++){const vt=at[dt];cc(m,E,vt,vt.viewport)}}else N.length>0&&uc(H,N,E,I),kt&&ft.render(E),cc(m,E,I);C!==null&&b===0&&(Nt.updateMultisampleRenderTarget(C),Nt.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(M,E,I),K.resetDefaultState(),x=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],Ot===!0&&j.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Fa(E,I,V,H){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){H&&Ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(et);const dt=O.update(E),St=E.material;St.visible&&m.push(E,dt,St,V,Ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){const dt=O.update(E),St=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ct.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ct.copy(dt.boundingSphere.center)),Ct.applyMatrix4(E.matrixWorld).applyMatrix4(et)),Array.isArray(St)){const vt=dt.groups;for(let Dt=0,Ut=vt.length;Dt<Ut;Dt++){const Tt=vt[Dt],Ht=St[Tt.materialIndex];Ht&&Ht.visible&&m.push(E,dt,Ht,V,Ct.z,Tt)}}else St.visible&&m.push(E,dt,St,V,Ct.z,null)}}const at=E.children;for(let dt=0,St=at.length;dt<St;dt++)Fa(at[dt],I,V,H)}function cc(E,I,V,H){const N=E.opaque,at=E.transmissive,dt=E.transparent;d.setupLightsView(V),Ot===!0&&j.setGlobalState(M.clippingPlanes,V),H&&xt.viewport(D.copy(H)),N.length>0&&Rs(N,I,V),at.length>0&&Rs(at,I,V),dt.length>0&&Rs(dt,I,V),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function uc(E,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Qi(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Es:ii,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const at=d.state.transmissionRenderTarget[H.id],dt=H.viewport||D;at.setSize(dt.z*M.transmissionResolutionScale,dt.w*M.transmissionResolutionScale);const St=M.getRenderTarget(),vt=M.getActiveCubeFace(),Dt=M.getActiveMipmapLevel();M.setRenderTarget(at),M.getClearColor(W),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),kt&&ft.render(V);const Ut=M.toneMapping;M.toneMapping=vi;const Tt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Ot===!0&&j.setGlobalState(M.clippingPlanes,H),Rs(E,V,H),Nt.updateMultisampleRenderTarget(at),Nt.updateRenderTargetMipmap(at),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Qt=0,de=I.length;Qt<de;Qt++){const se=I[Qt],ie=se.object,wt=se.geometry,le=se.material,Kt=se.group;if(le.side===An&&ie.layers.test(H.layers)){const je=le.side;le.side=Ke,le.needsUpdate=!0,hc(ie,V,H,wt,le,Kt),le.side=je,le.needsUpdate=!0,Ht=!0}}Ht===!0&&(Nt.updateMultisampleRenderTarget(at),Nt.updateRenderTargetMipmap(at))}M.setRenderTarget(St,vt,Dt),M.setClearColor(W,X),Tt!==void 0&&(H.viewport=Tt),M.toneMapping=Ut}function Rs(E,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,at=E.length;N<at;N++){const dt=E[N],St=dt.object,vt=dt.geometry,Dt=dt.group;let Ut=dt.material;Ut.allowOverride===!0&&H!==null&&(Ut=H),St.layers.test(V.layers)&&hc(St,I,V,vt,Ut,Dt)}}function hc(E,I,V,H,N,at){E.onBeforeRender(M,I,V,H,N,at),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(M,I,V,H,E,at),N.transparent===!0&&N.side===An&&N.forceSinglePass===!1?(N.side=Ke,N.needsUpdate=!0,M.renderBufferDirect(V,I,H,N,E,at),N.side=Ti,N.needsUpdate=!0,M.renderBufferDirect(V,I,H,N,E,at),N.side=An):M.renderBufferDirect(V,I,H,N,E,at),E.onAfterRender(M,I,V,H,N,at)}function Cs(E,I,V){I.isScene!==!0&&(I=yt);const H=Mt.get(E),N=d.state.lights,at=d.state.shadowsArray,dt=N.state.version,St=q.getParameters(E,N.state,at,I,V),vt=q.getProgramCacheKey(St);let Dt=H.programs;H.environment=E.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(E.isMeshStandardMaterial?oe:Me).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Z),Dt=new Map,H.programs=Dt);let Ut=Dt.get(vt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===dt)return dc(E,St),Ut}else St.uniforms=q.getUniforms(E),E.onBeforeCompile(St,M),Ut=q.acquireProgram(St,vt),Dt.set(vt,Ut),H.uniforms=St.uniforms;const Tt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=j.uniform),dc(E,St),H.needsLights=mf(E),H.lightsStateVersion=dt,H.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function fc(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function dc(E,I){const V=Mt.get(E);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function df(E,I,V,H,N){I.isScene!==!0&&(I=yt),Nt.resetTextureUnits();const at=I.fog,dt=H.isMeshStandardMaterial?I.environment:null,St=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nr,vt=(H.isMeshStandardMaterial?oe:Me).get(H.envMap||dt),Dt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ut=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!V.morphAttributes.position,Ht=!!V.morphAttributes.normal,Qt=!!V.morphAttributes.color;let de=vi;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(de=M.toneMapping);const se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ie=se!==void 0?se.length:0,wt=Mt.get(H),le=d.state.lights;if(Ot===!0&&($===!0||E!==S)){const Fe=E===S&&H.id===x;j.setState(H,E,Fe)}let Kt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==le.state.version||wt.outputColorSpace!==St||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==vt||H.fog===!0&&wt.fog!==at||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==j.numPlanes||wt.numIntersection!==j.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Ut||wt.morphTargets!==Tt||wt.morphNormals!==Ht||wt.morphColors!==Qt||wt.toneMapping!==de||wt.morphTargetsCount!==ie)&&(Kt=!0):(Kt=!0,wt.__version=H.version);let je=wt.currentProgram;Kt===!0&&(je=Cs(H,I,N));let er=!1,Je=!1,Hr=!1;const ce=je.getUniforms(),fn=wt.uniforms;if(xt.useProgram(je.program)&&(er=!0,Je=!0,Hr=!0),H.id!==x&&(x=H.id,Je=!0),er||S!==E){xt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(P,"projectionMatrix",E.projectionMatrix),ce.setValue(P,"viewMatrix",E.matrixWorldInverse);const Ve=ce.map.cameraPosition;Ve!==void 0&&Ve.setValue(P,_t.setFromMatrixPosition(E.matrixWorld)),bt.logarithmicDepthBuffer&&ce.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Je=!0,Hr=!0)}if(N.isSkinnedMesh){ce.setOptional(P,N,"bindMatrix"),ce.setOptional(P,N,"bindMatrixInverse");const Fe=N.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ce.setValue(P,"boneTexture",Fe.boneTexture,Nt))}N.isBatchedMesh&&(ce.setOptional(P,N,"batchingTexture"),ce.setValue(P,"batchingTexture",N._matricesTexture,Nt),ce.setOptional(P,N,"batchingIdTexture"),ce.setValue(P,"batchingIdTexture",N._indirectTexture,Nt),ce.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(P,"batchingColorTexture",N._colorsTexture,Nt));const dn=V.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&J.update(N,V,je),(Je||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,ce.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fn.envMap.value=vt,fn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(fn.envMapIntensity.value=I.environmentIntensity),Je&&(ce.setValue(P,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&pf(fn,Hr),at&&H.fog===!0&&tt.refreshFogUniforms(fn,at),tt.refreshMaterialUniforms(fn,H,B,Y,d.state.transmissionRenderTarget[E.id]),ha.upload(P,fc(wt),fn,Nt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ha.upload(P,fc(wt),fn,Nt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(P,"center",N.center),ce.setValue(P,"modelViewMatrix",N.modelViewMatrix),ce.setValue(P,"normalMatrix",N.normalMatrix),ce.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Fe=H.uniformsGroups;for(let Ve=0,Oa=Fe.length;Ve<Oa;Ve++){const Ai=Fe[Ve];It.update(Ai,je),It.bind(Ai,je)}}return je}function pf(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function mf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,I,V){const H=Mt.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Mt.get(E.texture).__webglTexture=I,Mt.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const V=Mt.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0};const _f=P.createFramebuffer();this.setRenderTarget=function(E,I=0,V=0){C=E,w=I,b=V;let H=!0,N=null,at=!1,dt=!1;if(E){const vt=Mt.get(E);if(vt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(vt.__webglFramebuffer===void 0)Nt.setupRenderTarget(E);else if(vt.__hasExternalTextures)Nt.rebindTextures(E,Mt.get(E.texture).__webglTexture,Mt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(vt.__boundDepthTexture!==Tt){if(Tt!==null&&Mt.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(E)}}const Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);const Ut=Mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?N=Ut[I][V]:N=Ut[I],at=!0):E.samples>0&&Nt.useMultisampledRTT(E)===!1?N=Mt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[V]:N=Ut,D.copy(E.viewport),F.copy(E.scissor),z=E.scissorTest}else D.copy(gt).multiplyScalar(B).floor(),F.copy(Rt).multiplyScalar(B).floor(),z=Yt;if(V!==0&&(N=_f),xt.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&xt.drawBuffers(E,N),xt.viewport(D),xt.scissor(F),xt.setScissorTest(z),at){const vt=Mt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,vt.__webglTexture,V)}else if(dt){const vt=I;for(let Dt=0;Dt<E.textures.length;Dt++){const Ut=Mt.get(E.textures[Dt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Dt,Ut.__webglTexture,V,vt)}}else if(E!==null&&V!==0){const vt=Mt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,V)}x=-1},this.readRenderTargetPixels=function(E,I,V,H,N,at,dt,St=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){xt.bindFramebuffer(P.FRAMEBUFFER,vt);try{const Dt=E.textures[St],Ut=Dt.format,Tt=Dt.type;if(!bt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-H&&V>=0&&V<=E.height-N&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(I,V,H,N,Et.convert(Ut),Et.convert(Tt),at))}finally{const Dt=C!==null?Mt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,I,V,H,N,at,dt,St=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt)if(I>=0&&I<=E.width-H&&V>=0&&V<=E.height-N){xt.bindFramebuffer(P.FRAMEBUFFER,vt);const Dt=E.textures[St],Ut=Dt.format,Tt=Dt.type;if(!bt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(I,V,H,N,Et.convert(Ut),Et.convert(Tt),0);const Qt=C!==null?Mt.get(C).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,Qt);const de=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Gp(P,de,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Ht),P.deleteSync(de),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,V=0){const H=Math.pow(2,-V),N=Math.floor(E.image.width*H),at=Math.floor(E.image.height*H),dt=I!==null?I.x:0,St=I!==null?I.y:0;Nt.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,dt,St,N,at),xt.unbindTexture()};const gf=P.createFramebuffer(),vf=P.createFramebuffer();this.copyTextureToTexture=function(E,I,V=null,H=null,N=0,at=null){at===null&&(N!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=N,N=0):at=0);let dt,St,vt,Dt,Ut,Tt,Ht,Qt,de;const se=E.isCompressedTexture?E.mipmaps[at]:E.image;if(V!==null)dt=V.max.x-V.min.x,St=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Dt=V.min.x,Ut=V.min.y,Tt=V.isBox3?V.min.z:0;else{const dn=Math.pow(2,-N);dt=Math.floor(se.width*dn),St=Math.floor(se.height*dn),E.isDataArrayTexture?vt=se.depth:E.isData3DTexture?vt=Math.floor(se.depth*dn):vt=1,Dt=0,Ut=0,Tt=0}H!==null?(Ht=H.x,Qt=H.y,de=H.z):(Ht=0,Qt=0,de=0);const ie=Et.convert(I.format),wt=Et.convert(I.type);let le;I.isData3DTexture?(Nt.setTexture3D(I,0),le=P.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Nt.setTexture2DArray(I,0),le=P.TEXTURE_2D_ARRAY):(Nt.setTexture2D(I,0),le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Kt=P.getParameter(P.UNPACK_ROW_LENGTH),je=P.getParameter(P.UNPACK_IMAGE_HEIGHT),er=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),Hr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Tt);const ce=E.isDataArrayTexture||E.isData3DTexture,fn=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const dn=Mt.get(E),Fe=Mt.get(I),Ve=Mt.get(dn.__renderTarget),Oa=Mt.get(Fe.__renderTarget);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Ve.__webglFramebuffer),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Oa.__webglFramebuffer);for(let Ai=0;Ai<vt;Ai++)ce&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(E).__webglTexture,N,Tt+Ai),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(I).__webglTexture,at,de+Ai)),P.blitFramebuffer(Dt,Ut,dt,St,Ht,Qt,dt,St,P.DEPTH_BUFFER_BIT,P.NEAREST);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||Mt.has(E)){const dn=Mt.get(E),Fe=Mt.get(I);xt.bindFramebuffer(P.READ_FRAMEBUFFER,gf),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,vf);for(let Ve=0;Ve<vt;Ve++)ce?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,N,Tt+Ve):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,N),fn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,at,de+Ve):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,at),N!==0?P.blitFramebuffer(Dt,Ut,dt,St,Ht,Qt,dt,St,P.COLOR_BUFFER_BIT,P.NEAREST):fn?P.copyTexSubImage3D(le,at,Ht,Qt,de+Ve,Dt,Ut,dt,St):P.copyTexSubImage2D(le,at,Ht,Qt,Dt,Ut,dt,St);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else fn?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(le,at,Ht,Qt,de,dt,St,vt,ie,wt,se.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(le,at,Ht,Qt,de,dt,St,vt,ie,se.data):P.texSubImage3D(le,at,Ht,Qt,de,dt,St,vt,ie,wt,se):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,at,Ht,Qt,dt,St,ie,wt,se.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,at,Ht,Qt,se.width,se.height,ie,se.data):P.texSubImage2D(P.TEXTURE_2D,at,Ht,Qt,dt,St,ie,wt,se);P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,je),P.pixelStorei(P.UNPACK_SKIP_PIXELS,er),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hr),at===0&&I.generateMipmaps&&P.generateMipmap(le),xt.unbindTexture()},this.initRenderTarget=function(E){Mt.get(E).__webglFramebuffer===void 0&&Nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Nt.setTextureCube(E,0):E.isData3DTexture?Nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Nt.setTexture2DArray(E,0):Nt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){w=0,b=0,C=null,xt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}function mx({container:r,photos:t,reduced:e,onChange:n,onSelect:i,onEnter:s,onHover:a}){const o=new px({antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,1.6)),o.setClearColor(528148),o.outputColorSpace=He,r.append(o.domElement);const c=new pm,l=new _n(43,1,.1,180),u=new Gi;c.add(u);const h=new Dm,f=new jt,p=new jt,g=new Rm,_=new Map,m=new Map,d=new mm(new Uint8Array([35,52,48,255]),1,1);d.needsUpdate=!0;const T=new $i(1,1,20,12),y=new $i(1,1),M={p002:[2.7,.1,0,5.5,3.2,-.1,-.17,-.08],p001:[-.15,-1.4,1.4,1.65,2.4,.04,.16,.08],p003:[5.4,2,-1.5,1.5,2.25,-.08,-.3,.11],p103:[5.1,-2,1.5,2.7,1.9,.07,-.22,.1],p005:[1.4,2.8,-4,3.1,1.9,.15,.1,.08],p115:[7,0,-4,3.1,2,-.1,-.4,-.07],p109:[-.6,2.7,-5,3.4,1.4,.08,.2,-.12],p130:[.5,-3.4,-5,2.8,1.8,.1,.1,-.12]},A={p002:[1.05,-2.2,0,4.9,2.95,-.07,-.17,-.08],p001:[-2.1,-2.8,1,1.45,2.1,.02,.1,.08],p003:[2.9,-.25,-1.5,1,1.5,-.02,-.3,.1],p103:[2.4,-3.8,1.5,2.2,1.55,.05,-.2,.1],p005:[-1.4,-.5,-4,2.4,1.45,.07,.1,-.1]};let w="home",b=[...t],C=0,x=0,S=-1,D=!0,F=0,z=0,W=1.2,X=0,G=innerWidth,Y=innerHeight,B=G<700,st=null,ct=!1,gt=0,Rt=0,Yt=1;const Ft=t.map((L,nt)=>{const j=new Hn({transparent:!0,depthWrite:!0,side:An,uniforms:{uMap:{value:d},uOpacity:{value:0},uTime:{value:0},uBend:{value:0},uReveal:{value:0}},vertexShader:"varying vec2 vUv;uniform float uTime;uniform float uBend;void main(){vUv=uv;vec3 p=position;p.z+=sin(uv.x*3.14159+uTime*.7)*uBend;p.y+=sin(uv.x*6.28+uTime*.3)*uBend*.08;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}",fragmentShader:"uniform sampler2D uMap;uniform float uOpacity;uniform float uReveal;varying vec2 vUv;float noise(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec4 color=texture2D(uMap,vUv);float grain=noise(floor(vUv*350.));float reveal=smoothstep(grain*.2,grain*.2+.18,uReveal);gl_FragColor=vec4(color.rgb,color.a*uOpacity*reveal);#include <colorspace_fragment>}".replace(";#include",`;
#include`)}),ot=new Mn(T,j),ft=new Mn(y,new Ta({color:11581084,transparent:!0,opacity:0,side:An,depthWrite:!1}));ft.position.z=-.055,ot.renderOrder=2,ft.renderOrder=1;const J=new Gi;return J.add(ft,ot),u.add(J),J.position.set((Math.random()-.5)*32,(Math.random()-.5)*22,-20-Math.random()*20),J.rotation.z=(Math.random()-.5)*.8,{photo:L,group:J,mesh:ot,frame:ft,material:j,opacity:0,loaded:!1,small:null,requested:!1,highRequested:!1,phase:nt*2.399,scale:1}});function Ot(L){return L.colorSpace=He,L.generateMipmaps=!1,L.minFilter=Rn,L.anisotropy=Math.min(o.capabilities.getMaxAnisotropy(),4),L}function $(L){L.requested||(L.requested=!0,g.load(L.photo.space||L.photo.thumb,nt=>{L.small=Ot(nt),_.set(L.photo.id,nt),m.has(L.photo.id)||(L.material.uniforms.uMap.value=nt),L.loaded=!0},void 0,()=>{L.requested=!1}))}function et(L){$(L),!L.highRequested&&(L.highRequested=!0,g.load(L.photo.src,nt=>{Ot(nt),m.set(L.photo.id,nt),L.material.uniforms.uMap.value=nt,L.loaded=!0;const j=B?3:5;if(m.size>j)for(const[ot,ft]of m){if(m.size<=j)break;if(ot===L.photo.id||ot==="p002")continue;const J=Ft.find(ut=>ut.photo.id===ot);J!=null&&J.small&&(J.material.uniforms.uMap.value=J.small,J.highRequested=!1,ft.dispose(),m.delete(ot))}},void 0,()=>{L.highRequested=!1}))}const _t=B?1100:2300,Ct=new Float32Array(_t*3),yt=new Float32Array(_t*3),kt=new Float32Array(_t);for(let L=0;L<_t;L++){Ct[L*3]=(Math.random()-.5)*75,Ct[L*3+1]=(Math.random()-.5)*55,Ct[L*3+2]=(Math.random()-.5)*65;const nt=new Zt(L%6===0?14073482:7445402);yt.set([nt.r,nt.g,nt.b],L*3),kt[L]=Math.random()*1.4+.35}const _e=new Un;_e.setAttribute("position",new cn(Ct,3)),_e.setAttribute("color",new cn(yt,3)),_e.setAttribute("aSize",new cn(kt,1));const P=new Hn({transparent:!0,depthWrite:!1,vertexColors:!0,blending:Sa,uniforms:{uTime:{value:0},uTravel:{value:0}},vertexShader:"attribute float aSize;varying vec3 vColor;varying float vAlpha;uniform float uTime;uniform float uTravel;void main(){vColor=color;vec3 p=position;p.y+=sin(uTime*.07+p.x)*.5;p.z=mod(p.z+uTravel*9.+uTime*.12+32.5,65.)-32.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(aSize*45./max(1.,-mv.z),.5,4.5);vAlpha=clamp(1.-(-mv.z)/90.,.1,.7);}",fragmentShader:"varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-vec2(.5));float alpha=smoothstep(.5,.05,d)*vAlpha;gl_FragColor=vec4(vColor,alpha*.65);}"}),ne=new Sm(_e,P);c.add(ne);const Lt=new Gi;c.add(Lt);for(let L=0;L<3;L++){const nt=[];for(let ft=0;ft<=220;ft++){const J=ft/220*Math.PI*2;nt.push(new k(Math.cos(J)*(7+L*3),Math.sin(J)*(7+L*3),0))}const j=new Un().setFromPoints(nt),ot=new xm(j,new Jh({color:L===0?9081970:4815737,transparent:!0,opacity:L===0?.17:.08}));ot.material.depthTest=!1,ot.renderOrder=-10,ot.rotation.set(1.15+L*.23,.15+L*.2,L*.8),ot.position.set(2,-1,-6-L*2),Lt.add(ot)}const bt=document.createElement("canvas");bt.width=bt.height=256;const xt=bt.getContext("2d"),Jt=xt.createRadialGradient(128,128,0,128,128,128);Jt.addColorStop(0,"rgba(58,101,109,.45)"),Jt.addColorStop(.4,"rgba(28,69,80,.19)"),Jt.addColorStop(1,"rgba(0,0,0,0)"),xt.fillStyle=Jt,xt.fillRect(0,0,256,256);const Mt=new Mn(new $i(55,40),new Ta({map:new Em(bt),transparent:!0,depthWrite:!1,blending:Sa}));Mt.position.set(4,2,-18),c.add(Mt);function Nt(){G=r.clientWidth||innerWidth,Y=r.clientHeight||innerHeight,B=G<700,o.setSize(G,Y),l.aspect=G/Y,l.updateProjectionMatrix()}new ResizeObserver(Nt).observe(r),Nt();function Me(L){return(L%b.length+b.length)%b.length}function oe(L){w=L,S=-1,W=1,X=performance.now()+1050,w!=="atlas"&&(gt=0,Rt=0),w==="atlas"&&Ft.forEach(nt=>{b.includes(nt.photo)&&$(nt)})}function R(L){b=L,C=0,x=0,S=-1,W=1,w==="atlas"&&Ft.forEach(nt=>{b.includes(nt.photo)&&$(nt)})}function v(L,nt){const j=e.matches?1:1-Math.pow(.925,nt),ot=e.matches?0:L*.001;W=Math.max(0,W-nt*.012),x+=(C-x)*(e.matches?1:1-Math.pow(.88,nt));const ft=Me(Math.round(x));if(ft!==S&&b.length){S=ft,n(b[ft],ft,b.length);const K=Ft.find(It=>It.photo===b[ft]);w==="space"&&K&&et(K)}const ut=(w==="home"?B?8:14.5:w==="atlas"?(B?27:31)*Yt:B?6.7:11.8)/(2*Math.tan(Ya.degToRad(l.fov/2))*l.aspect),Pt=Math.max(w==="atlas"?23:8,ut)-(e.matches?0:Math.sin(W*Math.PI)*2);l.position.z+=(Pt-l.position.z)*j,l.position.x+=(p.x*(w==="home"?.28:.1)-l.position.x)*j,l.position.y+=((w==="space"?.7:w==="atlas"?1.5:0)+p.y*.1-l.position.y)*j,u.rotation.y+=((w==="atlas"?gt+(e.matches?0:ot*.018):p.x*.018)-u.rotation.y)*j,u.rotation.x+=((w==="atlas"?Rt:p.y*.014)-u.rotation.x)*j,Ft.forEach((K,It)=>{let U=0,it=0,lt=-30,mt=0,rt=0,Z=0,pt=2,At=2,Xt=0;if(w==="home"){const ge=(B?A:M)[K.photo.id];ge&&([U,it,lt,pt,At,mt,rt,Z]=ge,B&&(it-=1.5,K.photo.id==="p005"&&(it-=1.2)),Xt=1,$(K),K.photo.id==="p002"&&et(K))}else if(w==="space"){const ge=b.indexOf(K.photo);if(ge>=0){let be=ge-x;be=((be+b.length/2)%b.length+b.length)%b.length-b.length/2,U=be*5.8,it=1+Math.sin(be*.8)*.3,lt=-Math.abs(be)*1.8-be*be*.13,rt=-be*.2,Z=Math.sin(be*.6)*.02,At=B?4.1:3.5,pt=At*K.photo.width/K.photo.height,pt>5.8&&(pt=5.8,At=pt*K.photo.height/K.photo.width),Xt=Math.abs(be)<4.5?Math.max(.25,1-Math.abs(be)*.16):0,Xt>0&&$(K)}}else if(w==="atlas"){const ge=b.indexOf(K.photo);if(ge>=0){const be=Math.acos(1-2*(ge+.5)/b.length),Nn=ge*2.399963;U=Math.cos(Nn)*Math.sin(be)*10.5,it=Math.cos(be)*9+1,lt=Math.sin(Nn)*Math.sin(be)*8,At=1.25,pt=At*K.photo.width/K.photo.height,pt>2.5&&(pt=2.5,At=pt*K.photo.height/K.photo.width),rt=-u.rotation.y*.8,mt=-u.rotation.x*.8,Z=Math.sin(ge)*.04,Xt=.9,$(K)}}Xt>0&&!e.matches&&(it+=Math.sin(ot*.45+K.phase)*.075,U+=Math.sin(ot*.2+K.phase)*.025);const Vt=K.group.position,De=K.group.rotation;Vt.x+=(U-Vt.x)*j,Vt.y+=(it-Vt.y)*j,Vt.z+=(lt-Vt.z)*j,De.x+=(mt-De.x)*j,De.y+=(rt-De.y)*j,De.z+=(Z-De.z)*j,K.mesh.scale.x+=(pt-K.mesh.scale.x)*j,K.mesh.scale.y+=(At-K.mesh.scale.y)*j,K.frame.scale.set(K.mesh.scale.x+.045,K.mesh.scale.y+.045,1),K.opacity+=((K.loaded?Xt:0)-K.opacity)*j,K.material.uniforms.uOpacity.value=K.opacity,K.material.uniforms.uTime.value=ot,K.material.uniforms.uReveal.value=Math.min(1,K.material.uniforms.uReveal.value+(K.loaded?.025:0)*nt),K.material.uniforms.uBend.value=e.matches?0:.012+Math.abs(C-x)*.1+W*.13,K.frame.material.opacity=K.opacity*.55,K.group.visible=K.opacity>.005||Xt>0}),P.uniforms.uTime.value=ot,P.uniforms.uTravel.value=W,ne.rotation.y=ot*.006,Lt.rotation.z=ot*.004+W*.1;const Et=w==="atlas"?.35:1;Lt.children.forEach((K,It)=>{K.material.opacity=(It===0?.17:.08)*Et})}function O(L){if(!D)return;const nt=Math.min((L-z)/16.67||1,3);z=L,v(L,nt),o.render(c,l),F=requestAnimationFrame(O)}l.position.set(0,0,30),F=requestAnimationFrame(O);const q=o.domElement;q.addEventListener("wheel",L=>{document.body.classList.contains("modal-open")||(L.preventDefault(),!(performance.now()<X)&&(w==="home"?Math.abs(L.deltaY)>8&&s():w==="space"?C+=Math.max(-.8,Math.min(.8,(L.deltaY+L.deltaX)*.0025)):w==="atlas"&&(Yt=Ya.clamp(Yt+L.deltaY*8e-4,.68,1.6))))},{passive:!1}),q.addEventListener("pointerdown",L=>{st={x:L.clientX,y:L.clientY,index:C,yaw:gt,pitch:Rt},ct=!1,q.setPointerCapture(L.pointerId)});function tt(L){const nt=q.getBoundingClientRect();f.set((L.clientX-nt.left)/nt.width*2-1,-(L.clientY-nt.top)/nt.height*2+1),h.setFromCamera(f,l);const j=h.intersectObjects(Ft.filter(ot=>ot.opacity>.3).map(ot=>ot.mesh))[0];return j?Ft.find(ot=>ot.mesh===j.object):null}return q.addEventListener("pointermove",L=>{if(p.set(L.clientX/G-.5,-(L.clientY/Y-.5)),st){const nt=L.clientX-st.x,j=L.clientY-st.y;Math.abs(nt)+Math.abs(j)>8&&(ct=!0),w==="space"&&(C=st.index-nt/(B?160:280)),w==="atlas"&&(gt=st.yaw+nt*.004,Rt=Ya.clamp(st.pitch+j*.002,-.5,.5))}else a==null||a(!!tt(L))}),q.addEventListener("pointerup",L=>{if(st){if(w==="home"&&st.y-L.clientY>45)s();else if(!ct){const nt=tt(L);nt&&i(nt.photo.id,w==="home"?t:b)}C=Math.round(C),st=null}}),q.addEventListener("pointercancel",()=>{st=null,C=Math.round(C)}),q.addEventListener("pointerleave",()=>{p.set(0,0),a==null||a(!1)}),{setView:oe,setFilter:R,step(L){C=Math.round(C)+L},goTo(L){C=L},pause(){D=!1,cancelAnimationFrame(F)},resume(){D||(D=!0,z=performance.now(),F=requestAnimationFrame(O))}}}const Q=r=>document.querySelector(r),na=r=>"./"+r.replace(/^\//,""),Wi=[{id:"wild",name:"山野旷途",en:"THE GREAT WIDE",photo:"p005",description:"山川、旷野与远行"},{id:"street",name:"街巷人间",en:"ORDINARY LIVES",photo:"p001",description:"人与街头的日常"},{id:"city",name:"城市几何",en:"URBAN FORMS",photo:"p076",description:"建筑、线条与空间"},{id:"night",name:"入夜以后",en:"AFTER HOURS",photo:"p115",description:"灯火里的生活"},{id:"nature",name:"草木时序",en:"SEASONS IN LIGHT",photo:"p130",description:"自然与季节的细节"}],of=r=>r.status==="to-edit"?"待精修":r.status==="ready"?"精选直出":"已精修",Zi=r=>Wi.find(t=>t.id===r),Qn=matchMedia("(prefers-reduced-motion: reduce)");let we=[],ze=[],Pn="all",Mi=24,Ms="",wl="curated",wa="all",rn=[],Dn=0,Ra=null,ti=!1,bn=null,Uu=null;try{ti=localStorage.getItem("light-between-sound")==="on"}catch{}const Iu=["p002","p001","p005","p003","p115","p130","p004","p084","p109","p104","p006","p103","p038"];function lf(r){Q("#toast").textContent=r,Q("#toast").classList.add("visible"),clearTimeout(Uu),Uu=setTimeout(()=>Q("#toast").classList.remove("visible"),3e3)}function sc(){Q("#sound-toggle").setAttribute("aria-pressed",String(ti)),Q("#sound-toggle").setAttribute("aria-label",ti?"关闭交互音效":"开启交互音效"),Q("#sound-toggle span").textContent=ti?"音效开":"音效关"}function Ze(r=!1){if(ti)try{bn??(bn=new(window.AudioContext||window.webkitAudioContext)),bn.state==="suspended"&&bn.resume();const t=bn.currentTime,e=r?.075:.035,n=bn.createBuffer(1,bn.sampleRate*e,bn.sampleRate),i=n.getChannelData(0);for(let c=0;c<i.length;c++)i[c]=(Math.random()*2-1)*Math.pow(1-c/i.length,3);const s=bn.createBufferSource(),a=bn.createGain(),o=bn.createBiquadFilter();s.buffer=n,o.type="lowpass",o.frequency.value=r?900:1800,a.gain.setValueAtTime(r?.055:.035,t),a.gain.exponentialRampToValueAtTime(1e-4,t+e),s.connect(o),o.connect(a),a.connect(bn.destination),s.start(t),s.onended=()=>{s.disconnect(),o.disconnect(),a.disconnect()}}catch{ti=!1,sc(),lf("当前浏览器无法开启音效")}}Q("#sound-toggle").addEventListener("click",()=>{ti=!ti,sc(),Ze(!0);try{localStorage.setItem("light-between-sound",ti?"on":"off")}catch{}});sc();let qt=null,Ln="home",Sn="space",Nu=null;const ia={home:Q("#home-panel"),space:Q("#space-ui"),atlas:Q("#space-ui"),archive:Q("#archive-panel"),about:Q("#about-panel")};function _x(){Qn.matches||(gn.from(".site-header",{y:-25,autoAlpha:0,duration:1.1,ease:"power3.out"}),gn.from(".title-line>span",{yPercent:110,rotate:4,duration:1.8,stagger:.15,delay:.25,ease:"power4.out"}),gn.from(".intro-item",{y:20,autoAlpha:0,duration:1.4,stagger:.12,delay:.55,ease:"power3.out"}),gn.from("#home-bottom,#home-annotation",{autoAlpha:0,duration:1.5,delay:1.2}))}function gx(){Qn.matches||(document.body.classList.remove("is-transitioning"),document.body.offsetWidth,document.body.classList.add("is-transitioning"),clearTimeout(Nu),Nu=setTimeout(()=>document.body.classList.remove("is-transitioning"),1700))}function In(r){if(r===Ln)return;r==="space"&&Sn==="atlas"&&(r="atlas"),Ln=r,(r==="space"||r==="atlas")&&(Sn=r),["home","space","atlas","archive","about"].forEach(n=>document.body.classList.toggle("is-"+n,n===r)),document.querySelectorAll("nav [data-view]").forEach(n=>n.classList.toggle("active",n.dataset.view===r||n.dataset.view==="space"&&r==="atlas")),document.querySelectorAll("[data-mode]").forEach(n=>{const i=n.dataset.mode===Sn;n.classList.toggle("active",i),n.setAttribute("aria-pressed",String(i))});const t=ia[r];[...new Set(Object.values(ia))].forEach(n=>{gn.killTweensOf(n),n===t?(n.hidden=!1,gn.fromTo(n,{autoAlpha:0,y:r==="archive"?45:r==="about"?20:15},{autoAlpha:1,y:0,duration:Qn.matches?0:1.1,delay:Qn.matches?0:.25,ease:"power3.out"})):n.hidden||gn.to(n,{autoAlpha:0,y:n===ia.home?-25:12,duration:Qn.matches?0:.4,onComplete:()=>{ia[Ln]!==n&&(n.hidden=!0)}})}),["#home-bottom","#home-annotation"].forEach(n=>{gn.killTweensOf(n),gn.to(n,{autoAlpha:r==="home"?1:0,duration:.5})}),r==="atlas"?Q("#space-instruction").textContent="拖动，旋转影像星图 · 滚动，靠近或远离 · 点选任意一帧":Q("#space-instruction").textContent="拖动或滚动，穿行影像 · 点击照片，走近一点",qt==null||qt.setView(r==="archive"?"atlas":r==="about"?"home":r),Ca(),gx(),Ze(!0)}function Ca(r,t,e){const n=we.filter(s=>Pn==="all"||s.category===Pn),i=r||n[0];i&&(Ln==="atlas"?(Q("#space-photo-category").textContent="AN ATLAS OF MOMENTS",Q("#space-photo-title").textContent="影像，在此交汇。",Q("#space-counter").textContent=n.length+" 帧目光 / 拖动旋转"):(Q("#space-photo-category").textContent=Zi(i.category).en,Q("#space-photo-title").textContent=i.title,Q("#space-counter").textContent=String((t||0)+1).padStart(2,"0")+" / "+(e||n.length)),Q("#space-range").max=String((e||n.length)-1),Q("#space-range").value=String(t||0),Q("#timeline-current").textContent=String((t||0)+1).padStart(2,"0"),Q("#timeline-total").textContent=String(e||n.length).padStart(2,"0"))}document.querySelectorAll("[data-view]").forEach(r=>r.addEventListener("click",()=>In(r.dataset.view)));document.querySelectorAll("[data-mode]").forEach(r=>r.addEventListener("click",()=>{Sn=r.dataset.mode,In(Sn)}));Q("#enter-exhibition").addEventListener("click",()=>{Sn="space",In("space")});Q("#scroll-enter").addEventListener("click",()=>{Sn="space",In("space")});function Rl(r){Pn=r,Mi=24,document.querySelectorAll("[data-filter]").forEach(t=>{const e=t.dataset.filter===r;t.classList.toggle("active",e),t.setAttribute("aria-pressed",String(e))}),qt==null||qt.setFilter(we.filter(t=>r==="all"||t.category===r)),ws(),Ca(),Ze()}function vx(){const r=[{id:"all",name:"全部"},...Wi];Q("#filters").innerHTML=r.map(t=>'<button class="filter'+(Pn===t.id?" active":"")+'" data-filter="'+t.id+'" aria-pressed="'+(Pn===t.id)+'">'+t.name+"<span>"+(t.id==="all"?we.length:we.filter(e=>e.category===t.id).length)+"</span></button>").join(""),Q("#space-filters").innerHTML=r.map(t=>'<button class="space-filter'+(Pn===t.id?" active":"")+'" data-filter="'+t.id+'" aria-pressed="'+(Pn===t.id)+'">'+(t.id==="all"?"全部目光":t.name)+"<sup>"+(t.id==="all"?we.length:we.filter(e=>e.category===t.id).length)+"</sup></button>").join(""),Q("#about-chapters").innerHTML=Wi.map(t=>'<button data-about-category="'+t.id+'">'+t.name+" ↗</button>").join(""),document.querySelectorAll("[data-filter]").forEach(t=>t.addEventListener("click",()=>Rl(t.dataset.filter))),Q("#about-chapters").addEventListener("click",t=>{const e=t.target.closest("[data-about-category]");e&&(Rl(e.dataset.aboutCategory),Sn="space",In("space"))})}function ws(){if(ze=we.filter(r=>(wa==="all"||(r.status||"finished")===wa)&&(Pn==="all"||r.category===Pn)&&(!Ms||(r.title+" "+r.filename+" "+Zi(r.category).name).toLowerCase().includes(Ms))),wl==="date"&&ze.sort((r,t)=>(t.date||"").localeCompare(r.date||"")),wl==="random")for(let r=ze.length-1;r>0;r--){const t=Math.floor(Math.random()*(r+1));[ze[r],ze[t]]=[ze[t],ze[r]]}cf()}function cf(r=!1){const t=r?Q("#photo-grid").children.length:0,e=ze.slice(t,Mi).map((n,i)=>'<button class="photo-card" data-photo="'+n.id+'" style="animation-delay:'+Math.min(i%12,8)*.045+'s" aria-label="查看'+n.title+"，"+Zi(n.category).name+'"><div class="photo-card-image"><img src="'+n.thumb+'" width="'+n.width+'" height="'+n.height+'" loading="lazy" decoding="async" alt="'+n.title+'"></div><div class="photo-card-caption"><h3>'+n.title+"</h3><span>"+n.id.slice(1)+'</span></div><span class="photo-category">'+Zi(n.category).name+" · "+of(n)+"</span></button>").join("");r?Q("#photo-grid").insertAdjacentHTML("beforeend",e):Q("#photo-grid").innerHTML=e,Q("#filter-note").textContent=(Pn==="all"?"全部作品":Zi(Pn).name)+" / "+ze.length+" 张影像"+(Ms?" · 搜索结果":""),Q("#loaded-note").textContent=ze.length?"已展出 "+Math.min(Mi,ze.length)+" / "+ze.length:"",Q("#load-more").hidden=Mi>=ze.length,Q("#empty-state").hidden=ze.length>0}Q("#work-status").addEventListener("change",r=>{wa=r.target.value,Mi=24,ws()});Q("#sort").addEventListener("change",r=>{wl=r.target.value,Mi=24,ws(),Ze()});Q("#search").addEventListener("input",r=>{Ms=r.target.value.trim().toLowerCase(),Mi=24,ws()});Q("#reset-search").addEventListener("click",()=>{Ms="",Q("#search").value="",wa="all",Q("#work-status").value="all",Rl("all")});Q("#load-more").addEventListener("click",()=>{Mi+=24,cf(!0),Ze()});Q("#photo-grid").addEventListener("click",r=>{const t=r.target.closest("[data-photo]");t&&hf(t.dataset.photo)});Q("#space-prev").addEventListener("click",()=>{Ln==="atlas"&&(Sn="space",In("space")),qt==null||qt.step(-1),Ze()});Q("#space-next").addEventListener("click",()=>{Ln==="atlas"&&(Sn="space",In("space")),qt==null||qt.step(1),Ze()});Q("#space-range").addEventListener("input",r=>{Ln==="atlas"&&(Sn="space",In("space")),qt==null||qt.goTo(Number(r.target.value))});document.addEventListener("keydown",r=>{r.target.matches("input,select")||(Q("#lightbox").open?(r.key==="ArrowLeft"&&(r.preventDefault(),Or(-1)),r.key==="ArrowRight"&&(r.preventDefault(),Or(1))):((Ln==="space"||Ln==="atlas")&&(r.key==="ArrowLeft"&&(r.preventDefault(),qt==null||qt.step(-1),Ze()),r.key==="ArrowRight"&&(r.preventDefault(),qt==null||qt.step(1),Ze())),r.key==="Escape"&&In("home")))});document.addEventListener("visibilitychange",()=>{document.hidden?(lc(),qt==null||qt.pause()):qt==null||qt.resume()});const ji=Q("#cursor");document.addEventListener("pointermove",r=>{if(r.pointerType==="touch"||Qn.matches)return;gn.to(ji,{left:r.clientX,top:r.clientY,duration:.2,ease:"power2.out",overwrite:!0});const t=r.target.closest("#world");ji.classList.toggle("visible",!!t&&!Q("#lightbox").open),ji.querySelector("span").textContent=Ln==="home"?"探索":"拖动"});document.addEventListener("pointerdown",()=>ji.classList.add("dragging"));document.addEventListener("pointerup",()=>ji.classList.remove("dragging"));document.addEventListener("pointerleave",()=>ji.classList.remove("visible"));async function xx(){try{const r=await fetch(na("photos.json"));if(!r.ok)throw new Error("Photo archive unavailable");we=await r.json(),we=we.map(t=>({...t,space:na(t.space),thumb:na(t.thumb),src:na(t.src)})),Wi.splice(0,Wi.length,...Wi.filter(t=>we.some(e=>e.category===t.id))),Q("#home-bottom .home-index").textContent=we.length+" 帧目光 / "+Wi.length+" 个主题",we.sort((t,e)=>{const n=Iu.indexOf(t.id),i=Iu.indexOf(e.id);return(n<0?999:n)-(i<0?999:i)||t.id.localeCompare(e.id)}),Q("#nav-count").textContent=we.length,Q("#total-count").textContent=we.length,vx(),ws(),Ca();try{qt=mx({container:Q("#world"),photos:we,reduced:Qn,onChange:Ca,onSelect:(t,e)=>hf(t,e),onEnter:()=>{Sn="space",In("space")},onHover:t=>{ji.querySelector("span").textContent=t?"查看":Ln==="home"?"探索":"拖动"}})}catch(t){Q("#world-error").hidden=!1,console.error("3D exhibition unavailable",t)}_x()}catch(r){lf("作品档案暂时无法载入，请刷新重试。"),console.error(r)}}xx();function uf(){document.body.classList.toggle("modal-open",Q("#lightbox").open),Q("#lightbox").open?qt==null||qt.pause():qt==null||qt.resume()}function hf(r,t=ze){rn=t.length?[...t]:[...we],Dn=rn.findIndex(e=>e.id===r),Dn<0&&(rn=[...we],Dn=rn.findIndex(e=>e.id===r)),!(Dn<0)&&(Q("#filmstrip").innerHTML=rn.map(e=>`<button data-id="${e.id}" aria-label="查看${e.title}"><img src="${e.thumb}" alt="" loading="lazy"></button>`).join(""),Q("#lightbox").open||(Q("#lightbox").showModal(),Qn.matches||gn.fromTo(Q("#lightbox"),{autoAlpha:0,clipPath:"inset(9% 8% 9% 8%)"},{autoAlpha:1,clipPath:"inset(0% 0% 0% 0%)",duration:.65,ease:"power3.out"})),uf(),oc(),Ze(!0))}function ac(r){Q("#image-viewport").classList.toggle("zoomed",r),Q("#zoom").setAttribute("aria-pressed",String(r)),Q("#zoom").textContent=r?"⊖ 还原":"⊕ 放大",r||(Q("#image-viewport").scrollTop=0,Q("#image-viewport").scrollLeft=0)}function oc(){const r=rn[Dn];if(!r)return;ac(!1),Q("#image-error").hidden=!0;const t=Q("#lightbox-image");t.style.opacity=".35",t.alt=r.title,t.onload=()=>{t.style.opacity="1",Q("#image-error").hidden=!0},t.onerror=()=>{Q("#image-error").hidden=!1,t.style.opacity="0"},t.src=r.src,t.complete&&t.naturalWidth&&(t.style.opacity="1"),Q("#lightbox-title").textContent=r.title,Q("#lightbox-category").textContent=`${Zi(r.category).name} / ${Zi(r.category).en}`,Q("#photo-meta").replaceChildren(),[of(r),r.date,r.camera,`${r.width} × ${r.height} 原片尺寸`,r.filename,r.status==="to-edit"?r.editNote:""].filter(Boolean).forEach(s=>{const a=document.createElement("div");a.textContent=s,Q("#photo-meta").append(a)}),Q("#lightbox-counter").textContent=`${String(Dn+1).padStart(2,"0")} / ${String(rn.length).padStart(2,"0")}`,Q("#filmstrip").querySelectorAll("button").forEach(s=>s.setAttribute("aria-current",String(s.dataset.id===r.id)));const n=Q("#filmstrip").querySelector("[aria-current=true]");if(n){const s=Q("#filmstrip");s.scrollTo({left:n.offsetLeft-s.offsetLeft-s.clientWidth/2+n.clientWidth/2,behavior:Qn.matches?"instant":"smooth"})}const i=rn[(Dn+1)%rn.length];i&&(new Image().src=i.src)}function Or(r){Dn=(Dn+r+rn.length)%rn.length,oc(),Ze()}function lc(){clearInterval(Ra),Ra=null,Q("#slideshow").setAttribute("aria-pressed","false"),Q("#slideshow").textContent="▶ 自动播放"}function ff(){lc(),document.fullscreenElement===Q("#lightbox")&&document.exitFullscreen().catch(()=>{}),Q("#lightbox").close(),uf(),Ze()}Q("#close-lightbox").addEventListener("click",ff);Q("#lightbox").addEventListener("cancel",r=>{r.preventDefault(),ff()});Q("#prev-photo").addEventListener("click",()=>Or(-1));Q("#next-photo").addEventListener("click",()=>Or(1));Q("#zoom").addEventListener("click",()=>ac(!Q("#image-viewport").classList.contains("zoomed")));Q("#lightbox-image").addEventListener("dblclick",()=>ac(!Q("#image-viewport").classList.contains("zoomed")));Q("#retry-image").addEventListener("click",()=>{const r=rn[Dn];Q("#lightbox-image").src=`${r.src}?retry=${Date.now()}`});Q("#filmstrip").addEventListener("click",r=>{const t=r.target.closest("button");t&&(Dn=rn.findIndex(e=>e.id===t.dataset.id),oc(),Ze())});Q("#slideshow").addEventListener("click",()=>{if(Ra){lc();return}Q("#slideshow").setAttribute("aria-pressed","true"),Q("#slideshow").textContent="Ⅱ 暂停播放",Ra=setInterval(()=>Or(1),5e3),Ze()});Q("#fullscreen").hidden=!document.fullscreenEnabled;Q("#fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await Q("#lightbox").requestFullscreen()}catch{Q("#fullscreen").textContent="全屏不可用"}});let Jr=null;Q("#image-viewport").addEventListener("touchstart",r=>{Jr={x:r.touches[0].clientX,y:r.touches[0].clientY}},{passive:!0});Q("#image-viewport").addEventListener("touchend",r=>{if(!Jr||Q("#image-viewport").classList.contains("zoomed"))return;const t=r.changedTouches[0].clientX-Jr.x,e=r.changedTouches[0].clientY-Jr.y;Math.abs(t)>60&&Math.abs(t)>Math.abs(e)*1.4&&Or(t<0?1:-1),Jr=null},{passive:!0});
