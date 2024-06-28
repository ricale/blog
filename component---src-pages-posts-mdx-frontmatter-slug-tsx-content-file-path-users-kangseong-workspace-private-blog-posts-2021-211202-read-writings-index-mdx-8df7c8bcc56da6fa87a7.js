"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8971],{8315:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return H}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({div:"div",h3:"h3",a:"a",p:"p",code:"code",ol:"ol",li:"li",hr:"hr",ul:"ul"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.div,{className:"md"},r.createElement(t.h3,{id:"브라우저의-사용자-에이전트는-왜-이렇게-복잡하게-생겼을까",style:{position:"relative"}},r.createElement(t.a,{href:"#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%8A%94-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%B3%B5%EC%9E%A1%ED%95%98%EA%B2%8C-%EC%83%9D%EA%B2%BC%EC%9D%84%EA%B9%8C","aria-label":"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),r.createElement(t.a,{href:"https://wormwlrm.github.io/2021/10/11/Why-User-Agent-string-is-so-complex.html"},"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?")),r.createElement(t.p,null,'브라우저 사용자 에이전트의 역사에 대한 간략한 소개. 간추리자면 "사용자 에이전트 정보가 이렇게 엉망이 된 이유는 브라우저 개발사들이 경쟁에서 뒤쳐지지 않기 위해 다른 회사 브라우저의 사용자 에이전트 정보까지 자신들의 브라우저에 포함시켰기 때문이다." 라는 이야기다.'),r.createElement(t.h3,{id:"react-derived-state-다시-보기",style:{position:"relative"}},r.createElement(t.a,{href:"#react-derived-state-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EA%B8%B0","aria-label":"react derived state 다시 보기 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),r.createElement(t.a,{href:"https://reactiver.dev/review-react-derived-state/"},"React Derived State 다시 보기")),r.createElement(t.p,null,"Derived State 가 뭔지, 문제가 뭔지, 개선책이 뭔지를 설명한다. Derived State 는 props 에 의해 초기화되는 상태값으로, ",r.createElement(t.code,null,"initial")," 을 말머리로 갖는 props 를 작성한 적이 있거나 본 적이 있다면 이미 잘 알고 있을 것이다."),r.createElement(t.h3,{id:"before-you-memo",style:{position:"relative"}},r.createElement(t.a,{href:"#before-you-memo","aria-label":"before you memo permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),r.createElement(t.a,{href:"https://overreacted.io/before-you-memo/"},"Before You memo()")),r.createElement(t.p,null,r.createElement(t.code,null,"memo()"),' 를 사용하기 전에 적용해볼 수 있는, React 앱의 성능을 개선하는 기초적이면서도 놓치기 쉬운 방법을 소개한다. 투박하게 축약하자면, "자주 변경되는 상태값을 너무 상위 컴포넌트에 두지 말자"가 되겠다.'),r.createElement(t.h3,{id:"writing-resilient-components",style:{position:"relative"}},r.createElement(t.a,{href:"#writing-resilient-components","aria-label":"writing resilient components permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),r.createElement(t.a,{href:"https://overreacted.io/writing-resilient-components/"},"Writing Resilient Components")),r.createElement(t.p,null,'탄력적인 컴포넌트를 작성하는 원칙에 관한 글. 여기서 말하는 "탄력적인 컴포넌트"는 유연하고 독립적인 컴포넌트를 말하는 듯 하다. 말하는 원칙은 아래 네 개인데'),r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"데이터 흐름을 막지 마라: props, state 의 변경에 따라 동작하는 React 컴포넌트의 기본 라이프사이클을 흐리지 말라는 말이다. 불필요한 Derived State 사용을 줄이는 것도 여기에 포함된다."),"\n",r.createElement(t.li,null,"언제나 렌더링 되게 하라: 굳이 렌더링 타이밍을 조정하려 하지 말라는 말. 자연스럽게 현재 상태에 따라 동작하게 하라는 의미다."),"\n",r.createElement(t.li,null,"컴포넌트는 싱글톤이 아니다: 자신도 모르게 싱글톤으로 작성하고 있을 수도 있다고? 그럼 같은 한 화면에서 컴포넌트를 두 번 렌더링해보자."),"\n",r.createElement(t.li,null,"컴포넌트의 로컬 상태는 독립적으로: 이건 뭐 부언할 말도 없다."),"\n"),r.createElement(t.p,null,"공감이 되기도 하고 새삼 되새기게 되기도 하는 좋은 글이다. 한글 번역본도 글 말머리에 링크가 있어 영어가 약해도 읽을 수 있다."),r.createElement(t.hr),r.createElement(t.p,null,"앞으로는 글을 많이 읽고 링크만 공유하는 것에 초점을 두지 않고 (어차피 제대로 지켜진 적도 없다), 글을 적게 읽더라도 어느정도 요약을 작성하면서 자주자주 적는 걸 목표로 하려고 한다.")),"\n",r.createElement(t.div,{className:"toc"},r.createElement(t.p,null,"목차"),r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%98-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%EB%8A%94-%EC%99%9C-%EC%9D%B4%EB%A0%87%EA%B2%8C-%EB%B3%B5%EC%9E%A1%ED%95%98%EA%B2%8C-%EC%83%9D%EA%B2%BC%EC%9D%84%EA%B9%8C"},"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#react-derived-state-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EA%B8%B0"},"React Derived State 다시 보기")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#before-you-memo"},"Before You memo()")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#writing-resilient-components"},"Writing Resilient Components")),"\n")))}var c,i,o,m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},E=n(1880),s=n(1883),h=n(3723),d=n(9178),u=n(3904),v=n(891),p=n(3234),C=n(6117),B=n(5777),f=n(7178),g=n(5924),A=n(4742);function b(e){let{data:t,children:n}=e;const l=r.useRef(),{frontmatter:a,sameSeriesPosts:c}=t.mdx,{title:i,slug:o,date:m,series:E}=a;return r.useEffect((()=>{var e;const t=null===(e=l.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),n=new IntersectionObserver((()=>(0,g.Z)(l,t)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==t||t.forEach((e=>n.observe(e))),()=>n.disconnect()}),[]),r.createElement(d.Z,null,r.createElement(S,null,r.createElement("h1",null,r.createElement(s.Link,{to:"/posts/"+o},i)),r.createElement(w,null,m)),r.createElement(f.Z,{name:E,data:c,current:o}),r.createElement(D,{ref:l},n),r.createElement(C.Z,{data:c,current:o}),r.createElement(A.Z,null),r.createElement(B.Z,null))}const S=v.ZP.div(c||(c=(0,E.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),w=v.ZP.div(i||(i=(0,E.Z)(["\n  margin-left: 2px;\n"]))),D=(0,v.ZP)(p.Z)(o||(o=(0,E.Z)(["\n  margin-bottom: 120px;\n"]))),y=e=>{var t,n;let{data:l}=e;const{frontmatter:{title:a,slug:c,tags:i,heroImage:o,previewContent:m},excerpt:E}=l.mdx,s=o?(0,h.c)(o):null;return r.createElement(u.Z,{title:a,description:null!=m?m:E,path:"posts/"+c,thumbnail:null==s||null===(t=s.images)||void 0===t||null===(n=t.fallback)||void 0===n?void 0:n.src,keywords:i,ogType:"article"})};function H(e){return r.createElement(b,e,r.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2021-211202-read-writings-index-mdx-8df7c8bcc56da6fa87a7.js.map