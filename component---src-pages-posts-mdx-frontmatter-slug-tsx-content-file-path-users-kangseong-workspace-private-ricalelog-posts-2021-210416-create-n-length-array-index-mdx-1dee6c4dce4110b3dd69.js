"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1779],{362:function(n,e,a){a.r(e),a.d(e,{Head:function(){return S},default:function(){return j}});var t=a(1151),s=a(7294);function o(n){const e=Object.assign({div:"div",p:"p",code:"code",a:"a",blockquote:"blockquote",em:"em",strong:"strong",hr:"hr",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.div,{className:"md"},s.createElement(e.p,null,"JavaScript 로 1 ~ n 까지의 숫자 배열을 만들고 싶어졌다. 쉽게 생각할 수 있는 방법은 새로운 n 크기의 배열을 만든 뒤 ",s.createElement(e.code,null,"map")," 메서드를 사용해 숫자를 1부터 n까지 채워 넣는 것이다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),s.createElement(e.p,null,"하지만 위 코드의 결과는 우리가 예상한 것과 다르게 나온다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [empty * 5]</span></code></pre></div>'}}),s.createElement(e.p,null,"순차적인 값이 들어가길 기대한 것과 달리, 배열의 모든 값은 여전히 비어있다. 왜일까? 버그일까? 아니다. ",s.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#description"},"MDN의 Array.prototype.map 문서"),"를 보면 아래와 같은 내용이 나온다."),s.createElement(e.blockquote,null,"\n",s.createElement(e.p,null,s.createElement(e.code,null,"callback")," is invoked only for indexes of the array which have assigned values (including ",s.createElement(e.code,null,"undefined"),")."),"\n"),s.createElement(e.p,null,s.createElement(e.code,null,"map")," 메서드는 ",s.createElement(e.em,null,"값이 할당된 인덱스"),"에 대해서만 동작한다고 되어 있다. ",s.createElement(e.code,null,"new Array(n)"),"으로 생성된 배열은 모든 값이 비어있다. ",s.createElement(e.strong,null,s.createElement(e.code,null,"undefined"),"로도 채워져 있지 않다"),". 때문에 ",s.createElement(e.code,null,"map")," 메서드가 동작하지 않는 것이다."),s.createElement(e.p,null,"그렇다면 해결 방법은? 값을 채워준 뒤 ",s.createElement(e.code,null,"map")," 메서드를 사용하면 된다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [1, 2, 3, 4, 5];</span></code></pre></div>'}}),s.createElement(e.p,null,"좀 더 ES6+스러운 코드도 있다."),s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// [1, 2, 3, 4, 5];</span></code></pre></div>'}}),s.createElement(e.hr),s.createElement(e.h3,{id:"references",style:{position:"relative"}},s.createElement(e.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"Stack Overflow - ",s.createElement(e.a,{href:"https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness"},"JavaScript “new Array(n)” and “Array.prototype.map” weirdness")),"\n",s.createElement(e.li,null,"MDN Web Docs - ",s.createElement(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map()\n")),"\n")),"\n",s.createElement(e.div,{className:"toc"},s.createElement(e.h3,{id:"목차",style:{position:"relative"}},s.createElement(e.a,{href:"#%EB%AA%A9%EC%B0%A8","aria-label":"목차 permalink",className:"anchor before"},s.createElement(e.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"목차"),s.createElement(e.ul,null,"\n",s.createElement(e.li,null,s.createElement(e.a,{href:"#references"},"References")),"\n")))}var l,r,c,p,i=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)},u=a(1880),m=a(3723),d=a(1858),g=a(3904),h=a(891),k=a(5534),f=a(5777),b=a(7178),v=a(2889);function E(n){let{data:e,children:a}=n;const{frontmatter:t,sameSeriesPosts:o}=e.mdx,{title:l,slug:r,date:c,tags:p,series:i,heroImage:u,heroImageAlt:g}=t,h=u?(0,m.c)(u):null;return s.createElement(d.Z,null,s.createElement(x,null,s.createElement("h1",null,l),s.createElement(w,null,c),s.createElement(v.Z,{tags:p})),s.createElement(b.Z,{name:i,data:o,current:r}),!!h&&s.createElement(y,{image:h,alt:null!=g?g:""}),s.createElement(Z,null,a),s.createElement(f.Z,null))}const x=h.ZP.div(l||(l=(0,u.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),y=(0,h.ZP)(m.G)(r||(r=(0,u.Z)(["\n  margin-bottom: 16px;\n"]))),w=h.ZP.div(c||(c=(0,u.Z)(["\n  margin: 16px 0;\n"]))),Z=(0,h.ZP)(k.Z)(p||(p=(0,u.Z)(["\n  margin-bottom: 60px;\n"]))),S=n=>{var e,a;let{data:t}=n;const{frontmatter:{title:o,slug:l,tags:r,heroImage:c,previewContent:p},excerpt:i}=t.mdx,u=c?(0,m.c)(c):null;return s.createElement(g.Z,{title:o,description:null!=p?p:i,path:"posts/"+l,thumbnail:null==u||null===(e=u.images)||void 0===e||null===(a=e.fallback)||void 0===a?void 0:a.src,keywords:r,ogType:"article"})};function j(n){return s.createElement(E,n,s.createElement(i,n))}},5777:function(n,e,a){var t=a(7294);e.Z=function(){const n=(0,t.useRef)(null);return(0,t.useEffect)((()=>{var e;const a=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[e,t]=n;a.setAttribute(e,t)})),null===(e=n.current)||void 0===e||e.appendChild(a)}),[]),t.createElement("div",{id:"comments",ref:n})}},5534:function(n,e,a){var t,s=a(1880);const o=a(891).ZP.div(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  line-height: 1.5;\n\n  > .md {\n    order: 1;\n  }\n  > .toc {\n    order: 0;\n    margin: 0 16px 16px;\n    padding: 16px 0 0 16px;\n    background-color: #1a1a1a;\n    > h3 {\n      margin: 0;\n      font-size: 1.125rem;\n    }\n    > ul {\n      position: relative;\n      margin: 0;\n      padding: 8px 0 16px 20px;\n\n      font-size: 1rem;\n      list-style: none;\n\n      a {\n        color: #dddddd;\n      }\n\n      ul {\n        list-style: none;\n        padding-left: 30px;\n      }\n    }\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  a > code {\n    color: skyblue;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  img {\n    border: 1px solid #333333;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));e.Z=o},7178:function(n,e,a){var t,s,o,l,r,c=a(1880),p=a(7294),i=a(1883),u=a(891);const m=u.ZP.div(t||(t=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(s||(s=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),g=u.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),h=u.ZP.li(l||(l=(0,c.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(r||(r=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));e.Z=function(n){let{name:e,data:a,current:t}=n;const[s,o]=p.useState(!0);return a?p.createElement(m,null,p.createElement(d,{collapsed:s,onClick:()=>o((n=>!n))},p.createElement("h2",null,"시리즈 ",p.createElement(i.Link,{to:"/series/"+e+"/"},'"'+e+'"')),p.createElement("span",null,"▲")),!s&&p.createElement(g,null,a.map((n=>{let{frontmatter:{slug:e,title:a}}=n;return p.createElement(h,{active:e===t,key:e},p.createElement(i.Link,{to:"/posts/"+e},a))})))):null}},2889:function(n,e,a){a.d(e,{Z:function(){return m}});var t,s=a(1880),o=a(7294),l=a(891),r=a(1883);const c=(0,l.ZP)(r.Link)(t||(t=(0,s.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));var p,i=function(n){let{value:e}=n;return o.createElement(c,{to:"/tags/"+e},e)};const u=l.ZP.ul(p||(p=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));var m=function(n){let{tags:e,showCount:a,...t}=n;const s="string"==typeof e[0]?e.map((n=>({fieldValue:n,totalCount:void 0}))):e;return o.createElement(u,t,s.map((n=>o.createElement("li",{key:n.fieldValue},o.createElement(i,{value:n.fieldValue}),a&&!!n.totalCount&&o.createElement("sup",null,""+n.totalCount)))))}},1151:function(n,e,a){a.d(e,{ah:function(){return o}});var t=a(7294);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210416-create-n-length-array-index-mdx-1dee6c4dce4110b3dd69.js.map