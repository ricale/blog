"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7271],{5506:function(e,t,l){l.r(t),l.d(t,{Head:function(){return y},default:function(){return Z}});var n=l(1151),a=l(7294),r=l(4703),c=l(1373);function i(e){const t=Object.assign({div:"div",p:"p",h3:"h3",a:"a",h4:"h4",ul:"ul",li:"li"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.div,{className:"md"},a.createElement(t.p,null,"이 글은 풀이를 스스로 찾아내지 못한 문제들을 정리해놓은 글이다. 오답노트가 으레 그렇듯 나중에 다시 찾아와서 풀어볼 생각이다."),a.createElement(t.h3,{id:"boj---9252-lcs-2",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---9252-lcs-2","aria-label":"boj   9252 lcs 2 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/9252"},"BOJ - 9252. LCS 2")),a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.acmicpc.net/problem/9251"},"LCS"),"와 매우 비슷한 문제로, 푸는 방법도 매우 비슷하다. 일단 최장 공통 부분 길이를 구하는 로직은 동일한데, 문제는 최장 공통 문자열 그 자체를 찾는 것. 최장 공통 부분 길이를 구할 때 썼던 DP 테이블을 활용하면 된다. ...여기까지는 나도 직접 추론했지만, DP 테이블을 잘못된 방법으로 활용해서 답을 찾지는 못했다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/9252/solution.js#L1-L42"})),a.createElement(t.h4,{id:"풀이-참고",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0","aria-label":"풀이 참고 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://goodbyefin.tistory.com/43"},"[백준][9252번][C/C++] LCS2")),"\n"),a.createElement(t.h3,{id:"boj---1865-웜홀",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---1865-%EC%9B%9C%ED%99%80","aria-label":"boj   1865 웜홀 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1865"},"BOJ - 1865. 웜홀")),a.createElement(t.p,null,"문제를 보자마자 플로이드-워셜이겠구나 하고 풀었다."),a.createElement(t.p,null,"그런데 전에 분명 풀었음에도 잘 기억이 나지 않아서 떠듬대다가 이전에 푼 문제와 검색해서 나온 글을 참고해서 풀었다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1865/solution.js#L3-L48"})),a.createElement(t.p,null,"...그런데 벨만-포드로도 풀 수 있다고 한다. 오히려 더 적합하다고 한다. 이 방법으로도 나중에 풀어보자."),a.createElement(t.h4,{id:"풀이-참고-1",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-1","aria-label":"풀이 참고 1 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://8iggy.tistory.com/154"},"플로이드-워셜 알고리즘(Floyd-Warshall Algorithm)")),"\n"),a.createElement(t.h3,{id:"boj---11780-플로이드-2",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---11780-%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-2","aria-label":"boj   11780 플로이드 2 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/11780"},"BOJ - 11780. 플로이드 2")),a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.acmicpc.net/problem/11404"},"플로이드"),"와 매우 유사한 문제로, 각 도시간 이동 시 최소 비용을 구해야 한다는 점은 동일하다. 단지 이 문제는 거기에서 더해, 각 도시간 이동 시 최소 비용으로 이동할 수 있는 경로까지 찾아야 한다는 점이 다르다."),a.createElement(t.p,null,'이 문제에서 추가로 요구하는 "이동 경로"를 찾는 것은 사실 큰 어려움 없이 했다. 하지만 플로이드-워셜 알고리즘 자체가 헷갈려서 (어째 풀 때마다 헷갈릴까..) 다시 살펴보기도 했고, 나중에 복습할 때 풀어보면 좋을 것 같아서 기록해둔다.'),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/11780/solution.js#L1-L57"})),a.createElement(t.h3,{id:"boj---2263-트리의-순회",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2263-%ED%8A%B8%EB%A6%AC%EC%9D%98-%EC%88%9C%ED%9A%8C","aria-label":"boj   2263 트리의 순회 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2263"},"BOJ - 2263. 트리의 순회")),a.createElement(t.p,null,'이진트리의 inorder 와 postorder 를 갖고 preorder 를 만드는 문제. leetcode 를 열심히 풀던 시절 풀어본 기억이 있기도 해서 자신감 넘치게 풀었지만 결과는 "메모리 초과". 함수 콜스택을 줄여야 하나보다 싶어서 while 문으로 풀었지만 역시 "메모리 초과". 결국 다른 사람의 풀이를 찾아서 비교해봤는데 순회하는 과정에서 비효율적인 인덱싱이 있었다. 풀이 없이 풀 수 있었는데 아쉽다.'),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2263/solution.js#L11-L41"})),a.createElement(t.h4,{id:"풀이-참고-2",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-2","aria-label":"풀이 참고 2 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://gywlsp.github.io/boj/2263/"},"백준 2263번 트리의 순회 - node.js")),"\n"),a.createElement(t.h3,{id:"boj---4803-트리",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---4803-%ED%8A%B8%EB%A6%AC","aria-label":"boj   4803 트리 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/4803"},"BOJ - 4803. 트리")),a.createElement(t.p,null,"정점과 간선이 주어질 때 트리는 몇 개인지 찾는 문제. 나름 순회를 돌면서 검증하려 했으나 로직이 잘못되어서 1차 실패. 이후 너무 복잡하게만 생각하다가 방법을 알아내지 못하고 다른 사람의 풀이를 찾아본 뒤 풀었다. 답이 생각보다 단순해서 그걸 직접 생각해내지 못한 게 아쉽다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/4803/solution.js#L1-L58"})),a.createElement(t.h4,{id:"풀이-참고-3",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-3","aria-label":"풀이 참고 3 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://wonsjung.tistory.com/252"},"[C/C++] 백준 - 4803번 (트리)")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/board/view/107169"},"대회 테스트케이스")),"\n"),a.createElement(t.h3,{id:"boj---1717-집합의-표현",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---1717-%EC%A7%91%ED%95%A9%EC%9D%98-%ED%91%9C%ED%98%84","aria-label":"boj   1717 집합의 표현 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1717"},"BOJ - 1717. 집합의 표현")),a.createElement(t.p,null,"그냥 map 두 개를 조합해서 풀어보려다가 메모리 초과로 실패. 유니온 파인드 알고리즘만 찾아보고 직접 코드를 짰다가 root 노드를 찾는 로직에서 갱신도 같이 해줘야 하는 걸 놓쳐서 또 실패. 결국 다른 사람의 풀이까지 참고했다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1717/solution.js#L1-L30"})),a.createElement(t.h4,{id:"풀이-참고-4",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-4","aria-label":"풀이 참고 4 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://ip99202.github.io/posts/%EC%9C%A0%EB%8B%88%EC%98%A8-%ED%8C%8C%EC%9D%B8%EB%93%9C(Union-Find)/"},"유니온 파인드(Union-Find)")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://ongveloper.tistory.com/94"},"백준 1717 집합의 표현 c++ (유니온파인드)\n")),"\n"),a.createElement(t.h3,{id:"boj---4195-친구-네트워크",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---4195-%EC%B9%9C%EA%B5%AC-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC","aria-label":"boj   4195 친구 네트워크 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/4195"},"BOJ - 4195. 친구 네트워크")),a.createElement(t.p,null,"유니온 파인드 알고리즘 + 집합 별 카운트까지 구하는 문제. 풀이를 몰라서 못풀었다기 보다는 디테일을 놓쳐서 헤맸다고 보는 게 맞겠다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/4195/solution.js#L1-L41"})),a.createElement(t.h4,{id:"풀이-참고-5",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-5","aria-label":"풀이 참고 5 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://imnotabear.tistory.com/111"},"[백준 4195] 친구 네트워크 (C++)")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/board/view/81342"},"44%에서 막히시는 분들 참고하세요!")),"\n")),"\n",a.createElement(t.div,{className:"toc"},a.createElement(t.p,null,"목차"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---9252-lcs-2"},"BOJ - 9252. LCS 2"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---1865-%EC%9B%9C%ED%99%80"},"BOJ - 1865. 웜홀"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-1"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---11780-%ED%94%8C%EB%A1%9C%EC%9D%B4%EB%93%9C-2"},"BOJ - 11780. 플로이드 2")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2263-%ED%8A%B8%EB%A6%AC%EC%9D%98-%EC%88%9C%ED%9A%8C"},"BOJ - 2263. 트리의 순회"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-2"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---4803-%ED%8A%B8%EB%A6%AC"},"BOJ - 4803. 트리"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-3"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---1717-%EC%A7%91%ED%95%A9%EC%9D%98-%ED%91%9C%ED%98%84"},"BOJ - 1717. 집합의 표현"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-4"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---4195-%EC%B9%9C%EA%B5%AC-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC"},"BOJ - 4195. 친구 네트워크"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-5"},"풀이 참고")),"\n"),"\n"),"\n")))}var o,h,m,s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},E=l(1880),u=l(1883),d=l(3723),p=l(9178),v=l(3904),b=l(891),f=l(3234),g=l(6117),C=l(5777),B=l(7178),w=l(5924),S=l(4742);function A(e){let{data:t,children:l}=e;const n=a.useRef(),{frontmatter:r,sameSeriesPosts:c}=t.mdx,{title:i,slug:o,date:h,series:m}=r;return a.useEffect((()=>{var e;const t=null===(e=n.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),l=new IntersectionObserver((()=>(0,w.Z)(n,t)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==t||t.forEach((e=>l.observe(e))),()=>l.disconnect()}),[]),a.createElement(p.Z,null,a.createElement(D,null,a.createElement("h1",null,a.createElement(u.Link,{to:"/posts/"+o},i)),a.createElement(H,null,h)),a.createElement(B.Z,{name:m,data:c,current:o}),a.createElement(j,{ref:n},l),a.createElement(g.Z,{data:c,current:o}),a.createElement(S.Z,null),a.createElement(C.Z,null))}const D=b.ZP.div(o||(o=(0,E.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),H=b.ZP.div(h||(h=(0,E.Z)(["\n  margin-left: 2px;\n"]))),j=(0,b.ZP)(f.Z)(m||(m=(0,E.Z)(["\n  margin-bottom: 120px;\n"]))),y=e=>{var t,l;let{data:n}=e;const{frontmatter:{title:r,slug:c,tags:i,heroImage:o,previewContent:h},excerpt:m}=n.mdx,s=o?(0,d.c)(o):null;return a.createElement(v.Z,{title:r,description:null!=h?h:m,path:"posts/"+c,thumbnail:null==s||null===(t=s.images)||void 0===t||null===(l=t.fallback)||void 0===l?void 0:l.src,keywords:i,ogType:"article"})};function Z(e){return a.createElement(A,e,a.createElement(s,e))}},4703:function(e,t,l){var n,a,r,c,i=l(1880),o=l(7294),h=l(891);const m=.2;const s=h.ZP.div(n||(n=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),E=h.ZP.div(a||(a=(0,i.Z)(["\n  padding-bottom: ","px;\n\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n  transition: all ","s;\n\n  & > span {\n    display: inline-block;\n    transform: rotate(","deg);\n    transition: transform ","s;\n  }\n"])),(e=>e.open?16:0),(e=>e.theme.colors[e.open?"onBackground":"inactiveText"]),m,(e=>e.open?180:0),m),u=h.ZP.div(r||(r=(0,i.Z)(["\n  padding: 0 16px;\n  max-height: ","px;\n\n  overflow: hidden;\n  transition: max-height ","s;\n"])),(e=>e.open?2e3:0),m),d=h.ZP.div(c||(c=(0,i.Z)(["\n  padding-bottom: ","px;\n  max-height: ","px;\n\n  user-select: none;\n  cursor: pointer;\n  overflow: hidden;\n  color: ",";\n  transition: all ","s;\n"])),(e=>e.open?16:0),(e=>e.open?24:0),(e=>e.theme.colors.inactiveText),m);t.Z=function(e){let{title:t="열기",defaultOpen:l=!1,children:n}=e;const{0:a,1:r}=(0,o.useState)(l);return o.createElement(s,null,o.createElement(E,{open:a,onClick:()=>r((e=>!e))},o.createElement("span",null,"▲")," ",t),o.createElement(u,{open:a},n),o.createElement(d,{open:a,onClick:()=>r((e=>!e))},o.createElement("span",null,"✖")," 닫기"))}},1373:function(e,t,l){var n,a=l(1880),r=l(7294),c=l(891);let i=1;const o=c.ZP.div(n||(n=(0,a.Z)(["\n  .emgithub-container table td {\n    padding: 0;\n  }\n  .emgithub-file {\n    margin-top: 0;\n  }\n  .emgithub-file .file-meta-dark {\n    background-color: rgb(35, 36, 31);\n  }\n"])));t.Z=function(e){let{url:t}=e;const l=(0,r.useRef)(null),n=(0,r.useRef)(i++);return(0,r.useEffect)((()=>{var e;const n=document.createElement("script"),a={src:"https://emgithub.com/embed-v2.js?target="+encodeURIComponent(t)+"&style=monokai-sublime&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on"};Object.entries(a).forEach((e=>{let[t,l]=e;n.setAttribute(t,l)})),null===(e=l.current)||void 0===e||e.appendChild(n)}),[]),r.createElement(o,{id:"emgithub"+n.current,ref:l})}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2024-240114-algorithm-wrong-answers-index-mdx-8cdafdca28cc718bdde2.js.map