(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9862:function(e,t,l){Promise.resolve().then(l.bind(l,2460)),Promise.resolve().then(l.bind(l,2826)),Promise.resolve().then(l.bind(l,9212)),Promise.resolve().then(l.t.bind(l,8877,23)),Promise.resolve().then(l.t.bind(l,4080,23)),Promise.resolve().then(l.t.bind(l,7374,23)),Promise.resolve().then(l.t.bind(l,7225,23))},9669:function(e,t,l){"use strict";var s=l(7437),n=l(9955);t.Z=function(){return(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("a",{href:"tel:6289677900900",className:"max-sm:font-l4",children:(0,s.jsx)(n.Z,{inText:"+6289677900900"})}),(0,s.jsx)("a",{href:"mailto:hello@relyte.space",className:"max-sm:font-l4 uppercase",children:(0,s.jsx)(n.Z,{inText:"hello@relyte.space"})})]})}},2460:function(e,t,l){"use strict";l.r(t);var s=l(7437),n=l(7138),r=l(9955),i=l(9669),a=l(2378);t.default=function(){return(0,s.jsx)("footer",{className:"flex w-screen justify-center bg-[#191918]",id:"footer",children:(0,s.jsxs)("div",{className:"max-screen max-lg:px-glob-25 mt-16 flex w-full flex-col justify-between text-[#888888]",children:[(0,s.jsxs)("div",{className:"flex justify-between max-sm:flex-col max-sm:gap-12",children:[(0,s.jsx)(i.Z,{}),(0,s.jsxs)("nav",{className:"max-sm:font-l4 flex gap-24 text-nowrap max-sm:gap-16",children:[(0,s.jsxs)("ul",{className:"flex flex-col gap-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"#home",children:(0,s.jsx)(r.Z,{inText:"Home"})})}),(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"#projects",children:(0,s.jsx)(r.Z,{inText:"Our Projects"})})}),(0,s.jsx)("li",{className:"md:hidden",children:(0,s.jsx)(n.default,{href:"#blog",children:(0,s.jsx)(r.Z,{inText:"Our Blog"})})})]}),(0,s.jsxs)("ul",{className:"flex flex-col gap-2 text-nowrap",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"#about",children:(0,s.jsx)(r.Z,{inText:"About Us"})})}),(0,s.jsx)("li",{className:"text-nowrap",children:(0,s.jsx)(n.default,{href:"#service",children:(0,s.jsx)(r.Z,{inText:"Services"})})}),(0,s.jsx)("li",{className:"text-nowrap md:hidden",children:(0,s.jsx)(n.default,{href:"#faq",children:(0,s.jsx)(r.Z,{inText:"FAQ"})})})]}),(0,s.jsxs)("ul",{className:"flex flex-col gap-2 text-nowrap max-md:hidden",children:[(0,s.jsx)("li",{children:(0,s.jsx)(n.default,{href:"#blog",children:(0,s.jsx)(r.Z,{inText:"Our Blog"})})}),(0,s.jsx)("li",{className:"text-nowrap",children:(0,s.jsx)(n.default,{href:"#faq",children:(0,s.jsx)(r.Z,{inText:"FAQ"})})})]})]})]}),(0,s.jsx)("div",{className:"mt-6 py-6",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)(n.default,{href:"/terms-conditions",className:"max-sm:font-l4 mb-10 mt-16 text-nowrap",children:(0,s.jsx)(r.Z,{inText:"*Terms & Conditions"})})]})})}},2826:function(e,t,l){"use strict";var s=l(7437),n=l(19),r=l(9582),i=l(1204),a=l(1589),c=l(2265);l(7138);var d=l(5879),o=l(2378),f=l(9669),h=l(5667);function x(e){let{isSmallScreen:t=!1}=e;return(0,s.jsx)("ul",{className:"md:flex ".concat(t?"flex flex-col gap-4 text-[2.5rem] font-light uppercase leading-none text-[white] sm:text-[3.75rem]":"hidden gap-14"),children:[{label:"Home",value:""},{label:"Blog",value:"blog"}].map(e=>(0,s.jsx)(d.Z,{children:(0,s.jsx)("li",{className:"h-fit cursor-pointer",children:(0,s.jsx)(h.default,{href:"/".concat(e.value),children:e.label})})},e.value))})}t.default=function(){let e;r.ZP.registerPlugin(i.i);let[t,l]=(0,c.useState)(!1),C=(0,c.useRef)(),u=(0,c.useRef)(),m=(0,c.useRef)();return(0,c.useEffect)(()=>{e=window.innerWidth>640},[]),(0,n.V)(()=>{r.ZP.timeline({scrollTrigger:{trigger:"html",start:"top top",end:99999,onUpdate:l=>{e&&(-1===l.direction?t.play():t.reverse())}}});let t=r.ZP.from("#header",{yPercent:-100,paused:!0,delay:3,duration:.3}).progress(1)},[]),(0,n.V)(()=>{let e=r.ZP.timeline({reversed:!0});return e.fromTo(".header-anim",{opacity:0,xPercent:100},{xPercent:0,opacity:1,scale:1,duration:.6,ease:"power2.out"}),u.current.addEventListener("click",()=>e.reversed(!e.reversed())),m.current.addEventListener("click",()=>{e.reversed(!e.reversed()),l(!1)}),()=>{u.current.addEventListener("click",()=>e.reversed(!e.reversed())),m.current.addEventListener("click",()=>{e.reversed(!e.reversed()),l(!1)})}},[]),(0,s.jsx)("header",{className:"fixed z-40 w-screen border-b border-[#e0e0e0] bg-white px-4 sm:px-10",id:"header",ref:C,children:(0,s.jsxs)("div",{className:"max-screen mx-auto flex items-center justify-between py-4 sm:py-6",children:[(0,s.jsx)(d.Z,{children:(0,s.jsx)("div",{children:(0,s.jsx)(h.default,{href:"/",children:(0,s.jsx)("img",{src:"/relyte-logo.svg",alt:"Relyte Logo",className:"h-[2.5rem] w-[6rem] cursor-pointer",onClick:()=>{r.ZP.to(window,{duration:1,scrollTo:{y:"#home"},ease:"power2"})}})})})}),(0,s.jsx)(x,{}),(0,s.jsx)(d.Z,{children:(0,s.jsx)("div",{children:(0,s.jsx)(h.default,{href:"/contact",children:(0,s.jsx)("button",{className:"rounded-3xl border border-black max-md:hidden md:px-4 md:py-1 lg:px-6 lg:py-2",children:"Start A Project"})})})}),(0,s.jsxs)("div",{className:"relative md:hidden",children:[(0,s.jsx)("div",{className:"relative z-50",ref:u,children:(0,s.jsx)(a.z,{toggled:t,toggle:l,color:t?"#C1E693":"black",label:"navigation menu"})}),(0,s.jsxs)("div",{className:"header-anim absolute -right-8 top-0 flex h-[80vh] w-[100vw] flex-col rounded-xl bg-black-100 px-4 py-4 opacity-5 md:hidden",children:[(0,s.jsx)("span",{className:"text-white",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"179",height:"40",viewBox:"0 0 179 40",fill:"none",children:[(0,s.jsx)("path",{d:"M89.9557 34.4152H94.0715C93.822 33.5145 93.0044 32.8493 92.0205 32.8493C91.0366 32.8493 90.2052 33.5145 89.9557 34.4152ZM94.0299 35.704H90.0111C90.3022 36.5355 91.092 37.1314 92.0205 37.1314C92.7273 37.1314 93.3509 36.7849 93.7389 36.2583H95.1939C94.6951 37.5194 93.4617 38.4201 92.0205 38.4201C90.122 38.4201 88.5977 36.8819 88.5977 34.9973C88.5977 33.0988 90.122 31.5605 92.0205 31.5605C93.9052 31.5605 95.4434 33.0988 95.4434 34.9973C95.4434 35.2329 95.4157 35.4823 95.3602 35.704H94.0299Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M88.4639 37.312C87.1752 38.6008 85.0965 38.6008 83.8077 37.312C82.5328 36.0371 82.5328 33.9446 83.8077 32.6697C85.0965 31.3809 87.1752 31.3809 88.4639 32.6697L87.5493 33.5843C85.6924 31.7135 82.8654 34.5405 84.7224 36.4113C85.4984 37.1873 86.7733 37.1873 87.5493 36.4113L88.4639 37.312Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M82.0178 34.9974V38.2817H80.729V37.6026V34.9974C80.729 33.8887 79.8421 32.988 78.7335 32.988C77.6249 32.988 76.738 33.8887 76.738 34.9974C76.738 36.0921 77.6249 36.9929 78.7335 36.9929V38.2817C76.9181 38.2817 75.4492 36.8127 75.4492 34.9974C75.4492 33.182 76.9181 31.6992 78.7335 31.6992C80.5489 31.6992 82.0178 33.182 82.0178 34.9974Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M71.3312 37.0064C72.4398 37.0064 73.3267 36.1195 73.3267 35.0108C73.3267 33.9022 72.4398 33.0153 71.3312 33.0153C70.2364 33.0153 69.3356 33.9022 69.3356 34.997V35.0108V37.6161V39.182V39.9996H68.0469V35.0108C68.0469 33.1955 69.5158 31.7266 71.3312 31.7266C73.1465 31.7266 74.6154 33.1955 74.6154 35.0108C74.6154 36.8262 73.1465 38.2951 71.3312 38.2951V37.0064Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M63.07 36.1617V36.2864C63.07 36.619 63.5689 37.2565 64.4974 37.2565C65.4951 37.2565 65.9247 36.6883 65.9247 36.2864C65.9247 35.8014 63.9708 35.649 63.5966 35.5658C62.6681 35.3718 61.7812 34.9145 61.7812 33.7782C61.7812 32.3508 63.167 31.5332 64.4974 31.5332C65.7446 31.5332 67.2135 32.4894 67.2135 33.7782V33.9167H65.9247V33.7782C65.9247 33.4733 65.3565 32.822 64.4974 32.822C63.5412 32.822 63.07 33.3624 63.07 33.7782C63.07 34.374 64.9685 34.4849 65.3843 34.5681C66.2989 34.7621 67.2135 35.1778 67.2135 36.2864C67.2135 37.6722 65.897 38.5452 64.4974 38.5452C63.1393 38.5452 61.7812 37.5752 61.7812 36.2864V36.1617H63.07Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M56.5859 37.0607C56.5859 36.063 57.3989 35.25 58.3967 35.25C59.4314 35.25 60.2444 36.063 60.2444 37.0607C60.2444 38.0955 59.4314 38.9084 58.3967 38.9084C57.3989 38.9084 56.5859 38.0955 56.5859 37.0607Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M0.00390625 11.4006C0.00390625 10.4028 0.816895 9.58984 1.81465 9.58984C2.84936 9.58984 3.66235 10.4028 3.66235 11.4006C3.66235 12.4353 2.84936 13.2483 1.81465 13.2483C0.816895 13.2483 0.00390625 12.4353 0.00390625 11.4006Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M78.3168 18.3352H89.2921C88.627 15.9332 86.4467 14.1594 83.8229 14.1594C81.1992 14.1594 78.982 15.9332 78.3168 18.3352ZM89.1813 21.7719H78.4646C79.2407 23.9891 81.347 25.5782 83.8229 25.5782C85.7076 25.5782 87.3705 24.6543 88.4052 23.2501H92.2854C90.9551 26.6129 87.6662 29.0149 83.8229 29.0149C78.7603 29.0149 74.6953 24.913 74.6953 19.8872C74.6953 14.8246 78.7603 10.7227 83.8229 10.7227C88.8487 10.7227 92.9506 14.8246 92.9506 19.8872C92.9506 20.5155 92.8767 21.1806 92.7289 21.7719H89.1813Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M58.1499 25.4313V20.6643V11.4258H61.5867V20.7382V25.4313C61.5867 30.2723 57.6326 34.1894 52.7916 34.1894H47.4702V30.7527H52.7916C55.0089 30.7527 58.1499 28.5724 58.1499 25.4313ZM48.6528 11.4258V20.4795C48.5789 23.3989 50.6113 24.9879 52.7916 25.2466V28.7572C48.5049 28.4616 45.1421 24.8401 45.216 20.4795V11.4258H48.6528Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M36.3845 8.14956L37.718 9.30437V21.5893C37.718 23.5848 39.307 25.2108 41.3025 25.2108H42.9654V28.6475H41.3025C37.4223 28.6475 34.2812 25.4694 34.2812 21.5893V6.58594L36.3845 8.14956Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M17.434 18.3352H28.4093C27.7442 15.9332 25.5639 14.1594 22.9401 14.1594C20.3164 14.1594 18.0992 15.9332 17.434 18.3352ZM28.2985 21.7719H17.5818C18.3578 23.9891 20.4642 25.5782 22.9401 25.5782C24.8248 25.5782 26.4877 24.6543 27.5224 23.2501H31.4026C30.0723 26.6129 26.7834 29.0149 22.9401 29.0149C17.8774 29.0149 13.8125 24.913 13.8125 19.8872C13.8125 14.8246 17.8774 10.7227 22.9401 10.7227C27.9659 10.7227 32.0678 14.8246 32.0678 19.8872C32.0678 20.5155 31.9939 21.1806 31.8461 21.7719H28.2985Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M2.26953 28.7211V18.8174C2.26953 14.6047 5.6693 11.168 9.91901 11.168H13.4296V14.6047H9.91901C7.59091 14.6047 5.70625 16.4893 5.70625 18.8174V28.7211H2.26953Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M63.8945 6.64062V12.5313L64.1138 12.2024C64.8284 11.1306 65.9803 10.4295 67.2606 10.2872V7.76266V6.64062H63.8945Z",fill:"#fff"}),(0,s.jsx)("path",{d:"M72.5318 14.6047H67.2844V21.6629C67.2844 23.6584 68.8734 25.2474 70.8689 25.2474H72.5318V28.6842H70.8689C66.9887 28.6842 63.8477 25.5431 63.8477 21.6629V15.9451C63.8477 14.4047 64.6008 12.9605 65.8673 12.0837C66.0171 11.98 66.1927 11.8803 66.3771 11.7873C67.3718 11.2857 68.5037 11.168 69.6177 11.168H72.5318V14.6047Z",fill:"#fff"})]})}),(0,s.jsx)("div",{className:"mt-10",ref:m,children:(0,s.jsx)(x,{isSmallScreen:!0})}),(0,s.jsxs)("div",{className:"!mb-0 mt-auto",children:[(0,s.jsx)("div",{className:"text-white",children:(0,s.jsx)(f.Z,{})}),(0,s.jsx)(o.Z,{})]})]})]})]})})}},2378:function(e,t,l){"use strict";var s=l(7437),n=l(7138),r=l(5879);t.Z=function(){return(0,s.jsxs)("div",{className:"mt-6 flex gap-5 pt-6 sm:gap-10",style:{borderTop:"2px solid #888888"},children:[(0,s.jsx)(r.Z,{children:(0,s.jsx)(n.default,{href:"https://www.linkedin.com/company/100276638/",target:"_blank",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"max-sm:w-6","aria-label":"LinkedIn",children:(0,s.jsx)("path",{d:"M27 3.25H5C4.53587 3.25 4.09075 3.43437 3.76256 3.76256C3.43437 4.09075 3.25 4.53587 3.25 5V27C3.25 27.4641 3.43437 27.9092 3.76256 28.2374C4.09075 28.5656 4.53587 28.75 5 28.75H27C27.4641 28.75 27.9092 28.5656 28.2374 28.2374C28.5656 27.9092 28.75 27.4641 28.75 27V5C28.75 4.53587 28.5656 4.09075 28.2374 3.76256C27.9092 3.43437 27.4641 3.25 27 3.25ZM27.25 27C27.25 27.0663 27.2237 27.1299 27.1768 27.1768C27.1299 27.2237 27.0663 27.25 27 27.25H5C4.9337 27.25 4.87011 27.2237 4.82322 27.1768C4.77634 27.1299 4.75 27.0663 4.75 27V5C4.75 4.9337 4.77634 4.87011 4.82322 4.82322C4.87011 4.77634 4.9337 4.75 5 4.75H27C27.0663 4.75 27.1299 4.77634 27.1768 4.82322C27.2237 4.87011 27.25 4.9337 27.25 5V27ZM11.75 14V22C11.75 22.1989 11.671 22.3897 11.5303 22.5303C11.3897 22.671 11.1989 22.75 11 22.75C10.8011 22.75 10.6103 22.671 10.4697 22.5303C10.329 22.3897 10.25 22.1989 10.25 22V14C10.25 13.8011 10.329 13.6103 10.4697 13.4697C10.6103 13.329 10.8011 13.25 11 13.25C11.1989 13.25 11.3897 13.329 11.5303 13.4697C11.671 13.6103 11.75 13.8011 11.75 14ZM22.75 17.5V22C22.75 22.1989 22.671 22.3897 22.5303 22.5303C22.3897 22.671 22.1989 22.75 22 22.75C21.8011 22.75 21.6103 22.671 21.4697 22.5303C21.329 22.3897 21.25 22.1989 21.25 22V17.5C21.25 16.7707 20.9603 16.0712 20.4445 15.5555C19.9288 15.0397 19.2293 14.75 18.5 14.75C17.7707 14.75 17.0712 15.0397 16.5555 15.5555C16.0397 16.0712 15.75 16.7707 15.75 17.5V22C15.75 22.1989 15.671 22.3897 15.5303 22.5303C15.3897 22.671 15.1989 22.75 15 22.75C14.8011 22.75 14.6103 22.671 14.4697 22.5303C14.329 22.3897 14.25 22.1989 14.25 22V14C14.25 13.8011 14.329 13.6103 14.4697 13.4697C14.6103 13.329 14.8011 13.25 15 13.25C15.1989 13.25 15.3897 13.329 15.5303 13.4697C15.671 13.6103 15.75 13.8011 15.75 14V14.2638C16.3681 13.7392 17.1233 13.4024 17.9266 13.293C18.7299 13.1836 19.5476 13.3062 20.2835 13.6464C21.0193 13.9866 21.6425 14.5302 22.0796 15.213C22.5166 15.8958 22.7492 16.6893 22.75 17.5ZM12.25 10.5C12.25 10.7472 12.1767 10.9889 12.0393 11.1945C11.902 11.4 11.7068 11.5602 11.4784 11.6548C11.2499 11.7495 10.9986 11.7742 10.7561 11.726C10.5137 11.6778 10.2909 11.5587 10.1161 11.3839C9.9413 11.2091 9.82225 10.9863 9.77402 10.7439C9.72579 10.5014 9.75054 10.2501 9.84515 10.0216C9.93976 9.79324 10.1 9.59801 10.3055 9.46066C10.5111 9.32331 10.7528 9.25 11 9.25C11.3315 9.25 11.6495 9.3817 11.8839 9.61612C12.1183 9.85054 12.25 10.1685 12.25 10.5Z",fill:"white"})})})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(n.default,{href:"https://www.instagram.com/relyte.space/",target:"_blank",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",className:"max-sm:w-6","aria-label":"Instagram",children:(0,s.jsx)("path",{d:"M16 10.25C14.8628 10.25 13.7511 10.5872 12.8055 11.219C11.8599 11.8509 11.1229 12.7489 10.6877 13.7996C10.2525 14.8502 10.1386 16.0064 10.3605 17.1218C10.5824 18.2372 11.13 19.2617 11.9341 20.0659C12.7383 20.87 13.7628 21.4177 14.8782 21.6395C15.9936 21.8614 17.1498 21.7475 18.2004 21.3123C19.2511 20.8771 20.1491 20.1401 20.781 19.1945C21.4128 18.2489 21.75 17.1372 21.75 16C21.748 14.4756 21.1416 13.0142 20.0637 11.9363C18.9858 10.8584 17.5244 10.252 16 10.25ZM16 20.25C15.1594 20.25 14.3377 20.0007 13.6388 19.5337C12.9399 19.0668 12.3952 18.403 12.0735 17.6264C11.7518 16.8498 11.6677 15.9953 11.8317 15.1709C11.9956 14.3464 12.4004 13.5892 12.9948 12.9948C13.5892 12.4004 14.3464 11.9956 15.1709 11.8317C15.9953 11.6677 16.8498 11.7518 17.6264 12.0735C18.403 12.3952 19.0668 12.9399 19.5337 13.6388C20.0007 14.3377 20.25 15.1594 20.25 16C20.25 17.1272 19.8022 18.2082 19.0052 19.0052C18.2082 19.8022 17.1272 20.25 16 20.25ZM22 3.25H10C8.2104 3.25199 6.49466 3.96378 5.22922 5.22922C3.96378 6.49466 3.25199 8.2104 3.25 10V22C3.25199 23.7896 3.96378 25.5053 5.22922 26.7708C6.49466 28.0362 8.2104 28.748 10 28.75H22C23.7896 28.748 25.5053 28.0362 26.7708 26.7708C28.0362 25.5053 28.748 23.7896 28.75 22V10C28.748 8.2104 28.0362 6.49466 26.7708 5.22922C25.5053 3.96378 23.7896 3.25199 22 3.25ZM27.25 22C27.25 23.3924 26.6969 24.7277 25.7123 25.7123C24.7277 26.6969 23.3924 27.25 22 27.25H10C8.60761 27.25 7.27225 26.6969 6.28769 25.7123C5.30312 24.7277 4.75 23.3924 4.75 22V10C4.75 8.60761 5.30312 7.27225 6.28769 6.28769C7.27225 5.30312 8.60761 4.75 10 4.75H22C23.3924 4.75 24.7277 5.30312 25.7123 6.28769C26.6969 7.27225 27.25 8.60761 27.25 10V22ZM23.75 9.5C23.75 9.74723 23.6767 9.9889 23.5393 10.1945C23.402 10.4 23.2068 10.5602 22.9784 10.6548C22.7499 10.7495 22.4986 10.7742 22.2561 10.726C22.0137 10.6778 21.7909 10.5587 21.6161 10.3839C21.4413 10.2091 21.3223 9.98634 21.274 9.74386C21.2258 9.50139 21.2505 9.25005 21.3451 9.02165C21.4398 8.79324 21.6 8.59801 21.8055 8.46066C22.0111 8.32331 22.2528 8.25 22.5 8.25C22.8315 8.25 23.1495 8.3817 23.3839 8.61612C23.6183 8.85054 23.75 9.16848 23.75 9.5Z",fill:"white"})})})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(n.default,{href:"https://www.behance.net/relytespace",className:"flex items-center max-sm:w-6",target:"_blank",children:(0,s.jsx)("img",{src:"/behance-logo.svg",alt:"behance"})})})]})}},9212:function(e,t,l){"use strict";var s=l(7437),n=l(9582),r=l(2801),i=l(6463),a=l(2265);t.default=function(){let[e,t]=(0,a.useState)(0),l=(0,i.usePathname)(),c="/"===l,d=(0,a.useRef)();n.ZP.registerPlugin(r.Z);let o=["Hello","Ciao","Guten tag","안녕","Bonjour","你好","こんにちは","Hola","Hello"],[f,h]=(0,a.useState)({width:0,height:0}),x="M0 0 L".concat(f.width," 0 L").concat(f.width," ").concat(f.height," Q").concat(f.width/2," ").concat(f.height+300," 0 ").concat(f.height," L0 0"),C="M0 0 L".concat(f.width," 0 L").concat(f.width," ").concat(f.height," Q").concat(f.width/2," ").concat(f.height," 0 ").concat(f.height," L0 0");return(0,a.useEffect)(()=>{h({width:window.innerWidth,height:window.innerHeight})},[]),(0,a.useEffect)(()=>{e!=o.length-1&&setTimeout(()=>{t(e+1)},0==e?500:150)},[e,o.length]),(0,a.useEffect)(()=>{let e=d.current;setTimeout(()=>{let t=n.ZP.timeline();t.to("#preloader",{duration:2,yPercent:-100,ease:"power4.out"}),t.to(e,{attr:{d:C},duration:1},"<"),t.to("#preloader",{display:"none"}),n.ZP.to(window,{scrollTo:{y:0,x:0}})},c?2e3:10)},[x,C,c]),(0,s.jsx)("div",{id:"preloader",className:"fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black text-2xl text-white ".concat("/"!==l&&"hidden"),children:f.height>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"z-50",children:o[e]}),(0,s.jsx)("svg",{className:"absolute left-0 top-0 h-[120%] w-[100%]",children:(0,s.jsx)("path",{ref:d,id:"svg",d:x,fill:"black"})})]})})}},5667:function(e,t,l){"use strict";var s=l(7437),n=l(9582),r=l(7138),i=l(6463),a=l(2265);t.default=function(e){let{children:t,href:l}=e,c=(0,i.useRouter)(),d=(0,i.usePathname)();async function o(e){if(e.preventDefault(),d===l)return;let t=document.querySelector("#transition-page");null==t||t.classList.add("animate-page-out"),n.ZP.to(t,{y:40,opacity:0}),await new Promise(e=>setTimeout(e,300)),c.push(l)}return(0,a.useEffect)(()=>{},[d]),(0,s.jsx)(r.default,{onClick:o,href:l,children:t})}},9955:function(e,t,l){"use strict";var s=l(7437),n=l(19),r=l(9582),i=l(2265);t.Z=function(e){let{inText:t="Intext",upText:l=""}=e,a=(0,i.useRef)(null),c=(0,i.useRef)(null),d=(0,i.useRef)(null);return(0,n.V)(()=>{let e=r.ZP.timeline({paused:!0});e.to(a.current,{yPercent:-100,opacity:.2,duration:.4}),e.fromTo(c.current,{},{yPercent:-100,color:"#C1E693",duration:.4},"<"),d.current.addEventListener("mouseenter",()=>e.play()),d.current.addEventListener("mouseleave",()=>e.reverse())},[]),(0,s.jsxs)("div",{ref:d,className:"relative w-min overflow-hidden",children:[(0,s.jsx)("span",{className:"inline-block leading-none text-nowrap",ref:a,children:t}),(0,s.jsx)("span",{className:"block absolute top-full text-nowrap",ref:c,children:""===l?t:l})]})}},5879:function(e,t,l){"use strict";var s=l(9582),n=l(2265);t.Z=function(e){let{children:t}=e,l=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=s.ZP.quickTo(l.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),t=s.ZP.quickTo(l.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});l.current.addEventListener("mousemove",s=>{let{clientX:n,clientY:r}=s,{width:i,height:a,left:c,top:d}=l.current.getBoundingClientRect();e(.5*(n-(c+i/2))),t(.5*(r-(d+a/2)))}),l.current.addEventListener("mouseleave",()=>{e(0),t(0)})},[]),n.cloneElement(t,{ref:l})}},8877:function(){}},function(e){e.O(0,[580,922,231,582,659,194,971,23,744],function(){return e(e.s=9862)}),_N_E=e.O()}]);