"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[607],{2687:function(e,n,a){a.r(n),a.d(n,{Head:function(){return f},default:function(){return E}});var t=a(1151),l=a(7294);function i(e){const n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",h3:"h3",pre:"pre",h4:"h4",ul:"ul",li:"li",div:"div",em:"em",h5:"h5",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"한 프로젝트는 여러 환경에서 빌드 혹은 실행될 수 있다. 가장 단순하게는 개발 환경과 운영(production) 환경 두 환경으로 분리할 수 있고, local, dev, stage, test 등을 보다 세분화해서 분리할 수도 있다."),"\n",l.createElement(n.p,null,"이 글에서는 여러 환경에 따라 React Native 프로젝트를 빌드 및 실행해야 할 때, 어떻게 설정을 나누어 관리할 수 있는지 설명한다."),"\n",l.createElement(n.h2,null,"1. react-native-config 설치"),"\n",l.createElement(n.p,null,"일단 ",l.createElement(n.a,{href:"https://github.com/luggit/react-native-config"},"react-native-config"),"를 설치한다. 이 라이브러리는 ",l.createElement(n.code,null,".env.ENV_NAME"),"파일들을 이용해 각 환경별로 필요한 값을 관리할 수 있다."),"\n",l.createElement(n.h3,null,"1.1. react-native-dotenv vs react-native-config"),"\n",l.createElement(n.p,null,"react-native-config 라이브러리와 비슷한 라이브러리로는 ",l.createElement(n.a,{href:"https://github.com/goatandsheep/react-native-dotenv"},"react-native-dotenv"),"가 있다. 두 라이브러리는 단일 환경 사용자 측면에서는 거의 동일하지만, 현재 react-native-dotenv 가 다중 환경 지원이 제대로 되지 않는 이슈가 있어서 여기서 사용하기에는 적합하지 않다. (GitHub issue - ",l.createElement(n.a,{href:"https://github.com/goatandsheep/react-native-dotenv/issues/131"},"APP_ENV doesn't work as expected")," 참고)"),"\n",l.createElement(n.p,null,"따라서 이 글에서는 react-native-config 를 사용한다."),"\n",l.createElement(n.h3,null,"1.2. ",l.createElement(n.code,null,".env")," 파일 작성"),"\n",l.createElement(n.p,null,"프로젝트 root 디렉토리에, 만들려는 환경만큼 파일을 생성한다. (이 파일들은 ",l.createElement(n.code,null,".gitignore")," 에 추가되는 게 좋다. ",l.createElement(n.a,{href:"https://github.com/luggit/react-native-config/issues/422"},"참고"),")"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-json"},".env             // 기본, local 환경을 위한 env 파일로 사용\n.env.dev         // dev 환경을 위한 env 파일\n.env.stage       // stage 환경을 위한 env 파일\n.env.production  // production 환경을 위한 env 파일\n")),"\n",l.createElement(n.p,null,"각 파일에서 원하는 값은 ",l.createElement(n.code,null,"key=value")," 형식으로 작성하면 된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-json"},"BUILD_ENV=LOCAL\nBASE_URL=http://localhost:3000\n")),"\n",l.createElement(n.h2,null,"2. 안드로이드 설정"),"\n",l.createElement(n.h3,null,"2.1. ",l.createElement(n.code,null,"android/app/build.gradle")),"\n",l.createElement(n.p,null,"안드로이드 설정에서 가장 중요한 것은 이 ",l.createElement(n.code,null,"android/app/build.gradle")," 파일이다. 하나씩 설정을 추가해보자."),"\n",l.createElement(n.h4,null,"2.1.1. react-native-config 를 위한 설정"),"\n",l.createElement(n.p,null,"react-native-config 는 ",l.createElement(n.a,{href:"https://github.com/luggit/react-native-config#extra-step-for-android"},"단일 환경이 아닌 여러 빌드 환경을 설정할 때는, autolinking 말고도 추가로 해줘야 할 설정이 있다.")," 문서를 자세히 읽지 않으면 놓치기 쉬우므로 정리하고 넘어간다."),"\n",l.createElement(n.p,null,"파일 최상단에 (",l.createElement(n.code,null,'apply plugin: "com.android.application"')," 바로 아랫줄에) 아래 코드를 추가한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"apply from: project(':react-native-config').projectDir.getPath() + \"/dotenv.gradle\"\n")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"android.defaultConfig")," 항목에는 아래 코드를 추가한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},'android {\n    // ...\n    defaultConfig {\n        // ...\n        // APP_PACKAGE_NAME 대신 자신의 앱 패키지명을 넣으면 된다\n        resValue "string", "build_config_package", "APP_PACKAGE_NAME"\n    }\n    // ...\n}\n')),"\n",l.createElement(n.h4,null,"2.1.2. 환경 분리를 위한 설정"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"android.buildTypes")," 항목에 환경별 설정을 추가한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},'android {\n    // ...\n    buildTypes {\n        debug {\n            signingConfig signingConfigs.debug\n            applicationIdSuffix ".dev"\n        }\n        release {\n            // Caution! In production, you need to generate your own keystore file.\n            // see https://facebook.github.io/react-native/docs/signed-apk-android.\n            signingConfig signingConfigs.debug\n            minifyEnabled enableProguardInReleaseBuilds\n            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n        }\n        //\n        // 아래부터가 추가되는 코드\n        //\n        devDebug {\n            initWith debug\n            applicationIdSuffix ".dev"\n            matchingFallbacks = [\'debug\']\n        }\n        devRelease {\n            initWith release\n            applicationIdSuffix ".dev"\n            matchingFallbacks = [\'release\']\n        }\n        stageDebug {\n            initWith debug\n            applicationIdSuffix ".test"\n            matchingFallbacks = [\'debug\']\n        }\n        stageRelease {\n            initWith release\n            applicationIdSuffix ".test"\n            matchingFallbacks = [\'release\']\n        }\n    }\n}\n')),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"devDebug"),", ",l.createElement(n.code,null,"devRelease")," 등이 추가된 환경들이다. 앞에 붙은 ",l.createElement(n.code,null,"dev"),", ",l.createElement(n.code,null,"stage")," 가 빌드 환경 이름이고 뒤에 붙은 ",l.createElement(n.code,null,"Debug"),", ",l.createElement(n.code,null,"Release")," 가 빌드 유형 정보다. (네이밍 방식이 정해진 것은 아니다. 꼭 이 형식을 따를 필요는 없다.)"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"initWith"),": 해당 타입을 기반으로 새 타입을 생성하겠다는 의미다."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"applicationIdSuffix"),": 앱이 빌드되면 패키지명 뒤에 이 값을 붙여준다. 즉 같은 앱을 환경별로 나눠서 설치할 수 있게 해준다."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"matchingFallbacks"),": 앱 빌드 시 환경이름을 buildTypes 이름이 아니라 이 값으로 대체한다. (",l.createElement(n.code,null,"devDebug"),"로 빌드해도 React Native 코드 상에서 환경 이름에 접근할 때는 ",l.createElement(n.code,null,"debug"),"가 된다.) 기본 node 환경에도 대응되게 하려면 이 값을 설정해주는 게 좋다."),"\n"),"\n",l.createElement(n.h4,null,"2.1.3. 스토어키 등록"),"\n",l.createElement(n.p,null,"안드로이드 스튜디오에서는 실행 및 빌드 시 원하는 ",l.createElement(n.code,null,".env.ENVNAME")," 파일 적용을 할 수 없다. (사실 가능할 수도 있다. 찾아보진 않았다.) 커맨드라인에서는 가능한데, 실행은 아무 추가적 설정 없이 가능한 반면 (릴리즈)빌드는 스토어 키 설정을 해주어야 한다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"android.signingConfigs")," 에 릴리즈용 키 정보를 등록하면 된다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},"signingConfigs {\n    debug {\n        storeFile file('debug.keystore')\n        storePassword 'android'\n        keyAlias 'androiddebugkey'\n        keyPassword 'android'\n    }\n    // 이름을 release 로 하긴 했지만 다른 이름도 가능하다.\n    // 단, 그 경우 `android.buildTypes.release`의 `signingConfig` 값도 같이 바꿔주어야 한다.\n    release {\n        if(project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {\n            storeFile file(MYAPP_UPLOAD_STORE_FILE)\n            storePassword MYAPP_UPLOAD_STORE_PASSWORD\n            keyAlias MYAPP_UPLOAD_KEY_ALIAS\n            keyPassword MYAPP_UPLOAD_KEY_PASSWORD\n        }\n    }\n}\n")),"\n",l.createElement(n.p,null,"보다 자세한 내용은 React Native 공식 문서 (",l.createElement(n.a,{href:"https://reactnative.dev/docs/signed-apk-android"},"Publishing to Google Play Store"),") 를 참고."),"\n",l.createElement(n.h3,null,"2.2. 환경별 파일 분리"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"./android/app/src/main")," 디렉토리에 아래와 같은 파일들이 존재할 것이다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"AndroidManifest.xml")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"MainActivity.java")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"MainApplication.java")),"\n",l.createElement(n.li,null,"각종 리소스(이미지, ",l.createElement(n.code,null,"res/values/*.xml")," 등)"),"\n"),"\n",l.createElement(n.p,null,"해당 파일들을 환경별로 따로 관리하고 싶다면, 환경별로 디렉토리를 별도로 만들어 관리하면 된다."),"\n",l.createElement(n.p,null,"예를 들어 devDebug 환경의 ",l.createElement(n.code,null,"AndroidManifest.xml")," 파일을 따로 관리하고 싶다면 ",l.createElement(n.code,null,"android/app/src/devDebug")," 디렉토리를 만든 뒤, 해당 디렉토리에 ",l.createElement(n.code,null,"AndroidManifest.xml")," 파일을 새로 작성하면 된다. (일반적으로는 기존의 파일을 복사해와서 수정하고 싶은 부분만 수정하게 될 것이다)"),"\n",l.createElement(n.h3,null,"2.3. Firebase 설정 파일 분리"),"\n",l.createElement(n.p,null,"일반적으로 Firebase 설정 파일인 ",l.createElement(n.code,null,"google-services.json"),"은 ",l.createElement(n.code,null,"android/app")," 디렉토리에 위치하게 된다. 하지만 환경별로 분리해주고 싶을 경우, 2.2. 와 동일한 방법으로 환경별로 각각 파일을 만들어주어야 한다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"android/app/google-services.json"),": 환경별 Firebase 설정 파일이 없을 경우 일괄적으로 적용되는 설정 파일"),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"android/app/src/ENV_NAME/google-services.json"),": ENV_NAME 환경에만 적용되는 Firebase 설정 파일"),"\n"),"\n",l.createElement(n.h3,null,"2.4. 실행/빌드 명령어 작성"),"\n",l.createElement(n.p,null,"환경별 실행/빌드 명령어를 ",l.createElement(n.code,null,"package.json")," 파일에 작성해두자."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'{\n  // ...\n  "scripts": {\n    // ...\n    "android": "ENVFILE=.env react-native run-android --appIdSuffix=dev",\n    // 아래 주석 처리된 내용은 2.4.1. 항목 참고.\n    // "android-dev": "ENVFILE=.env.dev react-native run-android --variant=devDebug --appIdSuffix=dev",\n    // "android-stage": "ENVFILE=.env.stage react-native run-android --variant=stageDebug --appIdSuffix=test",\n    "android-dev": "ENVFILE=.env.dev react-native run-android",\n    "android-stage": "ENVFILE=.env.stage react-native run-android",\n    "build-android-dev": "cd ./android && ENVFILE=.env.dev ./gradlew assembleDevRelease && cd ../",\n    "build-android-stage": "cd ./android && ENVFILE=.env.stage ./gradlew assembleStageRelease && cd ../",\n    "build-android-production": "cd ./android && ENVFILE=.env.production ./gradlew assembleRelease && cd ../",\n  }\n}\n')),"\n",l.createElement(n.p,null,"이렇게 하면 커맨드라인에서 아래 같은 명령어들로 안드로이드앱을 실행 및 빌드하는 것이 가능해진다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"yarn android                  # 로컬/개발 환경 실행\nyarn android-dev              # dev/개발 환경 실행\nyarn android-stage            # stage/개발 환경 실행\nyarn build-android-dev        # dev 빌드\nyarn build-android-stage      # stage 빌드\nyarn build-android-production # production 빌드\n")),"\n",l.createElement(n.h4,null,"2.4.1. ",l.createElement(n.code,null,"react-native run-android --variant=VAR_NAME")," 이슈"),"\n",l.createElement(n.p,null,"현재 ",l.createElement(n.code,null,"react-native run-android --variant=VAR_NAME")," 명령어를 사용하면 metro 번들러가 정상적으로 동작하지 않아 에러가 발생한다. 의도적인 것인지 버그인지는 불명, 해결 방법도 불명이다."),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"react-native bundle")," 명령어를 선행하면 에러는 제거할 수 있지만 hot-reload 가 동작하지 않는다. (이 말은 js/ts 파일이 수정될 때마다 다시 빌드해줘야 함을 의미한다.)"),"\n",l.createElement(n.p,null,"따라서 ",l.createElement(n.code,null,"react-native run-android")," 명령어 사용 시에는 ",l.createElement(n.code,null,"variant")," 옵션을 사용하지 않기를 권한다. ",l.createElement(n.code,null,"ENVFILE")," 옵션만 써줘도 테스트는 충분히 할 수 있다."),"\n",l.createElement(n.h2,null,"3. iOS 설정"),"\n",l.createElement(n.h3,null,"3.1. Configuration 추가"),"\n",l.createElement(n.p,null,"PROJECT - [Info] - [Configuration] 에서 [+] 버튼 클릭한다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/ff4e3687a316f734ad42172da3e6a9dc/a2954/3-1-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 68.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABmklEQVR42qWS2XLiMBRE9RVY8oYly3jDAxZbUpCpeQhh+IV5n///hB7dS5kBspHKQ5dtWeo6t1tisXSYdSWqiUFTVyhLUslauSV+bh6wWDj0fY/VaoXpdIq6rtE0zSvNf9QQpTvCdAek1S9EaY66KvlnmqawmYbVOeI4ZiVJgiiKoJR6pTBUkFJBbA5/MXv6g7g9QiYG5aRgijzPoY1GlFk+IGWA0WiEIAjeNBxMxe+XZyxd50k8gadwzsFayyRElHolSYyiKM6jaq3PxJeiNbHxGfW9Q920sJ5q+/jIh6uq8uNXbEJ5rtdr7Pd77HY7tG17Nqfn8E5TiTAMQQo8chEp1LmByS1TJGN9ovR50p7/o4XvStxunM/n2G23TDRbrNH6PImIYsiyjPWeKa2Lyw+i6bqOiaiAUMmrf5TRR3RnQh7Zt5cbw6XQuERyeU2IkqjH4zHvp/VbXRlKKb2J9uWcwqUihsMkWqM4hpE/NVR+PBUl0HbiDxvOjAiHvE53Ud5Xyr0N3qOrllm331+UoEbpEhtfSPhNM9I/7/9/ksTFXdUAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 1 01"\n        title=""\n        src="/static/ff4e3687a316f734ad42172da3e6a9dc/5a190/3-1-01.png"\n        srcset="/static/ff4e3687a316f734ad42172da3e6a9dc/772e8/3-1-01.png 200w,\n/static/ff4e3687a316f734ad42172da3e6a9dc/e17e5/3-1-01.png 400w,\n/static/ff4e3687a316f734ad42172da3e6a9dc/5a190/3-1-01.png 800w,\n/static/ff4e3687a316f734ad42172da3e6a9dc/c1b63/3-1-01.png 1200w,\n/static/ff4e3687a316f734ad42172da3e6a9dc/29007/3-1-01.png 1600w,\n/static/ff4e3687a316f734ad42172da3e6a9dc/a2954/3-1-01.png 2037w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,'[Duplicate "Debug" Configuration] ("Release" 도 크게 상관 없음) 눌러서 필요한 만큼 설정을 추가하자.'),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/233a111102ba2bd1d761a524b40e4854/baa75/3-1-02.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 79.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACF0lEQVR42qVTSZLbMAzUE3KxJVH7Qln7ZsuOMhNXKienavKAvGMu+X0HwIxcsj2HVHLoggQSzSbQNPbzM07THl0/oGk71N2AqulQVRXGaca4nzAMA/q+xziO6LoOTdM8gPOHsYKRt0ek5QAnzGF5CaIoRE1k+W6HXT0i0TtkOpV8nhcUIyil4DjOAzhv2N9ekVx+Y/v1FZ+6X1C2hTTVolCnCZI4QhBr2H4Mc7uBbdtSuMBeg9aM42nG+fwdYRhKIvB9NHWNIs/huR79e/Ap59K3w0WWdYWi/ZxboJQQnvDy8hPH45GuphG4DpqqpOjCpQ1reFRU0UENqWfoOL7m30CEKZHUpEhT9D0XVVFgGPcwSYH0hftD5Ay+1jzPuFx+4DNFx3GvexhMbvA1t9stLCIwKWZJjDzTsuiTWo8Jqa8C2lNkGfq2Qa7f9vC65yj4HJlwmY56byrHkWzy/PSE6XBAP31BQaqrspTokVK19Iz3LyAyGcqaiFXyANhTMmVSoUnRjiyUpimSJJHhsXXCMLqZ9sJzS2iaUjhNkxBvNhuYlGPwYYyMDmBC/r4nFB+uCbmXbOq2baUwp4myyrV5D9SG8/ksB3Pdg7Fvr2wijsnMZGxWGASBxPXLYHV82H3+Q0IxrBsgyUrxZEa9i8lr69chbqAW3L+Ymx7eT/lfcSXkU/lnibat3uPf40rId2dbsMeW9/w/+ANsWrbkGzZ6DAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 1 02"\n        title=""\n        src="/static/233a111102ba2bd1d761a524b40e4854/5a190/3-1-02.png"\n        srcset="/static/233a111102ba2bd1d761a524b40e4854/772e8/3-1-02.png 200w,\n/static/233a111102ba2bd1d761a524b40e4854/e17e5/3-1-02.png 400w,\n/static/233a111102ba2bd1d761a524b40e4854/5a190/3-1-02.png 800w,\n/static/233a111102ba2bd1d761a524b40e4854/c1b63/3-1-02.png 1200w,\n/static/233a111102ba2bd1d761a524b40e4854/29007/3-1-02.png 1600w,\n/static/233a111102ba2bd1d761a524b40e4854/baa75/3-1-02.png 1746w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.h3,null,"3.2. Scheme 추가"),"\n",l.createElement(n.p,null,"최상단 메뉴에서 [Product] - [Scheme] - [Edit Scheme] 을 선택한다. 이후 [Duplicate Scheme] 버튼으로 Scheme 추가한다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/d67f6f9ff61999ef336943e344f1d719/9b1e2/3-2-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 54.49999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzElEQVR42qVSy46UUBBlrxvNdENfHs30C+jhDU0zwMDw6MTMGJfqbHShiT9g4ge48LOPdS8yaTtx5eLkFEXVqVM3JaWP31B//oXo/U+4736gqge0bYs8z1EUBaqqElyWJZIkged58H0fQRAgDEPBU8z/Sc7pC+oP37FvP8G6e4LrB0jThJAKcJGyLFDfd6j6Rwx9J4bwPBeJIkI4Igh8SMrWw427h/L6JWavXtAUXxSuVitsNhuB7Zaws+C4AbkbHUZxSn0+9i71854oEWYk5pXIaM1r08TVbI666WjdW1iWhcVicQYFiixDlhXI8zmM6zUMK4SxcWCYa5jE5toiwR1NjQ8wdE00qioDYwyapgn+J6h2jBdjTAM5S0xVoSiKEJuKz51dfosc5+c8G2PxzUjwr2n/D2lywC4csgtXl+BbTZs9OxUrn63EY1XVqHBsmNaaGvn7qvRE/H2XyyV0XYdG0CmvK1fQ1D+C584yuquHvsWb7h59VaBpGnR9L/iQ00Ucj3R7EbIsQ3o4IIkjRMcayekjguwOEp8o0zlwF7O5jPhmj7ck+EAH3N/maOoawzAIQT/J6d5iOI4D27ZhEzvWDruwgH36im1Y4TcmZj4d3ShcRgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 2 01"\n        title=""\n        src="/static/d67f6f9ff61999ef336943e344f1d719/5a190/3-2-01.png"\n        srcset="/static/d67f6f9ff61999ef336943e344f1d719/772e8/3-2-01.png 200w,\n/static/d67f6f9ff61999ef336943e344f1d719/e17e5/3-2-01.png 400w,\n/static/d67f6f9ff61999ef336943e344f1d719/5a190/3-2-01.png 800w,\n/static/d67f6f9ff61999ef336943e344f1d719/c1b63/3-2-01.png 1200w,\n/static/d67f6f9ff61999ef336943e344f1d719/29007/3-2-01.png 1600w,\n/static/d67f6f9ff61999ef336943e344f1d719/9b1e2/3-2-01.png 1880w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"환경 이름 설정 후 [Run], [Test], [Profile], [Analyze], [Archive] 탭의 Build Configuration 항목을 모두 변경하자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/187417b1e19bd49ef5c8d453419a83f1/fb1ef/3-2-02.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.00000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7ElEQVR42nWSzZKaQBSFeYRMReRfUZF/UAgIGBzMRB1rskg2SWUWqcoy69nOC+QF8gZ5z5N7m9HSqcriq9s0p0+f7r6SaVrw5jNYmgzl7Rs0TYvj8QFFUWBVVajqGvX6PepmjWWWIY4TJEmCmIjiWIyZNE0RBAGkw+MzPj/9xfrnHzSPv5FnJTJayKJVtkSdZ2jbD9i2LTZVSazQNTVumwrFYoE4ihARXH3fhxTVn7C4+wo72WCWtBjrOoaKAl1V4Y0s5KGHrm7w49t3fDkecNx2uO9u8XC3Rbf5CMOwoGkqoUGntdLYz5EWFUx1AF2+ga1r0OgHC0zDwNyZwfVDOnqLVfFOJPFcF1PbJjNDaPUXPX9LTpAjWRawLVOksw0dqkYi3pEN53O4ZMD3E4Qh1RAOzU0mU2JyNjtVyTYNTGghJxsTxiuBRRs5ro9lXiKle3UcR8BmpmleGap0TRJHVmmCU13GP9XTeDQanbEsqz/uhe6ckH+I4+n95P84mV9ypXnZQHqdhGMPBgPBcDiELMtizFWh12dYc4UiQx3cQBnKveEl/ADc1GVZYkF9xj3JY64hPQr3HD9Ujyu6wAkW8FYHTN2oP/JpZ04UU/fvdjtBS83cdR32+72oeZ6fjXuoqX0XXr5BcP8LTlrhH85jPK0Cm2DhAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 2 02"\n        title=""\n        src="/static/187417b1e19bd49ef5c8d453419a83f1/5a190/3-2-02.png"\n        srcset="/static/187417b1e19bd49ef5c8d453419a83f1/772e8/3-2-02.png 200w,\n/static/187417b1e19bd49ef5c8d453419a83f1/e17e5/3-2-02.png 400w,\n/static/187417b1e19bd49ef5c8d453419a83f1/5a190/3-2-02.png 800w,\n/static/187417b1e19bd49ef5c8d453419a83f1/c1b63/3-2-02.png 1200w,\n/static/187417b1e19bd49ef5c8d453419a83f1/29007/3-2-02.png 1600w,\n/static/187417b1e19bd49ef5c8d453419a83f1/fb1ef/3-2-02.png 1879w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"여기서 Build Configuration 은 ",l.createElement(n.em,null,'"3.1. Configuration 추가"')," 에서 추가했던 항목들을 선택할 수 있다. 되도록 Scheme과 Build Configuration은 1:1로 매칭해주는 것이 좋다. (반드시 그래야 하는 것은 아니고, 편의성을 위해서다)"),"\n",l.createElement(n.h5,null,"> Scheme - Build Configuration 설정 예"),"\n",l.createElement(n.table,null,l.createElement(n.thead,null,l.createElement(n.tr,null,l.createElement(n.th,null,"Scheme"),l.createElement(n.th,null,"Build Configuration"))),l.createElement(n.tbody,null,l.createElement(n.tr,null,l.createElement(n.td,null,"my-project"),l.createElement(n.td,null,"(기본값 유지)")),l.createElement(n.tr,null,l.createElement(n.td,null,"my-project-dev"),l.createElement(n.td,null,"Dev")),l.createElement(n.tr,null,l.createElement(n.td,null,"my-project-stage"),l.createElement(n.td,null,"Stage")),l.createElement(n.tr,null,l.createElement(n.td,null,"my-project-production"),l.createElement(n.td,null,"Production")))),"\n",l.createElement(n.h4,null,"3.2.1. Scheme 의 Pre-actions, Post-actions 적용"),"\n",l.createElement(n.p,null,"iOS 는 환경별 ",l.createElement(n.code,null,".env")," 파일 적용이 자동으로 이루어지지 않기 때문에, 별도의 선행 스크립트를 삽입해주어야 한다."),"\n",l.createElement(n.p,null,"[Edit Scheme] 의 [Build] 탭에서 [Pre-actions] 선택해 스크립트를 작성하자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/6375af5569d34f17fc1453ae6b750eb7/0e0c4/3-2-03.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 55.00000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuklEQVR42qWTy46bMBSGeYoEG2xuA5jEDPdLSEUzkUpHXcwDdNtVt31/6e8xpGlGVRdVF58Ox8b/ObZ/W44MkGQarpDY7/fouhHL8oq2bdD3PcZxxDAMayzLElrrPzgej2vMsgyWW31B9fYD6fUb+PAVcXJAXddI0hTS8+ARQogtSgnXdSl31/wdvg9J8xb3npA3JyRKg4kAnDtU7Ygiz5GplLoccT6fqUiFoihQVyUyXdJiEiEBecOjosJxSFA1OJQdHLYDs/dwOYdONYa8Ra8LTN2El/mKUz+hem5QFw2edQ0VH5AZaEfqKUNJReIwhMXiArqdSJ2DMQ6XqoR+eMenM/alj8AL7oREFER3Qj9CEiWQ1KXFVIvqfKVBCdtmtGUOm9l32A37b9gPkbC48CE8H5xtYv8DIw3LCG1dbILsNrGN/wt83aH1qG7EpOust2W+jUUeOzD5ZhvxHpdDcLpQugfrcYE5g4Fs8Xp9wafLBR/GARNZZp7n1Tpd15Hh6cyr6jdlgZKcUH98g656WEbEvBDDbreDUgojvYyh71aDX0h4WZY1/hIx/6zQy8jSGEk1Q33+jig/4ScDRzlKuHI+dAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 2 03"\n        title=""\n        src="/static/6375af5569d34f17fc1453ae6b750eb7/5a190/3-2-03.png"\n        srcset="/static/6375af5569d34f17fc1453ae6b750eb7/772e8/3-2-03.png 200w,\n/static/6375af5569d34f17fc1453ae6b750eb7/e17e5/3-2-03.png 400w,\n/static/6375af5569d34f17fc1453ae6b750eb7/5a190/3-2-03.png 800w,\n/static/6375af5569d34f17fc1453ae6b750eb7/c1b63/3-2-03.png 1200w,\n/static/6375af5569d34f17fc1453ae6b750eb7/29007/3-2-03.png 1600w,\n/static/6375af5569d34f17fc1453ae6b750eb7/0e0c4/3-2-03.png 1884w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},'echo ".env.ENVNAME" > /tmp/envfile\n')),"\n",l.createElement(n.p,null,"[Post-actions] 에는 아래 스크립트를 삽입하자."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},"rm /tmp/envfile\n")),"\n",l.createElement(n.h3,null,"3.3. Firebase 설정 파일 관련 설정 추가"),"\n",l.createElement(n.p,null,"빌드될 때마다 각 환경에 맞는 firebase 설정 파일을 사용하게 하는 설정도 추가할 것이다."),"\n",l.createElement(n.p,null,"일단 ",l.createElement(n.code,null,"./ios/firebaseInfo")," 디렉토리 생성(디렉토리 이름은 이후 설정에서 일관되게 유지하기만 하면 바꿔도 상관 없다)해 환경별로 ",l.createElement(n.code,null,"GoogleService-Info.plist"),"를 작성하자. 아래처럼 파일이 추가될 것이다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.code,null,"./ios/firebaseInfo/GoogleService-Info-dev.plist")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"./ios/firebaseInfo/GoogleService-Info-stage.plist")),"\n",l.createElement(n.li,null,l.createElement(n.code,null,"./ios/firebaseInfo/GoogleService-Info.plist")),"\n"),"\n",l.createElement(n.p,null,"TARGET - [Build Phases] 에서 [+] 버튼을 눌러서 스크립트 추가하자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1b09b777efdfa4cc87579813f34b7c67/e67a8/3-3-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 80%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACkElEQVR42o1UyW7bMBT0TzReI8uxtZKSKIpabCuxHQdJiqLopZf+SHvox0+HdGwETZD2MHjkIzVv3kINyvUOtamQFwqFKqFoVVmiJPI8h1L0F4Vbl5p+7tfbg0PFdc4zIQSklNynGERRjCCMMJvNECxvIKPodCHLEAQBYu5XqxXm87mzwSpAphrcHp6hS+0ChWGIiPdulisMwkTwgoY/9zAZXmHbNjju93g8HtFS0XKxwIKYjMcYv2DEe9PJ2Imw8DzP2SRJMEiffqH+9huz3U98Uj9gtMKu73G33aDIJKI4dsomkwmm0+kFdv8ao9HoRGjWB3z++h1N/4AgUciYatu2MHXt6iiluBB+BKvcEa6WC0iRsH4L+N61q19NsqoyMMZAa+3qYz94T9lZ+YVwOBzi6mroJNt1wHpVqoBm9xRTLomVP+f5+C9FL5icMCJhmrLLlvm1bP/6GhG7K1i7luNkSoUFO2wLPyc8nlvr03fGggGtL43Ct4Q20hWV2q5mSY5GVtjkJbZEVzXYdD26eg0RSRKckBBZkiFcLt8SntfedIZCGtzpHjsO8abbUfHW+dK0RBwrh4SNjKKcM9myF/IdwvHJWkLBD01GhfWGL6bhGBnkVJzTVwi+pPQEERcsTcvz7B+EjB4wuuRHX+6fcNg/4sAXctzs8Gg67HWDHdHlrLXuGOwDwjknXwjtFHaMbtdWsYUNIBnMBpQp02bQmoT/pTBhOhXTfd4/4HZ7j76/x213hwOV9arGpjBY5waNZtDz2LzGmdijQklVua2VtCmtURE1G1NbAqKiepuB4nlBG/LHMbAEMWfODqXv+xdiqzCJczc6urAvp3OdtKiYXiNLVEJBiwJlWiCN+Xfi2PwBJm7UVzo0SVsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 3 01"\n        title=""\n        src="/static/1b09b777efdfa4cc87579813f34b7c67/5a190/3-3-01.png"\n        srcset="/static/1b09b777efdfa4cc87579813f34b7c67/772e8/3-3-01.png 200w,\n/static/1b09b777efdfa4cc87579813f34b7c67/e17e5/3-3-01.png 400w,\n/static/1b09b777efdfa4cc87579813f34b7c67/5a190/3-3-01.png 800w,\n/static/1b09b777efdfa4cc87579813f34b7c67/c1b63/3-3-01.png 1200w,\n/static/1b09b777efdfa4cc87579813f34b7c67/29007/3-3-01.png 1600w,\n/static/1b09b777efdfa4cc87579813f34b7c67/e67a8/3-3-01.png 1740w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,'스크린샷에서는 스크립트 이름을 "Firebase GoogleService-Info.plist" 라고 작성했으나, 다른 이름을 써도 무방하다.'),"\n",l.createElement(n.p,null,'순서는 대략 "Link Binary With Libraries" 와 "Copy Bundle Resources" 사이로 했는데, 다른 위치에 있어도 정상 동작할 수도 있다.'),"\n",l.createElement(n.p,null,"스크립트는 아래 형식으로 작성한다."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-bash"},'PATH_TO_GOOGLE_PLISTS="${PROJECT_DIR}/firebaseInfo"\nPATH_TO_PROJECT="${PROJECT_DIR}"\n\necho "CONFIGURATION: $CONFIGURATION"\n\ncase "${CONFIGURATION}" in\n\n"Debug" )\n                cp -r "$PATH_TO_GOOGLE_PLISTS/GoogleService-Info-dev.plist" "${PATH_TO_PROJECT}/GoogleService-Info.plist" ;;\n\n           "Stage" )\n                cp -r "$PATH_TO_GOOGLE_PLISTS/GoogleService-Info-stage.plist" "${PATH_TO_PROJECT}/GoogleService-Info.plist" ;;\n\n           "Dev" )\n                cp -r "$PATH_TO_GOOGLE_PLISTS/GoogleService-Info-dev.plist" "${PATH_TO_PROJECT}/GoogleService-Info.plist" ;;\n\n           "Release" )\n                cp -r "$PATH_TO_GOOGLE_PLISTS/GoogleService-Info.plist" "${PATH_TO_PROJECT}/GoogleService-Info.plist" ;;\n\n            *)\n                ;;\n        esac\n')),"\n",l.createElement(n.h3,null,"3.4. Package 이름 분리"),"\n",l.createElement(n.p,null,"TARGET - [Build Settings] - [Packaging] - [Product Bundle Identifier] 항목을 수정하자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/248db929d71acac91d8f23d94b05e80b/d4417/3-4-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 80%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACgklEQVR42m1U227aQBT0N0SADdhgMAZjjG+QODa3lIsaiUhVaCM1j1E+oi/tt0/PbLMpLXlYrbV7zpyZOXtszKo7XM9niNMciV6ZrCTBZDJRazwOkMQJytUOhcTnWYZY7uM4VnFhOME0ipCnIYxgHMIfjmDbNgaDgSSPkUnCYrHAarXG8fiA0+kr4ukU19UW2XwBX+IINpvNkKYJhsMhRqMRPG8Awx9PEE0TuB0bTctEr9dTwAwIwxCRVCYDRwq25L7ryN5qKQKdTgeO46Db7arvfr8PIzr+xPzLL9h3P1BLnzEa+oolA9rttloEaLXaAuJgfl1KoqfOm82muuNuWZbKMYrlHp8fTriR3Q9TXF1dYSryDocD1uu1kk8fyYSJ9IwqCKQLanAF6A/6mIQBfK8nsh2YpqmkVlWFPM8V23MA3/ff2VP2OaDneTBM00KjYSrKlhwSkIw2mw3KslTg9JTJBHVd9x+5F4B//Pm7Go2Gkrzf71EUhWrKOSAZM5ENoA0XkrWpGpAMCUKGlMxv3SSqSNNUntNKMddsNSC7fQGoGe52OwXKZFqg7+knE1n4f8kfAmqG2+1WSdbsdAPYlHOpPOf6EJB7vV5HEARqUtgUAlKqLsZnQwX0le+ROc23Zr57qMEcOQhkQtZViafTCd8eH7ES4CgcIxbZkYBXwnqzXKK6LTATPyPxMpQ7ekoiF112hbbdaiKXOVVyRR7Np3eURiteX1/x8vKCqryF+3ZPdowxNGU1PmqETHhuF/vtJxTzOdpNSxXoiF9mvYbj/T2+Pz3hIE2bSsHWmx3vo0dj+SMgG1Zil0P5XorULEvVOc1mnCU+FTc3Sl69VoP9wej9BskwzH6EZFayAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 4 01"\n        title=""\n        src="/static/248db929d71acac91d8f23d94b05e80b/5a190/3-4-01.png"\n        srcset="/static/248db929d71acac91d8f23d94b05e80b/772e8/3-4-01.png 200w,\n/static/248db929d71acac91d8f23d94b05e80b/e17e5/3-4-01.png 400w,\n/static/248db929d71acac91d8f23d94b05e80b/5a190/3-4-01.png 800w,\n/static/248db929d71acac91d8f23d94b05e80b/c1b63/3-4-01.png 1200w,\n/static/248db929d71acac91d8f23d94b05e80b/29007/3-4-01.png 1600w,\n/static/248db929d71acac91d8f23d94b05e80b/d4417/3-4-01.png 1737w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.h3,null,"3.5. 앱 이름 분리"),"\n",l.createElement(n.p,null,"먼저 TARGET - [Build Settings] 에서 앱 이름으로 사용될 User-defined 값을 추가하자."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/a3ae8f8bf4571e77be86fd0a2d38c410/0a344/3-5-01.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 79.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAACjUlEQVR42nVU2XLaQBDkJ0CgW5xCAgkhkEGcwk7KTjkPzkP+/0863RtIAhU/TO0xMz1X77bK+oRqvUJelFdZ/l7zHLPZzEg8jVFmGY67M471EVWxQEZ9zjvZpWlq7MoiQSueTjEaj+G6DkajEWZULpdLbLc1drs93t6+4ePjB4r5HC/7C5qnPSayy3IsaJfnC4zpP5lMMBgM0RpOEszmOULfR7fbNSJlVVVYr9eo6xrH4xF+GMHvdrDPEhyqFS7bJzRc4yiEHwQIAh/9fh+t9+cX/Hx9xZeqxCxJMCZYopVRJWEYwrIs9Ho9eK6Lihml/QgxAWLfg2/b6FInvc+kWnuW9f39HYddjSnLV4ZZNmfJW5RliaIoTMZRFMFxHKyfakSDAXoGyIbNO90LMGCmreFwaJqqVRftdtucm6bB4XAwUrJX0itYkkwRMBObgO4V7A5Q5XQ6nT/90/nWQ0nGSU7jmA0fwKaT2iFH5x+wO0BFehT1UbSICRSyVIuBVKJEwK7nmf1/AbURyG0dkxLLRY4+m+7aPbhqNh086gJSa56KER5Cz6X+PpE7wBuo0+NQhn2cOaQiZXk8RwSSaH/mEL9eGiSkS8iA9mcZ2tfxezQKrDZWpWg0ZQBmSDCflOlZHTw3Z1w4MIEpiM37TwHNnjIOfZzrDTbLAuloiIEydFhS18KGz25bLjFi2a7zt4+flqy13bEw53QH7KeyVlkSDWLCQRkiP/RP7DDEfgQUdfRCduyhytZz8jhVl6XJRuTXR6B3L3qJCeLtarUyd60biOS2l+J0OhkjOY3N5+EanX6XzWZj+KmMdH8LaN6y6peTIqsHAlX6OsvATJ42ctBe2elZ6keSvX3lo4KJo78AZBvGoEC/gKcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 5 01"\n        title=""\n        src="/static/a3ae8f8bf4571e77be86fd0a2d38c410/5a190/3-5-01.png"\n        srcset="/static/a3ae8f8bf4571e77be86fd0a2d38c410/772e8/3-5-01.png 200w,\n/static/a3ae8f8bf4571e77be86fd0a2d38c410/e17e5/3-5-01.png 400w,\n/static/a3ae8f8bf4571e77be86fd0a2d38c410/5a190/3-5-01.png 800w,\n/static/a3ae8f8bf4571e77be86fd0a2d38c410/c1b63/3-5-01.png 1200w,\n/static/a3ae8f8bf4571e77be86fd0a2d38c410/29007/3-5-01.png 1600w,\n/static/a3ae8f8bf4571e77be86fd0a2d38c410/0a344/3-5-01.png 1741w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.p,null,"그 추가한 값을 Info.plist - [Bundle display name] 에 적용하면 된다."),"\n",l.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 800px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/fcd48fb5bb24e6763fafc9f4696b36ac/ab40b/3-5-02.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 79.5%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB60lEQVR42p2SyY7bMBBE9Rle5VVeJG+KrMWW5TU5BMgx//8rlX4EOHEGxmAmhwJFqrtYVc0gq6/K80LnOlVZ5qpPjQ6Hg4qicOsuTbVer7Xb7bRarT5EsV8rOFalvt/vOjdnVWWpb0awMYLlYqF1kuhopKmRnZvG/UvipZbLpeI4VmL/49jgVvYrBfsk1u8fd/2sTdVipiyaaDceKul3lU5GyheRNqNQjyLTr6bWI880nU41GAzU7/f/wdDOgvlspvp41HazUa/bVbvVcmu303EFkTWHVoxKalC/MPXj8Vgdq+lS+4QAqY/HQ6fTSalZCo2kYz8oHg6Hms/nCsPQcs5djuTZ6/XUsovfkzlCGhgAucxMLc3+Zggnk4kjIC9qUQaw+JIQotvtZhMutd1unR3ygZQVRaxHi+Vuw6vrWpfLxdXv93snot1u/yWE4Hq9qrEpUgABt3vLxDAajZyLqqrcHrCH7FkdfY7QvztyghBL2EQZGbPyziCA3NsmHuoAhOzdUFAIvHWaeRoohISbUUUk7H3eiAHe0VuG5IMd1pWFDxEFqImiyBUyFOAVvYIjpIHssixz68beGtPkViwwZb5RTNOrt+fhLPPBlCj0xd7C8/nz/v3589kb4WfgGz9CgI1XN/4vvqTwM/gDO2nHiSFYmNsAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="3 5 02"\n        title=""\n        src="/static/fcd48fb5bb24e6763fafc9f4696b36ac/5a190/3-5-02.png"\n        srcset="/static/fcd48fb5bb24e6763fafc9f4696b36ac/772e8/3-5-02.png 200w,\n/static/fcd48fb5bb24e6763fafc9f4696b36ac/e17e5/3-5-02.png 400w,\n/static/fcd48fb5bb24e6763fafc9f4696b36ac/5a190/3-5-02.png 800w,\n/static/fcd48fb5bb24e6763fafc9f4696b36ac/c1b63/3-5-02.png 1200w,\n/static/fcd48fb5bb24e6763fafc9f4696b36ac/29007/3-5-02.png 1600w,\n/static/fcd48fb5bb24e6763fafc9f4696b36ac/ab40b/3-5-02.png 1736w"\n        sizes="(max-width: 800px) 100vw, 800px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(n.h3,null,"3.6. 실행 및 빌드"),"\n",l.createElement(n.p,null,"이제 Xcode 에서 알맞는 Scheme 을 고른 뒤 [Run] 혹은 [Archive]를 하면 앱을 실행 혹은 빌드할 수 있다."),"\n",l.createElement(n.p,null,"(커맨드라인에서 하는 방법은 찾고 있다.)"),"\n",l.createElement(n.h2,null,"4. 이슈"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"현재 iOS 빌드 시 ",l.createElement(n.code,null,"GoogleService-Info.plist"),"가 제대로 생성되지 않아 에러가 발생하는 현상이 있다. 이 경우 다시 빌드를 하면 문제 없이 된다. 원인 및 해결 방법은 찾는 중이다."),"\n",l.createElement(n.li,null,l.createElement(n.code,null,".env"),"파일들을 어떻게 공유하는 게 좋을지 방법을 고민 중이다. 수정할 때마다 팀원들에게 넘겨주기에는 번거롭고 실수를 유발하기도 쉽다."),"\n"))}var c,r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(i,e)):i(e)},d=a(1880),s=a(1883),o=a(3723),g=a(1858),p=a(3904),m=a(891),b=a(5534);const u=e=>{let{data:n,children:a}=e;const{title:t,date:i,tags:c,heroImage:r,heroImageAlt:d}=n.mdx.frontmatter,p=r?(0,o.c)(r):null;return l.createElement(g.Z,null,l.createElement("h1",null,t),l.createElement(A,null,c.map((e=>l.createElement("li",{key:e},l.createElement(s.rU,{to:"/tags/"+e},e))))),l.createElement("div",null,i),!!p&&l.createElement(o.G,{image:p,alt:null!=d?d:""}),l.createElement(b.Z,null,a))},A=m.ZP.ul(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),f=e=>{var n,a;let{data:t}=e;const{frontmatter:{title:i,slug:c,heroImage:r},excerpt:d}=t.mdx,s=r?(0,o.c)(r):null;return l.createElement(p.Z,{title:i,description:d,path:"posts/"+c,thumbnail:null==s||null===(n=s.images)||void 0===n||null===(a=n.fallback)||void 0===a?void 0:a.src,ogType:"article"})};function E(e){return l.createElement(u,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-210831-react-native-build-setting-for-envs-index-mdx-4e667fa3f6c3a863ef9c.js.map