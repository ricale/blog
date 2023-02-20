"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9619],{5180:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return z}});var a=t(1151),l=t(7294);function o(e){const n=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",ul:"ul",li:"li",ol:"ol",code:"code",button:"button"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h2,{id:"react",style:{position:"relative"}},l.createElement(n.a,{href:"#react","aria-label":"react permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"React"),l.createElement(n.h3,{id:"css-variables-for-react-devs",style:{position:"relative"}},l.createElement(n.a,{href:"#css-variables-for-react-devs","aria-label":"css variables for react devs permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://www.joshwcomeau.com/css/css-variables-for-react-devs/"},"CSS Variables for React Devs")),l.createElement(n.p,null,"React 와 CSS-in-JS 를 사용하면서 CSS variable 을 쓰는 것에 대한 장단점을 설명하는 글."),l.createElement(n.p,null,"장점"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"자바스크립트 변수로 css 값을 지정하는 것 (예를 들면 styled-components 의 theme 기능을 사용하는 것) 보다 좀 더 선언적이고 가독성 있는 코드가 가능하다."),"\n",l.createElement(n.li,null,"media query 적용 및 관리에 있어 더 유리하다."),"\n",l.createElement(n.li,null,"CSS-in-JS 로 해결이 어려운 이슈들을 해결할 수 있다","\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"좀 더 다양한 애니메이션을 쉽게 적용할 수 있다"),"\n",l.createElement(n.li,null,"Dark Mode 깜빡임 현상을 해결할 수 있다\n단점"),"\n"),"\n"),"\n",l.createElement(n.li,null,"타입 지정이 안 된다 (= IDE 자동완성 기능을 쓸 수 없다)"),"\n",l.createElement(n.li,null,"특정 상황에서 (자바스크립트로 값을 지정하는 것보다) 덜 유연하다"),"\n"),l.createElement(n.p,null,"평소에 생각해보지 않은 흥미로운 관점이다. 본문 글이 보다 상세하고 예제 코드들도 포함하고 있으니, 흥미롭다면 본문을 읽어보자."),l.createElement(n.h3,{id:"applying-design-patterns-in-react-strategy-pattern",style:{position:"relative"}},l.createElement(n.a,{href:"#applying-design-patterns-in-react-strategy-pattern","aria-label":"applying design patterns in react strategy pattern permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://dev.to/itshugo/applying-design-patterns-in-react-strategy-pattern-enn"},"Applying Design Patterns in React: Strategy Pattern")),l.createElement(n.p,null,'React 컴포넌트를 구현할 때, 디자인 패턴 중 하나인 "전략 패턴"을 언제 적용하면 좋을지 예제 코드와 함께 설명한다.'),l.createElement(n.p,null,"이런 글을 볼 때마다 느끼는 건"),l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"“디자인 패턴“이라고 하지만 코드 자체가 특별히 색다르거나 훌륭하지 않다. 나도 이미 비슷한 형태로 구현한 적이 꽤 있을 것 같다. (실제로 그런 경우가 많다)"),"\n",l.createElement(n.li,null,"하지만 그런 평범한 것을 규칙으로서 혹은 패턴으로서 접하게 되면 좀 더 기억에 잘 남는다."),"\n"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"앞으로 비슷한 상황이 생기면 적용해보고 싶다."),"\n",l.createElement(n.li,null,"(혹은) “아 이건 이래서 별로야 저래서 별로야” 하고 비판적으로 받아들이고 자신이 알고 있는 더 좋은/적절한 패턴을 다시 찾아보게 된다."),"\n"),l.createElement(n.p,null,"라는 것이다. 그런 의미에서 읽어볼만한 글이다. 글이 길지도 않아서 읽기 좋다."),l.createElement(n.h3,{id:"how-to-use-google-sheets-as-a-database-with-react-and-serverless",style:{position:"relative"}},l.createElement(n.a,{href:"#how-to-use-google-sheets-as-a-database-with-react-and-serverless","aria-label":"how to use google sheets as a database with react and serverless permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://thenewstack.io/how-to-use-google-sheets-as-a-database-with-react-and-ssr"},"How to Use Google Sheets as a Database with React and Serverless")),l.createElement(n.p,null,"구글 스프래드시트를 Serverless DB 처럼 활용해, Next.js 와 Gatsby 로 웹앱을 만드는 것에 관한 글. 글에 포함된 예제는 투표 기능을 구현했다."),l.createElement(n.p,null,"데이터가 시트에 저장되기 때문에 별도의 대시보드를 만들지 않고도 비개발자(기획자, 마케터 등)분들에게 쉽게 공유할 수 있다는 장점이 있다."),l.createElement(n.h2,{id:"css",style:{position:"relative"}},l.createElement(n.a,{href:"#css","aria-label":"css permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CSS"),l.createElement(n.h3,{id:"css---where와-is를-사용해보자-selectors-level-4",style:{position:"relative"}},l.createElement(n.a,{href:"#css---where%EC%99%80-is%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90-selectors-level-4","aria-label":"css   where와 is를 사용해보자 selectors level 4 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://7942yongdae.tistory.com/73"},"CSS - :where()와 :is()를 사용해보자 [Selectors Level 4]")),l.createElement(n.p,null,l.createElement(n.code,null,":where()")," 와 ",l.createElement(n.code,null,":is()")," 에 대한 설명글. 둘다 CSS 스타일 선언 시 중복 제거에 쓰인다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css"><span class="token comment">/* Level 1 */</span>\n<span class="token selector">section h1,\narticle h1,\naside h1</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">:where(section, article, aside) h1</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">:is(section, article, aside) h1</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"차이점은 ",l.createElement(n.code,null,":where()")," 가 명시성이 0이라는 것."),l.createElement(n.p,null,"본문에는 아직 초안이라고 나와있지만 그건 해당 글이 21년도 글이라 그렇고, 현재는 ",l.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where#browser_compatibility"},l.createElement(n.code,null,":where()"))," 와 ",l.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is#browser_compatibility"},l.createElement(n.code,null,":is()"))," 둘 다 사용 가능하다."),l.createElement(n.h2,{id:"etc",style:{position:"relative"}},l.createElement(n.a,{href:"#etc","aria-label":"etc permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Etc"),l.createElement(n.h3,{id:"번역-consolelog와-함께하는-재미",style:{position:"relative"}},l.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-consolelog%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-%EC%9E%AC%EB%AF%B8","aria-label":"번역 consolelog와 함께하는 재미 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://ykss.netlify.app/translation/fun-with-console-log/"},"(번역) console.log()와 함께하는 재미")),l.createElement(n.p,null,l.createElement(n.code,null,"console")," 모듈의 다양한 사용법에 대한 설명글. 이미 많이 알려진 내용이지만, 알고 있는 사람도 리마인드 하기에 좋은 글이다."),l.createElement(n.h3,{id:"techblogposts",style:{position:"relative"}},l.createElement(n.a,{href:"#techblogposts","aria-label":"techblogposts permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(n.a,{href:"https://techblogposts.com/"},"TechBlogPosts")),l.createElement(n.p,null,"IT 회사들이 운영하는 기술 블로그들의 글을 모아서 (목록 및 링크만) 보여주는 블로그. 한 눈에 보여서 꽤 괜찮다.")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#react"},"React"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#css-variables-for-react-devs"},"CSS Variables for React Devs")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#applying-design-patterns-in-react-strategy-pattern"},"Applying Design Patterns in React: Strategy Pattern")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#how-to-use-google-sheets-as-a-database-with-react-and-serverless"},"How to Use Google Sheets as a Database with React and Serverless")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#css"},"CSS"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#css---where%EC%99%80-is%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90-selectors-level-4"},"CSS - :where()와 :is()를 사용해보자 [Selectors Level 4]")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#etc"},"Etc"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EB%B2%88%EC%97%AD-consolelog%EC%99%80-%ED%95%A8%EA%BB%98%ED%95%98%EB%8A%94-%EC%9E%AC%EB%AF%B8"},"(번역) console.log()와 함께하는 재미")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#techblogposts"},"TechBlogPosts")),"\n"),"\n"),"\n")))}var r,c,s,i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},d=t(1880),p=t(3723),m=t(6758),u=t(3904),h=t(891),g=t(6120),f=t(5777),v=t(7178),b=t(2889),E=t(5924),x=t(7466);function w(e){let{data:n,children:t}=e;const a=l.useRef(),{frontmatter:o,sameSeriesPosts:r}=n.mdx,{title:c,slug:s,date:i,tags:d,series:p,heroImage:u,heroImageAlt:h}=o;return l.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(m.Z,null,l.createElement(S,null,l.createElement("h1",null,c),l.createElement(y,null,i),l.createElement(b.Z,{tags:d})),l.createElement(v.Z,{name:p,data:r,current:s}),l.createElement(x.Z,{data:u,alt:h}),l.createElement(k,{ref:a},t),l.createElement(f.Z,null))}const S=h.ZP.div(r||(r=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=h.ZP.div(c||(c=(0,d.Z)(["\n  margin: 16px 0;\n"]))),k=(0,h.ZP)(g.Z)(s||(s=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),C=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:o,slug:r,tags:c,heroImage:s,previewContent:i},excerpt:d}=a.mdx,m=s?(0,p.c)(s):null;return l.createElement(u.Z,{title:o,description:null!=i?i:d,path:"posts/"+r,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function z(e){return l.createElement(w,e,l.createElement(i,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},6120:function(e,n,t){t.d(n,{Z:function(){return x}});var a,l=t(1880),o=t(891);var r,c=(0,o.iv)(a||(a=(0,l.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder));var s,i=(0,o.iv)(r||(r=(0,l.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: #666666;\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: #dddddd;\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n      }\n    }\n  }\n'])));var d,p=(0,o.iv)(s||(s=(0,l.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])));var m,u=(0,o.iv)(d||(d=(0,l.Z)(["\n  img {\n    border: 1px solid #333333;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])));var h,g,f=(0,o.iv)(m||(m=(0,l.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),v=t(5785);var b,E=(0,o.iv)(h||(h=(0,l.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(0,v.Z)(new Array(30)).map(((e,n)=>(0,o.iv)(g||(g=(0,l.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400);var x=o.ZP.div(b||(b=(0,l.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n"])),p,f,u,E,i,c,(e=>e.theme.colors.code),(e=>e.theme.colors.onCode))},7466:function(e,n,t){var a,l=t(1880),o=t(7294),r=t(3723);const c=t(891).ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const l=n?(0,r.c)(n):null,s=n?null!=a?a:"PostImage":"by ricale";return o.createElement(c,null,l?o.createElement(r.G,{image:l,alt:s}):o.createElement(r.S,{src:"../images/defaultThumbnail.jpeg",alt:s,__imageData:t(6955)}),o.createElement("p",null,s))}},7178:function(e,n,t){var a,l,o,r,c,s=t(1880),i=t(7294),d=t(1883),p=t(891);const m=p.ZP.div(a||(a=(0,s.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),u=p.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=p.ZP.ol(o||(o=(0,s.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=p.ZP.li(r||(r=(0,s.Z)(["\n  ","\n"])),(e=>e.active&&(0,p.iv)(c||(c=(0,s.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,o]=i.useState(!0);return t?i.createElement(m,null,i.createElement(u,{collapsed:l,onClick:()=>o((e=>!e))},i.createElement("h2",null,"시리즈 ",i.createElement(d.Link,{to:"/series/"+n+"/"},'"'+n+'"')),i.createElement("span",null,"▲")),!l&&i.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return i.createElement(g,{active:n===a,key:n},i.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return m}});var a,l=t(1880),o=t(7294),r=t(891),c=t(1883);const s=(0,r.ZP)(c.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var i,d=function(e){let{value:n}=e;return o.createElement(s,{to:"/tags/"+n},n)};const p=r.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var m=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(p,a,l.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(d,{value:e.fieldValue}),t&&!!e.totalCount&&o.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,o;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let c;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var s;c=null!==(s=n[t-1])&&void 0!==s?s:null;break}if(void 0===c&&(c=n[n.length-1]),null===(o=e.current)||void 0===o||o.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),c){var i;const n=c.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(i=e.current)||void 0===i?void 0:i.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230105-read-writings-index-mdx-fe09f31b3c051064ea48.js.map