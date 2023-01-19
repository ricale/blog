"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5020],{7036:function(n,e,t){t.r(e),t.d(e,{Head:function(){return P},default:function(){return I}});var a=t(1151),o=t(7294);function l(n){const e=Object.assign({h2:"h2",p:"p",a:"a",div:"div",em:"em",ul:"ul",li:"li",code:"code"},(0,a.ah)(),n.components);return o.createElement(o.Fragment,null,o.createElement(e.h2,null,"1. 프로미스는 Web API 인가?"),"\n",o.createElement(e.p,null,o.createElement(e.a,{href:"https://ricale.kr/blog/posts/220926-is-javascript-single-threaded/"},"자바스크립트는 정말 싱글 스레드인가?")," 글을 작성하다가 이상한 이미지를 발견했다."),"\n",o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 434px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/a6bb0a2ae9ceb45892e292bcba81e13a/ade6e/1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 135.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAABYlAAAWJQFJUiTwAAADwklEQVR42q1VTW/jVBTtHxyhQYJhMUsYWMJqkFggZsuSzTASGyhMg9qBSh01pYBU1JYkbZpMvpqmHTVKnA9/27Ed58s93PscuzaNRrMYS0d+vtfvvPPOvX5eu0F43dxEo7e/4jniHo7XOBgl9NEMG0cmnh9ayORc/JofE3xs/OuIcSbnYePYwo8HJtqKL+YE8fwloQgG4UNbnuDT72V8/HSID785xPtf/YUPvj7Cw29reO9xFve//AOfPZPx8LshCpeumLMIQsJIlFAYLB/ayhSPiPCTZxoRHeLeF9u49/nv+OhJDveJ8MGTPB497YeEV95SYdqCtVsvAiiWj/UDFT8daPj5yMbzY0dgnSz45XgkYuv/aPjhbxWvh57Y5nyxwIKQIpxOp9A0DbZlwndNeCMdrq3RPcTY0UXMo/vYMTB2DZimLuYYhgFN1WLSmNA0TfT7fXQ6EjTdgKrp6A+G6PUHKzEYDDAcDtHtdgVpinAymcCyLFxeXmJ7exs7OzvY39+HqqqwbVssxvkkOMY5WZah6/pdhbwKK2w2m6hWq7i4uBCEPJFzq8A5VnqHkBVGqzEURRH3Xq/3RkiSJAhZ8Xw+Tytkg5mI7wxW9zZgH1npyqK0Wi3s7e1hd3cXmUwGjUYDnuet9JDBu2IRd4rChOxDu91GuVxGsVhEqVTC9fV1rHwVWCFvfSUhrxZtl8n5JZ7EHkXg7SXBMX6H56YIHccRJFFVmZQrzjGxPYpxXI2UJRRG78WETMZBTnKTZslD7sXNzU3qxT+xm80imw19laSeWDz2cDSCvCTWSQRXWijkgUEKpE4HJ/k8KuRji/rxvF5HqXiK00IBxZMCBuSXrlInKLIAj3viSzExm83ELsI+pAe7UoT+6hRmvQyNxmr5FNorilXOYNRKMAlKqQD5LAF6Voo5WLWyOLG4n8OiEKFOiT6t1qNmNbgoOhWHtsL+yVwAskWmIqRA8X63A5MELGbTxJfCVSYF9VoNW1tb4jveI+9evtzBby9eoEtWOOSX6Mcl4m+ZiHkHCxJ12zassHyCLp0i110JlcY5qudNlGt1HObykOgzNEYONItay16CxjrFBrKyJEwqnM1hn+VgN2uwWw04V00B9/UFxu0rETPOq3egE6xGBXa1KA7amNAnMz1DB52iwMi6hWMjsAxMNSV8dm0RS8EdwaG5KcKJ72PsT1b+KudUPZkO2+ANv1PXG6dPG58I2eQZFYfJk5iSen6ZW+L/OZFfnqUpwiAI4LquAJ8uSUTxVblkPvUbfVcXc/0Hi8DeUAIrsLoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="1"\n        title=""\n        src="/blog/static/a6bb0a2ae9ceb45892e292bcba81e13a/ade6e/1.png"\n        srcset="/blog/static/a6bb0a2ae9ceb45892e292bcba81e13a/772e8/1.png 200w,\n/blog/static/a6bb0a2ae9ceb45892e292bcba81e13a/e17e5/1.png 400w,\n/blog/static/a6bb0a2ae9ceb45892e292bcba81e13a/ade6e/1.png 434w"\n        sizes="(max-width: 434px) 100vw, 434px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",o.createElement(e.p,null,"프로미스가 Web API 에 포함되어 있는 그림이었다. 다른 어떤 글에서도 프로미스가 Web API 에 속해있다는 내용을 본 적이 없었다. 그런데 그렇지 않다는 확신도 없었으므로, 이참에 확실히 하기 위해 찾아보았다."),"\n",o.createElement(e.p,null,"결론은 프로미스는 ",o.createElement(e.a,{href:"https://velog.velcdn.com/images/ricale/post/39354cb5-e62f-4ac4-b6ec-e094acfeae62/image.png"},"자바스크립트의 표준 API"),"라는 것이다. Web API 는 웹브라우저와 소통하기 위한 프로그래밍 인터페이스이므로, ",o.createElement(e.em,null,"프로미스는 Web API 에 속하지 않는다"),"."),"\n",o.createElement(e.h2,null,"2. 마이크로태스크큐?"),"\n",o.createElement(e.p,null,"프로미스는 Web API 와 비슷하게 실행된다. 본문의 실행이 완료되면 완료 콜백을 ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#queue"},"메시지큐",o.createElement(e.em,null,"MessageQueue")),"에 밀어넣는 방식이다. 다만 Web API 와 다른 점은 프로미스가 사용하는 메시지큐가 우리가 일반적으로 알고 있는 메시지큐가 아니라, 마이크로태스크큐",o.createElement(e.em,null,"MicrotaskQueue"),"라는 별도의 큐라는 점이다."),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,"메시지큐 (= 매크로태스크큐",o.createElement(e.em,null,"MacrotasksQueue"),"): Web API 가 사용"),"\n",o.createElement(e.li,null,"마이크로태스크큐: 자바스크립트가 프로미스 등을 위해 사용"),"\n"),"\n",o.createElement(e.p,null,"마이크로태스크큐는 메시지큐보다 높은 우선순위를 갖고 있다. 콜스택이 비었을 때 마이크로태스크큐와 메시지큐가 모두 태스크를 갖고 있다면 자바스크립트는 마이크로태스크큐에 있는 태스크를 먼저 가져가 실행한다."),"\n",o.createElement(e.h2,null,"3. ",o.createElement(e.code,null,"'unhandledrejection'")," 이벤트"),"\n",o.createElement(e.p,null,"프로미스에서 에러 핸들링을 하지 않았다면? (",o.createElement(e.code,null,".then()")," 만 쓰고 ",o.createElement(e.code,null,".catch()")," 를 하지 않았다면? ",o.createElement(e.code,null,"await")," 을 ",o.createElement(e.code,null,"try"),"/",o.createElement(e.code,null,"catch")," 로 감싸지 않았다면?) 앱이 죽을 가능성이 높다. 웹브라우저에서는 이런 핸들링되지 않은 프로미스를 위한 전역 에러 이벤트를 제공한다. 그것이 ",o.createElement(e.code,null,"unhandledrejection")," 이벤트다."),"\n",o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"unhandledrejection"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>promise<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"TestError"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",o.createElement(e.p,null,"(",o.createElement(e.a,{href:"https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections"},"HTML 표준 스펙"),"에 포함되므로, 어느 브라우저에서든 쓸 수 있다.)"),"\n",o.createElement(e.h2,null,"4. References"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,"mdn web docs - ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise")),"\n",o.createElement(e.li,null,"mdn web docs - ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API"},"Web APIs")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"https://javascript.info/microtask-queue"},"Microtasks")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"https://javascript.info/promise-error-handling"},"Error handling with promises")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"https://ui.toast.com/posts/ko_20220725"},"자바스크립트는 어떻게 약속을 지킬까?")),"\n"))}var s,r,c,i,p,u=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?o.createElement(e,n,o.createElement(l,n)):l(n)},m=t(1880),d=t(3723),g=t(1858),b=t(3904),h=t(891),k=t(5534),E=t(5777),f=t(7178),x=t(6706);const v=n=>{let{data:e,children:t}=n;const{frontmatter:a,sameSeriesPosts:l}=e.mdx,{title:s,slug:r,date:c,tags:i,series:p,heroImage:u,heroImageAlt:m}=a,b=u?(0,d.c)(u):null;return o.createElement(g.Z,null,o.createElement(A,null,o.createElement("h1",null,s),o.createElement(y,null,c),o.createElement(x.Z,{tags:i})),o.createElement(f.Z,{name:p,data:l,current:r}),!!b&&o.createElement(w,{image:b,alt:null!=m?m:""}),o.createElement(Z,null,t),o.createElement(E.Z,null))},A=h.ZP.div(s||(s=(0,m.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(d.G)(r||(r=(0,m.Z)(["\n  margin-bottom: 16px;\n"]))),y=h.ZP.div(c||(c=(0,m.Z)(["\n  margin: 16px 0;\n"]))),Z=(h.ZP.ul(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),(0,h.ZP)(k.Z)(p||(p=(0,m.Z)(["\n  margin-bottom: 60px;\n"])))),P=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:l,slug:s,tags:r,heroImage:c,previewContent:i},excerpt:p}=a.mdx,u=c?(0,d.c)(c):null;return o.createElement(b.Z,{title:l,description:null!=i?i:p,path:"posts/"+s,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function I(n){return o.createElement(v,n,o.createElement(u,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,o=t(1880);const l=t(891).ZP.div(a||(a=(0,o.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=l},7178:function(n,e,t){var a,o,l,s,r,c=t(1880),i=t(7294),p=t(1883),u=t(891);const m=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),g=u.ZP.ol(l||(l=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),b=u.ZP.li(s||(s=(0,c.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(r||(r=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=n=>{let{name:e,data:t,current:a}=n;const[o,l]=i.useState(!0);return t?i.createElement(m,null,i.createElement(d,{collapsed:o,onClick:()=>l((n=>!n))},i.createElement("h2",null,"시리즈 ",i.createElement(p.rU,{to:"/series/"+e+"/"},'"'+e+'"')),i.createElement("span",null,"▲")),!o&&i.createElement(g,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return i.createElement(b,{active:e===a,key:e},i.createElement(p.rU,{to:"/posts/"+e},t))})))):null}},1597:function(n,e,t){var a,o=t(1880),l=t(7294),s=t(1883);const r=(0,t(891).ZP)(s.rU)(a||(a=(0,o.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));e.Z=function(n){let{value:e}=n;return l.createElement(r,{to:"/tags/"+e},e)}},6706:function(n,e,t){var a,o=t(1880),l=t(7294),s=t(891),r=t(1597);const c=s.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));e.Z=function(n){let{tags:e,...t}=n;const a="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return l.createElement(c,t,a.map((n=>l.createElement("li",{key:n.fieldValue},l.createElement(r.Z,{value:n.fieldValue})))))}},1151:function(n,e,t){t.d(e,{ah:function(){return l}});var a=t(7294);const o=a.createContext({});function l(n){const e=a.useContext(o);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-221003-things-about-promise-index-mdx-20d93957f7ce18e935f6.js.map