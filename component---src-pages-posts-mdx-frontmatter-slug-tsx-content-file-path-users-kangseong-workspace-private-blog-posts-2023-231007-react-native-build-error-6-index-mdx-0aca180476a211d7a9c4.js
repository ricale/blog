"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[2198],{9333:function(e,n,a){a.r(n),a.d(n,{Head:function(){return N},default:function(){return S}});var t=a(1151),l=a(7294);function r(e){const n=Object.assign({div:"div",h3:"h3",a:"a",p:"p",code:"code",button:"button",ul:"ul",li:"li",br:"br",blockquote:"blockquote"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.h3,{id:"1-ios-no-template-named-unary_function-in-namespace-std-did-you-mean-__unary_function",style:{position:"relative"}},l.createElement(n.a,{href:"#1-ios-no-template-named-unary_function-in-namespace-std-did-you-mean-__unary_function","aria-label":"1 ios no template named unary_function in namespace std did you mean __unary_function permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. [iOS] no template named 'unary_function' in namespace 'std'; did you mean '__unary_function'?"),l.createElement(n.p,null,"Xcode 15 로 업데이트하면서 발생하기 시작한 에러다. ",l.createElement(n.code,null,"ios/Podfile")," 에 아래 코드를 추가해주면 된다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="rb"><pre class="language-rb"><code class="language-rb">post_install <span class="token keyword">do</span> <span class="token operator">|</span>installer<span class="token operator">|</span>\n  installer<span class="token punctuation">.</span>pods_project<span class="token punctuation">.</span>targets<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>target<span class="token operator">|</span>\n    target<span class="token punctuation">.</span>build_configurations<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>\n      config<span class="token punctuation">.</span>build_settings<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">\'GCC_PREPROCESSOR_DEFINITIONS\'</span></span><span class="token punctuation">]</span> <span class="token operator">||=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">\'$(inherited)\'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">\'_LIBCPP_ENABLE_CXX17_REMOVED_UNARY_BINARY_FUNCTION\'</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">end</span>\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span></code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY")),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"출처: ",l.createElement(n.a,{href:"https://github.com/facebook/react-native/issues/37748#issuecomment-1580589448"},"Build fails for Xcode 15 Beta 1 (and Beta 7)")),"\n"),l.createElement(n.h3,{id:"2-ios-cycle-inside-manta-building-could-produce-unreliable-results",style:{position:"relative"}},l.createElement(n.a,{href:"#2-ios-cycle-inside-manta-building-could-produce-unreliable-results","aria-label":"2 ios cycle inside manta building could produce unreliable results permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. [iOS] Cycle inside Manta; building could produce unreliable results."),l.createElement(n.p,null,"이것도 Xcode 15 로 업데이트하면서 발생하기 시작한 에러다.",l.createElement(n.br),"\n","(정확히는 1번 에러를 잡고 나니 발생했다.)",l.createElement(n.br),"\n","(검색해보면 Xcode 15 이전에도 발생한 사람들이 있긴 하다.)"),l.createElement(n.p,null,"상세 에러 메시지는 아래와 같다."),l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Cycle inside PROJECT_NAME; building could produce unreliable results."),"\n",l.createElement(n.p,null,"Cycle details:"),"\n",l.createElement(n.p,null,"→ Target 'PROJECT_NAME': ExtractAppIntentsMetadata"),"\n",l.createElement(n.p,null,"○ Target 'PROJECT_NAME': CodeSign /Users/USER_NAME/Library/Developer/Xcode/DerivedData/PROJECT_NAME-ejrtwkqpgvibqachrnmzabjwsgqc/Build/Products/Debug-iphoneos/PROJECT_NAME.app/Frameworks/AppLovinQualityService.framework"),"\n",l.createElement(n.p,null,"○ Target 'PROJECT_NAME' has copy command from '/Users/USER_NAME/workspace/PROJECT_NAME/app/ios/AppLovinQualityService/AppLovinQualityService.xcframework/ios-armv7_arm64/AppLovinQualityService.framework' to '/Users/USER_NAME/Library/Developer/Xcode/DerivedData/PROJECT_NAME-ejrtwkqpgvibqachrnmzabjwsgqc/Build/Products/Debug-iphoneos/PROJECT_NAME.app/Frameworks/AppLovinQualityService.framework'"),"\n",l.createElement(n.p,null,"○ That command depends on command in Target 'PROJECT_NAME': script phase “[CP-User] [RNFB] Core Configuration”"),"\n",l.createElement(n.p,null,"○ Target 'PROJECT_NAME' has process command with output '/Users/USER_NAME/Library/Developer/Xcode/DerivedData/PROJECT_NAME-ejrtwkqpgvibqachrnmzabjwsgqc/Build/Products/Debug-iphoneos/PROJECT_NAME.app/Info.plist'"),"\n",l.createElement(n.p,null,"○ Target 'PROJECT_NAME' has copy command from '/Users/USER_NAME/workspace/PROJECT_NAME/app/ios/AppLovinQualityService/AppLovinQualityService.xcframework/ios-armv7_arm64/AppLovinQualityService.framework' to '/Users/USER_NAME/Library/Developer/Xcode/DerivedData/PROJECT_NAME-ejrtwkqpgvibqachrnmzabjwsgqc/Build/Products/Debug-iphoneos/PROJECT_NAME.app/Frameworks/AppLovinQualityService.framework'"),"\n"),l.createElement(n.p,null,"내 경우 ",l.createElement(n.code,null,"AppLovinQualityService")," 라는 녀석이 순환 참조를 일으키는 것 같다. 중간에 \"That command depends on command in Target 'PROJECT_NAME': script phase “[CP-User] [RNFB] Core Configuration\" 라는 구문도 보인다."),l.createElement(n.p,null,"검색해보면 Xcode 의 Build Phase 순서를 변경해서 해결해줬다는 이야기가 있다. 나도 동일하게 시도해보았고"),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/15103/screenshot-2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.33333333333333%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAWtIAAFrSAGI6wCNAAACb0lEQVR42p2Te0/bMBTF+y3a2HFezaMtbV5FQLauSbpByigt1WCCFRDSkAAhoX1/gc90XdoNgTaJP46u7EQ/H597XZtPJ0/TgzH2q0pWVYWdLMN2OUHY34HnetjsZ+j3U0RRhDiO0W63EYYhNtMUURih027B9z3p+z42NrpPtcX8GBcH+3JW7WJvPIYXtKGbNrgwwDQNnDMYhqEkhIAwDLiWie2NCIFtwzBNmKZJ36Vl2qgVZSnzogDV4TBHrxvC4Aw65whaLXQ6HXiep2ArKFXLtFQlmGVZ0lRgQ9ZGoxFWKvICh4MhPsddtCwDcZIiTRIF1JRbrsRIjP2pz6LDFLAsSwXM8wK+H6DpODCEULm1Wi3lZAX7l+i/F8CiKKDrOur1ujqNmpCmqbr2u4G0SfYJTB0lh9RBWv8P+OrKBKRNyksXAt1eD70wRNN1X2T4LqApBPpJjH6awHddtSaXbNWUN/T2lYVAXdMQCI5hGiGLQ4Sei7RpoSM4BGewOYPJOax1Xe6L18B87dASAltJjO00wWYcoWebCHgDns7Q0TX4XEPAl5VksWVML8emKGA5HhzHVmDKzvN9+EEAx3XRYAwa59C4Dqbr68opDiFowBVQPg+2LIoSwjDB/xpWckvwk5PvOD+/xMXFJRaLc5ydLXB6+gPfvp1gNpvL8f4BdrKBrFFueZ5LqsPhEIKCZ2z5IhhDo9FQz+vh4Rdubu5we3eP29t7XF/f4OrqJ46OjjEaVSjKXbm19QG1yWTyOJ/PMZvN5HQ6heM4a3e2bSs1my4ms2NMDo9wOJ1jr/qKwacSZfkFWTYgyY+DHGGSPf4GhHPGWcbOiqEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="screenshot 2"\n        title=""\n        src="/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/7491f/screenshot-2.png"\n        srcset="/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/b8d62/screenshot-2.png 150w,\n/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/eed55/screenshot-2.png 300w,\n/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/7491f/screenshot-2.png 600w,\n/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/385f2/screenshot-2.png 900w,\n/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/8537d/screenshot-2.png 1200w,\n/blog/static/a0a4aea44c5c0592db6a96b2136fe9b3/15103/screenshot-2.png 2800w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(n.p,null,"에러는 사라졌다."),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"참고: ",l.createElement(n.a,{href:"https://developer.apple.com/forums/thread/730974"},'Xcode 15: "Cycle inside ...; building could produce unreliable results" due to DSTROOT=/')),"\n"),l.createElement(n.h3,{id:"3-공통-could-not-get-batchedbridge-make-sure-your-bundle-is-packaged-correctly",style:{position:"relative"}},l.createElement(n.a,{href:"#3-%EA%B3%B5%ED%86%B5-could-not-get-batchedbridge-make-sure-your-bundle-is-packaged-correctly","aria-label":"3 공통 could not get batchedbridge make sure your bundle is packaged correctly permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. [공통] Could not get BatchedBridge, make sure your bundle is packaged correctly"),l.createElement(n.p,null,"종종 뜨는 에러인데 매번 까먹는다. 아래처럼 metro 서버를 다시 실행하면 해결된다."),l.createElement(n.div,{className:"codeblock-container"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">$ <span class="token function">yarn</span> start --reset-cache</code></pre></div>'}}),l.createElement(n.button,{className:"codeblock-copy-button"},"COPY"))),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-ios-no-template-named-unary_function-in-namespace-std-did-you-mean-__unary_function"},"1. [iOS] no template named 'unary_function' in namespace 'std'; did you mean '__unary_function'?")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-ios-cycle-inside-manta-building-could-produce-unreliable-results"},"2. [iOS] Cycle inside Manta; building could produce unreliable results.")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#3-%EA%B3%B5%ED%86%B5-could-not-get-batchedbridge-make-sure-your-bundle-is-packaged-correctly"},"3. [공통] Could not get BatchedBridge, make sure your bundle is packaged correctly")),"\n")))}var s,c,o,i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},p=a(1880),d=a(1883),u=a(3723),m=a(9178),g=a(3904),b=a(891),h=a(3234),E=a(6117),v=a(5777),k=a(7178),y=a(5924),f=a(4742);function A(e){let{data:n,children:a}=e;const t=l.useRef(),{frontmatter:r,sameSeriesPosts:s}=n.mdx,{title:c,slug:o,date:i,series:p}=r;return l.useEffect((()=>{var e;const n=null===(e=t.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),a=new IntersectionObserver((()=>(0,y.Z)(t,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>a.observe(e))),()=>a.disconnect()}),[]),l.createElement(m.Z,null,l.createElement(_,null,l.createElement("h1",null,l.createElement(d.Link,{to:"/posts/"+o},c)),l.createElement(w,null,i)),l.createElement(k.Z,{name:p,data:s,current:o}),l.createElement(C,{ref:t},a),l.createElement(E.Z,{data:s,current:o}),l.createElement(f.Z,null),l.createElement(v.Z,null))}const _=b.ZP.div(s||(s=(0,p.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.onBackground)),w=b.ZP.div(c||(c=(0,p.Z)(["\n  margin-left: 2px;\n"]))),C=(0,b.ZP)(h.Z)(o||(o=(0,p.Z)(["\n  margin-bottom: 120px;\n"]))),N=e=>{var n,a;let{data:t}=e;const{frontmatter:{title:r,slug:s,tags:c,heroImage:o,previewContent:i},excerpt:p}=t.mdx,d=o?(0,u.c)(o):null;return l.createElement(g.Z,{title:r,description:null!=i?i:p,path:"posts/"+s,thumbnail:null==d||null===(n=d.images)||void 0===n||null===(a=n.fallback)||void 0===a?void 0:a.src,keywords:c,ogType:"article"})};function S(e){return l.createElement(A,e,l.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2023-231007-react-native-build-error-6-index-mdx-0aca180476a211d7a9c4.js.map