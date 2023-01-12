"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[826],{7015:function(e,n,t){t.r(n),t.d(n,{Head:function(){return v},default:function(){return f}});var l=t(1151),a=t(7294);function r(e){const n=Object.assign({p:"p",h2:"h2",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"사고가 발생했다."),"\n",a.createElement(n.p,null,"어제 배포한 앱에서 발생한 사고였다. 구글 로그인 기능이 동작하지 않았다. 확인해보니 구글 로그인 라이브러리 초기화 시 사용하는 토큰 값이 잘못되어 있었다. 해당 값은 환경 변수에 넣어서 관리하고 있었는데, 빌드한 사람(본인)의 환경 변수 최신화가 제대로 이뤄지지 않았던 것이다. 개발/테스트 환경에서는 해당 값이 문제가 없었기 때문에, 프로덕션 레벨까지 배포되고 나서야 문제를 인지할 수 있었다."),"\n",a.createElement(n.p,null,"부랴부랴 환경 변수를 최신화해서 앱을 재배포했다. 불행 중 다행으로 아직 사용자가 많지 않은 제품이었기에, 큰 사고로 이어지지는 않았다. 하지만 사고는 사고다. 5인 미만의 작은 팀이라 별다른 도구 없이도 잘 관리할 거라 생각했던 안일함이 사고를 불러왔다. 그리고 이대로라면 앞으로 같은 일이 반복되지 말란 법도 없었다."),"\n",a.createElement(n.p,null,"그래서 우리는 이 사고의 원인을 근본적으로 해결할 방법을 찾기로 했다."),"\n",a.createElement(n.h2,null,"현황"),"\n",a.createElement(n.p,null,"우리 앱은 ",a.createElement(n.a,{href:"https://github.com/facebook/react-native"},"React Native"),"로 구현되었다. 환경변수 사용에는 ",a.createElement(n.a,{href:"https://github.com/luggit/react-native-config"},"react-native-config")," 라이브러리를 사용한다."),"\n",a.createElement(n.p,null,"앱은 안드로이드로만 배포된다. 추후에 iOS에도 앱을 출시할 생각이지만, 당장은 몇몇 사정 때문에 출시하지 않고 있다. (따라서 해결책을 찾을 때는 안드로이드 빌드만 고려할 생각이다. iOS에 대해서는 미래의 자신에게 맡기기로 했다.)"),"\n",a.createElement(n.p,null,"환경 변수(Environment Variables)에는 보통 각 환경마다 다르게 적용되는 상수 값들이 들어 있다. 프로젝트의 성격에 따라 다르겠지만 그 값들에는 DB 접속 정보, 서드 파티 접속 정보 같이 보안상 민감한 정보들도 포함하고 있다. 따라서 환경 변수를 관리하는 파일을 코드 저장소에서 제외하도록 권장되고 있다. (보다 자세한 정보는 ",a.createElement(n.a,{href:"https://12factor.net/ko/"},"The Twelve-Factor App")," 의 ",a.createElement(n.a,{href:"https://12factor.net/ko/config"},"3번 항목"),"을 참고)"),"\n",a.createElement(n.p,null,"권장된 내용처럼 우리도 환경변수 파일들을 모두 코드 저장소에서 제외했다. 그리고 값이 변경될 경우 (인원이 많지 않다 보니) slack 등의 메신저를 통해 값을 주고 받아 각자 최신화를 해왔다."),"\n",a.createElement(n.p,null,"팀원들 모두 이것이 문제라고 인지하고는 있었지만, 당장은 고치지 않아도 된다고 생각하고 있었다."),"\n",a.createElement(n.h2,null,"어떻게 해결해야 할까?"),"\n",a.createElement(n.p,null,"첫번째 방법으로는 툴을 쓰는 것이다. ",a.createElement(n.a,{href:"https://www.vaultproject.io/"},"Vault"),"가 가장 널리 쓰이는 툴인 듯 하다. ",a.createElement(n.a,{href:"https://www.envkey.com/"},"EnvKey"),", ",a.createElement(n.a,{href:"https://envault.dev/"},"Envault")," 등의 대체제들도 눈에 띈다."),"\n",a.createElement(n.p,null,"하지만 일단 툴은 사용하지 않는다. 급박하게 돌아가고 있는 현재 스프린트에 최대한 지장을 주지 않는 선에서 빠르게 적용해야 하기 때문이다. 더군다나 보안과 관련된 툴을 급하게 적용하고 싶지는 않다."),"\n",a.createElement(n.p,null,"두번째 방법은 비공개 코드 저장소를 활용하는 것이다. 이미 익숙한 툴이고, 쉘스크립트를 통해 자동화하기도 쉽다."),"\n",a.createElement(n.h3,null,"비공개 코드 저장소"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://github.com/"},"github"),"을 사용했다. 프로젝트의 루트 디렉토리에 환경변수 파일을 모두 저장했다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,".\n+-- .env\n+-- .env.dev\n+-- .env.staging\n+-- .env.production\n")),"\n",a.createElement(n.h3,null,"쉘스크립트"),"\n",a.createElement(n.p,null,"빌드 전에 환경 변수 파일들을 다운로드 받는다. 정확히는 위에서 만든 코드 저장소에서 clone 혹은 pull 로 코드를 받아온다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-bash"},'# $1에는 dev/staging/production 등 환경 이름이 들어간다.\nENVFILE_PATH="./env/.env.$1"\nif [ -f "$ENVFILE_PATH" ]; then\n  # 파일이 존재하면 코드 저장소로부터 파일을 업데이트한다.\n  cd env && git checkout master && git pull origin master && cd ../\nelse\n  # 파일이 존재하지 않으면 코드 저장소로부터 파일을 다운로드 받는다.\n  git clone https://github.com/OWNER/PROJECT.git ./env\nfi\n')),"\n",a.createElement(n.p,null,"(당연하지만 ",a.createElement(n.code,null,"ENVFILE_PATH"),"로 사용된 경로 및 파일은 ",a.createElement(n.code,null,".gitignore"),"에 포함되어 있어야 한다.)"),"\n",a.createElement(n.p,null,"그다음에는 안드로이드 빌드 명령어를 실행한다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-bash"},"# $2에는 assembleReleasedev 등 안드로이드 빌드 시 쓰이는 빌드 타입이 들어간다.\ncd ./android && ENVFILE=env/.env.$1 ./gradlew $2 && cd ../\n")),"\n",a.createElement(n.p,null,"보너스로 빌드가 완료되면 자동으로 폴더를 열어주자."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-bash"},"BUILD_DIR=\"$(echo ${2:8} | tr '[A-Z]' '[a-z]')\"\nopen ./android/app/build/outputs/apk/$BUILD_DIR\n")),"\n",a.createElement(n.p,null,"마지막으로 작성이 완료된 쉘스크립트를 ",a.createElement(n.code,null,"package.json")," 에 등록하면 된다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'// package.json\n{\n  // ...\n  "scripts": {\n    // ...\n    "build-android-dev": "bash scripts/build-android.sh dev assembleReleasedev",\n    "build-android-staging": "bash scripts/build-android.sh staging assembleReleasedev",\n    // ...\n  }\n}\n')),"\n",a.createElement(n.p,null,"이제 빌드 시 위에 등록해둔 명령어를 사용하기만 하면, 환경 변수 파일은 빌드 전에 항상 자동으로 최신화 될 것이다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"$ yarn build-android-dev\n")),"\n",a.createElement(n.h2,null,"개선할 점"),"\n",a.createElement(n.p,null,"보안 상으로 문제가 있을까봐 앱 코드 저장소에서 제외시킨 환경변수 파일들을 ",a.createElement(n.strong,null,"같은 계정이 관리하는 다른 코드 저장소"),"로 옮겼다. 결국 해당 계정이 뚫리면 환경변수 파일도 같이 뚫리는 거잖아? 라는 생각을 하지 않을 수 없다. 같은 코드 저장소에 있는 것보다야 당연히 낫겠지만, 하나마나한 짓을 한게 아닌가 하는 생각이 들기도 한다."),"\n",a.createElement(n.p,null,"다음에는 관련 툴(특히 ",a.createElement(n.a,{href:"https://www.vaultproject.io/"},"Vault"),")에 대해 자세히 알아봐야 할 것 같다."),"\n",a.createElement(n.h2,null,"참고 자료"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://www.reddit.com/r/ruby/comments/7fau96/question_how_does_your_team_manage_environment/"},"reddit.com - Question: How does your team manage environment variables?")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://dev.to/espoir/how-do-you-keep-your-environment-variable-synchronized-among-your-development-team-175a"},"dev.to - How do you keep your environment variable synchronized among your development team.")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://www.reddit.com/r/devops/comments/c7u29k/managing_env_variables_for_a_small_dev_team/"},"reddit.com - Managing env variables for a small dev team")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://www.vaultproject.io/"},"Vault")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://www.envkey.com/"},"EnvKey")),"\n",a.createElement(n.li,null,a.createElement(n.a,{href:"https://envault.dev/"},"Envault")),"\n"))}var o,m,c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},i=t(1880),d=t(1883),u=t(3723),s=t(1858),p=t(3904),h=t(891);const g=e=>{let{data:n,children:t}=e;const{title:l,date:r,tags:o,heroImage:m,heroImageAlt:c}=n.mdx.frontmatter,i=m?(0,u.c)(m):null;return a.createElement(s.Z,null,a.createElement("h1",null,l),a.createElement(E,null,o.map((e=>a.createElement("li",{key:e},a.createElement(d.rU,{to:"/tags/"+e},e))))),a.createElement("div",null,r),!!i&&a.createElement(u.G,{image:i,alt:null!=c?c:""}),a.createElement(b,null,t))},E=h.ZP.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),b=h.ZP.div(m||(m=(0,i.Z)(["\n  word-break: keep-all;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    padding: 0;\n  }\n\n  h1 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h2 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h3 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  ul,\n  ol,\n  table {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 30px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: 15px;\n    left: 5px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -15px;\n    right: 10px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n\n  code {\n    padding: ","px\n      ","px ","px;\n    border-radius: 2px;\n\n    font-size: 0.875em;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  pre {\n    margin: ","px 0;\n    padding: ","px;\n\n    background-color: ",";\n    color: ",";\n    line-height: 140%;\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  table {\n    border-collapse: collapse;\n    td,\n    th {\n      border: 1px solid ",";\n      padding: ","px\n        ","px;\n    }\n  }\n"])),(e=>3.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>3*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>2.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.thin),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.codeblock),(e=>e.theme.colors.onCodeblock),(e=>e.theme.colors.tableBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter)),v=e=>{let{data:n}=e;return a.createElement(p.Z,{title:n.mdx.frontmatter.title})};function f(e){return a.createElement(g,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-210304-auto-update-env-variable-files-index-mdx-c7eb36fc4514bac5d50a.js.map