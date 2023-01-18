"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[9669],{3245:function(e,n,t){t.r(n),t.d(n,{Head:function(){return Z},default:function(){return I}});var a=t(1151),l=t(7294);function o(e){const n=Object.assign({h3:"h3",p:"p",div:"div",blockquote:"blockquote",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"발단 및 전개"),"\n",l.createElement(n.p,null,"React Native 를 활용해 토이 프로젝트를 진행하고 있다. Firebase 의 Authentication 기능을 활용해 구글 로그인을 붙였다. 이전에도 써 본 기능이었기 때문에 별다른 어려움은 없었다. 로컬의 개발 환경에서 잘 동작하는 것을 확인하고, 프로덕션 환경으로도 테스트해보았다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">$ <span class="token assign-left variable">ENVFILE</span><span class="token operator">=</span>.env.production react-native run-android <span class="token parameter variable">--variant</span><span class="token operator">=</span>release</code></pre></div>'}}),"\n",l.createElement(n.p,null,"아무런 문제가 없었다. 그래서 프로덕션 환경으로 빌드를 해서 aab 파일을 구글 플레이 콘솔에 올렸다. 그런데, 로그인이 되지 않는다면서 심사가 반려되었다."),"\n",l.createElement(n.p,null,"다시 로컬에서 프로덕션 환경으로 실행해봤다. 여전히 잘 되었다. 뭐지? 이번에는 구글 플레이 콘솔에 들어가 내가 올린 파일을 다운로드했다. 어라? 로그인이 되지 않았다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Error: DEVELOPER_ERROR"),"\n"),"\n",l.createElement(n.p,null,"이 에러는 익히 잘 알고 있다. Firebase 콘솔에 내 안드로이드 앱의 SHA-1 키를 등록하지 않았을 때 발생하는 인증 에러다. 하지만 이상하다. 나는 분명히 키를 등록했다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/922a45e90e03c3803e3a014e565fbd0e/757fd/001.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 72%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAClUlEQVR42nVT30tUQRgdqEQIodIehND8kZtuGoq1P3Tv3aVVlqDSFImgHoMItIiKwoKosJeg5/6H/pKeegzJ1NWESta79+6dOzP3zmlmdtfWDQcOZ+bbmXO/73zfknh8RA5fvITRsUmZmsijUJhBJpOHZeVh21OwFWftaQPbqp6TCQtjY0nDqVQW6XRO5nIFZKwpSTovJNE1Pi3JyRhu33uM7fUNfFtdw9qPTRS3trFZPASbW4aLWz+xtl7E6vcNqc/kVDwnO4avgJwekSsfPwEiQNn1wXiIgIl9ru7/h44LISQXob4ryZnxq+hN30BrbxrP3nyAlBKu64IFVCFAoJkxdZmrx0ydD4Kr2OcvLr6uVyBYAHLensdw/hbaYhaWXryDXju7Ln6VAjiegFMJ4Xk+yk4JXIlGYWgQNsCjAp7P4VMleG5yFjFrDke7E3j08r0R/OP42HW4EhNw/VAJB9j57cBVwq6v4ww04KpUrj4ilCg3FVR8CtI5WsDZ5DVT8sPlFSMYUIpQMAjODGufKIsQRlI9jBDw6r5xaT9Le2WQ/olZaBzpuryfoe/XfFPQZeoPUL9i9tzEGKIoMn7XwY2gAzJoL2Aot4BjquTFmoc+bRI0zQnQvBpz5PUM+9KzGMjM4Xh/Bg+evja3qDK3WdDzPJMVGrLSK6w1SY+NybAnNQMt2hbLYvH5W/PggKCC8FzwcgnM2VPsKOwZhG7Z/K5FOa8LJq7LgcmbaOlOyftPDsmQqQ5SrhokDKI66+yqXsqqYFmS9nhWnhi0QNqH5J3FZVMGrXmozdcQYQQR/fNLqA43NVnWmiJJa18SLT0JSTriuLv0Sles5q2CSoWaudLQA6v/FZopZWqIAxWv7uvwKZP6zV8qP6a20PhXDgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="001"\n        title=""\n        src="/blog/static/922a45e90e03c3803e3a014e565fbd0e/5a190/001.png"\n        srcset="/blog/static/922a45e90e03c3803e3a014e565fbd0e/772e8/001.png 200w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/e17e5/001.png 400w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/5a190/001.png 800w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/c1b63/001.png 1200w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/29007/001.png 1600w,\n/blog/static/922a45e90e03c3803e3a014e565fbd0e/757fd/001.png 2800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"(분명 키는 등록되어있다.)"),"\n",l.createElement(n.p,null,"뭘 잘못한 것일까? 잘못된 키를 등록한 것일까? Gradle 의 기능을 활용해 다시 키값을 확인해봤다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ ./gradlew signReport</code></pre></div>'}}),"\n",l.createElement(n.p,null,"동일한 키값이 나온다. 이번엔 keytool 로 확인해보자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">$ keytool -list -v -keystore {keystore_name} -alias {alias_name}</code></pre></div>'}}),"\n",l.createElement(n.p,null,"마찬가지의 키 값이 나온다."),"\n",l.createElement(n.p,null,"어떻게 된 거지? 구글링을 해봐도 거의 대부분 키를 등록하지 않았던 사람들의 이야기 뿐이었다."),"\n",l.createElement(n.h3,null,"해결"),"\n",l.createElement(n.p,null,"그렇게 몇 시간을 헤메다가 결국 ",l.createElement(n.a,{href:"https://github.com/react-native-google-signin/google-signin/issues/823#issuecomment-606271524"},"나와 동일한 현상의 글"),"을 찾을 수 있었다."),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Everything worked swimmingly with debug builds (we generated SHA1 hashes of our local dev keystore) and everything worked great with release APKs that we were installing directly to device (we generated a SHA1 hash of our production key to get this to work). However, when generating an AAB and uploading to the Beta channel and trying this version, we would get the nefarious DEVELOPER_ERROR."),"\n",l.createElement(n.p,null,'The fix? I went into the PlayStore console and found a tab named "App Signing" under "Release management" There, I found yet another SHA1 which I then put into our Google Console account. After that, everything worked.'),"\n"),"\n",l.createElement(n.p,null,"간단히 말하자면, .aab 파일로 빌드해서 구글 플레이 콘솔에 올리면 구글 측에서 앱을 한 번더 서명하기 때문에, 플레이 콘솔에서 서명 키 값을 가져와야 한다는 것이었다."),"\n",l.createElement(n.p,null,"이제야 비밀이 풀렸다. 그래서 로컬에서 프로덕션 환경으로 실행해봤을 때는 잘 되었던 것이다. 구글이 서명을 한 번 더 하기 전이니까."),"\n",l.createElement(n.p,null,"좋다. 이제 구글 플레이 콘솔에서 키값을 가져오자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/c903b5905854506fb0f582ff6b86d21b/757fd/002.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAADhAAAA4QAGksAzQAAABzElEQVR42pWSWU4bQRCG5y5gHMAQEHkJUSSQ8pLTkhNEkYi8jcEhVwDjScwsnt5m6/5TVYN5T0v/VFcvX1VXTXR2cuovPlzi+upr+PzpC87PPuLo8D2GBycYDI5FB4PRm3b+YP8Y+3tH4g+Hp2E0usC7w3MfTWcLfP9xGyaTKebxAvHiDuPpHLc/xxhPZpjOYtIcE7Ii2uO15fIXHh5+Y0bzm5tviONFuLtfIuq8D1Vdg0bgT9M0WCcJ0izDf4yws5FzDlVVoes6kbEWL2mKPM9hae5chbr1CN7Ds0Lo5UPvk+06j7ZtiVMj4g+DQuiDlGWJx8cnJJSl1lqgVeXgKGhNctaQLCztOdmrUdMLGdg0LSKtDUHUW+68qI0VgDH9nrU90JHvlILTCpXRqAnIsIZgDKypXARUyKhevCBAumRzqh9lzcMQLMsL5MUWGSnflqItJaIosLYsJ2scNCpURQeVRBIgHTBFjq7pfUUXN2mGlyzvtZuTTckyqKBXcDABZtsGf5ISygW4BpI+QziANImy4EZZag5ny7KvVuaul5Hn05O5QwXR6feRjLgJT6sVVqtnrNcJ/m424DorpaWmHEBpLZbP8lr3Wh5O5h9IMs9IrTXcWQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="002"\n        title=""\n        src="/blog/static/c903b5905854506fb0f582ff6b86d21b/5a190/002.png"\n        srcset="/blog/static/c903b5905854506fb0f582ff6b86d21b/772e8/002.png 200w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/e17e5/002.png 400w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/5a190/002.png 800w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/c1b63/002.png 1200w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/29007/002.png 1600w,\n/blog/static/c903b5905854506fb0f582ff6b86d21b/757fd/002.png 2800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"Firebase 콘솔로 돌아가 키값을 입력해보자. 좋다. 이제 에러가 없어졌다."),"\n",l.createElement(n.h3,null,"결론"),"\n",l.createElement(n.p,null,".aab 파일로 빌드한다면, 구글 플레이 콘솔에서 SHA-1 키값을 찾아내서 Firebase 콘솔에 입력해주자."))}var r,i,s,c,g=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)},p=t(1880),d=t(1883),m=t(3723),u=t(1858),b=t(3904),h=t(891),f=t(5534),A=t(5777),E=t(7178);const v=e=>{let{data:n,children:t}=e;const{frontmatter:a,sameSeriesPosts:o}=n.mdx,{title:r,slug:i,date:s,tags:c,series:g,heroImage:p,heroImageAlt:b}=a,h=p?(0,m.c)(p):null;return l.createElement(u.Z,null,l.createElement(w,null,l.createElement("h1",null,r),l.createElement(x,null,s),l.createElement(k,null,c.map((e=>l.createElement("li",{key:e},l.createElement(d.rU,{to:"/tags/"+e},e)))))),l.createElement(E.Z,{name:g,data:o,current:i}),!!h&&l.createElement(y,{image:h,alt:null!=b?b:""}),l.createElement(f.Z,null,t),l.createElement(A.Z,null))},w=h.ZP.div(r||(r=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=(0,h.ZP)(m.G)(i||(i=(0,p.Z)(["\n  margin-bottom: 16px;\n"]))),x=h.ZP.div(s||(s=(0,p.Z)(["\n  margin: 16px 0;\n"]))),k=h.ZP.ul(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),Z=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:o,slug:r,tags:i,heroImage:s,previewContent:c},excerpt:g}=a.mdx,p=s?(0,m.c)(s):null;return l.createElement(b.Z,{title:o,description:null!=c?c:g,path:"posts/"+r,thumbnail:null==p||null===(n=p.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:i,ogType:"article"})};function I(e){return l.createElement(v,e,l.createElement(g,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l=t(1880);const o=t(891).ZP.div(a||(a=(0,l.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.5em;\n  }\n\n  h3 {\n    font-size: 1.25em;\n  }\n\n  h4 {\n    font-size: 1em;\n  }\n\n  h5 {\n    font-size: 0.875em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  pre {\n    margin-bottom: 16px;\n\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n"])),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=o},7178:function(e,n,t){var a,l,o,r,i,s=t(1880),c=t(7294),g=t(1883),p=t(891);const d=p.ZP.div(a||(a=(0,s.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),m=p.ZP.div(l||(l=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),u=p.ZP.ol(o||(o=(0,s.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),b=p.ZP.li(r||(r=(0,s.Z)(["\n  ","\n"])),(e=>e.active&&(0,p.iv)(i||(i=(0,s.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=e=>{let{name:n,data:t,current:a}=e;const[l,o]=c.useState(!0);return t?c.createElement(d,null,c.createElement(m,{collapsed:l,onClick:()=>o((e=>!e))},c.createElement("h2",null,"시리즈 ",c.createElement(g.rU,{to:"/series/"+n+"/"},'"'+n+'"')),c.createElement("span",null,"▲")),!l&&c.createElement(u,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return c.createElement(b,{active:n===a,key:n},c.createElement(g.rU,{to:"/posts/"+n},t))})))):null}},1151:function(e,n,t){t.d(n,{ah:function(){return o}});var a=t(7294);const l=a.createContext({});function o(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-211118-firbase-authentication-issue-in-production-index-mdx-9ee1f00a48a0faa26c59.js.map