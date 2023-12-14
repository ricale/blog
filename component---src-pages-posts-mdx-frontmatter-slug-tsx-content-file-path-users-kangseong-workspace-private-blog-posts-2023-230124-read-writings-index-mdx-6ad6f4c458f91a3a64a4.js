"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7422],{2313:function(n,e,t){t.r(e),t.d(e,{Head:function(){return S},default:function(){return y}});var a=t(1151),o=t(7294);function l(n){const e=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",button:"button",code:"code",ul:"ul",li:"li"},(0,a.ah)(),n.components);return o.createElement(o.Fragment,null,o.createElement(e.div,{className:"md"},o.createElement(e.h2,{id:"react",style:{position:"relative"}},o.createElement(e.a,{href:"#react","aria-label":"react permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React"),o.createElement(e.h3,{id:"번역-리액트-상호-작용-시간-4배-향상하기",style:{position:"relative"}},o.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%83%81%ED%98%B8-%EC%9E%91%EC%9A%A9-%EC%8B%9C%EA%B0%84-4%EB%B0%B0-%ED%96%A5%EC%83%81%ED%95%98%EA%B8%B0","aria-label":"번역 리액트 상호 작용 시간 4배 향상하기 permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://velog.io/@superlipbalm/improving-react-interaction-times-by-4x"},"(번역) 리액트 상호 작용 시간 4배 향상하기")),o.createElement(e.p,null,"원문 저자가 본인의 서비스에서 React 성능 문제를 개선했던 경험에 대한 글이다. 대체로 AG Grid 라는 라이브러리에 의한 과도한 리렌더링으로 인해 발생하는 이슈들이었다. 크롬 개발자 도구와 리엑트 프로파일러를 이용해 이슈를 추적하고 확인한 뒤 해결하는 과정이 재미있고 유익하다."),o.createElement(e.h3,{id:"the-ugliest-pattern-in-react",style:{position:"relative"}},o.createElement(e.a,{href:"#the-ugliest-pattern-in-react","aria-label":"the ugliest pattern in react permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://sebastiancarlos.com/the-ugliest-pattern-in-react-%EF%B8%8F-adjusting-state-in-response-to-rendering-e8f651fa958b"},"The Ugliest Pattern In React")),o.createElement(e.p,null,o.createElement(e.a,{href:"https://beta.reactjs.org/reference/react/useState#storing-information-from-previous-renders"},"React 공식 문서"),"에서 추천한 아래 코드를 비판하는 글이다."),o.createElement(e.div,{className:"codeblock-container"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="jsx"><pre class="language-jsx"><code class="language-jsx"><span class="token keyword">function</span> <span class="token function">CountLabel</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>prevCount<span class="token punctuation">,</span> setPrevCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>trend<span class="token punctuation">,</span> setTrend<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>prevCount <span class="token operator">!==</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setPrevCount</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTrend</span><span class="token punctuation">(</span>count <span class="token operator">></span> prevCount <span class="token operator">?</span> <span class="token string">"increasing"</span> <span class="token operator">:</span> <span class="token string">"decreasing"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>trend <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">The count is </span><span class="token punctuation">{</span>trend<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),o.createElement(e.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(e.p,null,o.createElement(e.code,null,"useEffect")," 를 사용해서 prop 의존적인 state 를 수정할 경우 자식 컴포넌트들도 두 번 더 렌더링되므로, 위 방법을 사용하라는 것이었다."),o.createElement(e.p,null,"이에 대해 저자는 가독성도 없고 순수 함수 규칙마저 어긴다며 최악이라고 말하고 있다."),o.createElement(e.p,null,"음.. 나도 쓰고 싶지 않은 코드다."),o.createElement(e.h2,{id:"javascript",style:{position:"relative"}},o.createElement(e.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),o.createElement(e.h3,{id:"promise는-왜-취소가-안-될까",style:{position:"relative"}},o.createElement(e.a,{href:"#promise%EB%8A%94-%EC%99%9C-%EC%B7%A8%EC%86%8C%EA%B0%80-%EC%95%88-%EB%90%A0%EA%B9%8C","aria-label":"promise는 왜 취소가 안 될까 permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://tech.kakao.com/2023/01/11/promise-cancelation-in-javascript/"},"Promise는 왜 취소가 안 될까?")),o.createElement(e.p,null,"Promise 취소 기능의 표준 지정과 관련된 역사와, 본인이 맡은 서비스에서는 취소 기능을 어떻게 구현했는지 설명하는 글. 쉽게 잘 읽힌다."),o.createElement(e.h3,{id:"reasons-to-avoid-javascript-cdns",style:{position:"relative"}},o.createElement(e.a,{href:"#reasons-to-avoid-javascript-cdns","aria-label":"reasons to avoid javascript cdns permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://blog.wesleyac.com/posts/why-not-javascript-cdn"},"Reasons to avoid Javascript CDNs")),o.createElement(e.p,null,"웹페이지/웹앱의 자바스크립트 파일을 저장할 곳으로 CDN 사용을 피해야 하는 이유에 대해 설명하는 글."),o.createElement(e.p,null,"분명 CDN은 쉽게 사용할 수 있고 빠르다고들 말하긴 하지만, 그 못지 않은 단점이 있다고 말한다. 요약하면 아래와 같다."),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,"프라이버시: CDN 서비스들은 개인이 어느 사이트들에 방문했는지 추적할 수 있다."),"\n",o.createElement(e.li,null,"속도: 대체로 CDN 이 빠르지만 일부 경우에는 오히려 CDN 이 느릴 수 있다. (특히 자바스크립 파일 용량이 작을 경우)"),"\n",o.createElement(e.li,null,"보안: CDN 을 통한 해커의 공격에 노출될 수 있다. ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"},"SRI")," 로 보안이 어느정도 해결 가능하지만, 이는 한 라이브러리를 여러 파일로 나눠 관리할 때 제대로 적용되지 않는 허점이 있다."),"\n",o.createElement(e.li,null,"시스템적 위험: (AWS 나 cloudflare 가 그랬던 것처럼) CDN 서비스가 장애에 빠지면 전세계 웹의 큰 부분이 다운될 수 있다."),"\n"),o.createElement(e.p,null,"그리고 작성자는 특별한 이유가 없다면 CDN 보다는 웹페이지와 같은 서버에서 자바스크립트 파일을 관리하는 게 좋다고 글을 마무리한다."),o.createElement(e.p,null,"자세한 내용은 본문을 참고하자."),o.createElement(e.h3,{id:"번역-당신이-모르는-자바스크립트의-메모리-누수의-비밀",style:{position:"relative"}},o.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EB%AA%A8%EB%A5%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98%EC%9D%98-%EB%B9%84%EB%B0%80","aria-label":"번역 당신이 모르는 자바스크립트의 메모리 누수의 비밀 permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://ui.toast.com/posts/ko_20210611"},"[번역] 당신이 모르는 자바스크립트의 메모리 누수의 비밀")),o.createElement(e.p,null,"메모리 누수가 생기는 대표적인 상황들을 크롬 개발자도구로 확인해보는 글이다. 글에서 확인하는 대표적인 메모리 누수 케이스는 아래와 같다."),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,"클로저"),"\n",o.createElement(e.li,null,"전역변수"),"\n",o.createElement(e.li,null,"DOM 노드 삭제"),"\n",o.createElement(e.li,null,o.createElement(e.code,null,"console")," 모듈"),"\n",o.createElement(e.li,null,"타이머"),"\n"),o.createElement(e.p,null,"메모리 누수 케이스도 케이스지만 크롬 개발자도구의 기능으로 메모리 누수를 추적하는 과정이 매우 유익하다."),o.createElement(e.h2,{id:"css",style:{position:"relative"}},o.createElement(e.a,{href:"#css","aria-label":"css permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CSS"),o.createElement(e.h3,{id:"3d-in-css",style:{position:"relative"}},o.createElement(e.a,{href:"#3d-in-css","aria-label":"3d in css permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),o.createElement(e.a,{href:"https://garden.bradwoods.io/notes/css/3d"},"3D in CSS")),o.createElement(e.p,null,"CSS 의 ",o.createElement(e.code,null,"perspective")," 와 ",o.createElement(e.code,null,"transform")," 을 사용해서 3D 애니메이션을 적용하는 방법에 대한 글. 내용도 내용이지만, (값을 즉석에서 바꿔가며 확인해볼 수 있는) 예제들이 훌륭하다.")),"\n",o.createElement(e.div,{className:"toc"},o.createElement(e.p,null,"목차"),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#react"},"React"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%83%81%ED%98%B8-%EC%9E%91%EC%9A%A9-%EC%8B%9C%EA%B0%84-4%EB%B0%B0-%ED%96%A5%EC%83%81%ED%95%98%EA%B8%B0"},"(번역) 리액트 상호 작용 시간 4배 향상하기")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#the-ugliest-pattern-in-react"},"The Ugliest Pattern In React")),"\n"),"\n"),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#javascript"},"JavaScript"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#promise%EB%8A%94-%EC%99%9C-%EC%B7%A8%EC%86%8C%EA%B0%80-%EC%95%88-%EB%90%A0%EA%B9%8C"},"Promise는 왜 취소가 안 될까?")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#reasons-to-avoid-javascript-cdns"},"Reasons to avoid Javascript CDNs")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#%EB%B2%88%EC%97%AD-%EB%8B%B9%EC%8B%A0%EC%9D%B4-%EB%AA%A8%EB%A5%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98%EC%9D%98-%EB%B9%84%EB%B0%80"},"[번역] 당신이 모르는 자바스크립트의 메모리 누수의 비밀")),"\n"),"\n"),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#css"},"CSS"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#3d-in-css"},"3D in CSS")),"\n"),"\n"),"\n")))}var s,r,c,i=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?o.createElement(e,n,o.createElement(l,n)):l(n)},p=t(1880),d=t(1883),u=t(3723),m=t(9178),h=t(3904),g=t(891),E=t(3234),v=t(6117),f=t(5777),k=t(7178),b=t(5924);function x(n){let{data:e,children:t}=n;const a=o.useRef(),{frontmatter:l,sameSeriesPosts:s}=e.mdx,{title:r,slug:c,date:i,series:p}=l;return o.useEffect((()=>{var n;const e=null===(n=a.current)||void 0===n?void 0:n.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,b.Z)(a,e)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==e||e.forEach((n=>t.observe(n))),()=>t.disconnect()}),[]),o.createElement(m.Z,null,o.createElement(B,null,o.createElement("h1",null,o.createElement(d.Link,{to:"/posts/"+c},r)),o.createElement(C,null,i)),o.createElement(k.Z,{name:p,data:s,current:c}),o.createElement(A,{ref:a},t),o.createElement(v.Z,{data:s,current:c}),o.createElement(f.Z,null))}const B=g.ZP.div(s||(s=(0,p.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.onBackground)),C=g.ZP.div(r||(r=(0,p.Z)(["\n  margin-left: 2px;\n"]))),A=(0,g.ZP)(E.Z)(c||(c=(0,p.Z)(["\n  margin-bottom: 120px;\n"]))),S=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:l,slug:s,tags:r,heroImage:c,previewContent:i},excerpt:p}=a.mdx,d=c?(0,u.c)(c):null;return o.createElement(h.Z,{title:l,description:null!=i?i:p,path:"posts/"+s,thumbnail:null==d||null===(e=d.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function y(n){return o.createElement(x,n,o.createElement(i,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},3234:function(n,e,t){t.d(e,{Z:function(){return B}});var a,o=t(1880),l=t(891);var s,r=(0,l.iv)(a||(a=(0,o.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder));var c,i=(0,l.iv)(s||(s=(0,o.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(n=>n.theme.colors.codeblockHighlightBorder),(n=>n.theme.colors.codeblockHighlight),(n=>n.theme.colors.codeblockTitle),(n=>n.theme.colors.codeblockCopyButtonLabel),(n=>n.theme.colors.codeblockTitleInMobile));var p,d=(0,l.iv)(c||(c=(0,o.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.75em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(n=>n.theme.colors.headingBorder),(n=>n.theme.colors.headingBorder));var u,m=(0,l.iv)(p||(p=(0,o.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  img:not([class]) {\n    max-width: 600px;\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(n=>n.theme.colors.imageBorder),(n=>n.theme.colors.imageCaptionText));var h,g=(0,l.iv)(u||(u=(0,o.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var E,v,f=(0,l.iv)(h||(h=(0,o.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(n=>n.theme.colors.tableBorder)),k=t(5785);var b,x=(0,l.iv)(E||(E=(0,o.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground),(0,k.Z)(new Array(20)).map(((n,e)=>(0,l.iv)(v||(v=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(e+1),(1100+20*e-800)/2))),1100);var B=l.ZP.div(b||(b=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),d,g,m,x,i,r,f,(n=>n.theme.colors.hr),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode))},6117:function(n,e,t){t.d(e,{Z:function(){return E}});var a,o,l,s=t(1880),r=t(7294),c=t(891),i=t(1883);const p=(0,c.ZP)(i.Link)(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: ",";\n\n  max-width: 100%;\n  padding: 16px;\n\n  background-color: ",";\n\n  &:hover {\n    text-decoration: none;\n  }\n"])),(n=>n.next?"flex-end":"flex-start"),(n=>n.theme.colors.nearbyPostLink)),d=c.ZP.div(o||(o=(0,s.Z)(["\n  font-size: 0.75rem;\n  color: ",";\n"])),(n=>n.theme.colors.onNearbyPostLink)),u=c.ZP.div(l||(l=(0,s.Z)(["\n  max-width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"])));var m,h=function(n){let{title:e,slug:t,desc:a,...o}=n;return r.createElement(p,Object.assign({},o,{to:"/posts/"+t}),r.createElement(d,null,a),r.createElement(u,null,e))};const g=c.ZP.div(m||(m=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n\n  margin: 120px 0;\n\n  & > div {\n    display: flex;\n    flex-direction: column;\n\n    overflow: hidden;\n  }\n  & > :nth-child(1) {\n    align-items: flex-start;\n  }\n  & > :nth-child(2) {\n    align-items: flex-end;\n  }\n"])));var E=function(n){var e,t;let{data:a,current:o}=n;if(!a)return null;const l=a.findIndex((n=>n.frontmatter.slug===o)),s=null===(e=a[l-1])||void 0===e?void 0:e.frontmatter,c=null===(t=a[l+1])||void 0===t?void 0:t.frontmatter;return r.createElement(g,null,r.createElement("div",null,!!s&&r.createElement(h,Object.assign({},s,{desc:"❮ 시리즈 이전글"}))),r.createElement("div",null,!!c&&r.createElement(h,Object.assign({},c,{next:!0,desc:"시리즈 다음글 ❯"}))))}},7178:function(n,e,t){var a,o,l,s,r,c=t(1880),i=t(7294),p=t(1883),d=t(891);const u=d.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(n=>n.theme.colors.sameSereisPosts)),m=d.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n    transition: transform 0.2s;\n  }\n"])),(n=>n.theme.colors.onBackground),(n=>n.collapsed?0:180)),h=d.ZP.ol(l||(l=(0,c.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(n=>n.theme.colors.background)),g=d.ZP.li(s||(s=(0,c.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.active&&(0,d.iv)(r||(r=(0,c.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[o,l]=i.useState(!0);return t?i.createElement(u,null,i.createElement(m,{collapsed:o,onClick:()=>l((n=>!n))},i.createElement("h2",null,i.createElement(p.Link,{to:"/series/"+e+"/"},'시리즈 "'+e+'"')),i.createElement("span",null,"▲")),!o&&i.createElement(h,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return i.createElement(g,{active:e===a,key:e},i.createElement(p.Link,{to:"/posts/"+e},t))})))):null}},5924:function(n,e){const t="highlight";e.Z=function(n,e){var a,o,l;if(!e)return;const s=document.documentElement.scrollTop+10-(null!==(a=null===(o=n.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let r;for(let t=0;t<e.length;t++)if(e[t].offsetTop>s){var c;r=null!==(c=e[t-1])&&void 0!==c?c:null;break}if(void 0===r&&(r=e[e.length-1]),null===(l=n.current)||void 0===l||l.querySelectorAll(".highlight").forEach((n=>n.classList.remove(t))),r){var i;const e=r.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=e?e:"")+"']",o=null===(i=n.current)||void 0===i?void 0:i.querySelector(a);null==o||o.classList.add(t)}}},1151:function(n,e,t){t.d(e,{ah:function(){return l}});var a=t(7294);const o=a.createContext({});function l(n){const e=a.useContext(o);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2023-230124-read-writings-index-mdx-6ad6f4c458f91a3a64a4.js.map