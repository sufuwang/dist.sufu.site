var b=Object.defineProperty;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?b(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))v.call(a,t)&&f(e,t,a[t]);if(i)for(var t of i(a))x.call(a,t)&&f(e,t,a[t]);return e};import{r as o,n as T,o as s}from"./index.76705af6.js";import{u as j,L as O,g as _,E as w,C}from"./createLoading.df62f319.js";var L=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},E=o.exports.forwardRef(function(e,a){var t=e.chartRef,r=e.style,n=r===void 0?{height:"inherit"}:r,d=e.className,m=e.loading,u=e.loadingTemplate,g=e.errorTemplate,y=L(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),l=j(O,y),c=l.chart,p=l.container;return o.exports.useEffect(function(){_(t,c.current)},[c.current]),o.exports.useImperativeHandle(a,function(){return{getChart:function(){return c.current}}}),T(w,{errorTemplate:g,children:[m&&s(C,{loadingTemplate:u,theme:e.theme}),s("div",{className:d,style:n,ref:p})]})}),N=E;const R="_chart_1pvcb_1";var D={chart:R};const S=()=>{const[e,a]=o.exports.useState([]);o.exports.useEffect(()=>{t()},[]);const t=()=>{fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(n=>n.json()).then(n=>a(n)).catch(n=>{console.log("fetch data failed",n)})},r={data:e,padding:"auto",xField:"Date",yField:"scales",xAxis:{tickCount:5}};return s(N,h({className:D.chart},r))};export{S as default};