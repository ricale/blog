"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9669],{3245:function(e,n,t){t.r(n),t.d(n,{Head:function(){return Z},default:function(){return B}});var a=t(1151),l=t(7294);function o(e){const n=Object.assign({div:"div",h3:"h3",a:"a",p:"p",button:"button",blockquote:"blockquote",ul:"ul",li:"li"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h3,{id:"발단-및-전개",style:{position:"relative"}},l.createElement(n.a,{href:"#%EB%B0%9C%EB%8B%A8-%EB%B0%8F-%EC%A0%84%EA%B0%9C","aria-label":"발단 및 전개 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"발단 및 전개"),l.createElement(n.p,null,"React Native 를 활용해 토이 프로젝트를 진행하고 있다. Firebase 의 Authentication 기능을 활용해 구글 로그인을 붙였다. 이전에도 써 본 기능이었기 때문에 별다른 어려움은 없었다. 로컬의 개발 환경에서 잘 동작하는 것을 확인하고, 프로덕션 환경으로도 테스트해보았다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token assign-left variable">ENVFILE</span><span class="token operator">=</span>.env.production react-native run-android <span class="token parameter variable">--variant</span><span class="token operator">=</span>release</code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"아무런 문제가 없었다. 그래서 프로덕션 환경으로 빌드를 해서 aab 파일을 구글 플레이 콘솔에 올렸다. 그런데, 로그인이 되지 않는다면서 심사가 반려되었다."),l.createElement(n.p,null,"다시 로컬에서 프로덕션 환경으로 실행해봤다. 여전히 잘 되었다. 뭐지? 이번에는 구글 플레이 콘솔에 들어가 내가 올린 파일을 다운로드했다. 어라? 로그인이 되지 않았다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Error: DEVELOPER_ERROR"),"\n"),l.createElement(n.p,null,"이 에러는 익히 잘 알고 있다. Firebase 콘솔에 내 안드로이드 앱의 SHA-1 키를 등록하지 않았을 때 발생하는 인증 에러다. 하지만 이상하다. 나는 분명히 키를 등록했다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/922a45e90e03c3803e3a014e565fbd0e/757fd/001.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 72%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAClUlEQVR42nVT30tUQRgdqEQIodIehND8kZtuGoq1P3Tv3aVVlqDSFImgHoMItIiKwoKosJeg5/6H/pKeegzJ1NWESta79+6dOzP3zmlmdtfWDQcOZ+bbmXO/73zfknh8RA5fvITRsUmZmsijUJhBJpOHZeVh21OwFWftaQPbqp6TCQtjY0nDqVQW6XRO5nIFZKwpSTovJNE1Pi3JyRhu33uM7fUNfFtdw9qPTRS3trFZPASbW4aLWz+xtl7E6vcNqc/kVDwnO4avgJwekSsfPwEiQNn1wXiIgIl9ru7/h44LISQXob4ryZnxq+hN30BrbxrP3nyAlBKu64IFVCFAoJkxdZmrx0ydD4Kr2OcvLr6uVyBYAHLensdw/hbaYhaWXryDXju7Ln6VAjiegFMJ4Xk+yk4JXIlGYWgQNsCjAp7P4VMleG5yFjFrDke7E3j08r0R/OP42HW4EhNw/VAJB9j57cBVwq6v4ww04KpUrj4ilCg3FVR8CtI5WsDZ5DVT8sPlFSMYUIpQMAjODGufKIsQRlI9jBDw6r5xaT9Le2WQ/olZaBzpuryfoe/XfFPQZeoPUL9i9tzEGKIoMn7XwY2gAzJoL2Aot4BjquTFmoc+bRI0zQnQvBpz5PUM+9KzGMjM4Xh/Bg+evja3qDK3WdDzPJMVGrLSK6w1SY+NybAnNQMt2hbLYvH5W/PggKCC8FzwcgnM2VPsKOwZhG7Z/K5FOa8LJq7LgcmbaOlOyftPDsmQqQ5SrhokDKI66+yqXsqqYFmS9nhWnhi0QNqH5J3FZVMGrXmozdcQYQQR/fNLqA43NVnWmiJJa18SLT0JSTriuLv0Sles5q2CSoWaudLQA6v/FZopZWqIAxWv7uvwKZP6zV8qP6a20PhXDgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="001"\n        title=""\n        src="/blog/static/922a45e90e03c3803e3a014e565fbd0e/5a190/001.png"\n        srcset="/blog/static/922a45e90e03c3803e3a014e565fbd0e/772e8/001.png 200w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/e17e5/001.png 400w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/5a190/001.png 800w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/c1b63/001.png 1200w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/29007/001.png 1600w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/757fd/001.png 2800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(n.p,null,"(분명 키는 등록되어있다.)"),l.createElement(n.p,null,"뭘 잘못한 것일까? 잘못된 키를 등록한 것일까? Gradle 의 기능을 활용해 다시 키값을 확인해봤다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">./gradlew signReport</code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"동일한 키값이 나온다. 이번엔 keytool 로 확인해보자."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">keytool <span class="token parameter variable">-list</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-keystore</span> <span class="token punctuation">{</span>keystore_name<span class="token punctuation">}</span> <span class="token parameter variable">-alias</span> <span class="token punctuation">{</span>alias_name<span class="token punctuation">}</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.p,null,"마찬가지의 키 값이 나온다."),l.createElement(n.p,null,"어떻게 된 거지? 구글링을 해봐도 거의 대부분 키를 등록하지 않았던 사람들의 이야기 뿐이었다."),l.createElement(n.h3,{id:"해결",style:{position:"relative"}},l.createElement(n.a,{href:"#%ED%95%B4%EA%B2%B0","aria-label":"해결 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"해결"),l.createElement(n.p,null,"그렇게 몇 시간을 헤메다가 결국 ",l.createElement(n.a,{href:"https://github.com/react-native-google-signin/google-signin/issues/823#issuecomment-606271524"},"나와 동일한 현상의 글"),"을 찾을 수 있었다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Everything worked swimmingly with debug builds (we generated SHA1 hashes of our local dev keystore) and everything worked great with release APKs that we were installing directly to device (we generated a SHA1 hash of our production key to get this to work). However, when generating an AAB and uploading to the Beta channel and trying this version, we would get the nefarious DEVELOPER_ERROR."),"\n",l.createElement(n.p,null,'The fix? I went into the PlayStore console and found a tab named "App Signing" under "Release management" There, I found yet another SHA1 which I then put into our Google Console account. After that, everything worked.'),"\n"),l.createElement(n.p,null,"간단히 말하자면, .aab 파일로 빌드해서 구글 플레이 콘솔에 올리면 구글 측에서 앱을 한 번더 서명하기 때문에, 플레이 콘솔에서 서명 키 값을 가져와야 한다는 것이었다."),l.createElement(n.p,null,"이제야 비밀이 풀렸다. 그래서 로컬에서 프로덕션 환경으로 실행해봤을 때는 잘 되었던 것이다. 구글이 서명을 한 번 더 하기 전이니까."),l.createElement(n.p,null,"좋다. 이제 구글 플레이 콘솔에서 키값을 가져오자."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/c903b5905854506fb0f582ff6b86d21b/757fd/002.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAADhAAAA4QAGksAzQAAABzElEQVR42pWSWU4bQRCG5y5gHMAQEHkJUSSQ8pLTkhNEkYi8jcEhVwDjScwsnt5m6/5TVYN5T0v/VFcvX1VXTXR2cuovPlzi+upr+PzpC87PPuLo8D2GBycYDI5FB4PRm3b+YP8Y+3tH4g+Hp2E0usC7w3MfTWcLfP9xGyaTKebxAvHiDuPpHLc/xxhPZpjOYtIcE7Ii2uO15fIXHh5+Y0bzm5tviONFuLtfIuq8D1Vdg0bgT9M0WCcJ0izDf4yws5FzDlVVoes6kbEWL2mKPM9hae5chbr1CN7Ds0Lo5UPvk+06j7ZtiVMj4g+DQuiDlGWJx8cnJJSl1lqgVeXgKGhNctaQLCztOdmrUdMLGdg0LSKtDUHUW+68qI0VgDH9nrU90JHvlILTCpXRqAnIsIZgDKypXARUyKhevCBAumRzqh9lzcMQLMsL5MUWGSnflqItJaIosLYsJ2scNCpURQeVRBIgHTBFjq7pfUUXN2mGlyzvtZuTTckyqKBXcDABZtsGf5ISygW4BpI+QziANImy4EZZag5ny7KvVuaul5Hn05O5QwXR6feRjLgJT6sVVqtnrNcJ/m424DorpaWmHEBpLZbP8lr3Wh5O5h9IMs9IrTXcWQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="002"\n        title=""\n        src="/blog/static/c903b5905854506fb0f582ff6b86d21b/5a190/002.png"\n        srcset="/blog/static/c903b5905854506fb0f582ff6b86d21b/772e8/002.png 200w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/e17e5/002.png 400w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/5a190/002.png 800w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/c1b63/002.png 1200w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/29007/002.png 1600w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/757fd/002.png 2800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(n.p,null,"Firebase 콘솔로 돌아가 키값을 입력해보자. 좋다. 이제 에러가 없어졌다."),l.createElement(n.h3,{id:"결론",style:{position:"relative"}},l.createElement(n.a,{href:"#%EA%B2%B0%EB%A1%A0","aria-label":"결론 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"결론"),l.createElement(n.p,null,".aab 파일로 빌드한다면, 구글 플레이 콘솔에서 SHA-1 키값을 찾아내서 Firebase 콘솔에 입력해주자.")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EB%B0%9C%EB%8B%A8-%EB%B0%8F-%EC%A0%84%EA%B0%9C"},"발단 및 전개")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%ED%95%B4%EA%B2%B0"},"해결")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#%EA%B2%B0%EB%A1%A0"},"결론")),"\n")))}var r,i,c,s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},d=t(1880),p=t(3723),g=t(6758),m=t(3904),u=t(891),b=t(6120),h=t(5777),f=t(7178),v=t(2889),E=t(5924),x=t(7466);function w(e){let{data:n,children:t}=e;const a=l.useRef(),{frontmatter:o,sameSeriesPosts:r}=n.mdx,{title:i,slug:c,date:s,tags:d,series:p,heroImage:m,heroImageAlt:u}=o;return l.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,E.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(g.Z,null,l.createElement(y,null,l.createElement("h1",null,i),l.createElement(k,null,s),l.createElement(v.Z,{tags:d})),l.createElement(f.Z,{name:p,data:r,current:c}),l.createElement(x.Z,{data:m,alt:u}),l.createElement(A,{ref:a},t),l.createElement(h.Z,null))}const y=u.ZP.div(r||(r=(0,d.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),k=u.ZP.div(i||(i=(0,d.Z)(["\n  margin: 16px 0;\n"]))),A=(0,u.ZP)(b.Z)(c||(c=(0,d.Z)(["\n  margin-bottom: 60px;\n"]))),Z=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:o,slug:r,tags:i,heroImage:c,previewContent:s},excerpt:d}=a.mdx,g=c?(0,p.c)(c):null;return l.createElement(m.Z,{title:o,description:null!=s?s:d,path:"posts/"+r,thumbnail:null==g||null===(n=g.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function B(e){return l.createElement(w,e,l.createElement(s,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},6120:function(e,n,t){t.d(n,{Z:function(){return x}});var a,l=t(1880),o=t(891);var r,i=(0,o.iv)(a||(a=(0,l.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder));var c,s=(0,o.iv)(r||(r=(0,l.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: #666666;\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: #dddddd;\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n      }\n    }\n  }\n'])));var d,p=(0,o.iv)(c||(c=(0,l.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])));var g,m=(0,o.iv)(d||(d=(0,l.Z)(["\n  img {\n    border: 1px solid #333333;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])));var u,b,h=(0,o.iv)(g||(g=(0,l.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]))),f=t(5785);var v,E=(0,o.iv)(u||(u=(0,l.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(0,f.Z)(new Array(30)).map(((e,n)=>(0,o.iv)(b||(b=(0,l.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400);var x=o.ZP.div(v||(v=(0,l.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n"])),p,h,m,E,s,i,(e=>e.theme.colors.code),(e=>e.theme.colors.onCode))},7466:function(e,n,t){var a,l=t(1880),o=t(7294),r=t(3723);const i=t(891).ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const l=n?(0,r.c)(n):null,c=n?null!=a?a:"PostImage":"by ricale";return o.createElement(i,null,l?o.createElement(r.G,{image:l,alt:c}):o.createElement(r.S,{src:"../images/defaultThumbnail.jpeg",alt:c,__imageData:t(6955)}),o.createElement("p",null,c))}},7178:function(e,n,t){var a,l,o,r,i,c=t(1880),s=t(7294),d=t(1883),p=t(891);const g=p.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),m=p.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),u=p.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),b=p.ZP.li(r||(r=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,p.iv)(i||(i=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,o]=s.useState(!0);return t?s.createElement(g,null,s.createElement(m,{collapsed:l,onClick:()=>o((e=>!e))},s.createElement("h2",null,"시리즈 ",s.createElement(d.Link,{to:"/series/"+n+"/"},'"'+n+'"')),s.createElement("span",null,"▲")),!l&&s.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return s.createElement(b,{active:n===a,key:n},s.createElement(d.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return g}});var a,l=t(1880),o=t(7294),r=t(891),i=t(1883);const c=(0,r.ZP)(i.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var s,d=function(e){let{value:n}=e;return o.createElement(c,{to:"/tags/"+n},n)};const p=r.ZP.ul(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var g=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return o.createElement(p,a,l.map((e=>o.createElement("li",{key:e.fieldValue},o.createElement(d,{value:e.fieldValue}),t&&!!e.totalCount&&o.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,o;if(!n)return;const r=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let i;for(let t=0;t<n.length;t++)if(n[t].offsetTop>r){var c;i=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===i&&(i=n[n.length-1]),null===(o=e.current)||void 0===o||o.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),i){var s;const n=i.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(s=e.current)||void 0===s?void 0:s.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/blog/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/blog/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211118-firbase-authentication-issue-in-production-index-mdx-202ef7002134cc0c495e.js.map