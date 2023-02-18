"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1952],{8794:function(e,n,t){t.r(n),t.d(n,{Head:function(){return C},default:function(){return Z}});var a=t(1151),l=t(7294);function i(e){const n=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",code:"code",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h2,{id:"안드로이드",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C","aria-label":"안드로이드 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"안드로이드"),l.createElement(n.h3,{id:"1-execution-failed-for-task-applintvitalrelease",style:{position:"relative"}},l.createElement(n.a,{href:"#1-execution-failed-for-task-applintvitalrelease","aria-label":"1 execution failed for task applintvitalrelease permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Execution failed for task ':app:lintVitalRelease'"),l.createElement(n.p,null,"여기서 ",l.createElement(n.code,null,"lintVitalRelease")," 는 안드로이드 코드 (Java 혹은 Kotlin) 에 대한 lint 를 실행하는 태스크인 듯 싶다."),l.createElement(n.p,null,"좀 더 자세한 에러 메시지를 알고 싶으면 Android Studio 에서 ",l.createElement(n.code,null,"lintVatalRelease")," 를 직접 실행시키면 된다. 하지만 외부 라이브러리의 lint 에러일 가능성이 높으므로 직접 대응하기 힘들 가능성이 높다. (내 경우에도 외부 라이브러리에서 발생한 에러였다.) 물론 그럼에도 근본적인 원인을 찾아 해결하고 싶다면 확인해보자."),l.createElement(n.p,null,'"일단은 lint 에러라면 무시해도 되지 않을까?" 라는 접근법으로 해결해보았다. ',l.createElement(n.code,null,"android/app/build.gradle")," 에 아래 내용을 추가해주면 된다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">android {\n    // ...\n    lintOptions {\n        checkReleaseBuilds false\n    }\n    // ...\n}</code></pre></div>'}}),l.createElement(n.h4,{id:"참고",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0","aria-label":"참고 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/49286268/error-execution-failed-for-task-app-lintvitalrelease-any-one-can-solve-it"},"Error: Execution failed for task ':app: lintVitalRelease' any one can solve it?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stove99.github.io/etc/2021/05/11/android-studio-4.2-not-showing-gradle-task-list/"},"안드로이드 스튜디오 4.2 Gradle View 에서 Task 목록이 안보일때")),"\n"),l.createElement(n.h3,{id:"2-execution-failed-for-task-react-native-screenscompiledebugkotlin",style:{position:"relative"}},l.createElement(n.a,{href:"#2-execution-failed-for-task-react-native-screenscompiledebugkotlin","aria-label":"2 execution failed for task react native screenscompiledebugkotlin permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Execution failed for task ':react-native-screens:compileDebugKotlin'."),l.createElement(n.p,null,"최근에 라이브러리를 업데이트한 적도 없고 건드린 적도 없(다고 생각되)는데 별안간 에러가 튀어나왔다. 메시지를 좀 더 길게 보자면 아래와 같다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"e: /Users/kangseong/workspace/dataknows/RichgoInvestment/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/events/StackFinishTransitioningEvent.kt: (14, 25): Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.0.\nThe class is loaded from /Users/kangseong/.gradle/caches/transforms-3/252e845837c589e4d31b82ce412d387f/transformed/jetified-kotlin-stdlib-1.6.10.jar!/kotlin/Unit.class"),"\n",l.createElement(n.p,null,"FAILURE: Build failed with an exception."),"\n",l.createElement(n.p,null,"* What went wrong:\nExecution failed for task ':react-native-screens:compileDebugKotlin'."),"\n"),l.createElement(n.p,null,"kotlin 버전 이야기가 나온다. 이상하다. 나는 관련해서 뭔가를 업데이트한 적이 없는(것 같은)데. 여하튼 고쳐보자. ",l.createElement(n.code,null,"android/build.gradle")," 파일에서 kotiln 버전을 지정해줬다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/build.gradle</span>\nbuildscript <span class="token punctuation">{</span>\n    ext <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n        kotlinVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"1.6.10"</span></span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),l.createElement(n.p,null,"수정하니까 일단 에러 메시지는 없어졌다. 그런데 다른 에러가 튀어나왔다."),l.createElement(n.h4,{id:"execution-failed-for-task-appmergedebugnativelibs",style:{position:"relative"}},l.createElement(n.a,{href:"#execution-failed-for-task-appmergedebugnativelibs","aria-label":"execution failed for task appmergedebugnativelibs permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Execution failed for task ':app:mergeDebugNativeLibs'."),l.createElement(n.p,null,"좀 더 길게 보자"),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"* What went wrong:\nExecution failed for task ':app:mergeDebugNativeLibs'.\n> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeJavaResWorkAction\n> 2 files found with path 'lib/armeabi-v7a/libc++_shared.so' from inputs:"),"\n"),l.createElement(n.p,null,"이 에러에 대해서는 구글링 결과 해결책이 두 개 발견되었다."),l.createElement(n.p,null,"하나는 ",l.createElement(n.code,null,"android/app/build.gradle")," 파일에 ",l.createElement(n.code,null,"packagingOptions")," 를 추가하는 것이다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/app/build.gradle`</span>\nandroid <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    packagingOptions <span class="token punctuation">{</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libfbjni.so\'</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),l.createElement(n.p,null,"이 방법으로 빌드 에러는 제거되었다. 그런데 앱을 실행하면 실행하자마자 죽는 문제가 있었다. 그래서 두 번째 방법을 쓰게 되었다."),l.createElement(n.p,null,"두 번째 방법은 ",l.createElement(n.code,null,"android/build.gradle")," 파일에 ",l.createElement(n.code,null,"resolutionStrategy")," 항목을 추가하는 것이다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle">allprojects <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    configurations<span class="token punctuation">.</span>all <span class="token punctuation">{</span>\n        resolutionStrategy <span class="token punctuation">{</span>\n            force <span class="token string">\'com.facebook.react:react-native:0.66.4\'</span> <span class="token comment">// 설치되어있는 react-native 버전과 동일하게</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.p,null,"이렇게 하니까 이제 앱이 잘 실행된다."),l.createElement(n.h4,{id:"참고-1",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0-1","aria-label":"참고 1 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/software-mansion/react-native-screens/issues/1493"},"I can't install the react native screens and gesturehandler dependencies, it's returning a TASK error - \"React-native-screens:compileDebugJavaC")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/74326839/error-execution-failed-for-task-appmergedebugnativelibs"},"error: Execution failed for task ':app:mergeDebugNativeLibs'")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/facebook/react-native/issues/35215"},"Execution failed for task ':app:mergeDebugNativeLibs'.")),"\n")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C"},"안드로이드"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-execution-failed-for-task-applintvitalrelease"},"1. Execution failed for task ':app:lintVitalRelease'"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0"},"참고")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-execution-failed-for-task-react-native-screenscompiledebugkotlin"},"2. Execution failed for task ':react-native-screens:compileDebugKotlin'."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#execution-failed-for-task-appmergedebugnativelibs"},"Execution failed for task ':app:mergeDebugNativeLibs'.")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0-1"},"참고")),"\n"),"\n"),"\n"),"\n"),"\n")))}var o,r,s,c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(i,e)):i(e)},d=t(1880),p=t(3723),u=t(6758),m=t(3904),g=t(891),h=t(5534),f=t(5777),b=t(7178),v=t(2889),E=t(5924),k=t(7466);function x(e){let{data:n,children:t}=e;const a=l.useRef(),{frontmatter:i,sameSeriesPosts:o}=n.mdx,{title:r,slug:s,date:c,tags:d,series:p,heroImage:m,heroImageAlt:g}=i;return l.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(u.Z,null,l.createElement(w,null,l.createElement("h1",null,r),l.createElement(y,null,c),l.createElement(v.Z,{tags:d})),l.createElement(b.Z,{name:p,data:o,current:s}),l.createElement(k.Z,{data:m,alt:g}),l.createElement(S,{ref:a},t),l.createElement(f.Z,null))}const w=g.ZP.div(o||(o=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=g.ZP.div(r||(r=(0,d.Z)(["\n  margin: 16px 0;\n"]))),S=(0,g.ZP)(h.Z)(s||(s=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),C=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:i,slug:o,tags:r,heroImage:s,previewContent:c},excerpt:d}=a.mdx,u=s?(0,p.c)(s):null;return l.createElement(m.Z,{title:i,description:null!=c?c:d,path:"posts/"+o,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function Z(e){return l.createElement(x,e,l.createElement(c,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l,i=t(5785),o=t(1880),r=t(891);const s=r.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,i.Z)(new Array(30)).map(((e,n)=>(0,r.iv)(l||(l=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=s},7466:function(e,n,t){var a,l=t(1880),i=t(7294),o=t(3723);const r=t(891).ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const l=n?(0,o.c)(n):null,s=n?null!=a?a:"PostImage":"by ricale";return i.createElement(r,null,l?i.createElement(o.G,{image:l,alt:s}):i.createElement(o.S,{src:"../images/defaultThumbnail.jpeg",alt:s,__imageData:t(6955)}),i.createElement("p",null,s))}},7178:function(e,n,t){var a,l,i,o,r,s=t(1880),c=t(7294),d=t(1883),p=t(891);const u=p.ZP.div(a||(a=(0,s.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),m=p.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),g=p.ZP.ol(i||(i=(0,s.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=p.ZP.li(o||(o=(0,s.Z)(["\n  ","\n"])),(e=>e.active&&(0,p.iv)(r||(r=(0,s.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,i]=c.useState(!0);return t?c.createElement(u,null,c.createElement(m,{collapsed:l,onClick:()=>i((e=>!e))},c.createElement("h2",null,"시리즈 ",c.createElement(d.Link,{to:"/series/"+n+"/"},'"'+n+'"')),c.createElement("span",null,"▲")),!l&&c.createElement(g,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return c.createElement(h,{active:n===a,key:n},c.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return u}});var a,l=t(1880),i=t(7294),o=t(891),r=t(1883);const s=(0,o.ZP)(r.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var c,d=function(e){let{value:n}=e;return i.createElement(s,{to:"/tags/"+n},n)};const p=o.ZP.ul(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var u=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return i.createElement(p,a,l.map((e=>i.createElement("li",{key:e.fieldValue},i.createElement(d,{value:e.fieldValue}),t&&!!e.totalCount&&i.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,i;if(!n)return;const o=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let r;for(let t=0;t<n.length;t++)if(n[t].offsetTop>o){var s;r=null!==(s=n[t-1])&&void 0!==s?s:null;break}if(void 0===r&&(r=n[n.length-1]),null===(i=e.current)||void 0===i||i.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),r){var c;const n=r.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(c=e.current)||void 0===c?void 0:c.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return i}});var a=t(7294);const l=a.createContext({});function i(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-221107-react-native-build-error-4-index-mdx-944d85c543e38831e9d5.js.map