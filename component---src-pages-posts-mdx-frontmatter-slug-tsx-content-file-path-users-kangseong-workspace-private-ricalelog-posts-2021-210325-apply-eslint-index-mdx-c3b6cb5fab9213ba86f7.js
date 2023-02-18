"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[723],{940:function(n,e,t){t.r(e),t.d(e,{Head:function(){return C},default:function(){return H}});var a=t(1151),s=t(7294);function l(n){const e=Object.assign({div:"div",p:"p",a:"a",h2:"h2",h3:"h3",code:"code",h4:"h4",strong:"strong",hr:"hr",ul:"ul",li:"li"},(0,a.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.div,{className:"md"},s.createElement(e.p,null,"코드를 일관성 있는 형식으로 유지하는 것은 중요하다. 일관성 있는 코드는 가독성을 올려주며, 이는 협업 및 유지보수에 큰 도움을 준다."),s.createElement(e.p,null,"코드를 일관성있게 유지하는 방법은 많이 있겠지만, (React Native 환경에서) 가장 쉽게 적용할 수 있는 방법 중 하나가 ESLint 적용이라고 생각한다. ",s.createElement(e.a,{href:"https://eslint.org/"},"ESLint")," 는 설정된 규칙에 어긋나는 코드를 리포팅해주는 도구이다. 설치 및 설정이 간단하기 때문에 누구나 쉽게 사용할 수 있다."),s.createElement(e.h2,{id:"1-설치",style:{position:"relative"}},s.createElement(e.a,{href:"#1-%EC%84%A4%EC%B9%98","aria-label":"1 설치 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 설치"),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">$ <span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> eslint</code></pre></div>'}}),s.createElement(e.p,null,"위 명령어를 통해 설치할 수 있다."),s.createElement(e.p,null,"ESLint 는 설치한 뒤, 설정 파일을 작성해야 한다. 방법은 두 가지가 있다. 하나는 ESLint 에서 제공하는 명령어를 통해 자동 생성하는 것이고, 다른 하나는 프리셋을 사용하는 것이다. (물론 직접 작성하는 방법도 있지만 이 글에서는 다루지 않는다.)"),s.createElement(e.h3,{id:"11-eslint---init",style:{position:"relative"}},s.createElement(e.a,{href:"#11-eslint---init","aria-label":"11 eslint   init permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.1. ",s.createElement(e.code,null,"eslint --init")),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">$ ./node_modules/.bin/eslint <span class="token parameter variable">--init</span></code></pre></div>'}}),s.createElement(e.p,null,"위 명령어를 입력하면 아래처럼 터미널에 몇 가지 문항이 뜨는데 자신에게 알맞는 답을 선택하면 자동으로 설정 파일을 생성해주고 필요한 디펜던시까지 설치해준다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">✔ How would you like to use ESLint?\n✔ What type of modules does your project use?\n✔ Which framework does your project use?\n✔ Does your project use TypeScript?\n✔ Where does your code run?\n✔ What format do you want your config file to be in?\nThe config that you\'ve selected requires the following dependencies:\n\neslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest\n✔ Would you like to install them now with npm?\nInstalling eslint-plugin-react@latest, @typescript-eslint/eslint-plugin@latest, @typescript-eslint/parser@latest</code></pre></div>'}}),s.createElement(e.h3,{id:"12-react-native-community-의-프리셋-사용",style:{position:"relative"}},s.createElement(e.a,{href:"#12-react-native-community-%EC%9D%98-%ED%94%84%EB%A6%AC%EC%85%8B-%EC%82%AC%EC%9A%A9","aria-label":"12 react native community 의 프리셋 사용 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.2. react-native-community 의 프리셋 사용"),s.createElement(e.p,null,"또다른 방법은 ",s.createElement(e.a,{href:"https://github.com/react-native-community"},"React Native Community")," 에서 제공하는 설정 ",s.createElement(e.a,{href:"https://www.npmjs.com/package/@react-native-community/eslint-config"},"프리셋"),"을 사용하는 것이다. 해당 프리셋은 아래 명령어로 설치할 수 있다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ yarn add --dev @react-native-community/eslint-config</code></pre></div>'}}),s.createElement(e.p,null,"이 프리셋에는 TypeScript 관련 설정이 포함되어 있다."),s.createElement(e.p,null,"라이브러리가 설치되면 설정 파일을 작성해주어야 한다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// {ROOT}/.eslintrc.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@react-native-community"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.npmjs.com/package/@react-native-community/eslint-config"},"@react-native-community/eslint-config")," 패키지에 설정이 미리 되어 있으므로, 이 이상 더 해 줄 것은 없다."),s.createElement(e.h4,{id:"121-프리셋-설정-수정",style:{position:"relative"}},s.createElement(e.a,{href:"#121-%ED%94%84%EB%A6%AC%EC%85%8B-%EC%84%A4%EC%A0%95-%EC%88%98%EC%A0%95","aria-label":"121 프리셋 설정 수정 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.2.1. 프리셋 설정 수정"),s.createElement(e.p,null,"React Native Community 의 프리셋이 일부 마음에 들지 않을 수 있다. 그렇다면 설정 파일을 수정하면 된다."),s.createElement(e.p,null,"마음에 들지 않을 수 있는 대표적은 설정으로는 ",s.createElement(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-prettier"},"prettier")," 설정이 있다. React Native Community 의 프리셋에는 prettier 옵션이 설정되어 있고, 이 옵션에 의한 코드 스타일은 개발자의 호불호가 크게 갈릴 수 있다. 만약 해당 설정을 끄고 싶다면 아래처럼 설정 파일을 수정하면 된다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// {ROOT}/.eslintrc.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"@react-native-community"</span><span class="token punctuation">,</span>\n\n    <span class="token comment">// eslint-config-prettier 는</span>\n    <span class="token comment">// @react-native-community/eslint-config 의 디펜던시에</span>\n    <span class="token comment">// 포함된 패키지이므로, 추가로 설치해 줄 필요는 없다.</span>\n    <span class="token string">"eslint-config-prettier"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// prettier 설정을 끈다.</span>\n    <span class="token string-property property">"prettier/prettier"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(e.p,null,"단 위처럼 prettier를 꺼버리면 ",s.createElement(e.code,null,"comma-dangle"),", ",s.createElement(e.code,null,"quotes")," 등 prettier 를 통해 적용되고 있던 일부 lint 옵션들이 꺼질 수 있다. 그러면 ",s.createElement(e.code,null,"rules")," 필드에 원하는 룰을 추가해주면 된다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// {ROOT}/.eslintrc.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string-property property">"comma-dangle"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"always-multiline"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"single"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token string">"always"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(e.p,null,"설정에 관한 자세한 내용은 ",s.createElement(e.a,{href:"https://eslint.org/docs/user-guide/configuring/"},"공식 문서"),"를 참고하자."),s.createElement(e.h2,{id:"2-자동화",style:{position:"relative"}},s.createElement(e.a,{href:"#2-%EC%9E%90%EB%8F%99%ED%99%94","aria-label":"2 자동화 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 자동화"),s.createElement(e.p,null,"ESLint 를 적용했지만, 이 툴은 설치한 것만으로 자동으로 코드를 검사를 해주지 않는다. ",s.createElement(e.code,null,"eslint")," 명령어를 실행해야지만 코드를 검사해준다. 하지만 명령어를 일일이 쳐주는 것은 번거로울 뿐더러 까먹기도 쉽다. 까먹고 커밋하고 푸시하면 결국 설치한 것이 의미가 없어진다. 까먹지 않는 가장 좋은 방법은 툴이 자동으로 알아서 실행되게끔 자동화를 해주는 것이다."),s.createElement(e.p,null,"자동화 방법에는 여러가지가 있을 수 있겠지만, 여기서는 ",s.createElement(e.a,{href:"https://git-scm.com/"},"git")," 의 ",s.createElement(e.a,{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"},"pre-commit 훅"),"을 사용한다."),s.createElement(e.h3,{id:"21-pre-commit",style:{position:"relative"}},s.createElement(e.a,{href:"#21-pre-commit","aria-label":"21 pre commit permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.1. pre-commit"),s.createElement(e.p,null,"pre-commit 훅은 커밋 직전에 실행되는 스크립트다. 스크립트 결과에 따라 커밋을 막을 수도 있다. 즉 우리는 pre-commit 으로 ",s.createElement(e.code,null,"eslint")," 명령어를 실행하고, 룰셋에 맞지 않는 코드가 있으면 커밋을 하지 못하게 할 것이다."),s.createElement(e.p,null,"pre-commit 훅은 ",s.createElement(e.code,null,".git/hooks/pre-commit")," 파일에 작성하면 된다. 아래는 간략화한 pre-commit 코드다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token comment"># eslint 가 설치되어 있는지 확인하고 설치되어있지 않다면 커밋을 막는다.</span>\n<span class="token assign-left variable">ESLINT</span><span class="token operator">=</span><span class="token string">"node_modules/.bin/eslint"</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token string">"<span class="token variable">$ESLINT</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">printf</span> <span class="token string">"Please install ESlint<span class="token entity" title="\\n">\\n</span>"</span>\n  <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># staged 된 파일들에 대해서만 eslint --fix 명령어를 실행한다.</span>\n<span class="token assign-left variable">STAGED_FILES</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> --name-only --diff-filter<span class="token operator">=</span>ACM <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">".[jt]sx\\{0,1\\}$"</span><span class="token variable">)</span></span><span class="token punctuation">)</span>\n<span class="token variable">$ESLINT</span> <span class="token string">"<span class="token variable">${STAGED_FILES<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span> <span class="token parameter variable">--fix</span>\n<span class="token assign-left variable">ESLINT_EXIT</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$?</span>"</span>\n\n<span class="token comment"># eslint --fix 결과에 따라 커밋을 진행한다.</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">${ESLINT_EXIT}</span>"</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n  <span class="token builtin class-name">printf</span> <span class="token string">"COMMIT SUCCEEDED"</span>\n<span class="token keyword">else</span>\n  <span class="token builtin class-name">printf</span> <span class="token string">"COMMIT FAILED"</span>\n  <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n<span class="token builtin class-name">exit</span> <span class="token variable">$?</span></code></pre></div>'}}),s.createElement(e.p,null,"(",s.createElement(e.a,{href:"https://gist.github.com/ricale/a386ae04faff3ba26f3f44c0bbcfcbe3"},"스크립트 원문"),")"),s.createElement(e.h2,{id:"3-결과",style:{position:"relative"}},s.createElement(e.a,{href:"#3-%EA%B2%B0%EA%B3%BC","aria-label":"3 결과 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. 결과"),s.createElement(e.p,null,"이제 코드를 커밋할 때마다 git 스테이지에 포함된 파일에 대해 자동으로 eslint 명령어가 실행될 것이다. 작업 다 끝났다고 생각했는데 pre-commit 에 의해 커밋이 막히면 기분이 나쁠 수도 있지만, 장기적으로 봤을 때 작업의 효율성이 개선될 것이다."),s.createElement(e.h2,{id:"4-개선점",style:{position:"relative"}},s.createElement(e.a,{href:"#4-%EA%B0%9C%EC%84%A0%EC%A0%90","aria-label":"4 개선점 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. 개선점?"),s.createElement(e.p,null,"ESLint 는 기본적으로 일관된 코드를 강제하는 것에 초점을 두기 보다는 나쁜 코드를 막는 것에 초점을 둔다. 규칙에 맞지 않는 코드를 찾아주지만 그것을 자동으로 고쳐주지는 않고 (",s.createElement(e.code,null,"--fix")," 옵션을 통해 몇몇 옵션들은 코드를 자동으로 고쳐주기도 하지만 모든 옵션이 다 그렇지는 않다), 규칙 자체도 상황에 따라서는 느슨하다고 느낄 수 있다."),s.createElement(e.p,null,"그렇다면 일관된 코드를 강제하기 위한 대안은 어떤 게 있을까?"),s.createElement(e.p,null,s.createElement(e.a,{href:"https://prettier.io/"},"Prettier")," 라이브러리를 사용하는 방법이 있다. Prettier 는 말 그대로 일관된 코드를 강제하는, 일관되지 않은 부분을 강제로 고쳐주는 툴이다. (",s.createElement(e.strong,null,"1.2.1. 프리셋 설정 수정")," 에서 비활성화했던 prettier 옵션이 이 ",s.createElement(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-prettier"},"Prettier 라이브러리의 ESLint 플러그인 버전"),"이다.) 다만 이 툴은 강제성이 크기 때문에 사용자에 따라 호불호가 갈릴 수 있다. 사용해보고 더 맞는 쪽을 선택하는 것이 좋을 것 같다."),s.createElement(e.hr),s.createElement(e.h2,{id:"references",style:{position:"relative"}},s.createElement(e.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"https://gist.github.com/broofa/730fab6ceb1686f4a1fa9977b791b1b5"},"GitHub Gist - broofa/pre-commit")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"https://github.com/facebook/react-native/issues/26903"},"facebook/react-native - Remove prettier from eslint-config-react-native-community")),"\n")),"\n",s.createElement(e.div,{className:"toc"},s.createElement(e.p,null,"목차"),s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#1-%EC%84%A4%EC%B9%98"},"1. 설치"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#11-eslint---init"},"1.1. ",s.createElement(e.code,null,"eslint --init"))),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#12-react-native-community-%EC%9D%98-%ED%94%84%EB%A6%AC%EC%85%8B-%EC%82%AC%EC%9A%A9"},"1.2. react-native-community 의 프리셋 사용"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#121-%ED%94%84%EB%A6%AC%EC%85%8B-%EC%84%A4%EC%A0%95-%EC%88%98%EC%A0%95"},"1.2.1. 프리셋 설정 수정")),"\n"),"\n"),"\n"),"\n"),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#2-%EC%9E%90%EB%8F%99%ED%99%94"},"2. 자동화"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#21-pre-commit"},"2.1. pre-commit")),"\n"),"\n"),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#3-%EA%B2%B0%EA%B3%BC"},"3. 결과")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#4-%EA%B0%9C%EC%84%A0%EC%A0%90"},"4. 개선점?")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#references"},"References")),"\n")))}var o,r,c,i=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?s.createElement(e,n,s.createElement(l,n)):l(n)},p=t(1880),u=t(3723),m=t(6758),d=t(3904),h=t(891),g=t(5534),f=t(5777),k=t(7178),E=t(2889),v=t(5924),b=t(7466);function y(n){let{data:e,children:t}=n;const a=s.useRef(),{frontmatter:l,sameSeriesPosts:o}=e.mdx,{title:r,slug:c,date:i,tags:p,series:u,heroImage:d,heroImageAlt:h}=l;return s.useEffect((()=>{var n;const e=null===(n=a.current)||void 0===n?void 0:n.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,v.Z)(a,e)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==e||e.forEach((n=>t.observe(n))),()=>t.disconnect()}),[]),s.createElement(m.Z,null,s.createElement(x,null,s.createElement("h1",null,r),s.createElement(w,null,i),s.createElement(E.Z,{tags:p})),s.createElement(k.Z,{name:u,data:o,current:c}),s.createElement(b.Z,{data:d,alt:h}),s.createElement(S,{ref:a},t),s.createElement(f.Z,null))}const x=h.ZP.div(o||(o=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=h.ZP.div(r||(r=(0,p.Z)(["\n  margin: 16px 0;\n"]))),S=(0,h.ZP)(g.Z)(c||(c=(0,p.Z)(["\n  margin-bottom: 60px;\n"]))),C=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:l,slug:o,tags:r,heroImage:c,previewContent:i},excerpt:p}=a.mdx,m=c?(0,u.c)(c):null;return s.createElement(d.Z,{title:l,description:null!=i?i:p,path:"posts/"+o,thumbnail:null==m||null===(e=m.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function H(n){return s.createElement(y,n,s.createElement(i,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,s,l=t(5785),o=t(1880),r=t(891);const c=r.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,l.Z)(new Array(30)).map(((n,e)=>(0,r.iv)(s||(s=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(e+1),(1100+10*e-800)/2))),1400,(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=c},7466:function(n,e,t){var a,s=t(1880),l=t(7294),o=t(3723);const r=t(891).ZP.div(a||(a=(0,s.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));e.Z=function(n){let{data:e,alt:a}=n;const s=e?(0,o.c)(e):null,c=e?null!=a?a:"PostImage":"by ricale";return l.createElement(r,null,s?l.createElement(o.G,{image:s,alt:c}):l.createElement(o.S,{src:"../images/defaultThumbnail.jpeg",alt:c,__imageData:t(6955)}),l.createElement("p",null,c))}},7178:function(n,e,t){var a,s,l,o,r,c=t(1880),i=t(7294),p=t(1883),u=t(891);const m=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),d=u.ZP.div(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),h=u.ZP.ol(l||(l=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=u.ZP.li(o||(o=(0,c.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(r||(r=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[s,l]=i.useState(!0);return t?i.createElement(m,null,i.createElement(d,{collapsed:s,onClick:()=>l((n=>!n))},i.createElement("h2",null,"시리즈 ",i.createElement(p.Link,{to:"/series/"+e+"/"},'"'+e+'"')),i.createElement("span",null,"▲")),!s&&i.createElement(h,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return i.createElement(g,{active:e===a,key:e},i.createElement(p.Link,{to:"/posts/"+e},t))})))):null}},2889:function(n,e,t){t.d(e,{Z:function(){return m}});var a,s=t(1880),l=t(7294),o=t(891),r=t(1883);const c=(0,o.ZP)(r.Link)(a||(a=(0,s.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));var i,p=function(n){let{value:e}=n;return l.createElement(c,{to:"/tags/"+e},e)};const u=o.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));var m=function(n){let{tags:e,showCount:t,...a}=n;const s="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return l.createElement(u,a,s.map((n=>l.createElement("li",{key:n.fieldValue},l.createElement(p,{value:n.fieldValue}),t&&!!n.totalCount&&l.createElement("sup",null,""+n.totalCount)))))}},5924:function(n,e){const t="highlight";e.Z=function(n,e){var a,s,l;if(!e)return;const o=document.documentElement.scrollTop+10-(null!==(a=null===(s=n.current)||void 0===s?void 0:s.offsetTop)&&void 0!==a?a:0);let r;for(let t=0;t<e.length;t++)if(e[t].offsetTop>o){var c;r=null!==(c=e[t-1])&&void 0!==c?c:null;break}if(void 0===r&&(r=e[e.length-1]),null===(l=n.current)||void 0===l||l.querySelectorAll(".highlight").forEach((n=>n.classList.remove(t))),r){var i;const e=r.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=e?e:"")+"']",s=null===(i=n.current)||void 0===i?void 0:i.querySelector(a);null==s||s.classList.add(t)}}},1151:function(n,e,t){t.d(e,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}},6955:function(n){n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210325-apply-eslint-index-mdx-c3b6cb5fab9213ba86f7.js.map