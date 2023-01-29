"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8411],{986:function(e,n,t){t.r(n),t.d(n,{Head:function(){return y},default:function(){return S}});var r=t(1151),a=t(7294);function o(e){const n=Object.assign({div:"div",h3:"h3",a:"a",p:"p",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.div,{className:"md"},a.createElement(n.h3,{id:"react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples",style:{position:"relative"}},a.createElement(n.a,{href:"#react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples","aria-label":"react useref hook for dummies how to use useref correctly with examples permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://blog.notesnook.com/react-useref-hook-with-examples/"},"React useRef Hook for Dummies: How to Use useRef Correctly with Examples")),a.createElement(n.p,null,"React 컴포넌트에서 어떤 값을 관리함에 있어 ",a.createElement(n.code,null,"useState")," 보다는 ",a.createElement(n.code,null,"useRef")," 가 효율적일 때가 있다. 그것을 설명하는 글이다."),a.createElement(n.h3,{id:"번역-심층-분석-react-hook은-실제로-어떻게-동작할까",style:{position:"relative"}},a.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-%EC%8B%AC%EC%B8%B5-%EB%B6%84%EC%84%9D-react-hook%EC%9D%80-%EC%8B%A4%EC%A0%9C%EB%A1%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C","aria-label":"번역 심층 분석 react hook은 실제로 어떻게 동작할까 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/"},"[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?")),a.createElement(n.p,null,"React Hook 의 구현 및 작동 원리를 설명한 글을 번역한 글. 번역이 훌륭하지만, 영어를 읽는데 문제가 없다면 ",a.createElement(n.a,{href:"(https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)"},"원문"),"을 읽는 것도 나쁘지 않다."),a.createElement(n.h3,{id:"a-visual-guide-to-react-rendering---cheat-sheet",style:{position:"relative"}},a.createElement(n.a,{href:"#a-visual-guide-to-react-rendering---cheat-sheet","aria-label":"a visual guide to react rendering   cheat sheet permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://alexsidorenko.com/blog/react-render-cheat-sheet/"},"A Visual Guide to React Rendering - Cheat Sheet")),a.createElement(n.p,null,"React 의 컴포넌트가 리렌더링되는 이유, 그것을 막을 수 있는 방법을 단계적으로 설명한 글이다. 실제로는 이 글에 그 내용이 다 있는 것이 아니고 작성자가 작성해두었던 여러 글들을 엮은 글이다."),a.createElement(n.p,null,'작성자가 쓴 글 이외에도 좋은 몇몇 글들이 추가로 링크되어있다. 제목에 나온 그대로, 훌륭한 "Cheat Sheet" 이라고 할 수 있다.'),a.createElement(n.h3,{id:"rust-is-the-future-of-javascript-infrastructure",style:{position:"relative"}},a.createElement(n.a,{href:"#rust-is-the-future-of-javascript-infrastructure","aria-label":"rust is the future of javascript infrastructure permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://leerob.io/blog/rust"},"Rust Is The Future of JavaScript Infrastructure")),a.createElement(n.p,null,"Rust 라는 언어가 가까운 미래에 자바스크립트의 각종 툴링(번들링,압축,포멧팅 등)을 대체할 것이라는 내용의 글. Rust 의 장점과 현황, 미래에 대한 글쓴이의 생각이 잘 정리되어 있다."),a.createElement(n.h3,{id:"the-invisible-javascript-backdoor",style:{position:"relative"}},a.createElement(n.a,{href:"#the-invisible-javascript-backdoor","aria-label":"the invisible javascript backdoor permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://certitude.consulting/blog/en/invisible-backdoor/"},"The Invisible JavaScript Backdoor")),a.createElement(n.p,null,"너비가 0인 공백 특수문자, 생긴 건 느낌표와 동일하지만 다른의미의 특수문자 등을 활용해 백도어를 구현하는 재밌는 글.")),"\n",a.createElement(n.div,{className:"toc"},a.createElement(n.h3,{id:"목차",style:{position:"relative"}},a.createElement(n.a,{href:"#%EB%AA%A9%EC%B0%A8","aria-label":"목차 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"목차"),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples"},"React useRef Hook for Dummies: How to Use useRef Correctly with Examples")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-%EC%8B%AC%EC%B8%B5-%EB%B6%84%EC%84%9D-react-hook%EC%9D%80-%EC%8B%A4%EC%A0%9C%EB%A1%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C"},"[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#a-visual-guide-to-react-rendering---cheat-sheet"},"A Visual Guide to React Rendering - Cheat Sheet")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#rust-is-the-future-of-javascript-infrastructure"},"Rust Is The Future of JavaScript Infrastructure")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#the-invisible-javascript-backdoor"},"The Invisible JavaScript Backdoor")),"\n")))}var l,i,c,s,u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(o,e)):o(e)},m=t(1880),d=t(3723),h=t(1858),p=t(3904),f=t(891),g=t(5534),E=t(5777),v=t(7178),b=t(2889);function x(e){let{data:n,children:t}=e;const{frontmatter:r,sameSeriesPosts:o}=n.mdx,{title:l,slug:i,date:c,tags:s,series:u,heroImage:m,heroImageAlt:p}=r,f=m?(0,d.c)(m):null;return a.createElement(h.Z,null,a.createElement(k,null,a.createElement("h1",null,l),a.createElement(w,null,c),a.createElement(b.Z,{tags:s})),a.createElement(v.Z,{name:u,data:o,current:i}),!!f&&a.createElement(C,{image:f,alt:null!=p?p:""}),a.createElement(B,null,t),a.createElement(E.Z,null))}const k=f.ZP.div(l||(l=(0,m.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),C=(0,f.ZP)(d.G)(i||(i=(0,m.Z)(["\n  margin-bottom: 16px;\n"]))),w=f.ZP.div(c||(c=(0,m.Z)(["\n  margin: 16px 0;\n"]))),B=(0,f.ZP)(g.Z)(s||(s=(0,m.Z)(["\n  margin-bottom: 60px;\n"]))),y=e=>{var n,t;let{data:r}=e;const{frontmatter:{title:o,slug:l,tags:i,heroImage:c,previewContent:s},excerpt:u}=r.mdx,m=c?(0,d.c)(c):null;return a.createElement(p.Z,{title:o,description:null!=s?s:u,path:"posts/"+l,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function S(e){return a.createElement(x,e,a.createElement(u,e))}},5777:function(e,n,t){var r=t(7294);n.Z=function(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,r]=e;t.setAttribute(n,r)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),r.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var r,a=t(1880);const o=t(891).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n  > .toc {\n    order: 0;\n    margin: 0 16px 16px;\n    padding: 16px 0 0 16px;\n    background-color: #1a1a1a;\n    > h3 {\n      margin: 0;\n      font-size: 1.125rem;\n    }\n    > ul {\n      position: relative;\n      margin: 0;\n      padding: 8px 0 16px 20px;\n\n      font-size: 1rem;\n      list-style: none;\n\n      a {\n        color: #dddddd;\n      }\n\n      ul {\n        list-style: none;\n        padding-left: 30px;\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=o},7178:function(e,n,t){var r,a,o,l,i,c=t(1880),s=t(7294),u=t(1883),m=t(891);const d=m.ZP.div(r||(r=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),h=m.ZP.div(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),p=m.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),f=m.ZP.li(l||(l=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,m.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:r}=e;const[a,o]=s.useState(!0);return t?s.createElement(d,null,s.createElement(h,{collapsed:a,onClick:()=>o((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(u.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!a&&s.createElement(p,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(f,{active:n===r,key:n},s.createElement(u.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return d}});var r,a=t(1880),o=t(7294),l=t(891),i=t(1883);const c=(0,l.ZP)(i.Link)(r||(r=(0,a.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,u=function(e){let{value:n}=e;return o.createElement(c,{to:"/tags/"+n},n)};const m=l.ZP.ul(s||(s=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var d=function(e){let{tags:n,showCount:t,...r}=e;const a="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(m,r,a.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(u,{value:e.fieldValue}),t&&!!e.totalCount&&o.createElement("sup",null,""+e.totalCount)))))}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var r=t(7294);const a=r.createContext({});function o(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211116-read-writings-index-mdx-1959a83735a3e97a5c38.js.map