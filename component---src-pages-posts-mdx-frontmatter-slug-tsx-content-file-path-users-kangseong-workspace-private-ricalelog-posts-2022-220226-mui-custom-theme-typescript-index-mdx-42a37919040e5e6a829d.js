"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1348],{1205:function(n,a,e){e.r(a),e.d(a,{Head:function(){return T},default:function(){return Z}});var s=e(1151),t=e(7294);function o(n){const a=Object.assign({p:"p",a:"a",h3:"h3",div:"div",ul:"ul",li:"li",h2:"h2",code:"code"},(0,s.ah)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"타입스크립트 환경에서 ",t.createElement(a.a,{href:"https://mui.com/"},"MUI")," 의 테마에 필드를 추가하려면 타입스크립트 또한 추가적인 타입 선언이 필요하다. 어떻게 하면 되는지 유형별로 간단히 살펴보자."),"\n",t.createElement(a.h3,{id:"references",style:{position:"relative"}},t.createElement(a.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.a,{href:"https://mui.com/getting-started/installation/"},"MUI Docs"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.a,{href:"https://mui.com/customization/theming/#custom-variables"},"Theming - Custom variables")),"\n",t.createElement(a.li,null,t.createElement(a.a,{href:"https://mui.com/customization/palette/#adding-new-colors"},"Palette - Adding new colors")),"\n"),"\n"),"\n",t.createElement(a.li,null,"StackOverflow ",t.createElement(a.a,{href:"https://stackoverflow.com/questions/66080451/add-property-to-background-prop-in-createmuitheme-in-material-ui-using-typescrip"},"Add property to background prop in createMuiTheme in Material-UI using Typescript")),"\n",t.createElement(a.li,null,"GitHub ",t.createElement(a.a,{href:"https://github.com/mui/material-ui"},"mui/material-ui")," - ",t.createElement(a.a,{href:"https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.d.ts"},"createPalette.d.ts")),"\n"),"\n",t.createElement(a.h2,{id:"1-테마에-커스텀-필드-추가",style:{position:"relative"}},t.createElement(a.a,{href:"#1-%ED%85%8C%EB%A7%88%EC%97%90-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%95%84%EB%93%9C-%EC%B6%94%EA%B0%80","aria-label":"1 테마에 커스텀 필드 추가 permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 테마에 커스텀 필드 추가"),"\n",t.createElement(a.p,null,"테마에 기존에 존재하지 않는 새로운 필드를 추가할 수 있다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">createTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  status<span class="token operator">:</span> <span class="token punctuation">{</span>\n    danger<span class="token operator">:</span> orange<span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"이것을 위한 타입스크립트 타입 선언은 경우에는 아래처럼 해주면 된다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"@mui/material/styles"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">Theme</span> <span class="token punctuation">{</span>\n    status<span class="token operator">:</span> <span class="token punctuation">{</span>\n      danger<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">interface</span> <span class="token class-name">ThemeOptions</span> <span class="token punctuation">{</span>\n    status<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      danger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"2-테마-palette-에-커스텀-필드-추가",style:{position:"relative"}},t.createElement(a.a,{href:"#2-%ED%85%8C%EB%A7%88-palette-%EC%97%90-%EC%BB%A4%EC%8A%A4%ED%85%80-%ED%95%84%EB%93%9C-%EC%B6%94%EA%B0%80","aria-label":"2 테마 palette 에 커스텀 필드 추가 permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 테마 Palette 에 커스텀 필드 추가"),"\n",t.createElement(a.p,null,"테마의 palatte 에 색상을 추가하면 ",t.createElement(a.code,null,"color"),", ",t.createElement(a.code,null,"sx")," prop 등에서 이름만으로 색상을 지정할 수 있게 된다. 아래 코드처럼 ",t.createElement(a.code,null,"palette.neutral"),"을 추가한다면,"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">createTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  palette<span class="token operator">:</span> <span class="token punctuation">{</span>\n    neutral<span class="token operator">:</span> <span class="token punctuation">{</span>\n      main<span class="token operator">:</span> <span class="token string">"#64748B"</span><span class="token punctuation">,</span>\n      contrastText<span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"타입스크립트는 아래처럼 해주면 된다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"@mui/material/styles"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">Palette</span> <span class="token punctuation">{</span>\n    neutral<span class="token operator">:</span> Palette<span class="token punctuation">[</span><span class="token string">"primary"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">interface</span> <span class="token class-name">PaletteOptions</span> <span class="token punctuation">{</span>\n    neutral<span class="token operator">:</span> PaletteOptions<span class="token punctuation">[</span><span class="token string">"primary"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"이걸로 끝이면 좋겠지만, 특정 컴포넌트의 ",t.createElement(a.code,null,"color")," 속성에서도 위에서 추가한 색상을 쓰고 싶다면, 해당 컴포넌트에 관한 타입 추가 선언을 해주어야 한다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// Button 의 color prop 에서 neutral 을 쓰고 싶을 경우</span>\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"@mui/material/Button"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">ButtonPropsColorOverrides</span> <span class="token punctuation">{</span>\n    neutral<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"3-테마-palette-의-특정-색상에-필드-추가",style:{position:"relative"}},t.createElement(a.a,{href:"#3-%ED%85%8C%EB%A7%88-palette-%EC%9D%98-%ED%8A%B9%EC%A0%95-%EC%83%89%EC%83%81%EC%97%90-%ED%95%84%EB%93%9C-%EC%B6%94%EA%B0%80","aria-label":"3 테마 palette 의 특정 색상에 필드 추가 permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. 테마 Palette 의 특정 색상에 필드 추가"),"\n",t.createElement(a.p,null,"Palette 의 특정 색상에 필드를 추가하고 싶을 수 있다. 아래는 ",t.createElement(a.code,null,"palette.primary.darker"),", ",t.createElement(a.code,null,"palette.background.contrastText")," 를 추가했다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> normalTheme <span class="token operator">=</span> <span class="token function">createTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  palette<span class="token operator">:</span> <span class="token punctuation">{</span>\n    primary<span class="token operator">:</span> <span class="token punctuation">{</span>\n      main<span class="token operator">:</span> <span class="token string">"#0971f1"</span><span class="token punctuation">,</span>\n      darker<span class="token operator">:</span> <span class="token string">"#053e85"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    background<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"#E4E7EB"</span><span class="token punctuation">,</span>\n      contrastText<span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"속성을 추가하려는 색상이 ",t.createElement(a.code,null,"primary"),", ",t.createElement(a.code,null,"secondary"),", ",t.createElement(a.code,null,"error"),", ",t.createElement(a.code,null,"warning"),", ",t.createElement(a.code,null,"info"),", ",t.createElement(a.code,null,"success")," 중 하나라면, 이 색상들은 타입을 공유하기 때문에 아래처럼 타입을 지정하면 된다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"@mui/material/styles"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">PaletteColor</span> <span class="token punctuation">{</span>\n    darker<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">interface</span> <span class="token class-name">SimplePaletteColorOptions</span> <span class="token punctuation">{</span>\n    darker<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"하지만 ",t.createElement(a.code,null,"background")," 의 경우 다른 타입을 사용하므로 아래처럼 해주어야 한다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"@mui/material/styles/createPalette"</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">TypeBackground</span> <span class="token punctuation">{</span>\n    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    paper<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n    contrastText<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"어떤 색상이 어떤 타입을 사용하는지 알고 싶다면 ",t.createElement(a.a,{href:"https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.d.ts"},"createPalette.d.ts")," 코드를 보면 된다. 아래처럼 나와있으니 참고해서 타입 지정을 해주면 된다."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PaletteOptions</span> <span class="token punctuation">{</span>\n  primary<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  secondary<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  error<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  warning<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  info<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  success<span class="token operator">?</span><span class="token operator">:</span> PaletteColorOptions<span class="token punctuation">;</span>\n  mode<span class="token operator">?</span><span class="token operator">:</span> PaletteMode<span class="token punctuation">;</span>\n  tonalOffset<span class="token operator">?</span><span class="token operator">:</span> PaletteTonalOffset<span class="token punctuation">;</span>\n  contrastThreshold<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  common<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>CommonColors<span class="token operator">></span><span class="token punctuation">;</span>\n  grey<span class="token operator">?</span><span class="token operator">:</span> ColorPartial<span class="token punctuation">;</span>\n  text<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>TypeText<span class="token operator">></span><span class="token punctuation">;</span>\n  divider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  action<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>TypeAction<span class="token operator">></span><span class="token punctuation">;</span>\n  background<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>TypeBackground<span class="token operator">></span><span class="token punctuation">;</span>\n  getContrastText<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>background<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}var p,l,c,r,i,u=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.ah)(),n.components);return a?t.createElement(a,n,t.createElement(o,n)):o(n)},k=e(1880),d=e(3723),m=e(1858),g=e(3904),h=e(891),f=e(5534),E=e(5777),b=e(7178),v=e(6706);function y(n){let{data:a,children:e}=n;const{frontmatter:s,sameSeriesPosts:o}=a.mdx,{title:p,slug:l,date:c,tags:r,series:i,heroImage:u,heroImageAlt:k}=s,g=u?(0,d.c)(u):null;return t.createElement(m.Z,null,t.createElement(x,null,t.createElement("h1",null,p),t.createElement(C,null,c),t.createElement(v.Z,{tags:r})),t.createElement(b.Z,{name:i,data:o,current:l}),!!g&&t.createElement(w,{image:g,alt:null!=k?k:""}),t.createElement(P,null,e),t.createElement(E.Z,null))}const x=h.ZP.div(p||(p=(0,k.Z)(["\n  margin: 60px 0 72px;\n  padding: 0 24px;\n\n  & > h1 {\n    font-size: 2.5rem;\n    word-break: keep-all;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(d.G)(l||(l=(0,k.Z)(["\n  margin-bottom: 16px;\n"]))),C=h.ZP.div(c||(c=(0,k.Z)(["\n  margin: 16px 0;\n"]))),P=(h.ZP.ul(r||(r=(0,k.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px\n      ","px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(n=>n.theme.dimens.gutter),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag)),(0,h.ZP)(f.Z)(i||(i=(0,k.Z)(["\n  margin-bottom: 60px;\n"])))),T=n=>{var a,e;let{data:s}=n;const{frontmatter:{title:o,slug:p,tags:l,heroImage:c,previewContent:r},excerpt:i}=s.mdx,u=c?(0,d.c)(c):null;return t.createElement(g.Z,{title:o,description:null!=r?r:i,path:"posts/"+p,thumbnail:null==u||null===(a=u.images)||void 0===a||null===(e=a.fallback)||void 0===e?void 0:e.src,keywords:l,ogType:"article"})};function Z(n){return t.createElement(y,n,t.createElement(u,n))}},5777:function(n,a,e){var s=e(7294);a.Z=function(){const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{var a;const e=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"ricale/blog","issue-term":"pathname",label:"utterances",theme:"github-dark",crossOrigin:"anonymous",async:"true"}).forEach((n=>{let[a,s]=n;e.setAttribute(a,s)})),null===(a=n.current)||void 0===a||a.appendChild(e)}),[]),s.createElement("div",{id:"comments",ref:n})}},5534:function(n,a,e){var s,t=e(1880);const o=e(891).ZP.div(s||(s=(0,t.Z)(["\n  font-size: 16px;\n  line-height: 1.5;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 16px;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    line-height: 1.25;\n    font-weight: 600;\n\n    > a.anchor path {\n      fill: white;\n    }\n  }\n\n  h1 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 2.125em;\n  }\n\n  h2 {\n    padding-bottom: 0.3em;\n    border-bottom: 1px solid #21262d;\n    font-size: 1.625em;\n  }\n\n  h3 {\n    font-size: 1.5em;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  h5 {\n    font-size: 1em;\n  }\n\n  h6 {\n    font-size: 0.9375em;\n  }\n\n  ul,\n  ol,\n  .gatsby-resp-image-wrapper {\n    margin-bottom: 16px;\n  }\n\n  table {\n    width: max-content;\n    max-width: 100%;\n    margin-bottom: 16px;\n    border-collapse: collapse;\n    tr {\n      border-top: 1px solid #21262d;\n    }\n    td,\n    th {\n      padding: 6px 13px;\n      border: 1px solid #30363d;\n    }\n  }\n\n  hr {\n    height: 0.25em;\n    margin: 24px 0;\n    border: 0;\n\n    background-color: #30363d;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    margin-bottom: 16px;\n    padding: 16px 32px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: -10px;\n    left: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -30px;\n    right: 5px;\n\n    font-size: 3em;\n    color: ",";\n  }\n\n  code {\n    padding: 0.2em 0.4em;\n    border-radius: 2px;\n\n    font-size: 0.85em;\n\n    background-color: ",";\n    color: ",';\n    white-space: break-spaces;\n  }\n\n  pre[class*="language-"] {\n    margin-bottom: 16px;\n\n    /* overflow-x: auto; */\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n'])),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquote),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.blockquoteBorder),(n=>n.theme.colors.code),(n=>n.theme.colors.onCode));a.Z=o},7178:function(n,a,e){var s,t,o,p,l,c=e(1880),r=e(7294),i=e(1883),u=e(891);const k=u.ZP.div(s||(s=(0,c.Z)(["\n  margin-bottom: 16px;\n  align-items: center;\n\n  background-color: #111111;\n"]))),d=u.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n  cursor: pointer;\n\n  > h2 {\n    margin: 0;\n    font-size: 1rem;\n  }\n\n  > span {\n    user-select: none;\n    transform: rotate(","deg);\n  }\n"])),(n=>n.collapsed?0:180)),m=u.ZP.ol(o||(o=(0,c.Z)(["\n  margin: 0 16px;\n  padding-bottom: 16px;\n"]))),g=u.ZP.li(p||(p=(0,c.Z)(["\n  ","\n"])),(n=>n.active&&(0,u.iv)(l||(l=(0,c.Z)(["\n      & > a {\n        font-weight: bold;\n        font-style: italic;\n        text-decoration: underline;\n      }\n    "])))));a.Z=function(n){let{name:a,data:e,current:s}=n;const[t,o]=r.useState(!0);return e?r.createElement(k,null,r.createElement(d,{collapsed:t,onClick:()=>o((n=>!n))},r.createElement("h2",null,"시리즈 ",r.createElement(i.rU,{to:"/series/"+a+"/"},'"'+a+'"')),r.createElement("span",null,"▲")),!t&&r.createElement(m,null,e.map((n=>{let{frontmatter:{slug:a,title:e}}=n;return r.createElement(g,{active:a===s,key:a},r.createElement(i.rU,{to:"/posts/"+a},e))})))):null}},1597:function(n,a,e){var s,t=e(1880),o=e(7294),p=e(1883);const l=(0,e(891).ZP)(p.rU)(s||(s=(0,t.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  border-radius: 2px;\n\n  background-color: ",";\n  color: ",";\n  text-decoration: none;\n"])),(n=>n.theme.dimens.spacing),(n=>n.theme.dimens.gutter),(n=>n.theme.colors.tag),(n=>n.theme.colors.onTag));a.Z=function(n){let{value:a}=n;return o.createElement(l,{to:"/tags/"+a},a)}},6706:function(n,a,e){var s,t=e(1880),o=e(7294),p=e(891),l=e(1597);const c=p.ZP.ul(s||(s=(0,t.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"])),(n=>n.theme.dimens.gutter));a.Z=function(n){let{tags:a,...e}=n;const s="string"==typeof a[0]?a.map((n=>({fieldValue:n,totalCount:void 0}))):a;return o.createElement(c,e,s.map((n=>o.createElement("li",{key:n.fieldValue},o.createElement(l.Z,{value:n.fieldValue})))))}},1151:function(n,a,e){e.d(a,{ah:function(){return o}});var s=e(7294);const t=s.createContext({});function o(n){const a=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2022-220226-mui-custom-theme-typescript-index-mdx-42a37919040e5e6a829d.js.map