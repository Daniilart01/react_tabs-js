(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),i=n.n(c),a=n(5),d=n(1),s=(n(10),n(11),n(12),n(4)),b=n.n(s),o=n(0),r=function(t){var e=t.tabs,n=t.selectedTabId,c=(t.setSelectedTabId,t.onTabSelected),i=function(t){return t.id===n||void 0===e.find((function(t){return t.id===n}))&&t.id===e[0].id},a=(e.find((function(t){return t.id===n}))||e[0]).content;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t,a){return Object(o.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":i(t)}),children:Object(o.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return function(t){t.id!==n&&c(e.find((function(e){return e.id===t.id})))}(t)},children:t.title})},t.id)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(d.useState)(l[0].id),e=Object(a.a)(t,2),n=e[0],c=e[1],i=l.find((function(t){return t.id===n}))||l[0];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(i.title)}),Object(o.jsx)(r,{tabs:l,selectedTabId:n,onTabSelected:function(t){c(t.id)}})]})};i.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a5e1fc08.chunk.js.map