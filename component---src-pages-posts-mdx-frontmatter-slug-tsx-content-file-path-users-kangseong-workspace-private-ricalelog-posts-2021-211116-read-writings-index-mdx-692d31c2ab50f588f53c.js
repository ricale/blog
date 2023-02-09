"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8411],{986:function(e,n,t){t.r(n),t.d(n,{Head:function(){return B},default:function(){return S}});var a=t(1151),o=t(7294);function r(e){const n=Object.assign({div:"div",h3:"h3",a:"a",p:"p",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(n.div,{className:"md"},o.createElement(n.h3,{id:"react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples",style:{position:"relative"}},o.createElement(n.a,{href:"#react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples","aria-label":"react useref hook for dummies how to use useref correctly with examples permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://blog.notesnook.com/react-useref-hook-with-examples/"},"React useRef Hook for Dummies: How to Use useRef Correctly with Examples")),o.createElement(n.p,null,"React 컴포넌트에서 어떤 값을 관리함에 있어 ",o.createElement(n.code,null,"useState")," 보다는 ",o.createElement(n.code,null,"useRef")," 가 효율적일 때가 있다. 그것을 설명하는 글이다."),o.createElement(n.h3,{id:"번역-심층-분석-react-hook은-실제로-어떻게-동작할까",style:{position:"relative"}},o.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-%EC%8B%AC%EC%B8%B5-%EB%B6%84%EC%84%9D-react-hook%EC%9D%80-%EC%8B%A4%EC%A0%9C%EB%A1%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C","aria-label":"번역 심층 분석 react hook은 실제로 어떻게 동작할까 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/"},"[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?")),o.createElement(n.p,null,"React Hook 의 구현 및 작동 원리를 설명한 글을 번역한 글. 번역이 훌륭하지만, 영어를 읽는데 문제가 없다면 ",o.createElement(n.a,{href:"(https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)"},"원문"),"을 읽는 것도 나쁘지 않다."),o.createElement(n.h3,{id:"a-visual-guide-to-react-rendering---cheat-sheet",style:{position:"relative"}},o.createElement(n.a,{href:"#a-visual-guide-to-react-rendering---cheat-sheet","aria-label":"a visual guide to react rendering   cheat sheet permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://alexsidorenko.com/blog/react-render-cheat-sheet/"},"A Visual Guide to React Rendering - Cheat Sheet")),o.createElement(n.p,null,"React 의 컴포넌트가 리렌더링되는 이유, 그것을 막을 수 있는 방법을 단계적으로 설명한 글이다. 실제로는 이 글에 그 내용이 다 있는 것이 아니고 작성자가 작성해두었던 여러 글들을 엮은 글이다."),o.createElement(n.p,null,'작성자가 쓴 글 이외에도 좋은 몇몇 글들이 추가로 링크되어있다. 제목에 나온 그대로, 훌륭한 "Cheat Sheet" 이라고 할 수 있다.'),o.createElement(n.h3,{id:"rust-is-the-future-of-javascript-infrastructure",style:{position:"relative"}},o.createElement(n.a,{href:"#rust-is-the-future-of-javascript-infrastructure","aria-label":"rust is the future of javascript infrastructure permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://leerob.io/blog/rust"},"Rust Is The Future of JavaScript Infrastructure")),o.createElement(n.p,null,"Rust 라는 언어가 가까운 미래에 자바스크립트의 각종 툴링(번들링,압축,포멧팅 등)을 대체할 것이라는 내용의 글. Rust 의 장점과 현황, 미래에 대한 글쓴이의 생각이 잘 정리되어 있다."),o.createElement(n.h3,{id:"the-invisible-javascript-backdoor",style:{position:"relative"}},o.createElement(n.a,{href:"#the-invisible-javascript-backdoor","aria-label":"the invisible javascript backdoor permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://certitude.consulting/blog/en/invisible-backdoor/"},"The Invisible JavaScript Backdoor")),o.createElement(n.p,null,"너비가 0인 공백 특수문자, 생긴 건 느낌표와 동일하지만 다른의미의 특수문자 등을 활용해 백도어를 구현하는 재밌는 글.")),"\n",o.createElement(n.div,{className:"toc"},o.createElement(n.p,null,"목차"),o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#react-useref-hook-for-dummies-how-to-use-useref-correctly-with-examples"},"React useRef Hook for Dummies: How to Use useRef Correctly with Examples")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-%EC%8B%AC%EC%B8%B5-%EB%B6%84%EC%84%9D-react-hook%EC%9D%80-%EC%8B%A4%EC%A0%9C%EB%A1%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C"},"[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#a-visual-guide-to-react-rendering---cheat-sheet"},"A Visual Guide to React Rendering - Cheat Sheet")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#rust-is-the-future-of-javascript-infrastructure"},"Rust Is The Future of JavaScript Infrastructure")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#the-invisible-javascript-backdoor"},"The Invisible JavaScript Backdoor")),"\n")))}var l,i,c,s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?o.createElement(n,e,o.createElement(r,e)):r(e)},d=t(1880),u=t(3723),m=t(6758),h=t(3904),p=t(891),f=t(5534),g=t(5777),b=t(7178),v=t(2889),E=t(5924),x=t(7466);function w(e){let{data:n,children:t}=e;const a=o.useRef(),{frontmatter:r,sameSeriesPosts:l}=n.mdx,{title:i,slug:c,date:s,tags:d,series:u,heroImage:h,heroImageAlt:p}=r;return o.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),o.createElement(m.Z,null,o.createElement(k,null,o.createElement("h1",null,i),o.createElement(C,null,s),o.createElement(v.Z,{tags:d})),o.createElement(b.Z,{name:u,data:l,current:c}),o.createElement(x.Z,{data:h,alt:p}),o.createElement(y,{ref:a},t),o.createElement(g.Z,null))}const k=p.ZP.div(l||(l=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),C=p.ZP.div(i||(i=(0,d.Z)(["\n  margin: 16px 0;\n"]))),y=(0,p.ZP)(f.Z)(c||(c=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),B=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:r,slug:l,tags:i,heroImage:c,previewContent:s},excerpt:d}=a.mdx,m=c?(0,u.c)(c):null;return o.createElement(h.Z,{title:r,description:null!=s?s:d,path:"posts/"+l,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function S(e){return o.createElement(w,e,o.createElement(s,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,o,r=t(5785),l=t(1880),i=t(891);const c=i.ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,r.Z)(new Array(30)).map(((e,n)=>(0,i.iv)(o||(o=(0,l.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=c},7466:function(e,n,t){var a,o=t(1880),r=t(7294),l=t(3723);const i=t(891).ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const o=n?(0,l.c)(n):null,c=n?null!=a?a:"PostImage":"by ricale";return r.createElement(i,null,o?r.createElement(l.G,{image:o,alt:c}):r.createElement(l.S,{src:"../images/defaultThumbnail.jpeg",alt:c,__imageData:t(6955)}),r.createElement("p",null,c))}},7178:function(e,n,t){var a,o,r,l,i,c=t(1880),s=t(7294),d=t(1883),u=t(891);const m=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),h=u.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),p=u.ZP.ol(r||(r=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),f=u.ZP.li(l||(l=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[o,r]=s.useState(!0);return t?s.createElement(m,null,s.createElement(h,{collapsed:o,onClick:()=>r((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(d.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!o&&s.createElement(p,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(f,{active:n===a,key:n},s.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return m}});var a,o=t(1880),r=t(7294),l=t(891),i=t(1883);const c=(0,l.ZP)(i.Link)(a||(a=(0,o.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,d=function(e){let{value:n}=e;return r.createElement(c,{to:"/tags/"+n},n)};const u=l.ZP.ul(s||(s=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var m=function(e){let{tags:n,showCount:t,...a}=e;const o="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return r.createElement(u,a,o.map((e=>r.createElement("li",{key:e.fieldValue},r.createElement(d,{value:e.fieldValue}),t&&!!e.totalCount&&r.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,o,r;if(!n)return;const l=document.documentElement.scrollTop+10-(null!==(a=null===(o=e.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let i;for(let t=0;t<n.length;t++)if(n[t].offsetTop>l){var c;i=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===i&&(i=n[n.length-1]),null===(r=e.current)||void 0===r||r.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),i){var s;const n=i.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",o=null===(s=e.current)||void 0===s?void 0:s.querySelector(a);null==o||o.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var a=t(7294);const o=a.createContext({});function r(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211116-read-writings-index-mdx-692d31c2ab50f588f53c.js.map