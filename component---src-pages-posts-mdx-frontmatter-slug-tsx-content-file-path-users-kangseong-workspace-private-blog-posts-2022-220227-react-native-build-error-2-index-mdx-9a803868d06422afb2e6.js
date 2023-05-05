"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[668],{4733:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return B}});var a=t(1151),o=t(7294);function l(e){const n=Object.assign({div:"div",p:"p",h2:"h2",a:"a",h3:"h3",button:"button",code:"code",blockquote:"blockquote",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(n.div,{className:"md"},o.createElement(n.p,null,"Mac OS 를 쓰면서 마주한 React Native 빌드 에러에 대해 정리한다."),o.createElement(n.p,null,"M1 프로세서를 사용 중인데 이것이 원인 중 하나인지는 명확하지 않다."),o.createElement(n.h2,{id:"ios",style:{position:"relative"}},o.createElement(n.a,{href:"#ios","aria-label":"ios permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"iOS"),o.createElement(n.h3,{id:"1-빌드-에러-node-no-such-file-or-directory",style:{position:"relative"}},o.createElement(n.a,{href:"#1-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-node-no-such-file-or-directory","aria-label":"1 빌드 에러 node no such file or directory permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. (빌드 에러) node: No such file or directory"),o.createElement(n.p,null,"nvm 을 사용하고 있는 사람이라면, 아래 명령어 실행으로 해결할 수 있다."),o.createElement(n.div,{className:"codeblock-container"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">which</span> <span class="token function">node</span><span class="token variable">)</span></span>"</span> /usr/local/bin/node</code></pre></div>'}}),o.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(n.p,null,"(",o.createElement(n.a,{href:"https://stackoverflow.com/a/66874780"},"출처"),")"),o.createElement(n.h3,{id:"2-빌드-에러-something-went-wrong-please-verify-if-generated-js-bundle-is-correct",style:{position:"relative"}},o.createElement(n.a,{href:"#2-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-something-went-wrong-please-verify-if-generated-js-bundle-is-correct","aria-label":"2 빌드 에러 something went wrong please verify if generated js bundle is correct permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. (빌드 에러) Something went wrong. Please verify if generated JS bundle is correct."),o.createElement(n.p,null,"번들 명령어를 통해 ",o.createElement(n.code,null,"main.jsbundle")," 파일을 직접 만들고, Xcode 에서 프로젝트를 연 뒤 해당 파일을 드래그앤드랍으로 넣어주면 된다."),o.createElement(n.div,{className:"codeblock-container"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> react-native bundle <span class="token parameter variable">--platform</span> ios <span class="token parameter variable">--dev</span> <span class="token boolean">false</span> --entry-file index.js --bundle-output ios/main.jsbundle</code></pre></div>'}}),o.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(n.p,null,"만약 이미 main.jsbundle 파일이 Xcode 상에 추가되어 있다면 기존 파일(레퍼런스)은 삭제 하고 새로 생성한 파일을 추가해보자."),o.createElement(n.p,null,"(",o.createElement(n.a,{href:"https://github.com/Microsoft/react-native-code-push/issues/1066#issuecomment-340233140"},"출처"),")"),o.createElement(n.h3,{id:"3-pod-install-에러-cocoapods-could-not-find-compatible-versions-for-pod-firebaseanalytics",style:{position:"relative"}},o.createElement(n.a,{href:"#3-pod-install-%EC%97%90%EB%9F%AC-cocoapods-could-not-find-compatible-versions-for-pod-firebaseanalytics","aria-label":"3 pod install 에러 cocoapods could not find compatible versions for pod firebaseanalytics permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. (",o.createElement(n.code,null,"pod install"),' 에러) CocoaPods could not find compatible versions for pod "Firebase/Analytics"'),o.createElement(n.p,null,"비단 Firebase/Analytics 만의 문제가 아니라, 라이브러리를 추가/버전업 할 때 마주할 수 있는 에러로 보인다."),o.createElement(n.p,null,"일단은 ",o.createElement(n.code,null,"ios/Podfile.lock")," 파일을 삭제한 뒤 아래 명령어로 해결했다."),o.createElement(n.div,{className:"codeblock-container"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">pod <span class="token function">install</span> --repo-update</code></pre></div>'}}),o.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(n.h2,{id:"안드로이드",style:{position:"relative"}},o.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C","aria-label":"안드로이드 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"안드로이드"),o.createElement(n.h3,{id:"1-빌드-에러-an-exception-has-occurred-in-the-compiler-180_292",style:{position:"relative"}},o.createElement(n.a,{href:"#1-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-an-exception-has-occurred-in-the-compiler-180_292","aria-label":"1 빌드 에러 an exception has occurred in the compiler 180_292 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. (빌드 에러) An exception has occurred in the compiler (1.8.0_292)"),o.createElement(n.p,null,"에러 전문은 아래와 같다."),o.createElement(n.blockquote,null,"\n",o.createElement(n.p,null,"An exception has occurred in the compiler (1.8.0_292). Please file a bug against the Java compiler via the Java bug reporting page (",o.createElement(n.a,{href:"http://bugreport.java.com"},"http://bugreport.java.com"),") after checking the Bug Database (",o.createElement(n.a,{href:"http://bugs.java.com"},"http://bugs.java.com"),") for duplicates. Include your program and the following diagnostic in your report. Thank you.\njava.lang.AssertionError: annotationType(): unrecognized Attribute name MODULE (class com.sun.tools.javac.util.UnsharedNameTable$NameImpl)"),"\n"),o.createElement(n.p,null,"react-native-fierbase/messaging 을 설치한 뒤 발생했다. 해당 라이브러리에 직접적인 문제가 있다기보다는, 안드로이드 SDK 버전이 올라가면서 필요한 openjdk 버전도 올라간 것 같다."),o.createElement(n.p,null,"openjdk 버전을 11로 올려주면 해결된다. 아래는 MacOS 에서 openjdk11 을 설치하는 명령어다."),o.createElement(n.div,{className:"codeblock-container"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">brew tap adoptopenjdk/openjdk\nbrew <span class="token function">install</span> <span class="token parameter variable">--cask</span> adoptopenjdk11</code></pre></div>'}}),o.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(n.p,null,"(",o.createElement(n.a,{href:"https://github.com/invertase/react-native-firebase/issues/5909"},"출처1"),", ",o.createElement(n.a,{href:"https://apple.stackexchange.com/questions/349454/how-can-i-upgrade-my-mac-to-openjdk-11-using-homebrew"},"출처2"),")"),o.createElement(n.h3,{id:"2-metro-에러-jest-haste-map-watchman-crawl-failed-retrying-once-with-node-crawler",style:{position:"relative"}},o.createElement(n.a,{href:"#2-metro-%EC%97%90%EB%9F%AC-jest-haste-map-watchman-crawl-failed-retrying-once-with-node-crawler","aria-label":"2 metro 에러 jest haste map watchman crawl failed retrying once with node crawler permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. (Metro 에러) jest-haste-map: Watchman crawl failed. Retrying once with node crawler."),o.createElement(n.p,null,"안드로이드 개발 빌드에서 느닷없이 hot reloading 이 동작하지 않는 현상이 발생했다. Metro 쪽을 보니 아래와 같은 에러 메시지가 찍혀 있었다."),o.createElement(n.blockquote,null,"\n",o.createElement(n.p,null,"jest-haste-map: Watchman crawl failed. Retrying once with node crawler.\nUsually this happens when watchman isn't running. Create an empty ",o.createElement(n.code,null,".watchmanconfig")," file in your project's root folder or initialize a git or hg repository in your project.\nError: Watchman error: watchman::QueryExecError: query failed: synchronization failed: syncToNow: timed out waiting for cookie file to be observed by watcher within 60000 milliseconds: Operation timed out. Make sure watchman is running for this project. See ",o.createElement(n.a,{href:"https://facebook.github.io/watchman/docs/troubleshooting"},"https://facebook.github.io/watchman/docs/troubleshooting"),"."),"\n"),o.createElement(n.p,null,"구글링을 하다가 ",o.createElement(n.a,{href:"https://github.com/facebook/draft-js/issues/2183"},"나와 같은 증상의 이슈"),"를 찾았다. 그래서 코멘트에 있는 답변들을 시도해봤는데, 안 되고 안 되고 안 되다가 결국에는 해결되었다. 내가 진행한 과정은 아래와 같다."),o.createElement(n.ol,null,"\n",o.createElement(n.li,null,o.createElement(n.code,null,"brew reinstall watchman")),"\n",o.createElement(n.li,null,o.createElement(n.code,null,"watch-del-all && yarn cache clean && react-native start --reset-cache")),"\n",o.createElement(n.li,null,o.createElement(n.code,null,".watchmanconfig")," 삭제 후 새로 파일을 만든 뒤 기존과 동일한 내용을 넣음"),"\n",o.createElement(n.li,null,"재부팅"),"\n"),o.createElement(n.p,null,"마지막에 재부팅을 하고 나서야 해결되었다. 이게 저 위의 네 과정을 다 거쳐야 하는 것인지, 저 중 하나만 하면 되는 건지, 몇 개만 조합하면 되는 건지, 그건 불명이다.")),"\n",o.createElement(n.div,{className:"toc"},o.createElement(n.p,null,"목차"),o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#ios"},"iOS"),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#1-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-node-no-such-file-or-directory"},"1. (빌드 에러) node: No such file or directory")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#2-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-something-went-wrong-please-verify-if-generated-js-bundle-is-correct"},"2. (빌드 에러) Something went wrong. Please verify if generated JS bundle is correct.")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#3-pod-install-%EC%97%90%EB%9F%AC-cocoapods-could-not-find-compatible-versions-for-pod-firebaseanalytics"},"3. (",o.createElement(n.code,null,"pod install"),' 에러) CocoaPods could not find compatible versions for pod "Firebase/Analytics"')),"\n"),"\n"),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C"},"안드로이드"),"\n",o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#1-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-an-exception-has-occurred-in-the-compiler-180_292"},"1. (빌드 에러) An exception has occurred in the compiler (1.8.0_292)")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#2-metro-%EC%97%90%EB%9F%AC-jest-haste-map-watchman-crawl-failed-retrying-once-with-node-crawler"},"2. (Metro 에러) jest-haste-map: Watchman crawl failed. Retrying once with node crawler.")),"\n"),"\n"),"\n")))}var r,c,i,s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?o.createElement(n,e,o.createElement(l,e)):l(e)},d=t(1880),m=t(1883),p=t(3723),h=t(6758),u=t(3904),g=t(891),f=t(3234),b=t(5777),v=t(7178),E=t(5924);function k(e){let{data:n,children:t}=e;const a=o.useRef(),{frontmatter:l,sameSeriesPosts:r}=n.mdx,{title:c,slug:i,date:s,series:d,heroImage:p,heroImageAlt:u}=l;return o.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),o.createElement(h.Z,null,o.createElement(x,null,o.createElement("h1",null,o.createElement(m.Link,{to:"/posts/"+i},c)),o.createElement(w,null,s)),o.createElement(v.Z,{name:d,data:r,current:i}),o.createElement(y,{ref:a},t),o.createElement(b.Z,null))}const x=g.ZP.div(r||(r=(0,d.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),w=g.ZP.div(c||(c=(0,d.Z)(["\n  margin-left: 2px;\n"]))),y=(0,g.ZP)(f.Z)(i||(i=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),C=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:l,slug:r,tags:c,heroImage:i,previewContent:s},excerpt:d}=a.mdx,m=i?(0,p.c)(i):null;return o.createElement(u.Z,{title:l,description:null!=s?s:d,path:"posts/"+r,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function B(e){return o.createElement(k,e,o.createElement(s,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},3234:function(e,n,t){t.d(n,{Z:function(){return w}});var a,o=t(1880),l=t(891);var r,c=(0,l.iv)(a||(a=(0,o.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder));var i,s=(0,l.iv)(r||(r=(0,o.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(e=>e.theme.colors.codeblockHighlightBorder),(e=>e.theme.colors.codeblockHighlight),(e=>e.theme.colors.codeblockTitle),(e=>e.theme.colors.codeblockCopyButtonLabel),(e=>e.theme.colors.codeblockTitleInMobile));var d,m=(0,l.iv)(i||(i=(0,o.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(e=>e.theme.colors.headingBorder),(e=>e.theme.colors.headingBorder));var p,h=(0,l.iv)(d||(d=(0,o.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(e=>e.theme.colors.imageBorder),(e=>e.theme.colors.imageCaptionText));var u,g=(0,l.iv)(p||(p=(0,o.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var f,b,v=(0,l.iv)(u||(u=(0,o.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(e=>e.theme.colors.tableBorder)),E=t(5785);var k,x=(0,l.iv)(f||(f=(0,o.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground),(0,E.Z)(new Array(20)).map(((e,n)=>(0,l.iv)(b||(b=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(n+1),(1100+20*n-800)/2))),1100);var w=l.ZP.div(k||(k=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),m,g,h,x,s,c,v,(e=>e.theme.colors.hr),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode))},7178:function(e,n,t){var a,o,l,r,c,i=t(1880),s=t(7294),d=t(1883),m=t(891);const p=m.ZP.div(a||(a=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(e=>e.theme.colors.sameSereisPosts)),h=m.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n  }\n"])),(e=>e.theme.colors.onBackground),(e=>e.collapsed?0:180)),u=m.ZP.ol(l||(l=(0,i.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(e=>e.theme.colors.background)),g=m.ZP.li(r||(r=(0,i.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.active&&(0,m.iv)(c||(c=(0,i.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[o,l]=s.useState(!0);return t?s.createElement(p,null,s.createElement(h,{collapsed:o,onClick:()=>l((e=>!e))},s.createElement("h2",null,s.createElement(d.Link,{to:"/series/"+n+"/"},'시리즈 "'+n+'"')),s.createElement("span",null,"▲")),!o&&s.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(g,{active:n===a,key:n},s.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,o,l;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(a=null===(o=e.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let c;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var i;c=null!==(i=n[t-1])&&void 0!==i?i:null;break}if(void 0===c&&(c=n[n.length-1]),null===(l=e.current)||void 0===l||l.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),c){var s;const n=c.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",o=null===(s=e.current)||void 0===s?void 0:s.querySelector(a);null==o||o.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const o=a.createContext({});function l(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2022-220227-react-native-build-error-2-index-mdx-9a803868d06422afb2e6.js.map