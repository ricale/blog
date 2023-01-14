"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5039],{2448:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return k}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h3:"h3",a:"a",p:"p",ul:"ul",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,a.createElement(t.a,{href:"https://ko.javascript.info/proxy"},"[번역] Proxy와 Reflect")),"\n",a.createElement(t.p,null,"Proxy 와 Reflect 에 대한 강의? 글. 맨날 몰라서 찾아보고 까먹고 몰라서 찾아보고 까먹고를 반복하는 녀석인데, 이번에는 쓸만한 구석이 있을 수도 있어서 좀 더 정독했다. 한 번 써보면 확실히 안 까먹을텐데. (참고로 번역이 반 정도만 되어있다. 나머지는 영문)"),"\n",a.createElement(t.h3,null,a.createElement(t.a,{href:"https://www.kaidohussar.dev/posts/debounce-vs-throttle"},"Debounce vs throttle")),"\n",a.createElement(t.p,null,"debounce 와 throttle 둘을 비교하며 설명한다. 난 또 JavaScript 에 포함되어있는 (내가 알지 못하던) 함수인 줄 알았더니, 그냥 개념 및 구현에 대한 설명이었다. 간단히 요약하면 아래와 같다."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"debounce 는 특정 시간마다 반복되면서 실행"),"\n",a.createElement(t.li,null,"throttle 은 마지막 실행으로부터 특정 시간동안 실행이 안 됨"),"\n"),"\n",a.createElement(t.p,null,"간단한 UI 구현 예제도 있으니 읽어보는 것도 좋겠다."),"\n",a.createElement(t.h3,null,a.createElement(t.a,{href:"https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id"},"LocalStorage vs Cookies: All You Need To Know About Storing JWT Tokens Securely in The Front-End ")),"\n",a.createElement(t.p,null,"JWT Token 을 관리하기에는 어디가 더 적절한가? Local Storage? Cookie?"),"\n",a.createElement(t.p,null,"글에서는 XSS 와 CSRF 를 피하기 위해"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Refresh token 은 (각종 옵션을 적용해서) 쿠키에 관리"),"\n",a.createElement(t.li,null,"Access token 은 인메모리에 관리"),"\n"),"\n",a.createElement(t.p,null,"하라고 권한다."),"\n",a.createElement(t.p,null,"가장 추천을 많이 받은 댓글에서는 (글의 내용이 좋긴 하지만) 모던 자바스크립트 프레임워크와 NPM 에서 이미 강력한 XSS 방어를 해주고 있으므로 Local Storage 도 나쁘지 않다고 말한다."),"\n",a.createElement(t.p,null,"이 주제의 글을 볼 때마다 결국 내리는 결론은, 요구사항과 기타 조건에 따라 선택하는 것이지 Local Storage 와 Cookie 중 어느 한 쪽이 (보안 측면에서) 압도적으로 좋지는 않다는 것이다."),"\n",a.createElement(t.h3,null,a.createElement(t.a,{href:"https://velog.io/@0307kwon/JWT%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C-localStorage-vs-cookie"},"JWT는 어디에 저장해야할까? - localStorage vs cookie")),"\n",a.createElement(t.p,null,"바로 위의 글과 같은 주제에 윗글을 많이 참고한 듯한 글. 이 글에서는 어느 쪽이 더 우월하지는 않지만 글쓴이 본인은 Local Storage 를 더 선호한다는 결론을 내렸다."),"\n",a.createElement(t.h3,null,a.createElement(t.a,{href:"https://yozm.wishket.com/magazine/detail/1176/"},"[번역] 스벨트 vs 리액트, 누가 더 뛰어날까?")),"\n",a.createElement(t.p,null,"여기저기서 Svelte 에 대해 몇 번 주워 들은 적이 있는데, 이렇게 (비교글일지언정) 정리된 글을 읽는 것은 처음이다."),"\n",a.createElement(t.p,null,"요약하자면 성능, 사용성 등 거의 모든 부분에서 Svelte 가 React 보다 뛰어나지만, 지원하거나 관리하는 기업이 없는 오픈소스 프로젝트이면서 아직 사용자가 (React 에 비해) 많지 않다보니 문서와 커뮤니티 형성에 있어서는 크게 밀린다는 점이었다. (추가로 대규모 프로젝트에는 아직 적합하지 않다는 것도 있다)"),"\n",a.createElement(t.p,null,"관심이 가긴 하지만, 사람이 좀 많아지면 써봐야겠다."),"\n",a.createElement(t.h3,null,a.createElement(t.a,{href:"https://blog.nviso.eu/2021/04/06/a-closer-look-at-the-security-of-react-native-biometric-libraries/"},"A closer look at the security of React Native biometric libraries")),"\n",a.createElement(t.p,null,"React Native 의 생체인증 관련 라이브러리들이 보안적으로 안전한지 살펴보는 글이다. Event-based 방식 말고 Result-based 방식이 안전하다고 이야기하며 총 다섯 개의 React Native 생체인증 라이브러리를 리뷰한다."),"\n",a.createElement(t.p,null,"생체인증 구현을 적용해보기 전에 읽어보기 좋은 글이다."))}var o,c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},u=n(1880),i=n(1883),m=n(3723),s=n(1858),E=n(3904),p=n(891),h=n(5534),d=n(5777);const g=e=>{let{data:t,children:n}=e;const{title:l,date:r,tags:o,heroImage:c,heroImageAlt:u}=t.mdx.frontmatter,E=c?(0,m.c)(c):null;return a.createElement(s.Z,null,a.createElement("h1",null,l),a.createElement(f,null,o.map((e=>a.createElement("li",{key:e},a.createElement(i.rU,{to:"/tags/"+e},e))))),a.createElement("div",null,r),!!E&&a.createElement(m.G,{image:E,alt:null!=u?u:""}),a.createElement(h.Z,null,n),a.createElement(d.Z,null))},f=p.ZP.ul(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),v=e=>{var t,n;let{data:l}=e;const{frontmatter:{title:r,slug:o,tags:c,heroImage:u},excerpt:i}=l.mdx,s=u?(0,m.c)(u):null;return a.createElement(E.Z,{title:r,description:i,path:"posts/"+o,thumbnail:null==s||null===(t=s.images)||void 0===t||null===(n=t.fallback)||void 0===n?void 0:n.src,keywords:c,ogType:"article"})};function k(e){return a.createElement(g,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220313-read-writings-index-mdx-5bf92cd4073e0a204f2e.js.map