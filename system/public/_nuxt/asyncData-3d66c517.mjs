var g=Object.defineProperty;var m=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var v=(a,n,e)=>n in a?g(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e,h=(a,n)=>{for(var e in n||(n={}))D.call(n,e)&&v(a,e,n[e]);if(m)for(var e of m(n))p.call(n,e)&&v(a,e,n[e]);return a};import{u as _,k as b,l as P,r as l,m as w}from"./bootstrap-4c3db2f1.mjs";const O=()=>null;function M(a,n,e={}){var o,i,d,y;if(typeof a!="string")throw new TypeError("asyncData key must be a string");if(typeof n!="function")throw new TypeError("asyncData handler must be a function");e=h({server:!0,default:O},e),e.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),e.lazy=(i=(o=e.lazy)!=null?o:e.defer)!=null?i:!1;const r=_(),u=w();if(u&&!u._nuxtOnBeforeMountCbs){const f=u._nuxtOnBeforeMountCbs=[];u&&(b(()=>{f.forEach(s=>{s()}),f.splice(0,f.length)}),P(()=>f.splice(0,f.length)))}const t={data:l((d=r.payload.data[a])!=null?d:e.default()),pending:l(!0),error:l((y=r.payload._errors[a])!=null?y:null)};t.refresh=f=>(r._asyncDataPromises[a]&&!f||(t.pending.value=!0,r._asyncDataPromises[a]=Promise.resolve(n(r)).then(s=>{e.transform&&(s=e.transform(s)),e.pick&&(s=x(s,e.pick)),t.data.value=s,t.error.value=null}).catch(s=>{t.error.value=s,t.data.value=e.default()}).finally(()=>{t.pending.value=!1,r.payload.data[a]=t.data.value,t.error.value&&(r.payload._errors[a]=!0),delete r._asyncDataPromises[a]})),r._asyncDataPromises[a]),e.server!==!1&&r.payload.serverRendered&&r.isHydrating?t.pending.value=!1:u&&(r.isHydrating||e.lazy)?u._nuxtOnBeforeMountCbs.push(t.refresh):t.refresh();const c=Promise.resolve(r._asyncDataPromises[a]).then(()=>t);return Object.assign(c,t),c}function x(a,n){const e={};for(const r of n)e[r]=a[r];return e}export{M as u};