"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[5279],{6157:function(n,e,t){t.r(e),t.d(e,{Head:function(){return z},default:function(){return Z}});var a=t(1151),o=t(7294);function i(n){const e=Object.assign({div:"div",h2:"h2",a:"a",h3:"h3",p:"p",em:"em",h4:"h4",ul:"ul",li:"li"},(0,a.ah)(),n.components);return o.createElement(o.Fragment,null,o.createElement(e.div,{className:"md"},o.createElement(e.h2,{id:"ios",style:{position:"relative"}},o.createElement(e.a,{href:"#ios","aria-label":"ios permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"iOS"),o.createElement(e.h3,{id:"1-command-validateembeddedbinary-failed-with-a-nonzero-exit-code",style:{position:"relative"}},o.createElement(e.a,{href:"#1-command-validateembeddedbinary-failed-with-a-nonzero-exit-code","aria-label":"1 command validateembeddedbinary failed with a nonzero exit code permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Command ValidateEmbeddedBinary failed with a nonzero exit code"),o.createElement(e.p,null,"iOS 에서 발생하는 빌드 에러다. React Native Firebase 의 ",o.createElement(e.a,{href:"https://rnfirebase.io/messaging/ios-notification-images"},"iOS Notification Images")," 를 적용한 후 간헐적으로 발생한다."),o.createElement(e.p,null,"구글링하면 ",o.createElement(e.a,{href:"https://stackoverflow.com/questions/68760126/m1-command-validateembeddedbinary-failed-with-a-nonzero-exit-code-archiving-er"},"이 글"),"이 가장 위에 나오는데 우리랑 그다지 맞는 상황은 아닌 것 같다."),o.createElement(e.p,null,'왜 위에 "간헐적으로 발생"한다고 썼냐면, 정말로 발생할 때도 있고 발생하지 않을 때도 있기 때문이다. 지금까지는 ',o.createElement(e.em,null,"재부팅")," 직후에는 항상 에러 없이 성공했다. 그러니 해당 에러를 본다면 재부팅을 해보자. (..)"),o.createElement(e.h3,{id:"2-library-not-loaded-opthomebrewopticu4cliblibicui18n70dylib",style:{position:"relative"}},o.createElement(e.a,{href:"#2-library-not-loaded-opthomebrewopticu4cliblibicui18n70dylib","aria-label":"2 library not loaded opthomebrewopticu4cliblibicui18n70dylib permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Library not loaded: /opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib"),o.createElement(e.p,null,"에러 전문은 다음과 같다"),o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">dyld<span class="token punctuation">[</span><span class="token number">4737</span><span class="token punctuation">]</span>: Library not loaded: /opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib\n  Referenced from: <span class="token punctuation">\\</span><span class="token operator">&lt;</span>577D4D03-3CB0-3278-8BEF-121EFA8ABCBE<span class="token punctuation">\\</span><span class="token operator">></span> /opt/homebrew/Cellar/node/18.2.0/bin/node\n  Reason: tried: <span class="token string">\'/opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/System/Volumes/Preboot/Cryptexes/OS/opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/usr/local/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/usr/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such file, not <span class="token keyword">in</span> dyld cache<span class="token punctuation">)</span>, <span class="token string">\'/opt/homebrew/Cellar/icu4c/71.1/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/System/Volumes/Preboot/Cryptexes/OS/opt/homebrew/Cellar/icu4c/71.1/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/opt/homebrew/Cellar/icu4c/71.1/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/usr/local/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">\'/usr/lib/libicui18n.70.dylib\'</span> <span class="token punctuation">(</span>no such file, not <span class="token keyword">in</span> dyld cache<span class="token punctuation">)</span>\n/Users/ricale/Library/Developer/Xcode/DerivedData/Frism-dgzfyqoaoiwbhpetiazaoylzkbxf/Build/Intermediates.noindex/Frism.build/Debug-iphoneos/Frism.build/Script-00DD1BFF1BD5951E006B06BC.sh: line <span class="token number">7</span>: <span class="token number">4737</span> Abort trap: <span class="token number">6</span> <span class="token punctuation">..</span>/node_modules/@sentry/cli/bin/sentry-cli react-native xcode <span class="token punctuation">..</span>/node_modules/react-native/scripts/react-native-xcode.sh\nCommand PhaseScriptExecution failed with a nonzero <span class="token builtin class-name">exit</span> code</code></pre></div>'}}),o.createElement(e.p,null,"icu4c 라는 라이브러리에 대해 현재 NPM 에서 사용하려는 버전과 실제 내 컴퓨터에 설치된 버전이 달라서 생기는 버그라고 한다. 최근에 OS 를 업데이트했는데 그 때 뭔가 영향을 끼친 것 같다. 방법은 npm 의 버전을 올리거나 npm 이 현재 설치된 버전의 icu4u 를 사용하도록 해주면 된다고 한다. 나는 전자를 선택했다."),o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ brew upgrade <span class="token function">npm</span></code></pre></div>'}}),o.createElement(e.h4,{id:"참고",style:{position:"relative"}},o.createElement(e.a,{href:"#%EC%B0%B8%EA%B3%A0","aria-label":"참고 permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"참고"),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"https://choisee02.tistory.com/91"},"[react 설치 중 오류] dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.67.dylib")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"http://paikwiki.github.io/2018/06/icu4c-issue-of-nodejs"},"Node.js와 npm 실행시 icu4c 관련 오류 해결하기")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"https://stackoverflow.com/questions/53828891/dyld-library-not-loaded-usr-local-opt-icu4c-lib-libicui18n-62-dylib-error-run"},"dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.62.dylib error running php after installing node with brew on Mac")),"\n")),"\n",o.createElement(e.div,{className:"toc"},o.createElement(e.p,null,"목차"),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#ios"},"iOS"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#1-command-validateembeddedbinary-failed-with-a-nonzero-exit-code"},"1. Command ValidateEmbeddedBinary failed with a nonzero exit code")),"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#2-library-not-loaded-opthomebrewopticu4cliblibicui18n70dylib"},"2. Library not loaded: /opt/homebrew/opt/icu4c/lib/libicui18n.70.dylib"),"\n",o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#%EC%B0%B8%EA%B3%A0"},"참고")),"\n"),"\n"),"\n"),"\n"),"\n")))}var l,c,s,r=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?o.createElement(e,n,o.createElement(i,n)):i(n)},p=t(1880),d=t(3723),u=t(6758),m=t(3904),h=t(891),b=t(5534),f=t(5777),g=t(7178),v=t(2889),x=t(5924),k=t(7466);function y(n){let{data:e,children:t}=n;const a=o.useRef(),{frontmatter:i,sameSeriesPosts:l}=e.mdx,{title:c,slug:s,date:r,tags:p,series:d,heroImage:m,heroImageAlt:h}=i;return o.useEffect((()=>{var n;const e=null===(n=a.current)||void 0===n?void 0:n.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,x.Z)(a,e)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==e||e.forEach((n=>t.observe(n))),()=>t.disconnect()}),[]),o.createElement(u.Z,null,o.createElement(E,null,o.createElement("h1",null,c),o.createElement(w,null,r),o.createElement(v.Z,{tags:p})),o.createElement(g.Z,{name:d,data:l,current:s}),o.createElement(k.Z,{data:m,alt:h}),o.createElement(S,{ref:a},t),o.createElement(f.Z,null))}const E=h.ZP.div(l||(l=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=h.ZP.div(c||(c=(0,p.Z)(["\n  margin: 16px 0;\n"]))),S=(0,h.ZP)(b.Z)(s||(s=(0,p.Z)(["\n  margin-bottom: 60px;\n"]))),z=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:i,slug:l,tags:c,heroImage:s,previewContent:r},excerpt:p}=a.mdx,u=s?(0,d.c)(s):null;return o.createElement(m.Z,{title:i,description:null!=r?r:p,path:"posts/"+l,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function Z(n){return o.createElement(y,n,o.createElement(r,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,t){var a,o,i=t(5785),l=t(1880),c=t(891);const s=c.ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,i.Z)(new Array(30)).map(((n,e)=>(0,c.iv)(o||(o=(0,l.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(e+1),(1100+10*e-800)/2))),1400,(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=s},7466:function(n,e,t){var a,o=t(1880),i=t(7294),l=t(3723);const c=t(891).ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));e.Z=function(n){let{data:e,alt:a}=n;const o=e?(0,l.c)(e):null,s=e?null!=a?a:"PostImage":"by ricale";return i.createElement(c,null,o?i.createElement(l.G,{image:o,alt:s}):i.createElement(l.S,{src:"../images/defaultThumbnail.jpeg",alt:s,__imageData:t(6955)}),i.createElement("p",null,s))}},7178:function(n,e,t){var a,o,i,l,c,s=t(1880),r=t(7294),p=t(1883),d=t(891);const u=d.ZP.div(a||(a=(0,s.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),m=d.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),h=d.ZP.ol(i||(i=(0,s.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),b=d.ZP.li(l||(l=(0,s.Z)(["\n  ","\n"])),(n=>n.active&&(0,d.iv)(c||(c=(0,s.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[o,i]=r.useState(!0);return t?r.createElement(u,null,r.createElement(m,{collapsed:o,onClick:()=>i((n=>!n))},r.createElement("h2",null,"시리즈 ",r.createElement(p.Link,{to:"/series/"+e+"/"},'"'+e+'"')),r.createElement("span",null,"▲")),!o&&r.createElement(h,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return r.createElement(b,{active:e===a,key:e},r.createElement(p.Link,{to:"/posts/"+e},t))})))):null}},2889:function(n,e,t){t.d(e,{Z:function(){return u}});var a,o=t(1880),i=t(7294),l=t(891),c=t(1883);const s=(0,l.ZP)(c.Link)(a||(a=(0,o.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));var r,p=function(n){let{value:e}=n;return i.createElement(s,{to:"/tags/"+e},e)};const d=l.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));var u=function(n){let{tags:e,showCount:t,...a}=n;const o="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return i.createElement(d,a,o.map((n=>i.createElement("li",{key:n.fieldValue},i.createElement(p,{value:n.fieldValue}),t&&!!n.totalCount&&i.createElement("sup",null,""+n.totalCount)))))}},5924:function(n,e){const t="highlight";e.Z=function(n,e){var a,o,i;if(!e)return;const l=document.documentElement.scrollTop+10-(null!==(a=null===(o=n.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let c;for(let t=0;t<e.length;t++)if(e[t].offsetTop>l){var s;c=null!==(s=e[t-1])&&void 0!==s?s:null;break}if(void 0===c&&(c=e[e.length-1]),null===(i=n.current)||void 0===i||i.querySelectorAll(".highlight").forEach((n=>n.classList.remove(t))),c){var r;const e=c.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=e?e:"")+"']",o=null===(r=n.current)||void 0===r?void 0:r.querySelector(a);null==o||o.classList.add(t)}}},1151:function(n,e,t){t.d(e,{ah:function(){return i}});var a=t(7294);const o=a.createContext({});function i(n){const e=a.useContext(o);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}},6955:function(n){n.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2023-230121-react-native-build-error-5-index-mdx-b5ac60100809e78367b6.js.map