"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8382],{2729:function(n,e,t){t.r(e),t.d(e,{Head:function(){return T},default:function(){return q}});var a=t(1151),l=t(7294);function s(n){const e=Object.assign({p:"p",a:"a",em:"em",h2:"h2",hr:"hr",blockquote:"blockquote",ul:"ul",li:"li",code:"code",div:"div",h3:"h3",h4:"h4",strong:"strong"},(0,a.ah)(),n.components);return l.createElement(l.Fragment,null,l.createElement(e.p,null,"요 근래 몇몇 크고 작은 회사에서 기술 면접을 봤다. 경력에 관련된 질문은 제외하고, 순수하게 기술과 관련된 질문 중 기억에 남는 것들을 정리해 보았다."),"\n",l.createElement(e.p,null,"이 글에는 Vanilla JavaScript에 관련된 내용만 정리했다. TypeScript, React, 그 외 기타 프론트엔드에 관련된 질문은 ",l.createElement(e.a,{href:"https://ricale.kr/blog/posts/210430-tech-interview-questions-2/"},"다음 글"),"에서 정리한다."),"\n",l.createElement(e.p,null,"인용구로 작성된 내용은 ",l.createElement(e.em,null,"인용구가 나오기 전 링크가 연결된 문서"),"에서 가져온 문장이거나, 해당 문서에 있는 영문장을 번역한 문장이다."),"\n",l.createElement(e.h2,null,"1. 부모자식 엘리먼트 간 이벤트 흐름"),"\n",l.createElement(e.p,null,"이벤트 버블링과 이벤트 캡쳐링에 관해 묻는 질문이었다. 해당 내용은 MDN의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"},"Introduction to events")," 문서의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture"},"Event bubbling and capture")," 섹션에서 확인할 수 있다."),"\n",l.createElement(e.hr),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"부모 엘리먼트를 갖고 있는 엘리먼트에 이벤트가 발생하면, 모던 브라우저Morden Browser는 두 가지의 국면에 돌입한다. 각각을 캡쳐링Capturing 과 버블링Bubbling 이라 칭한다."),"\n",l.createElement(e.p,null,"캡처링에서는:"),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,"브라우저는 이벤트가 발생한 엘리먼트의 최상위 부모 엘리먼트(",l.createElement(e.code,null,"<html>"),")를 찾아 그 엘리먼트가 이벤트 리스너를 갖고 있는지 확인한다. 만약 갖고 있다면 이벤트 리스너를 실행한다."),"\n",l.createElement(e.li,null,"이후 바로 아랫단계의 부모 엘리먼트를 찾는다. 그리고 위에서 한 일을 반복한다. 이것을 이벤트가 발생한 엘리먼트에 도달할 때까지 반복한다."),"\n"),"\n",l.createElement(e.p,null,"버블링에서는:"),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,"브라우저는 이벤트가 발생한 엘리먼트가 이벤트 리스너를 갖고 있는지 확인한다. 만약 갖고 있다면 이벤트 리스너를 실행한다."),"\n",l.createElement(e.li,null,"이후 바로 윗단계의 부모 엘리먼트를 찾는다. 그리고 위에서 한 일을 반복한다. 이것을 최상위 부모 엘리먼트(",l.createElement(e.code,null,"<html>"),")에 도달할 때까지 반복한다."),"\n"),"\n"),"\n",l.createElement(e.p,null,"간단히 말해 이벤트가 발생하면, 캡처링은 위에서부터 쭉 훑으며 이벤트 리스너를 실행하고, 버블링은 아래에서부터 쭉 훑으며 이벤트 리스너를 실행한다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"모던 브라우저에서, 모든 이벤트는 기본적으로 버블링 과정을 거치도록 되어있다."),"\n"),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"버블링 과정을 거치게 하고 싶지 않다면 (해당 엘리먼트만 이벤트를 처리하게 하고 싶다면) ",l.createElement(e.code,null,"event.stopPropagation()"),"을 사용하면 된다."),"\n"),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"만약 캡처링 과정을 거치게 하고 싶다면, ",l.createElement(e.code,null,"addEventListener()")," 메서드의 세 번째 인자를 ",l.createElement(e.code,null,"true"),"로 하면 된다."),"\n"),"\n",l.createElement(e.p,null,"개인적으로 이벤트 캡처링을 실무에서 사용해 본 경험은 없다. 버블링은 이벤트 델리게이션을 활용하기 위해 많이 사용했다. 이벤트 델리게이션은 수많은 자식 엘리먼트의 이벤트 핸들링을 부모 엘리먼트에서 한 번에 처리하는 것을 말한다. (예, ",l.createElement(e.code,null,"<table>")," 혹은 ",l.createElement(e.code,null,"<ul>")," 등의 부모 엘리먼트 안에 각각의 항목에 대해 동일한 종류의 처리를 해줘야 할 때)"),"\n",l.createElement(e.p,null,l.createElement(e.a,{href:"https://javascript.info/"},"javascript.info"),"의 ",l.createElement(e.a,{href:"https://javascript.info/bubbling-and-capturing"},"Bubbling and capturing")," 문서도 참고할 만 하다."),"\n",l.createElement(e.h2,null,"2. 호이스팅"),"\n",l.createElement(e.p,null,"호이스팅이 무엇인지, 그리고 그것을 ",l.createElement(e.code,null,"var"),", ",l.createElement(e.code,null,"const"),", ",l.createElement(e.code,null,"let"),"과 연관지어서 설명해달라는 질문이었다. 해당 내용은 MDN의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"},"Hoisting")," 문서에서 확인할 수 있다."),"\n",l.createElement(e.hr),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,'개념적인 호이스팅Hoisting의 정의는 "변수와 함수의 선언이 물리적으로 코드의 최상단으로 이동한다"는 것이다. 하지만 실제로는 그렇지 않다. 실제로는 컴파일 단계에서 변수와 함수의 선언이 메모리에 저장되지만, 코드상으로는 입력된 위치에 그대로 남아있다.'),"\n"),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token function">catName</span><span class="token punctuation">(</span><span class="token string">"Chloe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">catName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"My cat\'s name is "</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*\nThe result of the code above is: "My cat\'s name is Chloe"\n*/</span></code></pre></div>'}}),"\n"),"\n",l.createElement(e.p,null,"함수를 사용하는 코드가 함수의 선언 앞에 있어도 호이스팅에 의해 문제 없이 실행된다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"오직 선언만이 호이스팅 된다. 초기화는 호이스팅되지 않는다."),"\n"),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,l.createElement(e.code,null,"let"),"과 ",l.createElement(e.code,null,"const"),"는 호이스팅되지 않는다."),"\n"),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"a is"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> "a is undefined"</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"b is"</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> Uncaught ReferenceError: b is not defined</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"c is"</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> Uncaught ReferenceError: Cannot access \'c\' before initialization</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"d is"</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> Uncaught ReferenceError: d is not defined</span>\n\n<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\nb <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",l.createElement(e.h2,null,"3. ",l.createElement(e.code,null,"this")," 바인딩"),"\n",l.createElement(e.p,null,"함수 내부에서 ",l.createElement(e.code,null,"this")," 바인딩이 어떤 원리와 과정으로 진행되는지 설명해달라는 질문이었다. 관련된 내용은 MDN의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this"},"this")," 문서에서 확인할 수 있다."),"\n",l.createElement(e.hr),"\n",l.createElement(e.p,null,l.createElement(e.code,null,"this"),"는 함수가 어떻게 호출되느냐에 따라 그 값이 달라진다."),"\n",l.createElement(e.h3,null,"3.1. 글로벌 컨텍스트"),"\n",l.createElement(e.p,null,"글로벌 컨텍스트에서 ",l.createElement(e.code,null,"this"),"는 글로벌 객체가 된다. (브라우저 환경에서는 ",l.createElement(e.code,null,"window"),", node.js 환경에서는 ",l.createElement(e.code,null,"globalThis")," 등)"),"\n",l.createElement(e.h3,null,"3.2. 함수"),"\n",l.createElement(e.p,null,"함수에서는 값이 지정되지 않으면 strict mode에 따라 값이 달라진다."),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,"strict 모드가 아니라면 글로벌 객체가 지정된다."),"\n",l.createElement(e.li,null,"strict 모드라면 ",l.createElement(e.code,null,"undefined"),"가 된다. (단 몇몇 브라우저에서 글로벌 객체값이 되기도 한다.)"),"\n"),"\n",l.createElement(e.p,null,l.createElement(e.code,null,"call(obj)"),", ",l.createElement(e.code,null,"apply(obj)"),"를 사용하면 ",l.createElement(e.code,null,"this"),"는 ",l.createElement(e.code,null,"obj"),"가 된다."),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,"strict 모드가 아니라면 객체가 아닌 타입이 ",l.createElement(e.code,null,"obj"),"로 넘어왔을 때 이 값을 객체로 바꿔서 ",l.createElement(e.code,null,"this"),"로 지정한다. 예를 들어 ",l.createElement(e.code,null,"obj"),"가 ",l.createElement(e.code,null,"7"),"이었다면 ",l.createElement(e.code,null,"new Number(7)"),"로 변형해서 사용한다."),"\n",l.createElement(e.li,null,"strict 모드라면 ",l.createElement(e.code,null,"obj")," 값을 그대로 사용한다. 예를 들어 ",l.createElement(e.code,null,"obj"),"가 ",l.createElement(e.code,null,"7"),"이었다면 ",l.createElement(e.code,null,"7"),"을 그대로 사용한다."),"\n"),"\n",l.createElement(e.h4,null,l.createElement(e.code,null,"new")," 키워드와 함께 생성자로 쓰일 때"),"\n",l.createElement(e.p,null,"함수가 생성자로 쓰이면 (",l.createElement(e.code,null,"new")," 키워드와 함께 쓰이면) ",l.createElement(e.code,null,"this"),"는 생성된 객체를 지정한다."),"\n",l.createElement(e.p,null,"만약 해당 함수에서 별도의 새로운 객체를 반환하면, 함수 내에서 쓰이던 ",l.createElement(e.code,null,"this")," 객체가 반환되는 게 아니라 새로운 객체가 반환된다."),"\n",l.createElement(e.h3,null,"3.3. 클래스"),"\n",l.createElement(e.p,null,"생성자에서 ",l.createElement(e.code,null,"this"),"는 일반 객체가 된다. ",l.createElement(e.code,null,"this.prototype"),"에는 해당 클래스의 non-static 메서드들이 포함된다."),"\n",l.createElement(e.p,null,"자식 클래스에서는 ",l.createElement(e.code,null,"super()")," 를 호출해야지만 ",l.createElement(e.code,null,"this"),"가 지정된다. ",l.createElement(e.code,null,"super()")," 호출 이전에 ",l.createElement(e.code,null,"this"),"를 사용하면 에러가 발생한다. ",l.createElement(e.code,null,"super()")," 호출 없이 ",l.createElement(e.code,null,"this"),"를 사용하지 않고 일반 객체를 리턴하는 것은 문제 없다."),"\n",l.createElement(e.h4,null,"클래스 인스턴스 메서드"),"\n",l.createElement(e.p,null,"클래스 인스턴스의 메서드는 일반 함수와 동일하게 동작한다. 따라서 클래스 인스턴스를 ",l.createElement(e.code,null,"this"),"로 가리키게 하는 확실한 방법은 생성자에서 ",l.createElement(e.code,null,"bind(this)"),"를 사용해주는 것이다."),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>hi <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">thi</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">hi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 생성자에서 `bind(this)`를 해주었기 때문에</span>\n    <span class="token comment">// 이 메서드에서의 `this`는 무조건 클래스 인스턴스 객체를 가리킨다.</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">bye</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 이 메서드는 어떻게 사용하느냐에 따라 `this`가 바뀔 수 있다.</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(e.h3,null,"3.4. ",l.createElement(e.code,null,"bind()")),"\n",l.createElement(e.p,null,l.createElement(e.code,null,"bind(obj)"),"로 ",l.createElement(e.code,null,"this"),"를 지정하면, 이후에 어떻게 사용하던 ",l.createElement(e.code,null,"this"),"는 ",l.createElement(e.code,null,"obj"),"로 남게 된다. 이는 ",l.createElement(e.code,null,"bind(obj2)"),"를 재사용하거나, ",l.createElement(e.code,null,"call(obj2)"),", ",l.createElement(e.code,null,"apply(obj2)"),"를 사용해도 변경되지 않는다."),"\n",l.createElement(e.h3,null,"3.5. 화살표 함수"),"\n",l.createElement(e.p,null,"화살표 함수에서는 ",l.createElement(e.code,null,"this"),"가 가장 가까운 컨텍스트의 ",l.createElement(e.code,null,"this"),"로 자동 지정된다."),"\n",l.createElement(e.p,null,"화살표 함수의 ",l.createElement(e.code,null,"this")," 지정은 ",l.createElement(e.code,null,"bind()"),"와 유사해서, 한 번 지정된 이후로는 어떻게 사용하던 변경되지 않는다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> <span class="token function-variable function">x</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> fn <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token keyword">var</span> fn2 <span class="token operator">=</span> obj<span class="token punctuation">.</span>bar<span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code></pre></div>'}}),"\n"),"\n",l.createElement(e.h3,null,"3.6. 객체의 메서드"),"\n",l.createElement(e.p,null,"객체의 메서드일 경우, 해당 함수의 ",l.createElement(e.code,null,"this"),"는 해당 객체로 지정된다. 이는 함수를 어디서 선언했는가와 관계 없이 동작한다. 즉 객체의 외부에서 정의된 함수를 객체의 메서드로 할당해서 사용하면 ",l.createElement(e.code,null,"this"),"는 해당 객체로 변경된다. (단 ",l.createElement(e.code,null,"bind(obj)"),"를 사용한 함수는 예외.) 이는 ",l.createElement(e.code,null,"prototype")," 체인으로 생성된 객체의 메서드일 경우에도 동일하며, ",l.createElement(e.code,null,"get"),", ",l.createElement(e.code,null,"set")," 키워드를 사용해 선언된 메서드의 경우에도 동일하다."),"\n",l.createElement(e.h3,null,"3.7. DOM 객체의 이벤트 핸들러"),"\n",l.createElement(e.p,null,"이벤트 핸들러의 ",l.createElement(e.code,null,"this"),"는 해당 핸들러가 할당된 엘리먼트가 된다. 이는 인라인 이벤트 핸들러의 경우에도 동일하지만, 인라인 이벤트 핸들러 내부에서 선언된 별도의 함수는 ",l.createElement(e.code,null,"this"),"가 지정되지 않은 것으로 인식되어 글로벌 객체를 가리키게 된다."),"\n",l.createElement(e.h2,null,"4. 이벤트 루프"),"\n",l.createElement(e.p,null,"이벤트 루프가 함수의 콜스택과 연관지어서 어떻게 동작하는지 설명해달라는 질문이었다. 관련 내용은 MDN의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop"},"Concurrency model and the event loop")," 문서에서 확인할 수 있다."),"\n",l.createElement(e.hr),"\n",l.createElement(e.p,null,"이벤트 루프는 이름 그대로 이벤트를 처리하는 루프다. 아래의 코드와 유사한 형식으로 구현되어 있다고 한다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span><span class="token function">waitForMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  queue<span class="token punctuation">.</span><span class="token function">processNextMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n"),"\n",l.createElement(e.p,null,"이벤트 루프는 메시지 큐와 헷갈리기 쉽다. 메시지 큐는 (이벤트를 포함한) 메시지를 쌓는 큐이고, 이벤트 루프는 이 큐의 메시지를 처리하는 루프라고 이해하면 된다."),"\n",l.createElement(e.p,null,"이 코드는 동기적으로synchronously 동작한다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"각각의 메시지(이벤트)는 다른 메시지가 처리되기 전에 완벽하게 처리된다."),"\n"),"\n",l.createElement(e.p,null,"비동기적인 코드에 비해 로직을 구현하고 작성하기 편리하지만, 한 편으로는 하나의 메시지 처리가 오래 걸리면 다른 메시지 처리도 할 수 없기 때문에 너무 오래 걸리는 작업은 하지 않는 것이 좋다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"이벤트가 발생하고 그 이벤트 처리를 위한 이벤트 리스너가 존재한다면 이것은 이벤트 루프에서 처리된다. 하지만 이벤트 리스너가 없다면, 이벤트는 이벤트 루프로 가지 않고 그냥 사라진다."),"\n"),"\n",l.createElement(e.p,null,l.createElement(e.code,null,"setTimeout")," 또한 메시지로 처리된다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"만약에 (이벤트 루프에서 사용하는) 큐에 메시지가 하나도 없다면, 그리고 콜스택도 비어있다면, ",l.createElement(e.code,null,"setTimeout"),"의 메시지는 딜레이 시간 이후에 바로 실행된다. 하지만 큐에 메시지가 있다면 ",l.createElement(e.code,null,"setTimeout")," 메시지는 해당 메시지의 처리를 기다렸다가 실행된다. 따라서 ",l.createElement(e.code,null,"setTimeout"),"의 두번째 인자는 ",l.createElement(e.em,null,"딜레이될 최소 시간"),"을 의미한다. ",l.createElement(e.em,null,"보장된 딜레이 시간"),"을 의미하지 않는다."),"\n"),"\n",l.createElement(e.p,null,l.createElement(e.code,null,"setTimeout"),"의 두번째 인자를 0으로 넣어도, 위와 같은 이유로 바로 실행되지 않는다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"웹워커나 크로스오리진",l.createElement(e.code,null,"iframe"),"은 자신만의 스택, 힙, 메시지 큐를 갖고 있다. 이 개별적인 런타임 환경은 ",l.createElement(e.code,null,"postMessage"),"를 통해 메시지를 주고 받는 방식으로만 대화할 수 있다. 이 메시지 또한 메시지큐에 쌓인다."),"\n"),"\n",l.createElement(e.h2,null,"5. CORS and preflight"),"\n",l.createElement(e.p,null,"CORS가 무엇인지, preflight 요청이 무엇인지에 관해 묻는 질문이었다. 관련 내용은 MDN의 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing (CORS)")," 문서에서 확인할 수 있다."),"\n",l.createElement(e.hr),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"크로스오리진 리소스 쉐어링 (CORS)은 서버가 다른 origin의 서버에게 자원을 가져갈 수 있게 허용해주는, HTTP 헤더 기반 메커니즘이다."),"\n"),"\n",l.createElement(e.p,null,"CORS는 ",l.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"},"동일 출처 정책"),"을 제한적으로 해제할 수 있는 기능이다. 웹앱을 구현할 때 데이터가 있는 백엔드는 다른 서버에 있는 경우가 많은데, 그 경우 CORS 설정은 필수가 된다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,'CORS는 또한 브라우저가 크로스오리진 리소스 요청을 위해 만드는 "preflight" 리퀘스트에도 의존하는데, 이것은 서버가 리스소에 접근하려는 실제 리퀘스트를 허용하는지 체크하기 위한 요청이다.'),"\n"),"\n",l.createElement(e.p,null,"번역이 좀 어색한데 간단히 말하면 서버에 리퀘스트를 보내기 전에 해당 서버가 CORS를 허용하는지 확인하는 리퀘스트를 브라우저가 자동으로 보낸다는 이야기다."),"\n",l.createElement(e.p,null,"예를 들어 GET 리퀘스트를 발송하면 브라우저는 ",l.createElement(e.strong,null,"실제로는 같은 URL로 OPTIONS 메서드의 요청을 먼저 날린다"),". 그리고 이 요청이 승인을 받으면, 그제서야 원래 하려고 했던 GET 요청을 날리게 된다. 여기서 먼저 발송되었던 OPTIONS 리퀘스트가 바로 preflight 리퀘스트다."))}var c,o,p,u,r=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?l.createElement(e,n,l.createElement(s,n)):s(n)},i=t(1880),m=t(1883),k=t(3723),E=t(1858),d=t(3904),h=t(891),g=t(5534),b=t(5777),v=t(7178);const f=n=>{let{data:e,children:t}=n;const{frontmatter:a,sameSeriesPosts:s}=e.mdx,{title:c,slug:o,date:p,tags:u,series:r,heroImage:i,heroImageAlt:d}=a,h=i?(0,k.c)(i):null;return l.createElement(E.Z,null,l.createElement(y,null,l.createElement("h1",null,c),l.createElement(w,null,p),l.createElement(S,null,u.map((n=>l.createElement("li",{key:n},l.createElement(m.rU,{to:"/tags/"+n},n)))))),l.createElement(v.Z,{name:r,data:s,current:o}),!!h&&l.createElement(j,{image:h,alt:null!=d?d:""}),l.createElement(g.Z,null,t),l.createElement(b.Z,null))},y=h.ZP.div(c||(c=(0,i.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),j=(0,h.ZP)(k.G)(o||(o=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),w=h.ZP.div(p||(p=(0,i.Z)(["\n  margin: 16px 0;\n"]))),S=h.ZP.ul(u||(u=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),T=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:s,slug:c,tags:o,heroImage:p,previewContent:u},excerpt:r}=a.mdx,i=p?(0,k.c)(p):null;return l.createElement(d.Z,{title:s,description:null!=u?u:r,path:"posts/"+c,thumbnail:null==i||null===(e=i.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:o,ogType:"article"})};function q(n){return l.createElement(f,n,l.createElement(r,n))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210430-tech-interview-questions-1-index-mdx-4bf2a768efdc0eb327ea.js.map