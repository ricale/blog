"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2561],{1858:function(e,t,n){var r,l,a=n(1880),o=n(1883),c=n(7294),i=n(891);const m=i.ZP.div(r||(r=(0,a.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  > main {\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n  }\n"])),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin)),u=i.ZP.div(l||(l=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  margin: 8px 16px;\n\n  & > header {\n    font-weight: 900;\n  }\n\n  & > address {\n    margin-left: 8px;\n  }\n\n  & > nav > ul {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n\n    margin: 0;\n    margin-left: 16px;\n    padding: 0;\n    list-style: none;\n  }\n"])));t.Z=e=>{let{children:t}=e;const n=(0,o.K2)("3159585216");return c.createElement(i.f6,{theme:i.qc},c.createElement(i.ZL,null),c.createElement(m,null,c.createElement(u,null,c.createElement("header",null,n.site.siteMetadata.title),c.createElement("address",null,"by ricale"),c.createElement("nav",null,c.createElement("ul",null,c.createElement("li",null,c.createElement(o.rU,{to:"/posts"},"글")),c.createElement("li",null,c.createElement(o.rU,{to:"/tags"},"태그"))))),c.createElement("main",null,t)))}},3904:function(e,t,n){var r=n(7294),l=n(1883);t.Z=e=>{let{title:t,description:n,path:a,thumbnail:o,ogType:c,keywords:i}=e;const m=(0,l.K2)("3000394247"),{siteMetadata:{title:u,author:d,siteUrl:p,description:s},pathPrefix:g}=m.site,E=t?t+" | "+u:u,f=null!=t?t:u,h=n||s,y=""+p+g+(a?"/"+a:""),b=o?""+p+o:null,x=i?i.join(", "):null;return r.createElement(r.Fragment,null,r.createElement("title",null,E),r.createElement("meta",{name:"description",content:h}),r.createElement("meta",{name:"author",content:d}),x&&r.createElement("meta",{name:"keywords",content:x}),!!c&&r.createElement("meta",{property:"og:type",content:c}),r.createElement("meta",{property:"og:title",content:f}),r.createElement("meta",{property:"og:description",content:h}),r.createElement("meta",{property:"og:url",content:y}),!!b&&r.createElement("meta",{property:"og:image",content:b}),r.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{property:"twitter:title",content:f}),r.createElement("meta",{property:"twitter:description",content:h}),r.createElement("meta",{property:"twitter:url",content:y}),!!b&&r.createElement("meta",{property:"twitter:image",content:b}))}},2148:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),l=n(1883),a=n(1858),o=n(3904);const c=()=>r.createElement(o.Z,null);t.default=e=>{let{data:t}=e;return r.createElement(a.Z,null,r.createElement("p",null,t.allMdx.nodes.length,"개 글"),t.allMdx.nodes.map(((e,t)=>r.createElement("article",{key:t},r.createElement("h2",null,r.createElement(l.rU,{to:"/posts/"+e.frontmatter.slug},e.frontmatter.title)),r.createElement("div",null,e.frontmatter.date),r.createElement("p",null,e.excerpt)))))}},891:function(e,t,n){n.d(t,{ZL:function(){return s},f6:function(){return c},ZP:function(){return g},qc:function(){return d}});var r=n(2788);const{default:l,css:a,keyframes:o,ThemeProvider:c,ThemeContext:i,createGlobalStyle:m}=r;var u,d={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#222222",onTag:"skyblue",tableBorder:"white"}},p=n(1880);var s=m(u||(u=(0,p.Z)(['\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      "Noto Sans",\n      Helvetica,\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji";\n\n    overflow-x: hidden;\n\n    background-color: ',";\n    color: ",";\n  }\n\n  a {\n    color: skyblue;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(e=>e.theme.colors.background),(e=>e.theme.colors.onBackground));n(7294);var g=l},1880:function(e,t,n){function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-posts-index-tsx-659def06e768a16a6286.js.map