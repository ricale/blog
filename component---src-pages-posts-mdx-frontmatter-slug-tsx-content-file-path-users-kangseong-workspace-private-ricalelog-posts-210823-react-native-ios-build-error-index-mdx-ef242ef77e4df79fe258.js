"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[961],{7233:function(e,n,t){t.r(n),t.d(n,{Head:function(){return g},default:function(){return h}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({p:"p",h3:"h3",code:"code",blockquote:"blockquote",a:"a",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"최근 React Native 의 빌드 환경을 옮기면서 마주한 에러들을 간단히 정리한다. Intel 프로세서에서 Apple M1 프로세서로 옮기면서 생긴 에러들이 아닌가 하고 추정하고 있지만, 정확하지는 않다."),"\n",a.createElement(n.h3,null,"1. ",a.createElement(n.code,null,"pod install"),"이 되지 않는다"),"\n",a.createElement(n.p,null,"아래와 같은 에러가 발생하며 ",a.createElement(n.code,null,"pod install"),"이 진행되지 않았다."),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"LoadError - dlopen(/Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle, 0x0009): missing compatible arch in /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle - /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.1/lib/ffi_c.bundle"),"\n"),"\n",a.createElement(n.p,null,"아래의 명령어를 실행하면 해결할 수 있다."),"\n",a.createElement(n.p,null,"$ sudo arch -x86_64 gem install ffi\n$ arch -x86_64 pod install"),"\n",a.createElement(n.p,null,"이후부터는 그냥 ",a.createElement(n.code,null,"pod install"),"을 써도 문제 없다."),"\n",a.createElement(n.p,null,"(",a.createElement(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/10220#issuecomment-730963835"},"출처"),")"),"\n",a.createElement(n.h3,null,"2. Xcode 빌드 에러: Library not found for -lBase64"),"\n",a.createElement(n.p,null,"이 문제는 Xcode에서 프로젝트를 열 때 ",a.createElement(n.code,null,"*.xcodeproj")," 파일 대신 ",a.createElement(n.code,null,"*.xcworkspace")," 파일을 여니 해결되었다. 이것은 M1과는 무관한 이슈 같다."),"\n",a.createElement(n.h3,null,"3. Xcode 빌드 에러: ios/main.jsbundle: No such file or directory"),"\n",a.createElement(n.p,null,"본래라면 자동 생성/갱신되는 것으로 알고 있는 ",a.createElement(n.code,null,"ios/main.jsbundle")," 파일이 생성/갱신되지 않으면서 생긴 에러이다."),"\n",a.createElement(n.p,null,"아래 명령어를 실행해서 ",a.createElement(n.code,null,"ios/main.jsbundle")," 파일을 직접 생성하면 문제가 해결된다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"yarn react-native bundle --entry-file='index.js' --bundle-output='./ios/main.jsbundle' --dev=false --platform='ios' --assets-dest='./ios'\n")),"\n",a.createElement(n.p,null,"라이브러리를 추가/삭제할 때마다 항상 실행해주어야 한다는 것이다. 나중에 언젠가 React Native 에서 (자동으로 되도록) 패치를 내주지 않을까 싶다."),"\n",a.createElement(n.p,null,"(",a.createElement(n.a,{href:"https://github.com/facebook/react-native/issues/18472#issuecomment-407759054"},"출처"),")"),"\n",a.createElement(n.h3,null,"4. Xcode 빌드 에러: PhaseSriptExecution failed with a nonzero exit code"),"\n",a.createElement(n.p,null,'빌드 target의 [Build Phases] 탭의 [Bundle React Native code and images] 항목에서 "For install builds only" 선택 항목을 체크하면 해결된다.'),"\n",a.createElement(n.p,null,'만약 Sentry 를 연동하고 있다면, [Upload Debug Symbols to Sentry] 항목에 대해서도 "For install builds only" 선택 항목을 체크하자.'))}var c,o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},i=t(1880),u=t(1883),m=t(3723),s=t(1858),d=t(3904),p=t(891),E=t(5534);const f=e=>{let{data:n,children:t}=e;const{title:l,date:r,tags:c,heroImage:o,heroImageAlt:i}=n.mdx.frontmatter,d=o?(0,m.c)(o):null;return console.log("image",d),a.createElement(s.Z,null,a.createElement("h1",null,l),a.createElement(b,null,c.map((e=>a.createElement("li",{key:e},a.createElement(u.rU,{to:"/tags/"+e},e))))),a.createElement("div",null,r),!!d&&a.createElement(m.G,{image:d,alt:null!=i?i:""}),a.createElement(E.Z,null,t))},b=p.ZP.ul(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),g=e=>{var n,t;let{data:l}=e;const{frontmatter:{title:r,slug:c,heroImage:o},excerpt:i}=l.mdx,u=o?(0,m.c)(o):null;return a.createElement(d.Z,{title:r,og:{title:r,path:c,type:"article",description:i,image:null==u||null===(n=u.images)||void 0===n||null===(t=n.fallback)||void 0===t?void 0:t.src}})};function h(e){return a.createElement(f,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-210823-react-native-ios-build-error-index-mdx-ef242ef77e4df79fe258.js.map