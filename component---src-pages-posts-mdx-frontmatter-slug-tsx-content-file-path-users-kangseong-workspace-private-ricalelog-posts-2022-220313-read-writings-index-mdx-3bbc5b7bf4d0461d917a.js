"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5039],{2448:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return S}});var o=t(1151),l=t(7294);function r(e){const n=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li"},(0,o.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,l.createElement(n.a,{href:"https://ko.javascript.info/proxy"},"[번역] Proxy와 Reflect")),"\n",l.createElement(n.p,null,"Proxy 와 Reflect 에 대한 강의? 글. 맨날 몰라서 찾아보고 까먹고 몰라서 찾아보고 까먹고를 반복하는 녀석인데, 이번에는 쓸만한 구석이 있을 수도 있어서 좀 더 정독했다. 한 번 써보면 확실히 안 까먹을텐데. (참고로 번역이 반 정도만 되어있다. 나머지는 영문)"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://www.kaidohussar.dev/posts/debounce-vs-throttle"},"Debounce vs throttle")),"\n",l.createElement(n.p,null,"debounce 와 throttle 둘을 비교하며 설명한다. 난 또 JavaScript 에 포함되어있는 (내가 알지 못하던) 함수인 줄 알았더니, 그냥 개념 및 구현에 대한 설명이었다. 간단히 요약하면 아래와 같다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"debounce 는 특정 시간마다 반복되면서 실행"),"\n",l.createElement(n.li,null,"throttle 은 마지막 실행으로부터 특정 시간동안 실행이 안 됨"),"\n"),"\n",l.createElement(n.p,null,"간단한 UI 구현 예제도 있으니 읽어보는 것도 좋겠다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id"},"LocalStorage vs Cookies: All You Need To Know About Storing JWT Tokens Securely in The Front-End ")),"\n",l.createElement(n.p,null,"JWT Token 을 관리하기에는 어디가 더 적절한가? Local Storage? Cookie?"),"\n",l.createElement(n.p,null,"글에서는 XSS 와 CSRF 를 피하기 위해"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Refresh token 은 (각종 옵션을 적용해서) 쿠키에 관리"),"\n",l.createElement(n.li,null,"Access token 은 인메모리에 관리"),"\n"),"\n",l.createElement(n.p,null,"하라고 권한다."),"\n",l.createElement(n.p,null,"가장 추천을 많이 받은 댓글에서는 (글의 내용이 좋긴 하지만) 모던 자바스크립트 프레임워크와 NPM 에서 이미 강력한 XSS 방어를 해주고 있으므로 Local Storage 도 나쁘지 않다고 말한다."),"\n",l.createElement(n.p,null,"이 주제의 글을 볼 때마다 결국 내리는 결론은, 요구사항과 기타 조건에 따라 선택하는 것이지 Local Storage 와 Cookie 중 어느 한 쪽이 (보안 측면에서) 압도적으로 좋지는 않다는 것이다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie"},"JWT는 어디에 저장해야할까? - localStorage vs cookie")),"\n",l.createElement(n.p,null,"바로 위의 글과 같은 주제에 윗글을 많이 참고한 듯한 글. 이 글에서는 어느 쪽이 더 우월하지는 않지만 글쓴이 본인은 Local Storage 를 더 선호한다는 결론을 내렸다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://yozm.wishket.com/magazine/detail/1176/"},"[번역] 스벨트 vs 리액트, 누가 더 뛰어날까?")),"\n",l.createElement(n.p,null,"여기저기서 Svelte 에 대해 몇 번 주워 들은 적이 있는데, 이렇게 (비교글일지언정) 정리된 글을 읽는 것은 처음이다."),"\n",l.createElement(n.p,null,"요약하자면 성능, 사용성 등 거의 모든 부분에서 Svelte 가 React 보다 뛰어나지만, 지원하거나 관리하는 기업이 없는 오픈소스 프로젝트이면서 아직 사용자가 (React 에 비해) 많지 않다보니 문서와 커뮤니티 형성에 있어서는 크게 밀린다는 점이었다. (추가로 대규모 프로젝트에는 아직 적합하지 않다는 것도 있다)"),"\n",l.createElement(n.p,null,"관심이 가긴 하지만, 사람이 좀 많아지면 써봐야겠다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://blog.nviso.eu/2021/04/06/a-closer-look-at-the-security-of-react-native-biometric-libraries/"},"A closer look at the security of React Native biometric libraries")),"\n",l.createElement(n.p,null,"React Native 의 생체인증 관련 라이브러리들이 보안적으로 안전한지 살펴보는 글이다. Event-based 방식 말고 Result-based 방식이 안전하다고 이야기하며 총 다섯 개의 React Native 생체인증 라이브러리를 리뷰한다."),"\n",l.createElement(n.p,null,"생체인증 구현을 적용해보기 전에 읽어보기 좋은 글이다."))}var a,c,i,s,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},u=t(1880),p=t(1883),d=t(3723),h=t(1858),g=t(3904),E=t(891),b=t(5534),f=t(5777),x=t(7178);const v=e=>{let{data:n,children:t}=e;const{frontmatter:o,sameSeriesPosts:r}=n.mdx,{title:a,slug:c,date:i,tags:s,series:m,heroImage:u,heroImageAlt:g}=o,E=u?(0,d.c)(u):null;return l.createElement(h.Z,null,l.createElement(k,null,l.createElement("h1",null,a),l.createElement(w,null,i),l.createElement(y,null,s.map((e=>l.createElement("li",{key:e},l.createElement(p.rU,{to:"/tags/"+e},e)))))),l.createElement(x.Z,{name:m,data:r,current:c}),!!E&&l.createElement(Z,{image:E,alt:null!=g?g:""}),l.createElement(b.Z,null,t),l.createElement(f.Z,null))},k=E.ZP.div(a||(a=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),Z=(0,E.ZP)(d.G)(c||(c=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),w=E.ZP.div(i||(i=(0,u.Z)(["\n  margin: 16px 0;\n"]))),y=E.ZP.ul(s||(s=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),C=e=>{var n,t;let{data:o}=e;const{frontmatter:{title:r,slug:a,tags:c,heroImage:i,previewContent:s},excerpt:m}=o.mdx,u=i?(0,d.c)(i):null;return l.createElement(g.Z,{title:r,description:null!=s?s:m,path:"posts/"+a,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function S(e){return l.createElement(v,e,l.createElement(m,e))}},5777:function(e,n,t){var o=t(7294);n.Z=function(){const e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,o]=e;t.setAttribute(n,o)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),o.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var o,l=t(1880);const r=t(891).ZP.div(o||(o=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=r},7178:function(e,n,t){var o,l,r,a,c,i=t(1880),s=t(7294),m=t(1883),u=t(891);const p=u.ZP.div(o||(o=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(l||(l=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=u.ZP.ol(r||(r=(0,i.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=u.ZP.li(a||(a=(0,i.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(c||(c=(0,i.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=e=>{let{name:n,data:t,current:o}=e;const[l,r]=s.useState(!0);return t?s.createElement(p,null,s.createElement(d,{collapsed:l,onClick:()=>r((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(m.rU,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!l&&s.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(g,{active:n===o,key:n},s.createElement(m.rU,{to:"/posts/"+n},t))})))):null}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var o=t(7294);const l=o.createContext({});function r(e){const n=o.useContext(l);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220313-read-writings-index-mdx-3bbc5b7bf4d0461d917a.js.map