import{b as s,j as r,m as d,B as g}from"./index-DeYVEjzj.js";import{H as u}from"./HeaderTemplate-CPsU5FxE.js";const f={hidden:{opacity:0,x:0,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:0}},p=({children:a,customHeight:x="100dvh"})=>{var c,l;const e=s.useRef(null),[t,h]=s.useState(!1);return console.log("isOverflowing",t),s.useEffect(()=>{const i=()=>{if(e.current){const n=e.current.clientHeight,o=e.current.firstChild.clientHeight;console.log("containerHeight",n),console.log("contentHeight",o),o!==n&&(console.log("entra"),h(o>n))}};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[(c=e==null?void 0:e.current)==null?void 0:c.clientHeight,(l=e==null?void 0:e.current)==null?void 0:l.scrollHeight]),r.jsxs(d.div,{initial:"hidden",animate:"enter",exit:"exit",variants:f,transition:{duration:.5,type:"easeInOut"},style:{height:t?"auto":"100dvh"},children:[r.jsx(u,{}),r.jsx(g,{width:"100%",height:t?"auto":"90dvh",display:"flex",bgcolor:"#f2f2f2",flexDirection:"column",ref:e,children:a})]})};export{p as A};
