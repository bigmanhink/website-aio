"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[852],{852:function(t,e,n){n.r(e);var r=n(7568),i=n(922),s=n(8294),l=n(1492),a=n(6928),o=n(168),c=n(2539),u=n(5240),d=n(8065),f=n(386),h=n(7966),p=n(8133),x=n(2033),m=n(4051),b=n(360);let j=new p.ZP(c.A4);function k(){return(k=(0,r.Z)(function*(t){let e,n;let r=yield j.fetch(t,{redirect:"follow"});if(!r.ok)throw Error(u.ZP.t("settings:tabCloak.error.response",{status:r.status}));let i=new DOMParser,s=i.parseFromString(`${yield r.text()}`,"text/html"),l=document.createElement("base");l.href=t,s.head.append(l);let a=s.querySelector('link[rel*="icon"]');e=a&&""!==a.href?a.href:new URL("/favicon.ico",t).toString();let o=yield j.fetch(e);e=yield function(t){return C.apply(this,arguments)}(new Blob([(yield o.arrayBuffer())],{type:o.headers.get("content-type")}));let c=s.querySelector("title");if(c&&""!==c.textContent)n=c.textContent;else{let d=new URL(r.finalURL);n=`${d.host}${d.pathname}${d.search}`}return{icon:e,title:n,url:r.finalURL}})).apply(this,arguments)}let y=/\s+/,g=/^\w+:/;function C(){return(C=(0,r.Z)(function*(t){let e=new FileReader;return new Promise((n,r)=>{e.addEventListener("load",()=>n(e.result)),e.addEventListener("error",r),e.readAsDataURL(t)})})).apply(this,arguments)}let w=()=>(0,i.jsx)(l.Z,{title:"Tab Cloak Settings"}),v=({layout:t})=>{let{t:e}=(0,b.$G)(["settings","commonError"]),[n,l]=(0,s.fO)(),c=(0,m.useRef)(null);function p(){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(function*(){try{let n,r,s;let o=function(t){if(t.match(g))return t;if(t.includes(".")&&!t.match(y))return`http://${t}`;throw Error(u.ZP.t("settings:tabCloak.error.validate"))}(c.current.value);"about:blank"===o?(n="about:blank",r="none",s="about:blank"):(t.current.notifications.current.add((0,i.jsx)(a.P,{description:e("settings:tabCloak.notification.fetching"),type:"info"})),{title:n,icon:r,url:s}=yield function(t){return k.apply(this,arguments)}(o)),c.current.value=s,l({title:n,icon:r,url:s}),t.current.notifications.current.add((0,i.jsx)(a.P,{description:e("settings:tabCloak.notification.set"),type:"success"}))}catch(d){console.error(d),t.current.notifications.current.add((0,i.jsx)(a.P,{title:e("settings:tabCloak.notification.failure"),description:d instanceof Error?d.message:u.ZP.t("commonError:unknownError"),type:"error"}))}})).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{}),(0,i.jsxs)("section",{children:[(0,i.jsx)("p",{children:(0,i.jsx)(d.mj,{children:e("settings:tabCloak.description")})}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(d.mj,{children:e("settings:tabCloak.urlField")}),":"]}),(0,i.jsx)("form",{onSubmit:t=>{t.preventDefault(),p()},children:(0,i.jsxs)(o.M8,{className:f.Z.ThemeInputBar,children:[(0,i.jsx)("input",{className:o.lx.themePadRight,defaultValue:n.url,placeholder:"https://example.org/",ref:c}),(0,i.jsx)(h.Z,{onClick:p,className:(0,x.Z)(o.lx.button,o.lx.right)})]})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(o.UH,{onClick:()=>{l({title:"",icon:"",url:""}),c.current.value="",t.current.notifications.current.add((0,i.jsx)(a.P,{description:e("settings:tabCloak.notification.reset"),type:"info"}))},children:(0,i.jsx)(d.mj,{children:e("settings:tabCloak.resetButton")})})})]})]})};e.default=v},7966:function(t,e,n){var r=n(4470);e.Z=void 0;var i=r(n(5684)),s=n(922),l=(0,i.default)((0,s.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=l}}]);
//# sourceMappingURL=852.372fe87d.chunk.js.map