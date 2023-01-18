"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[6221],{3723:function(e,t,n){n.d(t,{G:function(){return A},L:function(){return g},M:function(){return x},P:function(){return E},_:function(){return l},a:function(){return o},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,i,l,s){const c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:i="",shouldLoad:s}=e,c=l(e,h);return r.createElement("img",o({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:i}))},b=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,i=l(e,f);const s=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,o({},i,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),c):c};var w;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,n=l(e,v);return t?r.createElement(b,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,o({},e)),r.createElement("noscript",null,r.createElement(b,o({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],T=new Set;let I,q;const O=function(e){let{as:t="div",image:a,style:i,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:b}=a,w=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:v,className:E}=w,x=l(w,S),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(d=u);const O=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{I||(I=Promise.all([n.e(9774),n.e(8223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return q=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(q&&T.has(C))return;let t,r;return I.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=n(o({isLoading:!0,isLoaded:T.has(C),image:a},h)),T.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,C,T,i,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{T.has(C)&&q&&(k.current.innerHTML=q(o({isLoading:T.has(C),isLoaded:T.has(C),image:a},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[a]),(0,r.createElement)(t,o({},x,{style:o({},v,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));A.propTypes=C,A.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},j=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:k,width:_,height:_,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!j.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},D=(N=A,function(e){let{src:t,__imageData:n,__error:a}=e,i=l(e,P);return a&&console.warn(a),n?r.createElement(N,o({image:n},i)):(console.warn("Image not loaded",t),null)});var N;D.displayName="StaticImage",D.propTypes=z},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},1858:function(e,t,n){var r,a,i=n(1880),o=n(1883),l=n(7294),s=n(891);const c=s.ZP.div(r||(r=(0,i.Z)(["\n  max-width: 800px;\n  margin: 0 auto;\n\n  > main {\n    padding-left: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n  }\n"])),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin)),d=s.ZP.div(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n\n  margin: 8px 16px;\n\n  & > header {\n    font-weight: 900;\n  }\n\n  & > address {\n    margin-left: 8px;\n  }\n\n  & > nav > ul {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n\n    margin: 0;\n    margin-left: 16px;\n    padding: 0;\n    list-style: none;\n  }\n"])));t.Z=e=>{let{children:t}=e;const n=(0,o.K2)("3159585216");return l.createElement(s.f6,{theme:s.qc},l.createElement(s.ZL,null),l.createElement(c,null,l.createElement(d,null,l.createElement("header",null,n.site.siteMetadata.title),l.createElement("address",null,"by ricale"),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(o.rU,{to:"/posts"},"글")),l.createElement("li",null,l.createElement(o.rU,{to:"/tags"},"태그")),l.createElement("li",null,l.createElement(o.rU,{to:"/series"},"시리즈"))))),l.createElement("main",null,t)))}},3904:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{title:t,description:n,path:i,thumbnail:o,ogType:l,keywords:s}=e;const c=(0,a.K2)("3000394247"),{siteMetadata:{title:d,author:u,siteUrl:m,description:p},pathPrefix:g}=c.site,h=t?t+" | "+d:d,f=null!=t?t:d,y=n||p,b=""+m+g+(i?"/"+i:""),w=o?""+m+o:null,v=s?s.join(", "):null;return r.createElement(r.Fragment,null,r.createElement("title",null,h),r.createElement("meta",{name:"description",content:y}),r.createElement("meta",{name:"author",content:u}),v&&r.createElement("meta",{name:"keywords",content:v}),!!l&&r.createElement("meta",{property:"og:type",content:l}),r.createElement("meta",{property:"og:title",content:f}),r.createElement("meta",{property:"og:description",content:y}),r.createElement("meta",{property:"og:url",content:b}),!!w&&r.createElement("meta",{property:"og:image",content:w}),r.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{property:"twitter:title",content:f}),r.createElement("meta",{property:"twitter:description",content:y}),r.createElement("meta",{property:"twitter:url",content:b}),!!w&&r.createElement("meta",{property:"twitter:image",content:w}))}},891:function(e,t,n){n.d(t,{ZL:function(){return p},f6:function(){return l},iv:function(){return i},ZP:function(){return g},qc:function(){return u}});var r=n(2788);const{default:a,css:i,keyframes:o,ThemeProvider:l,ThemeContext:s,createGlobalStyle:c}=r;var d,u={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#222222",onTag:"skyblue",tableBorder:"white"}},m=n(1880);var p=c(d||(d=(0,m.Z)(['\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: -apple-system,\n      BlinkMacSystemFont,\n      "Segoe UI",\n      "Noto Sans",\n      Helvetica,\n      Arial,\n      sans-serif,\n      "Apple Color Emoji",\n      "Segoe UI Emoji";\n\n    overflow-x: hidden;\n\n    background-color: ',";\n    color: ",";\n  }\n\n  a {\n    color: skyblue;\n    text-decoration: none;\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(e=>e.theme.colors.background),(e=>e.theme.colors.onBackground));n(7294);var g=a},1880:function(e,t,n){function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=7f98b56d563e0dcde171d7019511a495a6e698f8-0a71613b1a4460704354.js.map