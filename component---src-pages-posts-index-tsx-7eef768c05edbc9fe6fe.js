"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2561],{5734:function(n,e,t){var l,a,r,i,c=t(1880),o=t(7294),d=t(891);const u=d.ZP.div(l||(l=(0,c.Z)(["\n  margin: 40px 0 45px;\n  padding-left: 40px;\n\n  @media (max-width: 414px) {\n    padding-left: 20px;\n  }\n"]))),m=d.ZP.p(a||(a=(0,c.Z)([""]))),p=d.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 414px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),s=d.ZP.p(i||(i=(0,c.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));e.Z=function(n){let{title:e,subtitle:t,note:l}=n;return o.createElement(u,null,!!t&&o.createElement(m,null,t),o.createElement(p,null,o.createElement("h1",null,e),!!l&&o.createElement(s,null,"("+l+")")))}},6584:function(n,e,t){t.d(e,{Z:function(){return k}});var l,a,r,i,c,o=t(1880),d=t(7294),u=t(891),m=t(1883),p=t(3723);const s=u.ZP.div(l||(l=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: #666666;\n  }\n"]))),f=u.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n\n  width: 60px;\n  height: 60px;\n\n  background-color: #222222;\n"]))),Z=(0,u.ZP)(p.G)(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),g=u.ZP.div(i||(i=(0,o.Z)(["\n  flex: 1;\n\n  & > h2 {\n    margin: 0;\n    font-size: 1.125rem;\n  }\n"]))),x=u.ZP.div(c||(c=(0,o.Z)(["\n  font-size: 0.8125rem;\n  color: #dddddd;\n"])));var h,v=function(n){let{title:e,slug:t,date:l,heroImage:a,heroImageAlt:r}=n;const i=a?(0,p.c)(a):null,c="Invalid date"!==l;return d.createElement(s,{onClick:()=>(0,m.navigate)("/posts/"+t)},d.createElement(f,null,!!i&&d.createElement(Z,{image:i,alt:null!=r?r:""})),d.createElement(g,null,d.createElement("h2",null,e),d.createElement(x,null,c?l:t)))};const E=u.ZP.div(h||(h=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"])));var k=function(n){let{data:e}=n;return d.createElement(E,null,e.map(((n,e)=>{let{...t}=n;return d.createElement(v,Object.assign({key:e},t))})))}},6415:function(n,e){e.Z=function(n){return n.map((n=>({...n.frontmatter})))}},2148:function(n,e,t){t.r(e),t.d(e,{Head:function(){return d}});var l=t(7294),a=t(1858),r=t(3904),i=t(5734),c=t(6584),o=t(6415);const d=()=>l.createElement(r.Z,{title:"모든 글"});e.default=function(n){let{data:e}=n;const t=(0,o.Z)(e.allMdx.nodes);return l.createElement(a.Z,null,l.createElement(i.Z,{title:"글",note:t.length}),l.createElement(c.Z,{data:t}))}}}]);
//# sourceMappingURL=component---src-pages-posts-index-tsx-7eef768c05edbc9fe6fe.js.map