"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[7051],{9466:function(e,n,t){t.r(n),t.d(n,{Head:function(){return w},default:function(){return j}});var a=t(1151),l=t(7294);function c(e){const n=Object.assign({div:"div",p:"p",a:"a",h2:"h2",code:"code",button:"button",h3:"h3",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/nvm-sh/nvm"},"nvm")," 은 하나의 컴퓨터에 여러 버전의 ",l.createElement(n.a,{href:"https://nodejs.org/en/"},"Node.js")," 를 설치하고 관리할 수 있게 해주는 툴이다. 한 컴퓨터에 하나 이상의 프로젝트를 진행하고 있을 때, 각각의 프로젝트의 기반 nodejs 버전이 다를 경우 필수적으로 사용해야 한다."),l.createElement(n.p,null,"nvm 이 설치되어 있을 때, 프로젝트 별로 어떻게 nodejs 버전을 지정하고 자동으로 버전을 변경할 수 있는지 알아보자."),l.createElement(n.h2,{id:"0-nvm-설치-및-기본적인-사용-방법",style:{position:"relative"}},l.createElement(n.a,{href:"#0-nvm-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95","aria-label":"0 nvm 설치 및 기본적인 사용 방법 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"0. ",l.createElement(n.code,null,"nvm")," 설치 및 기본적인 사용 방법"),l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/nvm-sh/nvm/blob/master/README.md"},"공식 문서"),"를 참고하시라."),l.createElement(n.h2,{id:"1-nvmrc",style:{position:"relative"}},l.createElement(n.a,{href:"#1-nvmrc","aria-label":"1 nvmrc permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. ",l.createElement(n.code,null,".nvmrc")),l.createElement(n.p,null,"프로젝트에 nodejs 버전을 기록하기 위해, 프로젝트 최상단에 ",l.createElement(n.code,null,".nvmrc")," 파일을 만들자. 내용은 아래처럼 넣어주면 된다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">v14.17.6</code></pre></div>'}}),l.createElement(n.h2,{id:"2-nvm-use",style:{position:"relative"}},l.createElement(n.a,{href:"#2-nvm-use","aria-label":"2 nvm use permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. ",l.createElement(n.code,null,"nvm use")),l.createElement(n.p,null,"nodejs 버전을 변경하기 위해서는 ",l.createElement(n.code,null,".nvmrc")," 파일이 있는 프로젝트 최상위 디렉토리에서 아래 명령어를 실행하면 된다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">nvm use\n<span class="token comment"># Found \'/Users/ricale/workspace/somewehre/my-project/.nvmrc\' with version &lt;v14.17.6></span>\n<span class="token comment"># Now using node v14.17.6 (npm v6.14.15)</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"이제 해당 셸 인스턴스의 nodejs 버전은 ",l.createElement(n.code,null,".nvmrc")," 에 기록된 ",l.createElement(n.code,null,"v14.17.6")," 으로 변경되었다."),l.createElement(n.h2,{id:"3-자동화",style:{position:"relative"}},l.createElement(n.a,{href:"#3-%EC%9E%90%EB%8F%99%ED%99%94","aria-label":"3 자동화 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. 자동화"),l.createElement(n.p,null,"프로젝트를 사용할 때마다 최상위 디렉토리에서 ",l.createElement(n.code,null,"nvm use"),"를 사용하는 것은 생각보다 번거롭고 잊어버리기 쉬운 일이다. 그래서 자동으로 nodejs 버전이 변경되도록 할 것이다."),l.createElement(n.p,null,"접근법은 두 가지가 있다."),l.createElement(n.p,null,"(a) 하나는 iTerm2 등 터미널 앱에서 특정 프로필을 실행할 시 ",l.createElement(n.code,null,"nvm use")," 를 사용하게 하는 방법이고,\n(b) 다른 하나는 ",l.createElement(n.code,null,"package.json")," 에 등록된 특정 ",l.createElement(n.code,null,"scripts")," 명령어에서 ",l.createElement(n.code,null,"nvm use"),"를 선행하게 하는 방법이다."),l.createElement(n.h3,{id:"3a-터미널-앱으로-nvm-use-를-자동으로-사용하게-하는-방법",style:{position:"relative"}},l.createElement(n.a,{href:"#3a-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%95%B1%EC%9C%BC%EB%A1%9C-nvm-use-%EB%A5%BC-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B2%8C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95","aria-label":"3a 터미널 앱으로 nvm use 를 자동으로 사용하게 하는 방법 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3.a. 터미널 앱으로 ",l.createElement(n.code,null,"nvm use")," 를 자동으로 사용하게 하는 방법"),l.createElement(n.p,null,"iTerm2 이외의 다른 터미널 앱은 사용한 적이 없으므로 해당 앱 기준으로 설명한다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/191e2/3-a-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 67.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAADhAAAA4QAGksAzQAAAC3klEQVR42k1TaW/TQBT0T+hJDjs+Ysfxba/vxHbSSz1StRUqTYtAgPoXEOJ3I/HZw9utAnwY7TrZnfd2Zp7UdUtUVd13ixrdosWa1qqq0DQNyrJE27a4uLhAR2tRFAJZlgnkeb7b91ma8vW3lGV5n9EfbVmgq1doihwszQQZR13XyImEF+FkjC4mSSLACeM4FkgY64MggOQ4Dqam2euaBlPXoOs6DMOALMuiu/V6DX5mbttw53OEvoeILgqEAQLf5+hTKmBqai/xSpZlCQJFmRCUv/DpsOf5guQ0S3DTNqiCEMwykM6mSK0psplJexM5fXu6Cunu7k7oMBwOBSnHeDzGZDIR3XqeJ569JG1Pzy+R5B1816HuQkRRhCDw4dILeKf8vLTdPuPx8QOiOCEiTqhgzLslwul0KsAvJkmMgjQrchK/XMILYjhzm+SYY06Ei8UCNskivX79hPf3G7DIhSoPIA+PCIeYKDI0qqiqKuk3w+n1A15ePmJzfYWzq3uUixXKqkYYJTDonEP6mqYJ6enbdzy9/sTDlx+oLj/jaFpgYDcYqTYYdbVcLuGQjqyoUVMXLMvJ9ZxkoAg157DcmAqTmWQkLy5Nqy208hkH0ROOky0Oo0ccxM8YGDFKet5mc4O6OUPkBohJeObYCMkMz9DhGypC00BIpjDbgqsR4fjdPkbHe1AGe5AHfN1/248GYCzFar1CS10WoY8yClHFpKc7h2+ZCGYWArGaiIjQ4oSKokKmuPyPsTwRpvA41fUCZycnwumYzElZIhzlmnFDdtrZBFN0SBEh9MPRSERnB55DQ9PR5SU27RK3XYOHszVuVw3OywxdHGKVRGjjgOewL2YGPXnSSzQVvUIxcUiTGVWxZjNRkQvMQ982S4SUOc91xYjxCPHA8+y59BuHT1mlGPWaQS679KGNR/0i8CjgKc1ngd308JFjjAkCHv6uWxG6t/mmTP5D2rOig2Y6v/4AZsWrCOBoTdEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 a 01"\n        title=""\n        src="/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/5a190/3-a-01.png"\n        srcset="/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/772e8/3-a-01.png 200w,\n/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/e17e5/3-a-01.png 400w,\n/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/5a190/3-a-01.png 800w,\n/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/c1b63/3-a-01.png 1200w,\n/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/29007/3-a-01.png 1600w,\n/blog/static/f3d1ecfbb1a6a4ec8ebb070c7e0cf6b6/191e2/3-a-01.png 1836w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(n.ol,{start:"0"},"\n",l.createElement(n.li,null,"최상단 메뉴의 [iTerm2] - [Preferences...] 선택 후"),"\n",l.createElement(n.li,null,"[Profiles] 탭 선택"),"\n",l.createElement(n.li,null,"[+] 버튼을 눌러 프로필을 추가"),"\n",l.createElement(n.li,null,"프로필 이름 입력"),"\n",l.createElement(n.li,null,"해당 프로필로 셸 실행 시 시작지점이 될 디렉토리 입력"),"\n",l.createElement(n.li,null,"해당 프로필로 셸 실행 시 자동으로 입력될 명령어. 별도의 스크립트 실행 없이 nodejs 버전만 맞추고 싶다면 ",l.createElement(n.code,null,"nvm use")," 만 입력해도 된다."),"\n"),l.createElement(n.h3,{id:"3b-packagejson-에-scripts-수정-혹은-추가하는-방법",style:{position:"relative"}},l.createElement(n.a,{href:"#3b-packagejson-%EC%97%90-scripts-%EC%88%98%EC%A0%95-%ED%98%B9%EC%9D%80-%EC%B6%94%EA%B0%80%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95","aria-label":"3b packagejson 에 scripts 수정 혹은 추가하는 방법 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3.b. ",l.createElement(n.code,null,"package.json")," 에 ",l.createElement(n.code,null,"scripts")," 수정 혹은 추가하는 방법"),l.createElement(n.p,null,"CRA 로 앱을 생성했을 경우의 ",l.createElement(n.code,null,"package.json")," 파일을 기준으로 설명한다. 당연히 CRA 를 사용하지 않았더라도 적용 가능하다."),l.createElement(n.p,null,"기본적으로 ",l.createElement(n.code,null,"sciprts")," 의 ",l.createElement(n.code,null,"start")," 항목은 아래처럼 설정되어 있을 것이다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token comment">// package.json</span>\n<span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"node scripts/start.js"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"위 스크립트를 아래처럼 수정하면 된다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 오답</span>\n    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"nvm use &amp;&amp; cross-env PORT=4000 node scripts/start.js"</span><span class="token punctuation">,</span>\n    <span class="token comment">// 정답</span>\n    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"source ~/.nvm/nvm.sh &amp;&amp; nvm use &amp;&amp; cross-env PORT=4000 node scripts/start.js"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"오답과 정답의 차이는 ",l.createElement(n.code,null,"source ~/.nvm/nvm.sh")," 로 시작하는지 여부다. 해당 구문이 없으면 정상적으로 동작하지 않는다."),l.createElement(n.p,null,"이유는 ",l.createElement(n.code,null,"start")," 명령어 자체가 별개의 셸 인스턴스라서 nvm 사용 전에 nvm 초기화가 필요하기 때문이다. (",l.createElement(n.a,{href:"https://stackoverflow.com/a/34321623"},"출처"),")"),l.createElement(n.h2,{id:"4-마무리",style:{position:"relative"}},l.createElement(n.a,{href:"#4-%EB%A7%88%EB%AC%B4%EB%A6%AC","aria-label":"4 마무리 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. 마무리"),l.createElement(n.p,null,"nvm 사용자라면 프로젝트 별로 nodejs 버전을 설정해서 불필요한 버그를 줄여보자."),l.createElement(n.p,null,"nvm 사용자가 아니라면 nvm 을 사용해보자. 좋다."),l.createElement(n.h2,{id:"5-참고",style:{position:"relative"}},l.createElement(n.a,{href:"#5-%EC%B0%B8%EA%B3%A0","aria-label":"5 참고 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"5. 참고"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://betterprogramming.pub/how-to-change-node-js-version-between-projects-using-nvm-3ad2416bda7e"},"How to Change Node.js Version Between Projects Using NVM")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/a/34321623"},'Is there a way to run "nvm use" automatically in a prestart npm script?')),"\n")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#0-nvm-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95"},"0. ",l.createElement(n.code,null,"nvm")," 설치 및 기본적인 사용 방법")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-nvmrc"},"1. ",l.createElement(n.code,null,".nvmrc"))),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-nvm-use"},"2. ",l.createElement(n.code,null,"nvm use"))),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#3-%EC%9E%90%EB%8F%99%ED%99%94"},"3. 자동화"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#3a-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%95%B1%EC%9C%BC%EB%A1%9C-nvm-use-%EB%A5%BC-%EC%9E%90%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B2%8C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95"},"3.a. 터미널 앱으로 ",l.createElement(n.code,null,"nvm use")," 를 자동으로 사용하게 하는 방법")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#3b-packagejson-%EC%97%90-scripts-%EC%88%98%EC%A0%95-%ED%98%B9%EC%9D%80-%EC%B6%94%EA%B0%80%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95"},"3.b. ",l.createElement(n.code,null,"package.json")," 에 ",l.createElement(n.code,null,"scripts")," 수정 혹은 추가하는 방법")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#4-%EB%A7%88%EB%AC%B4%EB%A6%AC"},"4. 마무리")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#5-%EC%B0%B8%EA%B3%A0"},"5. 참고")),"\n")))}var s,r,o,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},i=t(1880),p=t(1883),E=t(3723),u=t(6758),d=t(3904),h=t(891),v=t(3234),g=t(5777),b=t(7178),B=t(2889),f=t(5924),A=t(7466);function C(e){let{data:n,children:t}=e;const a=l.useRef(),{frontmatter:c,sameSeriesPosts:s}=n.mdx,{title:r,slug:o,date:m,tags:i,series:E,heroImage:d,heroImageAlt:h}=c;return l.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,f.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(u.Z,null,l.createElement(k,null,l.createElement("h1",null,l.createElement(p.Link,{to:"/posts/"+o},r)),l.createElement(y,null,m),l.createElement(B.Z,{tags:i})),l.createElement(b.Z,{name:E,data:s,current:o}),l.createElement(A.Z,{data:d,alt:h}),l.createElement(S,{ref:a},t),l.createElement(g.Z,null))}const k=h.ZP.div(s||(s=(0,i.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),y=h.ZP.div(r||(r=(0,i.Z)(["\n  margin: 16px 0;\n"]))),S=(0,h.ZP)(v.Z)(o||(o=(0,i.Z)(["\n  margin-bottom: 60px;\n"]))),w=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:c,slug:s,tags:r,heroImage:o,previewContent:m},excerpt:i}=a.mdx,p=o?(0,E.c)(o):null;return l.createElement(d.Z,{title:c,description:null!=m?m:i,path:"posts/"+s,thumbnail:null==p||null===(n=p.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function j(e){return l.createElement(C,e,l.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220502-node-version-by-project-index-mdx-7840e23225310f4401aa.js.map