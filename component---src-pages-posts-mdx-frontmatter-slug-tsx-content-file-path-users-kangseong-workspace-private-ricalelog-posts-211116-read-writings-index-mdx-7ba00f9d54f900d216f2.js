"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[477],{7937:function(e,n,t){t.r(n),t.d(n,{Head:function(){return f},default:function(){return k}});var o=t(1151),r=t(7294);function l(e){const n=Object.assign({h3:"h3",a:"a",p:"p",code:"code"},(0,o.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h3,null,r.createElement(n.a,{href:"https://blog.notesnook.com/react-useref-hook-with-examples/"},"React useRef Hook for Dummies: How to Use useRef Correctly with Examples")),"\n",r.createElement(n.p,null,"React 컴포넌트에서 어떤 값을 관리함에 있어 ",r.createElement(n.code,null,"useState")," 보다는 ",r.createElement(n.code,null,"useRef")," 가 효율적일 때가 있다. 그것을 설명하는 글이다."),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/"},"[번역] 심층 분석: React Hook은 실제로 어떻게 동작할까?")),"\n",r.createElement(n.p,null,"React Hook 의 구현 및 작동 원리를 설명한 글을 번역한 글. 번역이 훌륭하지만, 영어를 읽는데 문제가 없다면 ",r.createElement(n.a,{href:"(https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)"},"원문"),"을 읽는 것도 나쁘지 않다."),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://alexsidorenko.com/blog/react-render-cheat-sheet/"},"A Visual Guide to React Rendering - Cheat Sheet")),"\n",r.createElement(n.p,null,"React 의 컴포넌트가 리렌더링되는 이유, 그것을 막을 수 있는 방법을 단계적으로 설명한 글이다. 실제로는 이 글에 그 내용이 다 있는 것이 아니고 작성자가 작성해두었던 여러 글들을 엮은 글이다."),"\n",r.createElement(n.p,null,'작성자가 쓴 글 이외에도 좋은 몇몇 글들이 추가로 링크되어있다. 제목에 나온 그대로, 훌륭한 "Cheat Sheet" 이라고 할 수 있다.'),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://leerob.io/blog/rust"},"Rust Is The Future of JavaScript Infrastructure")),"\n",r.createElement(n.p,null,"Rust 라는 언어가 가까운 미래에 자바스크립트의 각종 툴링(번들링,압축,포멧팅 등)을 대체할 것이라는 내용의 글. Rust 의 장점과 현황, 미래에 대한 글쓴이의 생각이 잘 정리되어 있다."),"\n",r.createElement(n.h3,null,r.createElement(n.a,{href:"https://certitude.consulting/blog/en/invisible-backdoor/"},"The Invisible JavaScript Backdoor")),"\n",r.createElement(n.p,null,"너비가 0인 공백 특수문자, 생긴 건 느낌표와 동일하지만 다른의미의 특수문자 등을 활용해 백도어를 구현하는 재밌는 글."))}var a,m,c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?r.createElement(n,e,r.createElement(l,e)):l(e)},i=t(1880),s=t(1883),d=t(3723),h=t(1858),p=t(3904),u=t(891);const g=e=>{let{data:n,children:t}=e;const{title:o,date:l,tags:a,heroImage:m,heroImageAlt:c}=n.mdx.frontmatter,i=m?(0,d.c)(m):null;return r.createElement(h.Z,null,r.createElement("h1",null,o),r.createElement(b,null,a.map((e=>r.createElement("li",{key:e},r.createElement(s.rU,{to:"/tags/"+e},e))))),r.createElement("div",null,l),!!i&&r.createElement(d.G,{image:i,alt:null!=c?c:""}),r.createElement(x,null,t))},b=u.ZP.ul(a||(a=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),x=u.ZP.div(m||(m=(0,i.Z)(["\n  word-break: keep-all;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    padding: 0;\n  }\n\n  h1 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h2 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h3 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  ul,\n  ol,\n  table {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 30px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: 15px;\n    left: 5px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -15px;\n    right: 10px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n\n  code {\n    padding: ","px\n      ","px ","px;\n    border-radius: 2px;\n\n    font-size: 0.875em;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  pre {\n    margin: ","px 0;\n    padding: ","px;\n\n    background-color: ",";\n    color: ",";\n    line-height: 140%;\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  table {\n    border-collapse: collapse;\n    td,\n    th {\n      border: 1px solid ",";\n      padding: ","px\n        ","px;\n    }\n  }\n"])),(e=>3.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>3*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>2.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.thin),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.codeblock),(e=>e.theme.colors.onCodeblock),(e=>e.theme.colors.tableBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter)),f=e=>{let{data:n}=e;return r.createElement(p.Z,{title:n.mdx.frontmatter.title})};function k(e){return r.createElement(g,e,r.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-211116-read-writings-index-mdx-7ba00f9d54f900d216f2.js.map