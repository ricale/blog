"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2831],{7595:function(e,n,t){t.r(n),t.d(n,{Head:function(){return A},default:function(){return z}});var l=t(1151),r=t(7294);function o(e){const n=Object.assign({h2:"h2",h3:"h3",a:"a",p:"p",code:"code",blockquote:"blockquote",ol:"ol",li:"li"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h2,null,"JavaScript"),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://2ality.com/2022/05/processing-arrays-non-destructively.html"},"Processing Arrays non-destructively: for-of vs. .reduce() vs. .flatMap()")),"\n",r.createElement(n.p,null,"제목에 나온대로 ",r.createElement(n.code,null,"for-of"),", ",r.createElement(n.code,null,".reduce()"),", ",r.createElement(n.code,null,".flatMap()")," 이 같은 상황에서 어떻게 다르게 쓰이는지를 설명한다. 많은 예제 코드가 있으므로 이해하기는 쉬울 것이다."),"\n",r.createElement(n.p,null,"숙련된 프로그래머라면, 글쎄, 굳이 정독할 필요가 있나 싶다. 초심자를 대상으로 쓴 글 같다."),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://zigamiklic.com/why-oh-why/"},"Why, Oh Why Was This Added?")),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,'"이 이벤트 핸들러에 ',r.createElement(n.code,null,"event.stopPropagation()"),'를 왜 추가했더라?"'),"\n"),"\n",r.createElement(n.p,null,"라는 질문에 대한 글이다."),"\n",r.createElement(n.p,null,"명확한 설명도 문맥도 없이 추가된 코드는 계속해서 남아있게 된다. 지우기 찝찝해서, 이유가 있을 거라 생각해서. 심지어는 비슷한 코드를 작성할 때는 복사해서 그대로 가져가기까지 한다. 그러한 모호함이 계속되지 않도록, 코드를 추가한 이유에 대해 주석을 달자는 내용이다."),"\n",r.createElement(n.p,null,"글은 ",r.createElement(n.code,null,"event.stopPropagation()")," 에 초점을 맞추고 있지만, 다른 비슷한 케이스가 많이 있을 것이다. 코드의 문맥 만으로 설명되지 않는 코드를 추가할 때는 주석을 달아 놓는 습관을 갖자."),"\n",r.createElement(n.h2,null,"React"),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://javascript.plainenglish.io/react-18-useeffect-double-call-for-apis-emergency-fix-724b7ee6a646"},"React 18 useEffect Double Call for APIs: Emergency Fix")),"\n",r.createElement(n.p,null,"React 18 의 개발 모드에서는 ",r.createElement(n.a,{href:"https://www.techiediaries.com/react-18-useeffect/"},r.createElement(n.code,null,"useEffect")," 가 두 번 실행"),"된다. 웬만한 경우에는 큰 문제가 없지만, ",r.createElement(n.code,null,"useEffect")," 내에서 API 콜을 할 경우 중복 요청이 된다는 문제가 생긴다. 이 현상을 어떻게 막을 것인가? 에 대한 글이다. 정리하면 네 가지 방법이 있다."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"프로덕션 모드를 사용한다."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://reactjs.org/docs/strict-mode.html"},r.createElement(n.code,null,"StrictMode"))," 를 사용하지 않는다."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController"},r.createElement(n.code,null,"AbortController"))," 를 사용한다."),"\n",r.createElement(n.li,null,"API 콜에 대한 캐시 기능을 사용한다. (직접 구현하든, ",r.createElement(n.a,{href:"https://react-query.tanstack.com/"},"React Query")," 나 ",r.createElement(n.a,{href:"https://redux-toolkit.js.org/rtk-query/overview"},"RTK Query")," 같은 라이브러리를 사용하든.)"),"\n"),"\n",r.createElement(n.p,null,'제목에 Emergency Fix 라고 나와있듯 근본적인 해결책은 아니다. 하지만 AbortController 라는 키워드도 알 수 있었고, "근본적인" 해결책이 없다는 걸 간접적으로 알 수 있었으니 됐다.'),"\n",r.createElement(n.h2,null,"Etc"),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://www.anaconda.com/blog/pyscript-python-in-the-browser"},"New from Anaconda: Python in the Browser")),"\n",r.createElement(n.p,null,"파이썬을 자바스크립트처럼 HTML 에서 사용할 수 있는 프레임워크. 엔진이 브라우저에 포함되어 있기 때문에 사용자는 설치할 필요가 없다. 그저 ",r.createElement(n.code,null,"<py-script />")," 태그를 ",r.createElement(n.code,null,"<script />")," 태그처럼 사용하면 된다."),"\n",r.createElement(n.p,null,"아직 알파 단계라고는 하지만, 이제 프론트엔드도 백엔드처럼 여러 언어로 개발할 수 있는 날이 머지 않은 것 같다. 공부할 게 많아진다는 점에서 변화는 썩 달갑지 않다. 하지만 거부할 수도 없다."),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://d2.naver.com/helloworld/0923884"},"모던 프론트엔드 프로젝트 구성 기법 - 모노레포 개념 편")),"\n",r.createElement(n.p,null,'"모노레포"는 여러 모듈/프로젝트를 하나의 소스코드 저장소에서 관리하는 것을 의미한다. 이 글에서는 "모노레포"의 기본 개념과, 프론트엔드 프로젝트에서는 어떻게/왜 모노레포 프로젝트를 구성하는지에 대해 설명한다.'),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://github.com/features/copilot"},"GitHub Copilot - Your AI pair programmer")),"\n",r.createElement(n.p,null,"GitHub 의 서비스. 함수를 작성할 때 함수의 이름을 작성하는 것만으로 함수의 내용을 자동 완성 시켜주는 서비스. 딥러닝으로 구현된 것으로 보인다. 가격은 60일 트라이얼에 한 달 10달러 정도. 정확도가 얼마나 좋을지는 모르겠으나, 이런 서비스가 이미 유료로 운영되고 있다는 사실에 놀랐다."),"\n",r.createElement(n.p,null,"지난 24일에는 Amazon 에서도 비슷한 서비스를 출시하기도 했다. ",r.createElement(n.a,{href:"https://techcrunch.com/2022/06/23/amazon-launches-codewhisperer-its-ai-pair-programming-tool/"},"Amazon launches CodeWhisperer, a GitHub Copilot-like AI pair programming tool\n")),"\n",r.createElement(n.p,null,"옛날에는 AI로 인해 모든 직업이 사라지더라도 프로그래머만은 남을 거라고 막연히 생각했는데, 알파고 이후에 쏟아져나오는 많은 기술과 서비스들을 보고 있노라면 프로그래머도 안전 구역이 아니라는 생각이 든다."))}var a,c,i,m,s,u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(o,e)):o(e)},p=t(1880),d=t(3723),h=t(1858),g=t(3904),f=t(891),E=t(5534),b=t(5777),x=t(7178),v=t(6706);function y(e){let{data:n,children:t}=e;const{frontmatter:l,sameSeriesPosts:o}=n.mdx,{title:a,slug:c,date:i,tags:m,series:s,heroImage:u,heroImageAlt:p}=l,g=u?(0,d.c)(u):null;return r.createElement(h.Z,null,r.createElement(Z,null,r.createElement("h1",null,a),r.createElement(w,null,i),r.createElement(v.Z,{tags:m})),r.createElement(x.Z,{name:s,data:o,current:c}),!!g&&r.createElement(k,{image:g,alt:null!=p?p:""}),r.createElement(P,null,t),r.createElement(b.Z,null))}const Z=f.ZP.div(a||(a=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),k=(0,f.ZP)(d.G)(c||(c=(0,p.Z)(["\n  margin-bottom: 16px;\n"]))),w=f.ZP.div(i||(i=(0,p.Z)(["\n  margin: 16px 0;\n"]))),P=(f.ZP.ul(m||(m=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),(0,f.ZP)(E.Z)(s||(s=(0,p.Z)(["\n  margin-bottom: 60px;\n"])))),A=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:o,slug:a,tags:c,heroImage:i,previewContent:m},excerpt:s}=l.mdx,u=i?(0,d.c)(i):null;return r.createElement(g.Z,{title:o,description:null!=m?m:s,path:"posts/"+a,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function z(e){return r.createElement(y,e,r.createElement(u,e))}},5777:function(e,n,t){var l=t(7294);n.Z=function(){const e=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,l]=e;t.setAttribute(n,l)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),l.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var l,r=t(1880);const o=t(891).ZP.div(l||(l=(0,r.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=o},7178:function(e,n,t){var l,r,o,a,c,i=t(1880),m=t(7294),s=t(1883),u=t(891);const p=u.ZP.div(l||(l=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=u.ZP.ol(o||(o=(0,i.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=u.ZP.li(a||(a=(0,i.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(c||(c=(0,i.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:l}=e;const[r,o]=m.useState(!0);return t?m.createElement(p,null,m.createElement(d,{collapsed:r,onClick:()=>o((e=>!e))},m.createElement("h2",null,"시리즈 ",m.createElement(s.rU,{to:"/series/"+n+"/"},'"'+n+'"')),m.createElement("span",null,"▲")),!r&&m.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return m.createElement(g,{active:n===l,key:n},m.createElement(s.rU,{to:"/posts/"+n},t))})))):null}},1597:function(e,n,t){var l,r=t(1880),o=t(7294),a=t(1883);const c=(0,t(891).ZP)(a.rU)(l||(l=(0,r.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));n.Z=function(e){let{value:n}=e;return o.createElement(c,{to:"/tags/"+n},n)}},6706:function(e,n,t){var l,r=t(1880),o=t(7294),a=t(891),c=t(1597);const i=a.ZP.ul(l||(l=(0,r.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));n.Z=function(e){let{tags:n,...t}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(i,t,l.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(c.Z,{value:e.fieldValue})))))}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var l=t(7294);const r=l.createContext({});function o(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220629-read-writings-index-mdx-ac1c737e257561c1cc61.js.map