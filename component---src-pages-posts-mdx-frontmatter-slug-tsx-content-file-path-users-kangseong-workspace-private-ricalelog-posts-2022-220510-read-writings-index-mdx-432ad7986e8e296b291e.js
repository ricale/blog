"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7332],{1705:function(e,n,t){t.r(n),t.d(n,{Head:function(){return R},default:function(){return j}});var a=t(1151),l=t(7294);function s(e){const n=Object.assign({p:"p",h2:"h2",h3:"h3",a:"a",code:"code",div:"div",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"이 글은 메일링, 블로그, 구글링 등을 통해 읽은 좋은 글들을 모아놓은 글이다."),"\n",l.createElement(n.h2,null,"JavaScript"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://meetup.toast.com/posts/312"},"JavaScript Symbol의 근황")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Symbol")," 에 대한 간략한 소개. 지나가다가 ",l.createElement(n.code,null,"Symbol.iterator"),"만 몇 번 본 적 있지 ",l.createElement(n.code,null,"Symbol")," 그 자체에 대해서는 무지했는데, 이 글을 통해 간략하게나마 알게 되었다. 훑어보기에 좋은 글이다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://arthur.place/the-cost-of-return-await"},"How return await can slow down your code")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"return await someAsyncFunc()")," 형식의 사용이 성능 상 좋지 않은 점에 대해 설명하는 글."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// 1</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">doWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 2</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">dontWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 3</span>\n<span class="token keyword">function</span> <span class="token function">justReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(n.p,null,"세 코드 모두 결과는 같다. 다만 퍼포먼스 관점에서는 3번이 제일 낫다. 왜냐하면 1, 2번 코드는 ",l.createElement(n.code,null,"work()")," 가 하는 일이 promise 이든 non-promise 이든, 무조건 이벤트 루프를 타기 때문이다."),"\n",l.createElement(n.p,null,"(사실 2번은 좀 명확하지 않다. 본문의 벤치마크 결과에서 ",l.createElement(n.code,null,"async () => await work()")," 가 느린 건 명확하게 나왔는데, 뜬금없이 다른 예를 ",l.createElement(n.code,null,"() => await work()"),"라고 표시하고 있기 때문이다. 문맥상 ",l.createElement(n.code,null,"async () => work()")," 의 오기일 것 같긴 하다.)"),"\n",l.createElement(n.p,null,"본문에는 위 내용에 더해 벤치마크 방법과 결과, 에러 핸들링 방식, eslint 로 1,2번 형식을 방지하는 방법 등이 나와있다. 읽어보기를 권한다."),"\n",l.createElement(n.h2,null,"React"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://reactjs.org/docs/testing.html"},"Testing Overview - React")),"\n",l.createElement(n.p,null,"React 에서 테스트를 하고 싶다고? 그렇다면 멀리 갈 필요 없다. 공식 문서에 너무나도 잘 정리가 되어있다. 해당 문서인 오버뷰는 물론 하위 문서들도, 짧지만 알차게 작성되어 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactjs.org/docs/testing-recipes.html"},"Testing Recipes")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactjs.org/docs/testing-environments.html"},"Testing Environments")),"\n"),"\n",l.createElement(n.p,null,'그동안 "javascript test framework" 등으로 구글링만 하며 공식 문서를 무시했었던 과거를 반성해본다.'),"\n",l.createElement(n.p,null,"덧붙여 React Native 를 위한 공식 문서도 따로 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://reactnative.dev/docs/testing-overview"},"Testing - React Native")),"\n"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://omarelhawary.me/blog/file-based-routing-with-react-router"},"File-based routing with React Router")),"\n",l.createElement(n.p,null,"Next.js 없이 file-based 라우팅을 구현하는 글. 문제는 CRA나 Webpack dev server 없이, ",l.createElement(n.a,{href:"https://vitejs.dev/"},"Vite")," 라는 툴을 사용해야 하는 것 정도."),"\n",l.createElement(n.p,null,"Vite 의 ",l.createElement(n.a,{href:"https://vitejs.dev/guide/features.html#glob-import"},"Glob Import")," 기능이 주요하게 쓰인다. Vite 없이 이 기능만 쓸 수 없나 하고 구글링을 좀 해보았는데 찾지 못했다. 그나마 비슷한 게 ",l.createElement(n.a,{href:"https://github.com/terpiljenya/import-glob"},"import-glob")," 정도. 이 코드를 참고해 Webpack loader 를 직접 구현해야 하지 않을까 싶다."),"\n",l.createElement(n.p,null,"이 글은 시리즈 중 첫 편이다. 시리즈의 다른 글들도 천천히 살펴 볼 생각이다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://github.com/drenther/use-clamp-text"},"use-clamp-text")),"\n",l.createElement(n.p,null,"여러 줄의 문자열을 원하는 줄 수 만큼만 보여주고 생략처리를 해주는 라이브러리(hook). 코드가 길지 않아서 (173라인) 천천히 읽어봐도 괜찮다. 내부적으로 이진 탐색을 사용했다."),"\n",l.createElement(n.h2,null,"Etc"),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://boostbrothers.notion.site/Rust-aefb960939804ef898f07a944651d23c"},"웹프론트엔드 개발자의 Rust 돌려까기")),"\n",l.createElement(n.p,null,"Rust 를 사용?학습?해 본 프론트엔드 개발자의 후기. GC 가 없고 소유권이라는 개념을 사용하며 진입장벽이 높다고 한다. 나중에 한 번 학습해봐야겠다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://blog.ull.im/engineering/2019/02/07/jwt-strategy.html"},"Refresh Token과 Sliding Sessions를 활용한 JWT의 보안 전략")),"\n",l.createElement(n.p,null,"JWT 토큰을 사용해 세션을 관리할 때 전략 별로 어떤 장단점이 있는지 정리한 글이다. 글에서 분류한 전략은 네 가지가 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Access Token 사용"),"\n",l.createElement(n.li,null,"Sliding Session 전략 + Access Token 사용"),"\n",l.createElement(n.li,null,"Access Token + Refresh Token 사용"),"\n",l.createElement(n.li,null,"Sliding Session 전략 + Access Token + Refresh Token 사용"),"\n"),"\n",l.createElement(n.p,null,"각 전략의 장단점은 본문에 잘 나와있다. 결론은 적용하려는 서비스의 특성에 맞게 올바른 전략을 사용해야 한다는 것이다."),"\n",l.createElement(n.h3,null,l.createElement(n.a,{href:"https://leonkong.cc/posts/til-jwt-and-refresh-token.html"},"[TIL] Why need refresh token?")),"\n",l.createElement(n.p,null,"Refresh Token 그 자체는 Access Token 과 같은 토큰일 뿐이다. Access Token 보다 보안상 우위에 있을 수는 없다. Refresh Token 의 보안은 서버 측에서 안전한 DB/store 에 저장하면서 관리해야지만 의미가 있다."),"\n",l.createElement(n.p,null,"라는 내용이다."))}var c,r,o,p,u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)},i=t(1880),m=t(1883),h=t(3723),d=t(1858),k=t(3904),E=t(891),g=t(5534),f=t(5777),w=t(7178);const v=e=>{let{data:n,children:t}=e;const{frontmatter:a,sameSeriesPosts:s}=n.mdx,{title:c,slug:r,date:o,tags:p,series:u,heroImage:i,heroImageAlt:k}=a,E=i?(0,h.c)(i):null;return l.createElement(d.Z,null,l.createElement(b,null,l.createElement("h1",null,c),l.createElement(T,null,o),l.createElement(x,null,p.map((e=>l.createElement("li",{key:e},l.createElement(m.rU,{to:"/tags/"+e},e)))))),l.createElement(w.Z,{name:u,data:s,current:r}),!!E&&l.createElement(y,{image:E,alt:null!=k?k:""}),l.createElement(g.Z,null,t),l.createElement(f.Z,null))},b=E.ZP.div(c||(c=(0,i.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=(0,E.ZP)(h.G)(r||(r=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),T=E.ZP.div(o||(o=(0,i.Z)(["\n  margin: 16px 0;\n"]))),x=E.ZP.ul(p||(p=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),R=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:s,slug:c,tags:r,heroImage:o,previewContent:p},excerpt:u}=a.mdx,i=o?(0,h.c)(o):null;return l.createElement(k.Z,{title:s,description:null!=p?p:u,path:"posts/"+c,thumbnail:null==i||null===(n=i.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function j(e){return l.createElement(v,e,l.createElement(u,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220510-read-writings-index-mdx-432ad7986e8e296b291e.js.map