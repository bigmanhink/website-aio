"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[443],{1492:function(t,e,n){var i=n(922),s=n(8294),o=n(2539),r=n(8736),c=n(5710);let a=t=>JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.mainEntity.map(t=>({"@type":"Question",name:t.name,acceptedAnswer:{"@type":"Answer",text:t.acceptedAnswer.text}}))}),l=t=>JSON.stringify({"@context":"https://schema.org","@type":"WebSite",url:t.url,potentialAction:t.potentialAction.map(t=>({"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:t.target.urlTemplate},"query-input":t["query-input"]}))}),p=({title:t,description:e,faq:p,actions:u})=>{let[h]=(0,s.fO)();return(0,i.jsxs)(c.ql,{children:[(0,i.jsx)("title",{children:""===h.title?t||"Holy Unblocker":h.title}),!o.tD&&e&&(0,i.jsx)("meta",{name:"description",content:e}),!o.tD&&p&&(0,i.jsx)("script",{type:"application/ld+json",children:a({mainEntity:p})}),!o.tD&&u&&(0,i.jsx)("script",{type:"application/ld+json",children:l({url:new URL((0,r.k$)("home").path,n.g.location.toString()).toString(),potentialAction:u})})]})};e.Z=p},443:function(t,e,n){n.r(e);var i=n(922),s=n(1492),o=n(168),r=n(8736),c=n(360);let a=()=>(0,i.jsx)(s.Z,{title:"Not Found",description:"Page not found."}),l=()=>{let{t}=(0,c.$G)("notFound");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{}),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:t("title")}),(0,i.jsx)("hr",{}),(0,i.jsxs)("p",{children:[t("suggestion"),(0,i.jsx)("br",{}),(0,i.jsx)(c.cC,{ns:"notFound",i18nKey:"contactUs",components:[(0,i.jsx)(o.Vo,{to:(0,r.k$)("contact").path})]})]})]})]})};e.default=l}}]);
//# sourceMappingURL=443.5e71ac96.chunk.js.map