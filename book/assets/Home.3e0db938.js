import{u as y,w as F,N as g}from"./app.ccc97914.js";import{_ as m,M as h,G as i,P as e,N as o,O as a,U as c,Q as r,T as l,W as x,F as I,a2 as L,a4 as C,C as d,a3 as k}from"./plugin-vue_export-helper.8946c43c.js";const N={key:0,class:"home-hero"},A={key:0,class:"figure"},B=["src","alt"],w={key:1,id:"main-title",class:"title"},V={key:2,class:"tagline"},b=h({setup(p){const{site:s,frontmatter:t}=y(),_=i(()=>{const{heroImage:n,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return n||u||$||H&&T}),v=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(n,u)=>e(_)?(o(),a("header",N,[e(t).heroImage?(o(),a("figure",A,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):r("",!0),e(v)?(o(),a("h1",w,l(e(v)),1)):r("",!0),e(f)?(o(),a("p",V,l(e(f)),1)):r("",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)}});var D=m(b,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},E={class:"wrapper"},G={class:"container"},M={class:"features"},O={key:0,class:"title"},P={key:1,class:"details"},Q=h({setup(p){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(v,f)=>e(t)?(o(),a("div",S,[c("div",E,[c("div",G,[c("div",M,[(o(!0),a(I,null,L(e(_),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",O,l(n.title),1)):r("",!0),n.details?(o(),a("p",P,l(n.details),1)):r("",!0)]))),128))])])])])):r("",!0)}});var U=m(Q,[["__scopeId","data-v-e39c13e0"]]);const W={key:0,class:"footer"},j={class:"container"},q={class:"text"},z=h({setup(p){const{frontmatter:s}=y();return(t,_)=>e(s).footer?(o(),a("footer",W,[c("div",j,[c("p",q,l(e(s).footer),1)])])):r("",!0)}});var J=m(z,[["__scopeId","data-v-30918238"]]);const K={class:"home","aria-labelledby":"main-title"},R={class:"home-content"},X=h({setup(p){return(s,t)=>{const _=C("Content");return o(),a("main",K,[d(D),k(s.$slots,"hero",{},void 0,!0),d(U),c("div",R,[d(_)]),k(s.$slots,"features",{},void 0,!0),d(J),k(s.$slots,"footer",{},void 0,!0)])}}});var ee=m(X,[["__scopeId","data-v-10122c92"]]);export{ee as default};