"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[1779],{362:function(e,n,t){t.r(n),t.d(n,{Head:function(){return f},default:function(){return v}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({p:"p",code:"code",pre:"pre",a:"a",blockquote:"blockquote",em:"em",strong:"strong",hr:"hr",h3:"h3",ul:"ul",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"JavaScript 로 1 ~ n 까지의 숫자 배열을 만들고 싶어졌다. 쉽게 생각할 수 있는 방법은 새로운 n 크기의 배열을 만든 뒤 ",a.createElement(n.code,null,"map")," 메서드를 사용해 숫자를 1부터 n까지 채워 넣는 것이다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const nums = new Array(5).map((_, i) => i + 1);\n")),"\n",a.createElement(n.p,null,"하지만 위 코드의 결과는 우리가 예상한 것과 다르게 나온다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"console.log(nums);\n// [empty * 5]\n")),"\n",a.createElement(n.p,null,"순차적인 값이 들어가길 기대한 것과 달리, 배열의 모든 값은 여전히 비어있다. 왜일까? 버그일까? 아니다. ",a.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#description"},"MDN의 Array.prototype.map 문서"),"를 보면 아래와 같은 내용이 나온다."),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,a.createElement(n.code,null,"callback")," is invoked only for indexes of the array which have assigned values (including ",a.createElement(n.code,null,"undefined"),")."),"\n"),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"map")," 메서드는 ",a.createElement(n.em,null,"값이 할당된 인덱스"),"에 대해서만 동작한다고 되어 있다. ",a.createElement(n.code,null,"new Array(n)"),"으로 생성된 배열은 모든 값이 비어있다. ",a.createElement(n.strong,null,a.createElement(n.code,null,"undefined"),"로도 채워져 있지 않다"),". 때문에 ",a.createElement(n.code,null,"map")," 메서드가 동작하지 않는 것이다."),"\n",a.createElement(n.p,null,"그렇다면 해결 방법은? 값을 채워준 뒤 ",a.createElement(n.code,null,"map")," 메서드를 사용하면 된다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const nums = new Array(5).fill(0).map((_, i) => i + 1);\nconsole.log(nums);\n// [1, 2, 3, 4, 5];\n")),"\n",a.createElement(n.p,null,"좀 더 ES6+스러운 코드도 있다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const nums = [...new Array(5)].map((_, i) => i + 1);\nconsole.log(nums);\n// [1, 2, 3, 4, 5];\n")),"\n",a.createElement(n.hr),"\n",a.createElement(n.h3,null,"References"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"Stack Overflow - ",a.createElement(n.a,{href:"https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness"},"JavaScript “new Array(n)” and “Array.prototype.map” weirdness")),"\n",a.createElement(n.li,null,"MDN Web Docs - ",a.createElement(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map()\n")),"\n"))}var c,o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},m=t(1880),s=t(1883),u=t(3723),i=t(1858),p=t(3904),d=t(891),E=t(5534);const g=e=>{let{data:n,children:t}=e;const{title:l,date:r,tags:c,heroImage:o,heroImageAlt:m}=n.mdx.frontmatter,p=o?(0,u.c)(o):null;return a.createElement(i.Z,null,a.createElement("h1",null,l),a.createElement(h,null,c.map((e=>a.createElement("li",{key:e},a.createElement(s.rU,{to:"/tags/"+e},e))))),a.createElement("div",null,r),!!p&&a.createElement(u.G,{image:p,alt:null!=m?m:""}),a.createElement(E.Z,null,t))},h=d.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),f=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:r,slug:c,tags:o,heroImage:m},excerpt:s}=l.mdx,i=m?(0,u.c)(m):null;return a.createElement(p.Z,{title:r,description:s,path:"posts/"+c,thumbnail:null==i||null===(n=i.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src,keywords:o,ogType:"article"})};function v(e){return a.createElement(g,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-2021-210416-create-n-length-array-index-mdx-44e27caf3b8349382f9e.js.map