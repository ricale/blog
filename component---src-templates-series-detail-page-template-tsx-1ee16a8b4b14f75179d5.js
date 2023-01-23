"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9376],{1858:function(n,e,t){var l,a,r=t(1880),o=t(5785),i=t(7294),c=t(1883),d=t(891);const m=[{path:"/posts",title:"모든글"},{path:"/series",title:"시리즈"},{path:"/tags",title:"태그"}].concat((0,o.Z)([]));const s=d.ZP.div(l||(l=(0,r.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  > main {\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n  }\n"])),(n=>n.theme.dimens.margin),(n=>n.theme.dimens.margin),(n=>n.theme.dimens.margin)),u=d.ZP.div(a||(a=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  margin: 8px 16px;\n\n  & > header {\n    font-weight: 600;\n    font-size: 1.125rem;\n    > a {\n      color: white;\n    }\n  }\n\n  & > address {\n    margin-left: 8px;\n    font-size: 0.875rem;\n    font-style: normal;\n    > a {\n      color: white;\n    }\n  }\n\n  & > nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n\n    flex: 1;\n    > ul {\n      display: flex;\n      flex-direction: row;\n      gap: 8px;\n\n      margin: 0;\n      margin-left: 16px;\n      padding: 0;\n      list-style: none;\n\n      > li > a {\n        display: inline-block;\n        /* padding: 0px 8px; */\n      }\n    }\n  }\n"])));e.Z=function(n){let{children:e}=n;const t=(0,c.K2)("2199005656"),{title:l,author:a}=t.site.siteMetadata;return i.createElement(d.f6,{theme:d.qc},i.createElement(d.ZL,null),i.createElement(s,null,i.createElement(u,null,i.createElement("header",null,i.createElement(c.rU,{to:"/"},l)),i.createElement("address",null,i.createElement("a",{href:"https://ricale.kr"},"by "+a)),i.createElement("nav",null,i.createElement("ul",null,m.map((n=>i.createElement("li",{key:n.path},i.createElement(c.rU,{to:n.path},n.title))))))),i.createElement("main",null,e)))}},5734:function(n,e,t){var l,a,r,o,i=t(1880),c=t(7294),d=t(891);const m=d.ZP.div(l||(l=(0,i.Z)(["\n  margin: 40px 0;\n  padding-left: 40px;\n\n  @media (max-width: 414px) {\n    padding-left: 20px;\n  }\n"]))),s=d.ZP.p(a||(a=(0,i.Z)([""]))),u=d.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 414px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),p=d.ZP.p(o||(o=(0,i.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));e.Z=function(n){let{title:e,subtitle:t,note:l}=n;return c.createElement(m,null,!!t&&c.createElement(s,null,t),c.createElement(u,null,c.createElement("h1",null,e),!!l&&c.createElement(p,null,"("+l+")")))}},9957:function(n,e,t){var l,a=t(1880),r=t(7294),o=t(1883);const i=t(891).ZP.ol(l||(l=(0,a.Z)(["\n  padding-left: 0px;\n  list-style: none;\n  cursor: pointer;\n\n  li {\n    display: flex;\n    margin-bottom: 8px;\n    :hover {\n      background-color: #666666;\n    }\n\n    > .date {\n      margin-right: 8px;\n      font-family: monospace;\n      font-size: 0.875rem;\n    }\n    > .title {\n      color: skyblue;\n    }\n  }\n\n  @media (max-width: 414px) {\n    li {\n      flex-direction: column;\n      margin-bottom: 16px;\n      > .date {\n        order: 2;\n        font-size: 0.75rem;\n      }\n      > .title {\n        order: 1;\n      }\n    }\n  }\n"])));e.Z=function(n){let{data:e}=n;return r.createElement(i,null,e.map((n=>{let{node:{frontmatter:e}}=n;return r.createElement("li",{key:e.slug,onClick:()=>(0,o.c4)("/posts/"+e.slug)},r.createElement("span",{className:"date"},e.date),r.createElement("span",{className:"title"},e.title))})))}},2233:function(n,e,t){t.r(e);var l=t(7294),a=t(1858),r=t(5734),o=t(9957);e.default=n=>{let{pageContext:e,data:t}=n;const{series:i}=e,{totalCount:c,edges:d}=t.allMdx;return l.createElement(a.Z,null,l.createElement(r.Z,{title:i,subtitle:"시리즈",note:c}),l.createElement(o.Z,{data:d}))}},891:function(n,e,t){t.d(e,{ZL:function(){return p},f6:function(){return i},iv:function(){return r},ZP:function(){return f},qc:function(){return s}});var l=t(2788);const{default:a,css:r,keyframes:o,ThemeProvider:i,ThemeContext:c,createGlobalStyle:d}=l;var m,s={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#222222",onTag:"skyblue",tableBorder:"white"}},u=t(1880);var p=d(m||(m=(0,u.Z)(['\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      "Noto Sans",\n      Helvetica,\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji";\n\n    overflow-x: hidden;\n\n    background-color: ',";\n    color: ",";\n  }\n\n  h1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n  }\n\n  a {\n    color: skyblue;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(n=>n.theme.colors.background),(n=>n.theme.colors.onBackground));t(7294);var f=a},1880:function(n,e,t){function l(n,e){return e||(e=n.slice(0)),n.raw=e,n}t.d(e,{Z:function(){return l}})}}]);
//# sourceMappingURL=component---src-templates-series-detail-page-template-tsx-1ee16a8b4b14f75179d5.js.map