"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8408],{4075:function(e,t,n){n.r(t),n.d(t,{Head:function(){return H},default:function(){return k}});var l=n(1151),r=n(7294),a=n(1373);function c(e){const t=Object.assign({div:"div",h3:"h3",a:"a",ul:"ul",li:"li",h1:"h1",p:"p",em:"em",strong:"strong"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.div,{className:"md"},r.createElement(t.h3,{id:"시리즈-알고리즘-문제풀기-개요",style:{position:"relative"}},r.createElement(t.a,{href:"#%EC%8B%9C%EB%A6%AC%EC%A6%88-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EA%B8%B0-%EA%B0%9C%EC%9A%94","aria-label":"시리즈 알고리즘 문제풀기 개요 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'시리즈 "알고리즘 문제풀기" 개요'),r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"1~2주 (최소) 1개 문제 풀기를 목표로 한다."),"\n",r.createElement(t.li,null,"JavaScript 로 푼다."),"\n"),r.createElement(t.h1,{id:"문제",style:{position:"relative"}},r.createElement(t.a,{href:"#%EB%AC%B8%EC%A0%9C","aria-label":"문제 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"문제"),r.createElement(t.p,null,r.createElement(t.a,{href:"https://www.acmicpc.net/problem/11053"},"Baekjoon Online Judge - 11053. 가장 긴 증가하는 부분 수열")),r.createElement(t.p,null,'수열 A 가 주어졌을 때, "가장 긴 증가하는 부분 수열"(= Longest Increasing Subsequence, LIS)의 길이를 구하는 문제다.'),r.createElement(t.p,null,"예를 들어 수열이 [10, 20, 10, 30, 20, 50] 일 경우, LIS 는 [",r.createElement(t.em,null,r.createElement(t.strong,null,'"10"')),", ",r.createElement(t.em,null,r.createElement(t.strong,null,'"20"')),", 10, ",r.createElement(t.em,null,r.createElement(t.strong,null,'"30"')),", 20, ",r.createElement(t.em,null,r.createElement(t.strong,null,'"50"')),"] 이고 길이는 4이다."),r.createElement(t.h1,{id:"접근",style:{position:"relative"}},r.createElement(t.a,{href:"#%EC%A0%91%EA%B7%BC","aria-label":"접근 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"접근"),r.createElement(t.p,null,"DP 카테고리에 있는 문제를 푸는 것이었으므로 DP 로 푸는 것이라는 건 알고 있었다."),r.createElement(t.p,null,"DP 는 문제를 간단한 문제로 나눠 푸는 방법을 말한다. 보통 문제를 작은 단위로 나눠서 가장 작은 단위의 답을 알아낸 뒤, 그 답을 이용해서 그보다 큰 단위의 답을 알아내고, 그 답을 또 재활용해 더 큰 단위의 답을 알아내서 결국 문제의 답을 찾아내는 식이다."),r.createElement(t.p,null,"이 문제에서 응용해보자면 짧은 범위 숫자에 대해 LIS 의 길이를 구한 뒤에, 그 답을 사용해 더 큰 단위의 답을 구하면 될 것이다."),r.createElement(t.p,null,"수열 10, 20, 10, 30, 20, 50 을 예로 들면"),r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"수열 [10] 에서 LIS 길이 = 1"),"\n",r.createElement(t.li,null,"수열 [10, 20] 에서 LIS 길이 = 수열 [10] 에서 LIS 의 길이 + (20 까지 포함했을 경우 LIS 가 더 길어지면 +1 아니면 +0) = 2"),"\n",r.createElement(t.li,null,"수열 [10, 20, 10] 에서 LIS 길이 = 수열 [10, 20] 에서 LIS 의 길이 + (10 까지 포함했을 경우 LIS 가 더 길어지면 +1 아니면 +0) = 2"),"\n",r.createElement(t.li,null,"수열 [10, 20, 10, 30] 에서 LIS 길이 = 수열 [10, 20, 10] 에서 LIS 의 길이 + (30 까지 포함했을 경우 LIS 가 더 길어지면 +1 아니면 +0) = 3"),"\n",r.createElement(t.li,null,"..."),"\n"),r.createElement(t.p,null,"이런 식이다."),r.createElement(t.h1,{id:"풀이",style:{position:"relative"}},r.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4","aria-label":"풀이 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이"),r.createElement(a.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/11053/solution.js#L1-L17"}),r.createElement(t.h1,{id:"후기",style:{position:"relative"}},r.createElement(t.a,{href:"#%ED%9B%84%EA%B8%B0","aria-label":"후기 permalink",className:"anchor before"},r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"후기"),r.createElement(t.p,null,"DP 를 사용하는 걸 모르고 풀었으면 풀 수 있었을까? 아니었을 것 같다. 풀었다고 해도 돌고 돌아 어거지로 풀었을 것 같다."),r.createElement(t.p,null,"역시 많이 풀어봐야 한다. 그래야 이런 문제가 DP 라는 걸 알 수 있으니까.")),"\n",r.createElement(t.div,{className:"toc"},r.createElement(t.p,null,"목차"),r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%EC%8B%9C%EB%A6%AC%EC%A6%88-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EA%B8%B0-%EA%B0%9C%EC%9A%94"},'시리즈 "알고리즘 문제풀기" 개요')),"\n"),"\n"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%EB%AC%B8%EC%A0%9C"},"문제")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%EC%A0%91%EA%B7%BC"},"접근")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4"},"풀이")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"#%ED%9B%84%EA%B8%B0"},"후기")),"\n")))}var i,m,o,u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},s=n(1880),E=n(1883),h=n(3723),d=n(9178),p=n(3904),v=n(891),f=n(3234),g=n(6117),C=n(5777),b=n(7178),S=n(5924),B=n(4742);function A(e){let{data:t,children:n}=e;const l=r.useRef(),{frontmatter:a,sameSeriesPosts:c}=t.mdx,{title:i,slug:m,date:o,series:u}=a;return r.useEffect((()=>{var e;const t=null===(e=l.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),n=new IntersectionObserver((()=>(0,S.Z)(l,t)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==t||t.forEach((e=>n.observe(e))),()=>n.disconnect()}),[]),r.createElement(d.Z,null,r.createElement(w,null,r.createElement("h1",null,r.createElement(E.Link,{to:"/posts/"+m},i)),r.createElement(L,null,o)),r.createElement(b.Z,{name:u,data:c,current:m}),r.createElement(I,{ref:l},n),r.createElement(g.Z,{data:c,current:m}),r.createElement(B.Z,null),r.createElement(C.Z,null))}const w=v.ZP.div(i||(i=(0,s.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),L=v.ZP.div(m||(m=(0,s.Z)(["\n  margin-left: 2px;\n"]))),I=(0,v.ZP)(f.Z)(o||(o=(0,s.Z)(["\n  margin-bottom: 120px;\n"]))),H=e=>{var t,n;let{data:l}=e;const{frontmatter:{title:a,slug:c,tags:i,heroImage:m,previewContent:o},excerpt:u}=l.mdx,s=m?(0,h.c)(m):null;return r.createElement(p.Z,{title:a,description:null!=o?o:u,path:"posts/"+c,thumbnail:null==s||null===(t=s.images)||void 0===t||null===(n=t.fallback)||void 0===n?void 0:n.src,keywords:i,ogType:"article"})};function k(e){return r.createElement(A,e,r.createElement(u,e))}},1373:function(e,t,n){var l,r=n(1880),a=n(7294),c=n(891);let i=1;const m=c.ZP.div(l||(l=(0,r.Z)(["\n  .emgithub-container table td {\n    padding: 0;\n  }\n  .emgithub-file {\n    margin-top: 0;\n  }\n  .emgithub-file .file-meta-dark {\n    background-color: rgb(35, 36, 31);\n  }\n"])));t.Z=function(e){let{url:t}=e;const n=(0,a.useRef)(null),l=(0,a.useRef)(i++);return(0,a.useEffect)((()=>{var e;const l=document.createElement("script"),r={src:"https://emgithub.com/embed-v2.js?target="+encodeURIComponent(t)+"&style=monokai-sublime&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on"};Object.entries(r).forEach((e=>{let[t,n]=e;l.setAttribute(t,n)})),null===(e=n.current)||void 0===e||e.appendChild(l)}),[]),a.createElement(m,{id:"emgithub"+l.current,ref:n})}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2023-230612-algorithm-4-lis-index-mdx-7699dc7dd8299076223c.js.map