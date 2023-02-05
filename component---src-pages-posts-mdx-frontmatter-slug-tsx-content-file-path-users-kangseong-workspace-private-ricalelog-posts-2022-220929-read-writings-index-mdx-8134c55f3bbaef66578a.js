"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[6473],{6594:function(e,n,t){t.r(n),t.d(n,{Head:function(){return A},default:function(){return S}});var a=t(1151),l=t(7294);function r(e){const n=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",em:"em",blockquote:"blockquote",code:"code",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h2,{id:"javascript",style:{position:"relative"}},l.createElement(n.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),l.createElement(n.h3,{id:"js-javascript-동작-원리와-비동기처리",style:{position:"relative"}},l.createElement(n.a,{href:"#js-javascript-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%B2%98%EB%A6%AC","aria-label":"js javascript 동작 원리와 비동기처리 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://ingg.dev/js-work/"},"[JS] Javascript 동작 원리와 비동기처리")),l.createElement(n.p,null,"자바스크립트 런타임 환경에서의 스레드 구성과 콜스택, 이벤트루프, 메시지큐, Web API 스레드가 어떻게 같이 동작하는지에 대해 설명하는 글. 이해하기 쉽게 잘 정리되어 있다."),l.createElement(n.h3,{id:"event-loop-이벤트-루프",style:{position:"relative"}},l.createElement(n.a,{href:"#event-loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84","aria-label":"event loop 이벤트 루프 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84"},"Event Loop (이벤트 루프)")),l.createElement(n.p,null,"바로 위의 글과 비슷한 주제이지만 좀 더 이벤트루프에 집중한 느낌이고 마이크로테스크큐, 애니메이션프레임",l.createElement(n.em,null,"requestAnimationFrame")," 등 몇 가지 개념을 더 언급한다."),l.createElement(n.h3,{id:"does-promiseall-execute-in-parallel-how-promiseall-works-in-javascript",style:{position:"relative"}},l.createElement(n.a,{href:"#does-promiseall-execute-in-parallel-how-promiseall-works-in-javascript","aria-label":"does promiseall execute in parallel how promiseall works in javascript permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://javascript.plainenglish.io/does-promise-all-execute-in-parallel-how-promise-all-works-in-javascript-fffc2e8d455d"},"Does Promise.all Execute in Parallel? How Promise.all Works in JavaScript")),l.createElement(n.p,null,"Promise.all 이 정말 평행적으로 실행되는가? 에 대한 글. 사실 직접 로그를 찍어보며 돌려도 알 수 있기는 한데, 그래도 다른 사람이 문장으로 정리된 것을 읽어보는 것도 의미는 있다."),l.createElement(n.h3,{id:"node_modules로부터-우리를-구원해-줄-yarn-berry",style:{position:"relative"}},l.createElement(n.a,{href:"#node_modules%EB%A1%9C%EB%B6%80%ED%84%B0-%EC%9A%B0%EB%A6%AC%EB%A5%BC-%EA%B5%AC%EC%9B%90%ED%95%B4-%EC%A4%84-yarn-berry","aria-label":"node_modules로부터 우리를 구원해 줄 yarn berry permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://toss.tech/article/node-modules-and-yarn-berry"},"node_modules로부터 우리를 구원해 줄 Yarn Berry")),l.createElement(n.p,null,"yarn/npm 이 디펜던시를 관리하는 방법에서의 단점을 보완한 Yarn Berry 에 대한 소개글이다."),l.createElement(n.h2,{id:"react",style:{position:"relative"}},l.createElement(n.a,{href:"#react","aria-label":"react permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React"),l.createElement(n.h3,{id:"when-to-break-up-a-component-into-multiple-components",style:{position:"relative"}},l.createElement(n.a,{href:"#when-to-break-up-a-component-into-multiple-components","aria-label":"when to break up a component into multiple components permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components"},"When to break up a component into multiple components")),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,'Breaking a single component into multiple components is what\'s called "abstraction." Abstraction is awesome, but every abstraction comes with a cost, and you have to be aware of that cost and the benefits before you take the plunge'),"\n"),l.createElement(n.p,null,'"컴포넌트를 나누는 것 또한 비용이다. 그러니 나누기 전에 비용과 이점을 알아야 한다."'),l.createElement(n.p,null,'컴포넌트를 어떤 경우에는 나눠야 하는지 설명한다. 그리고 그 "경우"에 포함되지 않을 경우, 굳이 컴포넌트를 미리 나누지 말라고 말한다.'),l.createElement(n.p,null,"여러모로 조심스럽게 읽고 조심스럽게 받아들여야 하는 글이다."),l.createElement(n.h3,{id:"how-to-use-forms-in-react",style:{position:"relative"}},l.createElement(n.a,{href:"#how-to-use-forms-in-react","aria-label":"how to use forms in react permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://www.robinwieruch.de/react-form/"},"How to use Forms in React")),l.createElement(n.p,null,"React 에서 ",l.createElement(n.code,null,"<form />")," 을 어떻게 사용할 것인다. 여러 예제 코드와 함께 설명한다. 예제코드만 쓱 훓어보더라도 나쁘지 않은 글이다."),l.createElement(n.h2,{id:"etc",style:{position:"relative"}},l.createElement(n.a,{href:"#etc","aria-label":"etc permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Etc"),l.createElement(n.h3,{id:"웹-서비스-캐시-똑똑하게-다루기",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%BA%90%EC%8B%9C-%EB%98%91%EB%98%91%ED%95%98%EA%B2%8C-%EB%8B%A4%EB%A3%A8%EA%B8%B0","aria-label":"웹 서비스 캐시 똑똑하게 다루기 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://toss.tech/article/smart-web-service-cache"},"웹 서비스 캐시 똑똑하게 다루기")),l.createElement(n.p,null,"http 의 Cache-Control 헤더에 대한 설명과, 토스에서는 환경 및 리소스 종류에 따라 어떻게 캐시를 적용하고 있는지에 대한 글."),l.createElement(n.h3,{id:"웹-표준-미니앱의-어려움",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%9B%B9-%ED%91%9C%EC%A4%80-%EB%AF%B8%EB%8B%88%EC%95%B1%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80","aria-label":"웹 표준 미니앱의 어려움 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://cho.sh/ko/blog/A370F3"},"웹 표준 미니앱의 어려움")),l.createElement(n.p,null,"미니앱은 슈퍼앱의 앱 내부에서 돌아가는 서드파티 앱들의 총칭이다. 일반적으로 iframe 상에서 돌아간다. 어떻게하면 웹 표준을 잘 지키며 좋은 미니앱을 만들 수 있을지에 대한 글이다."),l.createElement(n.p,null,"인상깊은 부분은 단일 스레드 문제를 해결하기 위해 WebWorker 에 fake DOM API 를 심어 멀티 스레드를 구현한다는 부분이었다. 이게 보편화될 수 있다면 프론트엔드 사이드에서 꽤나 혁신적인 일이 되지 않을까 싶다.")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#javascript"},"JavaScript"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#js-javascript-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%B2%98%EB%A6%AC"},"[JS] Javascript 동작 원리와 비동기처리")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#event-loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84"},"Event Loop (이벤트 루프)")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#does-promiseall-execute-in-parallel-how-promiseall-works-in-javascript"},"Does Promise.all Execute in Parallel? How Promise.all Works in JavaScript")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#node_modules%EB%A1%9C%EB%B6%80%ED%84%B0-%EC%9A%B0%EB%A6%AC%EB%A5%BC-%EA%B5%AC%EC%9B%90%ED%95%B4-%EC%A4%84-yarn-berry"},"node_modules로부터 우리를 구원해 줄 Yarn Berry")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#react"},"React"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#when-to-break-up-a-component-into-multiple-components"},"When to break up a component into multiple components")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#how-to-use-forms-in-react"},"How to use Forms in React")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#etc"},"Etc"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%9B%B9-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%BA%90%EC%8B%9C-%EB%98%91%EB%98%91%ED%95%98%EA%B2%8C-%EB%8B%A4%EB%A3%A8%EA%B8%B0"},"웹 서비스 캐시 똑똑하게 다루기")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%9B%B9-%ED%91%9C%EC%A4%80-%EB%AF%B8%EB%8B%88%EC%95%B1%EC%9D%98-%EC%96%B4%EB%A0%A4%EC%9B%80"},"웹 표준 미니앱의 어려움")),"\n"),"\n"),"\n")))}var o,i,c,s,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},d=t(1880),h=t(3723),p=t(6758),u=t(3904),E=t(891),f=t(5534),v=t(5777),g=t(7178),b=t(2889),B=t(5924);function x(e){let{data:n,children:a}=e;const r=l.useRef(),{frontmatter:o,sameSeriesPosts:i}=n.mdx,{title:c,slug:s,date:m,tags:d,series:u,heroImage:E,heroImageAlt:f}=o,x=E?(0,h.c)(E):null;return l.useEffect((()=>{var e;const n=null===(e=r.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .mh h6"),t=new IntersectionObserver((()=>(0,B.Z)(r,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(p.Z,null,l.createElement(w,null,l.createElement("h1",null,c),l.createElement(k,null,m),l.createElement(b.Z,{tags:d})),l.createElement(g.Z,{name:u,data:i,current:s}),l.createElement(C,null,x?l.createElement(h.G,{image:x,alt:null!=f?f:""}):l.createElement(h.S,{src:"../../images/defaultThumbnail.jpeg",alt:"by ricale",__imageData:t(5076)})),l.createElement(y,{ref:r},a),l.createElement(v.Z,null))}const w=E.ZP.div(o||(o=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),C=E.ZP.div(i||(i=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n"]))),k=E.ZP.div(c||(c=(0,d.Z)(["\n  margin: 16px 0;\n"]))),y=(0,E.ZP)(f.Z)(s||(s=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),A=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:r,slug:o,tags:i,heroImage:c,previewContent:s},excerpt:m}=a.mdx,d=c?(0,h.c)(c):null;return l.createElement(u.Z,{title:r,description:null!=s?s:m,path:"posts/"+o,thumbnail:null==d||null===(n=d.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function S(e){return l.createElement(x,e,l.createElement(m,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l,r=t(5785),o=t(1880),i=t(891);const c=i.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding: 8px;\n        border-left: 1px solid #ddd;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,r.Z)(new Array(30)).map(((e,n)=>(0,i.iv)(l||(l=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=c},7178:function(e,n,t){var a,l,r,o,i,c=t(1880),s=t(7294),m=t(1883),d=t(891);const h=d.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),p=d.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),u=d.ZP.ol(r||(r=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),E=d.ZP.li(o||(o=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,d.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,r]=s.useState(!0);return t?s.createElement(h,null,s.createElement(p,{collapsed:l,onClick:()=>r((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(m.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!l&&s.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(E,{active:n===a,key:n},s.createElement(m.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return h}});var a,l=t(1880),r=t(7294),o=t(891),i=t(1883);const c=(0,o.ZP)(i.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,m=function(e){let{value:n}=e;return r.createElement(c,{to:"/tags/"+n},n)};const d=o.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var h=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return r.createElement(d,a,l.map((e=>r.createElement("li",{key:e.fieldValue},r.createElement(m,{value:e.fieldValue}),t&&!!e.totalCount&&r.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,r;if(!n)return;const o=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let i;for(let t=0;t<n.length;t++)if(n[t].offsetTop>o){var c;i=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===i&&(i=n[n.length-1]),null===(r=e.current)||void 0===r||r.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),i){var s;const n=i.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(s=e.current)||void 0===s?void 0:s.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var a=t(7294);const l=a.createContext({});function r(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},5076:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220929-read-writings-index-mdx-8134c55f3bbaef66578a.js.map