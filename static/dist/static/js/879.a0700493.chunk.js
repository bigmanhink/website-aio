"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[879],{1492:function(e,t,n){var i=n(922),s=n(8294),a=n(2539),r=n(8736),l=n(5710);let o=e=>JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:e.mainEntity.map(e=>({"@type":"Question",name:e.name,acceptedAnswer:{"@type":"Answer",text:e.acceptedAnswer.text}}))}),c=e=>JSON.stringify({"@context":"https://schema.org","@type":"WebSite",url:e.url,potentialAction:e.potentialAction.map(e=>({"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:e.target.urlTemplate},"query-input":e["query-input"]}))}),p=({title:e,description:t,faq:p,actions:h})=>{let[d]=(0,s.fO)();return(0,i.jsxs)(l.ql,{children:[(0,i.jsx)("title",{children:""===d.title?e||"Holy Unblocker":d.title}),!a.tD&&t&&(0,i.jsx)("meta",{name:"description",content:t}),!a.tD&&p&&(0,i.jsx)("script",{type:"application/ld+json",children:o({mainEntity:p})}),!a.tD&&h&&(0,i.jsx)("script",{type:"application/ld+json",children:c({url:new URL((0,r.k$)("home").path,n.g.location.toString()).toString(),potentialAction:h})})]})};t.Z=p},188:function(e,t){t.Z=[{name:"Google",format:"https://www.google.com/search?q=%s"},{name:"DuckDuckGo",format:"https://duckduckgo.com/?q=%s"},{name:"Bing",format:"https://www.bing.com/search?q=%s"},{name:"Wikipedia",format:"https://en.wikipedia.org/wiki/Special:Search?search=%s"},{name:"Reddit",format:"https://www.reddit.com/search/?q=%s"},{name:"Hacker News",format:"https://hn.algolia.com/?query=%s"}]},2879:function(e,t,n){n.r(t);var i=n(6042),s=n(9396),a=n(922),r=n(8294),l=n(1492),o=n(168),c=n(188),p=n(8065),h=n(386),d=n(360);let m=()=>(0,a.jsx)(l.Z,{title:"Proxy Settings"}),u=()=>{let{t:e}=(0,d.$G)(["settings","link"]),[t,n]=(0,r.hz)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(p.mj,{children:e("link:proxy")}),":"]}),(0,a.jsxs)(o.NB,{className:h.Z.ThemeSelect,onChange:e=>n((0,s.Z)((0,i.Z)({},t),{proxy:e.target.value})),defaultValue:t.proxy,children:[(0,a.jsx)("option",{value:"automatic",children:e("settings:automaticProxy")}),(0,a.jsx)("option",{value:"ultraviolet",children:"Ultraviolet"}),(0,a.jsx)("option",{value:"rammerhead",children:"Rammerhead"}),(0,a.jsx)("option",{value:"stomp",children:"Stomp"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(p.mj,{children:e("settings:proxy.mode")}),":"]}),(0,a.jsxs)(o.NB,{className:h.Z.ThemeSelect,onChange:e=>n((0,s.Z)((0,i.Z)({},t),{proxyMode:e.target.value})),defaultValue:t.proxyMode,children:[(0,a.jsx)("option",{value:"embedded",children:e("settings:proxy.setting.embedded")}),(0,a.jsx)("option",{value:"redirect",children:e("settings:proxy.setting.redirect")}),(0,a.jsx)("option",{value:"about:blank",children:e("settings:proxy.setting.ab")})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)(p.mj,{children:e("settings:searchEngine")}),":"]}),(0,a.jsx)(o.NB,{className:h.Z.ThemeSelect,onChange:e=>n((0,s.Z)((0,i.Z)({},t),{search:e.target.value})),defaultValue:t.search,children:c.Z.map(({name:e,format:t})=>(0,a.jsx)("option",{value:t,children:e},t))})]})]})]})};t.default=u}}]);
//# sourceMappingURL=879.a0700493.chunk.js.map