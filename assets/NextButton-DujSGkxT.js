import{e as a,a as i,j as n,B as c,b as d,T as u}from"./index-BI8o-9Ro.js";import{d as l}from"./ArrowForward-ig8dfHAw.js";const x=t=>{a.useEffect(()=>{const o=s=>{var e,r;s.key==="ArrowRight"&&((e=t==null?void 0:t.current)==null||e.focus(),(r=t==null?void 0:t.current)==null||r.click())};return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[t])},p=({label:t="Siguiente",to:o="/"})=>{const s=i(),e=a.useRef(null);return x(e),n.jsx(c,{flex:"0 0 auto",color:"#d2202e",display:"flex",justifyContent:"end",pt:2,children:n.jsx(d,{endIcon:n.jsx(l,{htmlColor:"#d2202e",sx:{pt:"0.1rem"}}),color:"inherit",onClick:()=>s(o),ref:e,children:n.jsx(u,{variant:"body1",color:"#d2202e",fontFamily:"IndivisaRegular",children:t})})})};export{p as N};
