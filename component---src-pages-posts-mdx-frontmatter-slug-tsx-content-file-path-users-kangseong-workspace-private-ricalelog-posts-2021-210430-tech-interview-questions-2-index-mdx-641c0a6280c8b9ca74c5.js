"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[3485],{7743:function(e,n,t){t.r(n),t.d(n,{Head:function(){return P},default:function(){return j}});var l=t(1151),r=t(7294);function a(e){const n=Object.assign({p:"p",a:"a",em:"em",h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",hr:"hr",blockquote:"blockquote",strong:"strong",div:"div",ol:"ol",h3:"h3"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.p,null,"요 근래 몇몇 크고 작은 회사에서 기술 면접을 봤다. 경력에 관련된 질문은 제외하고, 순수하게 기술과 관련된 질문 중 기억에 남는 것들을 정리해 보았다."),"\n",r.createElement(n.p,null,"이 글에는 React를 비롯한 여러 라이브러리와 기타 프론트엔드 관련된 내용들을 정리했다. Vanilla JavaScript 에 관련된 질문은 ",r.createElement(n.a,{href:"https://ricale.kr/blog/posts/210430-tech-interview-questions-1/"},"이전 글"),"에서 정리했다."),"\n",r.createElement(n.p,null,"인용구로 작성된 내용은 ",r.createElement(n.em,null,"인용구가 나오기 전 링크가 연결된 문서"),"에서 가져온 문장이거나, 해당 문서에 있는 영문장을 번역한 문장이다."),"\n",r.createElement(n.h1,null,"React"),"\n",r.createElement(n.h2,null,"1. 함수 컴포넌트와 클래스 컴포넌트의 차이"),"\n",r.createElement(n.p,null,"함수 컴포넌트와 클래스 컴포넌트의 차이를 묻는 질문이었다. React Hooks API 기능이 나오면서 차이는 없어졌다고 봐도 무방하지만, 굳이 찾아보면 아래와 같은 차이가 있다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"문법"),"\n",r.createElement(n.li,null,"클래스 컴포넌트는 라이프 사이클을 지원한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"함수 컴포넌트도 ",r.createElement(n.code,null,"useEffect")," 등을 사용하면 대부분의 라이프 사이클을 사용할 수 있다."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"componentDidCatch"),", ",r.createElement(n.code,null,"getSnapshotBeforeUpdate"),", ",r.createElement(n.code,null,"getDerivedStateFromError"),"는 여전히 사용할 수 없다."),"\n"),"\n"),"\n",r.createElement(n.li,null,"클래스 컴포넌트는 ",r.createElement(n.code,null,"state"),"를 지원한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"함수 컴포넌트도 ",r.createElement(n.code,null,"useState"),"를 사용하면 ",r.createElement(n.code,null,"state"),"를 사용할 수 있다."),"\n"),"\n"),"\n",r.createElement(n.li,null,"클래스 컴포넌트는 ref 인자를 받거나 자신의 자식 컴포넌트에게 ref 를 줄 수 있다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"함수 컴포넌트도 ",r.createElement(n.code,null,"forwardRef"),"와 ",r.createElement(n.code,null,"useRef"),"를 통해 ref 를 사용할 수 있다."),"\n"),"\n"),"\n"),"\n",r.createElement(n.h2,null,"2. ",r.createElement(n.code,null,"useLayoutEffect")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"useLayoutEffect"),"를 사용한 적이 있는지, ",r.createElement(n.code,null,"useEffect"),"와 어떻게 다른지에 관한 질문이었다. 해당 내용은 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks API Reference")," 문서의 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-reference.html#uselayouteffect"},"useLayoutEffect")," 섹션에서 확인할 수 있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"주요 특징은 ",r.createElement(n.code,null,"useEffect"),"와 동일하다. 하지만 ",r.createElement(n.code,null,"useLayoutEffect"),"는 모든 DOM 변경이 끝난 이후에 동기적으로 실행된다. 이것은 DOM으로부터 레이아웃을 읽어와 동기적으로 재렌더링할 때 사용된다. ",r.createElement(n.code,null,"useLayoutEffect")," 내에서 예정된 업데이트는 브라우저가 실제로 렌더링을 업데이트하기 전에 동기적으로 실행된다."),"\n"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"일단 ",r.createElement(n.code,null,"useEffect"),"를 먼저 사용하기를 권한다.")," 만약 ",r.createElement(n.code,null,"useEffect"),"가 문제를 일으키면 그 때 ",r.createElement(n.code,null,"useLayoutEffect"),"를 사용하라. (원문: ",r.createElement(n.strong,null,"we recommend starting with useEffect first")," and only trying useLayoutEffect if that causes a problem.)"),"\n"),"\n",r.createElement(n.p,null,"컴포넌트가 업데이트된 직후 ",r.createElement(n.code,null,"useEffect"),"에서 다시 컴포넌트 업데이트를 시도하면, 바로 화면 업데이트를 재시도하면서 화면이 깜빡이는 것처럼 보일 수 있다 (flikering). 이럴 때 ",r.createElement(n.code,null,"useLayoutEffect"),"를 사용하면, 화면이 갱신되기 직전에 동기적으로 로직이 실행되므로 깜빡이는 현상을 막을 수 있다."),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://daveceddia.com/useeffect-vs-uselayouteffect/"},"When to useLayoutEffect Instead of useEffect (example)")," 문서에서 예제 코드를 실행해 볼 수 있다."),"\n",r.createElement(n.h2,null,"3. Context API"),"\n",r.createElement(n.p,null,"React Context API 가 무엇인지, 사용해 봤는지에 관한 질문이었다. reactjs.org 의 ",r.createElement(n.a,{href:"https://reactjs.org/docs/context.html"},"Context")," 문서에 잘 설명되어 있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,'Context 는 React 컴포넌트 트리 내에서 데이터를 "글로벌"하게 공유하게 위해 설계되었다.'),"\n"),"\n",r.createElement(n.p,null,"React로 개발을 한 경험이 있다면 직접 사용해 보지는 않았더라도 외부 라이브러리를 통해 간접적으로 사용해 보았을 것이다. ",r.createElement(n.a,{href:"https://react-redux.js.org/"},"React Redux"),"의 ",r.createElement(n.code,null,"Provider"),", ",r.createElement(n.a,{href:"https://styled-components.com/"},"styled components"),"의 ",r.createElement(n.code,null,"ThemeProvider"),", ",r.createElement(n.a,{href:"https://github.com/react-dnd/react-dnd"},"React DnD"),"의 ",r.createElement(n.code,null,"DndProvider")," 등 많은 라이브러리에서 내부적으로 Context를 사용하고 있다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"만약 특정 prop을 멀리 있는 컴포넌트에게 전달하기만을 원한다면, Context 보다는 ",r.createElement(n.a,{href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"component composition"),"(prop을 여러 레벨에 거쳐 계속 전달하기보다는 해당 prop을 사용하는 컴포넌트 자체를 전달하는 방식)이 종종 더 간단한 해결책이 되곤 한다."),"\n"),"\n",r.createElement(n.h2,null,"4. ",r.createElement(n.code,null,"useReducer")),"\n",r.createElement(n.p,null,"어떤 상황을 주고 해당 상황에 대해 ",r.createElement(n.code,null,"useReducer"),"를 사용해서 해결할 수 있겠느냐는 질문이었다. ",r.createElement(n.code,null,"useReducer"),"에 관한 내용은 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks API Reference")," 문서의 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-reference.html#usereducer"},"해당 섹션"),"에서 확인할 수 있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> initialArg<span class="token punctuation">,</span> init<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"useState"),"의 대안이 될 수 있다. ",r.createElement(n.code,null,"(state, action) => newState")," 타입의 ",r.createElement(n.code,null,"reducer"),"를 인자로 받고, 현재 ",r.createElement(n.code,null,"state"),"와 ",r.createElement(n.code,null,"dispatch")," 메서드를 반환해준다. (만약 Redux에 익숙하다면, 당신은 이미 이게 어떻게 동작하는지 알고 있을 것이다.)"),"\n"),"\n",r.createElement(n.h2,null,"5. 부모자식 컴포넌트 간 렌더링/라이프 사이클 순서"),"\n",r.createElement(n.p,null,"부모자식 컴포넌트 간 렌더링 순서를 묻는 질문이었다. 직관적으로 알 수 있듯이, 부모를 렌더링하다가 자식 컴포넌트를 그려야 하는 시점이 오면 자식을 먼저 렌더링하고 부모의 남은 부분을 마저 렌더링하는 식으로 진행된다."),"\n",r.createElement(n.p,null,"imkev.dev의 ",r.createElement(n.a,{href:"https://imkev.dev/react-rendering-order"},"React Rendering Order")," 글을 보면 예시까지 있어 더 이해하기 쉬울 것이다."),"\n",r.createElement(n.p,null,"라이프 사이클 순서도 렌더링과 별반 다를 것 없다."),"\n",r.createElement(n.h2,null,"6. Hooks API로 라이프사이클 구현"),"\n",r.createElement(n.p,null,"함수 컴포넌트에서 Hooks API로 클래스 컴포넌트의 라이프사이클 메서드를 구현할 수 있는지 묻는 질문이었다."),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"useEffect"),"로 ",r.createElement(n.code,null,"componentDidMount"),", ",r.createElement(n.code,null,"componentDidUpdate"),", ",r.createElement(n.code,null,"componentDidUnmount")," 를 대체할 수 있다. 자세한 설명은 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-effect.html"},"Using the Effect Hook")," 문서에서 볼 수 있다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"만약 당신이 React 클래스의 라이프사이클 메서드에 익숙하다면, ",r.createElement(n.code,null,"useEffect")," hook이 ",r.createElement(n.code,null,"componentDidMount"),", ",r.createElement(n.code,null,"componentDidUpdate"),", ",r.createElement(n.code,null,"componentDidUnmount"),"의 조합이라고 생각할 수 있겠다."),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"useMemo"),", ",r.createElement(n.code,null,"useCallback")," 등을 활용해서 ",r.createElement(n.code,null,"shouldComponentUpdate"),"도 대체할 수 있다. 관련 내용은 ",r.createElement(n.a,{href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},"Hooks API Reference 문서의 useCallback 항목"),"에서 볼 수 있다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,r.createElement(n.code,null,"useCallback"),"은 콜백 함수를 전달 받는 자식 컴포넌트의 reference 비교에 의존한 불필요한 렌더링을 막는데 유용하다. (예를 들면 ",r.createElement(n.code,null,"shouldComponentUpdate")," 같이)"),"\n"),"\n",r.createElement(n.h1,null,"그 외 라이브러리"),"\n",r.createElement(n.h2,null,"1. TypeScript 장단점"),"\n",r.createElement(n.p,null,"현재 재직 중인 회사의 프로젝트에서 타입스크립트를 쓰고 있어서 나온 질문이다. 아마 타입스크립트를 사용한 적이 없는 사람들에게는 질문하지 않을 것 같다. 관련 내용은 ",r.createElement(n.a,{href:"https://www.altexsoft.com/blog/typescript-pros-and-cons/"},"The Good and the Bad of TypeScript")," 문서나 ",r.createElement(n.a,{href:"https://ahnheejong.gitbook.io/ts-for-jsdev/"},"자바스크립트 개발자를 위한 타입스크립트"),"의 ",r.createElement(n.a,{href:"https://ahnheejong.gitbook.io/ts-for-jsdev/01-introducing-typescript/why-typescript"},"1.2 왜 타입스크립트인가")," 문서 등 많은 문서에 나와 있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.p,null,"간단히 정리해보자면 장점은 아래와 같다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"코드의 가독성을 올려준다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"유지보수, 리팩토링 등이 용이해진다."),"\n"),"\n"),"\n",r.createElement(n.li,null,"자바스크립트 사용자가 습득하기 쉽다."),"\n",r.createElement(n.li,null,"타입과 관련된 에러를 컴파일 단계에서 잡아준다."),"\n",r.createElement(n.li,null,"OOP를 지원한다."),"\n"),"\n",r.createElement(n.p,null,"단점은 아래와 같다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"진짜 정적 타이핑이 아니다. 컴파일 후에는 자바스크립트로 변환된다. 따라서 런타임에서는 여전히 타입과 관련된 에러 가능성이 있다."),"\n",r.createElement(n.li,null,"타입 선언 및 사용을 위해 코드 작성을 더 해야 한다. 작업 시간이 늘어나며 소스코드의 크기도 커진다."),"\n"),"\n",r.createElement(n.h2,null,"2. Redux"),"\n",r.createElement(n.p,null,"Redux가 어떤 것인지, 장단점이 무엇인지, 비슷한 다른 것들은 써보았는지, 어떤 상황에서 쓰면 좋고 어떤 상황은 피하는 게 좋은지. Redux를 써봤다고 하면 들을 수 있는 전형적인 질문들이었다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"Redux는 JavaScript를 위한 예측 가능한 상태 컨테이너이다."),"\n",r.createElement(n.p,null,"이것은 ",r.createElement(n.strong,null,"일관적으로 동작하고 다른 여러 환경에서 동작하며 테스트하기 쉬운 앱"),"을 만들 수 있도록 도와준다."),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://redux.js.org/introduction/getting-started"},"Redux 공식 문서"),'에는 위처럼 나와있다. Redux가 무엇인지에 대한 간략한 답은 "React에서는 전역적인 상태 관리를 위한 라이브러리"라고 하면 충분할 것이고, 더 깊은 답을 원한다면 One-way(single-direction) data flow 등으로 대표되는 ',r.createElement(n.a,{href:"https://facebook.github.io/flux/"},"Flux architecture"),"와 연관지어 설명해주면 된다."),"\n",r.createElement(n.p,null,"Redux를 대체할 수 있는 것으로는 ",r.createElement(n.a,{href:"https://mobx.js.org/README.html"},"MobX"),", ",r.createElement(n.a,{href:"https://recoiljs.org/"},"Recoil")," 등이 있고 React Context API 로도 대체할 수 있다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"MobX에 관한 좋은 글: ",r.createElement(n.a,{href:"https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html"},"React에서 Mobx 경험기 (Redux와 비교기)")),"\n",r.createElement(n.li,null,"Recoil에 관한 좋은 글: ",r.createElement(n.a,{href:"https://ui.toast.com/weekly-pick/ko_20200616"},"Recoil - 또 다른 React 상태 관리 라이브러리?")),"\n"),"\n",r.createElement(n.p,null,"Redux가 전역적인 상태 관리에 좋긴 하지만 간단한 앱에서는 도리어 코드의 복잡도만 올릴 뿐 생산성에 도움이 되지 않는 경우도 있다. 따라서 만드려는 앱의 규모와 관리하려는 상태의 구조를 잘 생각해 사용을 선택해야 한다."),"\n",r.createElement(n.h2,null,"3. webpack 최적화"),"\n",r.createElement(n.p,null,"webpack 최적화 경험에 관한 질문이었다. 관련 내용은 ",r.createElement(n.a,{href:"https://blog.logrocket.com/guide-performance-optimization-webpack/"},"An in-depth guide to performance optimization with webpack")," 글에 잘 나와있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.p,null,"일단 가장 단순한 최적화는 ",r.createElement(n.code,null,"mode: 'production'")," 설정을 해주는 것이다. 이렇게 설정해주면 webpack에서 많은 설정을 자동으로 해주는데, ",r.createElement(n.a,{href:"https://webpack.js.org/configuration/mode/"},"공식 문서"),"에 따르면 아래와 같은 설정들을 적용해준다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,r.createElement(n.code,null,"DefinePlugin"),"을 사용해 ",r.createElement(n.code,null,"process.env.NODE_ENV")," 값을 ",r.createElement(n.code,null,"production"),"으로 설정해준다. module과 chunk를 위한 deterministic mangled names, ",r.createElement(n.code,null,"FlagDependencyUsagePlugin"),", ",r.createElement(n.code,null,"FlagIncludedChunksPlugin"),", ",r.createElement(n.code,null,"ModuleConcatenationPlugin"),", ",r.createElement(n.code,null,"NoEmitOnErrorsPlugin"),", ",r.createElement(n.code,null,"TerserPlugin"),"을 활성화해준다."),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"Webpack Bundle Analyzer"),"를 사용해 번들링된 결과물의 Treemap을 시각화해서 볼 수 있다. 이 Treemap을 보며 각 모듈이 어떻게 구성되고 크기가 얼마나 하는지 알 수 있고, 불필요하거나 비효율적인 모듈을 찾을 수도 있다."),"\n",r.createElement(n.p,null,"이외에도 ",r.createElement(n.a,{href:"https://blog.logrocket.com/guide-performance-optimization-webpack/"},"이 글"),"에서는 아래와 같은 방법들을 제시한다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"가능하다면 앱의 구조 및 설계에 따라 앱을 SPA(Single-Page Application)가 아닌 MPA(Multi-Page Appliation)로 구성하자."),"\n",r.createElement(n.li,null,"캐시 효율을 높이기 위해 외부 라이브러리와 직접 작성한 코드를 나눠서 번들링하자."),"\n",r.createElement(n.li,null,"Lazy-load 기능을 활용하자.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"reactjs.org의 ",r.createElement(n.a,{href:"https://reactjs.org/docs/code-splitting.html"},"Code-Splitting")," 문서도 참고"),"\n"),"\n"),"\n",r.createElement(n.li,null,"외부 라이브러리를 번들링에서 제외하고, CDN 등을 통해 따로 제공하자."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://webpack.js.org/guides/tree-shaking/"},"Tree Shaking")," (사용하지 않는 코드를 번들링에서 제외하는 것) 기능을 활용하자.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://huns.me/development/2265"},"Webpack 4의 Tree Shaking에 대한 이해"),", ",r.createElement(n.a,{href:"https://medium.com/naver-fe-platform/webpack%EC%97%90%EC%84%9C-tree-shaking-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-1748e0e0c365"},"Webpack에서 Tree Shaking 적용하기")," 문서들 참고"),"\n"),"\n"),"\n",r.createElement(n.li,null,"번들링 결과물의 크기를 제한하자.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.code,null,"performance.maxAssetSize"),", ",r.createElement(n.code,null,"performance.maxEntrypointSize")," 옵션 등. webpack의 ",r.createElement(n.a,{href:"https://webpack.js.org/configuration/performance/"},"Performance 옵션")," 문서 참고"),"\n"),"\n"),"\n",r.createElement(n.li,null,"목적에 따른 적절한 ",r.createElement(n.a,{href:"https://webpack.js.org/configuration/devtool/"},"Devtool")," 옵션을 사용하자."),"\n"),"\n",r.createElement(n.h1,null,"일반"),"\n",r.createElement(n.h2,null,"1. 브라우저 렌더링 방식"),"\n",r.createElement(n.p,null,"브라우저가 웹페이지를 렌더링할 때 어떤 일이 일어나는 가를 설명해달라는 질문이었다. 관련 내용은 ",r.createElement(n.a,{href:"https://boxfoxs.tistory.com/408"},"브라우저 렌더링 과정 - Reflow Repaint, 그리고 성능 최적화")," 문서에 자세히 나와있다."),"\n",r.createElement(n.hr),"\n",r.createElement(n.p,null,"렌더링 엔진의 기본 동작 방식은 아래와 같다."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"먼저 DOM(Document Object Model) Tree와 CSSOM (CSS Object Model) Tree를 생성한다."),"\n",r.createElement(n.li,null,"위 두 항목을 기반으로 Render Tree를 생성한다."),"\n",r.createElement(n.li,null,"Layout 단계: Render Tree를 사용해 뷰포트Viewport에서의 엘리먼트의 크기와 위치를 계산한다."),"\n",r.createElement(n.li,null,"Paint 단계: Layout 단계에서 계산한 값을 가지고 실제로 화면에 그린다."),"\n"),"\n",r.createElement(n.h3,null,"Reflow"),"\n",r.createElement(n.p,null,"Layout 단계부터 다시 렌더링 작업을 수행하는 것을 Reflow 라고 한다. 아래와 같은 경우에 Reflow가 발생한다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"페이지 최초 렌더링 시"),"\n",r.createElement(n.li,null,"윈도우 리사이징 시"),"\n",r.createElement(n.li,null,"노드 추가 또는 제거 시"),"\n",r.createElement(n.li,null,"요소 위치 또는 크기 변경 시"),"\n",r.createElement(n.li,null,"폰트, 텍스트 내용, 이미지 크기 변경 시"),"\n"),"\n",r.createElement(n.h3,null,"Repaint"),"\n",r.createElement(n.p,null,"Paint 단계를 다시 렌더링 작업을 수행하는 것을 Repaint 라고 한다. 아래와 같은 경우에 Repaint가 발생한다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Reflow 발생 시"),"\n",r.createElement(n.li,null,"레이아웃에 영향을 주지 않는 스타일 속성 변경 시 (예, ",r.createElement(n.code,null,"background-color"),", ",r.createElement(n.code,null,"visibility"),")"),"\n"),"\n",r.createElement(n.h3,null,"Reflow, Repaint 줄이려면"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Reflow, Redraw 가 발생하는 CSS 속성들의 사용을 피하자."),"\n",r.createElement(n.li,null,"레이아웃 변경 시 영향을 주는 노트/엘리먼트 수를 줄이자."),"\n",r.createElement(n.li,null,"애니메이션 사용 시 애니메이션 프레임을 줄이자."),"\n"),"\n",r.createElement(n.h3,null,"추가로 볼 문서"),"\n",r.createElement(n.p,null,"위에서 언급한 ",r.createElement(n.a,{href:"https://boxfoxs.tistory.com/408"},"브라우저 렌더링 과정 - Reflow Repaint, 그리고 성능 최적화")," 문서도 충분히 좋은 내용이다."),"\n",r.createElement(n.p,null,"MDN의 ",r.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work"},"Populating the page: how browsers work")," 문서나 네이버 개발자 블로그의 ",r.createElement(n.a,{href:"https://d2.naver.com/helloworld/59361"},"브라우저는 어떻게 동작하는가?")," 문서도 좋다. 두 문서는 내용이 꽤 길긴 하지만 충분히 읽어볼 만하다."))}var c,o,u,m,i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)},s=t(1880),p=t(1883),E=t(3723),d=t(1858),h=t(3904),f=t(891),g=t(5534),b=t(5777),k=t(7178);const x=e=>{let{data:n,children:t}=e;const{frontmatter:l,sameSeriesPosts:a}=n.mdx,{title:c,slug:o,date:u,tags:m,series:i,heroImage:s,heroImageAlt:h}=l,f=s?(0,E.c)(s):null;return r.createElement(d.Z,null,r.createElement(w,null,r.createElement("h1",null,c),r.createElement(R,null,u),r.createElement(y,null,m.map((e=>r.createElement("li",{key:e},r.createElement(p.rU,{to:"/tags/"+e},e)))))),r.createElement(k.Z,{name:i,data:a,current:o}),!!f&&r.createElement(v,{image:f,alt:null!=h?h:""}),r.createElement(g.Z,null,t),r.createElement(b.Z,null))},w=f.ZP.div(c||(c=(0,s.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),v=(0,f.ZP)(E.G)(o||(o=(0,s.Z)(["\n  margin-bottom: 16px;\n"]))),R=f.ZP.div(u||(u=(0,s.Z)(["\n  margin: 16px 0;\n"]))),y=f.ZP.ul(m||(m=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),P=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:a,slug:c,tags:o,heroImage:u,previewContent:m},excerpt:i}=l.mdx,s=u?(0,E.c)(u):null;return r.createElement(h.Z,{title:a,description:null!=m?m:i,path:"posts/"+c,thumbnail:null==s||null===(n=s.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:o,ogType:"article"})};function j(e){return r.createElement(x,e,r.createElement(i,e))}},5777:function(e,n,t){var l=t(7294);n.Z=function(){const e=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,l]=e;t.setAttribute(n,l)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),l.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var l,r=t(1880);const a=t(891).ZP.div(l||(l=(0,r.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=a},7178:function(e,n,t){var l,r,a,c,o,u=t(1880),m=t(7294),i=t(1883),s=t(891);const p=s.ZP.div(l||(l=(0,u.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),E=s.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),d=s.ZP.ol(a||(a=(0,u.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=s.ZP.li(c||(c=(0,u.Z)(["\n  ","\n"])),(e=>e.active&&(0,s.iv)(o||(o=(0,u.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=e=>{let{name:n,data:t,current:l}=e;const[r,a]=m.useState(!0);return t?m.createElement(p,null,m.createElement(E,{collapsed:r,onClick:()=>a((e=>!e))},m.createElement("h2",null,"시리즈 ",m.createElement(i.rU,{to:"/series/"+n+"/"},'"'+n+'"')),m.createElement("span",null,"▲")),!r&&m.createElement(d,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return m.createElement(h,{active:n===l,key:n},m.createElement(i.rU,{to:"/posts/"+n},t))})))):null}},1151:function(e,n,t){t.d(n,{ah:function(){return a}});var l=t(7294);const r=l.createContext({});function a(e){const n=l.useContext(r);return l.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210430-tech-interview-questions-2-index-mdx-641c0a6280c8b9ca74c5.js.map