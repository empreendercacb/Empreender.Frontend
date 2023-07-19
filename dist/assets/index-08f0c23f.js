import{r as g,c as S,j as w,E as Ft,aq as Lt,av as je,aL as xe,Z as Be}from"./index-21b031a3.js";import{a as Ut,P as Oe,m as Ht}from"./Views-c4b9753b.js";import{A as It}from"./index-79a2efb8.js";const Vt=(...t)=>e=>{t.forEach(r=>{typeof r=="function"?r(e):r&&typeof r=="object"&&(r.current=e)})},Le=g.forwardRef((t,e)=>{const{alt:r,className:n,icon:a,shape:o="rounded",size:f="md",src:i,srcSet:s,...u}=t;let{children:c}=t;const[p,v]=g.useState(1),l=g.useRef(null),y=g.useRef(null),m=Vt(e,y),h=()=>{if(!l.current||!y.current)return;const x=l.current.offsetWidth,d=y.current.offsetWidth;x===0||d===0||v(d-8<x?(d-8)/x:1)};g.useEffect(()=>{h()},[p,c]);const b=typeof f=="number"?{width:f,height:f,minWidth:f,lineHeight:`${f}px`,fontSize:a?f/2:12}:{},j=S("avatar",`avatar-${o}`,typeof f=="string"?`avatar-${f}`:"",n);if(i)c=w.jsx("img",{className:`avatar-img avatar-${o}`,src:i,srcSet:s,alt:r,loading:"lazy"});else if(a)c=w.jsx("span",{className:S("avatar-icon",`avatar-icon-${f}`),children:a});else{const x=typeof f=="number"?{lineHeight:`${f}px`}:{},d={transform:`translateX(-50%) scale(${p})`};c=w.jsx("span",{ref:l,className:`avatar-string ${typeof f=="number"?"":`avatar-inner-${f}`}`,style:{...x,...d,...typeof f=="number"?{height:f}:{}},children:c})}return w.jsx("span",{ref:m,className:j,style:{...b,...u.style},...u,children:c})});Le.displayName="Avatar";var mt=g.createContext(),ht=g.createContext();function zt(t){var e=t.children,r=g.useState(null),n=r[0],a=r[1],o=g.useRef(!1);g.useEffect(function(){return function(){o.current=!0}},[]);var f=g.useCallback(function(i){o.current||a(i)},[]);return g.createElement(mt.Provider,{value:n},g.createElement(ht.Provider,{value:f},e))}var yt=function(e){return Array.isArray(e)?e[0]:e},gt=function(e){if(typeof e=="function"){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return e.apply(void 0,n)}},ke=function(e,r){if(typeof e=="function")return gt(e,r);e!=null&&(e.current=r)},rt=function(e){return e.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},nt=typeof window<"u"&&window.document&&window.document.createElement?g.useLayoutEffect:g.useEffect,D="top",W="bottom",F="right",M="left",Ue="auto",le=[D,W,F,M],ee="start",ce="end",qt="clippingParents",wt="viewport",ie="popper",_t="reference",at=le.reduce(function(t,e){return t.concat([e+"-"+ee,e+"-"+ce])},[]),bt=[].concat(le,[Ue]).reduce(function(t,e){return t.concat([e,e+"-"+ee,e+"-"+ce])},[]),Xt="beforeRead",Yt="read",Gt="afterRead",Kt="beforeMain",Zt="main",Jt="afterMain",Qt="beforeWrite",er="write",tr="afterWrite",rr=[Xt,Yt,Gt,Kt,Zt,Jt,Qt,er,tr];function I(t){return t?(t.nodeName||"").toLowerCase():null}function k(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=k(t).Element;return t instanceof e||t instanceof Element}function T(t){var e=k(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function He(t){if(typeof ShadowRoot>"u")return!1;var e=k(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function nr(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!T(o)||!I(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(f){var i=a[f];i===!1?o.removeAttribute(f):o.setAttribute(f,i===!0?"":i)}))})}function ar(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=f.reduce(function(s,u){return s[u]="",s},{});!T(a)||!I(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const or={name:"applyStyles",enabled:!0,phase:"write",fn:nr,effect:ar,requires:["computeStyles"]};function H(t){return t.split("-")[0]}var Z=Math.max,Ee=Math.min,te=Math.round;function Te(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function xt(){return!/^((?!chrome|android).)*safari/i.test(Te())}function re(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&T(t)&&(a=t.offsetWidth>0&&te(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&te(n.height)/t.offsetHeight||1);var f=J(t)?k(t):window,i=f.visualViewport,s=!xt()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/a,c=(n.top+(s&&i?i.offsetTop:0))/o,p=n.width/a,v=n.height/o;return{width:p,height:v,top:c,right:u+p,bottom:c+v,left:u,x:u,y:c}}function Ie(t){var e=re(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function Ot(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&He(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function V(t){return k(t).getComputedStyle(t)}function ir(t){return["table","td","th"].indexOf(I(t))>=0}function q(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function Pe(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(He(t)?t.host:null)||q(t)}function ot(t){return!T(t)||V(t).position==="fixed"?null:t.offsetParent}function sr(t){var e=/firefox/i.test(Te()),r=/Trident/i.test(Te());if(r&&T(t)){var n=V(t);if(n.position==="fixed")return null}var a=Pe(t);for(He(a)&&(a=a.host);T(a)&&["html","body"].indexOf(I(a))<0;){var o=V(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pe(t){for(var e=k(t),r=ot(t);r&&ir(r)&&V(r).position==="static";)r=ot(r);return r&&(I(r)==="html"||I(r)==="body"&&V(r).position==="static")?e:r||sr(t)||e}function Ve(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function se(t,e,r){return Z(t,Ee(e,r))}function fr(t,e,r){var n=se(t,e,r);return n>r?r:n}function Et(){return{top:0,right:0,bottom:0,left:0}}function jt(t){return Object.assign({},Et(),t)}function Pt(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}var cr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,jt(typeof e!="number"?e:Pt(e,le))};function ur(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,f=r.modifiersData.popperOffsets,i=H(r.placement),s=Ve(i),u=[M,F].indexOf(i)>=0,c=u?"height":"width";if(!(!o||!f)){var p=cr(a.padding,r),v=Ie(o),l=s==="y"?D:M,y=s==="y"?W:F,m=r.rects.reference[c]+r.rects.reference[s]-f[s]-r.rects.popper[c],h=f[s]-r.rects.reference[s],b=pe(o),j=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,x=m/2-h/2,d=p[l],O=j-v[c]-p[y],E=j/2-v[c]/2+x,P=se(d,E,O),R=s;r.modifiersData[n]=(e={},e[R]=P,e.centerOffset=P-E,e)}}function lr(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||Ot(e.elements.popper,a)&&(e.elements.arrow=a))}const pr={name:"arrow",enabled:!0,phase:"main",fn:ur,effect:lr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(t){return t.split("-")[1]}var dr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function vr(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:te(r*a)/a||0,y:te(n*a)/a||0}}function it(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,f=t.offsets,i=t.position,s=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,p=t.isFixed,v=f.x,l=v===void 0?0:v,y=f.y,m=y===void 0?0:y,h=typeof c=="function"?c({x:l,y:m}):{x:l,y:m};l=h.x,m=h.y;var b=f.hasOwnProperty("x"),j=f.hasOwnProperty("y"),x=M,d=D,O=window;if(u){var E=pe(r),P="clientHeight",R="clientWidth";if(E===k(r)&&(E=q(r),V(E).position!=="static"&&i==="absolute"&&(P="scrollHeight",R="scrollWidth")),E=E,a===D||(a===M||a===F)&&o===ce){d=W;var N=p&&E===O&&O.visualViewport?O.visualViewport.height:E[P];m-=N-n.height,m*=s?1:-1}if(a===M||(a===D||a===W)&&o===ce){x=F;var A=p&&E===O&&O.visualViewport?O.visualViewport.width:E[R];l-=A-n.width,l*=s?1:-1}}var $=Object.assign({position:i},u&&dr),L=c===!0?vr({x:l,y:m},k(r)):{x:l,y:m};if(l=L.x,m=L.y,s){var C;return Object.assign({},$,(C={},C[d]=j?"0":"",C[x]=b?"0":"",C.transform=(O.devicePixelRatio||1)<=1?"translate("+l+"px, "+m+"px)":"translate3d("+l+"px, "+m+"px, 0)",C))}return Object.assign({},$,(e={},e[d]=j?m+"px":"",e[x]=b?l+"px":"",e.transform="",e))}function mr(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,f=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:H(e.placement),variation:ne(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,it(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,it(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const hr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mr,data:{}};var ge={passive:!0};function yr(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,f=n.resize,i=f===void 0?!0:f,s=k(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(c){c.addEventListener("scroll",r.update,ge)}),i&&s.addEventListener("resize",r.update,ge),function(){o&&u.forEach(function(c){c.removeEventListener("scroll",r.update,ge)}),i&&s.removeEventListener("resize",r.update,ge)}}const gr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yr,data:{}};var wr={left:"right",right:"left",bottom:"top",top:"bottom"};function we(t){return t.replace(/left|right|bottom|top/g,function(e){return wr[e]})}var br={start:"end",end:"start"};function st(t){return t.replace(/start|end/g,function(e){return br[e]})}function ze(t){var e=k(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function qe(t){return re(q(t)).left+ze(t).scrollLeft}function xr(t,e){var r=k(t),n=q(t),a=r.visualViewport,o=n.clientWidth,f=n.clientHeight,i=0,s=0;if(a){o=a.width,f=a.height;var u=xt();(u||!u&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:f,x:i+qe(t),y:s}}function Or(t){var e,r=q(t),n=ze(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=Z(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),f=Z(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+qe(t),s=-n.scrollTop;return V(a||r).direction==="rtl"&&(i+=Z(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:f,x:i,y:s}}function _e(t){var e=V(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function Rt(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:T(t)&&_e(t)?t:Rt(Pe(t))}function fe(t,e){var r;e===void 0&&(e=[]);var n=Rt(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=k(n),f=a?[o].concat(o.visualViewport||[],_e(n)?n:[]):n,i=e.concat(f);return a?i:i.concat(fe(Pe(f)))}function We(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Er(t,e){var r=re(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function ft(t,e,r){return e===wt?We(xr(t,r)):J(e)?Er(e,r):We(Or(q(t)))}function jr(t){var e=fe(Pe(t)),r=["absolute","fixed"].indexOf(V(t).position)>=0,n=r&&T(t)?pe(t):t;return J(n)?e.filter(function(a){return J(a)&&Ot(a,n)&&I(a)!=="body"}):[]}function Pr(t,e,r,n){var a=e==="clippingParents"?jr(t):[].concat(e),o=[].concat(a,[r]),f=o[0],i=o.reduce(function(s,u){var c=ft(t,u,n);return s.top=Z(c.top,s.top),s.right=Ee(c.right,s.right),s.bottom=Ee(c.bottom,s.bottom),s.left=Z(c.left,s.left),s},ft(t,f,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function At(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?ne(n):null,f=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case D:s={x:f,y:e.y-r.height};break;case W:s={x:f,y:e.y+e.height};break;case F:s={x:e.x+e.width,y:i};break;case M:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var u=a?Ve(a):null;if(u!=null){var c=u==="y"?"height":"width";switch(o){case ee:s[u]=s[u]-(e[c]/2-r[c]/2);break;case ce:s[u]=s[u]+(e[c]/2-r[c]/2);break}}return s}function ue(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,f=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?qt:i,u=r.rootBoundary,c=u===void 0?wt:u,p=r.elementContext,v=p===void 0?ie:p,l=r.altBoundary,y=l===void 0?!1:l,m=r.padding,h=m===void 0?0:m,b=jt(typeof h!="number"?h:Pt(h,le)),j=v===ie?_t:ie,x=t.rects.popper,d=t.elements[y?j:v],O=Pr(J(d)?d:d.contextElement||q(t.elements.popper),s,c,f),E=re(t.elements.reference),P=At({reference:E,element:x,strategy:"absolute",placement:a}),R=We(Object.assign({},x,P)),N=v===ie?R:E,A={top:O.top-N.top+b.top,bottom:N.bottom-O.bottom+b.bottom,left:O.left-N.left+b.left,right:N.right-O.right+b.right},$=t.modifiersData.offset;if(v===ie&&$){var L=$[a];Object.keys(A).forEach(function(C){var _=[F,W].indexOf(C)>=0?1:-1,X=[D,W].indexOf(C)>=0?"y":"x";A[C]+=L[X]*_})}return A}function Rr(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,f=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?bt:s,c=ne(n),p=c?i?at:at.filter(function(y){return ne(y)===c}):le,v=p.filter(function(y){return u.indexOf(y)>=0});v.length===0&&(v=p);var l=v.reduce(function(y,m){return y[m]=ue(t,{placement:m,boundary:a,rootBoundary:o,padding:f})[H(m)],y},{});return Object.keys(l).sort(function(y,m){return l[y]-l[m]})}function Ar(t){if(H(t)===Ue)return[];var e=we(t);return[st(t),e,st(e)]}function Nr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!0:f,s=r.fallbackPlacements,u=r.padding,c=r.boundary,p=r.rootBoundary,v=r.altBoundary,l=r.flipVariations,y=l===void 0?!0:l,m=r.allowedAutoPlacements,h=e.options.placement,b=H(h),j=b===h,x=s||(j||!y?[we(h)]:Ar(h)),d=[h].concat(x).reduce(function(Q,z){return Q.concat(H(z)===Ue?Rr(e,{placement:z,boundary:c,rootBoundary:p,padding:u,flipVariations:y,allowedAutoPlacements:m}):z)},[]),O=e.rects.reference,E=e.rects.popper,P=new Map,R=!0,N=d[0],A=0;A<d.length;A++){var $=d[A],L=H($),C=ne($)===ee,_=[D,W].indexOf(L)>=0,X=_?"width":"height",B=ue(e,{placement:$,boundary:c,rootBoundary:p,altBoundary:v,padding:u}),U=_?C?F:M:C?W:D;O[X]>E[X]&&(U=we(U));var de=we(U),Y=[];if(o&&Y.push(B[L]<=0),i&&Y.push(B[U]<=0,B[de]<=0),Y.every(function(Q){return Q})){N=$,R=!1;break}P.set($,Y)}if(R)for(var ve=y?3:1,Re=function(z){var oe=d.find(function(he){var G=P.get(he);if(G)return G.slice(0,z).every(function(Ae){return Ae})});if(oe)return N=oe,"break"},ae=ve;ae>0;ae--){var me=Re(ae);if(me==="break")break}e.placement!==N&&(e.modifiersData[n]._skip=!0,e.placement=N,e.reset=!0)}}const Sr={name:"flip",enabled:!0,phase:"main",fn:Nr,requiresIfExists:["offset"],data:{_skip:!1}};function ct(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function ut(t){return[D,F,W,M].some(function(e){return t[e]>=0})}function $r(t){var e=t.state,r=t.name,n=e.rects.reference,a=e.rects.popper,o=e.modifiersData.preventOverflow,f=ue(e,{elementContext:"reference"}),i=ue(e,{altBoundary:!0}),s=ct(f,n),u=ct(i,a,o),c=ut(s),p=ut(u);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}const Cr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$r};function Dr(t,e,r){var n=H(t),a=[M,D].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=o[0],i=o[1];return f=f||0,i=(i||0)*a,[M,F].indexOf(n)>=0?{x:i,y:f}:{x:f,y:i}}function Mr(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,f=bt.reduce(function(c,p){return c[p]=Dr(p,e.rects,o),c},{}),i=f[e.placement],s=i.x,u=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=f}const Br={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Mr};function kr(t){var e=t.state,r=t.name;e.modifiersData[r]=At({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Tr={name:"popperOffsets",enabled:!0,phase:"read",fn:kr,data:{}};function Wr(t){return t==="x"?"y":"x"}function Fr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,i=f===void 0?!1:f,s=r.boundary,u=r.rootBoundary,c=r.altBoundary,p=r.padding,v=r.tether,l=v===void 0?!0:v,y=r.tetherOffset,m=y===void 0?0:y,h=ue(e,{boundary:s,rootBoundary:u,padding:p,altBoundary:c}),b=H(e.placement),j=ne(e.placement),x=!j,d=Ve(b),O=Wr(d),E=e.modifiersData.popperOffsets,P=e.rects.reference,R=e.rects.popper,N=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,A=typeof N=="number"?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),$=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,L={x:0,y:0};if(E){if(o){var C,_=d==="y"?D:M,X=d==="y"?W:F,B=d==="y"?"height":"width",U=E[d],de=U+h[_],Y=U-h[X],ve=l?-R[B]/2:0,Re=j===ee?P[B]:R[B],ae=j===ee?-R[B]:-P[B],me=e.elements.arrow,Q=l&&me?Ie(me):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Et(),oe=z[_],he=z[X],G=se(0,P[B],Q[B]),Ae=x?P[B]/2-ve-G-oe-A.mainAxis:Re-G-oe-A.mainAxis,Dt=x?-P[B]/2+ve+G+he+A.mainAxis:ae+G+he+A.mainAxis,Ne=e.elements.arrow&&pe(e.elements.arrow),Mt=Ne?d==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,Xe=(C=$==null?void 0:$[d])!=null?C:0,Bt=U+Ae-Xe-Mt,kt=U+Dt-Xe,Ye=se(l?Ee(de,Bt):de,U,l?Z(Y,kt):Y);E[d]=Ye,L[d]=Ye-U}if(i){var Ge,Tt=d==="x"?D:M,Wt=d==="x"?W:F,K=E[O],ye=O==="y"?"height":"width",Ke=K+h[Tt],Ze=K-h[Wt],Se=[D,M].indexOf(b)!==-1,Je=(Ge=$==null?void 0:$[O])!=null?Ge:0,Qe=Se?Ke:K-P[ye]-R[ye]-Je+A.altAxis,et=Se?K+P[ye]+R[ye]-Je-A.altAxis:Ze,tt=l&&Se?fr(Qe,K,et):se(l?Qe:Ke,K,l?et:Ze);E[O]=tt,L[O]=tt-K}e.modifiersData[n]=L}}const Lr={name:"preventOverflow",enabled:!0,phase:"main",fn:Fr,requiresIfExists:["offset"]};function Ur(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Hr(t){return t===k(t)||!T(t)?ze(t):Ur(t)}function Ir(t){var e=t.getBoundingClientRect(),r=te(e.width)/t.offsetWidth||1,n=te(e.height)/t.offsetHeight||1;return r!==1||n!==1}function Vr(t,e,r){r===void 0&&(r=!1);var n=T(e),a=T(e)&&Ir(e),o=q(e),f=re(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((I(e)!=="body"||_e(o))&&(i=Hr(e)),T(e)?(s=re(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=qe(o))),{x:f.left+i.scrollLeft-s.x,y:f.top+i.scrollTop-s.y,width:f.width,height:f.height}}function zr(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var f=[].concat(o.requires||[],o.requiresIfExists||[]);f.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function qr(t){var e=zr(t);return rr.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function _r(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Xr(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Yr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?lt:a;return function(i,s,u){u===void 0&&(u=o);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},p=[],v=!1,l={state:c,setOptions:function(b){var j=typeof b=="function"?b(c.options):b;m(),c.options=Object.assign({},o,c.options,j),c.scrollParents={reference:J(i)?fe(i):i.contextElement?fe(i.contextElement):[],popper:fe(s)};var x=qr(Xr([].concat(n,c.options.modifiers)));return c.orderedModifiers=x.filter(function(d){return d.enabled}),y(),l.update()},forceUpdate:function(){if(!v){var b=c.elements,j=b.reference,x=b.popper;if(pt(j,x)){c.rects={reference:Vr(j,pe(x),c.options.strategy==="fixed"),popper:Ie(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(A){return c.modifiersData[A.name]=Object.assign({},A.data)});for(var d=0;d<c.orderedModifiers.length;d++){if(c.reset===!0){c.reset=!1,d=-1;continue}var O=c.orderedModifiers[d],E=O.fn,P=O.options,R=P===void 0?{}:P,N=O.name;typeof E=="function"&&(c=E({state:c,options:R,name:N,instance:l})||c)}}}},update:_r(function(){return new Promise(function(h){l.forceUpdate(),h(c)})}),destroy:function(){m(),v=!0}};if(!pt(i,s))return l;l.setOptions(u).then(function(h){!v&&u.onFirstUpdate&&u.onFirstUpdate(h)});function y(){c.orderedModifiers.forEach(function(h){var b=h.name,j=h.options,x=j===void 0?{}:j,d=h.effect;if(typeof d=="function"){var O=d({state:c,name:b,instance:l,options:x}),E=function(){};p.push(O||E)}})}function m(){p.forEach(function(h){return h()}),p=[]}return l}}var Gr=[gr,Tr,hr,or,Br,Sr,Lr,pr,Cr],Kr=Yr({defaultModifiers:Gr}),Zr=typeof Element<"u",Jr=typeof Map=="function",Qr=typeof Set=="function",en=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function be(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var r,n,a;if(Array.isArray(t)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(!be(t[n],e[n]))return!1;return!0}var o;if(Jr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!be(n.value[1],e.get(n.value[0])))return!1;return!0}if(Qr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(en&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(r=t.length,r!=e.length)return!1;for(n=r;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(a=Object.keys(t),r=a.length,r!==Object.keys(e).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,a[n]))return!1;if(Zr&&t instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&t.$$typeof)&&!be(t[a[n]],e[a[n]]))return!1;return!0}return t!==t&&e!==e}var tn=function(e,r){try{return be(e,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const rn=Ft(tn);var nn=[],an=function(e,r,n){n===void 0&&(n={});var a=g.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||nn},f=g.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),i=f[0],s=f[1],u=g.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(l){var y=l.state,m=Object.keys(y.elements);Lt.flushSync(function(){s({styles:rt(m.map(function(h){return[h,y.styles[h]||{}]})),attributes:rt(m.map(function(h){return[h,y.attributes[h]]}))})})},requires:["computeStyles"]}},[]),c=g.useMemo(function(){var v={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[u,{name:"applyStyles",enabled:!1}])};return rn(a.current,v)?a.current||v:(a.current=v,v)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,u]),p=g.useRef();return nt(function(){p.current&&p.current.setOptions(c)},[c]),nt(function(){if(!(e==null||r==null)){var v=n.createPopper||Kr,l=v(e,r,c);return p.current=l,function(){l.destroy(),p.current=null}}},[e,r,n.createPopper]),{state:p.current?p.current.state:null,styles:i.styles,attributes:i.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}},on=function(){},sn=function(){return Promise.resolve(null)},fn=[];function cn(t){var e=t.placement,r=e===void 0?"bottom":e,n=t.strategy,a=n===void 0?"absolute":n,o=t.modifiers,f=o===void 0?fn:o,i=t.referenceElement,s=t.onFirstUpdate,u=t.innerRef,c=t.children,p=g.useContext(mt),v=g.useState(null),l=v[0],y=v[1],m=g.useState(null),h=m[0],b=m[1];g.useEffect(function(){ke(u,l)},[u,l]);var j=g.useMemo(function(){return{placement:r,strategy:a,onFirstUpdate:s,modifiers:[].concat(f,[{name:"arrow",enabled:h!=null,options:{element:h}}])}},[r,a,s,f,h]),x=an(i||p,l,j),d=x.state,O=x.styles,E=x.forceUpdate,P=x.update,R=g.useMemo(function(){return{ref:y,style:O.popper,placement:d?d.placement:r,hasPopperEscaped:d&&d.modifiersData.hide?d.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:d&&d.modifiersData.hide?d.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:O.arrow,ref:b},forceUpdate:E||on,update:P||sn}},[y,b,r,d,O,P,E]);return yt(c)(R)}function un(t){var e=t.children,r=t.innerRef,n=g.useContext(ht),a=g.useCallback(function(o){ke(r,o),gt(n,o)},[r,n]);return g.useEffect(function(){return function(){return ke(r,null)}},[]),g.useEffect(function(){Ut(!!n,"`Reference` should not be used outside of a `Manager` component.")},[n]),yt(e)({ref:a})}function $e(t){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}}]})(t)}function Ce(t){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"}}]})(t)}function De(t){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}}]})(t)}function Me(t){return je({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"}}]})(t)}const dt=({placement:t,color:e,colorDark:r})=>{const n=`absolute text-${e} dark:text-${r}`,a=()=>{switch(t){case"top":return w.jsx($e,{className:S(n,"-bottom-2 w-full left-0")});case"top-start":return w.jsx($e,{className:S(n,"-bottom-2 left-0 ml-3")});case"top-end":return w.jsx($e,{className:S(n,"-bottom-2 right-0 mr-3")});case"right":return w.jsx(Ce,{className:S(n,"-left-2 top-1/2 transform -translate-y-1/2")});case"right-start":return w.jsx(Ce,{className:S(n,"-left-2 top-2")});case"right-end":return w.jsx(Ce,{className:S(n,"-left-2 bottom-2")});case"bottom":return w.jsx(Me,{className:S(n,"-top-2 w-full left-0")});case"bottom-start":return w.jsx(Me,{className:S(n,"-top-2 left-0 ml-3")});case"bottom-end":return w.jsx(Me,{className:S(n,"-top-2 right-0 mr-3")});case"left":return w.jsx(De,{className:S(n,"-right-2 top-1/2 transform -translate-y-1/2")});case"left-start":return w.jsx(De,{className:S(n,"-right-2 top-2")});case"left-end":return w.jsx(De,{className:S(n,"-right-2 bottom-2")})}};return w.jsx("div",{children:a()})};var ln=!!(typeof window<"u"&&window.document&&window.document.createElement),pn=function(){function t(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function dn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function vn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function mn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Nt=function(t){mn(e,t);function e(){return dn(this,e),vn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return pn(e,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return ln?(!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),xe.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),e}(Be.Component);Nt.propTypes={children:Oe.node.isRequired,node:Oe.any};const hn=Nt;var yn=function(){function t(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function gn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function bn(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var St=function(t){bn(e,t);function e(){return gn(this,e),wn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return yn(e,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(n){this.renderPortal()}},{key:"componentWillUnmount",value:function(){xe.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(n){!this.props.node&&!this.defaultNode&&(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var a=this.props.children;typeof this.props.children.type=="function"&&(a=Be.cloneElement(this.props.children)),this.portal=xe.unstable_renderSubtreeIntoContainer(this,a,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),e}(Be.Component);const xn=St;St.propTypes={children:Oe.node.isRequired,node:Oe.any};var Fe=void 0;xe.createPortal?Fe=hn:Fe=xn;const On=Fe,En=t=>{const{title:e,forceUpdate:r,open:n}=t;return g.useEffect(()=>{n&&r()},[n]),w.jsx("span",{children:e})},$t=t=>{const{className:e,children:r,isOpen:n=!1,placement:a="top",title:o,wrapperClass:f,...i}=t,[s,u]=g.useState(n),c=g.useRef(),p="gray-800",v="black",l=`tooltip bg-${p} dark:bg-${v}`,y=g.useCallback(m=>{n||u(m)},[n]);return w.jsxs(zt,{children:[w.jsx(un,{children:({ref:m})=>w.jsx("span",{ref:m,className:S("tooltip-wrapper",f),onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),children:r})}),s&&w.jsx(On,{children:w.jsx(cn,{placement:a,innerRef:m=>c.current=m,modifiers:[{name:"arrow",options:{element:dt}},{name:"offset",options:{offset:[0,7]}}],strategy:"fixed",children:({ref:m,style:h,...b})=>w.jsx(It,{children:w.jsxs(Ht.div,{ref:m,className:S(l,e),style:h,initial:{opacity:0,visibility:"hidden"},animate:s?{opacity:1,visibility:"visible"}:{opacity:0,visibility:"hidden"},transition:{duration:.15,type:"tween"},children:[w.jsx(En,{open:s,title:o,...i,...b}),w.jsx(dt,{placement:a,color:p,colorDark:v})]})})})})]})};$t.displayName="Tooltip";const vt=({children:t,chained:e,className:r})=>w.jsx("div",{className:S("avatar-group",e&&"avatar-group-chained",r),children:t}),Ct=t=>{const{chained:e=!1,children:r,className:n,maxCount:a=4,onOmittedAvatarClick:o,omittedAvatarContent:f,omittedAvatarProps:i,omittedAvatarTooltip:s=!1}=t,u=g.Children.count(r),c=g.Children.toArray(r).map((p,v)=>g.cloneElement(p,{key:`grouped-avatar-${v}`}));if(a&&a<u){const p=c.slice(0,a),v=u-a,l=w.jsx(Le,{className:o?"cursor-pointer":"",onClick:()=>o==null?void 0:o(),...i,children:f||`+${v}`});return p.push(s?w.jsx($t,{title:`${v} More`,children:w.jsx(w.Fragment,{children:l})},"avatar-more-tooltip"):w.jsx(g.Fragment,{children:l},"avatar-more-tooltip")),w.jsx(vt,{className:n,chained:e,children:p})}return w.jsx(vt,{className:n,chained:e,children:r})};Ct.displayName="AvatarGroup";const jn=Le;jn.Group=Ct;export{jn as A,$t as T,Vt as a,an as u};
