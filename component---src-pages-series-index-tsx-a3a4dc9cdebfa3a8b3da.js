"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2794],{5734:function(n,e,t){var l,a,r,i,o=t(1880),c=t(7294),m=t(891);const d=m.ZP.div(l||(l=(0,o.Z)(["\n  margin: 40px 0 45px;\n  padding-left: 40px;\n\n  @media (max-width: 500px) {\n    padding-left: 20px;\n  }\n"]))),s=m.ZP.p(a||(a=(0,o.Z)([""]))),u=m.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 500px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),p=m.ZP.p(i||(i=(0,o.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));e.Z=function(n){let{title:e,subtitle:t,note:l}=n;return c.createElement(d,null,!!t&&c.createElement(s,null,t),c.createElement(u,null,c.createElement("h1",null,e),!!l&&c.createElement(p,null,"("+l+")")))}},4392:function(n,e,t){t.d(e,{Z:function(){return b}});var l,a,r,i,o=t(1880),c=t(7294),m=t(891),d=t(3723),s=t(1883);const u=m.ZP.div(l||(l=(0,o.Z)(['\n  position: relative;\n  cursor: pointer;\n  &::after {\n    content: "";\n    display: block;\n    padding-bottom: 100%;\n  }\n']))),p=m.ZP.div(a||(a=(0,o.Z)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n\n  background-color: ",";\n"])),(n=>n.theme.colors.seriesListItemThumbnail)),f=(0,m.ZP)(d.G)(r||(r=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),x=m.ZP.div(i||(i=(0,o.Z)(["\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  right: 8px;\n  bottom: 8px;\n\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n\n  background-color: ",";\n\n  & > h3 {\n    flex: 1;\n    margin: 0 0 4px;\n    word-break: keep-all;\n  }\n  & > small {\n    text-align: right;\n  }\n  & > h3 > small {\n    padding: 2px 4px;\n\n    background-color: ",";\n    color: ",";\n    font-size: 0.85rem;\n    font-weight: normal;\n  }\n"])),(n=>n.theme.colors.seriesListItemInfo),(n=>n.theme.colors.sereisListItemCount),(n=>n.theme.colors.seriesListItemCountText));var g,h=function(n){let{fieldValue:e,totalCount:t,frontmatter:l,...a}=n;const{date:r,heroImage:i,heroImageAlt:o}=l,m=i?(0,d.c)(i):null;return c.createElement(u,Object.assign({onClick:()=>(0,s.navigate)("/series/"+e)},a),c.createElement(p,null,!!m&&c.createElement(f,{image:m,alt:null!=o?o:""})),c.createElement(x,null,c.createElement("h3",null,e," ",c.createElement("small",null,""+t)),c.createElement("small",null,"~ "+r)))};const Z=m.ZP.div(g||(g=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  & > * {\n    width: calc(25% - 12px);\n\n    @media (max-width: 768px) {\n      width: calc(33% - 10px);\n    }\n\n    @media (max-width: 500px) {\n      width: calc(50% - 8px);\n    }\n  }\n"])));var b=function(n){let{data:e,...t}=n;return c.createElement(Z,t,e.map((n=>c.createElement(h,Object.assign({key:n.fieldValue},n)))))}},7514:function(n,e){e.Z=function(n){return n.map((n=>{let{edges:e,...t}=n;return{...t,...e.sort(((n,e)=>e.node.frontmatter.originalDate.localeCompare(n.node.frontmatter.originalDate)))[0].node}})).sort(((n,e)=>e.frontmatter.originalDate.localeCompare(n.frontmatter.originalDate)))}},4556:function(n,e,t){t.r(e),t.d(e,{Head:function(){return m}});var l=t(7294),a=t(6758),r=t(3904),i=t(5734),o=t(4392),c=t(7514);const m=()=>l.createElement(r.Z,{title:"시리즈 목록"});e.default=function(n){let{data:e}=n;const t=(0,c.Z)(e.allMdx.group);return l.createElement(a.Z,null,l.createElement(i.Z,{title:"시리즈"}),l.createElement(o.Z,{data:t}))}}}]);
//# sourceMappingURL=component---src-pages-series-index-tsx-a3a4dc9cdebfa3a8b3da.js.map