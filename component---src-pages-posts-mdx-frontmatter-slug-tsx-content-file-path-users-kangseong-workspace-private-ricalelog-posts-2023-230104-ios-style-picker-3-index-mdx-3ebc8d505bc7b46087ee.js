"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4564],{1916:function(n,e,a){a.r(e),a.d(e,{Head:function(){return S},default:function(){return D}});var t=a(1151),s=a(7294);function o(n){const e=Object.assign({p:"p",a:"a",em:"em",h1:"h1",div:"div",code:"code",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"(이전 글들을 읽지 않았더라도 본문을 읽는 데에는 지장이 없다.)"),"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://ricale.kr/blog/series/iOS%20%EC%8A%A4%ED%83%80%EC%9D%BC%20Date%20Picker%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%20%EA%B5%AC%ED%98%84/"},"이전 글들"),"에서는 TypeScript 와 React 로 ",s.createElement(e.em,null,"iOS 스타일 Date Picker")," 를 구현했고, 구현한 컴포넌트를 라이브러리로 만들어 NPM 에 배포했다."),"\n",s.createElement(e.p,null,"이번에는 라이브러리의 데모 페이지를 만들어서 GitHub Pages 에 배포해보자."),"\n",s.createElement(e.h1,null,"1. Storybook 적용"),"\n",s.createElement(e.p,null,"데모 페이지는 ",s.createElement(e.a,{href:"https://storybook.js.org/docs/react/get-started/introduction"},"Storybook")," 으로 만든다. Storybook 은 프로젝트 내 UI 컴포넌트들의 예제 페이지를 손쉽게 만들어주는 툴이다."),"\n",s.createElement(e.p,null,"프로젝트의 루트 디렉토리에서 아래 명령어를 실행하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ npx storybook init</code></pre></div>'}}),"\n",s.createElement(e.p,null,"그러면 ",s.createElement(e.code,null,"package.json")," 에 Storybook 을 위한 패키지들과 함께 명령어가 추가된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token string">"start-storybook -p 6006"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"build-storybook"</span><span class="token operator">:</span> <span class="token string">"build-storybook"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  <span class="token string-property property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token comment">// 설치되는 패키지는 개발 환경 (React/Vue/TypeScript 사용 여부) 에 따라</span>\n    <span class="token comment">// 다를 수 있다.</span>\n    <span class="token string-property property">"@babel/core"</span><span class="token operator">:</span> <span class="token string">"^7.20.7"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/addon-actions"</span><span class="token operator">:</span> <span class="token string">"^6.5.15"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/addon-essentials"</span><span class="token operator">:</span> <span class="token string">"^6.5.15"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/addon-interactions"</span><span class="token operator">:</span> <span class="token string">"^6.5.15"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/addon-links"</span><span class="token operator">:</span> <span class="token string">"^6.5.15"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/builder-vite"</span><span class="token operator">:</span> <span class="token string">"^0.2.6"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/react"</span><span class="token operator">:</span> <span class="token string">"^6.5.15"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"@storybook/testing-library"</span><span class="token operator">:</span> <span class="token string">"^0.0.13"</span><span class="token punctuation">,</span>\n    <span class="token string-property property">"babel-loader"</span><span class="token operator">:</span> <span class="token string">"^8.3.0"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.h2,null,"1.1. 파일 구조"),"\n",s.createElement(e.p,null,"Storybook 실행에 필요한 기본적인 파일들도 프로젝트에 아래처럼 추가된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">ROOT_DIRECTORY\n|- .stroybook/\n|- src/\n   |- stories/\n      |- assets/\n      |- button.css\n      |- Button.stories.tsx\n      |- Button.tsx\n      |- header.css\n      |- Header.stories.tsx\n      |- Header.tsx\n      |- Introduction.stories.mdx\n      |- page.css\n      |- Page.stories.tsx\n      |- Page.tsx</code></pre></div>'}}),"\n",s.createElement(e.h3,null,"1.1.1. ",s.createElement(e.code,null,".storybook/")),"\n",s.createElement(e.p,null,"Storybook 설정 파일들. 일반적인 사용에서는 수정할 필요가 거의 없다."),"\n",s.createElement(e.h3,null,"1.1.2. ",s.createElement(e.code,null,"src/stories/")),"\n",s.createElement(e.p,null,"Storybook 에서는 UI 컴포넌트의 예제 겸 문서화 페이지를 story 라고 부른다. 이 디렉토리는 story 들이 위치할 디렉토리다."),"\n",s.createElement(e.p,null,"기본적인 예제는 Storybook 에 의해 자동으로 생성되어 있다. 만약 해당 예제들을 봐도 어떻게 작성해야할지 감이 오지 않는다면 ",s.createElement(e.a,{href:"https://storybook.js.org/docs/react/writing-stories/introduction"},"공식 문서"),"를 참고하자."),"\n",s.createElement(e.h2,null,"1.2. story 작성"),"\n",s.createElement(e.p,null,"우리의 UI 컴포넌트 (",s.createElement(e.code,null,"DatePicker"),") 를 위한 story 를 간단히 작성해보자. 기존 예제들은 필요 없으므로 ",s.createElement(e.code,null,"src/stories/")," 디렉토리 내에 있던 기존 파일들은 삭제하고, ",s.createElement(e.code,null,"DatePicker.stories.tsx")," 를 생성한 뒤 아래처럼 작성했다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="tsx"><pre class="language-tsx"><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Story <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@storybook/react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> DatePicker<span class="token punctuation">,</span> <span class="token punctuation">{</span> DatePickerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../components/DatePicker"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enFormatter <span class="token keyword">from</span> <span class="token string">"../formatters/en"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">"Example/DatePicker"</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> DatePicker<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Template<span class="token operator">:</span> Story<span class="token operator">&lt;</span>DatePickerProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DatePicker</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>args<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> Default <span class="token operator">=</span> <span class="token function">Template</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> Infinite <span class="token operator">=</span> <span class="token function">Template</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nInfinite<span class="token punctuation">.</span>args <span class="token operator">=</span> <span class="token punctuation">{</span>\n  infinite<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// NOTE: 간단한 i18n 구현은 다음 글에서 이어진다.</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> English <span class="token operator">=</span> <span class="token function">Template</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nEnglish<span class="token punctuation">.</span>args <span class="token operator">=</span> <span class="token punctuation">{</span>\n  formatters<span class="token operator">:</span> enFormatter<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.h2,null,"1.3. 로컬에서 확인"),"\n",s.createElement(e.p,null,"아래 명령어를 실행해 로컬에서 Storybook 서버를 띄워보고"),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">yarn</span> storybook</code></pre></div>'}}),"\n",s.createElement(e.p,null,"아래 이미지처럼 잘 뜨는지 확인하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/0666350beef78401f5597f086b399e41/e53e8/1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAABnUlEQVR42sWU226DMAyGef832MWkvs2ud1PtYpM69UA5rEBLIImT/HMCaWnVrp00aZZ+OSTOhyF2kv2qxOdyg6LaQ0hC3RFS4dArDU0EpU9e8ZyUCkQGxtpRDmTsEKcJSde02O1qtK1A3/UMIggCLAd6s7zJOceyk/FJ0Zwd1pP3osVH1mDZEBY1YdeZEGD4rT6bqfn9PtsAG+c8hHgujHk+eZ5LzF4rzN4MnuYGL9sB2EuJbZYHSMzE+7ppzjJTSuFwaEc4AzvOoqr34b8Q/wNjzHFzfPMU6NcvM/Q6ZiiUQa8tH4hBy4citbn4THfmr61FG4AMCWKw94pOGV7Crh7G5DkAuxHU/QC83PxnwFv2v8BHdRf4G4sfchNIXKC+SH3N+RqL/l6WofUiyNdhx33c9AaLvcWXdNDcBb4ThBCngr4h4nXBd0Eies0wjTZ4Yq+wq6pws7ixtSS3YczglhRZNNyCCTcJpuI7AWVZhuyihXZ88MSTVZphkxVYbwelPM7yHHlRomBwnhdYrdfYpCnPFUf5mG2WBT/ED3HfaM43V7cGdPMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="1"\n        title=""\n        src="/blog/static/0666350beef78401f5597f086b399e41/5a190/1.png"\n        srcset="/blog/static/0666350beef78401f5597f086b399e41/772e8/1.png 200w,\n/blog/static/0666350beef78401f5597f086b399e41/e17e5/1.png 400w,\n/blog/static/0666350beef78401f5597f086b399e41/5a190/1.png 800w,\n/blog/static/0666350beef78401f5597f086b399e41/c1b63/1.png 1200w,\n/blog/static/0666350beef78401f5597f086b399e41/29007/1.png 1600w,\n/blog/static/0666350beef78401f5597f086b399e41/e53e8/1.png 1982w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.h1,null,"2. GitHub Pages 에 배포"),"\n",s.createElement(e.p,null,"Storybook 으로 간단하게 예제 페이지를 만들었으니 이제 그걸 GitHub Pages 에 배포해보자."),"\n",s.createElement(e.h2,null,"2.1. Storybook Deployer"),"\n",s.createElement(e.p,null,"Storybook 은 배포용 패키지도 따로 제공해준다. ",s.createElement(e.a,{href:"https://www.npmjs.com/package/@storybook/storybook-deployer"},"@storybook/storybook-deployer")," 다. (배포 타겟: Github Pages 혹은 AWS S3)"),"\n",s.createElement(e.p,null,"아래 명령어로 패키지를 설치하자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> @storybook/storybook-deployer</code></pre></div>'}}),"\n",s.createElement(e.p,null,"그리고 package.json 에 아래 명령어를 추가해주자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string-property property">"deploy-storybook"</span><span class="token operator">:</span> <span class="token string">"storybook-to-ghpages"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"추가한 명령어를 터미널에서 실행하면 배포가 진행된다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">yarn</span> deploy-storybook</code></pre></div>'}}),"\n",s.createElement(e.p,null,"이제 자동으로 gh-pages 브랜치로 GitHub Pages 에 배포된다."),"\n",s.createElement(e.h3,null,"2.1.1. 서브도메인에 배포한다면?"),"\n",s.createElement(e.p,null,"만약 배포 도메인이 루트 도메인이라면 (예, ",s.createElement(e.a,{href:"https://ricale.github.io"},"https://ricale.github.io"),") 아무런 설정도 추가할 필요가 없다. 하지만 배포 도메인이 서브 도메인이라면 (예, ",s.createElement(e.a,{href:"https://ricale.github.io/ios-style-picker"},"https://ricale.github.io/ios-style-picker"),") ",s.createElement(e.code,null,".storybok/main.cjs")," 에 아래 설정을 추가해주어야 한다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token keyword">async</span> <span class="token function">viteFinal</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    config<span class="token punctuation">.</span>base <span class="token operator">=</span> <span class="token string">"/ios-style-picker/"</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,s.createElement(e.code,null,"viteFinal()")," 이 정확히 어떤 역할을 하는지는 ",s.createElement(e.a,{href:"https://storybook.js.org/docs/react/builders/vite"},"공식 문서"),"를 참고하자."),"\n",s.createElement(e.h2,null,"2.2. GitHub Pages 설정"),"\n",s.createElement(e.p,null,"다 끝났다. 이제 GitHub 에서 설정만 확인해주면 된다. 빨간 네모 속 설정들을 스크린샷과 동일하게 해주자."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/b79cfcfdec93a71fb8544949f9415265/14586/2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 77%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXElEQVR42nVU2ZKbMBDkfW3AIBDiPgTY4Gu3Nv//aZ0e2SbrpPIwNfIgtXq6R/bmyzfK7oi8GZEWHcKkQJzVaMYV/fGG2kq+op0uGNcvdFyX/Qkq75AUvctpObB2hCGGFyYlknpB0lyQ9l9IqiMOKod/0AiizOV9mOLAi/J6RNnOaOwCTaCawJqgUq9IKkpLAsY5lK6RmhZp3iIxDTd1iAig+TvmppQ1qct3RfZJVruaeua6GtA01l3syYGMAP4h3diEZNiwhX48u8MffoxdoLB3kbg975FsZ70Xg1fBl2CrWbui6le2tcDUM4r2hKJbXHtCICcrabuoLQzXQWQchqd0hZHiN9QjjB9FCV1Rl+GMvL8Q/AxVjFDlDNE84PfXXlNZ9DQsJbho7hgWdEeAN5bMYoKEaBlE+tmu2r7/Lxyg0N8Ff3SIqeFl/cREN2eOj9al+74P9Ztu/2pJDcWpfjq7FqSwYyhlsC53TASzNEeTpU+NZI+MlETA6ZCa/xdjryK7++0XCmb/kDlxIx64nq442hOmbsIyrRi62RkiBkpEukWgqjemDrDjppGHUtGM7cfUUnG9jCfMFLu3F+YrunbiTFLn54jIJAhDYfoy6NEyAUpa/7i5/TE2C7KOLts7zHCDHr5henl24vwVUT4iMpbZugcgDjvAJGtg+T5lgF83SdtZafm+Jz6nmoakzpBdmD2Da18x4kc8h31zWZ7Vh682LQR4pikSMsSvp6af4Z4dO4u0/JnUmzGOobQ5nm6c+PFtDuUiCZnDyM3qBCP/LFy7GRWnVfFw+4fLvwE/qoMgI0fQhAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="2"\n        title=""\n        src="/blog/static/b79cfcfdec93a71fb8544949f9415265/5a190/2.png"\n        srcset="/blog/static/b79cfcfdec93a71fb8544949f9415265/772e8/2.png 200w,\n/blog/static/b79cfcfdec93a71fb8544949f9415265/e17e5/2.png 400w,\n/blog/static/b79cfcfdec93a71fb8544949f9415265/5a190/2.png 800w,\n/blog/static/b79cfcfdec93a71fb8544949f9415265/c1b63/2.png 1200w,\n/blog/static/b79cfcfdec93a71fb8544949f9415265/29007/2.png 1600w,\n/blog/static/b79cfcfdec93a71fb8544949f9415265/14586/2.png 2314w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.h1,null,"3. 확인"),"\n",s.createElement(e.p,null,"이제 배포한 페이지로 들어가보자. Storybook 대시보드가 잘 뜨는 걸 확인할 수 있다."),"\n",s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/0c0472726316045076e4599e5a11042a/2b36a/3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 87.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB+UlEQVR42p2UTW8TMRCG906TFpJQFcERcUFUCISExL+L0qpNCWqRkDjDgZ/DueKGxAGSTbvrXXvtsV/G3o9stG0oGemVvbPrxzMez0ajRwd49vTQvX71Di8P3+LF8zd4OHqCfm+I3f6oo35vhN7OADv3BuF5b3cfgwcHbjh8jPt7+xRNJlM3OT7D5GiK8dFZ0Gx2jpOT97dqPD4OCs+nM1xcfML5x8/udPoBUXItoIx1YDMswlbm6jH6vUxxJSTiJIcqCsASjDEoCg0iWpPWOryrRWbls9aGNdGX73N8u9T4ekn4cWXDNlkusYjjckvngrwlaQpD1Pi9CZEFaMiQLKJfscAfYVgEqUug380Y3QESmWa+8lFrzsCCIUoTp2uCY+1gnNs4b/saYKYMMkXwo66A7ag2zbsZMDAvCF4eaG4A3rZ4K+D/aCNwW+sAfZUlleX3lfa6e5QWZENRKhhD50LjZ8pQrjrxZRVCIMuyOx2D1AbXqSgj9MAQKV/oZLmAs6v7WN+zjlrRh0z4+/kibgMtRMYtyB1iqw89zEdZcEvWC2uF1uP39bO3RbxsgC6MUkFK2aToF6TcbkqpfwFdBXQe6OqUfQ/7iOofiF+QJAlHuA501VGURWuK53IOaD3CXIVz9BsSS/NBx8slJEcYfFRW8gY5P6pC0186fzthMFGO1QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3"\n        title=""\n        src="/blog/static/0c0472726316045076e4599e5a11042a/5a190/3.png"\n        srcset="/blog/static/0c0472726316045076e4599e5a11042a/772e8/3.png 200w,\n/blog/static/0c0472726316045076e4599e5a11042a/e17e5/3.png 400w,\n/blog/static/0c0472726316045076e4599e5a11042a/5a190/3.png 800w,\n/blog/static/0c0472726316045076e4599e5a11042a/c1b63/3.png 1200w,\n/blog/static/0c0472726316045076e4599e5a11042a/29007/3.png 1600w,\n/blog/static/0c0472726316045076e4599e5a11042a/2b36a/3.png 2268w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(e.h1,null,"4. 다음"),"\n",s.createElement(e.p,null,"Storybook 과 GitHub Pages 로 예제 페이지를 간단히 만들어 배포했다. 이제 해야할 일들은 아래와 같다."),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"간단한 i18n 구현"),"\n",s.createElement(e.li,null,"몇몇 상황에서 애니메이션을 더 매끄럽게 처리","\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.code,null,'variant="infinite"')," 일 때"),"\n",s.createElement(e.li,null,"PC 에서 사용할 때"),"\n"),"\n"),"\n"),"\n",s.createElement(e.p,null,'다음 글에서는 "간단한 i18n 구현"을 다룬다.'),"\n",s.createElement(e.h1,null,"5. 참고"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"https://github.com/storybookjs/storybook/discussions/17433?sort=new"},"Deploying Storybook in a subdirectory")),"\n"))}var p,l,r,c,i,u=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)},g=a(1880),k=a(1883),d=a(3723),m=a(1858),b=a(3904),h=a(891),y=a(5534),f=a(5777),E=a(7178);const A=n=>{let{data:e,children:a}=n;const{frontmatter:t,sameSeriesPosts:o}=e.mdx,{title:p,slug:l,date:r,tags:c,series:i,heroImage:u,heroImageAlt:g}=t,b=u?(0,d.c)(u):null;return s.createElement(m.Z,null,s.createElement(x,null,s.createElement("h1",null,p),s.createElement(w,null,r),s.createElement(C,null,c.map((n=>s.createElement("li",{key:n},s.createElement(k.rU,{to:"/tags/"+n},n)))))),s.createElement(E.Z,{name:i,data:o,current:l}),!!b&&s.createElement(v,{image:b,alt:null!=g?g:""}),s.createElement(Z,null,a),s.createElement(f.Z,null))},x=h.ZP.div(p||(p=(0,g.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),v=(0,h.ZP)(d.G)(l||(l=(0,g.Z)(["\n  margin-bottom: 16px;\n"]))),w=h.ZP.div(r||(r=(0,g.Z)(["\n  margin: 16px 0;\n"]))),C=h.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),Z=(0,h.ZP)(y.Z)(i||(i=(0,g.Z)(["\n  margin-bottom: 60px;\n"]))),S=n=>{var e,a;let{data:t}=n;const{frontmatter:{title:o,slug:p,tags:l,heroImage:r,previewContent:c},excerpt:i}=t.mdx,u=r?(0,d.c)(r):null;return s.createElement(b.Z,{title:o,description:null!=c?c:i,path:"posts/"+p,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(a=e.fallback)||void 0===a?void 0:a.src,keywords:l,ogType:"article"})};function D(n){return s.createElement(A,n,s.createElement(u,n))}},5777:function(n,e,a){var t=a(7294);e.Z=function(){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e;const a=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,t]=n;a.setAttribute(e,t)})),null===(e=n.current)||void 0===e||e.appendChild(a)}),[]),t.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,a){var t,s=a(1880);const o=a(891).ZP.div(t||(t=(0,s.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=o},7178:function(n,e,a){var t,s,o,p,l,r=a(1880),c=a(7294),i=a(1883),u=a(891);const g=u.ZP.div(t||(t=(0,r.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),k=u.ZP.div(s||(s=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),d=u.ZP.ol(o||(o=(0,r.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),m=u.ZP.li(p||(p=(0,r.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(l||(l=(0,r.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=n=>{let{name:e,data:a,current:t}=n;const[s,o]=c.useState(!0);return a?c.createElement(g,null,c.createElement(k,{collapsed:s,onClick:()=>o((n=>!n))},c.createElement("h2",null,"시리즈 ",c.createElement(i.rU,{to:"/series/"+e+"/"},'"'+e+'"')),c.createElement("span",null,"▲")),!s&&c.createElement(d,null,a.map((n=>{let{frontmatter:{slug:e,title:a}}=n;return c.createElement(m,{active:e===t,key:e},c.createElement(i.rU,{to:"/posts/"+e},a))})))):null}},1151:function(n,e,a){a.d(e,{ah:function(){return o}});var t=a(7294);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230104-ios-style-picker-3-index-mdx-3ebc8d505bc7b46087ee.js.map