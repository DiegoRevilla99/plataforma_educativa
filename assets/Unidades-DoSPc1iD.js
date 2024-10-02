import{g as I,c as R,s as A,d as B,e as w,f as H,_ as N,j as e,h as m,k as b,l as U,a as T,A as E,B as a,p as O,T as o,m as u,G as x}from"./index-DZpUserX.js";import{H as _}from"./HeaderTemplate-DneG6wsx.js";import{C as f}from"./Card-CoHIIb4K.js";import{C as v}from"./CardContent-C4myGLhx.js";function z(i){return R("MuiCardActionArea",i)}const j=I("MuiCardActionArea",["root","focusVisible","focusHighlight"]),D=["children","className","focusVisibleClassName"],P=i=>{const{classes:t}=i;return U({root:["root"],focusHighlight:["focusHighlight"]},z,t)},V=A(B,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(i,t)=>t.root})(({theme:i})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${j.focusHighlight}`]:{opacity:(i.vars||i).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${j.focusVisible} .${j.focusHighlight}`]:{opacity:(i.vars||i).palette.action.focusOpacity}})),$=A("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(i,t)=>t.focusHighlight})(({theme:i})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:i.transitions.create("opacity",{duration:i.transitions.duration.short})})),y=w.forwardRef(function(t,n){const s=H({props:t,name:"MuiCardActionArea"}),{children:r,className:p,focusVisibleClassName:c}=s,l=N(s,D),h=s,d=P(h);return e.jsxs(V,m({className:b(d.root,p),focusVisibleClassName:b(c,d.focusVisible),ref:n,ownerState:h},l,{children:[r,e.jsx($,{className:d.focusHighlight,ownerState:h})]}))});function G(i){return R("MuiCardMedia",i)}I("MuiCardMedia",["root","media","img"]);const L=["children","className","component","image","src","style"],Q=i=>{const{classes:t,isMediaComponent:n,isImageComponent:s}=i;return U({root:["root",n&&"media",s&&"img"]},G,t)},q=A("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(i,t)=>{const{ownerState:n}=i,{isMediaComponent:s,isImageComponent:r}=n;return[t.root,s&&t.media,r&&t.img]}})(({ownerState:i})=>m({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},i.isMediaComponent&&{width:"100%"},i.isImageComponent&&{objectFit:"cover"})),J=["video","audio","picture","iframe","img"],W=["picture","img"],C=w.forwardRef(function(t,n){const s=H({props:t,name:"MuiCardMedia"}),{children:r,className:p,component:c="div",image:l,src:h,style:d}=s,F=N(s,L),g=J.indexOf(c)!==-1,S=!g&&l?m({backgroundImage:`url("${l}")`},d):d,M=m({},s,{component:c,isMediaComponent:g,isImageComponent:W.indexOf(c)!==-1}),k=Q(M);return e.jsx(q,m({className:b(k.root,p),as:c,role:!g&&l?"img":void 0,ref:n,style:S,ownerState:M,src:g?l||h:void 0},F,{children:r}))}),K="/assets/banner9-BypRAUJQ.jpg",X="/assets/banner10-Bw9dnv_I.jpg",Y="/assets/banner11-CjUQfhRa.webp",se=()=>{const i=T();return e.jsxs(E,{children:[e.jsx(_,{}),e.jsx(a,{width:"100%",height:"90dvh",display:"flex",bgcolor:"#f2f2f2",flexDirection:"column",children:e.jsxs(a,{display:"flex",flexDirection:"column",height:"90dvh",py:3,px:O,children:[e.jsxs(a,{color:"#1e285d",flex:"0 0 auto",children:[e.jsx(o,{variant:"h5",fontFamily:"IndivisaHeavy",color:"inherit",textAlign:"center",fontSize:{lg:"2.5rem",xl:"4rem"},children:"UNIDADES"}),e.jsx(o,{variant:"body1",fontFamily:"IndivisaRegular",color:"inherit",textAlign:"center",fontSize:{md:"1rem",lg:"1.3rem",xl:"1.5rem"},children:"que integran la experiencia de aprendizaje"})]}),e.jsx(a,{color:"#1e285d",flex:"0 0 auto",pt:2,children:e.jsx(u.div,{whileTap:{scale:.9},children:e.jsx(a,{p:{md:1,lg:1,xl:1.5},bgcolor:"#1e285d",children:e.jsx(a,{color:"#dcd9d2",children:e.jsx(o,{variant:"body1",fontFamily:"IndivisaHeavy",color:"inherit",textAlign:"center",fontSize:{md:"1.2rem",lg:"1.4rem",xl:"1.7rem"},children:"Competencias informacionales y digitales"})})})})}),e.jsx(a,{width:"100%",flex:"1 0 auto",display:"flex",justifyContent:"center",alignItems:"center",py:2,children:e.jsxs(x,{container:!0,spacing:3,height:"100%",children:[e.jsx(x,{item:!0,xs:4,height:"100%",children:e.jsx(a,{width:"100%",height:"100%",children:e.jsx(u.div,{whileTap:{scale:.9},children:e.jsx(f,{onClick:()=>i("/unidades/1/bienvenida"),children:e.jsxs(y,{children:[e.jsx(C,{component:"img",sx:{height:{md:"9rem",lg:"12rem",xl:"15rem"}},image:X,alt:"Alfabetización digital y académica"}),e.jsxs(v,{children:[e.jsx(o,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 1"}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Alfabetización digital y académica"})]})]})})})})}),e.jsx(x,{item:!0,xs:4,children:e.jsx(a,{width:"100%",height:"100%",children:e.jsx(u.div,{whileTap:{scale:.9},children:e.jsx(f,{sx:{height:"auto"},children:e.jsxs(y,{children:[e.jsx(C,{component:"img",sx:{height:{md:"9rem",lg:"12rem",xl:"15rem"}},image:K,alt:"green iguana"}),e.jsxs(v,{children:[e.jsx(o,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 2"}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Competencias digitales para la investigación"})]})]})})})})}),e.jsx(x,{item:!0,xs:4,children:e.jsx(a,{width:"100%",height:"100%",children:e.jsx(u.div,{whileTap:{scale:.9},children:e.jsx(f,{sx:{height:"auto"},children:e.jsxs(y,{children:[e.jsx(C,{component:"img",sx:{height:{md:"9rem",lg:"12rem",xl:"15rem"}},image:Y,alt:"green iguana"}),e.jsxs(v,{children:[e.jsx(o,{gutterBottom:!0,variant:"h5",component:"div",fontFamily:"IndivisaHeavy",align:"center",children:"Unidad 3"}),e.jsx(o,{variant:"body2",sx:{color:"text.secondary"},fontFamily:"IndivisaRegular",align:"center",children:"Comunicación científica en medios digitales"})]})]})})})})})]})})]})})]})};export{se as default};
