import{g as M,c as R,s as C,d as k,b as w,e as I,_ as N,j as e,f as h,h as f,k as H,u as T,A as _,B as n,p as E,T as r,m as p}from"./index-BUw1f16N.js";import{H as O}from"./HeaderTemplate-CtViAUBl.js";import{G as x}from"./Grid-DmBNfZcS.js";import{C as v}from"./Card-_3tGv8-3.js";function $(t){return R("MuiCardActionArea",t)}const y=M("MuiCardActionArea",["root","focusVisible","focusHighlight"]),z=["children","className","focusVisibleClassName"],D=t=>{const{classes:i}=t;return H({root:["root"],focusHighlight:["focusHighlight"]},$,i)},P=C(k,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,i)=>i.root})(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${y.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${y.focusVisible} .${y.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}})),V=C("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,i)=>i.focusHighlight})(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})})),j=w.forwardRef(function(i,o){const s=I({props:i,name:"MuiCardActionArea"}),{children:c,className:m,focusVisibleClassName:l}=s,a=N(s,z),d=s,g=D(d);return e.jsxs(P,h({className:f(g.root,m),focusVisibleClassName:f(l,g.focusVisible),ref:o,ownerState:d},a,{children:[c,e.jsx(V,{className:g.focusHighlight,ownerState:d})]}))});function G(t){return R("MuiCardContent",t)}M("MuiCardContent",["root"]);const L=["className","component"],Q=t=>{const{classes:i}=t;return H({root:["root"]},G,i)},q=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,i)=>i.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),b=w.forwardRef(function(i,o){const s=I({props:i,name:"MuiCardContent"}),{className:c,component:m="div"}=s,l=N(s,L),a=h({},s,{component:m}),d=Q(a);return e.jsx(q,h({as:m,className:f(d.root,c),ownerState:a,ref:o},l))});function J(t){return R("MuiCardMedia",t)}M("MuiCardMedia",["root","media","img"]);const W=["children","className","component","image","src","style"],K=t=>{const{classes:i,isMediaComponent:o,isImageComponent:s}=t;return H({root:["root",o&&"media",s&&"img"]},J,i)},X=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:o}=t,{isMediaComponent:s,isImageComponent:c}=o;return[i.root,s&&i.media,c&&i.img]}})(({ownerState:t})=>h({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})),Y=["video","audio","picture","iframe","img"],Z=["picture","img"],A=w.forwardRef(function(i,o){const s=I({props:i,name:"MuiCardMedia"}),{children:c,className:m,component:l="div",image:a,src:d,style:g}=s,F=N(s,W),u=Y.indexOf(l)!==-1,S=!u&&a?h({backgroundImage:`url("${a}")`},g):g,U=h({},s,{component:l,isMediaComponent:u,isImageComponent:Z.indexOf(l)!==-1}),B=K(U);return e.jsx(X,h({className:f(B.root,m),as:l,role:!u&&a?"img":void 0,ref:o,style:S,ownerState:U,src:u?a||d:void 0},F,{children:c}))}),ee="/assets/banner9-BypRAUJQ.jpg",te="/assets/banner10-Bw9dnv_I.jpg",ie="/assets/banner11-CjUQfhRa.webp",re=()=>{const t=T();return e.jsxs(_,{children:[e.jsx(O,{}),e.jsx(n,{width:"100%",height:"90dvh",display:"flex",bgcolor:"#f2f2f2",flexDirection:"column",children:e.jsxs(n,{display:"flex",flexDirection:"column",height:"90dvh",py:3,px:E,children:[e.jsxs(n,{color:"#1e285d",flex:"0 0 auto",children:[e.jsx(r,{variant:"h5",fontFamily:"IndivisaHeavy",color:"inherit",textAlign:"center",fontSize:{lg:"4rem"},children:"UNIDADES"}),e.jsx(r,{variant:"body1",fontFamily:"IndivisaRegular",color:"inherit",textAlign:"center",fontSize:{md:"1rem",lg:"1.5rem"},children:"que integran la experiencia de aprendizaje"})]}),e.jsx(n,{color:"#1e285d",flex:"0 0 auto",pt:2,children:e.jsx(p.div,{whileTap:{scale:.9},children:e.jsx(n,{p:{md:1,lg:1.5},bgcolor:"#1e285d",children:e.jsx(n,{color:"#dcd9d2",children:e.jsx(r,{variant:"body1",fontFamily:"IndivisaHeavy",color:"inherit",textAlign:"center",fontSize:{md:"1.2rem",lg:"1.7rem"},children:"Competencias informacionales y digitales"})})})})}),e.jsx(n,{width:"100%",flex:"1 0 auto",display:"flex",justifyContent:"center",alignItems:"center",py:2,children:e.jsxs(x,{container:!0,spacing:3,height:"100%",children:[e.jsx(x,{item:!0,xs:4,height:"100%",children:e.jsx(n,{width:"100%",height:"100%",children:e.jsx(p.div,{whileTap:{scale:.9},children:e.jsx(v,{onClick:()=>t("/unidades/1/bienvenida"),children:e.jsxs(j,{children:[e.jsx(A,{component:"img",sx:{height:{md:"9rem",lg:"15rem"}},image:te,alt:"Alfabetización digital y académica"}),e.jsxs(b,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 1"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Alfabetización digital y académica"})]})]})})})})}),e.jsx(x,{item:!0,xs:4,children:e.jsx(n,{width:"100%",height:"100%",children:e.jsx(p.div,{whileTap:{scale:.9},children:e.jsx(v,{sx:{height:"auto"},children:e.jsxs(j,{children:[e.jsx(A,{component:"img",sx:{height:{md:"9rem",lg:"15rem"}},image:ee,alt:"green iguana"}),e.jsxs(b,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 2"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Competencias digitales para la investigación"})]})]})})})})}),e.jsx(x,{item:!0,xs:4,children:e.jsx(n,{width:"100%",height:"100%",children:e.jsx(p.div,{whileTap:{scale:.9},children:e.jsx(v,{sx:{height:"auto"},children:e.jsxs(j,{children:[e.jsx(A,{component:"img",sx:{height:{md:"9rem",lg:"15rem"}},image:ie,alt:"green iguana"}),e.jsxs(b,{children:[e.jsx(r,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 3"}),e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Comunicación científica en medios digitales"})]})]})})})})})]})})]})})]})};export{re as default};
