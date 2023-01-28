"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7332],{1705:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return B}});var a=t(1151),l=t(7294);function r(e){const n=Object.assign({div:"div",h3:"h3",a:"a",ul:"ul",li:"li",p:"p",h2:"h2",code:"code"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"toc"},l.createElement(n.h3,{id:"목차",style:{position:"relative"}},l.createElement(n.a,{href:"#%EB%AA%A9%EC%B0%A8","aria-label":"목차 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#javascript"},"JavaScript"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#javascript-symbol%EC%9D%98-%EA%B7%BC%ED%99%A9"},"JavaScript Symbol의 근황")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#how-return-await-can-slow-down-your-code"},"How return await can slow down your code")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#react"},"React"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#testing-overview---react"},"Testing Overview - React")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#file-based-routing-with-react-router"},"File-based routing with React Router")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#use-clamp-text"},"use-clamp-text")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#etc"},"Etc"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%9B%B9%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-rust-%EB%8F%8C%EB%A0%A4%EA%B9%8C%EA%B8%B0"},"웹프론트엔드 개발자의 Rust 돌려까기")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#refresh-token%EA%B3%BC-sliding-sessions%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-jwt%EC%9D%98-%EB%B3%B4%EC%95%88-%EC%A0%84%EB%9E%B5"},"Refresh Token과 Sliding Sessions를 활용한 JWT의 보안 전략")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#til-why-need-refresh-token"},"[TIL] Why need refresh token?")),"\n"),"\n"),"\n")),"\n",l.createElement(n.p,null,"이 글은 메일링, 블로그, 구글링 등을 통해 읽은 좋은 글들을 모아놓은 글이다."),"\n",l.createElement(n.h2,{id:"javascript",style:{position:"relative"}},l.createElement(n.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),"\n",l.createElement(n.h3,{id:"javascript-symbol의-근황",style:{position:"relative"}},l.createElement(n.a,{href:"#javascript-symbol%EC%9D%98-%EA%B7%BC%ED%99%A9","aria-label":"javascript symbol의 근황 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://meetup.toast.com/posts/312"},"JavaScript Symbol의 근황")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Symbol")," 에 대한 간략한 소개. 지나가다가 ",l.createElement(n.code,null,"Symbol.iterator"),"만 몇 번 본 적 있지 ",l.createElement(n.code,null,"Symbol")," 그 자체에 대해서는 무지했는데, 이 글을 통해 간략하게나마 알게 되었다. 훑어보기에 좋은 글이다."),"\n",l.createElement(n.h3,{id:"how-return-await-can-slow-down-your-code",style:{position:"relative"}},l.createElement(n.a,{href:"#how-return-await-can-slow-down-your-code","aria-label":"how return await can slow down your code permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://arthur.place/the-cost-of-return-await"},"How return await can slow down your code")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"return await someAsyncFunc()")," 형식의 사용이 성능 상 좋지 않은 점에 대해 설명하는 글."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// 1</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">doWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 2</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">dontWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 3</span>\n<span class="token keyword">function</span> <span class="token function">justReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"세 코드 모두 결과는 같다. 다만 퍼포먼스 관점에서는 3번이 제일 낫다. 왜냐하면 1, 2번 코드는 ",l.createElement(n.code,null,"work()")," 가 하는 일이 promise 이든 non-promise 이든, 무조건 이벤트 루프를 타기 때문이다."),"\n",l.createElement(n.p,null,"(사실 2번은 좀 명확하지 않다. 본문의 벤치마크 결과에서 ",l.createElement(n.code,null,"async () => await work()")," 가 느린 건 명확하게 나왔는데, 뜬금없이 다른 예를 ",l.createElement(n.code,null,"() => await work()"),"라고 표시하고 있기 때문이다. 문맥상 ",l.createElement(n.code,null,"async () => work()")," 의 오기일 것 같긴 하다.)"),"\n",l.createElement(n.p,null,"본문에는 위 내용에 더해 벤치마크 방법과 결과, 에러 핸들링 방식, eslint 로 1,2번 형식을 방지하는 방법 등이 나와있다. 읽어보기를 권한다."),"\n",l.createElement(n.h2,{id:"react",style:{position:"relative"}},l.createElement(n.a,{href:"#react","aria-label":"react permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React"),"\n",l.createElement(n.h3,{id:"testing-overview---react",style:{position:"relative"}},l.createElement(n.a,{href:"#testing-overview---react","aria-label":"testing overview   react permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://reactjs.org/docs/testing.html"},"Testing Overview - React")),"\n",l.createElement(n.p,null,"React 에서 테스트를 하고 싶다고? 그렇다면 멀리 갈 필요 없다. 공식 문서에 너무나도 잘 정리가 되어있다. 해당 문서인 오버뷰는 물론 하위 문서들도, 짧지만 알차게 작성되어 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactjs.org/docs/testing-recipes.html"},"Testing Recipes")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactjs.org/docs/testing-environments.html"},"Testing Environments")),"\n"),"\n",l.createElement(n.p,null,'그동안 "javascript test framework" 등으로 구글링만 하며 공식 문서를 무시했었던 과거를 반성해본다.'),"\n",l.createElement(n.p,null,"덧붙여 React Native 를 위한 공식 문서도 따로 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactnative.dev/docs/testing-overview"},"Testing - React Native")),"\n"),"\n",l.createElement(n.h3,{id:"file-based-routing-with-react-router",style:{position:"relative"}},l.createElement(n.a,{href:"#file-based-routing-with-react-router","aria-label":"file based routing with react router permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://omarelhawary.me/blog/file-based-routing-with-react-router"},"File-based routing with React Router")),"\n",l.createElement(n.p,null,"Next.js 없이 file-based 라우팅을 구현하는 글. 문제는 CRA나 Webpack dev server 없이, ",l.createElement(n.a,{href:"https://vitejs.dev/"},"Vite")," 라는 툴을 사용해야 하는 것 정도."),"\n",l.createElement(n.p,null,"Vite 의 ",l.createElement(n.a,{href:"https://vitejs.dev/guide/features.html#glob-import"},"Glob Import")," 기능이 주요하게 쓰인다. Vite 없이 이 기능만 쓸 수 없나 하고 구글링을 좀 해보았는데 찾지 못했다. 그나마 비슷한 게 ",l.createElement(n.a,{href:"https://github.com/terpiljenya/import-glob"},"import-glob")," 정도. 이 코드를 참고해 Webpack loader 를 직접 구현해야 하지 않을까 싶다."),"\n",l.createElement(n.p,null,"이 글은 시리즈 중 첫 편이다. 시리즈의 다른 글들도 천천히 살펴 볼 생각이다."),"\n",l.createElement(n.h3,{id:"use-clamp-text",style:{position:"relative"}},l.createElement(n.a,{href:"#use-clamp-text","aria-label":"use clamp text permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://github.com/drenther/use-clamp-text"},"use-clamp-text")),"\n",l.createElement(n.p,null,"여러 줄의 문자열을 원하는 줄 수 만큼만 보여주고 생략처리를 해주는 라이브러리(hook). 코드가 길지 않아서 (173라인) 천천히 읽어봐도 괜찮다. 내부적으로 이진 탐색을 사용했다."),"\n",l.createElement(n.h2,{id:"etc",style:{position:"relative"}},l.createElement(n.a,{href:"#etc","aria-label":"etc permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Etc"),"\n",l.createElement(n.h3,{id:"웹프론트엔드-개발자의-rust-돌려까기",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%9B%B9%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-rust-%EB%8F%8C%EB%A0%A4%EA%B9%8C%EA%B8%B0","aria-label":"웹프론트엔드 개발자의 rust 돌려까기 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://boostbrothers.notion.site/Rust-aefb960939804ef898f07a944651d23c"},"웹프론트엔드 개발자의 Rust 돌려까기")),"\n",l.createElement(n.p,null,"Rust 를 사용?학습?해 본 프론트엔드 개발자의 후기. GC 가 없고 소유권이라는 개념을 사용하며 진입장벽이 높다고 한다. 나중에 한 번 학습해봐야겠다."),"\n",l.createElement(n.h3,{id:"refresh-token과-sliding-sessions를-활용한-jwt의-보안-전략",style:{position:"relative"}},l.createElement(n.a,{href:"#refresh-token%EA%B3%BC-sliding-sessions%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-jwt%EC%9D%98-%EB%B3%B4%EC%95%88-%EC%A0%84%EB%9E%B5","aria-label":"refresh token과 sliding sessions를 활용한 jwt의 보안 전략 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://blog.ull.im/engineering/2019/02/07/jwt-strategy.html"},"Refresh Token과 Sliding Sessions를 활용한 JWT의 보안 전략")),"\n",l.createElement(n.p,null,"JWT 토큰을 사용해 세션을 관리할 때 전략 별로 어떤 장단점이 있는지 정리한 글이다. 글에서 분류한 전략은 네 가지가 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Access Token 사용"),"\n",l.createElement(n.li,null,"Sliding Session 전략 + Access Token 사용"),"\n",l.createElement(n.li,null,"Access Token + Refresh Token 사용"),"\n",l.createElement(n.li,null,"Sliding Session 전략 + Access Token + Refresh Token 사용"),"\n"),"\n",l.createElement(n.p,null,"각 전략의 장단점은 본문에 잘 나와있다. 결론은 적용하려는 서비스의 특성에 맞게 올바른 전략을 사용해야 한다는 것이다."),"\n",l.createElement(n.h3,{id:"til-why-need-refresh-token",style:{position:"relative"}},l.createElement(n.a,{href:"#til-why-need-refresh-token","aria-label":"til why need refresh token permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://leonkong.cc/posts/til-jwt-and-refresh-token.html"},"[TIL] Why need refresh token?")),"\n",l.createElement(n.p,null,"Refresh Token 그 자체는 Access Token 과 같은 토큰일 뿐이다. Access Token 보다 보안상 우위에 있을 수는 없다. Refresh Token 의 보안은 서버 측에서 안전한 DB/store 에 저장하면서 관리해야지만 의미가 있다."),"\n",l.createElement(n.p,null,"라는 내용이다."))}var o,s,c,i,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},u=t(1880),h=t(3723),p=t(1858),d=t(3904),E=t(891),f=t(5534),g=t(5777),v=t(7178),b=t(2889);function k(e){let{data:n,children:t}=e;const{frontmatter:a,sameSeriesPosts:r}=n.mdx,{title:o,slug:s,date:c,tags:i,series:m,heroImage:u,heroImageAlt:d}=a,E=u?(0,h.c)(u):null;return l.createElement(p.Z,null,l.createElement(w,null,l.createElement("h1",null,o),l.createElement(y,null,c),l.createElement(b.Z,{tags:i})),l.createElement(v.Z,{name:m,data:r,current:s}),!!E&&l.createElement(x,{image:E,alt:null!=d?d:""}),l.createElement(S,null,t),l.createElement(g.Z,null))}const w=E.ZP.div(o||(o=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),x=(0,E.ZP)(h.G)(s||(s=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),y=E.ZP.div(c||(c=(0,u.Z)(["\n  margin: 16px 0;\n"]))),S=(0,E.ZP)(f.Z)(i||(i=(0,u.Z)(["\n  margin-bottom: 60px;\n"]))),C=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:r,slug:o,tags:s,heroImage:c,previewContent:i},excerpt:m}=a.mdx,u=c?(0,h.c)(c):null;return l.createElement(d.Z,{title:r,description:null!=i?i:m,path:"posts/"+o,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:s,ogType:"article"})};function B(e){return l.createElement(k,e,l.createElement(m,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l=t(1880);const r=t(891).ZP.div(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  .toc {\n    margin: 0 16px 16px;\n    padding: 16px 0 0 16px;\n    background-color: #1a1a1a;\n    > h3 {\n      margin: 0;\n      font-size: 1.125rem;\n    }\n    > ul {\n      position: relative;\n      margin: 0;\n      padding: 8px 0 16px 20px;\n\n      font-size: 1rem;\n      list-style: none;\n\n      a {\n        color: #dddddd;\n      }\n\n      ul {\n        list-style: none;\n        padding-left: 30px;\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=r},7178:function(e,n,t){var a,l,r,o,s,c=t(1880),i=t(7294),m=t(1883),u=t(891);const h=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),p=u.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),d=u.ZP.ol(r||(r=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),E=u.ZP.li(o||(o=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(s||(s=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,r]=i.useState(!0);return t?i.createElement(h,null,i.createElement(p,{collapsed:l,onClick:()=>r((e=>!e))},i.createElement("h2",null,"시리즈 ",i.createElement(m.Link,{to:"/series/"+n+"/"},'"'+n+'"')),i.createElement("span",null,"▲")),!l&&i.createElement(d,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return i.createElement(E,{active:n===a,key:n},i.createElement(m.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return h}});var a,l=t(1880),r=t(7294),o=t(891),s=t(1883);const c=(0,o.ZP)(s.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var i,m=function(e){let{value:n}=e;return r.createElement(c,{to:"/tags/"+n},n)};const u=o.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var h=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return r.createElement(u,a,l.map((e=>r.createElement("li",{key:e.fieldValue},r.createElement(m,{value:e.fieldValue}),t&&!!e.totalCount&&r.createElement("sup",null,""+e.totalCount)))))}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var a=t(7294);const l=a.createContext({});function r(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220510-read-writings-index-mdx-718567aa1f4b8c989a8f.js.map