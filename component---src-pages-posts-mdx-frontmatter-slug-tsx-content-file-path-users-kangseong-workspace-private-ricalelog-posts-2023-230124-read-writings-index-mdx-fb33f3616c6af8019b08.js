"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[6678],{3389:function(n,e,t){t.r(e),t.d(e,{Head:function(){return S},default:function(){return y}});var a=t(1151),s=t(7294);function l(n){const e=Object.assign({div:"div",h3:"h3",a:"a",ul:"ul",li:"li",h2:"h2",p:"p",code:"code"},(0,a.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.div,{className:"toc"},s.createElement(e.h3,{id:"목차",style:{position:"relative"}},s.createElement(e.a,{href:"#%EB%AA%A9%EC%B0%A8","aria-label":"목차 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"목차"),s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#react"},"React"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%83%81%ED%98%B8-%EC%9E%91%EC%9A%A9-%EC%8B%9C%EA%B0%84-4%EB%B0%B0-%ED%96%A5%EC%83%81%ED%95%98%EA%B8%B0"},"(번역) 리액트 상호 작용 시간 4배 향상하기")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#the-ugliest-pattern-in-react"},"The Ugliest Pattern In React")),"\n"),"\n"),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#javascript"},"JavaScript"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#promise%EB%8A%94-%EC%99%9C-%EC%B7%A8%EC%86%8C%EA%B0%80-%EC%95%88-%EB%90%A0%EA%B9%8C"},"Promise는 왜 취소가 안 될까?")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#reasons-to-avoid-javascript-cdns"},"Reasons to avoid Javascript CDNs")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EB%AA%A8%EB%A5%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98%EC%9D%98-%EB%B9%84%EB%B0%80"},"[번역] 당신이 모르는 자바스크립트의 메모리 누수의 비밀")),"\n"),"\n"),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#css"},"CSS"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#3d-in-css"},"3D in CSS")),"\n"),"\n"),"\n")),"\n",s.createElement(e.h2,{id:"react",style:{position:"relative"}},s.createElement(e.a,{href:"#react","aria-label":"react permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React"),"\n",s.createElement(e.h3,{id:"번역-리액트-상호-작용-시간-4배-향상하기",style:{position:"relative"}},s.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%83%81%ED%98%B8-%EC%9E%91%EC%9A%A9-%EC%8B%9C%EA%B0%84-4%EB%B0%B0-%ED%96%A5%EC%83%81%ED%95%98%EA%B8%B0","aria-label":"번역 리액트 상호 작용 시간 4배 향상하기 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://velog.io/@superlipbalm/improving-react-interaction-times-by-4x?utm_source=substack&utm_medium=email"},"(번역) 리액트 상호 작용 시간 4배 향상하기")),"\n",s.createElement(e.p,null,"원문 저자가 본인의 서비스에서 React 성능 문제를 개선했던 경험에 대한 글이다. 대체로 AG Grid 라는 라이브러리에 의한 과도한 리렌더링으로 인해 발생하는 이슈들이었다. 크롬 개발자 도구와 리엑트 프로파일러를 이용해 이슈를 추적하고 확인한 뒤 해결하는 과정이 재미있고 유익하다."),"\n",s.createElement(e.h3,{id:"the-ugliest-pattern-in-react",style:{position:"relative"}},s.createElement(e.a,{href:"#the-ugliest-pattern-in-react","aria-label":"the ugliest pattern in react permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://sebastiancarlos.com/the-ugliest-pattern-in-react-%EF%B8%8F-adjusting-state-in-response-to-rendering-e8f651fa958b"},"The Ugliest Pattern In React")),"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://beta.reactjs.org/reference/react/useState#storing-information-from-previous-renders"},"React 공식 문서"),"에서 추천한 아래 코드를 비판하는 글이다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">CountLabel</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>prevCount<span class="token punctuation">,</span> setPrevCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>trend<span class="token punctuation">,</span> setTrend<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevCount <span class="token operator">!==</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setPrevCount</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTrend</span><span class="token punctuation">(</span>count <span class="token operator">></span> prevCount <span class="token operator">?</span> <span class="token string">"increasing"</span> <span class="token operator">:</span> <span class="token string">"decreasing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>trend <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">The count is </span><span class="token punctuation">{</span>trend<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,s.createElement(e.code,null,"useEffect")," 를 사용해서 prop 의존적인 state 를 수정할 경우 자식 컴포넌트들도 두 번 더 렌더링되므로, 위 방법을 사용하라는 것이었다."),"\n",s.createElement(e.p,null,"이에 대해 저자는 가독성도 없고 순수 함수 규칙마저 어긴다며 최악이라고 말하고 있다."),"\n",s.createElement(e.p,null,"음.. 나도 쓰고 싶지 않은 코드다."),"\n",s.createElement(e.h2,{id:"javascript",style:{position:"relative"}},s.createElement(e.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),"\n",s.createElement(e.h3,{id:"promise는-왜-취소가-안-될까",style:{position:"relative"}},s.createElement(e.a,{href:"#promise%EB%8A%94-%EC%99%9C-%EC%B7%A8%EC%86%8C%EA%B0%80-%EC%95%88-%EB%90%A0%EA%B9%8C","aria-label":"promise는 왜 취소가 안 될까 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://tech.kakao.com/2023/01/11/promise-cancelation-in-javascript/"},"Promise는 왜 취소가 안 될까?")),"\n",s.createElement(e.p,null,"Promise 취소 기능의 표준 지정과 관련된 역사와, 본인이 맡은 서비스에서는 취소 기능을 어떻게 구현했는지 설명하는 글. 쉽게 잘 읽힌다."),"\n",s.createElement(e.h3,{id:"reasons-to-avoid-javascript-cdns",style:{position:"relative"}},s.createElement(e.a,{href:"#reasons-to-avoid-javascript-cdns","aria-label":"reasons to avoid javascript cdns permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://blog.wesleyac.com/posts/why-not-javascript-cdn"},"Reasons to avoid Javascript CDNs")),"\n",s.createElement(e.p,null,"웹페이지/웹앱의 자바스크립트 파일을 저장할 곳으로 CDN 사용을 피해야 하는 이유에 대해 설명하는 글."),"\n",s.createElement(e.p,null,"분명 CDN은 쉽게 사용할 수 있고 빠르다고들 말하긴 하지만, 그 못지 않은 단점이 있다고 말한다. 요약하면 아래와 같다."),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"프라이버시: CDN 서비스들은 개인이 어느 사이트들에 방문했는지 추적할 수 있다."),"\n",s.createElement(e.li,null,"속도: 대체로 CDN 이 빠르지만 일부 경우에는 오히려 CDN 이 느릴 수 있다. (특히 자바스크립 파일 용량이 작을 경우)"),"\n",s.createElement(e.li,null,"보안: CDN 을 통한 해커의 공격에 노출될 수 있다. ",s.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"},"SRI")," 로 보안이 어느정도 해결 가능하지만, 이는 한 라이브러리를 여러 파일로 나눠 관리할 때 제대로 적용되지 않는 허점이 있다."),"\n",s.createElement(e.li,null,"시스템적 위험: (AWS 나 cloudflare 가 그랬던 것처럼) CDN 서비스가 장애에 빠지면 전세계 웹의 큰 부분이 다운될 수 있다."),"\n"),"\n",s.createElement(e.p,null,"그리고 작성자는 특별한 이유가 없다면 CDN 보다는 웹페이지와 같은 서버에서 자바스크립트 파일을 관리하는 게 좋다고 글을 마무리한다."),"\n",s.createElement(e.p,null,"자세한 내용은 본문을 참고하자."),"\n",s.createElement(e.h3,{id:"번역-당신이-모르는-자바스크립트의-메모리-누수의-비밀",style:{position:"relative"}},s.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EB%AA%A8%EB%A5%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98%EC%9D%98-%EB%B9%84%EB%B0%80","aria-label":"번역 당신이 모르는 자바스크립트의 메모리 누수의 비밀 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://ui.toast.com/posts/ko_20210611"},"[번역] 당신이 모르는 자바스크립트의 메모리 누수의 비밀")),"\n",s.createElement(e.p,null,"메모리 누수가 생기는 대표적인 상황들을 크롬 개발자도구로 확인해보는 글이다. 글에서 확인하는 대표적인 메모리 누수 케이스는 아래와 같다."),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"클로저"),"\n",s.createElement(e.li,null,"전역변수"),"\n",s.createElement(e.li,null,"DOM 노드 삭제"),"\n",s.createElement(e.li,null,s.createElement(e.code,null,"console")," 모듈"),"\n",s.createElement(e.li,null,"타이머"),"\n"),"\n",s.createElement(e.p,null,"메모리 누수 케이스도 케이스지만 크롬 개발자도구의 기능으로 메모리 누수를 추적하는 과정이 매우 유익하다."),"\n",s.createElement(e.h2,{id:"css",style:{position:"relative"}},s.createElement(e.a,{href:"#css","aria-label":"css permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CSS"),"\n",s.createElement(e.h3,{id:"3d-in-css",style:{position:"relative"}},s.createElement(e.a,{href:"#3d-in-css","aria-label":"3d in css permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.a,{href:"https://garden.bradwoods.io/notes/css/3d"},"3D in CSS")),"\n",s.createElement(e.p,null,"CSS 의 ",s.createElement(e.code,null,"perspective")," 와 ",s.createElement(e.code,null,"transform")," 을 사용해서 3D 애니메이션을 적용하는 방법에 대한 글. 내용도 내용이지만, (값을 즉석에서 바꿔가며 확인해볼 수 있는) 예제들이 훌륭하다."))}var o,c,r,i,p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?s.createElement(e,n,s.createElement(l,n)):l(n)},u=t(1880),m=t(3723),d=t(1858),h=t(3904),E=t(891),g=t(5534),v=t(5777),f=t(7178),k=t(2889);function C(n){let{data:e,children:t}=n;const{frontmatter:a,sameSeriesPosts:l}=e.mdx,{title:o,slug:c,date:r,tags:i,series:p,heroImage:u,heroImageAlt:h}=a,E=u?(0,m.c)(u):null;return s.createElement(d.Z,null,s.createElement(b,null,s.createElement("h1",null,o),s.createElement(x,null,r),s.createElement(k.Z,{tags:i})),s.createElement(f.Z,{name:p,data:l,current:c}),!!E&&s.createElement(B,{image:E,alt:null!=h?h:""}),s.createElement(A,null,t),s.createElement(v.Z,null))}const b=E.ZP.div(o||(o=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),B=(0,E.ZP)(m.G)(c||(c=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),x=E.ZP.div(r||(r=(0,u.Z)(["\n  margin: 16px 0;\n"]))),A=(0,E.ZP)(g.Z)(i||(i=(0,u.Z)(["\n  margin-bottom: 60px;\n"]))),S=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:l,slug:o,tags:c,heroImage:r,previewContent:i},excerpt:p}=a.mdx,u=r?(0,m.c)(r):null;return s.createElement(h.Z,{title:l,description:null!=i?i:p,path:"posts/"+o,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function y(n){return s.createElement(C,n,s.createElement(p,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,s=t(1880);const l=t(891).ZP.div(a||(a=(0,s.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  .toc {\n    margin: 0 16px 16px;\n    padding: 16px 0 0 16px;\n    background-color: #1a1a1a;\n    > h3 {\n      margin: 0;\n      font-size: 1.125rem;\n    }\n    > ul {\n      position: relative;\n      margin: 0;\n      padding: 8px 0 16px 20px;\n\n      font-size: 1rem;\n      list-style: none;\n\n      a {\n        color: #dddddd;\n      }\n\n      ul {\n        list-style: none;\n        padding-left: 30px;\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=l},7178:function(n,e,t){var a,s,l,o,c,r=t(1880),i=t(7294),p=t(1883),u=t(891);const m=u.ZP.div(a||(a=(0,r.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(s||(s=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),h=u.ZP.ol(l||(l=(0,r.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),E=u.ZP.li(o||(o=(0,r.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(c||(c=(0,r.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[s,l]=i.useState(!0);return t?i.createElement(m,null,i.createElement(d,{collapsed:s,onClick:()=>l((n=>!n))},i.createElement("h2",null,"시리즈 ",i.createElement(p.Link,{to:"/series/"+e+"/"},'"'+e+'"')),i.createElement("span",null,"▲")),!s&&i.createElement(h,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return i.createElement(E,{active:e===a,key:e},i.createElement(p.Link,{to:"/posts/"+e},t))})))):null}},2889:function(n,e,t){t.d(e,{Z:function(){return m}});var a,s=t(1880),l=t(7294),o=t(891),c=t(1883);const r=(0,o.ZP)(c.Link)(a||(a=(0,s.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));var i,p=function(n){let{value:e}=n;return l.createElement(r,{to:"/tags/"+e},e)};const u=o.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));var m=function(n){let{tags:e,showCount:t,...a}=n;const s="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return l.createElement(u,a,s.map((n=>l.createElement("li",{key:n.fieldValue},l.createElement(p,{value:n.fieldValue}),t&&!!n.totalCount&&l.createElement("sup",null,""+n.totalCount)))))}},1151:function(n,e,t){t.d(e,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230124-read-writings-index-mdx-fb33f3616c6af8019b08.js.map