"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[803],{5919:function(e,n,t){t.r(n),t.d(n,{Head:function(){return A},default:function(){return f}});var a=t(1151),l=t(7294);function r(e){const n=Object.assign({h2:"h2",ul:"ul",li:"li",a:"a",hr:"hr",p:"p",code:"code",pre:"pre",h3:"h3",div:"div",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",blockquote:"blockquote"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h2,null,"References"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://create-react-app.dev/docs/deployment/"},"Create React App documentation - Deployment")," - ",l.createElement(n.a,{href:"https://create-react-app.dev/docs/deployment/#github-pages"},"GitHub Pages")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://docs.github.com/en"},"GitHub Docs")," - ",l.createElement(n.a,{href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},"Managing a custom domain for your GitHub Pages site")),"\n"),"\n",l.createElement(n.hr),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://create-react-app.dev"},"Create React App"),"은 React 웹앱을 만들고자 할 때 프로젝트 초기 셋팅 (디펜던시 설치, 각종 설정 적용 등) 을 도와주는 편리한 툴이다. 이 글에서는 이 툴을 가지고 생성한 앱을 ",l.createElement(n.a,{href:"https://pages.github.com/"},"GitHub Pages"),"에 배포해 볼 것이다."),"\n",l.createElement(n.p,null,"이 글은 위 References 의 두 문서를 보며 진행한 작업을 정리한 것이다. 따라서 영어를 읽는데 문제가 없다면 이 문서를 보는 것 보다는 References 의 두 문서를 보는 것을 권한다."),"\n",l.createElement(n.h2,null,"1. React 앱 생성"),"\n",l.createElement(n.p,null,"먼저 Create React App 으로 웹앱을 만들자."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"create-react-app"),"을 설치하자. 전역적으로 설치해야 하므로 ",l.createElement(n.code,null,"yarn global add")," 명령어를 쓴다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn global add create-react-app\n")),"\n",l.createElement(n.p,null,"그리고 앱을 생성한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"# ./app-name 폴더에 프로젝트 생성\nyarn create react-app app-name\n\n# 현재 폴더에 프로젝트 생성\nyarn create react-app .\n\n# 타입스크립트가 적용된 프로젝트 생성\nyarn create react-app app-name --template typescript\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"./src/index.ts"),"가 엔트리 포인트다. (앱을 구현하는 자세한 방법은 ",l.createElement(n.a,{href:"https://create-react-app.dev/docs/documentation-intro"},"Create React App 공식 문서"),"와 ",l.createElement(n.a,{href:"https://reactjs.org/docs/getting-started.html"},"React 공식 문서"),"를 참고하자.)"),"\n",l.createElement(n.p,null,"개발 중에는 개발 서버를 띄워서 확인하고"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn start # 로컬 개발 서버를 띄운다\n")),"\n",l.createElement(n.p,null,"개발이 끝나면 빌드한 뒤 그 결과물을 배포하면 된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn build # 빌드한다.\n")),"\n",l.createElement(n.h3,null,"1.1. ",l.createElement(n.code,null,"eject")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"create-react-app"),"은 webpack 등 설정과 관련된 것을 ",l.createElement(n.a,{href:"https://github.com/facebook/create-react-app/tree/master/packages/react-scripts"},"react-scripts")," 모듈에 몰아넣어서, 사용자는 신경쓰지 않아도 되게끔 관리하고 있다. webpack 설정을 직접 수정할 일이 없다면 신경쓰지 않아도 되지만, 만약 직접 수정하고 싶다면 ",l.createElement(n.code,null,"eject"),"를 해주어야 한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn eject # `react-scripts` 내부에 숨겨져있던 설정 파일들이 프로젝트에 생성된다.\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"eject")," 과정은 GitHub Pages 기능을 사용하는 데 필요한 과정은 아니므로 생략해도 무방하다."),"\n",l.createElement(n.h2,null,"2. 설정 및 배포"),"\n",l.createElement(n.p,null,"구현한 앱을 GitHub Pages 에 배포하려면 간단한 설정을 해주어야 한다."),"\n",l.createElement(n.h3,null,"2.1. 주소 설정"),"\n",l.createElement(n.p,null,"먼저 프로젝트의 ",l.createElement(n.code,null,"package.json")," 파일에 아래 내용을 추가하자."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'"homepage": "https://username.github.io",\n')),"\n",l.createElement(n.p,null,"만약 username.github.io 코드저장소가 아닌, 기존 프로젝트에 GitHub Pages 기능을 사용하는 것이라면 아래 형식으로 해야 한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'"homepage": "https://username.github.io/my-app",\n')),"\n",l.createElement(n.h3,null,"2.2. 빌드 명령어 추가"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://github.com/tschaub/gh-pages"},"gh-pages"),"를 설치한 뒤"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn add --dev gh-pages\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"package.json"),"의 ",l.createElement(n.code,null,"scripts")," 에 아래 내용을 추가하자."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'"scripts": {\n  "predeploy": "yarn build",\n  "deploy": "gh-pages -b master -d build",\n  // ...\n}\n')),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"-b master")," 옵션은 빌드 결과를 ",l.createElement(n.code,null,"master")," 브랜치로 올려주겠다는 옵션이다. 만약 다른 브랜치를 사용하려면 변경해주어도 좋다. 브랜치를 설정해주지 않으면 (",l.createElement(n.code,null,"-b")," 옵션을 제거하면) ",l.createElement(n.code,null,"gh-pages")," 브랜치에 빌드 결과가 올라간다."),"\n",l.createElement(n.h3,null,"2.3. 빌드"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-shell"},"yarn deploy\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"yarn build")," 명령어를 통해 생성된 빌드 결과가 ",l.createElement(n.code,null,"master")," 브랜치의 새로운 커밋으로 푸시된다."),"\n",l.createElement(n.h3,null,"2.4. GitHub 코드저장소 설정"),"\n",l.createElement(n.p,null,"코드저장소의 [settings] 페이지의 [Pages] 메뉴에 들어가면 GitHub Pages 관련 설정을 수정할 수 있다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/d62cc85c6248ed362b219dff36f0e3a1/7960f/screenshot1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAADbElEQVR42l1T23IaRxBdJJBlwd5gZy+z9+ssC0jcgq1IDrZS5UoZyQ/+ks1XU8knZL3T6VmkRPbDqYZmOH26+7TEaEzns/jP6/Wqvl6s6rKc1/P5TR0lWe36Ye2HcR1Ece0LhALRD6BeUFuOi2+SOsuZK91Ui8cPd3fw+Y9HODx9g/v7Pbx7dwebzQ5ulmsoyxnkxRQKAVYBw+8ixzpUsFr/Ag+fn+DjxwdgbPYkhWH65bf977C73f+zfb9v8mLWBFHRTOfrZrO7bxbLXbPa/NosN7dNtdg2UTrtEGdVEyVlc42/bW/3ze72A6xWm0fpaqgc7KgCM922RrziGi34UCVcmThcIy5XDYrR4zpC5MaWz/2k4gaNue1nnLgJt7yU214Cy+UKCUfqQZlQMLyCE8TYCsCwA0Ay0F9BM2gXJ5YPxI3BpSEUfgzU8rqiphNg+2sklPWDeKxObC5rJlfGNihjC4aqASONgKxbP8GEoWaCitHQCWi6ya+wo4nlwXqzfZTevJUPFlb0IibI+EglqDCEtFxDnC9AR/UKEqlYRJ04HTTMqWMHRGeybvOhgoTmM+HlUD0IAj9mfGIHfCSqmy6QlIGdZzjbGMykBCubgRFEMPFxJEHYRYJRoy6XTQtn6p+WIgiJEwIOlWNL2LYFmonzirB6aIOKUY1S0JFUdjFHcSQC7gmq63AFYXhIuBSEV8qB0AhbLoS6TqFYSsquIUwq8KMS0CZA/VQUBeJEoNsptuqAeIsCXrX8SqFoWSh8IaxudpBXSwiQLC4WYsa43RTn5v68qM5m3VLWSPj2mdB6bvmFcL5636k8OcDpLKMYHshjig4gnQNOLjB/JHyDhLgMcPy0a1nYBc0L2XQJbpjDGFsRIxFFCb4TPhTQMa+a4WnLrwm1ofyFxTlkcfHdd4I2pGHrOX5bLjYtErYG5ry4bPOYtRaNWlTcYpEWL6dVid/KY7tFwu+CcCNso42UpzzMoGILSKMCfLwAdD+EaBM/mXZL6BR2KiMwaArimoRyAXEIYkw6oZCm2VfpcqR9Gmrkb7yUIxr4eKVMjljxiNdyFLkXaM8RzXxEguNINRCkA47pqI7NvxyHPkj987PL/vl5LkkS6/V67OLigg36A/x8xiSpx0T+f/TYGcZ+v88GA3w3GODn/5Dj/y//BY2AiQUgsDWKAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="screenshot1"\n        title=""\n        src="/blog/static/d62cc85c6248ed362b219dff36f0e3a1/5a190/screenshot1.png"\n        srcset="/blog/static/d62cc85c6248ed362b219dff36f0e3a1/772e8/screenshot1.png 200w,\n/blog/static/d62cc85c6248ed362b219dff36f0e3a1/e17e5/screenshot1.png 400w,\n/blog/static/d62cc85c6248ed362b219dff36f0e3a1/5a190/screenshot1.png 800w,\n/blog/static/d62cc85c6248ed362b219dff36f0e3a1/c1b63/screenshot1.png 1200w,\n/blog/static/d62cc85c6248ed362b219dff36f0e3a1/7960f/screenshot1.png 1274w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.h4,null,"Source"),"\n",l.createElement(n.p,null,"GitHub Pages 로 쓰일 브랜치와 디렉토리를 지정할 수 있다. 기본값은 ",l.createElement(n.code,null,"master")," 브랜치와 root 디렉토리이다. 위의 과정을 쭉 따라왔다면 이 값은 수정할 필요가 없다."),"\n",l.createElement(n.h4,null,"Custom domain"),"\n",l.createElement(n.p,null,"이 메뉴에서 커스텀 도메인 설정이 가능하다."),"\n",l.createElement(n.h2,null,"3. 커스텀 도메인 적용"),"\n",l.createElement(n.p,null,"usename.github.io 도메인이 마음에 들지 않는다면 위에서 언급한 Custom domain 메뉴 및 몇 가지 설정을 통해 자신이 갖고 있는 도메인으로 설정할 수 있다."),"\n",l.createElement(n.h3,null,"3.1. 주소 설정"),"\n",l.createElement(n.p,null,'먼저 "2.1. 주소 설정"에서처럼 ',l.createElement(n.code,null,"package.json"),"의 ",l.createElement(n.code,null,"homepage")," 항목을 수정하자."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'"homepage": "http://mydomain.com",\n')),"\n",l.createElement(n.h3,null,"3.2. 도메인 네임서버 CNAME 설정"),"\n",l.createElement(n.p,null,"도메인 등록 업체로 가서 CNAME 을 설정해주어야 한다. 업체마다 설정 페이지가 다를 수 있다. ",l.createElement(n.a,{href:"https://whois.co.kr/"},"후이즈")," 기준으로 [네임서버 고급설정] - [CNAME 레코드 관리] 메뉴로 들어가면 설정할 수 있다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 787px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/52aefe4b389ced368195ca83eb24d861/e619b/screenshot2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 32.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAABP0lEQVR42qWRTW7bMBCFdf8jdFFkXXTROxhQEzcpCmdZW3DrpJFkSvyVROrHX8dyL1BkgIeZeW84eCSz/aEgz3M2mw1Pj4+ECKWZObsbLvxfZEVR8PBwz3a75Xm346xageatUqjWYq3FO7fmEDzWGKnN2mutMdJr3a7csixk2jhUI4TzaGN5KytOpxeqqmacJmIaGWL6h5F+iHR9XPkkuOk3fpxkoe9nnKBxcmC8EIaZLi6kCWodUcJHqa/cVRtGmC437Vh6ytbjukgvvO0mstAncaipaoVzgUWGrw5OryV/SkVZN3ItuzqZF1l0bvlZ/GZ/fOX4UqPqkuQVqXPygjOZDSMuJKz8hpV8deG6kbMOaDdgfFzh+2nVWttTNR5leoYh8fXguMtrPn+r+fRdk/HOuP818CFv+PJD83Hb8hcFoxc+ppVYPgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="screenshot2"\n        title=""\n        src="/blog/static/52aefe4b389ced368195ca83eb24d861/e619b/screenshot2.png"\n        srcset="/blog/static/52aefe4b389ced368195ca83eb24d861/772e8/screenshot2.png 200w,\n/blog/static/52aefe4b389ced368195ca83eb24d861/e17e5/screenshot2.png 400w,\n/blog/static/52aefe4b389ced368195ca83eb24d861/e619b/screenshot2.png 787w"\n        sizes="(max-width: 787px) 100vw, 787px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"호스트명"),l.createElement(n.th,null,"CNAME 레코드"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,l.createElement(n.a,{href:"http://www.mydomain.com"},"www.mydomain.com")),l.createElement(n.td,null,"username.github.io")))),"\n",l.createElement(n.p,null,"위처럼 설정해준다."),"\n",l.createElement(n.h3,null,"3.3. 도메인 네임서버 A 레코드 설정"),"\n",l.createElement(n.p,null,"A 레코드도 설정해주자. ",l.createElement(n.a,{href:"https://whois.co.kr/"},"후이즈")," 기준으로 [네임서버 고급설정] - [A 레코드 관리 (네임서버 호스팅)] 메뉴에서 설정할 수 있다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 771px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/blog/static/be03165219a5dda23714baef497fe252/5d030/screenshot3.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB20lEQVR42m1S247TMBDNryM+gn9g3/qyCN74AlaIS1v3EjbZNHEu9S2O7SSHsdsVCGHpaMZjz/H4zGTGOjw+fsBms8HDw3uw4y8UrcWpkmClQsEt6mFCCAHzPCfrvce6rgTc7R9kzjkcDwcwxrDbbXE6HbHf7XAmm+dnlGWBS1Uln7E9uq6D1pqSF/xvZZ5e5G2Prh/Q91fyu5s/XFE3HHXd4EKIfjwbrgLzsiaEeUl43S+ETBgPZRyaYYQgK/QNiuLRvnCFQU1Qo4e8x6xf0UkHOQaMbkHk6CTdsQGZGmfSxIF3A6RU6cW47DRRxQPKS0tVSVhrUzxWUtUcP/Y5nssLpsnB+QChTCLPtJ2TJpy3CZMjwSlRCGpIWdGXOVr6qqDHiAs+zNgecnz9zrAnK6SmgmYYM94IFREqpUknnnSyk0+JkmLVJWrXJty0AxwR/mQ5nr4RIU2EUCPlhERspjuhMZq619MX+1R+XPH7RflCpHWqXEqZ4iEsOOUFtuyMc/4MNxqanQWLt5j8EpsS0F0N+KDREoT2iDL0kuavk2h6TVDpTozHxkS/JxSNxJec5rUyeCLLpUeWBvKvOYr72P71n/mK+xhf4vn9sBABbz42ePe5wdtPDUrh8RtOmfsLlGC+8AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="screenshot3"\n        title=""\n        src="/blog/static/be03165219a5dda23714baef497fe252/5d030/screenshot3.png"\n        srcset="/blog/static/be03165219a5dda23714baef497fe252/772e8/screenshot3.png 200w,\n/blog/static/be03165219a5dda23714baef497fe252/e17e5/screenshot3.png 400w,\n/blog/static/be03165219a5dda23714baef497fe252/5d030/screenshot3.png 771w"\n        sizes="(max-width: 771px) 100vw, 771px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"호스트명"),l.createElement(n.th,null,"IP 주소"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"mydomain.com"),l.createElement(n.td,null,"185.199.108.153")),l.createElement(n.tr,null,l.createElement(n.td,null,"mydomain.com"),l.createElement(n.td,null,"185.199.109.153")),l.createElement(n.tr,null,l.createElement(n.td,null,"mydomain.com"),l.createElement(n.td,null,"185.199.110.153")),l.createElement(n.tr,null,l.createElement(n.td,null,"mydomain.com"),l.createElement(n.td,null,"185.199.111.153")))),"\n",l.createElement(n.p,null,"주의할 점은 여기에서는 ",l.createElement(n.a,{href:"http://www.mydomain.com"},"www.mydomain.com")," 이 아니라 mydomain.com 이라는 것이다. www 를 뺀다."),"\n",l.createElement(n.h3,null,"3.4. 코드저장소의 Custom domain 설정"),"\n",l.createElement(n.p,null,"코드저장소의 Settings 페이지의 Pages 메뉴에 들어가면 Custom domain 섹션이 존재한다. 이곳에 사용하고자 하는 도메인(mydomain.com)을 적자."),"\n",l.createElement(n.p,null,"Save 버튼을 누르면 자동으로 ",l.createElement(n.code,null,"master")," 브랜치에 추가 커밋이 생성되는데, 해당 커밋에서는 루트 디렉토리에 ",l.createElement(n.code,null,"CNAME")," 파일을 자동 생성해준다. 해당 파일에는 방금 작성한 도메인이 작성되어 있다."),"\n",l.createElement(n.p,null,"주의할 점은, 작업 브랜치의 ",l.createElement(n.code,null,"./public")," 디렉토리에도 동일한 파일을 생성해 주어야 한다. 만약 생성해주지 않으면 다음 ",l.createElement(n.code,null,"yarn deploy")," 때는 ",l.createElement(n.code,null,"CNAME")," 파일이 자동 생성되지 않는다."),"\n",l.createElement(n.h3,null,"3.4. 결과"),"\n",l.createElement(n.p,null,"이제 mydomain.com 으로 내 GitHub Pages 가 접속된다."),"\n",l.createElement(n.h4,null,"결과물 예시"),"\n",l.createElement(n.p,null,"이 ",l.createElement(n.a,{href:"https://github.com/ricale/ricale.github.io"},"코드저장소"),"에서 결과물을 볼 수 있다."),"\n",l.createElement(n.h2,null,"4. 이슈"),"\n",l.createElement(n.h3,null,"4.1. ",l.createElement(n.code,null,"NotServedByPagesError")),"\n",l.createElement(n.p,null,'"3.4. 코드저장소의 Custom domain 설정" 메뉴에서 도메인을 입력하고 Save 버튼을 누르면 아래와 같은 메시지가 뜰 때가 있다.'),"\n",l.createElement(n.blockquote,null,"\n",l.createElement(n.p,null,"Both ",l.createElement(n.a,{href:"http://www.mydomain.com"},"www.mydomain.com")," and its alternate name are improperly configured\nDomain does not resolve to the GitHub Pages server. For more information, see Learn more (NotServedByPagesError). We recommend you change this to a CNAME record pointing to username.github.io."),"\n"),"\n",l.createElement(n.p,null,"정확한 원인이 무엇인지 알아내지 못했는데, 네임서버 설정은 원래 전파되는데 시간이 걸릴 수 있어서 그렇다는 이야기가 있다. 실제로 몇 시간이 지나고 부터는 에러 메시지가 없어졌다."))}var c,o,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},s=t(1880),i=t(1883),p=t(3723),d=t(1858),g=t(3904),u=t(891);const h=e=>{let{data:n,children:t}=e;const{title:a,date:r,tags:c,heroImage:o,heroImageAlt:m}=n.mdx.frontmatter,s=o?(0,p.c)(o):null;return l.createElement(d.Z,null,l.createElement("h1",null,a),l.createElement(E,null,c.map((e=>l.createElement("li",{key:e},l.createElement(i.rU,{to:"/tags/"+e},e))))),l.createElement("div",null,r),!!s&&l.createElement(p.G,{image:s,alt:null!=m?m:""}),l.createElement(b,null,t))},E=u.ZP.ul(c||(c=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),b=u.ZP.div(o||(o=(0,s.Z)(["\n  word-break: keep-all;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    padding: 0;\n  }\n\n  h1 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h2 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h3 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  ul,\n  ol,\n  table {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 30px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: 15px;\n    left: 5px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -15px;\n    right: 10px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n\n  code {\n    padding: ","px\n      ","px ","px;\n    border-radius: 2px;\n\n    font-size: 0.875em;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  pre {\n    margin: ","px 0;\n    padding: ","px;\n\n    background-color: ",";\n    color: ",";\n    line-height: 140%;\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  table {\n    border-collapse: collapse;\n    td,\n    th {\n      border: 1px solid ",";\n      padding: ","px\n        ","px;\n    }\n  }\n"])),(e=>3.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>3*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>2.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.thin),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.codeblock),(e=>e.theme.colors.onCodeblock),(e=>e.theme.colors.tableBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter)),A=e=>{let{data:n}=e;return l.createElement(g.Z,{title:n.mdx.frontmatter.title})};function f(e){return l.createElement(h,e,l.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-210503-create-react-app-github-pages-index-mdx-ecd311cb4f338ca7a28f.js.map