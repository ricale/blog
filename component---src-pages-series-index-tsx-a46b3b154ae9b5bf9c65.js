"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2794],{5734:function(e,t,n){var l,a,i,o,r=n(1880),c=n(7294),m=n(891);const d=m.ZP.div(l||(l=(0,r.Z)(["\n  margin: 40px 0;\n  padding: 0 40px;\n"]))),s=m.ZP.p(a||(a=(0,r.Z)([""]))),p=m.ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n"]))),u=m.ZP.p(o||(o=(0,r.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));t.Z=function(e){let{title:t,subtitle:n,note:l}=e;return c.createElement(d,null,!!n&&c.createElement(s,null,n),c.createElement(p,null,c.createElement("h1",null,t),!!l&&c.createElement(u,null,"("+l+")")))}},8027:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return k}});var l=n(7294),a=n(1858),i=n(3904),o=n(5734),r=n(1880),c=n(891),m=n(3723),d=n(2788),s=n(1883);const p=d.default.div.withConfig({displayName:"SeriesListItem__Container",componentId:"sc-15208ti-0"})(['position:relative;cursor:pointer;&::after{content:"";display:block;padding-bottom:100%;}']),u=d.default.div.withConfig({displayName:"SeriesListItem__ThumbnailWrapper",componentId:"sc-15208ti-1"})(["position:absolute;width:100%;height:100%;background-color:#222222;"]),f=(0,d.default)(m.G).withConfig({displayName:"SeriesListItem__ThumbnailImage",componentId:"sc-15208ti-2"})(["width:100%;height:100%;object-fit:cover;"]),g=d.default.div.withConfig({displayName:"SeriesListItem__Info",componentId:"sc-15208ti-3"})(["position:absolute;top:8px;left:8px;right:8px;bottom:8px;display:flex;flex-direction:column;padding:8px;background-color:rgba(0,0,0,0.6);& > h3{flex:1;margin:0 0 4px;word-break:keep-all;}& > small{text-align:right;}& > h3 > small{padding:2px 4px;background-color:rgba(183,179,204,0.6);color:#ffff00;font-size:0.85rem;font-weight:normal;}"]);var h,x,b=function(e){let{fieldValue:t,totalCount:n,node:a,...i}=e;const{date:o,heroImage:r,heroImageAlt:c}=a.frontmatter,d=r?(0,m.c)(r):null;return l.createElement(p,Object.assign({onClick:()=>(0,s.c4)("/series/"+t)},i),l.createElement(u,null,!!d&&l.createElement(f,{image:d,alt:null!=c?c:""})),l.createElement(g,null,l.createElement("h3",null,t," ",l.createElement("small",null,""+n)),l.createElement("small",null,"~ "+o)))};const E=c.ZP.div(h||(h=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 16px;\n"]))),Z=(0,c.ZP)(b)(x||(x=(0,r.Z)(["\n  width: calc(25% - 12px);\n"])));var w=function(e){let{data:t}=e;const n=t.map((e=>{let{edges:t,...n}=e;return{...n,node:t.sort(((e,t)=>t.node.frontmatter.originalDate.localeCompare(e.node.frontmatter.originalDate)))[0].node}})).sort(((e,t)=>t.node.frontmatter.originalDate.localeCompare(e.node.frontmatter.originalDate)));return l.createElement(E,null,n.map((e=>l.createElement(Z,Object.assign({key:e.fieldValue},e)))))};const v=()=>l.createElement(i.Z,{title:"시리즈 목록"});var k=function(e){let{data:t}=e;return l.createElement(a.Z,null,l.createElement(o.Z,{title:"시리즈"}),l.createElement(w,{data:t.allMdx.group}))}}}]);
//# sourceMappingURL=component---src-pages-series-index-tsx-a46b3b154ae9b5bf9c65.js.map