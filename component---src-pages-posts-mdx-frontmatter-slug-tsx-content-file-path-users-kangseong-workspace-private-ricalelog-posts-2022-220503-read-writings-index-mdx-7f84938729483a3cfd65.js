"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[3694],{8220:function(e,n,t){t.r(n),t.d(n,{Head:function(){return B},default:function(){return H}});var r=t(1151),o=t(7294);function a(e){const n=Object.assign({h2:"h2",a:"a",div:"div",h3:"h3",p:"p",blockquote:"blockquote",code:"code"},(0,r.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(n.h2,{id:"javsscript",style:{position:"relative"}},o.createElement(n.a,{href:"#javsscript","aria-label":"javsscript permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavsScript"),"\n",o.createElement(n.h3,{id:"javascript-function-composition-whats-the-big-deal",style:{position:"relative"}},o.createElement(n.a,{href:"#javascript-function-composition-whats-the-big-deal","aria-label":"javascript function composition whats the big deal permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/"},"JavaScript function composition: What’s the big deal?")),"\n",o.createElement(n.p,null,"함수 합성(Function composition)에 관한 글. 함수 합성이 무엇이며, 어떻게 구현하며, 함수 합성을 사용하지 않는 다른 구현과는 어떻게 다른가를 설명한다."),"\n",o.createElement(n.p,null,"글쓴이는 구현 자체보다는 생각/발상의 전환이 가장 큰 장점이라고 말한다. 그 말이 인상깊었다."),"\n",o.createElement(n.blockquote,null,"\n",o.createElement(n.p,null,"But the real beauty of composition isn’t in the code, but in how it changes us. How it gives us new ways of thinking about code."),"\n"),"\n",o.createElement(n.h3,{id:"자바스크립트는-왜-프로토타입을-선택했을까",style:{position:"relative"}},o.createElement(n.a,{href:"#%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C","aria-label":"자바스크립트는 왜 프로토타입을 선택했을까 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42"},"자바스크립트는 왜 프로토타입을 선택했을까")),"\n",o.createElement(n.p,null,"자바스크립트의 ",o.createElement(n.code,null,"prototype")," 의 존재 이유를, 서양의 철학적인 배경을 기반으로 설명하는 글. ES6 부터 프론트엔드 개발자로 입문했다면, 그래서 ",o.createElement(n.code,null,"prototype")," 을 써 본 적이 없는 사람이라면 이해하는데 도움이 될지도 모르겠다."),"\n",o.createElement(n.h2,{id:"typescript",style:{position:"relative"}},o.createElement(n.a,{href:"#typescript","aria-label":"typescript permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"TypeScript"),"\n",o.createElement(n.h3,{id:"how-microsoft-wants-to-change-typescript",style:{position:"relative"}},o.createElement(n.a,{href:"#how-microsoft-wants-to-change-typescript","aria-label":"how microsoft wants to change typescript permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://betterprogramming.pub/how-microsoft-wants-to-destroy-typescript-1f1a53b18de6"},"How Microsoft Wants To Change TypeScript")),"\n",o.createElement(n.p,null,"MS의 타입스크립트 개발진이, 자바스크립트에 타입을 적용하는 제안서를 TC39에 제출했다고 한다. 그 이슈에 대한 의견을 담은 글이다."),"\n",o.createElement(n.p,null,"일단 MS 개발진이 제안한 타이핑은 기존 코드에 영향이 가지 않도록 주석 형태로 타이핑을 하는 것이라고 한다."),"\n",o.createElement(n.p,null,"글쓴이는 주석 타이핑으로는 TypeScript 의 모든 기능을 대체할 수는 없으며, 때문에 타이핑은 JavsScript 와 독립적으로 관리되어야 한다고 주장한다."),"\n",o.createElement(n.p,null,"간략한 타입스크립트 역사와 함께 이슈가 정리되어있어 읽어볼 만 한 글이다."),"\n",o.createElement(n.h2,{id:"etc",style:{position:"relative"}},o.createElement(n.a,{href:"#etc","aria-label":"etc permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Etc"),"\n",o.createElement(n.h3,{id:"번역-웹-스토리지--무엇을-써야할까요",style:{position:"relative"}},o.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80--%EB%AC%B4%EC%97%87%EC%9D%84-%EC%8D%A8%EC%95%BC%ED%95%A0%EA%B9%8C%EC%9A%94","aria-label":"번역 웹 스토리지  무엇을 써야할까요 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://han41858.tistory.com/54"},"[번역] 웹 스토리지 : 무엇을 써야할까요?")),"\n",o.createElement(n.p,null,"브라우저에서 스토리지는 무엇을 쓰는 게 좋을까? 라는 주제의 글인데, 서문에서부터 cache storage 와 indexedDB 를 쓰라고 운을 띄우면서 시작한다."),"\n",o.createElement(n.blockquote,null,"\n",o.createElement(n.p,null,"최근 브라우저들은 IndexedDB와 캐시 스토리지 API를 모두 지원합니다. 이 스토리지들은 모두 비동기(asynchronous)로 동작하기 때문에 메인 스레드 연산에 영향을 주지 않습니다."),"\n"),"\n",o.createElement(n.p,null,"local storage, session storage 가 동기적이어서 메인 스레드를 붙잡는데 반해 indexedDB 는 비동기적으로 동작한다고 한다. 이것 하나만으로도 쓸만한 가치가 있는 것 같다."),"\n",o.createElement(n.p,null,"이외에도 저장 용량 확인, 에러 핸들링, 디버깅 등 유용한 정보가 많으니 읽어보기를 권한다."),"\n",o.createElement(n.h3,{id:"securely-embed-content-on-your-site",style:{position:"relative"}},o.createElement(n.a,{href:"#securely-embed-content-on-your-site","aria-label":"securely embed content on your site permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://developer.chrome.com/blog/embed-content/"},"Securely embed content on your site")),"\n",o.createElement(n.p,null,"보안상 안전하게 컨텐츠를 embedding 하는 방법에 대해 소개한다. ",o.createElement(n.code,null,"<iframe />")," 의 ",o.createElement(n.code,null,"sandbox"),", ",o.createElement(n.code,null,"allow")," 속성, ",o.createElement(n.code,null,"<fencedframe />"),", ",o.createElement(n.code,null,"<portal />")," 엘리먼트에 대해 나와있다."),"\n",o.createElement(n.p,null,"임베드 컨텐츠를 많이 써보지 않아서 그다지 와닿는 글은 아니지만, 관련 키워드를 알아둬서 나쁠 것은 없다. 나중에 사용하게 될 때 되새김질하면 될 듯 하다."),"\n",o.createElement(n.h3,{id:"explain-the-first-10-lines-of-twitters-source-code-to-me",style:{position:"relative"}},o.createElement(n.a,{href:"#explain-the-first-10-lines-of-twitters-source-code-to-me","aria-label":"explain the first 10 lines of twitters source code to me permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(n.a,{href:"https://css-tricks.com/explain-the-first-10-lines-of-twitter-source-code/"},"Explain the First 10 Lines of Twitter’s Source Code to Me")),"\n",o.createElement(n.p,null,"Twitter 소스 코드의 첫 열 라인에 대한 설명이 담긴 글."),"\n",o.createElement(n.p,null,'본문도 재미있지만 댓글도 재미있다. 글의 서두에서 글쓴이가 "이 열 줄을 얼마나 알고 있는가"로 기술 면접을 한다고 말했는데, 몇몇 사람들이 대부분 이 내용이 기술면접에 쓰이기에는 적절하지 않다고 말하고 있다. 누구의 의견이 옳던 간에 (공격적인 내용은 적당히 흘리고) 다른 사람들의 의견들을 같이 읽어보는 것도 좋을 것 같다.'),"\n",o.createElement(n.p,null,"한 번 읽어보기에는 나쁘지 않은 글이다."))}var l,c,i,s,m,h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?o.createElement(n,e,o.createElement(a,e)):a(e)},d=t(1880),p=t(3723),u=t(1858),g=t(3904),E=t(891),f=t(5534),v=t(5777),b=t(7178),x=t(6706);function C(e){let{data:n,children:t}=e;const{frontmatter:r,sameSeriesPosts:a}=n.mdx,{title:l,slug:c,date:i,tags:s,series:m,heroImage:h,heroImageAlt:d}=r,g=h?(0,p.c)(h):null;return o.createElement(u.Z,null,o.createElement(w,null,o.createElement("h1",null,l),o.createElement(S,null,i),o.createElement(x.Z,{tags:s})),o.createElement(b.Z,{name:m,data:a,current:c}),!!g&&o.createElement(y,{image:g,alt:null!=d?d:""}),o.createElement(k,null,t),o.createElement(v.Z,null))}const w=E.ZP.div(l||(l=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=(0,E.ZP)(p.G)(c||(c=(0,d.Z)(["\n  margin-bottom: 16px;\n"]))),S=E.ZP.div(i||(i=(0,d.Z)(["\n  margin: 16px 0;\n"]))),k=(E.ZP.ul(s||(s=(0,d.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),(0,E.ZP)(f.Z)(m||(m=(0,d.Z)(["\n  margin-bottom: 60px;\n"])))),B=e=>{var n,t;let{data:r}=e;const{frontmatter:{title:a,slug:l,tags:c,heroImage:i,previewContent:s},excerpt:m}=r.mdx,h=i?(0,p.c)(i):null;return o.createElement(g.Z,{title:a,description:null!=s?s:m,path:"posts/"+l,thumbnail:null==h||null===(n=h.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function H(e){return o.createElement(C,e,o.createElement(h,e))}},5777:function(e,n,t){var r=t(7294);n.Z=function(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,r]=e;t.setAttribute(n,r)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),r.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var r,o=t(1880);const a=t(891).ZP.div(r||(r=(0,o.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=a},7178:function(e,n,t){var r,o,a,l,c,i=t(1880),s=t(7294),m=t(1883),h=t(891);const d=h.ZP.div(r||(r=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),p=h.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),u=h.ZP.ol(a||(a=(0,i.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=h.ZP.li(l||(l=(0,i.Z)(["\n  ","\n"])),(e=>e.active&&(0,h.iv)(c||(c=(0,i.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:r}=e;const[o,a]=s.useState(!0);return t?s.createElement(d,null,s.createElement(p,{collapsed:o,onClick:()=>a((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(m.rU,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!o&&s.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(g,{active:n===r,key:n},s.createElement(m.rU,{to:"/posts/"+n},t))})))):null}},1597:function(e,n,t){var r,o=t(1880),a=t(7294),l=t(1883);const c=(0,t(891).ZP)(l.rU)(r||(r=(0,o.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));n.Z=function(e){let{value:n}=e;return a.createElement(c,{to:"/tags/"+n},n)}},6706:function(e,n,t){var r,o=t(1880),a=t(7294),l=t(891),c=t(1597);const i=l.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));n.Z=function(e){let{tags:n,...t}=e;const r="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return a.createElement(i,t,r.map((e=>a.createElement("li",{key:e.fieldValue},a.createElement(c.Z,{value:e.fieldValue})))))}},1151:function(e,n,t){t.d(n,{ah:function(){return a}});var r=t(7294);const o=r.createContext({});function a(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220503-read-writings-index-mdx-7f84938729483a3cfd65.js.map