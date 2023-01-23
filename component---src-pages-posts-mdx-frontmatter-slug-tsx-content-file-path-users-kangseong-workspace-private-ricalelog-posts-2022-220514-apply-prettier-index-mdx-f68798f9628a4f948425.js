"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4278],{2866:function(n,e,t){t.r(e),t.d(e,{Head:function(){return P},default:function(){return S}});var a=t(1151),s=t(7294);function l(n){const e=Object.assign({p:"p",a:"a",strong:"strong",ol:"ol",li:"li",div:"div",code:"code",h2:"h2",h3:"h3",h4:"h4",ul:"ul"},(0,a.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"원래는 ",s.createElement(e.a,{href:"https://prettier.io/"},"Prettier")," 를 사용하지 않는다. 이유는 그들이 ",s.createElement(e.strong,null,"독선적인 코드 포맷터(Opinionated Code Formatter)")," 를 표방하기 때문이다."),"\n",s.createElement(e.p,null,"설정 옵션을 최소화해서 스타일을 강제하고, 그럼으로써 (정답이 없는) 코드 스타일 논쟁을 원천 봉쇄한다, 불필요한 논쟁이 없기 때문에 생산성이 향상된다, 이것이 그들의 철학이다."),"\n",s.createElement(e.p,null,"나는 그 철학 자체는 동의하지만, 스타일은 동의할 수 없었다. 내가 타협할 수 없는 스타일이 있었으니, 그것은 아래 두 가지였다."),"\n",s.createElement(e.ol,null,"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,"함수 컴포넌트 선언부의 props 가 한 줄에 하나의 항목만 표시"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// 내 스타일</span>\n<span class="token keyword">function</span> <span class="token function">SomeComp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange <span class="token punctuation">}</span><span class="token operator">:</span> SomeCompProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// Prettier 의 스타일</span>\n<span class="token keyword">function</span> <span class="token function">SomeComp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">,</span> onChange <span class="token punctuation">}</span><span class="token operator">:</span> SomeCompProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n"),"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,"JSX 구문에서, 컴포넌트의 props 가 한 줄에 하나의 항목만 표시"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="tsx"><pre class="language-tsx"><code class="language-tsx"><span class="token comment">// 내 스타일</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SomeComp</span></span>\n  <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>someValue<span class="token punctuation">}</span></span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n<span class="token comment">// Prettier 의 스타일</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SomeComp</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>someValue<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span></code></pre></div>'}}),"\n"),"\n"),"\n",s.createElement(e.p,null,"둘 중 하나만 되더라도 타협할 수 있었겠지만 Prettier 는 둘 다 되지 않았다. 오로지 글자수로만, ",s.createElement(e.code,null,"printWidth")," 라는 옵션에 의해서만 props 를 한 줄에 모두 표시할지, 한 줄에 하나씩 표시할지를 판단했다."),"\n",s.createElement(e.p,null,"그래서 마음에 들지 않아 쓰지 않고 있었다."),"\n",s.createElement(e.h2,null,"1. Single Attribute Per Line 옵션"),"\n",s.createElement(e.p,null,'그런데 드디어 22년 4월에 공개된 2.6.0 버전부터 "JSX 구문에서, 컴포넌트의 props 가 한 줄에 하나의 항목만 표시"하는 기능을 지원하기 시작했다. 그것이 이 ',s.createElement(e.a,{href:"https://prettier.io/docs/en/options.html#single-attribute-per-line"},s.createElement(e.code,null,"singleAttributePerLine"))," 옵션이다."),"\n",s.createElement(e.p,null,"얼마 전 우연히 옵션을 확인하고 나서야, 드디어 Prettier 와 타협할 마음이 생겼다. 자, 타협을 하였으니 적용해보자."),"\n",s.createElement(e.h2,null,"2. Prettier 2.6 설치"),"\n",s.createElement(e.p,null,"위에서 언급한 ",s.createElement(e.code,null,"singleAttributePerLine")," 옵션을 사용하기 위해서는 2.6.0 이상의 버전을 설치해야 한다."),"\n",s.createElement(e.h3,null,"2.1. Prettier 새로 설치"),"\n",s.createElement(e.p,null,"Prettier 가 설치되어있지 않은 프로젝트는 아래 명령어로 설치해주면 된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">yarn add --dev prettier</code></pre></div>'}}),"\n",s.createElement(e.h3,null,"2.2. Prettier 버전 업그레이드"),"\n",s.createElement(e.p,null,"Prettier 가 설치되어있다면 버전을 올려줘야 한다."),"\n",s.createElement(e.p,null,"Prettier 를 직접 설치해 사용하고 있었다면 아래 명령어를 실행해주면 된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">yarn upgrade prettier@^2.6.2</code></pre></div>'}}),"\n",s.createElement(e.h4,null,"2.2.1. Prettier 가 설치한 다른 라이브러리의 디펜던시로 포함되어 있었다면"),"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.npmjs.com/package/@react-native-community/eslint-config"},"@react-native-community/eslint-config")," 처럼 Prettier 를 디펜던시로 포함하고 있는 라이브러리를 사용하고 있다면 Prettier 를 직접 설치한 적이 없더라도 설치되어 있을 것이다."),"\n",s.createElement(e.p,null,"설치가 되어있는지 확실히 알아보려면 yarn.lock 파일에서 ",s.createElement(e.code,null,"prettier@")," 로 검색해보자. 설치되어 있다면 아래와 같은 구문을 찾을 수 있다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">prettier@^2.0.2:\n  version "2.5.1"\n  resolved "https://registry.yarnpkg.com/prettier/-/prettier-2.5.1.tgz#fff75fa9d519c54cf0fce328c1017d94546bc56a"\n  integrity sha512-vBZcPRUR5MZJwoyi3ZoyQlc1rXeEck8KgeC9AwwOn+exuxLxq5toTRDTSaVrXHxelDMHy9zlicw8u66yxoSUFg==</code></pre></div>'}}),"\n",s.createElement(e.p,null,"만약 ",s.createElement(e.code,null,"version")," 부분이 2.6.0 이상이면 제대로 설치되어 있는 것이므로 업그레이드를 할 필요가 없다. 그 이전 버전이라면, 버전을 올려줘야 한다."),"\n",s.createElement(e.p,null,"어떻게 업그레이드 할까? ",s.createElement(e.code,null,"yarn upgrade prettier@^2.6.2")," 로 해주면 될까? 해당 명령어를 실행하면 package.json 파일에는 prettier 가 추가되고"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n  <span class="token string-property property">"prettier"</span><span class="token operator">:</span> <span class="token string">"^2.6.2"</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"yarn.lock 파일은 아래처럼 바뀐다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">prettier@^2.0.2:\n  version "2.5.1"\n  resolved "https://registry.yarnpkg.com/prettier/-/prettier-2.5.1.tgz#fff75fa9d519c54cf0fce328c1017d94546bc56a"\n  integrity sha512-vBZcPRUR5MZJwoyi3ZoyQlc1rXeEck8KgeC9AwwOn+exuxLxq5toTRDTSaVrXHxelDMHy9zlicw8u66yxoSUFg==\n\nprettier@^2.6.2:\n  version "2.6.2"\n  resolved "https://registry.yarnpkg.com/prettier/-/prettier-2.6.2.tgz#e26d71a18a74c3d0f0597f55f01fb6c06c206032"\n  integrity sha512-PkUpF+qoXTqhOeWL9fu7As8LXsIUZ1WYaJiY/a7McAQzxjk82OF0tibkFXVCDImZtWxbvojFjerkiLb0/q8mew==</code></pre></div>'}}),"\n",s.createElement(e.p,null,"이 상태로 Prettier 를 실행했을 때 2.6 버전이 잘 적용된다면 다음 항목으로 넘어가면 된다."),"\n",s.createElement(e.p,null,"하지만 내 경우에는 위처럼 해도 2.5.1 버전이 적용되고 2.6 버전의 기능이 적용되지 않았다. node_modules 디렉토리를 다 지우고 다시 설치해도 해결되지 않았다. (이유는 불명)"),"\n",s.createElement(e.p,null,"결국 내가 선택한 방법은 yarn.lock 에서 2.5.1 버전을 제거하는 것이었다."),"\n",s.createElement(e.p,null,"직접 새로 설치 혹은 업그레이드한 Prettier 는 지우고 (",s.createElement(e.code,null,"yarn remove prettier"),") yarn.lock 을 아래처럼 직접 편집했다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">prettier@^2.0.2:\n  version "2.6.2"\n  resolved "https://registry.yarnpkg.com/prettier/-/prettier-2.6.2.tgz#e26d71a18a74c3d0f0597f55f01fb6c06c206032"\n  integrity sha512-PkUpF+qoXTqhOeWL9fu7As8LXsIUZ1WYaJiY/a7McAQzxjk82OF0tibkFXVCDImZtWxbvojFjerkiLb0/q8mew==</code></pre></div>'}}),"\n",s.createElement(e.p,null,"수정한 뒤 다시 ",s.createElement(e.code,null,"yarn")," 을 실행한 후 Prettier 를 실행하니 2.6.2 버전이 잘 적용되었다."),"\n",s.createElement(e.h2,null,"3. 옵션 설정"),"\n",s.createElement(e.p,null,s.createElement(e.code,null,"singleAttributePerLine")," 이외에도 Prettier 는 20여가지의 옵션을 제공한다. ",s.createElement(e.a,{href:"https://prettier.io/docs/en/options.html"},"공식 문서"),"에 잘 설명되어있기 때문에 여기서 부언하지는 않겠다."),"\n",s.createElement(e.p,null,"옵션은 프로젝트의 최상단 디렉토리의 ",s.createElement(e.code,null,".prettierrc.js")," 파일에 작성하면 된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// .prettierrc.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">95</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">"avoid"</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">singleAttributePerLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"js 파일로 작성하고 싶지 않다면 JSON, YAML 등 다른 형식으로도 가능하다. 자세한 방법은 ",s.createElement(e.a,{href:"https://prettier.io/docs/en/configuration.html"},"공식 문서"),"를 참고하시라."),"\n",s.createElement(e.h2,null,"4. 자동화"),"\n",s.createElement(e.p,null,"이런 툴은 자동화가 필수다. 필요할 때마다 직접 실행한다면 생각보다 번거롭고 까먹기도 쉽기 때문이다."),"\n",s.createElement(e.p,null,"자동화를 하는 방법에는 두 가지가 있다. 하나는 git 의 pre-commit 훅을 이용하는 것이고, 다른 하나는 에디터의 기능을 이용하는 것이다."),"\n",s.createElement(e.h3,null,"4.1. pre-commit 훅을 사용해 자동화"),"\n",s.createElement(e.p,null,"pre-commit 훅은 커밋 명령어 실행 시 커밋 직전에 실행되는 스크립트다."),"\n",s.createElement(e.p,null,"pre-commit 훅을 사용해 자동화하는 방법은 일전에 작성한 ",s.createElement(e.a,{href:"https://ricale.kr/blog/posts/210325-apply-eslint/"},"ESLint 적용 및 자동화")," 글에서 확인할 수 있다."),"\n",s.createElement(e.p,null,"Prettier 를 ESLint 플러그인으로 사용하고 있는 경우에는 해당 글과 똑같이 하면 된다. 만약 단독으로 사용하고 있다고 해도 방법이 크게 다르지 않으니 해당 글을 참고하시라."),"\n",s.createElement(e.h3,null,"4.2. 에디터 기능을 사용해 자동화"),"\n",s.createElement(e.p,null,"에디터를 사용해 소스코드를 저장할 때마다 Prettier 를 적용할 수도 있다. 개인적으로 Prettier 는 pre-commit 훅을 사용하는 것보다는 이 방식을 선호한다. 왜냐하면 ESLint 는 ESLint 가 자동으로 고칠 수 없는 에러들이 존재하지만, Prettier 는 그렇지 않기 때문이다."),"\n",s.createElement(e.p,null,"현재 VSCode 를 사용하고 있기 때문에 VSCode 를 기준으로 방법을 설명하겠다."),"\n",s.createElement(e.h4,null,"4.2.1. 먼저 ",s.createElement(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier - Code formatter")," 익스텐션을 설치해준다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/cf33da77152f76c6231fafe39b04a363/9451d/4-2-1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 61.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAADhAAAA4QAGksAzQAAACW0lEQVR42m1TyW4UMRDtPyHLTM/04rbbdi/ufZYkhCQQEZRIEQIkyIgTRzjDd4MfZRNGgDiUeq1XbykHis+szpYQ0cyy8ACu8jyBUAyiFFAFBxcJMp6gKCVYFiNcHGE2P9jX8eyJjeIQSbr8HnR9gU+7O/vtyw5fPz/g4+tLpMkRZFPi2e1LFF2DYSgxjgabVUlVQBcZNc+Qsvm+6Nm6d4EZR3t18Qr3d5f25voUz88HLKNDaGIznl9A9C1uLifcX29Rqdh/c43/lH0EtkGnGTJdkhwNRrLaVmMZH0HkETIRQeoUTavQNMozE3n8mxHJD8mKxZ8sETARwwwtAdWoKgVT555FUXGsNx1Wa5I81RjGmp5bTKsGUiUerCgYDZJ/A7Zdibfv3tBPHMYUVL8AFQWyPhkIwPjqxwojAU8T3ZOnpsmRSQqu0kiSYySPoB7ww8N7kuwkCfSdRkSSuVhQ2hEYC4m5wIoYOjaCfHTNCQXHlIAeenAe7kMK+qHGbveBvGFQmqOm5thNTGZY8jlkxWAmjdXVFsPZCqMpoVRKAyM/cOgdW+Ut8JJ5nmLcbtD1TkqDlj56D1WG8WaN6qyCPmPgpwnKTY7b/hTrsSULag9aG4mSSOwZ0uLai+sXxE5YKTPUNfeSJSVqOgNFHumq8JbkNISrkIBCvwn/XZuBFpYk28o3SWIo6SQcQMgEpq98OfCcyl0lvZckuaLBDszZEyf+at190E/Gbp5uaC0auz2ZsKZEi4oAZExeOV8ZeUVBpHMslodkxzENPETXUYhlSqxjGhBbqRM6pumPn1F6gfzlQXGjAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="4 2 1"\n        title=""\n        src="/blog/static/cf33da77152f76c6231fafe39b04a363/5a190/4-2-1.png"\n        srcset="/blog/static/cf33da77152f76c6231fafe39b04a363/772e8/4-2-1.png 200w,\n/blog/static/cf33da77152f76c6231fafe39b04a363/e17e5/4-2-1.png 400w,\n/blog/static/cf33da77152f76c6231fafe39b04a363/5a190/4-2-1.png 800w,\n/blog/static/cf33da77152f76c6231fafe39b04a363/c1b63/4-2-1.png 1200w,\n/blog/static/cf33da77152f76c6231fafe39b04a363/29007/4-2-1.png 1600w,\n/blog/static/cf33da77152f76c6231fafe39b04a363/9451d/4-2-1.png 2782w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.h4,null,"4.2.2. 그리고 설정에서 Default formatter 를 방금 설치한 익스텐션으로 설정해준다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/ce922f94c2f29c43c6d736dd386dcaca/8f1fd/4-2-2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 72.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAADhAAAA4QAGksAzQAAABrUlEQVR42qWT2W7bMBBF9S1x4ljUQlEktW+269ROkKV5zP//QB/6ytsZQk7cAjUE9OGCHC5HdzijQMp7HEfrTtsCdZlAF18yZQrDcxsjN5GfWzrjx1k8f3wc8f7+4IpSIkh06qyJsd81TmsBrUJUBGDpbINcrmm8h8pDZCx1IYql2jDQfXw8YxiMC1IlaENgu+/A4KZWdGCHp9OEabQYeo2pyaDpTK7pI6TcK5oVE1wgTtYIxQqBJBcppT2OFRR91ZLLsSNIb8hlhEKHMOQwim+vKk7uvAIO2P4wlH5BkZOuL9BRrE0CRS7ExYVrYpYHssuizD6BdaPRtgbGJn4vnoHRAmhwJoto5UcGVnXuobaQPk7S9R9pXQVeHuQ5P3TbWfSUdt3k3iW/8X8DG0qZ5z7leS9enHJy+3mJC1RWyotbQmbhYtjZofvbIVe5H4q5x8IloDPDBZeBLwr1YdNqnzK/HxdlgcMvIHe5ECvHVQ7FjXdU0d/CQIZJufHveO6EK/KM4HDsfx2OA6Z95bbfary8fcfrjwNOT1vsH1peB6/3k0U3mn/J8f64K3/+BsLOsrkqGE6rAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="4 2 2"\n        title=""\n        src="/blog/static/ce922f94c2f29c43c6d736dd386dcaca/5a190/4-2-2.png"\n        srcset="/blog/static/ce922f94c2f29c43c6d736dd386dcaca/772e8/4-2-2.png 200w,\n/blog/static/ce922f94c2f29c43c6d736dd386dcaca/e17e5/4-2-2.png 400w,\n/blog/static/ce922f94c2f29c43c6d736dd386dcaca/5a190/4-2-2.png 800w,\n/blog/static/ce922f94c2f29c43c6d736dd386dcaca/c1b63/4-2-2.png 1200w,\n/blog/static/ce922f94c2f29c43c6d736dd386dcaca/29007/4-2-2.png 1600w,\n/blog/static/ce922f94c2f29c43c6d736dd386dcaca/8f1fd/4-2-2.png 2528w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.h4,null,"4.2.3. 마지막으로 Format on save 설정을 켜준다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/8f1fd/4-2-3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 72.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAADhAAAA4QAGksAzQAAAB90lEQVR42n2U23KbMBCGeZROcX2QEEiIkzEg7MaJJ/VMZ3LXvv8L9KK3+rsr7Jh4nF58RqD1p91l7SjLVji50r+4AlWlYJkyCRS0Li73eSHDuqyJ6gY/e311eHt79lWdIVI29WWR4OnQemsFCmJbp4E830ATZoa+x6xJOPjfv84YhsJHqRG0IbA/dLBWoqK1a3OMrQnrzLBIwlCcyUVY53Tlww3t5TaBoiqXqy/YiBhRpld0ygaDa5DSRkHZOldjJHZdMZVdqotsEkotsckkMlpzy2QSQ6lvSIgouSw4WMhFEAxjDbdv0LsKbWfRbHU4VIdsBRRlK0iqDKE3kOkaUi2RJAtEkj5uxNBWoW5LkhhqeopMr0kkQj+5hzm1xVCZwigincg1ZCYm4TVDhoU5ldwPDepGh0NUunyHWxLiZExfvocSmpc8CRehpHZnqX8lSenF1Bo1wc23BGfMcSH+jgcZTkIWMSy9wqUKyuxddrneE00nLT4ItzQ2Hb2Mvi9CRlfRnM+k/FL8PEPOpN0V1McKbmyCnKVzHsiuDh/NbzjI0k+sd2WARyYM9XUGL2PzoNSbkEdCiNhzWTzpnEGzzUPfqirjPXr+9QMc+4DgiI6n/u/xNGD83vjDU4vzz2f8OO9xfOlouGt09KfRE93/8f1Ywh3qP/8AXci0O7sm3jAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="4 2 3"\n        title=""\n        src="/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/5a190/4-2-3.png"\n        srcset="/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/772e8/4-2-3.png 200w,\n/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/e17e5/4-2-3.png 400w,\n/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/5a190/4-2-3.png 800w,\n/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/c1b63/4-2-3.png 1200w,\n/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/29007/4-2-3.png 1600w,\n/blog/static/0fa166e4872719bcdb7a5fb8cc2d036c/8f1fd/4-2-3.png 2528w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.p,null,"이 설정까지 완료하면 js/ts 파일을 저장할 때마다 Prettier 가 자동으로 적용된다."),"\n",s.createElement(e.h2,null,"5. 플러그인: prettierX"),"\n",s.createElement(e.p,null,"Prettier 의 지나치게 적은 옵션이 불만이라면 ",s.createElement(e.a,{href:"https://github.com/brodybits/prettierx"},"prettierX")," 를 고려하는 것도 좋은 선택이 될 수 있다."),"\n",s.createElement(e.p,null,"이 라이브러리는 Prettier 의 fork 프로젝트로 Prettier 보다 더 많은 옵션을 제공한다. 단독으로 쓸 수도 있고 Prettier 의 플러그인 형태로도 쓸 수 있다."),"\n",s.createElement(e.p,null,"(개인적으로는 딱히 필요한 옵션이 없어서 쓰지 않고 있다.)"),"\n",s.createElement(e.h2,null,"참고"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"https://prettier.io/docs/en/index.html"},"Prettier 공식 문서")),"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"https://ricale.kr/blog/posts/210325-apply-eslint/"},"ESLint 적용 및 자동화")),"\n"))}var r,o,c,p,i,u=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?s.createElement(e,n,s.createElement(l,n)):l(n)},g=t(1880),m=t(3723),d=t(1858),b=t(3904),f=t(891),h=t(5534),k=t(5777),E=t(7178),y=t(6706);function A(n){let{data:e,children:t}=n;const{frontmatter:a,sameSeriesPosts:l}=e.mdx,{title:r,slug:o,date:c,tags:p,series:i,heroImage:u,heroImageAlt:g}=a,b=u?(0,m.c)(u):null;return s.createElement(d.Z,null,s.createElement(x,null,s.createElement("h1",null,r),s.createElement(w,null,c),s.createElement(y.Z,{tags:p})),s.createElement(E.Z,{name:i,data:l,current:o}),!!b&&s.createElement(v,{image:b,alt:null!=g?g:""}),s.createElement(Z,null,t),s.createElement(k.Z,null))}const x=f.ZP.div(r||(r=(0,g.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),v=(0,f.ZP)(m.G)(o||(o=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),w=f.ZP.div(c||(c=(0,g.Z)(["\n  margin: 16px 0;\n"]))),Z=(f.ZP.ul(p||(p=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),(0,f.ZP)(h.Z)(i||(i=(0,g.Z)(["\n  margin-bottom: 60px;\n"])))),P=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:l,slug:r,tags:o,heroImage:c,previewContent:p},excerpt:i}=a.mdx,u=c?(0,m.c)(c):null;return s.createElement(b.Z,{title:l,description:null!=p?p:i,path:"posts/"+r,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:o,ogType:"article"})};function S(n){return s.createElement(A,n,s.createElement(u,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,s=t(1880);const l=t(891).ZP.div(a||(a=(0,s.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=l},7178:function(n,e,t){var a,s,l,r,o,c=t(1880),p=t(7294),i=t(1883),u=t(891);const g=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),m=u.ZP.div(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),d=u.ZP.ol(l||(l=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),b=u.ZP.li(r||(r=(0,c.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(o||(o=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[s,l]=p.useState(!0);return t?p.createElement(g,null,p.createElement(m,{collapsed:s,onClick:()=>l((n=>!n))},p.createElement("h2",null,"시리즈 ",p.createElement(i.rU,{to:"/series/"+e+"/"},'"'+e+'"')),p.createElement("span",null,"▲")),!s&&p.createElement(d,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return p.createElement(b,{active:e===a,key:e},p.createElement(i.rU,{to:"/posts/"+e},t))})))):null}},1597:function(n,e,t){var a,s=t(1880),l=t(7294),r=t(1883);const o=(0,t(891).ZP)(r.rU)(a||(a=(0,s.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));e.Z=function(n){let{value:e}=n;return l.createElement(o,{to:"/tags/"+e},e)}},6706:function(n,e,t){var a,s=t(1880),l=t(7294),r=t(891),o=t(1597);const c=r.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));e.Z=function(n){let{tags:e,...t}=n;const a="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return l.createElement(c,t,a.map((n=>l.createElement("li",{key:n.fieldValue},l.createElement(o.Z,{value:n.fieldValue})))))}},1151:function(n,e,t){t.d(e,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220514-apply-prettier-index-mdx-f68798f9628a4f948425.js.map