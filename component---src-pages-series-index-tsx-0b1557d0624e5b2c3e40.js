"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2794],{1858:function(e,n,t){var r,l,a=t(1880),o=t(1883),i=t(7294),c=t(891);const m=c.ZP.div(r||(r=(0,a.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  > main {\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n  }\n"])),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin)),u=c.ZP.div(l||(l=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  margin: 8px 16px;\n\n  & > header {\n    font-weight: 900;\n  }\n\n  & > address {\n    margin-left: 8px;\n  }\n\n  & > nav > ul {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n\n    margin: 0;\n    margin-left: 16px;\n    padding: 0;\n    list-style: none;\n  }\n"])));n.Z=e=>{let{children:n}=e;const t=(0,o.K2)("3159585216");return i.createElement(c.f6,{theme:c.qc},i.createElement(c.ZL,null),i.createElement(m,null,i.createElement(u,null,i.createElement("header",null,t.site.siteMetadata.title),i.createElement("address",null,"by ricale"),i.createElement("nav",null,i.createElement("ul",null,i.createElement("li",null,i.createElement(o.rU,{to:"/posts"},"글")),i.createElement("li",null,i.createElement(o.rU,{to:"/tags"},"태그")),i.createElement("li",null,i.createElement(o.rU,{to:"/series"},"시리즈"))))),i.createElement("main",null,n)))}},3904:function(e,n,t){var r=t(7294),l=t(1883);n.Z=e=>{let{title:n,description:t,path:a,thumbnail:o,ogType:i,keywords:c}=e;const m=(0,l.K2)("3000394247"),{siteMetadata:{title:u,author:d,siteUrl:s,description:p},pathPrefix:g}=m.site,E=n?n+" | "+u:u,f=null!=n?n:u,h=t||p,y=""+s+g+(a?"/"+a:""),b=o?""+s+o:null,x=c?c.join(", "):null;return r.createElement(r.Fragment,null,r.createElement("title",null,E),r.createElement("meta",{name:"description",content:h}),r.createElement("meta",{name:"author",content:d}),x&&r.createElement("meta",{name:"keywords",content:x}),!!i&&r.createElement("meta",{property:"og:type",content:i}),r.createElement("meta",{property:"og:title",content:f}),r.createElement("meta",{property:"og:description",content:h}),r.createElement("meta",{property:"og:url",content:y}),!!b&&r.createElement("meta",{property:"og:image",content:b}),r.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{property:"twitter:title",content:f}),r.createElement("meta",{property:"twitter:description",content:h}),r.createElement("meta",{property:"twitter:url",content:y}),!!b&&r.createElement("meta",{property:"twitter:image",content:b}))}},4556:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i}});var r=t(7294),l=t(1883),a=t(1858),o=t(3904);const i=()=>r.createElement(o.Z,{title:"시리즈 목록"});n.default=e=>{let{data:n}=e;const t=n.allMdx.group;return r.createElement(a.Z,null,r.createElement("h1",null,"시리즈"),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.fieldValue},r.createElement(l.rU,{to:"/series/"+e.fieldValue+"/"},""+e.fieldValue)," ",r.createElement("small",null,e.totalCount))))))}},891:function(e,n,t){t.d(n,{ZL:function(){return p},f6:function(){return i},iv:function(){return a},ZP:function(){return g},qc:function(){return d}});var r=t(2788);const{default:l,css:a,keyframes:o,ThemeProvider:i,ThemeContext:c,createGlobalStyle:m}=r;var u,d={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#222222",onTag:"skyblue",tableBorder:"white"}},s=t(1880);var p=m(u||(u=(0,s.Z)(['\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      "Noto Sans",\n      Helvetica,\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji";\n\n    overflow-x: hidden;\n\n    background-color: ',";\n    color: ",";\n  }\n\n  a {\n    color: skyblue;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(e=>e.theme.colors.background),(e=>e.theme.colors.onBackground));t(7294);var g=l},1880:function(e,n,t){function r(e,n){return n||(n=e.slice(0)),e.raw=n,e}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-series-index-tsx-0b1557d0624e5b2c3e40.js.map