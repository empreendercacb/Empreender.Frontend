import{r as o,u as j,a as h,j as e,c as v,S as N,d as S,b as L,i as b,s as w}from"./index-21b031a3.js";import{H,M as A,S as y,N as E,U as z}from"./AuthorityCheck-830875f0.js";import{S as C,a as D}from"./SideNav-8877d09d.js";import{A as c}from"./index-08f0c23f.js";import{D as n}from"./ScrollBar-bd089b9f.js";import{w as k,S as F}from"./SidePanel-7726ba52.js";import{H as M}from"./get-dd864793.js";import{V as U}from"./Views-c4b9753b.js";import"./index-5c377248.js";import"./isNil-14c55c6e.js";import"./useThemeClass-b0a2b12e.js";import"./Logo-e7facc8f.js";import"./VerticalMenuContent-8558f610.js";import"./index-52d08ebb.js";import"./_getPrototype-1c0d569b.js";import"./index-79a2efb8.js";const i=[{label:"Português (BR)",value:"br",flag:"pt-br"},{label:"English",value:"en",flag:"us"}],I=({className:m})=>{const[x,r]=o.useState(!1),t=j(s=>s.locale.currentLang),d=h(),p=o.useMemo(()=>{var s;return(s=i.find(a=>a.value===t))==null?void 0:s.flag},[t]),u=e.jsx("div",{className:v(m,"flex items-center"),children:x?e.jsx(N,{size:20}):e.jsx(c,{size:24,shape:"circle",src:`/img/countries/${p}.png`})}),f=s=>{const a=s.replace(/-([a-z])/g,function(g){return g[1].toUpperCase()});r(!0);const l=()=>{b.changeLanguage(a),d(w(s)),r(!1)};S[a]().then(()=>{L.locale(a),l()}).catch(()=>{l()})};return e.jsx(n,{renderTitle:u,placement:"bottom-end",children:i.map(s=>e.jsxs(n.Item,{className:"mb-1 justify-between",eventKey:s.label,onClick:()=>f(s.value),children:[e.jsxs("span",{className:"flex items-center",children:[e.jsx(c,{size:18,shape:"circle",src:`/img/countries/${s.flag}.png`}),e.jsx("span",{className:"ltr:ml-2 rtl:mr-2",children:s.label})]}),t===s.value&&e.jsx(M,{className:"text-emerald-500 text-lg"})]},s.label))})},P=k(I),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{}),e.jsx(D,{}),e.jsx(y,{})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsx(E,{}),e.jsx(F,{}),e.jsx(z,{hoverable:!1})]}),ae=()=>e.jsx("div",{className:"app-layout-classic flex flex-auto flex-col",children:e.jsxs("div",{className:"flex flex-auto min-w-0",children:[e.jsx(C,{}),e.jsxs("div",{className:"flex flex-col flex-auto min-h-screen min-w-0 relative w-full",children:[e.jsx(H,{className:"shadow dark:shadow-2xl",headerStart:e.jsx(R,{}),headerEnd:e.jsx(T,{})}),e.jsx("div",{className:"h-full flex flex-auto flex-col",children:e.jsx(U,{})})]})]})});export{ae as default};
