"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5710],{3754:function(e,t,l){l.r(t),l.d(t,{Head:function(){return y},default:function(){return Z}});var n=l(1151),a=l(7294),r=l(1373);function c(e){const t=Object.assign({div:"div",h3:"h3",a:"a",ul:"ul",li:"li",h1:"h1",p:"p",code:"code",em:"em"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.div,{className:"md"},a.createElement(t.h3,{id:"시리즈-알고리즘-문제풀기-개요",style:{position:"relative"}},a.createElement(t.a,{href:"#%EC%8B%9C%EB%A6%AC%EC%A6%88-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EA%B8%B0-%EA%B0%9C%EC%9A%94","aria-label":"시리즈 알고리즘 문제풀기 개요 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'시리즈 "알고리즘 문제풀기" 개요'),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"1~2주 (최소) 1개 문제 풀기를 목표로 한다."),"\n",a.createElement(t.li,null,"JavaScript 로 푼다."),"\n"),a.createElement(t.h1,{id:"문제",style:{position:"relative"}},a.createElement(t.a,{href:"#%EB%AC%B8%EC%A0%9C","aria-label":"문제 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"문제"),a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1040"},"Baekjoon Online Judge - 1040. 정수")),a.createElement(t.p,null,"자연수 ",a.createElement(t.code,null,"N")," 과 ",a.createElement(t.code,null,"K")," 가 주어질 때, ",a.createElement(t.em,null,a.createElement(t.code,null,"N")," 보다 크면서 ",a.createElement(t.code,null,"K")," 개의 서로 다른 숫자로 이루어진 수")," 중 ",a.createElement(t.em,null,"가장 작은 수"),"를 찾는 문제이다."),a.createElement(t.h1,{id:"접근",style:{position:"relative"}},a.createElement(t.a,{href:"#%EC%A0%91%EA%B7%BC","aria-label":"접근 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"접근"),a.createElement(t.p,null,'가장 처음 든 생각은 "백트래킹으로 가능한 숫자를 찾으면 되지 않을까?" 였다. 높은 자릿수부터 숫자를 하나씩 채워가면서, 조건에 맞는 숫자를 만드는 방식이었다.'),a.createElement(t.p,null,"브루트포스 만큼은 아니라도 오래 걸릴 방법이라서 ",a.createElement(t.code,null,"N")," 의 범위가 큰 게 조금 불안하긴 했지만 (",a.createElement(t.code,null,"N")," 은 10",a.createElement("sup",null,"18"),"보다 작거나 같은 자연수), 가능한지 아닌지 궁금하기도 했기 때문에 일단 시도해봤다."),a.createElement(t.h1,{id:"시도",style:{position:"relative"}},a.createElement(t.a,{href:"#%EC%8B%9C%EB%8F%84","aria-label":"시도 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"시도"),a.createElement(r.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1040/try1.js#L7-L92"}),a.createElement(t.h1,{id:"시도-결과",style:{position:"relative"}},a.createElement(t.a,{href:"#%EC%8B%9C%EB%8F%84-%EA%B2%B0%EA%B3%BC","aria-label":"시도 결과 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"시도 결과"),a.createElement(t.p,null,'로컬에서는 문제 없이 동작하지만 채점 페이지에 제출하면 "시간 초과"로 통과하지 못한다.'),a.createElement(t.p,null,'아무래도 현재 코드에서는 어떻게 개선을 해봤자 "시간 초과"의 늪에서는 벗어나지 못할 것만 같은 느낌이 들었다. 역시 백트래킹은 정답이 아닌 것 같았다.'),a.createElement(t.p,null,'어떤 방법으로 풀어야할까 고민하다가 얼마전에 이 문제 관련해서 들었던 조언과 구글링을 토대로, "현재 숫자에서 낮은 자릿수부터 숫자를 하나씩 바꿔가며 답을 찾아보는" 방법을 쓰기로 결정했다.'),a.createElement(t.h1,{id:"풀이",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4","aria-label":"풀이 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이"),a.createElement(r.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1040/solution.js#L1-L104"}),a.createElement(t.h1,{id:"후기",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%9B%84%EA%B8%B0","aria-label":"후기 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"후기"),a.createElement(t.p,null,"드디어 해결되었다."),a.createElement(t.p,null,"물론 한 번에 채점을 통과하지는 못했다."),a.createElement(t.p,null,"백준이 릿코드와 다른 점은 채점이 실패했을 경우 반례도 직접 찾아야 한다는 건데, 이게 다양하게 생각하게 해줘서 좋은 점도 있는가 하면 도저히 반례가 떠오르지 않을 경우 답답해서 미칠 것 같다는 나쁜 점도 있다. 특히 마지막에 발목 잡은 반례를 결국 직접 찾지 못해서 질문 게시판에서 반례를 찾았다."),a.createElement(t.p,null,"문제를 푸는 방법도 스스로 생각해낸 것이라기 보다는 아니라 조언과 구글링을 통해 얻었으니, 스스로 풀었다고 하기에는 민망하다."),a.createElement(t.p,null,"아무래도 많은 문제를 꾸준히 풀어봐야 겠다는 생각이 든다. 푸는 방법을 많이 아는 것도 중요하지만 역시 실전에서 겪어보는 게 최고인 것 같다. 실전에서 부딪혀 얻은 키워드는 맹목적인 공부를 통해 얻은 키워드보다 선명하게 기억에 남는다. 1~2주에 한 문제를 풀겠다는 목표도 제대로 못 지키고 있는데 좀 더 신경써서 최소 1주에 한 문제를 푸는 걸 목표로 해야겠다.")),"\n",a.createElement(t.div,{className:"toc"},a.createElement(t.p,null,"목차"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%EC%8B%9C%EB%A6%AC%EC%A6%88-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EA%B8%B0-%EA%B0%9C%EC%9A%94"},'시리즈 "알고리즘 문제풀기" 개요')),"\n"),"\n"),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%EB%AC%B8%EC%A0%9C"},"문제")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%EC%A0%91%EA%B7%BC"},"접근")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%EC%8B%9C%EB%8F%84"},"시도")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%EC%8B%9C%EB%8F%84-%EA%B2%B0%EA%B3%BC"},"시도 결과")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4"},"풀이")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%9B%84%EA%B8%B0"},"후기")),"\n")))}var i,m,o,h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},E=l(1880),s=l(1883),u=l(3723),d=l(9178),v=l(3904),p=l(891),f=l(3234),C=l(6117),g=l(5777),B=l(7178),b=l(5924),A=l(4742);function S(e){let{data:t,children:l}=e;const n=a.useRef(),{frontmatter:r,sameSeriesPosts:c}=t.mdx,{title:i,slug:m,date:o,series:h}=r;return a.useEffect((()=>{var e;const t=null===(e=n.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),l=new IntersectionObserver((()=>(0,b.Z)(n,t)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==t||t.forEach((e=>l.observe(e))),()=>l.disconnect()}),[]),a.createElement(d.Z,null,a.createElement(H,null,a.createElement("h1",null,a.createElement(s.Link,{to:"/posts/"+m},i)),a.createElement(w,null,o)),a.createElement(B.Z,{name:h,data:c,current:m}),a.createElement(k,{ref:n},l),a.createElement(C.Z,{data:c,current:m}),a.createElement(A.Z,null),a.createElement(g.Z,null))}const H=p.ZP.div(i||(i=(0,E.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),w=p.ZP.div(m||(m=(0,E.Z)(["\n  margin-left: 2px;\n"]))),k=(0,p.ZP)(f.Z)(o||(o=(0,E.Z)(["\n  margin-bottom: 120px;\n"]))),y=e=>{var t,l;let{data:n}=e;const{frontmatter:{title:r,slug:c,tags:i,heroImage:m,previewContent:o},excerpt:h}=n.mdx,E=m?(0,u.c)(m):null;return a.createElement(v.Z,{title:r,description:null!=o?o:h,path:"posts/"+c,thumbnail:null==E||null===(t=E.images)||void 0===t||null===(l=t.fallback)||void 0===l?void 0:l.src,keywords:i,ogType:"article"})};function Z(e){return a.createElement(S,e,a.createElement(h,e))}},1373:function(e,t,l){var n,a=l(1880),r=l(7294),c=l(891);let i=1;const m=c.ZP.div(n||(n=(0,a.Z)(["\n  .emgithub-container table td {\n    padding: 0;\n  }\n  .emgithub-file {\n    margin-top: 0;\n  }\n  .emgithub-file .file-meta-dark {\n    background-color: rgb(35, 36, 31);\n  }\n"])));t.Z=function(e){let{url:t}=e;const l=(0,r.useRef)(null),n=(0,r.useRef)(i++);return(0,r.useEffect)((()=>{var e;const n=document.createElement("script"),a={src:"https://emgithub.com/embed-v2.js?target="+encodeURIComponent(t)+"&style=monokai-sublime&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on"};Object.entries(a).forEach((e=>{let[t,l]=e;n.setAttribute(t,l)})),null===(e=l.current)||void 0===e||e.appendChild(n)}),[]),r.createElement(m,{id:"emgithub"+n.current,ref:l})}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2023-230507-algorithm-3-integer-index-mdx-e67d8b4dd229d0d147a9.js.map