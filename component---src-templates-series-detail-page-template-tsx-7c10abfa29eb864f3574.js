"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9376],{5734:function(e,n,t){var l,a,r,o,i=t(1880),s=t(7294),m=t(891);const c=m.ZP.div(l||(l=(0,i.Z)(["\n  margin: 40px 0 45px;\n  padding-left: 40px;\n\n  @media (max-width: 500px) {\n    padding-left: 20px;\n  }\n"]))),d=m.ZP.p(a||(a=(0,i.Z)([""]))),p=m.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 500px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),u=m.ZP.p(o||(o=(0,i.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));n.Z=function(e){let{title:n,subtitle:t,note:l}=e;return s.createElement(c,null,!!t&&s.createElement(d,null,t),s.createElement(p,null,s.createElement("h1",null,n),!!l&&s.createElement(u,null,"("+l+")")))}},9957:function(e,n,t){var l,a,r,o,i=t(1880),s=t(5785),m=t(7294),c=t(1883),d=t(891);const p=d.ZP.div(l||(l=(0,i.Z)([""]))),u=d.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px;\n\n  & > div:first-child {\n    display: flex;\n    align-items: center;\n  }\n  & > span.divider {\n    font-size: 0.75rem;\n  }\n"]))),g=d.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  > span {\n    font-size: 0.875rem;\n    color: ",";\n  }\n  > a {\n    border: 0;\n    text-decoration: underline;\n\n    font-size: 0.875rem;\n    color: ",";\n    background-color: transparent;\n    cursor: pointer;\n  }\n"])),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground)),f=d.ZP.ol(o||(o=(0,i.Z)(["\n  margin-top: 8px;\n  padding-left: 0px;\n  list-style: none;\n  cursor: pointer;\n\n  li {\n    display: flex;\n    align-items: center;\n\n    padding: 2px;\n    margin-bottom: 4px;\n    :hover {\n      background-color: ",";\n    }\n\n    > .date {\n      margin-right: 8px;\n      font-family: monospace;\n      font-size: 0.875rem;\n    }\n    > .title {\n      color: skyblue;\n    }\n  }\n\n  @media (max-width: 500px) {\n    li {\n      flex-direction: column;\n      align-items: flex-start;\n\n      margin-bottom: 12px;\n      > .date {\n        order: 2;\n        font-size: 0.75rem;\n      }\n      > .title {\n        order: 1;\n      }\n    }\n  }\n"])),(e=>e.theme.colors.hoverSimplePostSeries));n.Z=function(e){let{data:n,actions:t}=e;const[l,a]=m.useState(!1),r=(0,s.Z)(n).sort(((e,n)=>e.node.frontmatter.originalDate.localeCompare(n.node.frontmatter.originalDate)*(l?1:-1)));return m.createElement(p,null,m.createElement(u,null,t&&m.createElement(m.Fragment,null,m.createElement("div",null,t),m.createElement("span",{className:"divider"},"|")),m.createElement(g,null,m.createElement("span",null,"정렬:"),m.createElement("a",{onClick:()=>a((e=>!e))},"작성일 "+(l?"오름차순":"내림차순")))),m.createElement(f,null,r.map((e=>{let{node:{frontmatter:n}}=e;return m.createElement("li",{key:n.slug,onClick:()=>(0,c.navigate)("/posts/"+n.slug)},m.createElement("span",{className:"date"},n.date),m.createElement("span",{className:"title"},n.title))}))))}},2233:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u}});var l,a=t(5785),r=t(1880),o=t(7294),i=t(3723),s=t(6758),m=t(5734),c=t(9957),d=t(3904);const p=t(891).ZP.a(l||(l=(0,r.Z)(["\n  margin-bottom: 2px;\n  color: ",";\n  font-size: 0.875rem;\n  text-decoration: underline;\n"])),(e=>e.theme.colors.onBackground)),u=e=>{var n,t;let{pageContext:l,data:r}=e;const{series:s}=l,{totalCount:m,edges:c}=r.allMdx,p=(0,a.Z)(c).sort(((e,n)=>n.node.frontmatter.originalDate.localeCompare(e.node.frontmatter.originalDate)))[0],u=p.node.frontmatter.heroImage?(0,i.c)(p.node.frontmatter.heroImage):null;return o.createElement(d.Z,{title:'시리즈 "'+s+'"',description:m+"개의 글이 있습니다.",path:"series/"+s,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src})};n.default=e=>{let{pageContext:n,data:t}=e;const{series:l}=n,{totalCount:a,edges:r}=t.allMdx,{siteUrl:i}=t.site.siteMetadata;return o.createElement(s.Z,{minContentHeight:500},o.createElement(m.Z,{title:l,subtitle:"시리즈",note:a}),o.createElement(c.Z,{data:r,actions:o.createElement(p,{href:i+"/series/"+l+"/rss.xml"},"RSS")}))}}}]);
//# sourceMappingURL=component---src-templates-series-detail-page-template-tsx-7c10abfa29eb864f3574.js.map