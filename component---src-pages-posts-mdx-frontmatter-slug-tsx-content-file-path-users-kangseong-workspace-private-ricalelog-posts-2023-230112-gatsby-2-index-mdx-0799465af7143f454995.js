"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4207],{4387:function(e,n,a){a.r(n),a.d(n,{Head:function(){return w},default:function(){return S}});var t=a(1151),s=a(7294);function l(e){const n=Object.assign({div:"div",p:"p",h1:"h1",a:"a",code:"code",h2:"h2",button:"button",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.div,{className:"md"},s.createElement(n.p,null,"이전 글에서는 Gatsby 기본 기능을 구현을 위한 튜토리얼을 소개했고 태그 기능을 구현했다. 오늘은 MDX 글 안에 인라인 이미지와 테이블을 삽입해보자."),s.createElement(n.h1,{id:"1-이미지-삽입",style:{position:"relative"}},s.createElement(n.a,{href:"#1-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%BD%EC%9E%85","aria-label":"1 이미지 삽입 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 이미지 삽입"),s.createElement(n.p,null,"정적 이미지는 ",s.createElement(n.code,null,"gatsby-plugin-image")," 플러그인과 ",s.createElement(n.code,null,"StaticImage")," 컴포넌트로 적용한다. 페이지 컴포넌트에 들어가는 동적 이미지는 ",s.createElement(n.code,null,"gatsby-transformer-sharp")," 플러그인과 ",s.createElement(n.code,null,"GatsbyImage")," 컴포넌트로 적용한다. 그렇다면 MDX 본문 안에 들어가는 이미지는 어떻게 적용할까?"),s.createElement(n.p,null,s.createElement(n.a,{href:"https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-images-in-markdown/"},"공식 문서"),"에도 잘 나와있지만 그럼에도 불구하고 적용에 살짝 애를 먹었기 때문에 기록해두도록 하겠다."),s.createElement(n.h2,{id:"11-gatsby-remark-images-플러그인-적용",style:{position:"relative"}},s.createElement(n.a,{href:"#11-gatsby-remark-images-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9","aria-label":"11 gatsby remark images 플러그인 적용 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.1. ",s.createElement(n.code,null,"gatsby-remark-images")," 플러그인 적용"),s.createElement(n.p,null,"일단 플러그인을 설치하자."),s.createElement(n.div,{className:"codeblock-container"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh"><span class="token function">npm</span> i gatsby-remark-images</code></pre></div>'}}),s.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),s.createElement(n.p,null,"그리고 ",s.createElement(n.code,null,"gatsby-config.ts")," 를 수정하자."),s.createElement(n.div,{className:"codeblock-container"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// gatsby-config.ts</span>\n<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GatsbyConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config<span class="token operator">:</span> GatsbyConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token comment">// "gatsby-plugin-mdx", // &lt;- 이렇게 문자열 형식으로 gatsby-plugin-mdx 를 쓰고 있었다면, 이 줄은 삭제하자.</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token operator">:</span> <span class="token string">"gatsby-plugin-mdx"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        gatsbyRemarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            resolve<span class="token operator">:</span> <span class="token string">"gatsby-remark-images"</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              maxWidth<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),s.createElement(n.h2,{id:"12-mdx-에-인라인-이미지-사용",style:{position:"relative"}},s.createElement(n.a,{href:"#12-mdx-%EC%97%90-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%9A%A9","aria-label":"12 mdx 에 인라인 이미지 사용 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.2. MDX 에 인라인 이미지 사용"),s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">![Alt message](./screenshot.png)</code></pre></div>'}}),s.createElement(n.h1,{id:"2-인라인-테이블-문법-적용",style:{position:"relative"}},s.createElement(n.a,{href:"#2-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%AC%B8%EB%B2%95-%EC%A0%81%EC%9A%A9","aria-label":"2 인라인 테이블 문법 적용 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 인라인 테이블 문법 적용"),s.createElement(n.p,null,"Markdown 은 원래 아래와 같은 문법으로 테이블을 삽입할 수 있다."),s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |</code></pre></div>'}}),s.createElement(n.p,null,"...있는 줄 알았다. 그런데 알고 보니 이 문법은 원래 마크다운 기본 문법이 아니라 GitHub 에서 만든 ",s.createElement(n.a,{href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"(GFM) 스펙에서 지원하는 문법이었다. 당연히 MDX 에서도 기본적으로 적용되지 않는다. 하지만 다행히도 Gatsby 에서 GFM 을 적용할 수 있는 방법을 제공한다."),s.createElement(n.h2,{id:"21-remark-gfm-플러그인-적용",style:{position:"relative"}},s.createElement(n.a,{href:"#21-remark-gfm-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9","aria-label":"21 remark gfm 플러그인 적용 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.1. ",s.createElement(n.code,null,"remark-gfm")," 플러그인 적용"),s.createElement(n.p,null,"일단 플러그인을 설치하자."),s.createElement(n.div,{className:"codeblock-container"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh"><span class="token function">npm</span> i remark-gfm@^1</code></pre></div>'}}),s.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),s.createElement(n.p,null,"여기서 버전 1을 설치하는 이유는 Gatsby 가 ESM 을 아직 지원하지 않는데, remark-gfm 버전 2부터는 ESM 이기 때문이다. ",s.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions"},"공식 문서"),"에도 잘 설명되어 있다. (mdxOptions 섹션의 Please Note 부분을 보자.)"),s.createElement(n.p,null,"그리고 ",s.createElement(n.code,null,"gatsby-config.ts")," 에 플러그인을 적용하자."),s.createElement(n.div,{className:"codeblock-container"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GatsbyConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config<span class="token operator">:</span> GatsbyConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token operator">:</span> <span class="token string">"gatsby-plugin-mdx"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        mdxOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n          remarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"remark-gfm"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// ...</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),s.createElement(n.h2,{id:"22-mdx-에-테이블-사용",style:{position:"relative"}},s.createElement(n.a,{href:"#22-mdx-%EC%97%90-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%82%AC%EC%9A%A9","aria-label":"22 mdx 에 테이블 사용 permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.2. MDX 에 테이블 사용"),s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |</code></pre></div>'}}),s.createElement(n.table,null,s.createElement(n.thead,null,s.createElement(n.tr,null,s.createElement(n.th,null,"호스트명"),s.createElement(n.th,null,"IP 주소"))),s.createElement(n.tbody,null,s.createElement(n.tr,null,s.createElement(n.td,null,"mydomain.com"),s.createElement(n.td,null,"111.111.111.222")),s.createElement(n.tr,null,s.createElement(n.td,null,"mydomain.com"),s.createElement(n.td,null,"111.111.222.111")),s.createElement(n.tr,null,s.createElement(n.td,null,"mydomain.com"),s.createElement(n.td,null,"111.222.111.111")),s.createElement(n.tr,null,s.createElement(n.td,null,"mydomain.com"),s.createElement(n.td,null,"222.111.111.111"))))),"\n",s.createElement(n.div,{className:"toc"},s.createElement(n.p,null,"목차"),s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#1-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%BD%EC%9E%85"},"1. 이미지 삽입"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#11-gatsby-remark-images-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9"},"1.1. ",s.createElement(n.code,null,"gatsby-remark-images")," 플러그인 적용")),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#12-mdx-%EC%97%90-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%9A%A9"},"1.2. MDX 에 인라인 이미지 사용")),"\n"),"\n"),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#2-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%AC%B8%EB%B2%95-%EC%A0%81%EC%9A%A9"},"2. 인라인 테이블 문법 적용"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#21-remark-gfm-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9"},"2.1. ",s.createElement(n.code,null,"remark-gfm")," 플러그인 적용")),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"#22-mdx-%EC%97%90-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%82%AC%EC%9A%A9"},"2.2. MDX 에 테이블 사용")),"\n"),"\n"),"\n")))}var c,o,r,p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},i=a(1880),m=a(1883),u=a(3723),d=a(6758),E=a(3904),g=a(891),h=a(6120),k=a(5777),v=a(7178),C=a(2889),b=a(5924),y=a(7466);function f(e){let{data:n,children:a}=e;const t=s.useRef(),{frontmatter:l,sameSeriesPosts:c}=n.mdx,{title:o,slug:r,date:p,tags:i,series:u,heroImage:E,heroImageAlt:g}=l;return s.useEffect((()=>{var e;const n=null===(e=t.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),a=new IntersectionObserver((()=>(0,b.Z)(t,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>a.observe(e))),()=>a.disconnect()}),[]),s.createElement(d.Z,null,s.createElement(B,null,s.createElement("h1",null,s.createElement(m.Link,{to:"/posts/"+r},o)),s.createElement(A,null,p),s.createElement(C.Z,{tags:i})),s.createElement(v.Z,{name:u,data:c,current:r}),s.createElement(y.Z,{data:E,alt:g}),s.createElement(x,{ref:t},a),s.createElement(k.Z,null))}const B=g.ZP.div(c||(c=(0,i.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),A=g.ZP.div(o||(o=(0,i.Z)(["\n  margin: 16px 0;\n"]))),x=(0,g.ZP)(h.Z)(r||(r=(0,i.Z)(["\n  margin-bottom: 60px;\n"]))),w=e=>{var n,a;let{data:t}=e;const{frontmatter:{title:l,slug:c,tags:o,heroImage:r,previewContent:p},excerpt:i}=t.mdx,m=r?(0,u.c)(r):null;return s.createElement(E.Z,{title:l,description:null!=p?p:i,path:"posts/"+c,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(a=n.fallback)||void 0===a?void 0:a.src,keywords:o,ogType:"article"})};function S(e){return s.createElement(f,e,s.createElement(p,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230112-gatsby-2-index-mdx-0799465af7143f454995.js.map