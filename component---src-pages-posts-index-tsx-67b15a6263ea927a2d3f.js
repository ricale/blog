"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[561],{1858:function(e,t,n){var r,l,o=n(1880),a=n(1883),c=n(7294),i=n(891);const m=i.ZP.div(r||(r=(0,o.Z)(["\n  max-width: 800px;\n  padding: ","px;\n"])),(e=>e.theme.dimens.margin));i.ZP.header(l||(l=(0,o.Z)([""])));t.Z=e=>{let{children:t}=e;const n=(0,a.K2)("3159585216");return c.createElement(i.f6,{theme:i.qc},c.createElement(i.ZL,null),c.createElement(m,null,c.createElement("header",null,n.site.siteMetadata.title),c.createElement("nav",null,c.createElement("ul",null,c.createElement("li",null,c.createElement(a.rU,{to:"/posts"},"posts")),c.createElement("li",null,c.createElement(a.rU,{to:"/tags"},"tags")))),c.createElement("main",null,t)))}},3904:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{let{title:t,description:n,path:o,thumbnail:a,ogType:c}=e;const i=(0,l.K2)("3279059640");console.log(">>> data",i),console.log({title:t,description:n,path:o,thumbnail:a,ogType:c});const{siteMetadata:{title:m,siteUrl:u,description:d},pathPrefix:p}=i.site,s=t?t+" | "+m:m,g=null!=t?t:m,E=n||d,h=""+u+p+(o?"/"+o:""),f=a?""+u+a:null;return r.createElement(r.Fragment,null,r.createElement("title",null,s),!!c&&r.createElement("meta",{property:"og:type",content:c}),r.createElement("meta",{property:"og:title",content:g}),r.createElement("meta",{property:"og:description",content:E}),r.createElement("meta",{property:"og:url",content:h}),!!f&&r.createElement("meta",{property:"og:image",content:f}),r.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{property:"twitter:title",content:g}),r.createElement("meta",{property:"twitter:description",content:E}),r.createElement("meta",{property:"twitter:url",content:h}),!!f&&r.createElement("meta",{property:"twitter:image",content:f}))}},2148:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),l=n(1883),o=n(1858),a=n(3904);const c=()=>r.createElement(a.Z,null);t.default=e=>{let{data:t}=e;return r.createElement(o.Z,null,r.createElement("p",null,t.allMdx.nodes.length,"개 글"),t.allMdx.nodes.map(((e,t)=>r.createElement("article",{key:t},r.createElement("h2",null,r.createElement(l.rU,{to:"/posts/"+e.frontmatter.slug},e.frontmatter.title)),r.createElement("div",null,e.frontmatter.date),r.createElement("p",null,e.excerpt)))))}},891:function(e,t,n){n.d(t,{ZL:function(){return s},f6:function(){return c},ZP:function(){return g},qc:function(){return d}});var r=n(2788);const{default:l,css:o,keyframes:a,ThemeProvider:c,ThemeContext:i,createGlobalStyle:m}=r;var u,d={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#111111",onTag:"skyblue",tableBorder:"white"}},p=n(1880);var s=m(u||(u=(0,p.Z)(["\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    line-height: 180%;\n\n    overflow-x: hidden;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  a {\n    color: skyblue;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(e=>e.theme.colors.background),(e=>e.theme.colors.onBackground));n(7294);var g=l},1880:function(e,t,n){function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-posts-index-tsx-67b15a6263ea927a2d3f.js.map