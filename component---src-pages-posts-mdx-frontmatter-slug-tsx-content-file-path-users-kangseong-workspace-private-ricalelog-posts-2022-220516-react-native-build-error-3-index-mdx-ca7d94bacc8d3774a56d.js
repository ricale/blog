"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4862],{9417:function(e,n,t){t.r(n),t.d(n,{Head:function(){return _},default:function(){return S}});var o=t(1151),a=t(7294);function l(e){const n=Object.assign({div:"div",p:"p",h2:"h2",a:"a",h3:"h3",code:"code",blockquote:"blockquote",br:"br",ul:"ul",li:"li",button:"button"},(0,o.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.div,{className:"md"},a.createElement(n.p,null,"Mac OS 를 쓰면서 마주한 React Native 빌드 에러에 대해 정리한다."),a.createElement(n.p,null,"M1 프로세서를 사용 중인데 이것이 원인 중 하나인지는 명확하지 않다."),a.createElement(n.h2,{id:"ios",style:{position:"relative"}},a.createElement(n.a,{href:"#ios","aria-label":"ios permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"iOS"),a.createElement(n.h3,{id:"1-undefined-symbol-_objc_class__stocknewsdmmanager",style:{position:"relative"}},a.createElement(n.a,{href:"#1-undefined-symbol-_objc_class__stocknewsdmmanager","aria-label":"1 undefined symbol _objc_class__stocknewsdmmanager permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Undefined symbol: _OBJC_CLASS_$_StockNewsdmManager"),a.createElement(n.p,null,"앱 보안 및 무결성을 위해, 외부 보안 솔루션을 사용한다. 해당 솔루션을 프로덕션 환경에만 적용해놨는데, 개발 환경 컴파일 때 해당 솔루션의 파일이 포함되면서 발생된 에러다."),a.createElement(n.p,null,"컴파일에 포함되면 안 되는 파일은 Build Settings 에서 ",a.createElement(n.code,null,"excluded_source_file_names")," 항목에 추가해주면 된다. 환경별로 따로 설정도 가능하다."),a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/fbae3/1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAADhAAAA4QAGksAzQAAABkElEQVR42s2S227bMBBE9RNtIpLinZQs2pZt2fElTtyXKEXa//+d6ZJNAiQBAhTIQx8OxF3MDpZDVfvDAfvLT9z8+I226xBjxGIxEIvCMAzoU8Ks75FSj/V6XRiGJfo+69sy07Zd6VXWR0gTYGICYxxaa4QQitl8Poe1FsYYBOexG49oQ4TSqvSU1DBSQhOqaeCNRBViBykbXH3/Bu89HBFo6HR7xvF0gqZBxjkaLuBtgGxkqTNeWwzBYxU9ls5gpshws9ki9TNIIWgLh3Ge0HuH1mhoVkPV10ihw3JG16PNcr+zppBr1wgIxuh2f6nuKI/LbsTgLfj1FTpncXs+w9Jmkq5S1zVWqxV+PT1henjANE14fJzK9/5ywW6zhhEcnBYqhoy2yIc8KOi8CA7n/U0xzkLNGVIMOG5H7Gn4MG5e2dIjLLsW6q0hA8+ZPK+cw9VKUeASjcjZccpNlODfkzWS9ILMXjw+GObzK1lYxOJt/x2fGopnwb/y6Yb/jWGmennhzJcY5sLRD63oZb/C8A8Wa2gam/5ILQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="1"\n        title=""\n        src="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/5a190/1.png"\n        srcset="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/772e8/1.png 200w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/e17e5/1.png 400w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/5a190/1.png 800w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/c1b63/1.png 1200w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/29007/1.png 1600w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/fbae3/1.png 2260w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),a.createElement(n.h3,{id:"2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e",style:{position:"relative"}},a.createElement(n.a,{href:"#2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e","aria-label":"2 mach o file but is an incompatible architecture have x86_64 need arm64e permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')"),a.createElement(n.p,null,a.createElement(n.a,{href:"https://github.com/react-native-seoul/react-native-kakao-login"},"@react-native-seoul/kakao-login")," 를 사용해 카카오 로그인 연동 시 발생한 에러다. 상세 내용은 아래와 같다."),a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,'[!] CocoaPods could not find compatible versions for pod "KakaoSDKUser":'),"\n",a.createElement(n.p,null,"In Podfile:",a.createElement(n.br),"\n","kakao-login (from ",a.createElement(n.code,null,"../node_modules/@react-native-seoul/kakao-login"),") was resolved to 4.0.0, which depends on",a.createElement(n.br),"\n","KakaoSDKUser (~> 2.9.0)"),"\n",a.createElement(n.p,null,"None of your spec sources contain a spec satisfying the dependency: ",a.createElement(n.code,null,"KakaoSDKUser (~> 2.9.0)"),"."),"\n",a.createElement(n.p,null,"You have either:"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"out-of-date source repos which you can update with ",a.createElement(n.code,null,"pod repo update")," or with ",a.createElement(n.code,null,"pod install --repo-update"),"."),"\n",a.createElement(n.li,null,"mistyped the name or version."),"\n",a.createElement(n.li,null,"not added the source repo that hosts the Podspec to your Podfile."),"\n"),"\n"),a.createElement(n.p,null,"에러 내용을 자세히 안 봐서 좀 해멨는데 결국 repo update 를 해주면 될 일이었다."),a.createElement(n.div,{className:"codeblock-container"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">pod <span class="token function">install</span> --repo-update</code></pre></div>'}}),a.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),a.createElement(n.p,null,"앗 그래도 에러가 나네?"),a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle, 0x0009): tried: '/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle' (mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')), '/usr/lib/ffi_c.bundle' (no such file) - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle"),"\n"),a.createElement(n.p,null,"그럼 아래처럼 해주면 되겠다. (아마도 M1 프로세서 한정)"),a.createElement(n.div,{className:"codeblock-container"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">arch <span class="token parameter variable">-x86_64</span> pod <span class="token function">install</span> --repo-update</code></pre></div>'}}),a.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),a.createElement(n.h2,{id:"안드로이드",style:{position:"relative"}},a.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C","aria-label":"안드로이드 permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"안드로이드"),a.createElement(n.h3,{id:"1-error-unexpected-token-name-_890_340-expected-punc-",style:{position:"relative"}},a.createElement(n.a,{href:"#1-error-unexpected-token-name-_890_340-expected-punc-","aria-label":"1 error unexpected token name _890_340 expected punc  permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Error: Unexpected token name «_890_340», expected punc «,»"),a.createElement(n.p,null,"자바스크립트는 긴 숫자의 가독성을 위해 ",a.createElement(n.a,{href:"https://v8.dev/features/numeric-separators"},"1_890_340 같은 형식의 문법을 제공"),"한다. 그런데 이게 RN 안드로이드 환경에서는 에러를 발생시킨다."),a.createElement(n.p,null,'"_"를 지우니 에러가 발생하지 않았다. 내 더미 데이터의 가독성은 떨어졌지만 어차피 더미 데이터니까, 빨리 프로젝트에서 삭제할 날이 오기를 기도하기로 하자.')),"\n",a.createElement(n.div,{className:"toc"},a.createElement(n.p,null,"목차"),a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#ios"},"iOS"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#1-undefined-symbol-_objc_class__stocknewsdmmanager"},"1. Undefined symbol: _OBJC_CLASS_$_StockNewsdmManager")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e"},"2. mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')")),"\n"),"\n"),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C"},"안드로이드"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"#1-error-unexpected-token-name-_890_340-expected-punc-"},"1. Error: Unexpected token name «_890_340», expected punc «,»")),"\n"),"\n"),"\n")))}var r,c,i,s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)},d=t(1880),m=t(1883),p=t(3723),u=t(6758),h=t(3904),g=t(891),b=t(3234),f=t(5777),v=t(7178),x=t(5924);function E(e){let{data:n,children:t}=e;const o=a.useRef(),{frontmatter:l,sameSeriesPosts:r}=n.mdx,{title:c,slug:i,date:s,series:d,heroImage:p,heroImageAlt:h}=l;return a.useEffect((()=>{var e;const n=null===(e=o.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,x.Z)(o,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),a.createElement(u.Z,null,a.createElement(k,null,a.createElement("h1",null,a.createElement(m.Link,{to:"/posts/"+i},c)),a.createElement(y,null,s)),a.createElement(v.Z,{name:d,data:r,current:i}),a.createElement(w,{ref:o},t),a.createElement(f.Z,null))}const k=g.ZP.div(r||(r=(0,d.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),y=g.ZP.div(c||(c=(0,d.Z)(["\n  margin-left: 2px;\n"]))),w=(0,g.ZP)(b.Z)(i||(i=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),_=e=>{var n,t;let{data:o}=e;const{frontmatter:{title:l,slug:r,tags:c,heroImage:i,previewContent:s},excerpt:d}=o.mdx,m=i?(0,p.c)(i):null;return a.createElement(h.Z,{title:l,description:null!=s?s:d,path:"posts/"+r,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function S(e){return a.createElement(E,e,a.createElement(s,e))}},5777:function(e,n,t){var o=t(7294);n.Z=function(){const e=(0,o.useRef)(null);return(0,o.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,o]=e;t.setAttribute(n,o)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),o.createElement("div",{id:"comments",ref:e})}},3234:function(e,n,t){t.d(n,{Z:function(){return y}});var o,a=t(1880),l=t(891);var r,c=(0,l.iv)(o||(o=(0,a.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder));var i,s=(0,l.iv)(r||(r=(0,a.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(e=>e.theme.colors.codeblockHighlightBorder),(e=>e.theme.colors.codeblockHighlight),(e=>e.theme.colors.codeblockTitle),(e=>e.theme.colors.codeblockCopyButtonLabel),(e=>e.theme.colors.codeblockTitleInMobile));var d,m=(0,l.iv)(i||(i=(0,a.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(e=>e.theme.colors.headingBorder),(e=>e.theme.colors.headingBorder));var p,u=(0,l.iv)(d||(d=(0,a.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(e=>e.theme.colors.imageBorder),(e=>e.theme.colors.imageCaptionText));var h,g=(0,l.iv)(p||(p=(0,a.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var b,f,v=(0,l.iv)(h||(h=(0,a.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(e=>e.theme.colors.tableBorder)),x=t(5785);var E,k=(0,l.iv)(b||(b=(0,a.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground),(0,x.Z)(new Array(20)).map(((e,n)=>(0,l.iv)(f||(f=(0,a.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(n+1),(1100+20*n-800)/2))),1100);var y=l.ZP.div(E||(E=(0,a.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),m,g,u,k,s,c,v,(e=>e.theme.colors.hr),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode))},7178:function(e,n,t){var o,a,l,r,c,i=t(1880),s=t(7294),d=t(1883),m=t(891);const p=m.ZP.div(o||(o=(0,i.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(e=>e.theme.colors.sameSereisPosts)),u=m.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n  }\n"])),(e=>e.theme.colors.onBackground),(e=>e.collapsed?0:180)),h=m.ZP.ol(l||(l=(0,i.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(e=>e.theme.colors.background)),g=m.ZP.li(r||(r=(0,i.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(e=>e.theme.colors.inactiveText),(e=>e.theme.colors.inactiveText),(e=>e.active&&(0,m.iv)(c||(c=(0,i.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(e=>e.theme.colors.onBackground),(e=>e.theme.colors.onBackground))));n.Z=function(e){let{name:n,data:t,current:o}=e;const[a,l]=s.useState(!0);return t?s.createElement(p,null,s.createElement(u,{collapsed:a,onClick:()=>l((e=>!e))},s.createElement("h2",null,s.createElement(d.Link,{to:"/series/"+n+"/"},'시리즈 "'+n+'"')),s.createElement("span",null,"▲")),!a&&s.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(g,{active:n===o,key:n},s.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var o,a,l;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(o=null===(a=e.current)||void 0===a?void 0:a.offsetTop)&&void 0!==o?o:0);let c;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var i;c=null!==(i=n[t-1])&&void 0!==i?i:null;break}if(void 0===c&&(c=n[n.length-1]),null===(l=e.current)||void 0===l||l.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),c){var s;const n=c.getAttribute("id"),o=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",a=null===(s=e.current)||void 0===s?void 0:s.querySelector(o);null==a||a.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var o=t(7294);const a=o.createContext({});function l(e){const n=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220516-react-native-build-error-3-index-mdx-ca7d94bacc8d3774a56d.js.map