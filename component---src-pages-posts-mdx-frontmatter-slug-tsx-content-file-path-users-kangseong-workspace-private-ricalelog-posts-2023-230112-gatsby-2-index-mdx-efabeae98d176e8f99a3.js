"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4207],{4387:function(e,n,t){t.r(n),t.d(n,{Head:function(){return y},default:function(){return b}});var l=t(1151),a=t(7294);function m(e){const n=Object.assign({p:"p",h1:"h1",code:"code",a:"a",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"이전 글에서는 Gatsby 기본 기능을 구현을 위한 튜토리얼을 소개했고 태그 기능을 구현했다. 오늘은 MDX 글 안에 인라인 이미지와 테이블을 삽입해보자."),"\n",a.createElement(n.h1,null,"1. 이미지 삽입"),"\n",a.createElement(n.p,null,"정적 이미지는 ",a.createElement(n.code,null,"gatsby-plugin-image")," 플러그인과 ",a.createElement(n.code,null,"StaticImage")," 컴포넌트로 적용한다. 페이지 컴포넌트에 들어가는 동적 이미지는 ",a.createElement(n.code,null,"gatsby-transformer-sharp")," 플러그인과 ",a.createElement(n.code,null,"GatsbyImage")," 컴포넌트로 적용한다. 그렇다면 MDX 본문 안에 들어가는 이미지는 어떻게 적용할까?"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-images-in-markdown/"},"공식 문서"),"에도 잘 나와있지만 그럼에도 불구하고 적용에 살짝 애를 먹었기 때문에 기록해두도록 하겠다."),"\n",a.createElement(n.h2,null,"1.1. ",a.createElement(n.code,null,"gatsby-remark-images")," 플러그인 적용"),"\n",a.createElement(n.p,null,"일단 플러그인을 설치하자."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-sh"},"$ npm i gatsby-remark-images\n")),"\n",a.createElement(n.p,null,"그리고 ",a.createElement(n.code,null,"gatsby-config.ts")," 를 수정하자."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-ts"},'// gatsby-config.ts\nimport type { GatsbyConfig } from "gatsby";\n\nconst config: GatsbyConfig = {\n  // ...\n  plugins: [\n    // ...\n    // "gatsby-plugin-mdx", // <- 이렇게 문자열 형식으로 gatsby-plugin-mdx 를 쓰고 있었다면, 이 줄은 삭제하자.\n    {\n      resolve: "gatsby-plugin-mdx",\n      options: {\n        gatsbyRemarkPlugins: [\n          {\n            resolve: "gatsby-remark-images",\n            options: {\n              maxWidth: 800,\n              backgroundColor: "none",\n            },\n          },\n        ],\n      },\n    },\n    // ....\n  ],\n};\n\nexport default config;\n')),"\n",a.createElement(n.h2,null,"1.2. MDX 에 인라인 이미지 사용"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions"},"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-mdx"},"![Alt message](./screenshot.png)\n")),"\n",a.createElement(n.h1,null,"2. 인라인 테이블 문법 적용"),"\n",a.createElement(n.p,null,"Markdown 은 원래 아래와 같은 문법으로 테이블을 삽입할 수 있다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-mdx"},"| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |\n")),"\n",a.createElement(n.p,null,"...있는 줄 알았다. 그런데 알고 보니 이 문법은 원래 마크다운 기본 문법이 아니라 GitHub 에서 만든 ",a.createElement(n.a,{href:"https://github.github.com/gfm/"},"GitHub Flavored Markdown"),"(GFM) 스펙에서 지원하는 문법이었다. 당연히 MDX 에서도 기본적으로 적용되지 않는다. 하지만 다행히도 Gatsby 에서 GFM 을 적용할 수 있는 방법을 제공한다."),"\n",a.createElement(n.h2,null,"2.1. ",a.createElement(n.code,null,"remark-gfm")," 플러그인 적용"),"\n",a.createElement(n.p,null,"일단 플러그인을 설치하자."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-sh"},"$ npm i remark-gfm@^1\n")),"\n",a.createElement(n.p,null,"여기서 버전 1을 설치하는 이유는 Gatsby 가 ESM 을 아직 지원하지 않는데, remark-gfm 버전 2부터는 ESM 이기 때문이다. ",a.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxoptions"},"공식 문서"),"에도 잘 설명되어 있다. (mdxOptions 섹션의 Please Note 부분을 보자.)"),"\n",a.createElement(n.p,null,"그리고 ",a.createElement(n.code,null,"gatsby-config.ts")," 에 플러그인을 적용하자."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-ts"},'import type { GatsbyConfig } from "gatsby";\n\nconst config: GatsbyConfig = {\n  // ...\n  plugins: [\n    // ...\n    {\n      resolve: "gatsby-plugin-mdx",\n      options: {\n        mdxOptions: {\n          remarkPlugins: [require("remark-gfm")],\n        },\n        // ...\n      },\n    },\n    // ...\n  ],\n};\n\nexport default config;\n')),"\n",a.createElement(n.h2,null,"2.2. MDX 에 테이블 사용"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-mdx"},"| 호스트명     | IP 주소         |\n| ------------ | --------------- |\n| mydomain.com | 111.111.111.222 |\n| mydomain.com | 111.111.222.111 |\n| mydomain.com | 111.222.111.111 |\n| mydomain.com | 222.111.111.111 |\n")),"\n",a.createElement(n.table,null,a.createElement(n.thead,null,a.createElement(n.tr,null,a.createElement(n.th,null,"호스트명"),a.createElement(n.th,null,"IP 주소"))),a.createElement(n.tbody,null,a.createElement(n.tr,null,a.createElement(n.td,null,"mydomain.com"),a.createElement(n.td,null,"111.111.111.222")),a.createElement(n.tr,null,a.createElement(n.td,null,"mydomain.com"),a.createElement(n.td,null,"111.111.222.111")),a.createElement(n.tr,null,a.createElement(n.td,null,"mydomain.com"),a.createElement(n.td,null,"111.222.111.111")),a.createElement(n.tr,null,a.createElement(n.td,null,"mydomain.com"),a.createElement(n.td,null,"222.111.111.111")))))}var r,c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(m,e)):m(e)},o=t(1880),s=t(1883),u=t(3723),i=t(1858),g=t(3904),d=t(891),p=t(5534);const E=e=>{let{data:n,children:t}=e;const{title:l,date:m,tags:r,heroImage:c,heroImageAlt:o}=n.mdx.frontmatter,g=c?(0,u.c)(c):null;return a.createElement(i.Z,null,a.createElement("h1",null,l),a.createElement(h,null,r.map((e=>a.createElement("li",{key:e},a.createElement(s.rU,{to:"/tags/"+e},e))))),a.createElement("div",null,m),!!g&&a.createElement(u.G,{image:g,alt:null!=o?o:""}),a.createElement(p.Z,null,t))},h=d.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),y=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:m,slug:r,tags:c,heroImage:o},excerpt:s}=l.mdx,i=o?(0,u.c)(o):null;return a.createElement(g.Z,{title:m,description:s,path:"posts/"+r,thumbnail:null==i||null===(n=i.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function b(e){return a.createElement(E,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230112-gatsby-2-index-mdx-efabeae98d176e8f99a3.js.map