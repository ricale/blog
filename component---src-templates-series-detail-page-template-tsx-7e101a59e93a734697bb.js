"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9376],{6758:function(n,e,t){t.d(e,{Z:function(){return y}});var a,r,i=t(1880),l=t(7294),o=t(1883),m=t(891),c=t(5785);const s=[{path:"/posts",title:"모든글"},{path:"/series",title:"시리즈"},{path:"/tags",title:"태그"},{path:"/rss.xml",title:"RSS"}].concat((0,c.Z)([]));const d=m.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  margin: 0px 16px 8px;\n  padding-top: 8px;\n\n  & > header {\n    margin-right: 8px;\n    font-weight: 600;\n    font-size: 1.25rem;\n    > a {\n      color: white;\n    }\n  }\n\n  & > address {\n    font-size: 0.875rem;\n    font-style: normal;\n    > a {\n      color: white;\n    }\n  }\n\n  & > nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n\n    flex: 1;\n    > ul {\n      display: flex;\n      flex-direction: row;\n      gap: 8px;\n\n      margin: 0;\n      margin-left: 16px;\n      padding: 0;\n      list-style: none;\n\n      > li > a {\n        display: inline-block;\n        color: #dddddd;\n        text-decoration: underline;\n        font-size: 0.875rem;\n      }\n    }\n  }\n\n  ","\n"])),(n=>n.emphasize&&(0,m.iv)(r||(r=(0,i.Z)(["\n      padding-top: 56px;\n      padding-bottom: 48px;\n      & > header {\n        font-family: monospace;\n        font-size: 5rem;\n      }\n      & > address {\n        font-family: monospace;\n        font-size: 1.5rem;\n      }\n      & > nav {\n        display: none;\n      }\n\n      @media (max-width: 799px) {\n        flex-direction: column;\n\n        & > header {\n          font-family: monospace;\n          font-size: 4.5rem;\n        }\n        & > address {\n          font-family: monospace;\n          font-size: 1.25rem;\n        }\n      }\n    "])))));var p,f=function(n){let{emphasize:e,title:t,author:a}=n;return l.createElement(d,{emphasize:e},l.createElement("header",null,l.createElement(o.Link,{to:"/"},t)),l.createElement("address",null,l.createElement("a",{href:"https://ricale.kr"},"by "+a)),l.createElement("nav",null,l.createElement("ul",null,s.map((n=>l.createElement("li",{key:n.path},l.createElement(o.Link,{to:n.path},n.title)))))))};const u=m.ZP.div(p||(p=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n\n  margin-top: 60px;\n  margin-bottom: 16px;\n\n  font-size: 0.8125rem;\n\n  color: #aaaaaa;\n  p {\n    white-space: nowrap;\n  }\n  a {\n    color: #aaaaaa;\n  }\n  strong,\n  strong > a {\n    font-weight: normal;\n    color: #ffffff;\n  }\n"])));var g,h,x,E=function(){return l.createElement(u,null,l.createElement("p",null,"Copyright 2021"," ",l.createElement("strong",null,l.createElement("a",{href:"https://ricale.kr/"},"ricale"),".")),l.createElement("p",null,l.createElement("a",{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/kr/"},"CC BY-NC-SA 2.0 KR"),"."),l.createElement("p",null,"Powered by"," ",l.createElement("strong",null,l.createElement("a",{href:"https://www.gatsbyjs.com/"},"Gatsby"))," ","and"," ",l.createElement("strong",null,l.createElement("a",{href:"https://pages.github.com/"},"GitHub Pages")),"."))};const b=m.ZP.div(g||(g=(0,i.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  > main {\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n\n    @media (max-width: 799px) {\n      padding-left: ","px;\n      padding-right: ","px;\n    }\n  }\n"])),(n=>n.theme.dimens.margin),(n=>n.theme.dimens.margin),(n=>n.theme.dimens.margin),(n=>n.theme.dimens.margin+4),(n=>n.theme.dimens.margin+4)),Z=m.ZP.main(h||(h=(0,i.Z)(["\n  ","\n"])),(n=>void 0!==n.minHeight&&(0,m.iv)(x||(x=(0,i.Z)(["\n      min-height: ","px;\n    "])),n.minHeight)));var y=function(n){let{emphasize:e,minContentHeight:t,children:a}=n;const r=(0,o.useStaticQuery)("2199005656"),{title:i,author:c}=r.site.siteMetadata;return l.createElement(m.f6,{theme:m.qc},l.createElement(m.ZL,null),l.createElement(b,null,l.createElement(f,{emphasize:e,title:i,author:c}),l.createElement(Z,{minHeight:t},a),l.createElement(E,null)))}},5734:function(n,e,t){var a,r,i,l,o=t(1880),m=t(7294),c=t(891);const s=c.ZP.div(a||(a=(0,o.Z)(["\n  margin: 40px 0 45px;\n  padding-left: 40px;\n\n  @media (max-width: 414px) {\n    padding-left: 20px;\n  }\n"]))),d=c.ZP.p(r||(r=(0,o.Z)([""]))),p=c.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 414px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),f=c.ZP.p(l||(l=(0,o.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));e.Z=function(n){let{title:e,subtitle:t,note:a}=n;return m.createElement(s,null,!!t&&m.createElement(d,null,t),m.createElement(p,null,m.createElement("h1",null,e),!!a&&m.createElement(f,null,"("+a+")")))}},9957:function(n,e,t){var a,r,i,l,o=t(1880),m=t(5785),c=t(7294),s=t(1883),d=t(891);const p=d.ZP.div(a||(a=(0,o.Z)([""]))),f=d.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 2px;\n\n  > span {\n    font-size: 0.875rem;\n    color: #ffffff;\n  }\n"]))),u=d.ZP.button(i||(i=(0,o.Z)(["\n  border: 0;\n  text-decoration: underline;\n\n  font-size: 0.875rem;\n  color: #ffffff;\n  background-color: transparent;\n  cursor: pointer;\n"]))),g=d.ZP.ol(l||(l=(0,o.Z)(["\n  margin-top: 8px;\n  padding-left: 0px;\n  list-style: none;\n  cursor: pointer;\n\n  li {\n    display: flex;\n    align-items: center;\n\n    padding: 2px;\n    margin-bottom: 4px;\n    :hover {\n      background-color: #666666;\n    }\n\n    > .date {\n      margin-right: 8px;\n      font-family: monospace;\n      font-size: 0.875rem;\n    }\n    > .title {\n      color: skyblue;\n    }\n  }\n\n  @media (max-width: 414px) {\n    li {\n      flex-direction: column;\n      align-items: flex-start;\n\n      margin-bottom: 12px;\n      > .date {\n        order: 2;\n        font-size: 0.75rem;\n      }\n      > .title {\n        order: 1;\n      }\n    }\n  }\n"])));e.Z=function(n){let{data:e}=n;const[t,a]=c.useState(!1),r=(0,m.Z)(e).sort(((n,e)=>n.node.frontmatter.originalDate.localeCompare(e.node.frontmatter.originalDate)*(t?1:-1)));return c.createElement(p,null,c.createElement(f,null,c.createElement("span",null,"정렬:"),c.createElement(u,{onClick:()=>a((n=>!n))},"작성일 "+(t?"오름차순":"내림차순"))),c.createElement(g,null,r.map((n=>{let{node:{frontmatter:e}}=n;return c.createElement("li",{key:e.slug,onClick:()=>(0,s.navigate)("/posts/"+e.slug)},c.createElement("span",{className:"date"},e.date),c.createElement("span",{className:"title"},e.title))}))))}},2233:function(n,e,t){t.r(e);var a=t(7294),r=t(6758),i=t(5734),l=t(9957);e.default=n=>{let{pageContext:e,data:t}=n;const{series:o}=e,{totalCount:m,edges:c}=t.allMdx;return a.createElement(r.Z,{minContentHeight:500},a.createElement(i.Z,{title:o,subtitle:"시리즈",note:m}),a.createElement(l.Z,{data:c}))}},891:function(n,e,t){t.d(e,{ZL:function(){return f},f6:function(){return o},iv:function(){return i},ZP:function(){return u},qc:function(){return d}});var a=t(2788);const{default:r,css:i,keyframes:l,ThemeProvider:o,ThemeContext:m,createGlobalStyle:c}=a;var s,d={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",blockquoteBorder:"#666666",blockquote:"#1a1a1a",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#222222",onTag:"skyblue",tableBorder:"white"}},p=t(1880);var f=c(s||(s=(0,p.Z)(['\n  html, body, #___gatsby {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    \n    font-family: -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      "Noto Sans",\n      Helvetica,\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji";\n\n    background-color: ',";\n    color: ",";\n  }\n\n  h1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n  }\n\n  a {\n    color: skyblue;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(n=>n.theme.colors.background),(n=>n.theme.colors.onBackground));t(7294);var u=r},1880:function(n,e,t){function a(n,e){return e||(e=n.slice(0)),n.raw=e,n}t.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-templates-series-detail-page-template-tsx-7e101a59e93a734697bb.js.map