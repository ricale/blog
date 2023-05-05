"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7779],{280:function(e,n,t){t.r(n),t.d(n,{Head:function(){return x},default:function(){return k}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",ul:"ul",li:"li",code:"code",ol:"ol",blockquote:"blockquote"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.div,{className:"md"},a.createElement(n.h2,{id:"javascript",style:{position:"relative"}},a.createElement(n.a,{href:"#javascript","aria-label":"javascript permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"JavaScript"),a.createElement(n.h3,{id:"whats-new-in-ecmascript-2023",style:{position:"relative"}},a.createElement(n.a,{href:"#whats-new-in-ecmascript-2023","aria-label":"whats new in ecmascript 2023 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://pawelgrzybek.com/whats-new-in-ecmascript-2023/"},"What's new in ECMAScript 2023")),a.createElement(n.p,null,"ECMA 2023 스펙이 공식적으로 확정되는 것은 6월 말 쯤으로 예정되어 있지만, 최근 TC39 미팅에서의 언급에 따르면 현재 나와있는 예정에서 거의 변화가 없을 것이라고 한다. 그래서 ECMA 2023 에 출시될 새로운 피쳐들을 미리 정리해서 공유한 것이 이 글이다. 예상되는 피쳐들은 아래와 같다."),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.code,null,".findLast()"),", ",a.createElement(n.code,null,".findLastIndex()")),"\n",a.createElement(n.li,null,"Hashbang 문법"),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"WeakMap")," 의 키로 ",a.createElement(n.code,null,"Symbol")," 사용"),"\n",a.createElement(n.li,null,a.createElement(n.code,null,".toReversed()"),", ",a.createElement(n.code,null,".toSorted()"),", ",a.createElement(n.code,null,".toSpliced()")),"\n"),a.createElement(n.p,null,"자세한 내용은 본문을 참고하자."),a.createElement(n.h3,{id:"4-ways-to-create-an-enum-in-javascript",style:{position:"relative"}},a.createElement(n.a,{href:"#4-ways-to-create-an-enum-in-javascript","aria-label":"4 ways to create an enum in javascript permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://dmitripavlutin.com/javascript-enum/"},"4 Ways to Create an Enum in JavaScript")),a.createElement(n.p,null,"자바스크립트 상에서 Enum 을 구현하는 방법에 대해 소개한다."),a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"일반 객체를 쓴다."),"\n",a.createElement(n.li,null,"일반 객체를 ",a.createElement(n.code,null,"Object.freeze")," 해서 쓴다."),"\n",a.createElement(n.li,null,a.createElement(n.code,null,"Proxy")," 를 사용해서 Enum 을 구현한다."),"\n",a.createElement(n.li,null,"클래스를 사용해서 Enum 을 구현한다."),"\n"),a.createElement(n.p,null,"개인적으로 Proxy 를 사용해서 구현하는 방식이 인상적이었다."),a.createElement(n.p,null,"타입스크립트 사용자에게는 큰 의미가 없는 글일 수 있겠지만, 쉽고 좋은 ",a.createElement(n.code,null,"Proxy")," 사용 예인 것 같다."),a.createElement(n.h2,{id:"git-branch-strategy",style:{position:"relative"}},a.createElement(n.a,{href:"#git-branch-strategy","aria-label":"git branch strategy permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Git Branch Strategy"),a.createElement(n.p,null,'"깃 브랜치 전략',a.createElement("sub",null,"Git Branch Strategy"),'"은 깃으로 프로젝트를 관리할 때 브랜치를 효율적으로 관리하기 위한 전략을 말한다. 작은 규모의 팀에서는 크게 신경 쓸 필요가 없지만 팀이 커질수록 중요해진다.'),a.createElement(n.p,null,'이전에 속해 있던 팀에서는 Git Flow 를 사용하고 있었지만 "우리가 Git Flow 를 제대로 쓰고 있는건가", "더 나은 전략은 없나" 등으로 고민이 있었다. 그 고민의 연장으로 찾아봤던 글들 중 좋은 글들을 기록해둔다.'),a.createElement(n.h3,{id:"우린-git-flow를-사용하고-있어요",style:{position:"relative"}},a.createElement(n.a,{href:"#%EC%9A%B0%EB%A6%B0-git-flow%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B3%A0-%EC%9E%88%EC%96%B4%EC%9A%94","aria-label":"우린 git flow를 사용하고 있어요 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://techblog.woowahan.com/2553/"},"우린 Git-flow를 사용하고 있어요")),a.createElement(n.p,null,'Git Flow 로 검색하면 국내 웹페이지 기준 가장 최상단에 걸리는 글이다. "우아한형제들" 기술 블로그의 글로 본인들이 프로젝트에 Git Flow 전략을 적용했던 경험을 공유하고 있다.'),a.createElement(n.p,null,"말로 설명하는 것 보다는 본문에도 첨부된 아래 이미지가 Git Flow 전략을 가장 잘 설명하고 있다."),a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/33d1d/git-model.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 132.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAED0lEQVR42m1UbZOaSBD2//+Tq8rlPmxedu9MXDVXmnVVUBh51YggiIAMDAzDAH0FbLKXVPoDNTX0M939PN09aJqmqioASJLkeDw2TROG0el0AgBKKSEEAIqiSJIEALIsc123aRrobEBzihBqmqb+bv25//3LoX0uTeumKYqCMTZQVTUIAgBgjHHOq6qq65pz3jQN55wxVpYlxji63YDztWV/WG/0HXp6Wui6PhBFsU+y96tryNKzJDxEEY5vN8/zgiCI4zhN04pz179e43iH0Gw2a8F5nnueBwAYY8/zcEIC/6CiSZdq5bqu53m2bdPOwiDIOhb6sge+7wuCYJqmLMnTycQw9rfwdDDmnUdtmuZ0Ol0ulyRNgyBI0zSO4x7cNM3AcZxPw+FisfDD63q9kmTlbKu6MmWswjjWNG0yHk+n04vvZ1nGGLvdbj1/LRhjLEnS0Tru55IuK8JqYxqiof6LkPr27Z+r1cq2bSRJ4vMSAErGMMavaSdJYpomAGzGi/1qZ67VlFz2+tedoknSVtM0XteBZamfxxnN1cNBP9kZIVEUYYzbyKqqAoA52hwWu4tmFyVZPX9x3Uuapr5/pZRyzjNKoapmmvEJqevF4uHhQRTFAY7j3W4HACklB1HzNDen3m77T928iNcnWVDatRrNCHFd1zAM3/cHcRwjhAAgTvFxqTni3vYcx26Vr6qKc44xPp/PvZy0KNI0he/W1qzrOgC4rhtegzShhrZQpIc8L6NbkGSxoijD4VAQhLIsGWM9+IXtOI4NXY+iaL1aPy2eEJIlSYqiqK7qrSI8ru+ljTSZTObzOee8KIpeqhe2wzBECHmeN/z86e7ubjIeH49W0j1/idzZdtzU7cD1CuV5/hM4SRLDMADg+XF+su3gFkeBsxUmGJOjc1gqc8d2lsvlfr/vwWEYvoIJISerpcf8vIm/XWzFcs4q2gzbyLfzSLhH8m40GvVyUkqjKHoF53l+Pp8BgOSZrX2zdgZrGW5H3wvcZ7lv8qbXrB/P197OsuzUCXPDt+Na8+VTxhJd3fqXQFLF9WFO83aNMMb6lfJTzfH3Jml1lnRXcQixt6t3sqyKgnBxL0Wnred57fdy8a9BWZZZllFKX9vT9Vxfd66qkzNKUqIqyv39x/H4kXTMl5xDxR+R8mEjIVGYTKeSJA2iKNpuNgAg/zVLYhwlMZJl13UEQXjz5s3d3V0/wH3NeZ4nSXI4HARBsCyrjbxardp6cpq3yfCvs49o8+FpsX7//t3ocZRnOQBwzn+j849G7VdnSzshvu/TjH55epzIf1e8Zp29zPP/l8GPZzryW3Dom7PpH0lKC0YzSnjJoyi6Xq8ZIcgwkGX/JvJrChUraPzLZetd8e3RWrp+69OB/wOAbJr2XkI3xAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="git model"\n        title=""\n        src="/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/5a190/git-model.png"\n        srcset="/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/772e8/git-model.png 200w,\n/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/e17e5/git-model.png 400w,\n/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/5a190/git-model.png 800w,\n/blog/static/f3ecc3cf5b3902dbb1ff2356fe65e67e/33d1d/git-model.png 1150w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),a.createElement(n.p,null,"(이미지의 원 출처는 ",a.createElement(n.a,{href:"https://nvie.com/posts/a-successful-git-branching-model/"},"A successful Git branching model"),")"),a.createElement(n.p,null,"좋은 전략이지만 사용해 본 경험으로는 생각보다 신경써야 할 것이 많았다."),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"릴리즈 브랜치를 딸 때 이번 릴리즈 때 배포하지 않을 피쳐가 혹시 실수로 포함되지 않았는지 확인"),"\n",a.createElement(n.li,null,"릴리즈 브랜치에서 진행되는 QA 에 대한 이슈 대응"),"\n",a.createElement(n.li,null,"릴리즈 준비와 동시다발적으로 진행되는 프로덕션의 버그 핫픽스 대응"),"\n",a.createElement(n.li,null,"등등.."),"\n"),a.createElement(n.p,null,"핫픽스를 최대한 자제하고 릴리즈를 정해진 주기에 맞춰 진행할 수 있는 안정된 조직이라면 좋은 전략일 수 있지만, 아직 안정되지 않은 상태에서 정신없이 나아가는 초기 프로젝트에서는 지켜나가기 쉽지 않은 전략이라고 생각한다."),a.createElement(n.h3,{id:"매일-배포하는-팀이-되는-여정1--브랜치-전략-개선하기",style:{position:"relative"}},a.createElement(n.a,{href:"#%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%951--%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0","aria-label":"매일 배포하는 팀이 되는 여정1  브랜치 전략 개선하기 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://medium.com/daangn/%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%95-1-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-1a1df85b2cff"},"매일 배포하는 팀이 되는 여정(1) — 브랜치 전략 개선하기")),a.createElement(n.p,null,"Git Flow 를 좀 더 잘 알고 싶다, 혹은 더 적합한 브랜치 전략을 알고 싶다고 생각하고 있을 때, 우연히 발견한 글이 바로 이 글이다."),a.createElement(n.p,null,'"당근마켓"의 기술 블로그의 글로, Git Flow 전략의 불편함과 불안함을 해결하기 위해 학습한 결과 GitHub Flow, Trunk-Based Development 등을 알게 되었고 결국 GitHub Flow 를 적용했다는 경험을 공유하는 글이다.'),a.createElement(n.p,null,"GitHub Flow 는 Git Flow 를 단순화한 전략이다. 릴리즈 브랜치와 핫픽스 브랜치는 사용하지 않고, main 브랜치만 유지하면서 기능을 개발할 때는 feature 브랜치들을 사용한다."),a.createElement(n.p,null,"GitHub Flow 뿐만 아니라 Trunk-Based Development 에 대해서도 잘 설명하고 있고, 유용해보이는 자료들의 링크도 제공하고 있다. 브랜치 전략에 관심이 있다면 꼭 읽어보자."),a.createElement(n.h3,{id:"git-flow에서-트렁크-기반-개발으로-나아가기",style:{position:"relative"}},a.createElement(n.a,{href:"#git-flow%EC%97%90%EC%84%9C-%ED%8A%B8%EB%A0%81%ED%81%AC-%EA%B8%B0%EB%B0%98-%EA%B0%9C%EB%B0%9C%EC%9C%BC%EB%A1%9C-%EB%82%98%EC%95%84%EA%B0%80%EA%B8%B0","aria-label":"git flow에서 트렁크 기반 개발으로 나아가기 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://tech.mfort.co.kr/blog/2022-08-05-trunk-based-development/"},"Git Flow에서 트렁크 기반 개발으로 나아가기")),a.createElement(n.p,null,'브랜치 전략 관련해서 발견한 또 다른 글. 이 글은 "맘시터"라는 서비스를 운영 중인 "맘편한세상"이라는 회사의 기술 블로그 글이다.'),a.createElement(n.p,null,"이 글에서도 Git Flow 에 대한 불만을 해소하기 위해 다른 브랜치 전략을 선택했던 경험을 공유하는 글이다. 다만 윗 글과 다른 점은 GitHub Flow 를 선택하지 않고 Trunk-Based Development 를 선택했다는 것이다. 둘은 유사한 전략인데 차이점이라고 하면 Trunk-Based Development 는 feature 브랜치를 오랫동안 유지하는 것을 지양하고 최대한 자주 main 브랜치에 머지한다는 것이다."),a.createElement(n.p,null,'작게 자주 배포하는 애자일한 팀에 어울리는 전략이다. ("환경을 어떻게 나누고 QA 는 어떻게 진행하는 거지?" 하는 궁금증이 있긴 하지만 이 글에서는 이렇다할 언급이 없다.)'),a.createElement(n.p,null,"Trunk-Based Development 의 장단점을 잘 설명한 글이다. 자세한 내용은 본문을 확인하자."),a.createElement(n.h2,{id:"feature-toggles",style:{position:"relative"}},a.createElement(n.a,{href:"#feature-toggles","aria-label":"feature toggles permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Feature Toggles"),a.createElement(n.p,null,"“피쳐 토글",a.createElement("sub",null,"Feature Toggles"),"“은 배포된 특정 코드의 공개 여부를 코드 외부에서 쉽게 지정할 수 있는 기법을 말한다. 보통 아래 같은 경우에 쓰인다."),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"이미 릴리즈된 특정 기능이 문제 있을 때 비활성화한다"),"\n",a.createElement(n.li,null,"특정 기능을 (QA 혹은 A/B 테스트 등의 용도로) 일부 사용자에게만 공개한다"),"\n"),a.createElement(n.p,null,"위에서 언급한 GitHub Flow, Trunk-Based Development 전략을 사용한다면 거의 필수적이다. 왜냐하면 (특히 Trunk-Based Development 는) main 브랜치 하나만 관리되는 상태에서 feature 들이 계속 병합되기 때문에 아직 릴리즈되면 안 되는 기능이 포함되는 일이 상대적으로 잦을 수밖에 없기 때문이다."),a.createElement(n.h3,{id:"피쳐-토글---빠르고-안정적인-릴리즈를-향한-도약",style:{position:"relative"}},a.createElement(n.a,{href:"#%ED%94%BC%EC%B3%90-%ED%86%A0%EA%B8%80---%EB%B9%A0%EB%A5%B4%EA%B3%A0-%EC%95%88%EC%A0%95%EC%A0%81%EC%9D%B8-%EB%A6%B4%EB%A6%AC%EC%A6%88%EB%A5%BC-%ED%96%A5%ED%95%9C-%EB%8F%84%EC%95%BD","aria-label":"피쳐 토글   빠르고 안정적인 릴리즈를 향한 도약 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://tech.mfort.co.kr/blog/2022-11-24-feature-toggle/"},"피쳐 토글 - 빠르고 안정적인 릴리즈를 향한 도약")),a.createElement(n.p,null,"위에서 공유한 ",a.createElement(n.a,{href:"https://tech.mfort.co.kr/blog/2022-08-05-trunk-based-development/"},"Git Flow에서 트렁크 기반 개발으로 나아가기")," 글에서 이어지는 글이다."),a.createElement(n.p,null,"Trunk-Based Development 전략을 쓰고 있다보니 피쳐 토글이 필요했던 것 같다."),a.createElement(n.p,null,"피쳐 토글을 위한 시스템을 직접 구현하지는 않고 ",a.createElement(n.a,{href:"https://www.getunleash.io/"},"Unleash")," 라는 서비스를 사용했고, 피쳐 토글 자체에 대해 깊게 설명하기보다는 팀에서 어떻게 피쳐 토글을 사용하고 있는지에 대해 초점을 맞춰서 설명하고 있다."),a.createElement(n.h3,{id:"매일-배포하는-팀이-되는-여정2--feature-toggle-활용하기",style:{position:"relative"}},a.createElement(n.a,{href:"#%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%952--feature-toggle-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0","aria-label":"매일 배포하는 팀이 되는 여정2  feature toggle 활용하기 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://medium.com/daangn/%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%95-2-feature-toggle-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-b52c4a1810cd"},"매일 배포하는 팀이 되는 여정(2) — Feature Toggle 활용하기")),a.createElement(n.p,null,"위에서 공유한 ",a.createElement(n.a,{href:"https://medium.com/daangn/%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%95-1-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0-1a1df85b2cff"},"매일 배포하는 팀이 되는 여정(1) — 브랜치 전략 개선하기")," 글에서 이어지는 글이다."),a.createElement(n.p,null,"피쳐 토글 환경을 직접 구성하고 구현한 경험을 공유하는 글이다."),a.createElement(n.p,null,"GitHub Flow 개발 전략을 쓰고 있다보니 피쳐 토글이 필수불가결했던 모양이다."),a.createElement(n.p,null,"그런데 내용이 생각보다 쉽지 않다. 토글 포인터, 토글 라우터, 토글 설정 등의 개념을 소개하며 그 개념들을 어떻게 구현했는지 코드 예제들과 함께 설명하는데 코드가 자바이기도 하고 용어들이 헷갈리기도 하다."),a.createElement(n.h3,{id:"feature-toggles-aka-feature-flags",style:{position:"relative"}},a.createElement(n.a,{href:"#feature-toggles-aka-feature-flags","aria-label":"feature toggles aka feature flags permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://martinfowler.com/articles/feature-toggles.html"},"Feature Toggles (aka Feature Flags)")),a.createElement(n.p,null,"이 글은 위 두 글에서 같이 참고했다고 언급하는 글이다. 유명한 개발자 마틴 파울러가 쓴 글인데, 특히 당근마켓의 글에서는 이 글에 대해 아래처럼 말하고 있어서 읽어봐야만 할 것 같았다."),a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"원래도 개념에 대해서는 알고는 있었는데 Martin Fowler가 작성한 Feature Toggles (aka Feature Flags) 아티클을 공부하고 나서 그동안 겉핥기 식으로 알고 있었다는걸 깨달았고 이 패턴에 대한 생각이 확장됨과 동시에 프로젝트에 적용해 볼 수 있는 아이디어가 많이 떠올랐어요."),"\n"),a.createElement(n.p,null,"하지만 영어인데다 장문이라서 선뜻 읽을 마음이 들지 않았는데 다행히 ",a.createElement(n.a,{href:"https://sungjk.github.io/2022/10/15/feature-toggles.html"},"번역한 것으로 보이는 글"),"이 있다. (왜 추정이냐면 번역을 했다는 언급이 없다. 그런데 원글에 대한 링크도 포함하고 있고 내용도 거의 동일하다.) (재미있는 것은 이 번역글의 작성자가 당근마켓 글의 저자라는 것.)"),a.createElement(n.p,null,"번역글을 읽으니 대충 이해는 된다. 하지만 아직 명확하게 와닿지는 않는다. 여러 번 읽어 봐야 할 것 같고, 궁극적으로는 직접 구현해보고 운영해보는 경험이 중요하지 않을까 싶다."),a.createElement(n.h2,{id:"etc",style:{position:"relative"}},a.createElement(n.a,{href:"#etc","aria-label":"etc permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Etc"),a.createElement(n.h3,{id:"-피그마-api로-하나-되는-우리--피그마-api를-활용해-협업-효율성-올리기",style:{position:"relative"}},a.createElement(n.a,{href:"#-%ED%94%BC%EA%B7%B8%EB%A7%88-api%EB%A1%9C-%ED%95%98%EB%82%98-%EB%90%98%EB%8A%94-%EC%9A%B0%EB%A6%AC--%ED%94%BC%EA%B7%B8%EB%A7%88-api%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%B4-%ED%98%91%EC%97%85-%ED%9A%A8%EC%9C%A8%EC%84%B1-%EC%98%AC%EB%A6%AC%EA%B8%B0","aria-label":" 피그마 api로 하나 되는 우리  피그마 api를 활용해 협업 효율성 올리기 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"🎥 ",a.createElement(n.a,{href:"https://tv.naver.com/v/23651902"},"피그마 API로 하나 되는 우리 : 피그마 API를 활용해 협업 효율성 올리기")),a.createElement(n.p,null,a.createElement(n.a,{href:"https://deview.kr/2021"},"DEVIEW 2021"),"의 ",a.createElement(n.a,{href:"https://deview.kr/2021/sessions/413"},"세션"),"."),a.createElement(n.p,null,"Figma API 를 사용해 프론트엔드 코드와 디자인 시스템을 결합하고, Figma plugin API 를 사용해 플러그인을 직접 제작, 생산성을 높인 경험을 공유하는 세션."),a.createElement(n.p,null,"Figma 의 디자인을 스토리북 구축과 컴포넌트 구현에 사용하고, 여러 플러그인 (플로우 차트를 쉽게 그릴 수 있는 플러그인, 구슬 스프레드시트와 조합해 디자인에 들어갈 텍스트를 관리하는 플러그인, 많은 이미지를 한 번에 다운받을 수 있는 플러그인) 을 제작해 사용한다. 생각보다 깊이 있게 알려주기 때문에 Figma 를 사용하고 있다면 재미있게 볼 수 있음은 물론이고, fimga API 를 사용하려는 사람들에게도 도움이 될 것 같다."),a.createElement(n.h3,{id:"선언적인-코드-작성하기",style:{position:"relative"}},a.createElement(n.a,{href:"#%EC%84%A0%EC%96%B8%EC%A0%81%EC%9D%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0","aria-label":"선언적인 코드 작성하기 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://toss.tech/article/frontend-declarative-code"},"선언적인 코드 작성하기")),a.createElement(n.p,null,"선언적인 코드에 대해 설명하고 예시를 보여주는 글이다."),a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"그래서 “왼쪽으로 10걸음 걸어라”는 사실 “북쪽을 바라보았을 때 한 번의 회전을 360등분한 각의 90배만큼 북반구에서 해시계의 바늘이 돌아가는 방향으로 돌아서, 동물이 육상에서 다리를 이용해 움직이는 가장 빠른 방법보다 느린, 신체를 한 지점에서 다른 지점으로 옮겨가는 행위를 10번 반복해라” 라는 말을 추상화한, 선언적인 말로 볼 수 있을 것입니다."),"\n"),a.createElement(n.p,null,"간결하게 설명하므로 읽어볼 만 하다."),a.createElement(n.h3,{id:"월간-크롬-이슈-리포트-2023년-4월호",style:{position:"relative"}},a.createElement(n.a,{href:"#%EC%9B%94%EA%B0%84-%ED%81%AC%EB%A1%AC-%EC%9D%B4%EC%8A%88-%EB%A6%AC%ED%8F%AC%ED%8A%B8-2023%EB%85%84-4%EC%9B%94%ED%98%B8","aria-label":"월간 크롬 이슈 리포트 2023년 4월호 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),a.createElement(n.a,{href:"https://ui.toast.com/posts/ko_chrome_report_202304"},"월간 크롬 이슈 리포트 2023년 4월호")),a.createElement(n.p,null,a.createElement(n.a,{href:"https://ui.toast.com/posts/ko_chrome_report_202303"},"월간 크롬 이슈 리포트 2023년 3월호")," 와 겹치는 내용이 많다. 겹치지 않는 내용 중 인상적인 내용은"),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Chrome 113: CSS ",a.createElement(n.code,null,"image-set()")," 지원 (기존에는 ",a.createElement(n.code,null,"-webkit-")," 접두어를 붙여야 가능했었음)"),"\n",a.createElement(n.li,null,"Chrome 114: CSS ",a.createElement(n.code,null,"text-wrap"),"과 ",a.createElement(n.code,null,"white-space-collapse")," 속성 추가"),"\n"),a.createElement(n.p,null,"가 있다.")),"\n",a.createElement(n.div,{className:"toc"},a.createElement(n.p,null,"목차"),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#javascript"},"JavaScript"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#whats-new-in-ecmascript-2023"},"What's new in ECMAScript 2023")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#4-ways-to-create-an-enum-in-javascript"},"4 Ways to Create an Enum in JavaScript")),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#git-branch-strategy"},"Git Branch Strategy"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EC%9A%B0%EB%A6%B0-git-flow%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B3%A0-%EC%9E%88%EC%96%B4%EC%9A%94"},"우린 Git-flow를 사용하고 있어요")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%951--%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%A0%84%EB%9E%B5-%EA%B0%9C%EC%84%A0%ED%95%98%EA%B8%B0"},"매일 배포하는 팀이 되는 여정(1) — 브랜치 전략 개선하기")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#git-flow%EC%97%90%EC%84%9C-%ED%8A%B8%EB%A0%81%ED%81%AC-%EA%B8%B0%EB%B0%98-%EA%B0%9C%EB%B0%9C%EC%9C%BC%EB%A1%9C-%EB%82%98%EC%95%84%EA%B0%80%EA%B8%B0"},"Git Flow에서 트렁크 기반 개발으로 나아가기")),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#feature-toggles"},"Feature Toggles"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%ED%94%BC%EC%B3%90-%ED%86%A0%EA%B8%80---%EB%B9%A0%EB%A5%B4%EA%B3%A0-%EC%95%88%EC%A0%95%EC%A0%81%EC%9D%B8-%EB%A6%B4%EB%A6%AC%EC%A6%88%EB%A5%BC-%ED%96%A5%ED%95%9C-%EB%8F%84%EC%95%BD"},"피쳐 토글 - 빠르고 안정적인 릴리즈를 향한 도약")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EB%A7%A4%EC%9D%BC-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%ED%8C%80%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%97%AC%EC%A0%952--feature-toggle-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0"},"매일 배포하는 팀이 되는 여정(2) — Feature Toggle 활용하기")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#feature-toggles-aka-feature-flags"},"Feature Toggles (aka Feature Flags)")),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#etc"},"Etc"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#-%ED%94%BC%EA%B7%B8%EB%A7%88-api%EB%A1%9C-%ED%95%98%EB%82%98-%EB%90%98%EB%8A%94-%EC%9A%B0%EB%A6%AC--%ED%94%BC%EA%B7%B8%EB%A7%88-api%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%B4-%ED%98%91%EC%97%85-%ED%9A%A8%EC%9C%A8%EC%84%B1-%EC%98%AC%EB%A6%AC%EA%B8%B0"},"🎥 ","피그마 API로 하나 되는 우리 : 피그마 API를 활용해 협업 효율성 올리기")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EC%84%A0%EC%96%B8%EC%A0%81%EC%9D%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0"},"선언적인 코드 작성하기")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EC%9B%94%EA%B0%84-%ED%81%AC%EB%A1%AC-%EC%9D%B4%EC%8A%88-%EB%A6%AC%ED%8F%AC%ED%8A%B8-2023%EB%85%84-4%EC%9B%94%ED%98%B8"},"월간 크롬 이슈 리포트 2023년 4월호")),"\n"),"\n"),"\n")))}var o,c,i,E=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=t(1880),s=t(1883),d=t(3723),h=t(6758),u=t(3904),p=t(891),g=t(3234),B=t(5777),f=t(7178),A=t(5924);function C(e){let{data:n,children:t}=e;const l=a.useRef(),{frontmatter:r,sameSeriesPosts:o}=n.mdx,{title:c,slug:i,date:E,series:m,heroImage:d,heroImageAlt:u}=r;return a.useEffect((()=>{var e;const n=null===(e=l.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,A.Z)(l,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),a.createElement(h.Z,null,a.createElement(v,null,a.createElement("h1",null,a.createElement(s.Link,{to:"/posts/"+i},c)),a.createElement(b,null,E)),a.createElement(f.Z,{name:m,data:o,current:i}),a.createElement(w,{ref:l},t),a.createElement(B.Z,null))}const v=p.ZP.div(o||(o=(0,m.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),b=p.ZP.div(c||(c=(0,m.Z)(["\n  margin-left: 2px;\n"]))),w=(0,p.ZP)(g.Z)(i||(i=(0,m.Z)(["\n  margin-bottom: 60px;\n"]))),x=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:r,slug:o,tags:c,heroImage:i,previewContent:E},excerpt:m}=l.mdx,s=i?(0,d.c)(i):null;return a.createElement(u.Z,{title:r,description:null!=E?E:m,path:"posts/"+o,thumbnail:null==s||null===(n=s.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function k(e){return a.createElement(C,e,a.createElement(E,e))}},5777:function(e,n,t){var l=t(7294);n.Z=function(){const e=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,l]=e;t.setAttribute(n,l)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),l.createElement("div",{id:"comments",ref:e})}},3234:function(e,n,t){t.d(n,{Z:function(){return b}});var l,a=t(1880),r=t(891);var o,c=(0,r.iv)(l||(l=(0,a.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder));var i,E=(0,r.iv)(o||(o=(0,a.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(e=>e.theme.colors.codeblockHighlightBorder),(e=>e.theme.colors.codeblockHighlight),(e=>e.theme.colors.codeblockTitle),(e=>e.theme.colors.codeblockCopyButtonLabel),(e=>e.theme.colors.codeblockTitleInMobile));var m,s=(0,r.iv)(i||(i=(0,a.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(e=>e.theme.colors.headingBorder),(e=>e.theme.colors.headingBorder));var d,h=(0,r.iv)(m||(m=(0,a.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(e=>e.theme.colors.imageBorder),(e=>e.theme.colors.imageCaptionText));var u,p=(0,r.iv)(d||(d=(0,a.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var g,B,f=(0,r.iv)(u||(u=(0,a.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(e=>e.theme.colors.tableBorder)),A=t(5785);var C,v=(0,r.iv)(g||(g=(0,a.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground),(0,A.Z)(new Array(20)).map(((e,n)=>(0,r.iv)(B||(B=(0,a.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(n+1),(1100+20*n-800)/2))),1100);var b=r.ZP.div(C||(C=(0,a.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),s,p,h,v,E,c,f,(e=>e.theme.colors.hr),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode))},7178:function(e,n,t){var l,a,r,o,c,i=t(1880),E=t(7294),m=t(1883),s=t(891);const d=s.ZP.div(l||(l=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(e=>e.theme.colors.sameSereisPosts)),h=s.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n  }\n"])),(e=>e.theme.colors.onBackground),(e=>e.collapsed?0:180)),u=s.ZP.ol(r||(r=(0,i.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(e=>e.theme.colors.background)),p=s.ZP.li(o||(o=(0,i.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.active&&(0,s.iv)(c||(c=(0,i.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground))));n.Z=function(e){let{name:n,data:t,current:l}=e;const[a,r]=E.useState(!0);return t?E.createElement(d,null,E.createElement(h,{collapsed:a,onClick:()=>r((e=>!e))},E.createElement("h2",null,E.createElement(m.Link,{to:"/series/"+n+"/"},'시리즈 "'+n+'"')),E.createElement("span",null,"▲")),!a&&E.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return E.createElement(p,{active:n===l,key:n},E.createElement(m.Link,{to:"/posts/"+n},t))})))):null}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var l,a,r;if(!n)return;const o=document.documentElement.scrollTop+10-(null!==(l=null===(a=e.current)||void 0===a?void 0:a.offsetTop)&&void 0!==l?l:0);let c;for(let t=0;t<n.length;t++)if(n[t].offsetTop>o){var i;c=null!==(i=n[t-1])&&void 0!==i?i:null;break}if(void 0===c&&(c=n[n.length-1]),null===(r=e.current)||void 0===r||r.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),c){var E;const n=c.getAttribute("id"),l=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",a=null===(E=e.current)||void 0===E?void 0:E.querySelector(l);null==a||a.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return r}});var l=t(7294);const a=l.createContext({});function r(e){const n=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2023-230505-read-writings-index-mdx-9f4378865e57bcff18bc.js.map