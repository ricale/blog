"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4207],{4387:function(n,e,a){a.r(e),a.d(e,{Head:function(){return S},default:function(){return Z}});var t=a(1151),s=a(7294);function o(n){const e=Object.assign({p:"p",h1:"h1",a:"a",div:"div",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"이전 글에서는 Gatsby 기본 기능을 구현을 위한 튜토리얼을 소개했고 태그 기능을 구현했다. 오늘은 MDX 글 안에 인라인 이미지와 테이블을 삽입해보자."),"\n",s.createElement(e.h1,{id:"1-이미지-삽입",style:{position:"relative"}},s.createElement(e.a,{href:"#1-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%BD%EC%9E%85","aria-label":"1 이미지 삽입 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 이미지 삽입"),"\n",s.createElement(e.p,null,"정적 이미지는 ",s.createElement(e.code,null,"gatsby-plugin-image")," 플러그인과 ",s.createElement(e.code,null,"StaticImage")," 컴포넌트로 적용한다. 페이지 컴포넌트에 들어가는 동적 이미지는 ",s.createElement(e.code,null,"gatsby-transformer-sharp")," 플러그인과 ",s.createElement(e.code,null,"GatsbyImage")," 컴포넌트로 적용한다. 그렇다면 MDX 본문 안에 들어가는 이미지는 어떻게 적용할까?"),"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-images-in-markdown/"},"공식 문서"),"에도 잘 나와있지만 그럼에도 불구하고 적용에 살짝 애를 먹었기 때문에 기록해두도록 하겠다."),"\n",s.createElement(e.h2,{id:"11-gatsby-remark-images-플러그인-적용",style:{position:"relative"}},s.createElement(e.a,{href:"#11-gatsby-remark-images-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9","aria-label":"11 gatsby remark images 플러그인 적용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.1. ",s.createElement(e.code,null,"gatsby-remark-images")," 플러그인 적용"),"\n",s.createElement(e.p,null,"일단 플러그인을 설치하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">npm</span> i gatsby-remark-images</code></pre></div>'}}),"\n",s.createElement(e.p,null,"그리고 ",s.createElement(e.code,null,"gatsby-config.ts")," 를 수정하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// gatsby-config.ts</span>\n<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GatsbyConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config<span class="token operator">:</span> GatsbyConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token comment">// "gatsby-plugin-mdx", // &lt;- 이렇게 문자열 형식으로 gatsby-plugin-mdx 를 쓰고 있었다면, 이 줄은 삭제하자.</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token operator">:</span> <span class="token string">"gatsby-plugin-mdx"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        gatsbyRemarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            resolve<span class="token operator">:</span> <span class="token string">"gatsby-remark-images"</span><span class="token punctuation">,</span>\n            options<span class="token operator">:</span> <span class="token punctuation">{</span>\n              maxWidth<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ....</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.h2,{id:"12-mdx-에-인라인-이미지-사용",style:{position:"relative"}},s.createElement(e.a,{href:"#12-mdx-%EC%97%90-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%82%AC%EC%9A%A9","aria-label":"12 mdx 에 인라인 이미지 사용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.2. MDX 에 인라인 이미지 사용"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="mdx"><pre class="language-mdx"><code class="language-mdx">![Alt message](./screenshot.png)</code></pre></div>'}}),"\n",s.createElement(e.h1,{id:"2-인라인-테이블-문법-적용",style:{position:"relative"}},s.createElement(e.a,{href:"#2-%EC%9D%B8%EB%9D%BC%EC%9D%B8-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%AC%B8%EB%B2%95-%EC%A0%81%EC%9A%A9","aria-label":"2 인라인 테이블 문법 적용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 인라인 테이블 문법 적용"),"\n",s.createElement(e.p,null,"Markdown 은 원래 아래와 같은 문법으로 테이블을 삽입할 수 있다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="mdx"><pre class="language-mdx"><code class="language-mdx">| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |</code></pre></div>'}}),"\n",s.createElement(e.p,null,"...있는 줄 알았다. 그런데 알고 보니 이 문법은 원래 마크다운 기본 문법이 아니라 GitHub 에서 만든 ",s.createElement(e.a,{href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"(GFM) 스펙에서 지원하는 문법이었다. 당연히 MDX 에서도 기본적으로 적용되지 않는다. 하지만 다행히도 Gatsby 에서 GFM 을 적용할 수 있는 방법을 제공한다."),"\n",s.createElement(e.h2,{id:"21-remark-gfm-플러그인-적용",style:{position:"relative"}},s.createElement(e.a,{href:"#21-remark-gfm-%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8-%EC%A0%81%EC%9A%A9","aria-label":"21 remark gfm 플러그인 적용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.1. ",s.createElement(e.code,null,"remark-gfm")," 플러그인 적용"),"\n",s.createElement(e.p,null,"일단 플러그인을 설치하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">npm</span> i remark-gfm@^1</code></pre></div>'}}),"\n",s.createElement(e.p,null,"여기서 버전 1을 설치하는 이유는 Gatsby 가 ESM 을 아직 지원하지 않는데, remark-gfm 버전 2부터는 ESM 이기 때문이다. ",s.createElement(e.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions"},"공식 문서"),"에도 잘 설명되어 있다. (mdxOptions 섹션의 Please Note 부분을 보자.)"),"\n",s.createElement(e.p,null,"그리고 ",s.createElement(e.code,null,"gatsby-config.ts")," 에 플러그인을 적용하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GatsbyConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> config<span class="token operator">:</span> GatsbyConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token operator">:</span> <span class="token string">"gatsby-plugin-mdx"</span><span class="token punctuation">,</span>\n      options<span class="token operator">:</span> <span class="token punctuation">{</span>\n        mdxOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n          remarkPlugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"remark-gfm"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// ...</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.h2,{id:"22-mdx-에-테이블-사용",style:{position:"relative"}},s.createElement(e.a,{href:"#22-mdx-%EC%97%90-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%82%AC%EC%9A%A9","aria-label":"22 mdx 에 테이블 사용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.2. MDX 에 테이블 사용"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="mdx"><pre class="language-mdx"><code class="language-mdx">| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |</code></pre></div>'}}),"\n",s.createElement(e.table,null,s.createElement(e.thead,null,s.createElement(e.tr,null,s.createElement(e.th,null,"호스트명"),s.createElement(e.th,null,"IP 주소"))),s.createElement(e.tbody,null,s.createElement(e.tr,null,s.createElement(e.td,null,"mydomain.com"),s.createElement(e.td,null,"111.111.111.222")),s.createElement(e.tr,null,s.createElement(e.td,null,"mydomain.com"),s.createElement(e.td,null,"111.111.222.111")),s.createElement(e.tr,null,s.createElement(e.td,null,"mydomain.com"),s.createElement(e.td,null,"111.222.111.111")),s.createElement(e.tr,null,s.createElement(e.td,null,"mydomain.com"),s.createElement(e.td,null,"222.111.111.111")))))}var l,c,r,p,i,m=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)},u=a(1880),d=a(3723),g=a(1858),h=a(3904),k=a(891),E=a(5534),b=a(5777),f=a(7178),v=a(6706);function y(n){let{data:e,children:a}=n;const{frontmatter:t,sameSeriesPosts:o}=e.mdx,{title:l,slug:c,date:r,tags:p,series:i,heroImage:m,heroImageAlt:u}=t,h=m?(0,d.c)(m):null;return s.createElement(g.Z,null,s.createElement(x,null,s.createElement("h1",null,l),s.createElement(w,null,r),s.createElement(v.Z,{tags:p})),s.createElement(f.Z,{name:i,data:o,current:c}),!!h&&s.createElement(C,{image:h,alt:null!=u?u:""}),s.createElement(B,null,a),s.createElement(b.Z,null))}const x=k.ZP.div(l||(l=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),C=(0,k.ZP)(d.G)(c||(c=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),w=k.ZP.div(r||(r=(0,u.Z)(["\n  margin: 16px 0;\n"]))),B=(k.ZP.ul(p||(p=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),(0,k.ZP)(E.Z)(i||(i=(0,u.Z)(["\n  margin-bottom: 60px;\n"])))),S=n=>{var e,a;let{data:t}=n;const{frontmatter:{title:o,slug:l,tags:c,heroImage:r,previewContent:p},excerpt:i}=t.mdx,m=r?(0,d.c)(r):null;return s.createElement(h.Z,{title:o,description:null!=p?p:i,path:"posts/"+l,thumbnail:null==m||null===(e=m.images)||void 0===e||null===(a=e.fallback)||void 0===a?void 0:a.src,keywords:c,ogType:"article"})};function Z(n){return s.createElement(y,n,s.createElement(m,n))}},5777:function(n,e,a){var t=a(7294);e.Z=function(){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e;const a=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,t]=n;a.setAttribute(e,t)})),null===(e=n.current)||void 0===e||e.appendChild(a)}),[]),t.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,a){var t,s=a(1880);const o=a(891).ZP.div(t||(t=(0,s.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=o},7178:function(n,e,a){var t,s,o,l,c,r=a(1880),p=a(7294),i=a(1883),m=a(891);const u=m.ZP.div(t||(t=(0,r.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=m.ZP.div(s||(s=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),g=m.ZP.ol(o||(o=(0,r.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=m.ZP.li(l||(l=(0,r.Z)(["\n  ","\n"])),(n=>n.active&&(0,m.iv)(c||(c=(0,r.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:a,current:t}=n;const[s,o]=p.useState(!0);return a?p.createElement(u,null,p.createElement(d,{collapsed:s,onClick:()=>o((n=>!n))},p.createElement("h2",null,"시리즈 ",p.createElement(i.rU,{to:"/series/"+e+"/"},'"'+e+'"')),p.createElement("span",null,"▲")),!s&&p.createElement(g,null,a.map((n=>{let{frontmatter:{slug:e,title:a}}=n;return p.createElement(h,{active:e===t,key:e},p.createElement(i.rU,{to:"/posts/"+e},a))})))):null}},1597:function(n,e,a){var t,s=a(1880),o=a(7294),l=a(1883);const c=(0,a(891).ZP)(l.rU)(t||(t=(0,s.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));e.Z=function(n){let{value:e}=n;return o.createElement(c,{to:"/tags/"+e},e)}},6706:function(n,e,a){var t,s=a(1880),o=a(7294),l=a(891),c=a(1597);const r=l.ZP.ul(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));e.Z=function(n){let{tags:e,...a}=n;const t="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return o.createElement(r,a,t.map((n=>o.createElement("li",{key:n.fieldValue},o.createElement(c.Z,{value:n.fieldValue})))))}},1151:function(n,e,a){a.d(e,{ah:function(){return o}});var t=a(7294);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230112-gatsby-2-index-mdx-0e85eab94309f6051df4.js.map