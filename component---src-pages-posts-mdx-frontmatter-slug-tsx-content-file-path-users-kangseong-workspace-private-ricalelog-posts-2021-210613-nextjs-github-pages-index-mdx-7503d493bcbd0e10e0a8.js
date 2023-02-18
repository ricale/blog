"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[6594],{459:function(e,n,t){t.r(n),t.d(n,{Head:function(){return w},default:function(){return S}});var a=t(1151),l=t(7294);function s(e){const n=Object.assign({div:"div",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ol:"ol",li:"li",ul:"ul"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.div,{className:"md"},l.createElement(n.p,null,"간단한 프로토타이핑 공유를 위해, Next.js로 구현한 웹앱을 GitHub Pages에 배포하기로 했다."),l.createElement(n.p,null,l.createElement(n.a,{href:"https://taeny.dev/javascript/nextjs-with-deployment-platform/#3-netlify-vs-vercel"},"nextJS 뭘로 배포할까? (Netlify, Vercel, Github page)")," 문서를 보면 GitHub Pages는 물론이고 Netlify, Vercel 을 사용해 배포하는 방법과, 플랫폼간의 장단점까지 비교해 놓았다. 세 플랫폼에 모두 관심이 있다면 해당 글을 읽기를 권한다."),l.createElement(n.p,null,"이 글에서는 해당 글의 내용을 토대로 GitHub Pages에 배포하는 방법만 간략히 정리한다."),l.createElement(n.h2,{id:"1-배포-방법",style:{position:"relative"}},l.createElement(n.a,{href:"#1-%EB%B0%B0%ED%8F%AC-%EB%B0%A9%EB%B2%95","aria-label":"1 배포 방법 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 배포 방법"),l.createElement(n.p,null,l.createElement(n.a,{href:"https://taeny.dev/javascript/nextjs-with-deployment-platform/#5--github-page-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"},"위 문서"),"에서는 아래의 명령어를 ",l.createElement(n.code,null,"package.json"),"에 등록해놓고 사용하라고 안내하고 있다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token string-property property">"deploy"</span><span class="token operator">:</span> <span class="token string">"rm -rf node_modules/.cache &amp;&amp; next build &amp;&amp; next export &amp;&amp; touch out/.nojekyll &amp;&amp; git add out/ &amp;&amp; git commit -m \\"Deploy Next.js to gh-pages\\" &amp;&amp; git subtree push --prefix out origin gh-pages"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre></div>'}}),l.createElement(n.p,null,"명령어를 하나하나 살펴보면 아래와 같다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules/.cache\nnext build\nnext <span class="token builtin class-name">export</span>\n<span class="token function">touch</span> out/.nojekyll\n<span class="token function">git</span> <span class="token function">add</span> out/\n<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Deploy Next.js to gh-pages"</span>\n<span class="token function">git</span> subtree push <span class="token parameter variable">--prefix</span> out origin gh-pages</code></pre></div>'}}),l.createElement(n.p,null,"(각 명령어에 관한 설명은 ",l.createElement(n.a,{href:"https://taeny.dev/javascript/nextjs-with-deployment-platform/#5--github-page-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"},"원 문서"),"에 잘 되어있으므로 여기서는 생략하겠다.)"),l.createElement(n.p,null,"대부분의 경우 위 명령어를 그대로 써도 문제가 없겠지만, 개인적으로는 이슈가 몇 개 있었다."),l.createElement(n.h2,{id:"2-이슈",style:{position:"relative"}},l.createElement(n.a,{href:"#2-%EC%9D%B4%EC%8A%88","aria-label":"2 이슈 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 이슈"),l.createElement(n.h3,{id:"21-빌드-결과물을-git-스테이지에-추가",style:{position:"relative"}},l.createElement(n.a,{href:"#21-%EB%B9%8C%EB%93%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BC%EC%9D%84-git-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%B6%94%EA%B0%80","aria-label":"21 빌드 결과물을 git 스테이지에 추가 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.1. 빌드 결과물을 git 스테이지에 추가"),l.createElement(n.p,null,"위에서는 ",l.createElement(n.code,null,"git add out/")," 명령어를 통해 빌드한 결과물을 git의 스테이지에 추가한다. 하지만 일반적인 Next.js 프로젝트에서 ",l.createElement(n.code,null,"out/")," 디렉토리는 ",l.createElement(n.code,null,".gitignore"),"에 등록되어있기 때문에, 해당 명령어로는 스테이지에 추가되지 않는다."),l.createElement(n.p,null,"해결 방법은 해당 디렉토리를 ",l.createElement(n.code,null,".gitignore"),"에서 제외시키거나 ",l.createElement(n.code,null,"-f")," 옵션을 주어서 ",l.createElement(n.code,null,".gitignore"),"와 관계 없이 강제로 추가시키는 것이다."),l.createElement(n.p,null,"여기서는 ",l.createElement(n.code,null,"-f")," 옵션을 사용한다. 왜냐면 빌드할 때만 ",l.createElement(n.code,null,"out/")," 디렉토리를 스테이지에 포함시키고, 빌드 후에는 삭제할 생각이기 때문이다."),l.createElement(n.h3,{id:"22-커밋-및-푸시",style:{position:"relative"}},l.createElement(n.a,{href:"#22-%EC%BB%A4%EB%B0%8B-%EB%B0%8F-%ED%91%B8%EC%8B%9C","aria-label":"22 커밋 및 푸시 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.2. 커밋 및 푸시"),l.createElement(n.p,null,"위 문서에서는 아래 명령어를 사용해 빌드 결과를 커밋하고 푸시한다."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Deploy Next.js to gh-pages"</span>\n<span class="token function">git</span> subtree push <span class="token parameter variable">--prefix</span> out origin gh-pages</code></pre></div>'}}),l.createElement(n.p,null,"이 경우 ",l.createElement(n.code,null,"out/")," 디렉토리의 내용물을 ",l.createElement(n.code,null,"main"),"(혹은 ",l.createElement(n.code,null,"master"),") 브랜치에 계속 유지해야 한다. ",l.createElement(n.code,null,"out/")," 디렉토리 내용을 git 에서 계속 유지할 것이라면 문제 없다. 하지만 내 경우 ",l.createElement(n.code,null,"out/")," 디렉토리의 내용을 ",l.createElement(n.code,null,"main")," 브랜치에 유지하고 싶지 않았다. (유지하지 않는 편이 히스토리 관리에 더 좋다고 생각했다.) 내가 원하는 프로세스는 아래와 같다."),l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"git 스테이지에 임시로 ",l.createElement(n.code,null,"out/")," 디렉토리를 추가하고 커밋한다."),"\n",l.createElement(n.li,null,"해당 커밋을 가지고 ",l.createElement(n.code,null,"gh-pages")," 브랜치에 배포를 진행한다. (배포하면 ",l.createElement(n.code,null,"gh-pages")," 브랜치에 커밋이 새로 생성될 것이다.)"),"\n",l.createElement(n.li,null,"배포가 끝난 후 1번에서 추가했던 커밋을 삭제한다."),"\n"),l.createElement(n.p,null,"그럼 원하는 방향이 적용되게끔 명령어를 변경해보자."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token comment"># temp-for-deploy-gh-pages 브랜치를 생성한다.</span>\n<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> temp-for-deploy-gh-pages\n\n<span class="token comment"># 생성한 브랜치에 `out/` 디렉토리가 포함된 내용을 커밋한다.</span>\n<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Deploy Next.js to gh-pages"</span>\n\n<span class="token comment"># 해당 커밋을 사용해 `out/` 디렉토리만으로 로컬의 gh-pages 브랜치에 새로운 커밋을 만든다.</span>\n<span class="token function">git</span> subtree <span class="token function">split</span> <span class="token parameter variable">--prefix</span> out <span class="token parameter variable">-b</span> gh-pages\n\n<span class="token comment"># 로컬의 gh-pages를 강제로 gh-pages 에 푸시한다.</span>\n<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin gh-pages:gh-pages\n\n<span class="token comment"># 로컬의 gh-pages 브랜치를 삭제한다.</span>\n<span class="token function">git</span> branch <span class="token parameter variable">-D</span> gh-pages\n\n<span class="token comment"># temp-for-deploy-gh-pages 브랜치를 삭제한다.</span>\n<span class="token function">git</span> checkout main\n<span class="token function">git</span> branch <span class="token parameter variable">-D</span> temp-for-deploy-gh-pages</code></pre></div>'}}),l.createElement(n.p,null,l.createElement(n.code,null,"gh-pages"),"를 강제로 푸시하는 이유는 이미 원격에 ",l.createElement(n.code,null,"gh-pages")," 브랜치가 있을 경우, 새로운 커밋이 원격에 있는 기존의 커밋과 이어지지 않는 커밋이기 때문이다. (",l.createElement(n.code,null,"gh-pages"),"에 추가되는 커밋의 부모 커밋이 ",l.createElement(n.code,null,"main")," 브랜치 쪽에 유지되면, 이어지는 커밋으로 판단된다.)"),l.createElement(n.h2,{id:"3-이슈-해결-결과",style:{position:"relative"}},l.createElement(n.a,{href:"#3-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EA%B2%B0%EA%B3%BC","aria-label":"3 이슈 해결 결과 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. 이슈 해결 결과"),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules/.cache\nnext build\nnext <span class="token builtin class-name">export</span>\n<span class="token function">touch</span> out/.nojekyll\n<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-f</span> out/\n<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> temp-for-deploy-gh-pages\n<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"Deploy Next.js to gh-pages"</span>\n<span class="token function">git</span> subtree <span class="token function">split</span> <span class="token parameter variable">--prefix</span> out <span class="token parameter variable">-b</span> gh-pages\n<span class="token function">git</span> push <span class="token parameter variable">-f</span> origin gh-pages:gh-pages\n<span class="token function">git</span> branch <span class="token parameter variable">-D</span> gh-pages\n<span class="token function">git</span> checkout main\n<span class="token function">git</span> branch <span class="token parameter variable">-D</span> temp-for-deploy-gh-pages</code></pre></div>'}}),l.createElement(n.p,null,"위 명령어들을 연달아 쓰면 Next.js 앱을 GitHub Pages에 배포할 수 있다. 매번 치기 귀찮을 것이므로 ",l.createElement(n.code,null,"package.json"),"에 등록해두고 사용하자."),l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token string-property property">"deploy-gh-pages"</span><span class="token operator">:</span> <span class="token string">"rm -rf node_modules/.cache &amp;&amp; next build &amp;&amp; next export &amp;&amp; touch out/.nojekyll &amp;&amp; git add -f out/ &amp;&amp; git checkout -b temp-for-deploy-gh-pages &amp;&amp; git commit -m \\"Deploy Next.js to gh-pages\\" &amp;&amp; git subtree split --prefix out -b gh-pages &amp;&amp; git push -f origin gh-pages:gh-pages &amp;&amp; git branch -D gh-pages &amp;&amp; git checkout main &amp;&amp; git branch -D temp-for-deploy-gh-pages"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre></div>'}}),l.createElement(n.h2,{id:"4-주의",style:{position:"relative"}},l.createElement(n.a,{href:"#4-%EC%A3%BC%EC%9D%98","aria-label":"4 주의 permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. 주의"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,'위 내용은 어디까지나 "프로토타이핑 공유를 위한 GitHub Pages 배포"를 목적으로 하고 있다. 다른 목적으로 사용할 경우 적절하지 않을 수 있다.'),"\n",l.createElement(n.li,null,"환경변수와 관련된 내용은 이 문서에서 정리하지 않았다. 해당 내용은 ",l.createElement(n.a,{href:"https://taeny.dev/javascript/nextjs-with-deployment-platform/#5--github-page-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0"},"원 문서"),"에 잘 설명되어 있다."),"\n"),l.createElement(n.h2,{id:"references",style:{position:"relative"}},l.createElement(n.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://taeny.dev/javascript/nextjs-with-deployment-platform/#3-netlify-vs-vercel"},"nextJS 뭘로 배포할까? (Netlify, Vercel, Github page)")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b"},"tduarte/publish-ghpages.md")),"\n")),"\n",l.createElement(n.div,{className:"toc"},l.createElement(n.p,null,"목차"),l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#1-%EB%B0%B0%ED%8F%AC-%EB%B0%A9%EB%B2%95"},"1. 배포 방법")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#2-%EC%9D%B4%EC%8A%88"},"2. 이슈"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#21-%EB%B9%8C%EB%93%9C-%EA%B2%B0%EA%B3%BC%EB%AC%BC%EC%9D%84-git-%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%A7%80%EC%97%90-%EC%B6%94%EA%B0%80"},"2.1. 빌드 결과물을 git 스테이지에 추가")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#22-%EC%BB%A4%EB%B0%8B-%EB%B0%8F-%ED%91%B8%EC%8B%9C"},"2.2. 커밋 및 푸시")),"\n"),"\n"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#3-%EC%9D%B4%EC%8A%88-%ED%95%B4%EA%B2%B0-%EA%B2%B0%EA%B3%BC"},"3. 이슈 해결 결과")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#4-%EC%A3%BC%EC%9D%98"},"4. 주의")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"#references"},"References")),"\n")))}var o,r,c,i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(s,e)):s(e)},p=t(1880),m=t(3723),u=t(6758),d=t(3904),g=t(891),h=t(5534),f=t(5777),E=t(7178),b=t(2889),v=t(5924),k=t(7466);function x(e){let{data:n,children:t}=e;const a=l.useRef(),{frontmatter:s,sameSeriesPosts:o}=n.mdx,{title:r,slug:c,date:i,tags:p,series:m,heroImage:d,heroImageAlt:g}=s;return l.useEffect((()=>{var e;const n=null===(e=a.current)||void 0===e?void 0:e.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,v.Z)(a,n)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==n||n.forEach((e=>t.observe(e))),()=>t.disconnect()}),[]),l.createElement(u.Z,null,l.createElement(y,null,l.createElement("h1",null,r),l.createElement(B,null,i),l.createElement(b.Z,{tags:p})),l.createElement(E.Z,{name:m,data:o,current:c}),l.createElement(k.Z,{data:d,alt:g}),l.createElement(C,{ref:a},t),l.createElement(f.Z,null))}const y=g.ZP.div(o||(o=(0,p.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),B=g.ZP.div(r||(r=(0,p.Z)(["\n  margin: 16px 0;\n"]))),C=(0,g.ZP)(h.Z)(c||(c=(0,p.Z)(["\n  margin-bottom: 60px;\n"]))),w=e=>{var n,t;let{data:a}=e;const{frontmatter:{title:s,slug:o,tags:r,heroImage:c,previewContent:i},excerpt:p}=a.mdx,u=c?(0,m.c)(c):null;return l.createElement(d.Z,{title:s,description:null!=i?i:p,path:"posts/"+o,thumbnail:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:r,ogType:"article"})};function S(e){return l.createElement(x,e,l.createElement(i,e))}},5777:function(e,n,t){var a=t(7294);n.Z=function(){const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var n;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((e=>{let[n,a]=e;t.setAttribute(n,a)})),null===(n=e.current)||void 0===n||n.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:e})}},5534:function(e,n,t){var a,l,s=t(5785),o=t(1880),r=t(891);const c=r.ZP.div(a||(a=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      position: absolute;\n      top: -62px;\n      right: 8px;\n      z-index: 10;\n\n      padding: 8px;\n\n      background-color: #1a1a1a;\n\n      > p {\n        margin: 0;\n        font-size: 0.875rem;\n      }\n      > ul {\n        display: none;\n      }\n    }\n    > .toc:hover {\n      left: 8px;\n      padding: 16px;\n      > p {\n        margin: 0;\n        font-size: 1.125rem;\n      }\n      > ul {\n        display: block;\n        margin-top: 8px;\n        padding-left: 20px;\n        font-size: 1rem;\n        a {\n          color: #dddddd;\n        }\n        a > code {\n          color: #dddddd;\n        }\n        ul {\n          padding-left: 30px;\n        }\n      }\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid #aaaaaa;\n\n        white-space: nowrap;\n\n        a {\n          color: #aaaaaa;\n        }\n        a > code {\n          color: #aaaaaa;\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: #ffffff;\n        text-decoration: underline;\n        code {\n          color: #ffffff;\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: #aaaaaa;\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(0,s.Z)(new Array(30)).map(((e,n)=>(0,r.iv)(l||(l=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+10*(n+1),(1100+10*n-800)/2))),1400,(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode));n.Z=c},7466:function(e,n,t){var a,l=t(1880),s=t(7294),o=t(3723);const r=t(891).ZP.div(a||(a=(0,l.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n\n  & > p {\n    position: absolute;\n    right: 4px;\n    top: calc(100% - 4px);\n\n    font-size: 0.625rem;\n    color: #aaaaaa;\n  }\n"])));n.Z=function(e){let{data:n,alt:a}=e;const l=n?(0,o.c)(n):null,c=n?null!=a?a:"PostImage":"by ricale";return s.createElement(r,null,l?s.createElement(o.G,{image:l,alt:c}):s.createElement(o.S,{src:"../images/defaultThumbnail.jpeg",alt:c,__imageData:t(6955)}),s.createElement("p",null,c))}},7178:function(e,n,t){var a,l,s,o,r,c=t(1880),i=t(7294),p=t(1883),m=t(891);const u=m.ZP.div(a||(a=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #1a1a1a;\n"]))),d=m.ZP.div(l||(l=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(e=>e.collapsed?0:180)),g=m.ZP.ol(s||(s=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=m.ZP.li(o||(o=(0,c.Z)(["\n  ","\n"])),(e=>e.active&&(0,m.iv)(r||(r=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));n.Z=function(e){let{name:n,data:t,current:a}=e;const[l,s]=i.useState(!0);return t?i.createElement(u,null,i.createElement(d,{collapsed:l,onClick:()=>s((e=>!e))},i.createElement("h2",null,"시리즈 ",i.createElement(p.Link,{to:"/series/"+n+"/"},'"'+n+'"')),i.createElement("span",null,"▲")),!l&&i.createElement(g,null,t.map((e=>{let{frontmatter:{slug:n,title:t}}=e;return i.createElement(h,{active:n===a,key:n},i.createElement(p.Link,{to:"/posts/"+n},t))})))):null}},2889:function(e,n,t){t.d(n,{Z:function(){return u}});var a,l=t(1880),s=t(7294),o=t(891),r=t(1883);const c=(0,o.ZP)(r.Link)(a||(a=(0,l.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag));var i,p=function(e){let{value:n}=e;return s.createElement(c,{to:"/tags/"+n},n)};const m=o.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(e=>e.theme.dimens.gutter));var u=function(e){let{tags:n,showCount:t,...a}=e;const l="string"==typeof n[0]?n.map((e=>({fieldValue:e,totalCount:void 0}))):n;return s.createElement(m,a,l.map((e=>s.createElement("li",{key:e.fieldValue},s.createElement(p,{value:e.fieldValue}),t&&!!e.totalCount&&s.createElement("sup",null,""+e.totalCount)))))}},5924:function(e,n){const t="highlight";n.Z=function(e,n){var a,l,s;if(!n)return;const o=document.documentElement.scrollTop+10-(null!==(a=null===(l=e.current)||void 0===l?void 0:l.offsetTop)&&void 0!==a?a:0);let r;for(let t=0;t<n.length;t++)if(n[t].offsetTop>o){var c;r=null!==(c=n[t-1])&&void 0!==c?c:null;break}if(void 0===r&&(r=n[n.length-1]),null===(s=e.current)||void 0===s||s.querySelectorAll(".highlight").forEach((e=>e.classList.remove(t))),r){var i;const n=r.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=n?n:"")+"']",l=null===(i=e.current)||void 0===i?void 0:i.querySelector(a);null==l||l.classList.add(t)}}},1151:function(e,n,t){t.d(n,{ah:function(){return s}});var a=t(7294);const l=a.createContext({});function s(e){const n=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}},6955:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg","srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/9cf73/defaultThumbnail.jpg 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/2e657/defaultThumbnail.jpg 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/530c7/defaultThumbnail.jpg 4032w","sizes":"(min-width: 4032px) 4032px, 100vw"},"sources":[{"srcSet":"/static/40a099e3bcfce50ec9b12c0a229336f1/6c158/defaultThumbnail.webp 1008w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/4aebe/defaultThumbnail.webp 2016w,\\n/static/40a099e3bcfce50ec9b12c0a229336f1/5065c/defaultThumbnail.webp 4032w","type":"image/webp","sizes":"(min-width: 4032px) 4032px, 100vw"}]},"width":4032,"height":1000}')}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210613-nextjs-github-pages-index-mdx-7503d493bcbd0e10e0a8.js.map