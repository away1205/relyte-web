(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5102:function(e,t,s){Promise.resolve().then(s.bind(s,2500))},8183:function(e,t,s){"use strict";s.d(t,{default:function(){return d}});var r=s(7437);s(7138);var a=s(2265),i=s(19),n=s(9582),l=function(e){let{words:t=""}=e,s=(0,a.useRef)([]);return(0,a.useRef)([]),(0,i.V)(()=>{s.current.forEach((e,t)=>{let s=n.ZP.timeline({paused:!0});s.fromTo(e,{y:0},{y:-30,duration:.5,ease:"back.out",color:"#5F7FF8"}),e.addEventListener("mouseenter",()=>s.play()),e.addEventListener("mouseout",()=>s.reverse())})},[]),(0,r.jsx)("div",{className:"flex ",children:t.split("").map((e,t)=>(0,r.jsx)("span",{className:"block",ref:e=>s.current[t]=e,children:e},t))})},o=s(9955),c=s(5879),m=s(5667),d=function(){let[e,t]=(0,a.useState)(0),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var e;t((null===(e=s.current)||void 0===e?void 0:e.offsetHeight)/2)},[]),(0,r.jsx)("section",{id:"CTA-section",className:"sm:rounded-tr-[3.125rem flex h-screen w-screen flex-col items-center justify-center rounded-tl-[0.7rem] rounded-tr-[0.7rem] bg-[#111] sm:rounded-tl-[3.125rem]",children:(0,r.jsxs)("div",{className:"relative",id:"cursor-card",children:[(0,r.jsx)("div",{className:"relative h-fit w-fit border border-dashed px-[4rem] py-[8rem] sm:px-[6rem] lg:px-[8rem]",children:(0,r.jsxs)("div",{className:"relative flex flex-col items-center justify-center px-4 py-4",children:[(0,r.jsxs)("h2",{className:"max-md:font-h5 text-center font-semibold uppercase text-white md:text-[2.25rem] lg:text-[4.5rem]",children:[(0,r.jsxs)("div",{className:"flex gap-[0.5rem] lg:gap-6",children:[(0,r.jsx)(l,{words:"READY"}),(0,r.jsx)(l,{words:"TO"}),(0,r.jsx)(l,{words:"BUILD"})]}),(0,r.jsxs)("div",{className:"flex items-center justify-center gap-[0.5rem] lg:gap-6",children:[(0,r.jsx)("span",{children:"Your"}),(0,r.jsx)(o.Z,{inText:"WEBSITE?",upText:"PROJECT?"})]})]}),(0,r.jsx)("div",{className:"absolute -right-0 top-0 h-4 w-4 rounded-full bg-primary lg:-right-2 lg:h-6 lg:w-6"}),(0,r.jsx)("p",{className:"max-sm:font-b5 mt-2 uppercase text-green sm:mt-4",children:"3 SLOTS AVAILABLE"})]})}),(0,r.jsx)("div",{className:"absolute -left-2 -top-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -bottom-2 -left-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -right-2 -top-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -bottom-2 -right-2 h-4 w-4 bg-white"}),(0,r.jsx)(c.default,{children:(0,r.jsx)("div",{children:(0,r.jsx)(m.default,{href:"/contact",children:(0,r.jsx)("button",{ref:s,className:"text-md absolute left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-2 font-normal text-black-100 transition-all duration-500 ease-in-out hover:bg-white hover:text-black-100 max-sm:font-[0.7rem] sm:px-6 sm:py-4 sm:font-semibold lg:px-10 lg:text-lg",style:{bottom:"-".concat(e,"px")},children:"Let's make it happen"})})})})]})})}},2034:function(e,t,s){"use strict";var r=s(7437),a=s(5879);t.default=function(e){let{transparent:t=!1}=e;return(0,r.jsx)(a.default,{children:(0,r.jsx)("div",{className:"h-full w-full rounded-full ".concat(t?null:"bg-white"),children:(0,r.jsx)("img",{src:"/scroll-anim.gif",alt:"scroll down",className:"absolute left-[50%] top-0 h-fit w-fit -translate-x-1/2 cursor-pointer px-1 py-1"})})})}},1091:function(e,t,s){"use strict";s.r(t);var r=s(7437),a=s(19),i=s(9582),n=s(1204),l=s(2265);t.default=function(e){let t,{children:s,isSkew:o=!0,bgPrimary:c="primary"}=e,m=(0,l.useRef)(null),d=(0,l.useRef)(null),x=(0,l.useRef)(null),u=(0,l.useRef)(null),g=0,h=-1;return i.ZP.registerPlugin(n.i),(0,a.V)(()=>{let e=()=>{g<=-100&&(g=0),g>0&&(g=-100),i.ZP.set(d.current,{xPercent:g}),i.ZP.set(x.current,{xPercent:g}),i.ZP.set(u.current,{xPercent:g}),g+=.03*h,t=requestAnimationFrame(e)};return e(),i.ZP.to(m.current,{scrollTrigger:{trigger:document.documentElement,start:0,end:window.innerHeight,scrub:.25,onUpdate:e=>h=1*e.direction},x:"+=100px"}),()=>{cancelAnimationFrame(t)}},[]),(0,r.jsx)("div",{className:"container-ticker flex w-[100vw] ".concat(o&&"-skew-y-1"," overflow-x-clip ").concat("primary"===c&&"bg-primary"," py-2 sm:px-8 sm:py-4 ").concat("primary"===c?"text-white":"text-black"," ").concat("black"===c&&"bg-black text-white"),children:(0,r.jsxs)("div",{className:"relative left-[-50%] flex w-max flex-nowrap whitespace-nowrap",ref:m,children:[(0,r.jsx)("div",{ref:d,className:"flex w-max text-nowrap text-xl font-medium",children:s}),(0,r.jsx)("div",{ref:x,className:"flex w-max text-nowrap text-xl font-medium",children:s}),(0,r.jsx)("div",{ref:u,className:"flex w-max text-nowrap text-xl font-medium",children:s})]})})}},2500:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var r=s(7437),a=s(2265),i=s(19),n=s(9582),l=s(1204),o=s(2801),c=s(4839),m=s(6164);function d(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,m.m6)((0,c.W)(t))}let x=e=>{let{words:t=[],duration:s=3e3,className:l}=e,[o,c]=(0,a.useState)(t[0]),m=(0,a.useRef)(null),[x,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!x){let e=setTimeout(()=>{g()},s);return()=>clearTimeout(e)}},[x,s]);let g=()=>{c(t[t.indexOf(o)+1]||t[0]),u(!0),n.p8.timeline({onComplete:()=>u(!1)}).to(m.current,{opacity:0,y:10,duration:.4,ease:"easeInOut"}).set(m.current,{opacity:1}).to(m.current,{y:0,x:0,scale:1,filter:"blur(0px)",duration:.4,ease:"easeInOut"})};return(0,i.V)(()=>{let e=m.current.querySelectorAll("span");n.p8.fromTo(e,{opacity:0,y:10,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.4,stagger:.1})},[o]),(0,r.jsx)("div",{ref:m,className:d("relative inline-block px-2 text-left text-black",l),children:o.split("").map((e,t)=>(0,r.jsx)("span",{className:"inline-block",children:e},o+t))},o)},u=e=>{let{words:t=[],duration:s=3e3,className:l}=e,[o,c]=(0,a.useState)(t[0]),m=(0,a.useRef)(null),[x,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{if(!x){let e=setTimeout(()=>{g()},s);return()=>clearTimeout(e)}},[x,s]);let g=()=>{c(t[t.indexOf(o)+1]||t[0]),u(!0),n.p8.timeline({onComplete:()=>u(!1)}).to(m.current,{opacity:0,y:10,duration:.4,ease:"easeInOut"}).set(m.current,{opacity:1}).to(m.current,{y:0,x:0,scale:1,filter:"blur(0px)",duration:.4,ease:"easeInOut"})};return(0,i.V)(()=>{let e=m.current.querySelectorAll("span");n.p8.fromTo(e,{opacity:0,y:10,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.4,stagger:.1})},[o]),(0,r.jsx)("div",{ref:m,className:d("relative inline-block text-left text-black",l),children:(0,r.jsx)("span",{children:o})},o)},g=[{title:"Drive Traffic",isDown:!0,text:"Standing out in a crowded market is tough, but our data-driven, unique, and creative design, ensures your website captures attention, drives traffic and set you apart",bgColor:"bg-[#C1E693]",bgImg:{src:"/_next/static/media/bg-website.83398a0a.svg",height:301,width:312,blurWidth:0,blurHeight:0},handImg:{src:"/_next/static/media/hand-website.fd582dba.svg",height:299,width:308,blurWidth:0,blurHeight:0},gif:"/_next/static/videos/lead-webm.516b4627f95cf00550add5f303f99f00.webm"},{title:"Engage Leads",isDown:!1,text:"We closely consider your target audience needs and preferences, ensuring an engaging and intuitive experience that increases conversion rates",bgColor:"bg-[#9AACEF]",bgImg:{src:"/_next/static/media/bg-people.d85eec4b.svg",height:400,width:312,blurWidth:0,blurHeight:0},handImg:{src:"/_next/static/media/hand-people.c78ce89c.svg",height:222,width:150,blurWidth:0,blurHeight:0},gif:"/_next/static/videos/traffic-webm.a3585fc4f5d5c80f147d8ed1b42307ce.webm"},{title:"Convert Clients",isDown:!0,text:"Lastly, we ensure your website builds a reliable brand, showcases your expertise, and converts visitors into loyal customers.",bgColor:"bg-[#E8E2F8]",bgImg:{src:"/_next/static/media/bg-trust.8f081418.svg",height:400,width:312,blurWidth:0,blurHeight:0},handImg:{src:"/_next/static/media/hand-trust.4e00978c.svg",height:226,width:216,blurWidth:0,blurHeight:0},gif:"/_next/static/videos/convert-webm.14d6530b416e29c153f8970f5ba86971.webm"}],h=[{text:"MSMEs websites have poor design, hurting its conversion.",number:"70%",source:"- Launch North"},{text:"users will leave a site if they don't find what they need in 5 seconds.",number:"61%",source:"- Forbes"},{text:"of online users won’t return to a website after a bad experience",number:"88%",source:"- Sweor"}];function p(e){let{text:t,title:s,gif:a,id:i}=e;return(0,r.jsxs)("div",{className:"care-main-card relative flex h-[9rem] w-[18rem] flex-col justify-end gap-[0.75rem] overflow-hidden rounded-[0.75rem] bg-[#fff] px-4 py-4 shadow-[-3.538px_3.538px_22.115px_0px_rgba(255,255,255,0.3)] sm:h-[22rem] sm:gap-6 sm:rounded-[2.5rem] sm:px-6 sm:py-12 lg:h-[25rem] lg:w-[19.5rem] ".concat(2===i&&"md:max-lg:row-span-2 md:max-lg:my-auto"),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-0 sm:gap-2",children:[(0,r.jsxs)("span",{className:"leading-none max-sm:text-[0.625rem] sm:font-semibold",children:["0",i]}),(0,r.jsx)("h2",{className:"max-sm:h8 sm:font-h5 font-semibold",children:s})]}),(0,r.jsx)("p",{className:"max-sm:font-b5 text-pretty font-normal max-sm:opacity-50",children:t}),(0,r.jsx)("div",{className:"absolute -right-[3px] -top-[3px] rounded-full px-2 py-2 sm:-right-[5px] sm:-top-[5px] sm:px-6 sm:py-6 ".concat(2===i?"bg-green":"bg-[#9AACEF]"),children:(0,r.jsxs)("video",{loop:!0,autoPlay:!0,muted:!0,playsInline:!0,className:"h-[1.4rem] w-[1.4rem] sm:h-[3.5rem] sm:w-[3.5rem]",children:[(0,r.jsx)("source",{src:a,type:"video/webm"}),"Your browser does not support the video tag."]})})]})}var f=function(){n.ZP.registerPlugin(l.i);let e=(0,a.useRef)();return(0,i.V)(()=>{let e=n.ZP.timeline({scrollTrigger:{trigger:".care-container",start:"top+=200 top",end:"bottom bottom",scrub:1}});e.to(".care-card1",{scale:.95,opacity:.3,duration:2}),e.to(".care-card2",{scale:.95,opacity:.3,duration:3}),e.to(".care-card1",{opacity:0},"<"),n.ZP.timeline({scrollTrigger:{trigger:".care-card3",start:"top-=200 top",end:"bottom+=600 bottom",scrub:1}}).to(".care-card3",{scale:1,duration:3}),n.ZP.timeline({scrollTrigger:{trigger:".care-card3",start:"top top",end:"bottom+=200% bottom",scrub:1,pin:!0,pinReparent:!0,pinSpacing:!0}}).to(".anim-green2",{color:"#C1E693",duration:2},"<").to(".hidden-word",{opacity:0,delay:2,duration:3},"<").to(".unhidden-word",{opacity:1},"<+3").to(".anim-green",{color:"#C1E693",delay:1,duration:6},"<").to(".unhidden-word",{opacity:0,delay:2,duration:3},"<3").to(".unhidden-word2",{opacity:1}).to(".unhidden-word2",{opacity:.3,delay:2,duration:3},"<3").fromTo(".care-main-card",{opacity:0,y:200},{opacity:1,y:0,duration:3,stagger:.2})}),(0,r.jsx)("section",{ref:e,id:"care-section",children:(0,r.jsxs)("div",{className:"care-container flex flex-col items-center",children:[(0,r.jsx)("div",{className:"sticky top-0 h-[100vh]",children:(0,r.jsxs)("div",{className:"card-container care-card1 relative top-[20%] flex min-w-fit flex-col items-start justify-center gap-8 overflow-hidden rounded-2xl bg-black-100 px-8 py-6 sm:top-[15%] sm:px-20 sm:py-20 sm:pt-12",children:[(0,r.jsx)("img",{src:"./illustration-percentage.svg",alt:"percentage illustration",className:"relative -left-[3rem] max-sm:w-[5rem] sm:-left-24"}),(0,r.jsxs)("div",{className:"flex items-start gap-4 text-white max-md:flex-col",children:[(0,r.jsx)("div",{className:"w-fit text-center sm:h-[6rem] sm:w-[10rem]",children:(0,r.jsx)(x,{className:"font-d3 text-center text-white max-sm:px-0 max-sm:text-[1.75rem]",words:h.map(e=>e.number),duration:4e3})}),(0,r.jsxs)("div",{className:"flex w-[12rem] flex-col gap-2 text-wrap sm:w-[20rem]",children:[(0,r.jsx)(u,{words:h.map(e=>e.text),className:"font-h5 text-white max-sm:text-[0.875rem]",duration:4e3}),(0,r.jsx)(x,{words:h.map(e=>e.source),duration:4e3,className:"px-0 text-gray-300 max-sm:text-[0.65rem]"})]})]})]})}),(0,r.jsx)("div",{className:"sticky top-0 h-[100vh]",children:(0,r.jsx)("div",{className:"care-card2 card-container relative top-[20%] z-[2] mb-[100vh] flex flex-col items-center justify-center gap-8 rounded-[0.9rem] bg-black-100 px-8 py-8 sm:rounded-2xl sm:px-20 sm:py-20 md:w-[40rem]",children:(0,r.jsxs)("div",{className:"relative",id:"cursor-card",children:[(0,r.jsxs)("h2",{className:"font-h5 relative border border-dashed px-6 py-[5rem] text-center text-white max-sm:text-[0.875rem] sm:px-20 sm:py-20",children:[(0,r.jsxs)("span",{children:["Seeking someone ",(0,r.jsx)("br",{}),"who can steer clear ",(0,r.jsx)("br",{})]}),(0,r.jsx)("span",{className:"mt-[50vh] text-green",children:"this problem?"})]}),(0,r.jsx)("div",{className:"absolute -left-2 -top-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -bottom-2 -left-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -right-2 -top-2 h-4 w-4 bg-white"}),(0,r.jsx)("div",{className:"absolute -bottom-2 -right-2 h-4 w-4 bg-white"})]})})}),(0,r.jsx)("div",{className:"care-card3 relative top-0 min-h-[100vh] bg-black-100 pb-[4rem] sm:pb-[20rem]",children:(0,r.jsxs)("div",{className:"card-container relative z-[3] flex min-h-[100vh] w-[100vw] flex-col items-center justify-center rounded-2xl px-20 py-20",children:[(0,r.jsxs)("h2",{className:"text-center text-[1.25rem] font-normal leading-[125%] text-white sm:text-[2.5rem] lg:text-[3.5rem]",children:[(0,r.jsxs)("span",{className:"hidden-word absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2",children:["Dont worry, ",(0,r.jsx)("br",{})," you just found"," ",(0,r.jsx)("span",{className:"anim-green2",children:"one"}),"."]}),(0,r.jsxs)("span",{className:"unhidden-word absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-nowrap opacity-0",children:["We're not just building ",(0,r.jsx)("br",{})," websites - We're crafting your ",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"anim-green",children:"digital revenue streams"})]}),(0,r.jsx)("span",{className:"unhidden-word2 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0",children:"Here are the 3 key steps we take to make it happen."})]}),(0,r.jsx)("div",{className:"z-10 flex w-fit gap-6 max-sm:absolute max-sm:top-1/2 max-sm:-translate-y-1/2 max-sm:flex-col sm:grid sm:gap-12 md:max-lg:grid-cols-2 md:max-lg:gap-40 lg:mx-8 lg:flex lg:flex-row xl:mx-auto",children:g.map((e,t)=>{let{title:s,isDown:a,text:i,bgColor:n,bgImg:l,handImg:o,gif:c}=e;return(0,r.jsx)(p,{isDown:a,text:i,title:s,bgColor:n,className:"care-main-card",bgImg:l,handImg:o,id:t+1,gif:c},t)})})]})})]})})},b=s(2034),y=s(1091),w=function(){return n.ZP.registerPlugin(l.i,o.Z),(0,i.V)(()=>{n.ZP.timeline({scrollTrigger:{trigger:"#hero-1",start:"top+=200 top",end:"bottom+=100% bottom",scrub:1}}).to(".hero-line-1",{x:"-55%",opacity:.2,duration:2}).to(".hero-line-2",{x:"55%",opacity:.2,duration:2},0).to(".hero-anim-card",{opacity:0},"<=+2")},[]),(0,r.jsxs)("section",{id:"hero-section",className:"dot-bg flex h-max w-[100vw] flex-col items-center overflow-x-clip",children:[(0,r.jsxs)("div",{id:"hero-1",className:"sticky top-0 mx-auto flex h-[100vh] flex-col items-center justify-center max-sm:gap-2",children:[(0,r.jsxs)("div",{className:"dip-3 xl:dip-1 mt-20 flex flex-col max-sm:gap-2",children:[(0,r.jsxs)("div",{className:"hero-line-1 flex items-center justify-center gap-2 sm:gap-6 lg:gap-8",children:[(0,r.jsx)("p",{className:"max-sm:text-[2.25rem] max-sm:leading-none",children:"TOGETHER"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"hero-anim-card absolute bottom-[2rem] right-0 h-[10px] w-[10px] rounded-full bg-primary sm:bottom-[4.8rem] sm:h-[20px] sm:w-[20px] xl:bottom-[6rem]"}),(0,r.jsx)("div",{className:"hero-anim-card flex h-[1.88rem] items-center justify-center rounded-[100px] bg-black bg-[length:3.5rem_3.5rem] bg-[center_bottom_-1.2rem] bg-no-repeat max-sm:w-[5.75rem] sm:h-[4.6rem] sm:bg-[length:8.5rem_8.5rem] sm:bg-[center_bottom_-3rem] sm:px-[125px] sm:py-[14px] xl:h-[6rem] xl:bg-[length:11rem_11rem] xl:bg-[center_bottom_-4rem]",style:{backgroundImage:"url(".concat("/_next/static/media/wired-outline-12-layers.5a8e71a1.gif",")")}})]})]}),(0,r.jsxs)("div",{className:"hero-line-2 flex items-center gap-2 sm:gap-8",children:[(0,r.jsx)("div",{className:"hero-anim-card flex h-[1.85rem] items-center justify-center rounded-[100px] bg-green bg-[length:5.5rem_5.5rem] bg-[right_-2.2rem] bg-no-repeat max-sm:w-[7rem] sm:h-[4.6rem] sm:bg-[length:12rem_12rem] sm:px-[125px] sm:py-[14px] xl:h-[6rem] xl:bg-cover",style:{backgroundImage:"url(".concat("/_next/static/media/wired-outline-stairs.8e7e2075.gif",")")}}),(0,r.jsxs)("div",{className:"relative flex",children:[(0,r.jsx)("p",{className:"max-sm:text-[2.25rem] max-sm:leading-none",children:"WE"}),(0,r.jsx)("span",{className:"absolute left-[3.2rem] w-max max-sm:text-[2.25rem] max-sm:leading-none sm:left-[8.6rem] xl:left-44",children:(0,r.jsx)(x,{words:["BUILD","GROW","LEAD"]})})]})]})]}),(0,r.jsx)("h1",{className:"hero-anim-card max-sm:font-b4",children:"Digital Presence For Your Company"}),(0,r.jsx)("div",{className:"relative mt-20 h-[4rem] w-[4rem] sm:h-[5.25rem] sm:w-[5.25rem]",onClick:()=>n.ZP.to(window,{scrollTo:".care-card1",duration:1}),children:(0,r.jsx)(b.default,{transparent:!0})}),(0,r.jsx)("div",{className:"relative -bottom-8",children:(0,r.jsx)(y.default,{children:Array(7).fill().map((e,t)=>(0,r.jsxs)("div",{className:"ml-2 flex gap-2 lg:ml-6 lg:gap-6",children:[(0,r.jsx)("img",{src:"trending-up.svg",alt:"Trending icon",className:"max-sm:w-[0.75rem] sm:w-[1.5rem]"}),(0,r.jsx)("p",{className:"max-sm:text-[0.75rem]",children:"We Create. Not Copy"})]},t))})})]}),(0,r.jsx)(f,{})]})},v=function(e){let{position:t=!0}=e;return(0,r.jsx)("div",{className:"absolute rounded-full bg-primary sm:-right-6 sm:h-6 sm:w-6 ".concat(t&&"-right-4 -top-4 h-4 w-4")})},j=s(5667);let N=e=>{let t,s,{children:i,duration:o=1,delay:c=0,direction:m="up",toggleActions:d="play none none none"}=e,x=(0,a.useRef)(null);switch(n.ZP.registerPlugin(l.i),m){case"up":t={y:50},s={y:0};break;case"down":t={y:-50},s={y:0};break;case"left":t={x:-50},s={x:0};break;case"right":t={x:50},s={x:0};break;default:t=0}return(0,a.useEffect)(()=>{let e=x.current;n.ZP.timeline({scrollTrigger:{trigger:x.current,toggleActions:d}}).fromTo(e,{opacity:0,...t},{opacity:1,...s,duration:o,delay:c,ease:"power1.out"})},[o,c]),(0,r.jsx)("div",{ref:x,children:i})},k=[{title:"GoDentist",year:2024,text:"GoDentist is an AI-based teledentistry startup, needs a compelling website to build trust, engage users, and attract partnerships with industry giant like Google. A strong online presence will highlight their innovative approach, improve patient access, and enhance practitioner capabilities.",link:"/projects/go-dentist",image:"/_next/static/media/project-godentist.f82f0bc7.png"},{title:"Artajaya",year:2023,text:"Artajaya is a company that encourage the increase of plastic waste collection in Aceh and North Sumatra with over 128 collecting partners (waste banks, TPS 3R and\xa0waste\xa0vendors).",image:"/_next/static/media/project-artajaya.762f0fbc.png",link:"/projects/artajaya"}];function _(e){let{id:t=0,title:s,text:a,year:i,link:l,image:o}=e;return(0,r.jsx)("div",{className:"flex w-full flex-col gap-4",children:a?(0,r.jsx)(j.default,{href:l,children:(0,r.jsxs)("div",{className:"relative z-10 flex flex-col transition-transform duration-500 hover:-translate-y-4",children:[(0,r.jsx)("div",{className:"aspect-[4/3] rounded-xl bg-cover bg-center bg-no-repeat shadow-lg",style:{backgroundImage:"url(".concat(o,")")}}),(0,r.jsxs)("div",{className:"flex flex-col px-2 py-6",children:[(0,r.jsxs)("div",{className:"flex justify-between gap-3",children:[(0,r.jsx)("h3",{className:"font-h8 xl:font-h5 font-semibold uppercase",children:s}),(0,r.jsx)("p",{className:"max-lg:font-b4 flex items-center rounded-[100px] bg-black px-4 text-center font-semibold text-white",children:i})]}),(0,r.jsx)("p",{className:"max-lg:font-b4 mt-2 line-clamp-2 w-2/3 text-[#888888]",children:a})]})]})}):(0,r.jsxs)("div",{onClick:()=>n.ZP.to(window,{scrollTo:"#CTA-section"}),className:"relative z-10 my-6 flex aspect-[4/3] h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-white outline-dashed outline-4 outline-[#888] transition-colors duration-300 hover:text-blue-400 hover:outline-blue-500 sm:gap-4 xl:gap-5",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:(0,r.jsx)("path",{d:"M17.8124 8.72576C17.5424 8.72545 17.2834 8.83257 17.0925 9.02349C16.9016 9.2144 16.7945 9.47342 16.7948 9.74341L16.7876 16.7948L9.72893 16.7948C9.45894 16.7945 9.19991 16.9016 9.009 17.0926C8.81809 17.2835 8.71097 17.5425 8.71127 17.8125C8.71127 18.3754 9.16597 18.8301 9.72893 18.8301L16.7876 18.8301L16.7876 25.8888C16.7876 26.4517 17.2423 26.9064 17.8052 26.9064C18.3682 26.9064 18.8229 26.4517 18.8229 25.8888L18.8229 18.8301L25.8815 18.8301C26.4445 18.8301 26.8992 18.3754 26.8992 17.8125C26.8992 17.2495 26.4445 16.7948 25.8815 16.7948H18.8229L18.8229 9.7362C18.8229 9.18767 18.361 8.72576 17.8124 8.72576Z",fill:"#111111"})}),(0,r.jsx)("p",{className:"font-h9 sm:font-h8 lg:font-h5",children:" Your Project"})]})})}var C=function(){return n.ZP.registerPlugin(o.Z),(0,r.jsxs)("section",{className:"relative flex min-h-screen w-screen justify-center pt-6",id:"projects-section",children:[(0,r.jsx)("div",{className:"absolute left-0 top-0 -z-10 h-[15rem] w-screen bg-[#111111] bg-cover bg-[left] bg-no-repeat sm:h-[22rem] lg:h-[35rem]",style:{backgroundImage:"url(".concat("/_next/static/media/bg-projects.e7562c58.svg",")"),backgroundSize:"105rem"}}),(0,r.jsxs)("div",{className:"max-screen mx-4 my-[4rem] flex h-full flex-col items-center sm:mx-[3.75rem] xl:mx-0 xl:my-[4.75rem]",children:[(0,r.jsx)(N,{direction:"",toggleActions:"play none restart none",children:(0,r.jsxs)("h2",{className:"font-h6 sm:font-h5 lg:font-h1 relative uppercase text-white",children:["Our Latest Projects",(0,r.jsx)(v,{})]})}),(0,r.jsxs)("div",{className:"my-10 flex flex-col items-start justify-start gap-8 sm:my-[6.5rem] sm:grid sm:grid-cols-2 sm:gap-[3.75rem] xl:gap-[5rem]",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,r.jsx)(_,{id:0,title:k[0].title,text:k[0].text,year:k[0].year,link:k[0].link,image:k[0].image}),(0,r.jsx)("div",{className:"max-sm:hidden",children:(0,r.jsx)(_,{id:1})})]}),(0,r.jsxs)("div",{className:"flex w-full flex-col gap-8 sm:mt-[15%]",children:[(0,r.jsx)(_,{id:2,title:k[1].title,text:k[1].text,year:k[1].year,link:k[1].link,image:k[1].image}),(0,r.jsx)(_,{id:3})]})]})]})]})},E=function(){return(0,r.jsx)("section",{className:"max-lg:px-glob-25 flex min-h-screen w-screen flex-col items-center justify-center bg-[#111] bg-[length:48rem_20rem] bg-[center_bottom_-4rem] bg-no-repeat lg:mx-8 lg:bg-[length:90rem_37rem] lg:bg-[center_bottom_-10rem]",style:{backgroundImage:"url(".concat("/_next/static/media/bg-benefit-fade.d31446fa.svg",")")},children:(0,r.jsxs)("div",{className:"max-screen flex flex-col items-center justify-center gap-8 pb-28 pt-12 sm:gap-[4rem] sm:py-28 lg:mx-8 lg:py-40",children:[(0,r.jsx)(N,{direction:"",duration:1.5,children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("p",{className:"max-sm:font-b5 text-white max-sm:text-[0.75rem]",children:"We help to provide"}),(0,r.jsx)("h2",{className:"max-sm:font-h7 text-balance text-center text-white max-sm:text-[1.5rem]",children:"Everything you need to grow your bussiness"})]})}),(0,r.jsx)(N,{direction:"down",duration:1.5,children:(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 max-sm:w-[20rem] sm:grid-rows-2 sm:gap-6 lg:grid-cols-3",children:[(0,r.jsxs)("div",{className:".custom-design-card h-fit rounded-[0.4rem] bg-green bg-[length:10rem_10rem] bg-[right_top_45%] bg-no-repeat px-2 py-4 max-sm:col-span-2 sm:row-span-2 sm:h-[35rem] sm:rounded-2xl sm:bg-[length:24rem] sm:bg-[center_bottom_30%] sm:px-6 sm:py-6 lg:h-[80vh] lg:max-h-[40rem]",style:{backgroundImage:"url(".concat("/_next/static/media/illustration-custom-design2.92177d31.svg",")")},children:[(0,r.jsx)("h3",{className:"max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]",children:"Custom Design"}),(0,r.jsx)("p",{className:"max-sm:font-b5 max-sm:w-[7.4rem] lg:w-[16rem]",children:"Each of your designs is made especially for you and is 100% yours."})]}),(0,r.jsxs)("div",{className:".unlimited-changes-card rounded-[0.4rem] bg-tertiary bg-[length:8rem_6.4rem] bg-[right_bottom_0.6rem] bg-no-repeat px-2 py-4 max-sm:h-[13rem] sm:rounded-2xl sm:bg-[length:12rem] sm:bg-[right_bottom_-3rem] sm:px-6 sm:py-6 lg:bg-[right_bottom_0rem]",style:{backgroundImage:"url(".concat("/_next/static/media/illustration-changes.630c3517.svg",")")},children:[(0,r.jsx)("h3",{className:"max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]",children:"Unlimited Changes"}),(0,r.jsx)("p",{className:"max-sm:font-b5 max-sm:w-[7.4rem]",children:"We'll continue to revise the design until you're 100% satisfied."})]}),(0,r.jsxs)("div",{className:".fixed-cost-card flex flex-col justify-end rounded-[0.4rem] bg-[#E9E4E0] bg-[length:7rem] bg-[right_top_-.8rem] bg-no-repeat px-2 py-4 sm:rounded-2xl sm:bg-[length:14rem] sm:bg-[right_top_-1.3rem] sm:px-6 sm:py-6 lg:bg-[right_top_0rem]",style:{backgroundImage:"url(".concat("/_next/static/media/illustration-cost.27c35245.svg",")")},children:[(0,r.jsx)("h3",{className:"max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]",children:"Fixed Cost"}),(0,r.jsx)("p",{className:"max-sm:font-b5 max-sm:w-[8rem]",children:"Our agreements come with a guarantee: no surprises and no hidden fees. You pay exactly what we agree upon, with no additional costs."})]}),(0,r.jsxs)("div",{className:".exclusive-card col-span-2 flex flex-col justify-end rounded-[0.4rem] bg-primary-100 bg-[length:15rem] bg-[top_right_-3.8rem] bg-no-repeat px-2 py-4 sm:rounded-2xl sm:bg-[length:20rem_20rem] sm:bg-[right_top_-3rem] sm:px-6 sm:py-6 lg:bg-[length:24.5rem_24.5rem] lg:bg-[right_top_-4rem]",style:{backgroundImage:"url(".concat("/_next/static/media/illustration-service.a4d9bbd8.svg",")")},children:[(0,r.jsx)("h3",{className:"max-sm:font-h9 sm:font-h5 mb-2 !font-semibold max-sm:text-[0.875rem]",children:"Exclusive Service"}),(0,r.jsxs)("p",{className:"max-sm:font-b5 w-[60%] text-pretty max-sm:w-[9rem]",children:[(0,r.jsx)("span",{className:"max-sm:hidden",children:"We limit our service to only a handful of clients per month, ensuring each client receives the personalized attention and quality they deserve. We're not just another website agency — we're your dedicated website partner."}),(0,r.jsx)("span",{className:"sm:hidden",children:"We limit our service to a few clients each month, ensuring personalized attention and top quality. We're not just another agency — we're your dedicated website partner."})]})]})]})})]})})},W=e=>{let{title:t,answer:s,className:i}=e,[n,l]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"h-min rounded-lg border border-black-100 bg-white px-5 py-3",children:[(0,r.jsxs)("button",{onClick:()=>l(!n),className:"flex w-full items-center justify-between",children:[(0,r.jsx)("h3",{className:"".concat(n&&"text-green-700"," text-start font-normal max-sm:text-[0.875rem] lg:font-semibold"),children:t}),(0,r.jsxs)("svg",{className:"ml-8 shrink-0 fill-indigo-500",width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("rect",{y:"7",width:"16",height:"2",rx:"1",className:"origin-center transform transition duration-200 ease-out ".concat(n&&"!rotate-180")}),(0,r.jsx)("rect",{y:"7",width:"16",height:"2",rx:"1",className:"origin-center rotate-90 transform transition duration-200 ease-out ".concat(n&&"!rotate-180")})]})]}),(0,r.jsx)("div",{className:"text-md grid overflow-hidden transition-all duration-300 ease-in-out ".concat(n?"grid-rows-[1fr] pt-4 opacity-100":"grid-rows-[0fr] opacity-0"),children:(0,r.jsx)("p",{className:"overflow-hidden max-sm:text-[0.875rem] lg:font-semibold",children:s})})]})};let I=[{question:"What are the ongoing cost?",answer:"For just $99 a month, we offer hosting and support packages that include an SSL certificate, a Content Delivery Network, and our ongoing support service, ensuring your site is safeguarded, blazing fast, accessible worldwide, and backed by our friendly team always ready to assist with any technical issues."},{question:"How much do you charge for a website design and build?",oldAnswer:"Our pricing varies based on the unique design and structure of your site, so we can't give an exact quote until we learn more about your project. However, we specialize in creating stunning, high-end, modern websites that are custom-designed just for you. Each design and line of code is crafted in-house with love, avoiding any pre-made themes or clunky templates. Once we understand the scale and scope of your vision, we can provide a detailed pricing guide. We're excited to bring your dream website to life!",answer:"Our pricing is tailored to the unique design and structure of your site, so we need to learn more about your project to provide an exact quote. But here’s the exciting part: for our very first client, we're offering our stunning website design and development services completely free! Yes, the only cost you'll have is for the server. Don't miss this incredible opportunity—let's bring your vision to life today!"},{question:"Can I make updates to my custom website after it is completed?",answer:"Absolutely! Our custom web designs not only allow you to easily update and modify all content after development, but we also offer immediate support and assistance whenever needed. With our ongoing support and maintenance packages, major website updates and changes are taken care of, while minor tweaks and fixes are included in our web hosting packages. Plus, if you need new custom sections or pages, we can provide quick and accurate estimates."},{question:"Do you create the content for our new website?",answer:"We build our sites so it’s easy for you to add and edit your own content. This keeps our prices down and gives you more control and freedom over your site. We often copy some content or products from your existing site, but it’s also a great opportunity to spring clean your copy and optimise it for the new site design. If you would like us to add your content or write new content, please request this as part of the quote."},{question:"Is SEO included in my web design project?",answer:"Sure, every web design project we take on includes a free SEO guide! We'll give you all the tools you need to track your search engine traffic and achieve the best possible search results. And if you want to take it a step further, why not try our professional SEO services? We're here to help you boost your visibility and drive even more traffic to your site!"},{question:"Do I need a blog with my website?",answer:"Adding a blog to your website is a fantastic way to grow your content without making your site feel cluttered. By sharing fun articles or handy tools, you give other sites a reason to link back to you, which can really boost your traffic and search engine rankings. Think about posting regular updates, offering free resources, sharing industry news, or providing helpful tips and tricks. A blog makes your website more engaging, giving your visitors something to interact with. Plus, you can connect your blog posts to your main content, leading users on a complete journey that ends with a call-to-action."}];var P=function(){return(0,r.jsx)("section",{className:"dot-bg max-lg:px-glob-25 relative flex w-screen justify-center max-md:min-h-screen xl:max-h-[64rem]",id:"faq-section",children:(0,r.jsxs)("div",{className:"max-screen relative my-24 flex flex-col items-center gap-20 sm:gap-28 lg:mx-8",children:[(0,r.jsxs)("h2",{className:"relative max-sm:text-[1.5rem]",children:["Frequently Asked Questions? ",(0,r.jsx)(v,{}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 617 24",fill:"none",className:"w-[21rem] sm:w-[617px]",children:(0,r.jsx)("path",{d:"M8 15.058C87.0556 15.058 166.235 8.84965 245.333 8.10202C322.99 7.36801 400.407 10.8375 478.024 10.8375C518.971 10.8375 641.7 16.4648 600.753 16.4648",stroke:"#C1E693",strokeWidth:"14.108",strokeLinecap:"round"})})]}),(0,r.jsxs)("div",{className:"grid gap-4 lg:grid-cols-2",children:[(0,r.jsx)("div",{className:"flex flex-col gap-4",children:I.slice(0,3).map(e=>(0,r.jsx)(W,{title:e.question,answer:e.answer},e.answer))}),(0,r.jsx)("div",{className:"flex flex-col gap-4",children:I.slice(3).map(e=>(0,r.jsx)(W,{title:e.question,answer:e.answer},e.answer))})]})]})})},A=s(8183);let S=[{id:1,title:"Web Design & Development",text:"Imagine a website that captures your brand’s essence while providing an exceptional user experience. Our design and development services focus on creating sites that are both eye-catching and highly functional, making updates a breeze and leaving a lasting impression on your visitors.",image:{src:"/_next/static/media/illustration-design.d512908e.svg",height:306,width:432,blurWidth:0,blurHeight:0},color:"bg-[#C6B9EE]",direction:"left"},{id:2,title:"Search Engine Optimization",text:"Imagine having a strategy that not only understands your industry but also addresses your unique challenges and goals. With our SEO services, you’ll see significant improvements in your online visibility, leading to more traffic, leads, and ultimately, more business.",image:{src:"/_next/static/media/illustration-coding.496cf428.svg",height:229,width:548,blurWidth:0,blurHeight:0},color:"bg-[#C1E693]",direction:"right"},{id:3,title:"Hosting & Support",text:"We offer fast, fully supported, cloud-based hosting and maintenance services in eight major countries: Lithuania, Australia, Singapore, France, Netherlands, United Kingdom, Indonesia, and the United States. Our global presence ensures your website is accessible and performing optimally, no matter where your audience is located.",image:{src:"/_next/static/media/illustration-hosting.c8251151.svg",height:229,width:859,blurWidth:0,blurHeight:0},color:"bg-[#F2F2F2]",direction:"left"}];function T(e){let{title:t,text:s,image:a,id:i,bgColor:n}=e;return(0,r.jsxs)("div",{className:"flex flex-col flex-wrap gap-5 rounded-2xl border border-gray-400 px-5 py-5 sm:gap-9 sm:px-8 sm:py-8 md:flex-row",children:[(0,r.jsx)("div",{className:"flex basis-1/3",children:(0,r.jsxs)("div",{className:"mx-auto flex items-start max-lg:flex-col",children:[(0,r.jsxs)("p",{className:"mb-4 mr-8 font-normal sm:mb-6 sm:font-semibold lg:text-xl",children:["0",i]}),(0,r.jsxs)("div",{className:"flex flex-col items-start gap-2 sm:gap-4 lg:gap-8",children:[(0,r.jsx)("h3",{className:"font-h3 uppercase max-lg:text-[20px]",children:t}),(0,r.jsx)("p",{className:"text-balance max-lg:text-[0.75rem] lg:text-[0.9rem]",children:s})]})]})}),(0,r.jsx)("div",{className:"".concat(n," min-h-[14rem] w-auto shrink grow bg-[length:16rem_11rem] bg-no-repeat md:bg-[length:400px_300px] lg:bg-auto ").concat("Coding & Dev"==t?"bg-[left_bottom]":"bg-[center_bottom]"," rounded-2xl"),style:{backgroundImage:"url(".concat(a,")")}})]})}var O=function(){return(0,r.jsxs)("section",{className:"max-screen max-lg:px-glob-25 my-[3.4rem] flex flex-col items-start gap-5 sm:my-32 sm:gap-[4.5rem] lg:mx-8 xl:mx-auto",id:"service-section",children:[(0,r.jsx)(N,{direction:"",toggleActions:"play none restart none",children:(0,r.jsxs)("div",{className:"flex flex-col justify-start gap-2 max-sm:gap-0",children:[(0,r.jsx)("p",{className:"h8 uppercase max-sm:text-[0.75rem] max-sm:font-light",children:"Our Services"}),(0,r.jsxs)("h2",{className:"uppercase max-sm:text-[1.5rem]",children:["What We Can ",(0,r.jsx)("br",{})," Do For You?"]})]})}),(0,r.jsx)("div",{className:"flex w-full flex-col gap-8",children:S.map(e=>{let{id:t,image:s,text:a,title:i,color:n,direction:l}=e;return(0,r.jsx)(N,{direction:l,duration:1.5,toggleActions:"play none none none",children:(0,r.jsx)(T,{title:i,text:a,image:s.src,id:t,bgColor:n},t)},t)})})]})},q=s(2460),L=function(){return(0,a.useEffect)(()=>{(async()=>{new(await s.e(828).then(s.bind(s,5828))).default})()},[]),(0,r.jsxs)("main",{id:"main",className:"max-screen relative mx-auto flex flex-col items-center max-lg:overflow-x-clip",children:[(0,r.jsx)(w,{}),(0,r.jsx)(O,{}),(0,r.jsx)(C,{}),(0,r.jsx)(E,{}),(0,r.jsx)(P,{}),(0,r.jsx)(A.default,{}),(0,r.jsx)(q.default,{})]})}}},function(e){e.O(0,[922,231,78,852,827,460,971,23,744],function(){return e(e.s=5102)}),_N_E=e.O()}]);