"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1952],{8794:function(e,n,a){a.r(n),a.d(n,{Head:function(){return B},default:function(){return H}});var t=a(1151),l=a(7294);function s(e){const n=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",code:"code",h4:"h4",ul:"ul",li:"li",blockquote:"blockquote",button:"button"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h2,{id:"안드로이드",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C","aria-label":"안드로이드 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"안드로이드"),l.createElement(n.h3,{id:"1-execution-failed-for-task-applintvitalrelease",style:{position:"relative"}},l.createElement(n.a,{href:"#1-execution-failed-for-task-applintvitalrelease","aria-label":"1 execution failed for task applintvitalrelease permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Execution failed for task ':app:lintVitalRelease'"),l.createElement(n.p,null,"여기서 ",l.createElement(n.code,null,"lintVitalRelease")," 는 안드로이드 코드 (Java 혹은 Kotlin) 에 대한 lint 를 실행하는 태스크인 듯 싶다."),l.createElement(n.p,null,"좀 더 자세한 에러 메시지를 알고 싶으면 Android Studio 에서 ",l.createElement(n.code,null,"lintVatalRelease")," 를 직접 실행시키면 된다. 하지만 외부 라이브러리의 lint 에러일 가능성이 높으므로 직접 대응하기 힘들 가능성이 높다. (내 경우에도 외부 라이브러리에서 발생한 에러였다.) 물론 그럼에도 근본적인 원인을 찾아 해결하고 싶다면 확인해보자."),l.createElement(n.p,null,'"일단은 lint 에러라면 무시해도 되지 않을까?" 라는 접근법으로 해결해보았다. ',l.createElement(n.code,null,"android/app/build.gradle")," 에 아래 내용을 추가해주면 된다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">android {\n    // ...\n    lintOptions {\n        checkReleaseBuilds false\n    }\n    // ...\n}</code></pre></div>'}}),l.createElement(n.h4,{id:"참고",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0","aria-label":"참고 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/49286268/error-execution-failed-for-task-app-lintvitalrelease-any-one-can-solve-it"},"Error: Execution failed for task ':app: lintVitalRelease' any one can solve it?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stove99.github.io/etc/2021/05/11/android-studio-4.2-not-showing-gradle-task-list/"},"안드로이드 스튜디오 4.2 Gradle View 에서 Task 목록이 안보일때")),"\n"),l.createElement(n.h3,{id:"2-execution-failed-for-task-react-native-screenscompiledebugkotlin",style:{position:"relative"}},l.createElement(n.a,{href:"#2-execution-failed-for-task-react-native-screenscompiledebugkotlin","aria-label":"2 execution failed for task react native screenscompiledebugkotlin permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Execution failed for task ':react-native-screens:compileDebugKotlin'."),l.createElement(n.p,null,"최근에 라이브러리를 업데이트한 적도 없고 건드린 적도 없(다고 생각되)는데 별안간 에러가 튀어나왔다. 메시지를 좀 더 길게 보자면 아래와 같다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"e: /Users/kangseong/workspace/dataknows/RichgoInvestment/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/events/StackFinishTransitioningEvent.kt: (14, 25): Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.0.\nThe class is loaded from /Users/kangseong/.gradle/caches/transforms-3/252e845837c589e4d31b82ce412d387f/transformed/jetified-kotlin-stdlib-1.6.10.jar!/kotlin/Unit.class"),"\n",l.createElement(n.p,null,"FAILURE: Build failed with an exception."),"\n",l.createElement(n.p,null,"* What went wrong:\nExecution failed for task ':react-native-screens:compileDebugKotlin'."),"\n"),l.createElement(n.p,null,"kotlin 버전 이야기가 나온다. 이상하다. 나는 관련해서 뭔가를 업데이트한 적이 없는(것 같은)데. 여하튼 고쳐보자. ",l.createElement(n.code,null,"android/build.gradle")," 파일에서 kotiln 버전을 지정해줬다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/build.gradle</span>\nbuildscript <span class="token punctuation">{</span>\n    ext <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n        kotlinVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"1.6.10"</span></span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"수정하니까 일단 에러 메시지는 없어졌다. 그런데 다른 에러가 튀어나왔다."),l.createElement(n.h4,{id:"execution-failed-for-task-appmergedebugnativelibs",style:{position:"relative"}},l.createElement(n.a,{href:"#execution-failed-for-task-appmergedebugnativelibs","aria-label":"execution failed for task appmergedebugnativelibs permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Execution failed for task ':app:mergeDebugNativeLibs'."),l.createElement(n.p,null,"좀 더 길게 보자"),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"* What went wrong:\nExecution failed for task ':app:mergeDebugNativeLibs'.\n> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeJavaResWorkAction\n> 2 files found with path 'lib/armeabi-v7a/libc++_shared.so' from inputs:"),"\n"),l.createElement(n.p,null,"이 에러에 대해서는 구글링 결과 해결책이 두 개 발견되었다."),l.createElement(n.p,null,"하나는 ",l.createElement(n.code,null,"android/app/build.gradle")," 파일에 ",l.createElement(n.code,null,"packagingOptions")," 를 추가하는 것이다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/app/build.gradle`</span>\nandroid <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    packagingOptions <span class="token punctuation">{</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libfbjni.so\'</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"이 방법으로 빌드 에러는 제거되었다. 그런데 앱을 실행하면 실행하자마자 죽는 문제가 있었다. 그래서 두 번째 방법을 쓰게 되었다."),l.createElement(n.p,null,"두 번째 방법은 ",l.createElement(n.code,null,"android/build.gradle")," 파일에 ",l.createElement(n.code,null,"resolutionStrategy")," 항목을 추가하는 것이다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle">allprojects <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    configurations<span class="token punctuation">.</span>all <span class="token punctuation">{</span>\n        resolutionStrategy <span class="token punctuation">{</span>\n            force <span class="token string">\'com.facebook.react:react-native:0.66.4\'</span> <span class="token comment">// 설치되어있는 react-native 버전과 동일하게</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"이렇게 하니까 이제 앱이 잘 실행된다."),l.createElement(n.h4,{id:"참고-1",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0-1","aria-label":"참고 1 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/software-mansion/react-native-screens/issues/1493"},"I can't install the react native screens and gesturehandler dependencies, it's returning a TASK error - \"React-native-screens:compileDebugJavaC")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/74326839/error-execution-failed-for-task-appmergedebugnativelibs"},"error: Execution failed for task ':app:mergeDebugNativeLibs'")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://github.com/facebook/react-native/issues/35215"},"Execution failed for task ':app:mergeDebugNativeLibs'.")),"\n")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C"},"안드로이드"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-execution-failed-for-task-applintvitalrelease"},"1. Execution failed for task ':app:lintVitalRelease'"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0"},"참고")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-execution-failed-for-task-react-native-screenscompiledebugkotlin"},"2. Execution failed for task ':react-native-screens:compileDebugKotlin'."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#execution-failed-for-task-appmergedebugnativelibs"},"Execution failed for task ':app:mergeDebugNativeLibs'.")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%B0%B8%EA%B3%A0-1"},"참고")),"\n"),"\n"),"\n"),"\n"),"\n")))}var r,i,c,o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)},d=a(1880),u=a(1883),p=a(3723),m=a(6758),h=a(3904),g=a(891),v=a(3234),E=a(5777),f=a(7178),b=a(2889),k=a(5924),x=a(7466);function S(e){let{data:n,children:a}=e;const t=l.useRef(),{frontmatter:s,sameSeriesPosts:r}=n.mdx,{title:i,slug:c,date:o,tags:d,series:p,heroImage:h,heroImageAlt:g}=s;return l.useEffect((()=>{var e;const n=null===(e=t.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),a=new IntersectionObserver((()=>(0,k.Z)(t,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>a.observe(e))),()=>a.disconnect()}),[]),l.createElement(m.Z,null,l.createElement(w,null,l.createElement("h1",null,l.createElement(u.Link,{to:"/posts/"+c},i)),l.createElement(C,null,o),l.createElement(b.Z,{tags:d})),l.createElement(f.Z,{name:p,data:r,current:c}),l.createElement(x.Z,{data:h,alt:g}),l.createElement(y,{ref:t},a),l.createElement(E.Z,null))}const w=g.ZP.div(r||(r=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),C=g.ZP.div(i||(i=(0,d.Z)(["\n  margin: 16px 0;\n"]))),y=(0,g.ZP)(v.Z)(c||(c=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),B=e=>{var n,a;let{data:t}=e;const{frontmatter:{title:s,slug:r,tags:i,heroImage:c,previewContent:o},excerpt:d}=t.mdx,u=c?(0,p.c)(c):null;return l.createElement(h.Z,{title:s,description:null!=o?o:d,path:"posts/"+r,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(a=n.fallback)||void 0===a?void 0:a.src,keywords:i,ogType:"article"})};function H(e){return l.createElement(S,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-221107-react-native-build-error-4-index-mdx-499d3a7d83a0ad5fd56a.js.map