"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8609],{5245:function(e,t,l){l.r(t),l.d(t,{Head:function(){return y},default:function(){return k}});var n=l(1151),a=l(7294),r=l(4703),c=l(1373);function i(e){const t=Object.assign({div:"div",p:"p",h3:"h3",a:"a",h4:"h4",ul:"ul",li:"li"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.div,{className:"md"},a.createElement(t.p,null,"이 글은 풀이를 스스로 찾아내지 못한 문제들을 정리해놓은 글이다. 오답노트가 으레 그렇듯 나중에 다시 찾아와서 풀어볼 생각이다."),a.createElement(t.h3,{id:"boj---2162-선분-그룹",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2162-%EC%84%A0%EB%B6%84-%EA%B7%B8%EB%A3%B9","aria-label":"boj   2162 선분 그룹 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2162"},"BOJ - 2162. 선분 그룹")),a.createElement(t.p,null,"CCW 와 유니온파인드를 조합하여 푸는 문제. 접근은 올바르게 했으나 CCW 에서 케이스를 하나 놓치고, 유니온파인드도 올바르게 적용하지 못해서 틀렸다. 풀이를 찾아보지는 않고 반례를 통해서 잘못된 점을 직접 찾은 것이 그나마 위안거리다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2162/solution.js#L1-L71"})),a.createElement(t.h4,{id:"풀이-참고",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0","aria-label":"풀이 참고 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/board/view/71973"},"데이터 예시")),"\n"),a.createElement(t.h3,{id:"boj---25308-방사형-그래프",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---25308-%EB%B0%A9%EC%82%AC%ED%98%95-%EA%B7%B8%EB%9E%98%ED%94%84","aria-label":"boj   25308 방사형 그래프 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/25308"},"BOJ - 25308. 방사형 그래프")),a.createElement(t.p,null,"삼각함수! 이차원 방정식! ...수학 기초를 다시 공부해야 하는 것인가...?"),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/25308/solution.js#L1-L41"})),a.createElement(t.h4,{id:"풀이-참고-1",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-1","aria-label":"풀이 참고 1 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://cmj092222.tistory.com/555"},"[백준 25308] 방사형 그래프")),"\n"),a.createElement(t.h3,{id:"boj---7869-두-원",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---7869-%EB%91%90-%EC%9B%90","aria-label":"boj   7869 두 원 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/7869"},"BOJ - 7869. 두 원")),a.createElement(t.p,null,"제2코사인법칙! 부채꼴의 넓이! ...나 수학 공부 하고 있는 것인가...?"),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/7869/solution.js#L1-L30"})),a.createElement(t.h3,{id:"풀이-참고-2",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-2","aria-label":"풀이 참고 2 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://lighter.tistory.com/136"},"[Python] 7869번 두 원")),"\n"),a.createElement(t.h3,{id:"boj---2252-줄-세우기",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2252-%EC%A4%84-%EC%84%B8%EC%9A%B0%EA%B8%B0","aria-label":"boj   2252 줄 세우기 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2252"},"BOJ - 2252. 줄 세우기")),a.createElement(t.p,null,"위상정렬! 새로운 걸 배웠다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2252/solution.js#L1-L32"})),a.createElement(t.h4,{id:"풀이-참고-3",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-3","aria-label":"풀이 참고 3 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://m.blog.naver.com/ndb796/221236874984"},"25. 위상 정렬(Topology Sort)")),"\n"),a.createElement(t.h3,{id:"boj---1311-할-일-정하기-1",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---1311-%ED%95%A0-%EC%9D%BC-%EC%A0%95%ED%95%98%EA%B8%B0-1","aria-label":"boj   1311 할 일 정하기 1 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1311"},"BOJ - 1311. 할 일 정하기 1")),a.createElement(t.p,null,'[단계별로 풀어보기] 를 통해 문제에 접근하면 설명에 "선택한 열의 상태를 비트마스크로 저장하여 DP를 진행하는 문제" 로 되어있다. 언뜻 볼 때는 "비트마스킹은 결국 데이터를 저장하는 한 방법일 뿐인데 강조할 필요가 있나?" 라고 생각했는데, 풀어보니 "강조할 필요가 있구나" 라고 감탄하게 되었다.'),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1311/solution.js#L1-L25"})),a.createElement(t.h4,{id:"풀이-참고-4",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-4","aria-label":"풀이 참고 4 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://mangu.tistory.com/17"},"백준 [1311] 할 일 정하기 1")),"\n"),a.createElement(t.h3,{id:"boj---2098-외판원-순회",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2098-%EC%99%B8%ED%8C%90%EC%9B%90-%EC%88%9C%ED%9A%8C","aria-label":"boj   2098 외판원 순회 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2098"},"BOJ - 2098. 외판원 순회")),a.createElement(t.p,null,"기본적인 로직은 바로 위 문제 ",a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1311"},"할 일 정하기 1"),' 에서 사용했던 풀이를 참고했다. 당연히 그대로 사용하면 안 되고 "출발 도시로 돌아온다" 는 부분을 위해 로직을 수정해줘야 한다.'),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2098/solution.js#L1-L29"})),a.createElement(t.h4,{id:"풀이-참고-5",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-5","aria-label":"풀이 참고 5 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1311"},"할 일 정하기 1")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/board/view/125448"},"58% 반례 드립니다.")),"\n"),a.createElement(t.h3,{id:"boj---2749-피보나치-수-3",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2749-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98-3","aria-label":"boj   2749 피보나치 수 3 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2749"},"BOJ - 2749. 피보나치 수 3")),a.createElement(t.p,null,"2차원 행렬과 분할 정복을 사용한 거듭제곱! 분명 이전에 비슷한 문제를 풀어본 적이 있었는데.. 아쉽다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2749/solution.js#L1-L41"})),a.createElement(t.h4,{id:"풀이-참고-6",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-6","aria-label":"풀이 참고 6 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.acmicpc.net/problem/11444"},"피보나치 수 6")),"\n"),a.createElement(t.h3,{id:"boj---2482-색상환",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---2482-%EC%83%89%EC%83%81%ED%99%98","aria-label":"boj   2482 색상환 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/2482"},"BOJ - 2482. 색상환")),a.createElement(t.p,null,"재귀로 풀 수 있을 줄 알았는데.. 2차원 배열을 사용한 DP 방식이 주류인 것 같다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/2482/solution.js#L1-L32"})),a.createElement(t.h4,{id:"풀이-참고-7",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-7","aria-label":"풀이 참고 7 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://akim9905.tistory.com/71"},"[백준] 2482번 색상환")),"\n"),a.createElement(t.h3,{id:"boj---1786-찾기",style:{position:"relative"}},a.createElement(t.a,{href:"#boj---1786-%EC%B0%BE%EA%B8%B0","aria-label":"boj   1786 찾기 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(t.a,{href:"https://www.acmicpc.net/problem/1786"},"BOJ - 1786. 찾기")),a.createElement(t.p,null,"KMP 알고리즘으로 풀어야 한다. 이 알고리즘은 접두사(prefix) 접미사(suffix)를 조합하는 방식인데, 이 조합이 회문(Palindrome)이랑 헷갈려서 이해하는 데 혼났다. 여튼 어찌어찌 풀었는데, 여전히 헷갈린다."),a.createElement(r.Z,{title:"풀이 코드"},a.createElement(c.Z,{url:"https://github.com/ricale/algorithm-problem-challenges/blob/main/baekjoon/1786/solution.js#L1-L37"})),a.createElement(t.h4,{id:"풀이-참고-8",style:{position:"relative"}},a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-8","aria-label":"풀이 참고 8 permalink",className:"anchor before"},a.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"풀이 참고"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://bowbowbow.tistory.com/6"},"KMP : 문자열 검색 알고리즘")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://yiyj1030.tistory.com/495"},"[알고리즘/ 파이썬] KMP 알고리즘 알아보기")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://injae-kim.github.io/dev/2020/07/23/all-about-kmp-algorithm.html"},"KMP 문자열 탐색 알고리즘이 동작하는 구체적인 원리")),"\n")),"\n",a.createElement(t.div,{className:"toc"},a.createElement(t.p,null,"목차"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2162-%EC%84%A0%EB%B6%84-%EA%B7%B8%EB%A3%B9"},"BOJ - 2162. 선분 그룹"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---25308-%EB%B0%A9%EC%82%AC%ED%98%95-%EA%B7%B8%EB%9E%98%ED%94%84"},"BOJ - 25308. 방사형 그래프"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-1"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---7869-%EB%91%90-%EC%9B%90"},"BOJ - 7869. 두 원")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-2"},"풀이 참고")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2252-%EC%A4%84-%EC%84%B8%EC%9A%B0%EA%B8%B0"},"BOJ - 2252. 줄 세우기"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-3"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---1311-%ED%95%A0-%EC%9D%BC-%EC%A0%95%ED%95%98%EA%B8%B0-1"},"BOJ - 1311. 할 일 정하기 1"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-4"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2098-%EC%99%B8%ED%8C%90%EC%9B%90-%EC%88%9C%ED%9A%8C"},"BOJ - 2098. 외판원 순회"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-5"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2749-%ED%94%BC%EB%B3%B4%EB%82%98%EC%B9%98-%EC%88%98-3"},"BOJ - 2749. 피보나치 수 3"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-6"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---2482-%EC%83%89%EC%83%81%ED%99%98"},"BOJ - 2482. 색상환"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-7"},"풀이 참고")),"\n"),"\n"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#boj---1786-%EC%B0%BE%EA%B8%B0"},"BOJ - 1786. 찾기"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"#%ED%92%80%EC%9D%B4-%EC%B0%B8%EA%B3%A0-8"},"풀이 참고")),"\n"),"\n"),"\n")))}var o,h,m,E=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},s=l(1880),u=l(1883),d=l(3723),p=l(9178),v=l(3904),b=l(891),B=l(3234),f=l(6117),g=l(5777),C=l(7178),w=l(5924),S=l(4742);function H(e){let{data:t,children:l}=e;const n=a.useRef(),{frontmatter:r,sameSeriesPosts:c}=t.mdx,{title:i,slug:o,date:h,series:m}=r;return a.useEffect((()=>{var e;const t=null===(e=n.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),l=new IntersectionObserver((()=>(0,w.Z)(n,t)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==t||t.forEach((e=>l.observe(e))),()=>l.disconnect()}),[]),a.createElement(p.Z,null,a.createElement(A,null,a.createElement("h1",null,a.createElement(u.Link,{to:"/posts/"+o},i)),a.createElement(j,null,h)),a.createElement(C.Z,{name:m,data:c,current:o}),a.createElement(D,{ref:n},l),a.createElement(f.Z,{data:c,current:o}),a.createElement(S.Z,null),a.createElement(g.Z,null))}const A=b.ZP.div(o||(o=(0,s.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),j=b.ZP.div(h||(h=(0,s.Z)(["\n  margin-left: 2px;\n"]))),D=(0,b.ZP)(B.Z)(m||(m=(0,s.Z)(["\n  margin-bottom: 120px;\n"]))),y=e=>{var t,l;let{data:n}=e;const{frontmatter:{title:r,slug:c,tags:i,heroImage:o,previewContent:h},excerpt:m}=n.mdx,E=o?(0,d.c)(o):null;return a.createElement(v.Z,{title:r,description:null!=h?h:m,path:"posts/"+c,thumbnail:null==E||null===(t=E.images)||void 0===t||null===(l=t.fallback)||void 0===l?void 0:l.src,keywords:i,ogType:"article"})};function k(e){return a.createElement(H,e,a.createElement(E,e))}},4703:function(e,t,l){var n,a,r,c,i=l(1880),o=l(7294),h=l(891);const m=.2;const E=h.ZP.div(n||(n=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),s=h.ZP.div(a||(a=(0,i.Z)(["\n  padding-bottom: ","px;\n\n  color: ",";\n  user-select: none;\n  cursor: pointer;\n  transition: all ","s;\n\n  & > span {\n    display: inline-block;\n    transform: rotate(","deg);\n    transition: transform ","s;\n  }\n"])),(e=>e.open?16:0),(e=>e.theme.colors[e.open?"onBackground":"inactiveText"]),m,(e=>e.open?180:0),m),u=h.ZP.div(r||(r=(0,i.Z)(["\n  padding: 0 16px;\n  max-height: ","px;\n\n  overflow: hidden;\n  transition: max-height ","s;\n"])),(e=>e.open?2e3:0),m),d=h.ZP.div(c||(c=(0,i.Z)(["\n  padding-bottom: ","px;\n  max-height: ","px;\n\n  user-select: none;\n  cursor: pointer;\n  overflow: hidden;\n  color: ",";\n  transition: all ","s;\n"])),(e=>e.open?16:0),(e=>e.open?24:0),(e=>e.theme.colors.inactiveText),m);t.Z=function(e){let{title:t="열기",defaultOpen:l=!1,children:n}=e;const{0:a,1:r}=(0,o.useState)(l);return o.createElement(E,null,o.createElement(s,{open:a,onClick:()=>r((e=>!e))},o.createElement("span",null,"▲")," ",t),o.createElement(u,{open:a},n),o.createElement(d,{open:a,onClick:()=>r((e=>!e))},o.createElement("span",null,"✖")," 닫기"))}},1373:function(e,t,l){var n,a=l(1880),r=l(7294),c=l(891);let i=1;const o=c.ZP.div(n||(n=(0,a.Z)(["\n  .emgithub-container table td {\n    padding: 0;\n  }\n  .emgithub-file {\n    margin-top: 0;\n  }\n  .emgithub-file .file-meta-dark {\n    background-color: rgb(35, 36, 31);\n  }\n"])));t.Z=function(e){let{url:t}=e;const l=(0,r.useRef)(null),n=(0,r.useRef)(i++);return(0,r.useEffect)((()=>{var e;const n=document.createElement("script"),a={src:"https://emgithub.com/embed-v2.js?target="+encodeURIComponent(t)+"&style=monokai-sublime&type=code&showLineNumbers=on&showFileMeta=on&showFullPath=on"};Object.entries(a).forEach((e=>{let[t,l]=e;n.setAttribute(t,l)})),null===(e=l.current)||void 0===e||e.appendChild(n)}),[]),r.createElement(o,{id:"emgithub"+n.current,ref:l})}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2024-240406-algorithm-wrong-answers-index-mdx-3832b8f7bdcdb225cedf.js.map