"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5760],{6105:function(n,a,s){s.r(a),s.d(a,{Head:function(){return T},default:function(){return q}});var t=s(1151),p=s(7294);function e(n){const a=Object.assign({h1:"h1",p:"p",a:"a",ol:"ol",li:"li",ul:"ul",code:"code",h2:"h2",div:"div"},(0,t.ah)(),n.components);return p.createElement(p.Fragment,null,p.createElement(a.h1,null,"0. 발단"),"\n",p.createElement(a.p,null,"쓰던 블로그 서비스가 안드로이드 모바일에서 광고를 삽입하는 것을 발견했다. (광고는 다시 없어졌다. 아마 운영자의 테스트였던 것 같다.) 개인적으로 개인 개발 블로그에 광고가 들어가는 걸 원치 않으므로 서비스를 바꿔야 겠다는 생각이 들었다. 그리고 그러던 와중에 GitHub Pages 에 정적 페이지 생성 프레임워크로 블로그를 운영하는 것도 괜찮겠다 싶었다."),"\n",p.createElement(a.p,null,"Jekyll 과 Gatsby 두 서비스 중 고민하다가 Gatsby 를 선택했다. 자 그러면 천천히 하나씩 적용해보자."),"\n",p.createElement(a.h1,null,"1. 프로젝트 기본 구성"),"\n",p.createElement(a.p,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/"},"공식 튜토리얼 문서"),"가 잘 정리되어 있다. 튜토리얼에서는 아래 일곱가지 내용을 설명한다."),"\n",p.createElement(a.ol,{start:"0"},"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-0/"},"개발 환경 구성하기")),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-1/"},"로컬에서 프로젝트 생성 및 실행하고, Gatsby 클라우드에 배포하기")),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-2/"},"React 로 페이지 구현하기")),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-3/"},"플러그인 적용하기"),"\n",p.createElement(a.ul,null,"\n",p.createElement(a.li,null,"gatsby-plugin-image 플러그인으로 정적 이미지를 사이트에 추가하기"),"\n"),"\n"),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-4/"},"GraphQL 사용하기"),"\n",p.createElement(a.ul,null,"\n",p.createElement(a.li,null,"사이트의 메타 데이터 다루기"),"\n",p.createElement(a.li,null,"gatsby-source-filesystem 플러그인을 적용해 GraphQL 로 MDX 파일 목록 가져오기"),"\n"),"\n"),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-5/"},"MDX 사용하기"),"\n",p.createElement(a.ul,null,"\n",p.createElement(a.li,null,"MDX 로 블로그 컨텐츠 작성하기"),"\n",p.createElement(a.li,null,"gatsby-plugin-mdx 플러그인을 적용해 GraphQL 로 MDX 파일 내용 가져오기"),"\n"),"\n"),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-6/"},"동적으로 페이지 생성하기"),"\n",p.createElement(a.ul,null,"\n",p.createElement(a.li,null,"MDX 의 frontmatter 와 ",p.createElement(a.code,null,"{mdx.frontmatter__slug}.tsx")," 형식의 파일명을 사용해 페이지 동적으로 생성하기"),"\n",p.createElement(a.li,null,"생성된 페이지에 알맞는 MDX 데이터를 GraphQL 로 가져와 사용하기"),"\n"),"\n"),"\n",p.createElement(a.li,null,p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/tutorial/part-7/"},"데이터에 따라 동적으로 이미지 추가하기"),"\n",p.createElement(a.ul,null,"\n",p.createElement(a.li,null,"gatsby-transformer-sharp 플러그인을 적용해 MDX 의 frontmatter 에 따라 알맞는 이미지를 가져와 사용하기"),"\n"),"\n"),"\n"),"\n",p.createElement(a.p,null,"본문이 훌륭하기 때문에 굳이 여기에 다시 정리하지는 않겠다. 위 과정을 모두 거치면 기본적인 글 작성이 가능한 블로그 사이트가 완성된다."),"\n",p.createElement(a.h1,null,"2. 태그 구현"),"\n",p.createElement(a.p,null,"태그 구현 또한 ",p.createElement(a.a,{href:"https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/"},"공식 문서"),"가 잘 정리되어 있다. 하지만 약간 옛날 버전인 듯 위 튜토리얼 문서와 과 맞지 않는 부분이 있어서 해당 부분을 정정할 겸 정리해보겠다."),"\n",p.createElement(a.h2,null,"2.1. MDX 에 태그 추가"),"\n",p.createElement(a.p,null,"MDX 파일의 frontmatter 영역에 tags 를 추가하자"),"\n",p.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="mdx"><pre class="language-mdx"><code class="language-mdx">---\ntitle: &quot;Create React App 으로 GitHub Pages 적용하기&quot;\ndate: &quot;2021-05-03&quot;\nslug: &quot;210503-create-react-app-github-pages&quot;\ntags: [&quot;React&quot;, &quot;create react app&quot;, &quot;github pages&quot;] # 이렇게 추가하자\n---</code></pre></div>'}}),"\n",p.createElement(a.p,null,p.createElement(a.a,{href:"https://eneaxharja.com/add-tags-to-mdx-blog"},"https://eneaxharja.com/add-tags-to-mdx-blog")),"\n",p.createElement(a.h2,null,"2.2. 태그 페이지 템플릿 추가"),"\n",p.createElement(a.p,null,"태그 페이지에 쓰일 템플릿을 만들어보자."),"\n",p.createElement(a.p,null,"여기서 ",p.createElement(a.code,null,"{mdx.frontmatter__slug}.tsx}")," 형식의 파일을 만들지 않고 템플릿을 만드는 이유는 페이지가 MDX 파일의 정적 데이터(frontmatter 의 slug 필드)에 의해 만들어지는 것이 아니라, 동적인 데이터 (frontmatter 의 tags 정보를 수집) 에 의해 만들어져야 하기 때문이다."),"\n",p.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="tsx"><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// src/templates/TagDetailPageTemplate.tsx</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link<span class="token punctuation">,</span> PageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../components/Layout"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name">TagDetailPageTemplateData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  allMdx<span class="token operator">:</span> <span class="token punctuation">{</span>\n    totalCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n    edges<span class="token operator">:</span> <span class="token punctuation">{</span>\n      node<span class="token operator">:</span> <span class="token punctuation">{</span>\n        frontmatter<span class="token operator">:</span> <span class="token punctuation">{</span>\n          slug<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n          title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">TagDetailPageTemplateContext</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  tag<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">TagDetailPageTemplate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pageContext<span class="token punctuation">,</span>\n  data<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token operator">:</span> PageProps<span class="token operator">&lt;</span>TagDetailPageTemplateData<span class="token punctuation">,</span> TagDetailPageTemplateContext<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> tag <span class="token punctuation">}</span> <span class="token operator">=</span> pageContext<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> totalCount<span class="token punctuation">,</span> edges <span class="token punctuation">}</span> <span class="token operator">=</span> data<span class="token punctuation">.</span>allMdx<span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">태그 "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">글 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">개</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> node<span class="token operator">:</span> <span class="token punctuation">{</span> frontmatter <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>slug<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/posts/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>frontmatter<span class="token punctuation">.</span>slug<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>frontmatter<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> pageQuery <span class="token operator">=</span> graphql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  query ($tag: String) {\n    allMdx(\n      limit: 2000\n      sort: { frontmatter: { date: DESC } }\n      filter: { frontmatter: { tags: { in: [$tag] } } }\n    ) {\n      totalCount\n      edges {\n        node {\n          frontmatter {\n            slug\n            title\n          }\n        }\n      }\n    }\n  }\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TagDetailPageTemplate<span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.h2,null,"2.3. ",p.createElement(a.code,null,"gatsby-node.ts")," 작성"),"\n",p.createElement(a.p,null,"위에서 만든 템플릿으로 페이지를 만들기 위해서는 ",p.createElement(a.code,null,"gatsby-node.ts")," 를 작성해야 한다. 이미 해당 파일을 만들었다면 ",p.createElement(a.code,null,"createPage()")," 함수 안에 아래 내용을 적당히 끼워넣으면 된다."),"\n",p.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// gatsby-node.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> GatsbyNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name">TagGroupsQueryData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  tagsGroup<span class="token operator">:</span> <span class="token punctuation">{</span>\n    group<span class="token operator">:</span> <span class="token punctuation">{</span>\n      fieldValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> createPages<span class="token operator">:</span> GatsbyNode<span class="token punctuation">[</span><span class="token string">"createPages"</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  actions<span class="token punctuation">,</span>\n  graphql<span class="token punctuation">,</span>\n  reporter<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token generic-function"><span class="token function">graphql</span><span class="token generic class-name"><span class="token operator">&lt;</span>TagGroupsQueryData<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    {\n      tagsGroup: allMdx(limit: 2000) {\n        group(field: { frontmatter: { tags: SELECT } }) {\n          fieldValue\n        }\n      }\n    }\n  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>errors <span class="token operator">||</span> <span class="token operator">!</span>result<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    reporter<span class="token punctuation">.</span><span class="token function">panicOnBuild</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Error while running GraphQL query.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">const</span> tagsTemplatePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>\n    <span class="token string">"src/templates/TagDetailPageTemplate.tsx"</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>tagsGroup<span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    actions<span class="token punctuation">.</span><span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/tags/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tag<span class="token punctuation">.</span>fieldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      component<span class="token operator">:</span> tagsTemplatePath<span class="token punctuation">,</span>\n      context<span class="token operator">:</span> <span class="token punctuation">{</span> tag<span class="token operator">:</span> tag<span class="token punctuation">.</span>fieldValue <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.h2,null,"2.4. 태그 목록 페이지 추가"),"\n",p.createElement(a.p,null,"태그 목록 페이지를 추가하자."),"\n",p.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="tsx"><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// src/pages/tags/index.tsx</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> Link<span class="token punctuation">,</span> PageProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"../../components/Layout"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Seo <span class="token keyword">from</span> <span class="token string">"../../components/Seo"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name">TagsPageData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  allMdx<span class="token operator">:</span> <span class="token punctuation">{</span>\n    group<span class="token operator">:</span> <span class="token punctuation">{</span>\n      totalCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n      fieldValue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">TagsPage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">:</span> PageProps<span class="token operator">&lt;</span>TagsPageData<span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> tags <span class="token operator">=</span> data<span class="token punctuation">.</span>allMdx<span class="token punctuation">.</span>group<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> b<span class="token punctuation">.</span>totalCount <span class="token operator">-</span> a<span class="token punctuation">.</span>totalCount<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">tags</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span>tags<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>tag<span class="token punctuation">.</span>fieldValue<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">to</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/tags/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tag<span class="token punctuation">.</span>fieldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tag<span class="token punctuation">.</span>fieldValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tag<span class="token punctuation">.</span>totalCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> query <span class="token operator">=</span> graphql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  query {\n    allMdx(limit: 2000) {\n      group(field: { frontmatter: { tags: SELECT } }) {\n        fieldValue\n        totalCount\n      }\n    }\n  }\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Head</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Seo</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>태그 목록<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TagsPage<span class="token punctuation">;</span></code></pre></div>'}}),"\n",p.createElement(a.p,null,p.createElement(a.code,null,"graphql")," 쿼리에서 바로 totalCount 로 정렬하고 싶었지만 (GraphQL 을 잘 몰라서) 방법을 찾지 못했다. 대신 ",p.createElement(a.code,null,"TagsPage")," 컴포넌트 첫번째 줄에서 ",p.createElement(a.code,null,".sort()")," 를 사용해 정렬하고 있다."),"\n",p.createElement(a.h1,null,"3. 다음"),"\n",p.createElement(a.p,null,"다음 글에서는 글 내용 안에 이미지를 삽입하는 방법을 정리한다."))}var o,c,l,u,i,r=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,t.ah)(),n.components);return a?p.createElement(a,n,p.createElement(e,n)):e(n)},k=s(1880),g=s(3723),m=s(1858),d=s(3904),h=s(891),f=s(5534),y=s(5777),x=s(7178),b=s(6706);function E(n){let{data:a,children:s}=n;const{frontmatter:t,sameSeriesPosts:e}=a.mdx,{title:o,slug:c,date:l,tags:u,series:i,heroImage:r,heroImageAlt:k}=t,d=r?(0,g.c)(r):null;return p.createElement(m.Z,null,p.createElement(w,null,p.createElement("h1",null,o),p.createElement(P,null,l),p.createElement(b.Z,{tags:u})),p.createElement(x.Z,{name:i,data:e,current:c}),!!d&&p.createElement(v,{image:d,alt:null!=k?k:""}),p.createElement(Z,null,s),p.createElement(y.Z,null))}const w=h.ZP.div(o||(o=(0,k.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),v=(0,h.ZP)(g.G)(c||(c=(0,k.Z)(["\n  margin-bottom: 16px;\n"]))),P=h.ZP.div(l||(l=(0,k.Z)(["\n  margin: 16px 0;\n"]))),Z=(h.ZP.ul(u||(u=(0,k.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),(0,h.ZP)(f.Z)(i||(i=(0,k.Z)(["\n  margin-bottom: 60px;\n"])))),T=n=>{var a,s;let{data:t}=n;const{frontmatter:{title:e,slug:o,tags:c,heroImage:l,previewContent:u},excerpt:i}=t.mdx,r=l?(0,g.c)(l):null;return p.createElement(d.Z,{title:e,description:null!=u?u:i,path:"posts/"+o,thumbnail:null==r||null===(a=r.images)||void 0===a||null===(s=a.fallback)||void 0===s?void 0:s.src,keywords:c,ogType:"article"})};function q(n){return p.createElement(E,n,p.createElement(r,n))}},5777:function(n,a,s){var t=s(7294);a.Z=function(){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var a;const s=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[a,t]=n;s.setAttribute(a,t)})),null===(a=n.current)||void 0===a||a.appendChild(s)}),[]),t.createElement("div",{id:"comments",ref:n})}},5534:function(n,a,s){var t,p=s(1880);const e=s(891).ZP.div(t||(t=(0,p.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));a.Z=e},7178:function(n,a,s){var t,p,e,o,c,l=s(1880),u=s(7294),i=s(1883),r=s(891);const k=r.ZP.div(t||(t=(0,l.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),g=r.ZP.div(p||(p=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),m=r.ZP.ol(e||(e=(0,l.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),d=r.ZP.li(o||(o=(0,l.Z)(["\n  ","\n"])),(n=>n.active&&(0,r.iv)(c||(c=(0,l.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));a.Z=function(n){let{name:a,data:s,current:t}=n;const[p,e]=u.useState(!0);return s?u.createElement(k,null,u.createElement(g,{collapsed:p,onClick:()=>e((n=>!n))},u.createElement("h2",null,"시리즈 ",u.createElement(i.rU,{to:"/series/"+a+"/"},'"'+a+'"')),u.createElement("span",null,"▲")),!p&&u.createElement(m,null,s.map((n=>{let{frontmatter:{slug:a,title:s}}=n;return u.createElement(d,{active:a===t,key:a},u.createElement(i.rU,{to:"/posts/"+a},s))})))):null}},1597:function(n,a,s){var t,p=s(1880),e=s(7294),o=s(1883);const c=(0,s(891).ZP)(o.rU)(t||(t=(0,p.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));a.Z=function(n){let{value:a}=n;return e.createElement(c,{to:"/tags/"+a},a)}},6706:function(n,a,s){var t,p=s(1880),e=s(7294),o=s(891),c=s(1597);const l=o.ZP.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));a.Z=function(n){let{tags:a,...s}=n;const t="string"==typeof a[0]?a.map((n=>({fieldValue:n,totalCount:void 0}))):a;return e.createElement(l,s,t.map((n=>e.createElement("li",{key:n.fieldValue},e.createElement(c.Z,{value:n.fieldValue})))))}},1151:function(n,a,s){s.d(a,{ah:function(){return e}});var t=s(7294);const p=t.createContext({});function e(n){const a=t.useContext(p);return t.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230111-gatsby-1-index-mdx-a13e9fc7cab00b7bf9c8.js.map