(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873,949],{1320:function(e,t,r){Promise.resolve().then(r.bind(r,8183)),Promise.resolve().then(r.bind(r,5879)),Promise.resolve().then(r.bind(r,2034)),Promise.resolve().then(r.bind(r,1091)),Promise.resolve().then(r.t.bind(r,231,23))},8183:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(7437);r(7138);var s=r(2265),l=r(19),i=r(9582),a=function(e){let{words:t=""}=e,r=(0,s.useRef)([]);return(0,s.useRef)([]),(0,l.V)(()=>{r.current.forEach((e,t)=>{let r=i.ZP.timeline({paused:!0});r.fromTo(e,{y:0},{y:-30,duration:.5,ease:"back.out",color:"#5F7FF8"}),e.addEventListener("mouseenter",()=>r.play()),e.addEventListener("mouseout",()=>r.reverse())})},[]),(0,n.jsx)("div",{className:"flex ",children:t.split("").map((e,t)=>(0,n.jsx)("span",{className:"block",ref:e=>r.current[t]=e,children:e},t))})},o=r(9955),c=r(5879),u=r(5667),d=function(){let[e,t]=(0,s.useState)(0),r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{var e;t((null===(e=r.current)||void 0===e?void 0:e.offsetHeight)/2)},[]),(0,n.jsx)("section",{id:"CTA-section",className:"sm:rounded-tr-[3.125rem flex h-screen w-screen flex-col items-center justify-center rounded-tl-[0.7rem] rounded-tr-[0.7rem] bg-[#111] sm:rounded-tl-[3.125rem]",children:(0,n.jsxs)("div",{className:"relative",id:"cursor-card",children:[(0,n.jsx)("div",{className:"relative h-fit w-fit border border-dashed px-[4rem] py-[8rem] sm:px-[6rem] lg:px-[8rem]",children:(0,n.jsxs)("div",{className:"relative flex flex-col items-center justify-center px-4 py-4",children:[(0,n.jsxs)("h2",{className:"max-md:font-h5 text-center font-semibold uppercase text-white md:text-[2.25rem] lg:text-[4.5rem]",children:[(0,n.jsxs)("div",{className:"flex gap-[0.5rem] lg:gap-6",children:[(0,n.jsx)(a,{words:"READY"}),(0,n.jsx)(a,{words:"TO"}),(0,n.jsx)(a,{words:"BUILD"})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center gap-[0.5rem] lg:gap-6",children:[(0,n.jsx)("span",{children:"Your"}),(0,n.jsx)(o.Z,{inText:"WEBSITE?",upText:"PROJECT?"})]})]}),(0,n.jsx)("div",{className:"absolute -right-0 top-0 h-4 w-4 rounded-full bg-primary lg:-right-2 lg:h-6 lg:w-6"}),(0,n.jsx)("p",{className:"max-sm:font-b5 mt-2 uppercase text-green sm:mt-4",children:"3 SLOTS AVAILABLE"})]})}),(0,n.jsx)("div",{className:"absolute -left-2 -top-2 h-4 w-4 bg-white"}),(0,n.jsx)("div",{className:"absolute -bottom-2 -left-2 h-4 w-4 bg-white"}),(0,n.jsx)("div",{className:"absolute -right-2 -top-2 h-4 w-4 bg-white"}),(0,n.jsx)("div",{className:"absolute -bottom-2 -right-2 h-4 w-4 bg-white"}),(0,n.jsx)(c.default,{children:(0,n.jsx)("div",{children:(0,n.jsx)(u.default,{href:"/contact",children:(0,n.jsx)("button",{ref:r,className:"text-md absolute left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-2 font-normal text-black-100 transition-all duration-500 ease-in-out hover:bg-white hover:text-black-100 max-sm:font-[0.7rem] sm:px-6 sm:py-4 sm:font-semibold lg:px-10 lg:text-lg",style:{bottom:"-".concat(e,"px")},children:"Let's make it happen"})})})})]})})}},5667:function(e,t,r){"use strict";var n=r(7437),s=r(9582),l=r(7138),i=r(6463),a=r(2265);t.default=function(e){let{children:t,href:r}=e,o=(0,i.useRouter)(),c=(0,i.usePathname)();async function u(e){if(e.preventDefault(),c===r)return;let t=document.querySelector("#transition-page");null==t||t.classList.add("animate-page-out"),s.ZP.to(t,{y:40,opacity:0}),await new Promise(e=>setTimeout(e,300)),o.push(r)}return(0,a.useEffect)(()=>{},[c]),(0,n.jsx)(l.default,{onClick:u,href:r,children:t})}},9955:function(e,t,r){"use strict";var n=r(7437),s=r(19),l=r(9582),i=r(2265);t.Z=function(e){let{inText:t="Intext",upText:r=""}=e,a=(0,i.useRef)(null),o=(0,i.useRef)(null),c=(0,i.useRef)(null);return(0,s.V)(()=>{let e=l.ZP.timeline({paused:!0});e.to(a.current,{yPercent:-100,opacity:.2,duration:.4}),e.fromTo(o.current,{},{yPercent:-100,color:"#C1E693",duration:.4},"<"),c.current.addEventListener("mouseenter",()=>e.play()),c.current.addEventListener("mouseleave",()=>e.reverse())},[]),(0,n.jsxs)("div",{ref:c,className:"relative w-min overflow-hidden",children:[(0,n.jsx)("span",{className:"inline-block leading-none text-nowrap",ref:a,children:t}),(0,n.jsx)("span",{className:"block absolute top-full text-nowrap",ref:o,children:""===r?t:r})]})}},5879:function(e,t,r){"use strict";var n=r(9582),s=r(2265);t.default=function(e){let{children:t}=e,r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=()=>{if(window.innerWidth>=1024){let s=n.ZP.quickTo(r.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),l=n.ZP.quickTo(r.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});function e(e){let{clientX:t,clientY:n}=e,{width:i,height:a,left:o,top:c}=r.current.getBoundingClientRect();s(.5*(t-(o+i/2))),l(.5*(n-(c+a/2)))}function t(){s(0),l(0)}return r.current.addEventListener("mousemove",e),r.current.addEventListener("mouseleave",t),()=>{r.current.removeEventListener("mousemove",e),r.current.removeEventListener("mouseleave",t)}}};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),s.cloneElement(t,{ref:r})}},2034:function(e,t,r){"use strict";var n=r(7437),s=r(5879);t.default=function(e){let{transparent:t=!1}=e;return(0,n.jsx)(s.default,{children:(0,n.jsx)("div",{className:"h-full w-full rounded-full ".concat(t?null:"bg-white"),children:(0,n.jsx)("img",{src:"/scroll-anim.gif",alt:"scroll down",className:"absolute left-[50%] top-0 h-fit w-fit -translate-x-1/2 cursor-pointer px-1 py-1"})})})}},1091:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(19),l=r(9582),i=r(1204),a=r(2265);t.default=function(e){let t,{children:r,isSkew:o=!0,bgPrimary:c="primary"}=e,u=(0,a.useRef)(null),d=(0,a.useRef)(null),m=(0,a.useRef)(null),f=(0,a.useRef)(null),x=0,h=-1;return l.ZP.registerPlugin(i.i),(0,s.V)(()=>{let e=()=>{x<=-100&&(x=0),x>0&&(x=-100),l.ZP.set(d.current,{xPercent:x}),l.ZP.set(m.current,{xPercent:x}),l.ZP.set(f.current,{xPercent:x}),x+=.03*h,t=requestAnimationFrame(e)};return e(),l.ZP.to(u.current,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:.25,onUpdate:e=>h=1*e.direction},x:"+=100px"}),()=>{cancelAnimationFrame(t)}},[]),(0,n.jsx)("div",{className:"container-ticker flex w-[100vw] ".concat(o&&"-skew-y-1"," overflow-x-clip ").concat("primary"===c&&"bg-primary"," py-2 sm:px-8 sm:py-4 ").concat("primary"===c?"text-white":"text-black"),children:(0,n.jsxs)("div",{className:"relative left-[-50%] flex w-max flex-nowrap whitespace-nowrap",ref:u,children:[(0,n.jsx)("div",{ref:d,className:"flex w-max text-nowrap text-xl font-medium",children:r}),(0,n.jsx)("div",{ref:m,className:"flex w-max text-nowrap text-xl font-medium",children:r}),(0,n.jsx)("div",{ref:f,className:"flex w-max text-nowrap text-xl font-medium",children:r})]})})}}},function(e){e.O(0,[922,231,582,213,971,23,744],function(){return e(e.s=1320)}),_N_E=e.O()}]);