"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2357],{5764:function(e,n,t){t.r(n),t.d(n,{Head:function(){return B},default:function(){return Z}});var a=t(1151),o=t(7294);function l(e){const n=Object.assign({div:"div",p:"p",h3:"h3",a:"a",code:"code",blockquote:"blockquote",ul:"ul",li:"li"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(n.div,{className:"md"},o.createElement(n.p,null,"최근 React Native 의 빌드 환경을 옮기면서 마주한 에러들을 간단히 정리한다. Intel 프로세서에서 Apple M1 프로세서로 옮기면서 생긴 에러들이 아닌가 하고 추정하고 있지만, 정확하지는 않다."),o.createElement(n.h3,{id:"1-pod-install이-되지-않는다",style:{position:"relative"}},o.createElement(n.a,{href:"#1-pod-install%EC%9D%B4-%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94%EB%8B%A4","aria-label":"1 pod install이 되지 않는다 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. ",o.createElement(n.code,null,"pod install"),"이 되지 않는다"),o.createElement(n.p,null,"아래와 같은 에러가 발생하며 ",o.createElement(n.code,null,"pod install"),"이 진행되지 않았다."),o.createElement(n.blockquote,null,"\n",o.createElement(n.p,null,"LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle, 0x0009): missing compatible arch in /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle"),"\n"),o.createElement(n.p,null,"아래의 명령어를 실행하면 해결할 수 있다."),o.createElement(n.p,null,"$ sudo arch -x86_64 gem install ffi\n$ arch -x86_64 pod install"),o.createElement(n.p,null,"이후부터는 그냥 ",o.createElement(n.code,null,"pod install"),"을 써도 문제 없다."),o.createElement(n.p,null,"(",o.createElement(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/10220#issuecomment-730963835"},"출처"),")"),o.createElement(n.h3,{id:"2-xcode-빌드-에러-library-not-found-for--lbase64",style:{position:"relative"}},o.createElement(n.a,{href:"#2-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-library-not-found-for--lbase64","aria-label":"2 xcode 빌드 에러 library not found for  lbase64 permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Xcode 빌드 에러: Library not found for -lBase64"),o.createElement(n.p,null,"이 문제는 Xcode에서 프로젝트를 열 때 ",o.createElement(n.code,null,"*.xcodeproj")," 파일 대신 ",o.createElement(n.code,null,"*.xcworkspace")," 파일을 여니 해결되었다. 이것은 M1과는 무관한 이슈 같다."),o.createElement(n.h3,{id:"3-xcode-빌드-에러-iosmainjsbundle-no-such-file-or-directory",style:{position:"relative"}},o.createElement(n.a,{href:"#3-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-iosmainjsbundle-no-such-file-or-directory","aria-label":"3 xcode 빌드 에러 iosmainjsbundle no such file or directory permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Xcode 빌드 에러: ios/main.jsbundle: No such file or directory"),o.createElement(n.p,null,"본래라면 자동 생성/갱신되는 것으로 알고 있는 ",o.createElement(n.code,null,"ios/main.jsbundle")," 파일이 생성/갱신되지 않으면서 생긴 에러이다."),o.createElement(n.p,null,"아래 명령어를 실행해서 ",o.createElement(n.code,null,"ios/main.jsbundle")," 파일을 직접 생성하면 문제가 해결된다."),o.createElement(n.div,{dangerouslySetInnerHTML:{__html:"<div class=\"gatsby-highlight\" data-language=\"text\"><pre class=\"language-text\"><code class=\"language-text\">yarn react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'</code></pre></div>"}}),o.createElement(n.p,null,"라이브러리를 추가/삭제할 때마다 항상 실행해주어야 한다는 것이다. 나중에 언젠가 React Native 에서 (자동으로 되도록) 패치를 내주지 않을까 싶다."),o.createElement(n.p,null,"(",o.createElement(n.a,{href:"https://github.com/facebook/react-native/issues/18472#issuecomment-407759054"},"출처"),")"),o.createElement(n.h3,{id:"4-xcode-빌드-에러-phasesriptexecution-failed-with-a-nonzero-exit-code",style:{position:"relative"}},o.createElement(n.a,{href:"#4-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-phasesriptexecution-failed-with-a-nonzero-exit-code","aria-label":"4 xcode 빌드 에러 phasesriptexecution failed with a nonzero exit code permalink",className:"anchor before"},o.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. Xcode 빌드 에러: PhaseSriptExecution failed with a nonzero exit code"),o.createElement(n.p,null,'빌드 target의 [Build Phases] 탭의 [Bundle React Native code and images] 항목에서 "For install builds only" 선택 항목을 체크하면 해결된다.'),o.createElement(n.p,null,'만약 Sentry 를 연동하고 있다면, [Upload Debug Symbols to Sentry] 항목에 대해서도 "For install builds only" 선택 항목을 체크하자.')),"\n",o.createElement(n.div,{className:"toc"},o.createElement(n.p,null,"목차"),o.createElement(n.ul,null,"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#1-pod-install%EC%9D%B4-%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94%EB%8B%A4"},"1. ",o.createElement(n.code,null,"pod install"),"이 되지 않는다")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#2-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-library-not-found-for--lbase64"},"2. Xcode 빌드 에러: Library not found for -lBase64")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#3-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-iosmainjsbundle-no-such-file-or-directory"},"3. Xcode 빌드 에러: ios/main.jsbundle: No such file or directory")),"\n",o.createElement(n.li,null,o.createElement(n.a,{href:"#4-xcode-%EB%B9%8C%EB%93%9C-%EC%97%90%EB%9F%AC-phasesriptexecution-failed-with-a-nonzero-exit-code"},"4. Xcode 빌드 에러: PhaseSriptExecution failed with a nonzero exit code")),"\n")))}var r,i,c,d=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?o.createElement(n,e,o.createElement(l,e)):l(e)},s=t(1880),u=t(3723),m=t(6758),p=t(3904),h=t(891),f=t(5534),g=t(5777),b=t(7178),x=t(2889),E=t(5924),v=t(7466);function y(e){let{data:n,children:t}=e;const a=o.useRef(),{frontmatter:l,sameSeriesPosts:r}=n.mdx,{title:i,slug:c,date:d,tags:s,series:u,heroImage:p,heroImageAlt:h}=l;return o.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),o.createElement(m.Z,null,o.createElement(w,null,o.createElement("h1",null,i),o.createElement(C,null,d),o.createElement(x.Z,{tags:s})),o.createElement(b.Z,{name:u,data:r,current:c}),o.createElement(v.Z,{data:p,alt:h}),o.createElement(k,{ref:a},t),o.createElement(g.Z,null))}const w=h.ZP.div(r||(r=(0,s.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),C=h.ZP.div(i||(i=(0,s.Z)(["\n  margin: 16px 0;\n"]))),k=(0,h.ZP)(f.Z)(c||(c=(0,s.Z)(["\n  margin-bottom: 60px;\n"]))),B=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:l,slug:r,tags:i,heroImage:c,previewContent:d},excerpt:s}=a.mdx,m=c?(0,u.c)(c):null;return o.createElement(p.Z,{title:l,description:null!=d?d:s,path:"posts/"+r,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function Z(e){return o.createElement(y,e,o.createElement(d,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,o,l=t(5785),r=t(1880),i=t(891);const c=i.ZP.div(a||(a=(0,r.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,l.Z)(new Array(30)).map(((e,n)=>(0,i.iv)(o||(o=(0,r.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=c},7466:function(e,n,t){var a,o=t(1880),l=t(7294),r=t(3723);const i=t(891).ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const o=n?(0,r.c)(n):null,c=n?null!=a?a:"PostImage":"by ricale";return l.createElement(i,null,o?l.createElement(r.G,{image:o,alt:c}):l.createElement(r.S,{src:"../images/defaultThumbnail.jpeg",alt:c,__imageData:t(6955)}),l.createElement("p",null,c))}},7178:function(e,n,t){var a,o,l,r,i,c=t(1880),d=t(7294),s=t(1883),u=t(891);const m=u.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),p=u.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=u.ZP.ol(l||(l=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),f=u.ZP.li(r||(r=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,u.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[o,l]=d.useState(!0);return t?d.createElement(m,null,d.createElement(p,{collapsed:o,onClick:()=>l((e=>!e))},d.createElement("h2",null,"시리즈 ",d.createElement(s.Link,{to:"/series/"+n+"/"},'"'+n+'"')),d.createElement("span",null,"▲")),!o&&d.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return d.createElement(f,{active:n===a,key:n},d.createElement(s.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return m}});var a,o=t(1880),l=t(7294),r=t(891),i=t(1883);const c=(0,r.ZP)(i.Link)(a||(a=(0,o.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var d,s=function(e){let{value:n}=e;return l.createElement(c,{to:"/tags/"+n},n)};const u=r.ZP.ul(d||(d=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var m=function(e){let{tags:n,showCount:t,...a}=e;const o="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return l.createElement(u,a,o.map((e=>l.createElement("li",{key:e.fieldValue},l.createElement(s,{value:e.fieldValue}),t&&!!e.totalCount&&l.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,o,l;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(a=null===(o=e.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let i;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var c;i=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===i&&(i=n[n.length-1]),null===(l=e.current)||void 0===l||l.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),i){var d;const n=i.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",o=null===(d=e.current)||void 0===d?void 0:d.querySelector(a);null==o||o.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const o=a.createContext({});function l(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210823-react-native-ios-build-error-index-mdx-bece4112bbf27b4745e2.js.map