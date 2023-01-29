"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2119],{7964:function(e,n,t){t.r(n),t.d(n,{Head:function(){return k},default:function(){return y}});var r=t(1151),l=t(7294);function o(e){const n=Object.assign({div:"div",h3:"h3",a:"a",p:"p",code:"code",ol:"ol",li:"li",hr:"hr",ul:"ul"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h3,{id:"브라우저의-사용자-에이전트는-왜-이렇게-복잡하게-생겼을까",style:{position:"relative"}},l.createElement(n.a,{href:"#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%8A%94-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%B3%B5%EC%9E%A1%ED%95%98%EA%B2%8C-%EC%83%9D%EA%B2%BC%EC%9D%84%EA%B9%8C","aria-label":"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://wormwlrm.github.io/2021/10/11/Why-User-Agent-string-is-so-complex.html"},"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?")),l.createElement(n.p,null,'브라우저 사용자 에이전트의 역사에 대한 간략한 소개. 간추리자면 "사용자 에이전트 정보가 이렇게 엉망이 된 이유는 브라우저 개발사들이 경쟁에서 뒤쳐지지 않기 위해 다른 회사 브라우저의 사용자 에이전트 정보까지 자신들의 브라우저에 포함시켰기 때문이다." 라는 이야기다.'),l.createElement(n.h3,{id:"react-derived-state-다시-보기",style:{position:"relative"}},l.createElement(n.a,{href:"#react-derived-state-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EA%B8%B0","aria-label":"react derived state 다시 보기 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://reactiver.dev/review-react-derived-state/"},"React Derived State 다시 보기")),l.createElement(n.p,null,"Derived State 가 뭔지, 문제가 뭔지, 개선책이 뭔지를 설명한다. Derived State 는 props 에 의해 초기화되는 상태값으로, ",l.createElement(n.code,null,"initial")," 을 말머리로 갖는 props 를 작성한 적이 있거나 본 적이 있다면 이미 잘 알고 있을 것이다."),l.createElement(n.h3,{id:"before-you-memo",style:{position:"relative"}},l.createElement(n.a,{href:"#before-you-memo","aria-label":"before you memo permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://overreacted.io/before-you-memo/"},"Before You memo()")),l.createElement(n.p,null,l.createElement(n.code,null,"memo()"),' 를 사용하기 전에 적용해볼 수 있는, React 앱의 성능을 개선하는 기초적이면서도 놓치기 쉬운 방법을 소개한다. 투박하게 축약하자면, "자주 변경되는 상태값을 너무 상위 컴포넌트에 두지 말자"가 되겠다.'),l.createElement(n.h3,{id:"writing-resilient-components",style:{position:"relative"}},l.createElement(n.a,{href:"#writing-resilient-components","aria-label":"writing resilient components permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://overreacted.io/writing-resilient-components/"},"Writing Resilient Components")),l.createElement(n.p,null,'탄력적인 컴포넌트를 작성하는 원칙에 관한 글. 여기서 말하는 "탄력적인 컴포넌트"는 유연하고 독립적인 컴포넌트를 말하는 듯 하다. 말하는 원칙은 아래 네 개인데'),l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"데이터 흐름을 막지 마라: props, state 의 변경에 따라 동작하는 React 컴포넌트의 기본 라이프사이클을 흐리지 말라는 말이다. 불필요한 Derived State 사용을 줄이는 것도 여기에 포함된다."),"\n",l.createElement(n.li,null,"언제나 렌더링 되게 하라: 굳이 렌더링 타이밍을 조정하려 하지 말라는 말. 자연스럽게 현재 상태에 따라 동작하게 하라는 의미다."),"\n",l.createElement(n.li,null,"컴포넌트는 싱글톤이 아니다: 자신도 모르게 싱글톤으로 작성하고 있을 수도 있다고? 그럼 같은 한 화면에서 컴포넌트를 두 번 렌더링해보자."),"\n",l.createElement(n.li,null,"컴포넌트의 로컬 상태는 독립적으로: 이건 뭐 부언할 말도 없다."),"\n"),l.createElement(n.p,null,"공감이 되기도 하고 새삼 되새기게 되기도 하는 좋은 글이다. 한글 번역본도 글 말머리에 링크가 있어 영어가 약해도 읽을 수 있다."),l.createElement(n.hr),l.createElement(n.p,null,"앞으로는 글을 많이 읽고 링크만 공유하는 것에 초점을 두지 않고 (어차피 제대로 지켜진 적도 없다), 글을 적게 읽더라도 어느정도 요약을 작성하면서 자주자주 적는 걸 목표로 하려고 한다.")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.h3,{id:"목차",style:{position:"relative"}},l.createElement(n.a,{href:"#%EB%AA%A9%EC%B0%A8","aria-label":"목차 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%8A%94-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%B3%B5%EC%9E%A1%ED%95%98%EA%B2%8C-%EC%83%9D%EA%B2%BC%EC%9D%84%EA%B9%8C"},"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#react-derived-state-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EA%B8%B0"},"React Derived State 다시 보기")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#before-you-memo"},"Before You memo()")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#writing-resilient-components"},"Writing Resilient Components")),"\n")))}var a,i,c,s,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},d=t(1880),u=t(3723),p=t(1858),h=t(3904),E=t(891),g=t(5534),f=t(5777),v=t(7178),b=t(2889);function C(e){let{data:n,children:t}=e;const{frontmatter:r,sameSeriesPosts:o}=n.mdx,{title:a,slug:i,date:c,tags:s,series:m,heroImage:d,heroImageAlt:h}=r,E=d?(0,u.c)(d):null;return l.createElement(p.Z,null,l.createElement(x,null,l.createElement("h1",null,a),l.createElement(A,null,c),l.createElement(b.Z,{tags:s})),l.createElement(v.Z,{name:m,data:o,current:i}),!!E&&l.createElement(B,{image:E,alt:null!=h?h:""}),l.createElement(w,null,t),l.createElement(f.Z,null))}const x=E.ZP.div(a||(a=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),B=(0,E.ZP)(u.G)(i||(i=(0,d.Z)(["\n  margin-bottom: 16px;\n"]))),A=E.ZP.div(c||(c=(0,d.Z)(["\n  margin: 16px 0;\n"]))),w=(0,E.ZP)(g.Z)(s||(s=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),k=e=>{var n,t;let{data:r}=e;const{frontmatter:{title:o,slug:a,tags:i,heroImage:c,previewContent:s},excerpt:m}=r.mdx,d=c?(0,u.c)(c):null;return l.createElement(h.Z,{title:o,description:null!=s?s:m,path:"posts/"+a,thumbnail:null==d||null===(n=d.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function y(e){return l.createElement(C,e,l.createElement(m,e))}},5777:function(e,n,t){var r=t(7294);n.Z=function(){const e=(0,r.useRef)(null);return(0,r.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,r]=e;t.setAttribute(n,r)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),r.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var r,l=t(1880);const o=t(891).ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n  > .toc {\n    order: 0;\n    margin: 0 16px 16px;\n    padding: 16px 0 0 16px;\n    background-color: #1a1a1a;\n    > h3 {\n      margin: 0;\n      font-size: 1.125rem;\n    }\n    > ul {\n      position: relative;\n      margin: 0;\n      padding: 8px 0 16px 20px;\n\n      font-size: 1rem;\n      list-style: none;\n\n      a {\n        color: #dddddd;\n      }\n\n      ul {\n        list-style: none;\n        padding-left: 30px;\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=o},7178:function(e,n,t){var r,l,o,a,i,c=t(1880),s=t(7294),m=t(1883),d=t(891);const u=d.ZP.div(r||(r=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),p=d.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=d.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),E=d.ZP.li(a||(a=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,d.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:r}=e;const[l,o]=s.useState(!0);return t?s.createElement(u,null,s.createElement(p,{collapsed:l,onClick:()=>o((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(m.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!l&&s.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(E,{active:n===r,key:n},s.createElement(m.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return u}});var r,l=t(1880),o=t(7294),a=t(891),i=t(1883);const c=(0,a.ZP)(i.Link)(r||(r=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,m=function(e){let{value:n}=e;return o.createElement(c,{to:"/tags/"+n},n)};const d=a.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var u=function(e){let{tags:n,showCount:t,...r}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(d,r,l.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(m,{value:e.fieldValue}),t&&!!e.totalCount&&o.createElement("sup",null,""+e.totalCount)))))}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var r=t(7294);const l=r.createContext({});function o(e){const n=r.useContext(l);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211202-read-writings-index-mdx-fb9db2951b48311eb4f6.js.map