"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2607],{5041:function(n,e,o){o.r(e),o.d(e,{Head:function(){return w},default:function(){return y}});var t,r,i,l=o(3882),a=o(1880),c=o(7294),d=o(1883),s=o(3723),p=o(6758),m=o(3904),u=o(891),g=o(3234),h=o(5777),b=o(7178),f=o(5924);function x(n){let{data:e,children:o}=n;const t=c.useRef(),{frontmatter:r,sameSeriesPosts:i}=e.mdx,{title:l,slug:a,date:s,series:m,heroImage:u,heroImageAlt:g}=r;return c.useEffect((()=>{var n;const e=null===(n=t.current)||void 0===n?void 0:n.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),o=new IntersectionObserver((()=>(0,f.Z)(t,e)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==e||e.forEach((n=>o.observe(n))),()=>o.disconnect()}),[]),c.createElement(p.Z,null,c.createElement(v,null,c.createElement("h1",null,c.createElement(d.Link,{to:"/posts/"+a},l)),c.createElement(k,null,s)),c.createElement(b.Z,{name:m,data:i,current:a}),c.createElement(Z,{ref:t},o),c.createElement(h.Z,null))}const v=u.ZP.div(t||(t=(0,a.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.onBackground)),k=u.ZP.div(r||(r=(0,a.Z)(["\n  margin-left: 2px;\n"]))),Z=(0,u.ZP)(g.Z)(i||(i=(0,a.Z)(["\n  margin-bottom: 60px;\n"]))),w=n=>{var e,o;let{data:t}=n;const{frontmatter:{title:r,slug:i,tags:l,heroImage:a,previewContent:d},excerpt:p}=t.mdx,u=a?(0,s.c)(a):null;return c.createElement(m.Z,{title:r,description:null!=d?d:p,path:"posts/"+i,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(o=e.fallback)||void 0===o?void 0:o.src,keywords:l,ogType:"article"})};function y(n){return c.createElement(x,n,c.createElement(l.Z,n))}},5777:function(n,e,o){var t=o(7294);e.Z=function(){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e;const o=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((n=>{let[e,t]=n;o.setAttribute(e,t)})),null===(e=n.current)||void 0===e||e.appendChild(o)}),[]),t.createElement("div",{id:"comments",ref:n})}},3234:function(n,e,o){o.d(e,{Z:function(){return w}});var t,r=o(1880),i=o(891);var l,a=(0,i.iv)(t||(t=(0,r.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder));var c,d=(0,i.iv)(l||(l=(0,r.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(n=>n.theme.colors.codeblockHighlightBorder),(n=>n.theme.colors.codeblockHighlight),(n=>n.theme.colors.codeblockTitle),(n=>n.theme.colors.codeblockCopyButtonLabel),(n=>n.theme.colors.codeblockTitleInMobile));var s,p=(0,i.iv)(c||(c=(0,r.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(n=>n.theme.colors.headingBorder),(n=>n.theme.colors.headingBorder));var m,u=(0,i.iv)(s||(s=(0,r.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(n=>n.theme.colors.imageBorder),(n=>n.theme.colors.imageCaptionText));var g,h=(0,i.iv)(m||(m=(0,r.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var b,f,x=(0,i.iv)(g||(g=(0,r.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(n=>n.theme.colors.tableBorder)),v=o(5785);var k,Z=(0,i.iv)(b||(b=(0,r.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground),(0,v.Z)(new Array(20)).map(((n,e)=>(0,i.iv)(f||(f=(0,r.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(e+1),(1100+20*e-800)/2))),1100);var w=i.ZP.div(k||(k=(0,r.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),p,h,u,Z,d,a,x,(n=>n.theme.colors.hr),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode))},7178:function(n,e,o){var t,r,i,l,a,c=o(1880),d=o(7294),s=o(1883),p=o(891);const m=p.ZP.div(t||(t=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(n=>n.theme.colors.sameSereisPosts)),u=p.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n  }\n"])),(n=>n.theme.colors.onBackground),(n=>n.collapsed?0:180)),g=p.ZP.ol(i||(i=(0,c.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(n=>n.theme.colors.background)),h=p.ZP.li(l||(l=(0,c.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.active&&(0,p.iv)(a||(a=(0,c.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground))));e.Z=function(n){let{name:e,data:o,current:t}=n;const[r,i]=d.useState(!0);return o?d.createElement(m,null,d.createElement(u,{collapsed:r,onClick:()=>i((n=>!n))},d.createElement("h2",null,d.createElement(s.Link,{to:"/series/"+e+"/"},'시리즈 "'+e+'"')),d.createElement("span",null,"▲")),!r&&d.createElement(g,null,o.map((n=>{let{frontmatter:{slug:e,title:o}}=n;return d.createElement(h,{active:e===t,key:e},d.createElement(s.Link,{to:"/posts/"+e},o))})))):null}},5924:function(n,e){const o="highlight";e.Z=function(n,e){var t,r,i;if(!e)return;const l=document.documentElement.scrollTop+10-(null!==(t=null===(r=n.current)||void 0===r?void 0:r.offsetTop)&&void 0!==t?t:0);let a;for(let o=0;o<e.length;o++)if(e[o].offsetTop>l){var c;a=null!==(c=e[o-1])&&void 0!==c?c:null;break}if(void 0===a&&(a=e[e.length-1]),null===(i=n.current)||void 0===i||i.querySelectorAll(".highlight").forEach((n=>n.classList.remove(o))),a){var d;const e=a.getAttribute("id"),t=".toc a[href='#"+encodeURI(null!=e?e:"")+"']",r=null===(d=n.current)||void 0===d?void 0:d.querySelector(t);null==r||r.classList.add(o)}}},1151:function(n,e,o){o.d(e,{ah:function(){return i}});var t=o(7294);const r=t.createContext({});function i(n){const e=t.useContext(r);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230411-chart-in-react-native-with-d-3-1-index-mdx-8e16f21b78cbc966fb5f.js.map