"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[8300],{1717:function(n,e,t){t.r(e),t.d(e,{Head:function(){return Z},default:function(){return z}});var a=t(1151),o=t(7294);function s(n){const e=Object.assign({div:"div",p:"p",code:"code",button:"button",a:"a",blockquote:"blockquote",em:"em",strong:"strong",hr:"hr",h3:"h3",ul:"ul",li:"li"},(0,a.ah)(),n.components);return o.createElement(o.Fragment,null,o.createElement(e.div,{className:"md"},o.createElement(e.p,null,"JavaScript 로 1 ~ n 까지의 숫자 배열을 만들고 싶어졌다. 쉽게 생각할 수 있는 방법은 새로운 n 크기의 배열을 만든 뒤 ",o.createElement(e.code,null,"map")," 메서드를 사용해 숫자를 1부터 n까지 채워 넣는 것이다."),o.createElement(e.div,{className:"codeblock-container"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),o.createElement(e.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(e.p,null,"하지만 위 코드의 결과는 우리가 예상한 것과 다르게 나온다."),o.createElement(e.div,{className:"codeblock-container"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [empty * 5]</span></code></pre></div>'}}),o.createElement(e.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(e.p,null,"순차적인 값이 들어가길 기대한 것과 달리, 배열의 모든 값은 여전히 비어있다. 왜일까? 버그일까? 아니다. ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#description"},"MDN의 Array.prototype.map 문서"),"를 보면 아래와 같은 내용이 나온다."),o.createElement(e.blockquote,null,"\n",o.createElement(e.p,null,o.createElement(e.code,null,"callback")," is invoked only for indexes of the array which have assigned values (including ",o.createElement(e.code,null,"undefined"),")."),"\n"),o.createElement(e.p,null,o.createElement(e.code,null,"map")," 메서드는 ",o.createElement(e.em,null,"값이 할당된 인덱스"),"에 대해서만 동작한다고 되어 있다. ",o.createElement(e.code,null,"new Array(n)"),"으로 생성된 배열은 모든 값이 비어있다. ",o.createElement(e.strong,null,o.createElement(e.code,null,"undefined"),"로도 채워져 있지 않다"),". 때문에 ",o.createElement(e.code,null,"map")," 메서드가 동작하지 않는 것이다."),o.createElement(e.p,null,"그렇다면 해결 방법은? 값을 채워준 뒤 ",o.createElement(e.code,null,"map")," 메서드를 사용하면 된다."),o.createElement(e.div,{className:"codeblock-container"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [1, 2, 3, 4, 5];</span></code></pre></div>'}}),o.createElement(e.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(e.p,null,"좀 더 ES6+스러운 코드도 있다."),o.createElement(e.div,{className:"codeblock-container"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [1, 2, 3, 4, 5];</span></code></pre></div>'}}),o.createElement(e.button,{className:"codeblock-copy-button"},"COPY")),o.createElement(e.hr),o.createElement(e.h3,{id:"references",style:{position:"relative"}},o.createElement(e.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},o.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,"Stack Overflow - ",o.createElement(e.a,{href:"https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness"},"JavaScript “new Array(n)” and “Array.prototype.map” weirdness")),"\n",o.createElement(e.li,null,"MDN Web Docs - ",o.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map()\n")),"\n")),"\n",o.createElement(e.div,{className:"toc"},o.createElement(e.p,null,"목차"),o.createElement(e.ul,null,"\n",o.createElement(e.li,null,o.createElement(e.a,{href:"#references"},"References")),"\n")))}var l,c,r,p=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?o.createElement(e,n,o.createElement(s,n)):s(n)},i=t(1880),u=t(1883),d=t(3723),m=t(6758),g=t(3904),h=t(891),k=t(3234),b=t(5777),f=t(7178),v=t(5924);function x(n){let{data:e,children:t}=n;const a=o.useRef(),{frontmatter:s,sameSeriesPosts:l}=e.mdx,{title:c,slug:r,date:p,series:i,heroImage:d,heroImageAlt:g}=s;return o.useEffect((()=>{var n;const e=null===(n=a.current)||void 0===n?void 0:n.querySelectorAll(".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"),t=new IntersectionObserver((()=>(0,v.Z)(a,e)),{rootMargin:"0px 0px -90% 0px",threshold:[0,1]});return null==e||e.forEach((n=>t.observe(n))),()=>t.disconnect()}),[]),o.createElement(m.Z,null,o.createElement(E,null,o.createElement("h1",null,o.createElement(u.Link,{to:"/posts/"+r},c)),o.createElement(y,null,p)),o.createElement(f.Z,{name:i,data:l,current:r}),o.createElement(w,{ref:a},t),o.createElement(b.Z,null))}const E=h.ZP.div(l||(l=(0,i.Z)(["\n  margin: 72px 0 84px;\n  padding: 0 32px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n\n    > a {\n      color: ",";\n    }\n  }\n"])),(n=>n.theme.colors.onBackground)),y=h.ZP.div(c||(c=(0,i.Z)(["\n  margin-left: 2px;\n"]))),w=(0,h.ZP)(k.Z)(r||(r=(0,i.Z)(["\n  margin-bottom: 60px;\n"]))),Z=n=>{var e,t;let{data:a}=n;const{frontmatter:{title:s,slug:l,tags:c,heroImage:r,previewContent:p},excerpt:i}=a.mdx,u=r?(0,d.c)(r):null;return o.createElement(g.Z,{title:s,description:null!=p?p:i,path:"posts/"+l,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(t=e.fallback)||void 0===t?void 0:t.src,keywords:c,ogType:"article"})};function z(n){return o.createElement(x,n,o.createElement(p,n))}},5777:function(n,e,t){var a=t(7294);e.Z=function(){const n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{var e;const t=document.createElement("script");Object.entries({src:"https://giscus.app/client.js","data-repo":"ricale/blog","data-repo-id":"R_kgDOIvqo5g","data-category":"Giscus","data-category-id":"DIC_kwDOIvqo5s4CT7fR","data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":"dark","data-lang":"ko",crossorigin:"anonymous",async:"true"}).forEach((n=>{let[e,a]=n;t.setAttribute(e,a)})),null===(e=n.current)||void 0===e||e.appendChild(t)}),[]),a.createElement("div",{id:"comments",ref:n})}},3234:function(n,e,t){t.d(e,{Z:function(){return y}});var a,o=t(1880),s=t(891);var l,c=(0,s.iv)(a||(a=(0,o.Z)(["\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n"])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder));var r,p=(0,s.iv)(l||(l=(0,o.Z)(['\n  pre[class*="language-"] {\n    margin: 0 0 16px;\n  }\n\n  code[class*="language-"] {\n    font-size: 0.85rem;\n  }\n\n  .gatsby-highlight-code-line {\n    display: block;\n\n    margin-left: -1em;\n    margin-right: -1em;\n    padding-top: 1.8px;\n    padding-bottom: 1.8px;\n    padding-left: 0.75em;\n    padding-right: 1em;\n    border-left: 0.25em solid ',";\n\n    background-color: ",";\n  }\n\n  .line-numbers .line-numbers-rows {\n    bottom: 0;\n    padding-top: 17.5px;\n    padding-left: 12px;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n  .codeblock-container {\n    position: relative;\n    padding-top: 0.1px;\n    .codeblock-title {\n      position: absolute;\n      top: 0px;\n      left: 8px;\n      z-index: 1;\n\n      padding: 2px 8px;\n\n      font-size: 0.875rem;\n      font-family: consolas, monospace;\n      background-color: ",";\n    }\n    .codeblock-copy-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n\n      padding: 4px 6px;\n      border: 0;\n\n      font-size: 0.75rem;\n      color: ",';\n      text-decoration: underline;\n\n      background-color: transparent;\n      cursor: pointer;\n    }\n    .codeblock-title + div pre[class*="language-"] {\n      margin-top: 8px;\n    }\n    .codeblock-title + div + .codeblock-copy-button {\n      top: 8px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    .codeblock-container {\n      padding-top: 0;\n      .codeblock-title {\n        position: static;\n        background-color: ',";\n      }\n    }\n  }\n"])),(n=>n.theme.colors.codeblockHighlightBorder),(n=>n.theme.colors.codeblockHighlight),(n=>n.theme.colors.codeblockTitle),(n=>n.theme.colors.codeblockCopyButtonLabel),(n=>n.theme.colors.codeblockTitleInMobile));var i,u=(0,s.iv)(r||(r=(0,o.Z)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid ",";\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n"])),(n=>n.theme.colors.headingBorder),(n=>n.theme.colors.headingBorder));var d,m=(0,s.iv)(i||(i=(0,o.Z)(["\n  img {\n    border: 1px solid ",";\n  }\n\n  .gatsby-resp-image-figure {\n    margin: 0 0 16px;\n    .gatsby-resp-image-wrapper {\n      margin-bottom: 0;\n    }\n    .gatsby-resp-image-figcaption {\n      margin-top: 4px;\n      text-align: center;\n      font-size: 0.875rem;\n      color: ",";\n    }\n  }\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n"])),(n=>n.theme.colors.imageBorder),(n=>n.theme.colors.imageCaptionText));var g,h=(0,s.iv)(d||(d=(0,o.Z)(["\n  ul,\n  ol {\n    margin-bottom: 16px;\n  }\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"])));var k,b,f=(0,s.iv)(g||(g=(0,o.Z)(["\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid ",";\n    }\n  }\n"])),(n=>n.theme.colors.tableBorder)),v=t(5785);var x,E=(0,s.iv)(k||(k=(0,o.Z)(["\n  > .md {\n    order: 1;\n  }\n\n  > .toc {\n    font-size: 0.875rem;\n    > ul {\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      ul {\n        list-style: none;\n      }\n    }\n  }\n  @media (max-width: 1099px) {\n    > .toc {\n      display: none;\n    }\n  }\n  @media (min-width: 1100px) {\n    > .toc {\n      position: absolute;\n      top: 8px;\n      left: calc(50% + 400px);\n      height: 100%;\n      > p {\n        display: none;\n      }\n      > ul {\n        position: sticky;\n        top: 10px;\n        padding-left: 8px;\n        border-left: 1px solid ",";\n\n        white-space: nowrap;\n\n        a {\n          color: ",";\n        }\n        a > code {\n          color: ",";\n        }\n        code {\n          white-space: nowrap;\n        }\n        overflow: hidden;\n        ul {\n          padding-left: 15px;\n        }\n      }\n\n      .highlight {\n        color: ",";\n        text-decoration: underline;\n        code {\n          color: ",";\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n  > .toc {\n    ","\n\n    @media (min-width: ","px) {\n      > ul {\n        white-space: inherit;\n        code {\n          white-space: inherit;\n        }\n      }\n    }\n  }\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground),(0,v.Z)(new Array(20)).map(((n,e)=>(0,s.iv)(b||(b=(0,o.Z)(["\n          @media (min-width: ","px) {\n            width: ","px;\n          }\n        "])),1100+20*(e+1),(1100+20*e-800)/2))),1100);var y=s.ZP.div(x||(x=(0,o.Z)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",";\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  & > .md > :first-child {\n    margin-top: 0;\n  }\n"])),u,h,m,E,p,c,f,(n=>n.theme.colors.hr),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode))},7178:function(n,e,t){var a,o,s,l,c,r=t(1880),p=t(7294),i=t(1883),u=t(891);const d=u.ZP.div(a||(a=(0,r.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: ",";\n"])),(n=>n.theme.colors.sameSereisPosts)),m=u.ZP.div(o||(o=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n  user-select: none;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n    > a {\n      color: ",";\n    }\n  }\n\n  > span {\n    transform: rotate(","deg);\n  }\n"])),(n=>n.theme.colors.onBackground),(n=>n.collapsed?0:180)),g=u.ZP.ol(s||(s=(0,r.Z)(["\n  margin: 0;\n  border-top: 1px solid ",";\n  padding-top: 16px;\n  padding-left: 48px;\n  padding-bottom: 16px;\n"])),(n=>n.theme.colors.background)),h=u.ZP.li(l||(l=(0,r.Z)(["\n  margin-bottom: 4px;\n  font-size: 0.9375rem;\n  color: ",";\n  & > a {\n    color: ",";\n  }\n  ","\n"])),(n=>n.theme.colors.inactiveText),(n=>n.theme.colors.inactiveText),(n=>n.active&&(0,u.iv)(c||(c=(0,r.Z)(["\n      color: ",";\n      & > a {\n        color: ",";\n        text-decoration: underline;\n      }\n    "])),(n=>n.theme.colors.onBackground),(n=>n.theme.colors.onBackground))));e.Z=function(n){let{name:e,data:t,current:a}=n;const[o,s]=p.useState(!0);return t?p.createElement(d,null,p.createElement(m,{collapsed:o,onClick:()=>s((n=>!n))},p.createElement("h2",null,p.createElement(i.Link,{to:"/series/"+e+"/"},'시리즈 "'+e+'"')),p.createElement("span",null,"▲")),!o&&p.createElement(g,null,t.map((n=>{let{frontmatter:{slug:e,title:t}}=n;return p.createElement(h,{active:e===a,key:e},p.createElement(i.Link,{to:"/posts/"+e},t))})))):null}},5924:function(n,e){const t="highlight";e.Z=function(n,e){var a,o,s;if(!e)return;const l=document.documentElement.scrollTop+10-(null!==(a=null===(o=n.current)||void 0===o?void 0:o.offsetTop)&&void 0!==a?a:0);let c;for(let t=0;t<e.length;t++)if(e[t].offsetTop>l){var r;c=null!==(r=e[t-1])&&void 0!==r?r:null;break}if(void 0===c&&(c=e[e.length-1]),null===(s=n.current)||void 0===s||s.querySelectorAll(".highlight").forEach((n=>n.classList.remove(t))),c){var p;const e=c.getAttribute("id"),a=".toc a[href='#"+encodeURI(null!=e?e:"")+"']",o=null===(p=n.current)||void 0===p?void 0:p.querySelector(a);null==o||o.classList.add(t)}}},1151:function(n,e,t){t.d(e,{ah:function(){return s}});var a=t(7294);const o=a.createContext({});function s(n){const e=a.useContext(o);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-blog-posts-2021-210416-create-n-length-array-index-mdx-b30eec37f9b1d07990c9.js.map