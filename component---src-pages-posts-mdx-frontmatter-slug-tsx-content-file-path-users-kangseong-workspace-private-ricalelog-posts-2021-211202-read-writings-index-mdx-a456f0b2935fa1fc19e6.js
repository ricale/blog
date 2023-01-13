"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2119],{7964:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return v}});var l=n(1151),r=n(7294);function a(e){const t=Object.assign({h3:"h3",a:"a",p:"p",code:"code",ol:"ol",li:"li",hr:"hr"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,r.createElement(t.a,{href:"https://wormwlrm.github.io/2021/10/11/Why-User-Agent-string-is-so-complex.html"},"브라우저의 사용자 에이전트는 왜 이렇게 복잡하게 생겼을까?")),"\n",r.createElement(t.p,null,'브라우저 사용자 에이전트의 역사에 대한 간략한 소개. 간추리자면 "사용자 에이전트 정보가 이렇게 엉망이 된 이유는 브라우저 개발사들이 경쟁에서 뒤쳐지지 않기 위해 다른 회사 브라우저의 사용자 에이전트 정보까지 자신들의 브라우저에 포함시켰기 때문이다." 라는 이야기다.'),"\n",r.createElement(t.h3,null,r.createElement(t.a,{href:"https://reactiver.dev/review-react-derived-state/"},"React Derived State 다시 보기")),"\n",r.createElement(t.p,null,"Derived State 가 뭔지, 문제가 뭔지, 개선책이 뭔지를 설명한다. Derived State 는 props 에 의해 초기화되는 상태값으로, ",r.createElement(t.code,null,"initial")," 을 말머리로 갖는 props 를 작성한 적이 있거나 본 적이 있다면 이미 잘 알고 있을 것이다."),"\n",r.createElement(t.h3,null,r.createElement(t.a,{href:"https://overreacted.io/before-you-memo/"},"Before You memo()")),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"memo()"),' 를 사용하기 전에 적용해볼 수 있는, React 앱의 성능을 개선하는 기초적이면서도 놓치기 쉬운 방법을 소개한다. 투박하게 축약하자면, "자주 변경되는 상태값을 너무 상위 컴포넌트에 두지 말자"가 되겠다.'),"\n",r.createElement(t.h3,null,r.createElement(t.a,{href:"https://overreacted.io/writing-resilient-components/"},"Writing Resilient Components")),"\n",r.createElement(t.p,null,'탄력적인 컴포넌트를 작성하는 원칙에 관한 글. 여기서 말하는 "탄력적인 컴포넌트"는 유연하고 독립적인 컴포넌트를 말하는 듯 하다. 말하는 원칙은 아래 네 개인데'),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"데이터 흐름을 막지 마라: props, state 의 변경에 따라 동작하는 React 컴포넌트의 기본 라이프사이클을 흐리지 말라는 말이다. 불필요한 Derived State 사용을 줄이는 것도 여기에 포함된다."),"\n",r.createElement(t.li,null,"언제나 렌더링 되게 하라: 굳이 렌더링 타이밍을 조정하려 하지 말라는 말. 자연스럽게 현재 상태에 따라 동작하게 하라는 의미다."),"\n",r.createElement(t.li,null,"컴포넌트는 싱글톤이 아니다: 자신도 모르게 싱글톤으로 작성하고 있을 수도 있다고? 그럼 같은 한 화면에서 컴포넌트를 두 번 렌더링해보자."),"\n",r.createElement(t.li,null,"컴포넌트의 로컬 상태는 독립적으로: 이건 뭐 부언할 말도 없다."),"\n"),"\n",r.createElement(t.p,null,"공감이 되기도 하고 새삼 되새기게 되기도 하는 좋은 글이다. 한글 번역본도 글 말머리에 링크가 있어 영어가 약해도 읽을 수 있다."),"\n",r.createElement(t.hr),"\n",r.createElement(t.p,null,"앞으로는 글을 많이 읽고 링크만 공유하는 것에 초점을 두지 않고 (어차피 제대로 지켜진 적도 없다), 글을 적게 읽더라도 어느정도 요약을 작성하면서 자주자주 적는 걸 목표로 하려고 한다."))}var c,o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},i=n(1880),m=n(1883),u=n(3723),s=n(1858),p=n(3904),d=n(891),h=n(5534);const E=e=>{let{data:t,children:n}=e;const{title:l,date:a,tags:c,heroImage:o,heroImageAlt:i}=t.mdx.frontmatter,p=o?(0,u.c)(o):null;return r.createElement(s.Z,null,r.createElement("h1",null,l),r.createElement(g,null,c.map((e=>r.createElement("li",{key:e},r.createElement(m.rU,{to:"/tags/"+e},e))))),r.createElement("div",null,a),!!p&&r.createElement(u.G,{image:p,alt:null!=i?i:""}),r.createElement(h.Z,null,n))},g=d.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),f=e=>{var t,n;let{data:l}=e;const{frontmatter:{title:a,slug:c,tags:o,heroImage:i},excerpt:m}=l.mdx,s=i?(0,u.c)(i):null;return r.createElement(p.Z,{title:a,description:m,path:"posts/"+c,thumbnail:null==s||null===(t=s.images)||void 0===t||null===(n=t.fallback)||void 0===n?void 0:n.src,keywords:o,ogType:"article"})};function v(e){return r.createElement(E,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211202-read-writings-index-mdx-a456f0b2935fa1fc19e6.js.map