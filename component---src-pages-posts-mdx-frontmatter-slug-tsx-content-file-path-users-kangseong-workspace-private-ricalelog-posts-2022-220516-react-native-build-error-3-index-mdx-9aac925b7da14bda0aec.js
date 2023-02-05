"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[4862],{9417:function(e,n,t){t.r(n),t.d(n,{Head:function(){return A},default:function(){return C}});var a=t(1151),l=t(7294);function o(e){const n=Object.assign({div:"div",p:"p",h2:"h2",a:"a",h3:"h3",code:"code",blockquote:"blockquote",br:"br",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.p,null,"Mac OS 를 쓰면서 마주한 React Native 빌드 에러에 대해 정리한다."),l.createElement(n.p,null,"M1 프로세서를 사용 중인데 이것이 원인 중 하나인지는 명확하지 않다."),l.createElement(n.h2,{id:"ios",style:{position:"relative"}},l.createElement(n.a,{href:"#ios","aria-label":"ios permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"iOS"),l.createElement(n.h3,{id:"1-undefined-symbol-_objc_class__stocknewsdmmanager",style:{position:"relative"}},l.createElement(n.a,{href:"#1-undefined-symbol-_objc_class__stocknewsdmmanager","aria-label":"1 undefined symbol _objc_class__stocknewsdmmanager permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Undefined symbol: _OBJC_CLASS_$_StockNewsdmManager"),l.createElement(n.p,null,"앱 보안 및 무결성을 위해, 외부 보안 솔루션을 사용한다. 해당 솔루션을 프로덕션 환경에만 적용해놨는데, 개발 환경 컴파일 때 해당 솔루션의 파일이 포함되면서 발생된 에러다."),l.createElement(n.p,null,"컴파일에 포함되면 안 되는 파일은 Build Settings 에서 ",l.createElement(n.code,null,"excluded_source_file_names")," 항목에 추가해주면 된다. 환경별로 따로 설정도 가능하다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/fbae3/1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAADhAAAA4QAGksAzQAAABkElEQVR42s2S227bMBBE9RNtIpLinZQs2pZt2fElTtyXKEXa//+d6ZJNAiQBAhTIQx8OxF3MDpZDVfvDAfvLT9z8+I226xBjxGIxEIvCMAzoU8Ks75FSj/V6XRiGJfo+69sy07Zd6VXWR0gTYGICYxxaa4QQitl8Poe1FsYYBOexG49oQ4TSqvSU1DBSQhOqaeCNRBViBykbXH3/Bu89HBFo6HR7xvF0gqZBxjkaLuBtgGxkqTNeWwzBYxU9ls5gpshws9ki9TNIIWgLh3Ge0HuH1mhoVkPV10ihw3JG16PNcr+zppBr1wgIxuh2f6nuKI/LbsTgLfj1FTpncXs+w9Jmkq5S1zVWqxV+PT1henjANE14fJzK9/5ywW6zhhEcnBYqhoy2yIc8KOi8CA7n/U0xzkLNGVIMOG5H7Gn4MG5e2dIjLLsW6q0hA8+ZPK+cw9VKUeASjcjZccpNlODfkzWS9ILMXjw+GObzK1lYxOJt/x2fGopnwb/y6Yb/jWGmennhzJcY5sLRD63oZb/C8A8Wa2gam/5ILQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="1"\n        title=""\n        src="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/5a190/1.png"\n        srcset="/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/772e8/1.png 200w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/e17e5/1.png 400w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/5a190/1.png 800w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/c1b63/1.png 1200w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/29007/1.png 1600w,\n/blog/static/a81a7cf0574b6144d5a986bc99b1d5d9/fbae3/1.png 2260w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(n.h3,{id:"2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e",style:{position:"relative"}},l.createElement(n.a,{href:"#2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e","aria-label":"2 mach o file but is an incompatible architecture have x86_64 need arm64e permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')"),l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/react-native-seoul/react-native-kakao-login"},"@react-native-seoul/kakao-login")," 를 사용해 카카오 로그인 연동 시 발생한 에러다. 상세 내용은 아래와 같다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,'[!] CocoaPods could not find compatible versions for pod "KakaoSDKUser":'),"\n",l.createElement(n.p,null,"In Podfile:",l.createElement(n.br),"\n","kakao-login (from ",l.createElement(n.code,null,"../node_modules/@react-native-seoul/kakao-login"),") was resolved to 4.0.0, which depends on",l.createElement(n.br),"\n","KakaoSDKUser (~> 2.9.0)"),"\n",l.createElement(n.p,null,"None of your spec sources contain a spec satisfying the dependency: ",l.createElement(n.code,null,"KakaoSDKUser (~> 2.9.0)"),"."),"\n",l.createElement(n.p,null,"You have either:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"out-of-date source repos which you can update with ",l.createElement(n.code,null,"pod repo update")," or with ",l.createElement(n.code,null,"pod install --repo-update"),"."),"\n",l.createElement(n.li,null,"mistyped the name or version."),"\n",l.createElement(n.li,null,"not added the source repo that hosts the Podspec to your Podfile."),"\n"),"\n"),l.createElement(n.p,null,"에러 내용을 자세히 안 봐서 좀 해멨는데 결국 repo update 를 해주면 될 일이었다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ pod install --repo-update</code></pre></div>'}}),l.createElement(n.p,null,"앗 그래도 에러가 나네?"),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle, 0x0009): tried: '/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle' (mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')), '/usr/lib/ffi_c.bundle' (no such file) - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/lib/ffi_c.bundle"),"\n"),l.createElement(n.p,null,"그럼 아래처럼 해주면 되겠다. (아마도 M1 프로세서 한정)"),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ arch -x86_64 pod install --repo-update</code></pre></div>'}}),l.createElement(n.h2,{id:"안드로이드",style:{position:"relative"}},l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C","aria-label":"안드로이드 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"안드로이드"),l.createElement(n.h3,{id:"1-error-unexpected-token-name-_890_340-expected-punc-",style:{position:"relative"}},l.createElement(n.a,{href:"#1-error-unexpected-token-name-_890_340-expected-punc-","aria-label":"1 error unexpected token name _890_340 expected punc  permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Error: Unexpected token name «_890_340», expected punc «,»"),l.createElement(n.p,null,"자바스크립트는 긴 숫자의 가독성을 위해 ",l.createElement(n.a,{href:"https://v8.dev/features/numeric-separators"},"1_890_340 같은 형식의 문법을 제공"),"한다. 그런데 이게 RN 안드로이드 환경에서는 에러를 발생시킨다."),l.createElement(n.p,null,'"_"를 지우니 에러가 발생하지 않았다. 내 더미 데이터의 가독성은 떨어졌지만 어차피 더미 데이터니까, 빨리 프로젝트에서 삭제할 날이 오기를 기도하기로 하자.')),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#ios"},"iOS"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-undefined-symbol-_objc_class__stocknewsdmmanager"},"1. Undefined symbol: _OBJC_CLASS_$_StockNewsdmManager")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-mach-o-file-but-is-an-incompatible-architecture-have-x86_64-need-arm64e"},"2. mach-o file, but is an incompatible architecture (have 'x86_64', need 'arm64e')")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C"},"안드로이드"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-error-unexpected-token-name-_890_340-expected-punc-"},"1. Error: Unexpected token name «_890_340», expected punc «,»")),"\n"),"\n"),"\n")))}var r,i,c,s,d=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},m=t(1880),u=t(3723),p=t(6758),h=t(3904),g=t(891),b=t(5534),f=t(5777),x=t(7178),v=t(2889),E=t(5924);function w(e){let{data:n,children:a}=e;const o=l.useRef(),{frontmatter:r,sameSeriesPosts:i}=n.mdx,{title:c,slug:s,date:d,tags:m,series:h,heroImage:g,heroImageAlt:b}=r,w=g?(0,u.c)(g):null;return l.useEffect((()=>{var e;const n=null===(e=o.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .mh h6"),t=new IntersectionObserver((()=>(0,E.Z)(o,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(p.Z,null,l.createElement(k,null,l.createElement("h1",null,c),l.createElement(_,null,d),l.createElement(v.Z,{tags:m})),l.createElement(x.Z,{name:h,data:i,current:s}),l.createElement(y,null,w?l.createElement(u.G,{image:w,alt:null!=b?b:""}):l.createElement(u.S,{src:"../../images/defaultThumbnail.jpeg",alt:"by ricale",__imageData:t(5076)})),l.createElement(S,{ref:o},a),l.createElement(f.Z,null))}const k=g.ZP.div(r||(r=(0,m.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=g.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n"]))),_=g.ZP.div(c||(c=(0,m.Z)(["\n  margin: 16px 0;\n"]))),S=(0,g.ZP)(b.Z)(s||(s=(0,m.Z)(["\n  margin-bottom: 60px;\n"]))),A=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:o,slug:r,tags:i,heroImage:c,previewContent:s},excerpt:d}=a.mdx,m=c?(0,u.c)(c):null;return l.createElement(h.Z,{title:o,description:null!=s?s:d,path:"posts/"+r,thumbnail:null==m||null===(n=m.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function C(e){return l.createElement(w,e,l.createElement(d,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l,o=t(5785),r=t(1880),i=t(891);const c=i.ZP.div(a||(a=(0,r.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding: 8px;\n        border-left: 1px solid #ddd;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,o.Z)(new Array(30)).map(((e,n)=>(0,i.iv)(l||(l=(0,r.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=c},7178:function(e,n,t){var a,l,o,r,i,c=t(1880),s=t(7294),d=t(1883),m=t(891);const u=m.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),p=m.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),h=m.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=m.ZP.li(r||(r=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,m.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,o]=s.useState(!0);return t?s.createElement(u,null,s.createElement(p,{collapsed:l,onClick:()=>o((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(d.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!l&&s.createElement(h,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(g,{active:n===a,key:n},s.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return u}});var a,l=t(1880),o=t(7294),r=t(891),i=t(1883);const c=(0,r.ZP)(i.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,d=function(e){let{value:n}=e;return o.createElement(c,{to:"/tags/"+n},n)};const m=r.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var u=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(m,a,l.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(d,{value:e.fieldValue}),t&&!!e.totalCount&&o.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,o;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let i;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var c;i=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===i&&(i=n[n.length-1]),null===(o=e.current)||void 0===o||o.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),i){var s;const n=i.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(s=e.current)||void 0===s?void 0:s.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},5076:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220516-react-native-build-error-3-index-mdx-9aac925b7da14bda0aec.js.map