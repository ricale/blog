"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2253],{5734:function(e,t,n){var l,a,c,i,r=n(1880),o=n(7294),u=n(891);const s=u.ZP.div(l||(l=(0,r.Z)(["\n  margin: 40px 0 45px;\n  padding-left: 40px;\n\n  @media (max-width: 500px) {\n    padding-left: 20px;\n  }\n"]))),m=u.ZP.p(a||(a=(0,r.Z)([""]))),f=u.ZP.div(c||(c=(0,r.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n\n  & > h1 {\n    word-break: keep-all;\n  }\n\n  @media (max-width: 500px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),d=u.ZP.p(i||(i=(0,r.Z)(["\n  margin-bottom: 8px;\n  font-size: 0.9375rem;\n"])));t.Z=function(e){let{title:t,subtitle:n,note:l}=e;return o.createElement(s,null,!!n&&o.createElement(m,null,n),o.createElement(f,null,o.createElement("h1",null,t),!!l&&o.createElement(d,null,"("+l+")")))}},6584:function(e,t,n){n.d(t,{Z:function(){return Z}});var l,a,c,i,r=n(1880),o=n(7294),u=n(891),s=n(1883),m=n(621);const f=u.ZP.div(l||(l=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 2px;\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(e=>e.theme.colors.postListItemHover)),d=u.ZP.div(a||(a=(0,r.Z)(["\n  position: relative;\n\n  width: 60px;\n  height: 60px;\n\n  background-color: ",";\n"])),(e=>e.theme.colors.postListItemThumbnail)),b=u.ZP.div(c||(c=(0,r.Z)(["\n  flex: 1;\n\n  & > h2 {\n    margin: 0;\n    font-size: 1.125rem;\n  }\n"]))),p=u.ZP.div(i||(i=(0,r.Z)(["\n  font-size: 0.8125rem;\n  color: ",";\n"])),(e=>e.theme.colors.postListItemSubtitleText));var g,h=function(e){let{title:t,slug:n,date:l,heroImage:a,heroImageAlt:c}=e;const i="Invalid date"!==l;return o.createElement(f,{onClick:()=>(0,s.navigate)("/posts/"+n)},o.createElement(d,null,o.createElement(m.Z,{source:a,alt:c})),o.createElement(b,null,o.createElement("h2",null,t),o.createElement(p,null,i?l:n)))};const x=u.ZP.div(g||(g=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"])));var Z=function(e){let{data:t}=e;return o.createElement(x,null,t.map(((e,t)=>{let{...n}=e;return o.createElement(h,Object.assign({key:t},n))})))}},621:function(e,t,n){var l,a=n(1880),c=n(7294),i=n(3723);const r=(0,n(891).ZP)(i.G)(l||(l=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));t.Z=function(e){let{source:t,alt:l}=e;const a=t?(0,i.c)(t):null;return a?c.createElement(r,{image:a,alt:null!=l?l:""}):c.createElement(i.S,{src:"../images/defaultThumbnail.jpeg",alt:"default thumbnail",style:{width:"100%",height:"100%"},imgStyle:{objectFit:"cover",objectPosition:"top left"},__imageData:n(5624)})}},6415:function(e,t){t.Z=function(e){return e.map((e=>({...e.frontmatter})))}},4868:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u}});var l=n(7294),a=n(6758),c=n(3904),i=n(5734),r=n(6584),o=n(6415);const u=()=>l.createElement(c.Z,null);t.default=function(e){let{data:t}=e;const n=(0,o.Z)(t.allMdx.nodes);return l.createElement(a.Z,null,l.createElement(i.Z,{title:"임시글",note:n.length}),l.createElement(r.Z,{data:n}))}},5624:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-drafts-index-tsx-b4d819675145206242d1.js.map