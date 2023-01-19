"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[3694],{8220:function(e,n,t){t.r(n),t.d(n,{Head:function(){return B},default:function(){return D}});var o=t(1151),l=t(7294);function r(e){const n=Object.assign({h2:"h2",h3:"h3",a:"a",p:"p",blockquote:"blockquote",code:"code"},(0,o.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,null,"JavsScript"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/"},"JavaScript function composition: What’s the big deal?")),"\n",l.createElement(n.p,null,"함수 합성(Function composition)에 관한 글. 함수 합성이 무엇이며, 어떻게 구현하며, 함수 합성을 사용하지 않는 다른 구현과는 어떻게 다른가를 설명한다."),"\n",l.createElement(n.p,null,"글쓴이는 구현 자체보다는 생각/발상의 전환이 가장 큰 장점이라고 말한다. 그 말이 인상깊었다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"But the real beauty of composition isn’t in the code, but in how it changes us. How it gives us new ways of thinking about code."),"\n"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://medium.com/@limsungmook/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%99%9C-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85%EC%9D%84-%EC%84%A0%ED%83%9D%ED%96%88%EC%9D%84%EA%B9%8C-997f985adb42"},"자바스크립트는 왜 프로토타입을 선택했을까")),"\n",l.createElement(n.p,null,"자바스크립트의 ",l.createElement(n.code,null,"prototype")," 의 존재 이유를, 서양의 철학적인 배경을 기반으로 설명하는 글. ES6 부터 프론트엔드 개발자로 입문했다면, 그래서 ",l.createElement(n.code,null,"prototype")," 을 써 본 적이 없는 사람이라면 이해하는데 도움이 될지도 모르겠다."),"\n",l.createElement(n.h2,null,"TypeScript"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://betterprogramming.pub/how-microsoft-wants-to-destroy-typescript-1f1a53b18de6"},"How Microsoft Wants To Change TypeScript")),"\n",l.createElement(n.p,null,"MS의 타입스크립트 개발진이, 자바스크립트에 타입을 적용하는 제안서를 TC39에 제출했다고 한다. 그 이슈에 대한 의견을 담은 글이다."),"\n",l.createElement(n.p,null,"일단 MS 개발진이 제안한 타이핑은 기존 코드에 영향이 가지 않도록 주석 형태로 타이핑을 하는 것이라고 한다."),"\n",l.createElement(n.p,null,"글쓴이는 주석 타이핑으로는 TypeScript 의 모든 기능을 대체할 수는 없으며, 때문에 타이핑은 JavsScript 와 독립적으로 관리되어야 한다고 주장한다."),"\n",l.createElement(n.p,null,"간략한 타입스크립트 역사와 함께 이슈가 정리되어있어 읽어볼 만 한 글이다."),"\n",l.createElement(n.h2,null,"Etc"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://han41858.tistory.com/54"},"[번역] 웹 스토리지 : 무엇을 써야할까요?")),"\n",l.createElement(n.p,null,"브라우저에서 스토리지는 무엇을 쓰는 게 좋을까? 라는 주제의 글인데, 서문에서부터 cache storage 와 indexedDB 를 쓰라고 운을 띄우면서 시작한다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"최근 브라우저들은 IndexedDB와 캐시 스토리지 API를 모두 지원합니다. 이 스토리지들은 모두 비동기(asynchronous)로 동작하기 때문에 메인 스레드 연산에 영향을 주지 않습니다."),"\n"),"\n",l.createElement(n.p,null,"local storage, session storage 가 동기적이어서 메인 스레드를 붙잡는데 반해 indexedDB 는 비동기적으로 동작한다고 한다. 이것 하나만으로도 쓸만한 가치가 있는 것 같다."),"\n",l.createElement(n.p,null,"이외에도 저장 용량 확인, 에러 핸들링, 디버깅 등 유용한 정보가 많으니 읽어보기를 권한다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://developer.chrome.com/blog/embed-content/"},"Securely embed content on your site")),"\n",l.createElement(n.p,null,"보안상 안전하게 컨텐츠를 embedding 하는 방법에 대해 소개한다. ",l.createElement(n.code,null,"<iframe />")," 의 ",l.createElement(n.code,null,"sandbox"),", ",l.createElement(n.code,null,"allow")," 속성, ",l.createElement(n.code,null,"<fencedframe />"),", ",l.createElement(n.code,null,"<portal />")," 엘리먼트에 대해 나와있다."),"\n",l.createElement(n.p,null,"임베드 컨텐츠를 많이 써보지 않아서 그다지 와닿는 글은 아니지만, 관련 키워드를 알아둬서 나쁠 것은 없다. 나중에 사용하게 될 때 되새김질하면 될 듯 하다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://css-tricks.com/explain-the-first-10-lines-of-twitter-source-code/"},"Explain the First 10 Lines of Twitter’s Source Code to Me")),"\n",l.createElement(n.p,null,"Twitter 소스 코드의 첫 열 라인에 대한 설명이 담긴 글."),"\n",l.createElement(n.p,null,'본문도 재미있지만 댓글도 재미있다. 글의 서두에서 글쓴이가 "이 열 줄을 얼마나 알고 있는가"로 기술 면접을 한다고 말했는데, 몇몇 사람들이 대부분 이 내용이 기술면접에 쓰이기에는 적절하지 않다고 말하고 있다. 누구의 의견이 옳던 간에 (공격적인 내용은 적당히 흘리고) 다른 사람들의 의견들을 같이 읽어보는 것도 좋을 것 같다.'),"\n",l.createElement(n.p,null,"한 번 읽어보기에는 나쁘지 않은 글이다."))}var a,c,i,m,s,u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},p=t(1880),d=t(3723),h=t(1858),g=t(3904),E=t(891),f=t(5534),b=t(5777),x=t(7178),Z=t(6706);const v=e=>{let{data:n,children:t}=e;const{frontmatter:o,sameSeriesPosts:r}=n.mdx,{title:a,slug:c,date:i,tags:m,series:s,heroImage:u,heroImageAlt:p}=o,g=u?(0,d.c)(u):null;return l.createElement(h.Z,null,l.createElement(k,null,l.createElement("h1",null,a),l.createElement(y,null,i),l.createElement(Z.Z,{tags:m})),l.createElement(x.Z,{name:s,data:r,current:c}),!!g&&l.createElement(w,{image:g,alt:null!=p?p:""}),l.createElement(C,null,t),l.createElement(b.Z,null))},k=E.ZP.div(a||(a=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=(0,E.ZP)(d.G)(c||(c=(0,p.Z)(["\n  margin-bottom: 16px;\n"]))),y=E.ZP.div(i||(i=(0,p.Z)(["\n  margin: 16px 0;\n"]))),C=(E.ZP.ul(m||(m=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),(0,E.ZP)(f.Z)(s||(s=(0,p.Z)(["\n  margin-bottom: 60px;\n"])))),B=e=>{var n,t;let{data:o}=e;const{frontmatter:{title:r,slug:a,tags:c,heroImage:i,previewContent:m},excerpt:s}=o.mdx,u=i?(0,d.c)(i):null;return l.createElement(g.Z,{title:r,description:null!=m?m:s,path:"posts/"+a,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function D(e){return l.createElement(v,e,l.createElement(u,e))}},5777:function(e,n,t){var o=t(7294);n.Z=function(){const e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,o]=e;t.setAttribute(n,o)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),o.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var o,l=t(1880);const r=t(891).ZP.div(o||(o=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=r},7178:function(e,n,t){var o,l,r,a,c,i=t(1880),m=t(7294),s=t(1883),u=t(891);const p=u.ZP.div(o||(o=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(l||(l=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=u.ZP.ol(r||(r=(0,i.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=u.ZP.li(a||(a=(0,i.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(c||(c=(0,i.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=e=>{let{name:n,data:t,current:o}=e;const[l,r]=m.useState(!0);return t?m.createElement(p,null,m.createElement(d,{collapsed:l,onClick:()=>r((e=>!e))},m.createElement("h2",null,"시리즈 ",m.createElement(s.rU,{to:"/series/"+n+"/"},'"'+n+'"')),m.createElement("span",null,"▲")),!l&&m.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return m.createElement(g,{active:n===o,key:n},m.createElement(s.rU,{to:"/posts/"+n},t))})))):null}},1597:function(e,n,t){var o,l=t(1880),r=t(7294),a=t(1883);const c=(0,t(891).ZP)(a.rU)(o||(o=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));n.Z=function(e){let{value:n}=e;return r.createElement(c,{to:"/tags/"+n},n)}},6706:function(e,n,t){var o,l=t(1880),r=t(7294),a=t(891),c=t(1597);const i=a.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));n.Z=function(e){let{tags:n,...t}=e;const o="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return r.createElement(i,t,o.map((e=>r.createElement("li",{key:e.fieldValue},r.createElement(c.Z,{value:e.fieldValue})))))}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var o=t(7294);const l=o.createContext({});function r(e){const n=o.useContext(l);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220503-read-writings-index-mdx-dc8c63507913e4e43f60.js.map