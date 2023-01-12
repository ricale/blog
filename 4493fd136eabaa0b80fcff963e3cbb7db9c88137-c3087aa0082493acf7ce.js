"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[492],{3723:function(e,t,n){n.d(t,{G:function(){return O},L:function(){return g},M:function(){return x},P:function(){return E},_:function(){return l},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return s}});var r=n(7294),a=(n(2369),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,o,l,s){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=r,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:s}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:o}))},b=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=l(e,f);const s=o.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},o,t,{sizes:s,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:s})})),c):c};var w;y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},b.displayName="Picture",b.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,n=l(e,v);return t?r.createElement(b,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const k=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:o().object.isRequired,alt:k},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],q=["style","className"],T=new Set;let S,I;const z=function(e){let{as:t="div",image:a,style:o,backgroundColor:c,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,h=l(e,L);const{width:f,height:y,layout:b}=a,w=function(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:v,className:E}=w,x=l(w,q),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(d=u);const z=function(e,t,n){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{S||(S=Promise.all([n.e(774),n.e(223)]).then(n.bind(n,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(C);if(I&&T.has(C))return;let t,r;return S.then((e=>{let{renderImageToString:n,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=n(i({isLoading:!0,isLoaded:T.has(C),image:a},h)),T.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,C,T,o,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{T.has(C)&&I&&(k.current.innerHTML=I(i({isLoading:T.has(C),isLoaded:T.has(C),image:a},h)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},x,{style:i({},v,o,{backgroundColor:c}),className:E+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:z},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));O.propTypes=C,O.displayName="GatsbyImage";const Z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),A={src:o().string.isRequired,alt:k,width:P,height:P,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},D=(B=O,function(e){let{src:t,__imageData:n,__error:a}=e,o=l(e,Z);return a&&console.warn(a),n?r.createElement(B,i({image:n},o)):(console.warn("Image not loaded",t),null)});var B;D.displayName="StaticImage",D.propTypes=A},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const o=e[a];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},1858:function(e,t,n){var r,a,o=n(1880),i=n(1883),l=n(7294),s=n(891);const c=s.ZP.div(r||(r=(0,o.Z)(["\n  max-width: 800px;\n  padding: ","px;\n"])),(e=>e.theme.dimens.margin));s.ZP.header(a||(a=(0,o.Z)([""])));t.Z=e=>{let{children:t}=e;const n=(0,i.K2)("3159585216");return l.createElement(s.f6,{theme:s.qc},l.createElement(s.ZL,null),l.createElement(c,null,l.createElement("header",null,n.site.siteMetadata.title),l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement(i.rU,{to:"/posts"},"posts")),l.createElement("li",null,l.createElement(i.rU,{to:"/tags"},"tags")))),l.createElement("main",null,t)))}},5534:function(e,t,n){var r,a=n(1880);const o=n(891).ZP.div(r||(r=(0,a.Z)(["\n  word-break: keep-all;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    padding: 0;\n  }\n\n  h1 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h2 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h3 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  ul,\n  ol,\n  table {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 30px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: 15px;\n    left: 5px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -15px;\n    right: 10px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n\n  code {\n    padding: ","px\n      ","px ","px;\n    border-radius: 2px;\n\n    font-size: 0.875em;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  pre {\n    margin: ","px 0;\n    padding: ","px;\n\n    background-color: ",";\n    color: ",";\n    line-height: 140%;\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  table {\n    border-collapse: collapse;\n    td,\n    th {\n      border: 1px solid ",";\n      padding: ","px\n        ","px;\n    }\n  }\n"])),(e=>3.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>3*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>2.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.thin),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.codeblock),(e=>e.theme.colors.onCodeblock),(e=>e.theme.colors.tableBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter));t.Z=o},3904:function(e,t,n){var r=n(7294),a=n(1883);t.Z=e=>{let{title:t,og:n}=e;const o=(0,a.K2)("512065377"),{title:i,siteUrl:l}=o.site.siteMetadata;return r.createElement(r.Fragment,null,r.createElement("title",null,t?t+" | "+i:i),n&&r.createElement(r.Fragment,null,r.createElement("meta",{property:"og:url",content:l+"/"+n.path}),r.createElement("meta",{property:"og:type",content:""+n.type}),r.createElement("meta",{property:"og:title",content:""+n.title}),r.createElement("meta",{property:"og:description",content:""+n.description}),!!n.image&&r.createElement("meta",{property:"og:image",content:""+l+n.image}),r.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{property:"twitter:url",content:l+"/"+n.path}),r.createElement("meta",{property:"twitter:title",content:""+n.title}),r.createElement("meta",{property:"twitter:description",content:""+n.description}),!!n.image&&r.createElement("meta",{property:"twitter:image",content:""+l+n.image})))}},891:function(e,t,n){n.d(t,{ZL:function(){return p},f6:function(){return l},ZP:function(){return g},qc:function(){return u}});var r=n(2788);const{default:a,css:o,keyframes:i,ThemeProvider:l,ThemeContext:s,createGlobalStyle:c}=r;var d,u={dimens:{bigMargin:32,margin:16,gutter:8,spacing:4,thin:2},colors:{background:"black",onBackground:"white",codeblock:"#111111",onCodeblock:"white",blockquoteBorder:"#666666",blockquote:"#111111",onBlockquote:"white",code:"#333333",onCode:"#DDDDDD",tag:"#111111",onTag:"skyblue",tableBorder:"white"}},m=n(1880);var p=c(d||(d=(0,m.Z)(["\n  html, body, #root {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 18px;\n    line-height: 180%;\n\n    overflow-x: hidden;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  a {\n    color: skyblue;\n  }\n\n  input, button, select {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    appearance: none;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"])),(e=>e.theme.colors.background),(e=>e.theme.colors.onBackground));n(7294);var g=a},1880:function(e,t,n){function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})},1151:function(e,t,n){n.d(t,{ah:function(){return o}});var r=n(7294);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=4493fd136eabaa0b80fcff963e3cbb7db9c88137-c3087aa0082493acf7ce.js.map