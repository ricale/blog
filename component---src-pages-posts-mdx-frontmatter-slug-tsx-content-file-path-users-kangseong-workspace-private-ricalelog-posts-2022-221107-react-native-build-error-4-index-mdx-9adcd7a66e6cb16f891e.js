"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1952],{8794:function(n,e,t){t.r(e),t.d(e,{Head:function(){return _},default:function(){return j}});var a=t(1151),l=t(7294);function o(n){const e=Object.assign({h2:"h2",h3:"h3",p:"p",code:"code",div:"div",h4:"h4",ul:"ul",li:"li",a:"a",blockquote:"blockquote"},(0,a.ah)(),n.components);return l.createElement(l.Fragment,null,l.createElement(e.h2,null,"안드로이드"),"\n",l.createElement(e.h3,null,"1. Execution failed for task ':app:lintVitalRelease'"),"\n",l.createElement(e.p,null,"여기서 ",l.createElement(e.code,null,"lintVitalRelease")," 는 안드로이드 코드 (Java 혹은 Kotlin) 에 대한 lint 를 실행하는 태스크인 듯 싶다."),"\n",l.createElement(e.p,null,"좀 더 자세한 에러 메시지를 알고 싶으면 Android Studio 에서 ",l.createElement(e.code,null,"lintVatalRelease")," 를 직접 실행시키면 된다. 하지만 외부 라이브러리의 lint 에러일 가능성이 높으므로 직접 대응하기 힘들 가능성이 높다. (내 경우에도 외부 라이브러리에서 발생한 에러였다.) 물론 그럼에도 근본적인 원인을 찾아 해결하고 싶다면 확인해보자."),"\n",l.createElement(e.p,null,'"일단은 lint 에러라면 무시해도 되지 않을까?" 라는 접근법으로 해결해보았다. ',l.createElement(e.code,null,"android/app/build.gradle")," 에 아래 내용을 추가해주면 된다."),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">android {\n    // ...\n    lintOptions {\n        checkReleaseBuilds false\n    }\n    // ...\n}</code></pre></div>'}}),"\n",l.createElement(e.h4,null,"참고"),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,l.createElement(e.a,{href:"https://stackoverflow.com/questions/49286268/error-execution-failed-for-task-app-lintvitalrelease-any-one-can-solve-it"},"Error: Execution failed for task ':app: lintVitalRelease' any one can solve it?")),"\n",l.createElement(e.li,null,l.createElement(e.a,{href:"https://stove99.github.io/etc/2021/05/11/android-studio-4.2-not-showing-gradle-task-list/"},"안드로이드 스튜디오 4.2 Gradle View 에서 Task 목록이 안보일때")),"\n"),"\n",l.createElement(e.h3,null,"2. Execution failed for task ':react-native-screens:compileDebugKotlin'."),"\n",l.createElement(e.p,null,"최근에 라이브러리를 업데이트한 적도 없고 건드린 적도 없(다고 생각되)는데 별안간 에러가 튀어나왔다. 메시지를 좀 더 길게 보자면 아래와 같다."),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"e: /Users/kangseong/workspace/dataknows/RichgoInvestment/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/events/StackFinishTransitioningEvent.kt: (14, 25): Class 'kotlin.Unit' was compiled with an incompatible version of Kotlin. The binary version of its metadata is 1.6.0, expected version is 1.4.0.\nThe class is loaded from /Users/kangseong/.gradle/caches/transforms-3/252e845837c589e4d31b82ce412d387f/transformed/jetified-kotlin-stdlib-1.6.10.jar!/kotlin/Unit.class"),"\n",l.createElement(e.p,null,"FAILURE: Build failed with an exception."),"\n",l.createElement(e.p,null,"* What went wrong:\nExecution failed for task ':react-native-screens:compileDebugKotlin'."),"\n"),"\n",l.createElement(e.p,null,"kotlin 버전 이야기가 나온다. 이상하다. 나는 관련해서 뭔가를 업데이트한 적이 없는(것 같은)데. 여하튼 고쳐보자. ",l.createElement(e.code,null,"android/build.gradle")," 파일에서 kotiln 버전을 지정해줬다."),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/build.gradle</span>\nbuildscript <span class="token punctuation">{</span>\n    ext <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n        kotlinVersion <span class="token operator">=</span> <span class="token interpolation-string"><span class="token string">"1.6.10"</span></span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),"\n",l.createElement(e.p,null,"수정하니까 일단 에러 메시지는 없어졌다. 그런데 다른 에러가 튀어나왔다."),"\n",l.createElement(e.h4,null,"Execution failed for task ':app:mergeDebugNativeLibs'."),"\n",l.createElement(e.p,null,"좀 더 길게 보자"),"\n",l.createElement(e.blockquote,null,"\n",l.createElement(e.p,null,"* What went wrong:\nExecution failed for task ':app:mergeDebugNativeLibs'.\n> A failure occurred while executing com.android.build.gradle.internal.tasks.MergeJavaResWorkAction\n> 2 files found with path 'lib/armeabi-v7a/libc++_shared.so' from inputs:"),"\n"),"\n",l.createElement(e.p,null,"이 에러에 대해서는 구글링 결과 해결책이 두 개 발견되었다."),"\n",l.createElement(e.p,null,"하나는 ",l.createElement(e.code,null,"android/app/build.gradle")," 파일에 ",l.createElement(e.code,null,"packagingOptions")," 를 추가하는 것이다."),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle"><span class="token comment">// android/app/build.gradle`</span>\nandroid <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    packagingOptions <span class="token punctuation">{</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/arm64-v8a/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libfbjni.so\'</span>\n        pickFirst <span class="token string">\'lib/x86_64/libc++_shared.so\'</span>\n        pickFirst <span class="token string">\'lib/armeabi-v7a/libfbjni.so\'</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span></code></pre></div>'}}),"\n",l.createElement(e.p,null,"이 방법으로 빌드 에러는 제거되었다. 그런데 앱을 실행하면 실행하자마자 죽는 문제가 있었다. 그래서 두 번째 방법을 쓰게 되었다."),"\n",l.createElement(e.p,null,"두 번째 방법은 ",l.createElement(e.code,null,"android/build.gradle")," 파일에 ",l.createElement(e.code,null,"resolutionStrategy")," 항목을 추가하는 것이다."),"\n",l.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="gradle"><pre class="language-gradle"><code class="language-gradle">allprojects <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    configurations<span class="token punctuation">.</span>all <span class="token punctuation">{</span>\n        resolutionStrategy <span class="token punctuation">{</span>\n            force <span class="token string">\'com.facebook.react:react-native:0.66.4\'</span> <span class="token comment">// 설치되어있는 react-native 버전과 동일하게</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",l.createElement(e.p,null,"이렇게 하니까 이제 앱이 잘 실행된다."),"\n",l.createElement(e.h4,null,"참고"),"\n",l.createElement(e.ul,null,"\n",l.createElement(e.li,null,l.createElement(e.a,{href:"https://github.com/software-mansion/react-native-screens/issues/1493"},"I can't install the react native screens and gesturehandler dependencies, it's returning a TASK error - \"React-native-screens:compileDebugJavaC")),"\n",l.createElement(e.li,null,l.createElement(e.a,{href:"https://stackoverflow.com/questions/74326839/error-execution-failed-for-task-appmergedebugnativelibs"},"error: Execution failed for task ':app:mergeDebugNativeLibs'")),"\n",l.createElement(e.li,null,l.createElement(e.a,{href:"https://github.com/facebook/react-native/issues/35215"},"Execution failed for task ':app:mergeDebugNativeLibs'.")),"\n"))}var r,s,i,c,p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?l.createElement(e,n,l.createElement(o,n)):o(n)},u=t(1880),d=t(1883),m=t(3723),g=t(1858),h=t(3904),b=t(891),f=t(5534),k=t(5777),E=t(7178);const v=n=>{let{data:e,children:t}=n;const{frontmatter:a,sameSeriesPosts:o}=e.mdx,{title:r,slug:s,date:i,tags:c,series:p,heroImage:u,heroImageAlt:h}=a,b=u?(0,m.c)(u):null;return l.createElement(g.Z,null,l.createElement(x,null,l.createElement("h1",null,r),l.createElement(Z,null,i),l.createElement(y,null,c.map((n=>l.createElement("li",{key:n},l.createElement(d.rU,{to:"/tags/"+n},n)))))),l.createElement(E.Z,{name:p,data:o,current:s}),!!b&&l.createElement(w,{image:b,alt:null!=h?h:""}),l.createElement(f.Z,null,t),l.createElement(k.Z,null))},x=b.ZP.div(r||(r=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=(0,b.ZP)(m.G)(s||(s=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),Z=b.ZP.div(i||(i=(0,u.Z)(["\n  margin: 16px 0;\n"]))),y=b.ZP.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),_=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:o,slug:r,tags:s,heroImage:i,previewContent:c},excerpt:p}=a.mdx,u=i?(0,m.c)(i):null;return l.createElement(h.Z,{title:o,description:null!=c?c:p,path:"posts/"+r,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:s,ogType:"article"})};function j(n){return l.createElement(v,n,l.createElement(p,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,l=t(1880);const o=t(891).ZP.div(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=o},7178:function(n,e,t){var a,l,o,r,s,i=t(1880),c=t(7294),p=t(1883),u=t(891);const d=u.ZP.div(a||(a=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),m=u.ZP.div(l||(l=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),g=u.ZP.ol(o||(o=(0,i.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=u.ZP.li(r||(r=(0,i.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(s||(s=(0,i.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=n=>{let{name:e,data:t,current:a}=n;const[l,o]=c.useState(!0);return t?c.createElement(d,null,c.createElement(m,{collapsed:l,onClick:()=>o((n=>!n))},c.createElement("h2",null,"시리즈 ",c.createElement(p.rU,{to:"/series/"+e+"/"},'"'+e+'"')),c.createElement("span",null,"▲")),!l&&c.createElement(g,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return c.createElement(h,{active:e===a,key:e},c.createElement(p.rU,{to:"/posts/"+e},t))})))):null}},1151:function(n,e,t){t.d(e,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(n){const e=a.useContext(l);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-221107-react-native-build-error-4-index-mdx-9adcd7a66e6cb16f891e.js.map