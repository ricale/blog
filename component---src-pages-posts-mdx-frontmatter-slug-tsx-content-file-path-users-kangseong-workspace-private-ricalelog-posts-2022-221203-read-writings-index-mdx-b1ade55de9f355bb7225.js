"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1271],{5213:function(n,a,t){t.r(a),t.d(a,{Head:function(){return C},default:function(){return j}});var s=t(1151),e=t(7294);function l(n){const a=Object.assign({h2:"h2",h3:"h3",a:"a",p:"p",code:"code",div:"div",ul:"ul",li:"li"},(0,s.ah)(),n.components);return e.createElement(e.Fragment,null,e.createElement(a.h2,null,"JavaScript"),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://yceffort.kr/2021/09/javascript-random-number"},"자바스크립트에서 안전하게 난수 생성하는 방법")),"\n",e.createElement(a.p,null,e.createElement(a.code,null,"Math.random()")," 은 진짜 난수가 아닌 의사 난수를 생성하고, 이는 보안적으로 안전하지 않다. 따라서 안전한 난수를 생성하기 위해서는 ",e.createElement(a.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API")," 를 사용해야 한다."),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://velog.io/@sehyunny/what-is-realm-in-js"},"(번역) 자바스크립트에서 영역(realm)이란 무엇인가요?")),"\n",e.createElement(a.p,null,"자바스크립의 영역(Realm)에 대해 설명한 글."),"\n",e.createElement(a.p,null,'영역은 별도의 전역 실행 환경과 전역 객체, 고유 객체, 그리고 자바스크립트 코드를 갖는 영역을 말한다. 글에서는 "생태계"라고 표현하고 있다.'),"\n",e.createElement(a.p,null,"브라우저는 기본적으로 하나의 고유한 영역을 갖지만 두 개 이상의 영역을 가질 때도 있다. iframe 을 사용했을 때가 대표적인 예로, 부모와 iframe 은 서로 다른 영역을 갖게 된다."),"\n",e.createElement(a.p,null,"이 말은 각자 별도의 전역 실행 환경과 전역 객체, 고유 객체, 자바스크립트 코드를 갖는다는 말로, 그냥 봤을 때는 같아보이는 것이 다르게 판단될 수도 있다는 것이다."),"\n",e.createElement(a.p,null,"글에 나온 인상적인 예 하나를 첨부한다."),"\n",e.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue_buttons_iframe<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n      window<span class="token punctuation">.</span>top<span class="token punctuation">.</span><span class="token function-variable function">createBlueButton</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        button<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span>\n        button<span class="token punctuation">.</span>value <span class="token operator">=</span> text<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> button<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n      <span class="token keyword">const</span> blueButton <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">createBlueButton</span><span class="token punctuation">(</span><span class="token string">"my blue button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>blueButton <span class="token keyword">instanceof</span> <span class="token class-name">HTMLButtonElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// &lt;- 이 조건문의 결과는 true 다!</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n          <span class="token string">"blue button created does not seem to actually be a button element!"</span>\n        <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>blueButton<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b"},"Why We're Breaking Up with CSS-in-JS")),"\n",e.createElement(a.p,null,"CSS-in-JS (styled-components, emotionjs 같이 js 코드로 작성하는 CSS) 의 장단점을 소개하고, 글쓴이의 팀에서 왜 CSS-in-JS 를 버리고 CSS 로 갈아탔는지 설명하는 글."),"\n",e.createElement(a.p,null,"글에 나온 장단점을 요약하자면 아래와 같다."),"\n",e.createElement(a.p,null,"장점 (The Good)"),"\n",e.createElement(a.ul,null,"\n",e.createElement(a.li,null,"Locally-scoped 스타일"),"\n",e.createElement(a.li,null,"컴포넌트와 스타일을 한 파일에 묶어서 관리 (Colocation)"),"\n",e.createElement(a.li,null,"CSS 에 자바스크립트 변수 사용 가능"),"\n"),"\n",e.createElement(a.p,null,"단점 (The Bad)"),"\n",e.createElement(a.ul,null,"\n",e.createElement(a.li,null,"런타임 오버헤드 - CSS-in-JS 를 CSS 로 변환해 document 에 삽입하는 과정 필요"),"\n",e.createElement(a.li,null,"번들 사이즈를 늘림 - emotionjs, styled-components 등이 포함되어야 하니까"),"\n",e.createElement(a.li,null,"css() 를 사용하면 dev-tools 에서 확인할 때 컴포넌트 계층 구조가 지저분해짐"),"\n"),"\n",e.createElement(a.p,null,"나쁜점 (The Ugly)"),"\n",e.createElement(a.ul,null,"\n",e.createElement(a.li,null,"빈번한 CSS 삽입으로 인해 브라우저가 할 일이 늘어남"),"\n",e.createElement(a.li,null,"SSR 에 완벽한 대응이 안 됨 (상황에 따라 초기화가 제대로 안 되는 이슈가 있을 수 있음)"),"\n"),"\n",e.createElement(a.p,null,"결과적으로 글쓴이의 팀에서는 성능 때문에 CSS 로 갈아탔다고 하는데, 성능을 분석한 내용도 있으니 궁금하다면 본문을 참고하자."),"\n",e.createElement(a.h2,null,"HTML"),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://stackoverflow.com/questions/774054/should-i-put-input-elements-inside-a-label-element"},"Should I put input elements inside a label element?")),"\n",e.createElement(a.p,null,e.createElement(a.code,null,"<input />"),"과 ",e.createElement(a.code,null,"<label />")," 을 조합할 때 어떤 형식을 많이 쓰는지 궁금해서 검색하다가 본글."),"\n",e.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 1 --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myinput<span class="token punctuation">"</span></span>\n  <span class="token punctuation">></span></span>My Text\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myinput<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></code></pre></div>'}}),"\n",e.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="html"><pre class="language-html"><code class="language-html"><span class="token comment">&lt;!-- 2 --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myinput<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myinput<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre></div>'}}),"\n",e.createElement(a.p,null,"대부분은 2번을 선호하지만 id 를 생략할 수 있다는 이유로 1번을 쓰는 사람도 있는 모양이다."),"\n",e.createElement(a.h2,null,"Etc"),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://reactflow.dev/blog/reactflow-npm-package-name/"},"How we lost our slick new npm package name (and then got it back)")),"\n",e.createElement(a.p,null,"npm 의 ",e.createElement(a.a,{href:"https://blog.npmjs.org/post/168978377570/new-package-moniker-rules"},"비슷한 이름의 패키지는 등록할 수 없는 보안 정책")," 때문에, 양도받은 패키지를 날려버릴 뻔한 경험을 공유한 글이다. 이미 등록된 패키지는 해당 보안 정책의 영향을 받지 않는데, 글쓴이가 양도받은 패키지를 unpublish 하는 바람에 패키지가 내려갔고, 그래서 이미 있는 다른 비슷한 이름의 패키지 때문에 보안 정책에 걸려서 재등록이 불가능해진 것이다. (결국에는 npm 쪽과 이야기해서 잘 해결했다고 한다.)"),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://yozm.wishket.com/magazine/detail/1436/"},"개발자 경험(Dex)이 주목받는 시대")),"\n",e.createElement(a.p,null,'다른 글을 읽다가 자꾸 "DX"라는 말을 쓰길래, "DX"가 대체 뭐지 하고 찾아본 글. 개발자 경험 (Developer Experience) 을 의미하며 개발자가 일하며 마주하는 여러가지 환경요소로 인해 얻게 되는 경험을 말한다. 사용자 경험 (UX) 의 개발자 버전으로, 좋은 개발자들의 이직을 막기 위해 좋은 경험을 제공해야 한다는 맥락에서 시작된 말 같다.'),"\n",e.createElement(a.p,null,"그냥 개발 문화에 대해 이야기한다고 봐도 될 것 같다."),"\n",e.createElement(a.p,null,"글에 좀 더 자세한 설명이 쓰여있다."),"\n",e.createElement(a.h3,null,e.createElement(a.a,{href:"https://stackoverflow.blog/2022/10/20/introducing-the-overflow-offline-project/"},"Introducing the Overflow Offline project")),"\n",e.createElement(a.p,null,"네트워크 접속 환경이 열악한 지역을 위해 스택오버플로우가 비영리단체와 손잡고 오프라인 버전을 만들었다고 한다."))}var p,o,c,u,r=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.ah)(),n.components);return a?e.createElement(a,n,e.createElement(l,n)):l(n)},i=t(1880),k=t(1883),m=t(3723),g=t(1858),d=t(3904),h=t(891),E=t(5534),b=t(5777),f=t(7178);const y=n=>{let{data:a,children:t}=n;const{frontmatter:s,sameSeriesPosts:l}=a.mdx,{title:p,slug:o,date:c,tags:u,series:r,heroImage:i,heroImageAlt:d}=s,h=i?(0,m.c)(i):null;return e.createElement(g.Z,null,e.createElement(v,null,e.createElement("h1",null,p),e.createElement(S,null,c),e.createElement(x,null,u.map((n=>e.createElement("li",{key:n},e.createElement(k.rU,{to:"/tags/"+n},n)))))),e.createElement(f.Z,{name:r,data:l,current:o}),!!h&&e.createElement(w,{image:h,alt:null!=d?d:""}),e.createElement(E.Z,null,t),e.createElement(b.Z,null))},v=h.ZP.div(p||(p=(0,i.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(m.G)(o||(o=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),S=h.ZP.div(c||(c=(0,i.Z)(["\n  margin: 16px 0;\n"]))),x=h.ZP.ul(u||(u=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),C=n=>{var a,t;let{data:s}=n;const{frontmatter:{title:l,slug:p,tags:o,heroImage:c,previewContent:u},excerpt:r}=s.mdx,i=c?(0,m.c)(c):null;return e.createElement(d.Z,{title:l,description:null!=u?u:r,path:"posts/"+p,thumbnail:null==i||null===(a=i.images)||void 0===a||null===(t=a.fallback)||void 0===t?void 0:t.src,keywords:o,ogType:"article"})};function j(n){return e.createElement(y,n,e.createElement(r,n))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-221203-read-writings-index-mdx-b1ade55de9f355bb7225.js.map