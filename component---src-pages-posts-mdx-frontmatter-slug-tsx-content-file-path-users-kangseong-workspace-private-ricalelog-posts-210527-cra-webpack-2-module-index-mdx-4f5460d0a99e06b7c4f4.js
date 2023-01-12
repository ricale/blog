"use strict";(self.webpackChunkricalelog=self.webpackChunkricalelog||[]).push([[684],{6719:function(e,n,l){l.r(n),l.d(n,{Head:function(){return f},default:function(){return x}});var t=l(1151),r=l(7294);function c(e){const n=Object.assign({h2:"h2",p:"p",code:"code",a:"a",blockquote:"blockquote",em:"em",pre:"pre",h3:"h3",ol:"ol",li:"li",ul:"ul",h4:"h4",strong:"strong"},(0,t.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h2,null,"1. 서문"),"\n",r.createElement(n.p,null,"create-react-app(이하 CRA) 으로 React 웹앱을 만들었다. 타입스크립트TypeScript도 쓰고 싶어서 만들 때 ",r.createElement(n.code,null,"--template typescript")," 옵션도 주었다. 웹팩Webpack 설정은 어떻게 되어 있는지 살펴보고 싶어서 ",r.createElement(n.code,null,"yarn eject")," 명령어도 실행했다."),"\n",r.createElement(n.p,null,"(위 문단이 이해되지 않는다면 이 글이 다소 이해하기 어려울 수도 있다. 그럴 경우 ",r.createElement(n.a,{href:"https://create-react-app.dev/docs/documentation-intro/"},"create-react-app 공식 문서"),"를 참고하자.)"),"\n",r.createElement(n.p,null,"이번에는 웹팩의 ",r.createElement(n.code,null,"module")," 설정을 살펴보자."),"\n",r.createElement(n.h2,null,"2. ",r.createElement(n.code,null,"module")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"module")," 설정은 프로젝트 내 여러 타입의 모듈들을 어떻게 다룰지 정의하는 옵션이다. ",r.createElement(n.a,{href:"https://webpack.js.org/configuration/module/"},"웹팩 공식 문서"),"에는 아래와 같이 설명되어 있다."),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"These options determine how the different types of modules within a project will be treated."),"\n"),"\n",r.createElement(n.p,null,"(",r.createElement(n.em,null,"모듈Module"),"은 기능 단위로 작게 나누어진 코드 뭉치다. ES6+에 익숙하다면 ",r.createElement(n.code,null,"export")," 문으로 선언되고 ",r.createElement(n.code,null,"import")," 문으로 사용되는 것이 모듈이라고 이해하면 되고, CommonJS에 익숙하다면 ",r.createElement(n.code,null,"exports"),"로 선언 및 정의되고 ",r.createElement(n.code,null,"require()"),"로 사용되는 것을 모듈이라고 이해하면 된다. ",r.createElement(n.a,{href:"https://webpack.js.org/concepts/modules/"},"참고 문서"),")"),"\n",r.createElement(n.p,null,"CRA로 생성된 앱에는 ",r.createElement(n.code,null,"module")," 설정에 ",r.createElement(n.code,null,"strictExportPresence"),"와 ",r.createElement(n.code,null,"rules"),", 이렇게 두 가지 값이 설정되어 있다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  // ...\n  module: {\n    strictExportPresence: true,\n    rules: [\n      // ...\n    ]\n  },\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"module.strictExportPresence"),"는 ",r.createElement(n.code,null,"true"),"로 설정 시 모듈 내에 exports 문이 없을 때 에러를 발생시키도록 한다. (",r.createElement(n.code,null,"false"),"라면 warning만 발생한다.)"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"module.rules"),"는 웹팩이 모듈을 생성(초기화)할 때 사용하는 규칙들이다. 이 규칙들로 모듈이 생성되는 방법을 변경할 수 있다."),"\n",r.createElement(n.h3,null,"2.1. ",r.createElement(n.code,null,"module.rules")),"\n",r.createElement(n.p,null,"CRA로 생성된 앱의 ",r.createElement(n.code,null,"modules.rules"),"에는 두 규칙이 정의되어 있다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"// ...\nrules: [\n  { parser: { requireEnsure: false } },\n  {\n    oneOf: [\n      {\n        /* ... */\n      },\n      {\n        /* ... */\n      },\n      {\n        /* ... */\n      },\n      {\n        /* ... */\n      },\n      // ...\n    ],\n  },\n];\n")),"\n",r.createElement(n.p,null,"첫번째는 아래와 같은 비교적 짧은 규칙이다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{ parser: { requireEnsure: false } },\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"module.rules"),"에 사용되는 규칙에는 보통 ",r.createElement(n.code,null,"test")," 값이 포함된다. ",r.createElement(n.code,null,"test"),"는 문자열이나 정규표현식, 혹은 그것들의 배열값으로, ",r.createElement(n.code,null,"test")," 조건에 일치하는 파일이 갖고 있는 모듈에 대해서 해당 규칙을 적용하라는 의미이다. (자세한 예는 아래에서 볼 수 있다.)"),"\n",r.createElement(n.p,null,"하지만 위 규칙에는 ",r.createElement(n.code,null,"test")," 값이 없다. 이는 모든 유형의 파일에 대해 적용되는 공통 규칙이라는 의미다. 이 규칙은 이 앱의 모든 모듈에서",r.createElement(n.code,null,"require.ensure")," 기능을 쓰지 못하도록 하는 규칙이다. (",r.createElement(n.code,null,"require.ensure"),"는 모듈을 동적으로 불러오는 CommonJS 문법이다. 자세한 사항은 ",r.createElement(n.a,{href:"https://webpack.js.org/api/module-methods/#requireensure"},"문서")," 참고)"),"\n",r.createElement(n.p,null,"또다른 규칙은 ",r.createElement(n.code,null,"oneOf"),"라는 값을 갖는 객체다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  oneOf: [\n    {\n      /* ... */\n    },\n    {\n      /* ... */\n    },\n    {\n      /* ... */\n    },\n    {\n      /* ... */\n    },\n    // ...\n  ];\n}\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"oneOf"),"는 규칙들의 배열인데, 이는 특정 모듈을 생성할 때 조건에 맞는 첫번째 규칙만 적용하도록 지정하는 규칙이다."),"\n",r.createElement(n.p,null,"다시 정리하자면 모든 모듈은 위의 ",r.createElement(n.code,null,"{ parser: { requireEnsure: false } }")," 규칙이 일괄적으로 적용되고, ",r.createElement(n.code,null,"oneOf")," 규칙 중에서는 첫 번째로 매칭되는 규칙만 적용된다."),"\n",r.createElement(n.h3,null,"2.2. 규칙의 조건"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"oneOf")," 배열에는 9개의 규칙이 포함되어 있다. 해당 규칙들의 조건들만 추려보면 다음과 같다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  test: [/\\.avif$/],\n  // ...\n},\n{\n  test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],\n  // ...\n},\n{\n  test: /\\.(js|mjs|jsx|ts|tsx)$/,\n  include: paths.appSrc,\n  // ...\n},\n{\n  test: /\\.(js|mjs)$/,\n  exclude: /@babel(?:\\/|\\\\{1,2})runtime/,\n  // ...\n},\n{\n  test: cssRegex,\n  exclude: cssModuleRegex,\n  // ...\n},\n{\n  test: cssModuleRegex,\n  // ...\n},\n{\n  test: sassRegex,\n  exclude: sassModuleRegex,\n  // ...\n},\n{\n  test: sassModuleRegex,\n  // ...\n},\n{\n  // `test` 값 없음\n  exclude: [/\\.(js|mjs|jsx|ts|tsx)$/, /\\.html$/, /\\.json$/],\n}\n")),"\n",r.createElement(n.p,null,"위 설정에 따르면, CRA 앱의 모듈은 아래와 같은 순서로 조건을 확인하고 조건에 맞는 규칙에 따라 모듈을 생성한다."),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,r.createElement(n.code,null,".avif")," 파일인지 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 첫번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".bmp"),", ",r.createElement(n.code,null,".gif"),", ",r.createElement(n.code,null,".jpg"),", ",r.createElement(n.code,null,".jpeg"),", ",r.createElement(n.code,null,".png")," 파일인지 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 두번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".js"),", ",r.createElement(n.code,null,".mjs"),", ",r.createElement(n.code,null,".jsx"),", ",r.createElement(n.code,null,".ts"),", ",r.createElement(n.code,null,".tsx")," 파일인지 확인한다. 동시에 ",r.createElement(n.code,null,"paths.appSrc")," 경로에 있는 파일인지도 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 세번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".js"),", ",r.createElement(n.code,null,".mjs")," 파일인지 확인한다. @babel/runtime 패키지에 포함되지 않았는지도 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 네번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".css")," 파일인지 확인한다. ",r.createElement(n.code,null,".module.css")," 파일이 아닌지도 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 다섯번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".module.css")," 파일인지 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 여섯번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".scss"),", ",r.createElement(n.code,null,".sass")," 파일인지 확인한다. ",r.createElement(n.code,null,".module.scss"),", ",r.createElement(n.code,null,"module.sass")," 파일이 아닌지도 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 일곱번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".module.scss"),", ",r.createElement(n.code,null,"module.sass")," 파일인지 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 여덟번째 규칙을 사용해 모듈을 생성한다."),"\n",r.createElement(n.li,null,"아니면 다음 규칙을 확인한다."),"\n"),"\n"),"\n",r.createElement(n.li,null,r.createElement(n.code,null,".js"),", ",r.createElement(n.code,null,".mjs"),", ",r.createElement(n.code,null,".jsx"),", ",r.createElement(n.code,null,".ts"),", ",r.createElement(n.code,null,".tsx"),", ",r.createElement(n.code,null,".html"),", ",r.createElement(n.code,null,".json")," 파일이 아닌지 확인한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"조건이 일치하면 마지막 규칙을 사용해 모듈을 생성한다."),"\n"),"\n"),"\n"),"\n",r.createElement(n.h3,null,"2.3. 로더"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"loader")," 혹은 ",r.createElement(n.code,null,"use")," 값은 모듈을 생성할 때 쓰일 로더를 지정할 때 쓰인다."),"\n",r.createElement(n.p,null,"(로더Loader는 모듈 생성 시 전처리를 담당하는 라이브러리다. 일반적으로 웹팩에 포함되지 않는 라이브러리들이므로, 별도로 설치를 해주어야 한다. ",r.createElement(n.a,{href:"https://webpack.js.org/loaders/"},"공식 문서")," 참고.)"),"\n",r.createElement(n.p,null,"CRA로 생성된 앱에서는 이미지 파일을 모듈로 생성할 때는 ",r.createElement(n.code,null,"url-loader"),", 자바스크립트 관련 파일에는 ",r.createElement(n.code,null,"babel-loader"),", CSS 관련 파일에는 ",r.createElement(n.code,null,"style-loader"),", ",r.createElement(n.code,null,"css-loader"),", ",r.createElement(n.code,null,"postcss-loader")," 등, 그 이외의 파일들에는 ",r.createElement(n.code,null,"file-loader"),"를 사용한다."),"\n",r.createElement(n.p,null,"유형에 따라 어떻게 설정되었는지 살펴보자."),"\n",r.createElement(n.h4,null,"2.3.1. 이미지 모듈"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"2.2. 규칙의 조건"),"에서 살펴보았던 규칙들 중 ",r.createElement(n.code,null,".avif")," 파일을 위한 첫번째 규칙, ",r.createElement(n.code,null,".bmp"),", ",r.createElement(n.code,null,".gif"),", ",r.createElement(n.code,null,".jpg"),", ",r.createElement(n.code,null,".jpeg"),", ",r.createElement(n.code,null,".png")," 파일들을 위한 두번째 규칙이 ",r.createElement(n.code,null,"url-loader"),"를 사용한다. 해당 규칙의 전문은 아래와 같다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  test: [/\\.avif$/],\n  loader: require.resolve('url-loader'),\n  options: {\n    limit: imageInlineSizeLimit,\n    mimetype: 'image/avif',\n    name: 'static/media/[name].[hash:8].[ext]',\n  },\n},\n{\n  test: [/\\.bmp$/, /\\.gif$/, /\\.jpe?g$/, /\\.png$/],\n  loader: require.resolve('url-loader'),\n  options: {\n    limit: imageInlineSizeLimit,\n    name: 'static/media/[name].[hash:8].[ext]',\n  },\n},\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"loader")," 이외에도 ",r.createElement(n.code,null,"options")," 값이 눈에 들어온다. 이 값은 웹팩이 직접 사용하는 값이 아니라 로더 라이브러리에 전달될 설정값이다."),"\n",r.createElement(n.p,null,"첫번째 규칙에 의하면 ",r.createElement(n.code,null,".avif"),"파일은 먼저 용량(단위: byte)이 ",r.createElement(n.code,null,"imageInlineSizeLimit"),"보다 큰지 검사한다. 만약 크다면 ",r.createElement(n.code,null,"url-loader"),"가 아닌 ",r.createElement(n.code,null,"file-loader"),"가 사용된다. 만약 작다면 ",r.createElement(n.code,null,"url-loader"),"에 의해 ",r.createElement(n.code,null,"'image/avif'")," mimetype 에 맞춰 ",r.createElement(n.em,null,"base64 URI")," 형식으로 변환된다. 변환된 파일은 번들링 결과가 저장되는 디렉토리에 ",r.createElement(n.code,null,"static/media/[name].[hash:8].avif")," 형식으로 저장된다."),"\n",r.createElement(n.p,null,"두번째 규칙도 첫번째 규칙과 거의 동일하다. 대상이 ",r.createElement(n.code,null,".bmp"),", ",r.createElement(n.code,null,".gif"),", ",r.createElement(n.code,null,".jpg"),", ",r.createElement(n.code,null,".jpeg"),", ",r.createElement(n.code,null,".png")," 파일들이라는 것과, mimetype 강제가 없다는 것만 다르다."),"\n",r.createElement(n.h4,null,"2.3.2. 자바스크립트 모듈"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"2.2. 규칙의 조건"),"에서 살펴보았던 규칙들 중 ",r.createElement(n.code,null,".js"),", ",r.createElement(n.code,null,".mjs"),", ",r.createElement(n.code,null,".jsx"),", ",r.createElement(n.code,null,".ts"),", ",r.createElement(n.code,null,".tsx")," 파일들을 위한 세번째 규칙, 네번째 규칙은 ",r.createElement(n.code,null,"babel-loader"),"를 사용한다. 해당 규칙 전문은 아래와 같다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  test: /\\.(js|mjs|jsx|ts|tsx)$/,\n  include: paths.appSrc,\n  loader: require.resolve('babel-loader'),\n  options: {\n    customize: require.resolve(\n      'babel-preset-react-app/webpack-overrides'\n    ),\n    presets: [\n      [\n        require.resolve('babel-preset-react-app'),\n        {\n          runtime: hasJsxRuntime ? 'automatic' : 'classic',\n        },\n      ],\n    ],\n\n    plugins: [\n      [\n        require.resolve('babel-plugin-named-asset-import'),\n        {\n          loaderMap: {\n            svg: {\n              ReactComponent:\n                '@svgr/webpack?-svgo,+titleProp,+ref![path]',\n            },\n          },\n        },\n      ],\n      isEnvDevelopment &&\n        shouldUseReactRefresh &&\n        require.resolve('react-refresh/babel'),\n    ].filter(Boolean),\n    cacheDirectory: true,\n    cacheCompression: false,\n    compact: isEnvProduction,\n  },\n},\n{\n  test: /\\.(js|mjs)$/,\n  exclude: /@babel(?:\\/|\\\\{1,2})runtime/,\n  loader: require.resolve('babel-loader'),\n  options: {\n    babelrc: false,\n    configFile: false,\n    compact: false,\n    presets: [\n      [\n        require.resolve('babel-preset-react-app/dependencies'),\n        { helpers: true },\n      ],\n    ],\n    cacheDirectory: true,\n    cacheCompression: false,\n\n    sourceMaps: shouldUseSourceMap,\n    inputSourceMap: shouldUseSourceMap,\n  },\n},\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"paths.appSrc"),"(",r.createElement(n.code,null,"PROJECT_ROOT/src")," 디렉토리) 안에 있는 자바스크립트 파일들에 세번째 규칙이, 밖에 있는 자바스크립트 파일들에 네번째 규칙이 적용된다. ",r.createElement(n.code,null,"options"),"값을 통해 전처리 및 최적화를 다르게 하고 있다는 걸 알 수 있다. 관련된 자세한 내용은 추후 다른 글에서 다시 정리해보겠다."),"\n",r.createElement(n.h4,null,"2.3.3. 스타일시트 모듈"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"2.2. 규칙의 조건"),"에서 살펴보았던 규칙들 중 ",r.createElement(n.code,null,".css"),", ",r.createElement(n.code,null,".module.css"),", ",r.createElement(n.code,null,".scss"),", ",r.createElement(n.code,null,".sass"),", ",r.createElement(n.code,null,".module.scss"),", ",r.createElement(n.code,null,"module.sass")," 파일들을 위한 다섯번째 규칙부터 여덟번째 규칙까지는 스타일시트와 관련된 여러 로더를 사용한다. 해당 규칙 전문은 아래와 같다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  test: cssRegex,\n  exclude: cssModuleRegex,\n  use: getStyleLoaders({\n    importLoaders: 1,\n    sourceMap: isEnvProduction\n      ? shouldUseSourceMap\n      : isEnvDevelopment,\n  }),\n  sideEffects: true,\n},\n{\n  test: cssModuleRegex,\n  use: getStyleLoaders({\n    importLoaders: 1,\n    sourceMap: isEnvProduction\n      ? shouldUseSourceMap\n      : isEnvDevelopment,\n    modules: {\n      getLocalIdent: getCSSModuleLocalIdent,\n    },\n  }),\n},\n{\n  test: sassRegex,\n  exclude: sassModuleRegex,\n  use: getStyleLoaders(\n    {\n      importLoaders: 3,\n      sourceMap: isEnvProduction\n        ? shouldUseSourceMap\n        : isEnvDevelopment,\n    },\n    'sass-loader'\n  ),\n  sideEffects: true,\n},\n{\n  test: sassModuleRegex,\n  use: getStyleLoaders(\n    {\n      importLoaders: 3,\n      sourceMap: isEnvProduction\n        ? shouldUseSourceMap\n        : isEnvDevelopment,\n      modules: {\n        getLocalIdent: getCSSModuleLocalIdent,\n      },\n    },\n    'sass-loader'\n  ),\n},\n")),"\n",r.createElement(n.p,null,"모든 규칙이 ",r.createElement(n.code,null,"getStyleLoaders")," 함수를 쓰고 있는데, 이는 설정 파일 내에 선언된 함수이다. 해당 함수는 각 규칙에 알맞는 로더 설정을 반환한다. 첫번째 인자로 ",r.createElement(n.code,null,"css-loader")," 에 쓰일 ",r.createElement(n.code,null,"options")," 값을 받고 두번째 인자는 대상이 SASS 파일일 경우에만 받으며 ",r.createElement(n.code,null,"sass-loader"),"를 써달라는 의미로 쓰인다."),"\n",r.createElement(n.p,null,"세부 옵션을 다 정리하면 너무 길어지니 간략히 하면 ",r.createElement(n.code,null,"*.css")," 파일들은 아래 로더들을 순서대로 적용한다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/webpack-contrib/postcss-loader"},"postcss-loader"),": ",r.createElement(n.a,{href:"https://github.com/postcss/postcss"},"PostCSS"),"(CSS에 자바스크립트 플러그인을 적용할 수 있게 도와주는 라이브러리)가 적용된 코드를 순수한 CSS로 변환한다."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://webpack.js.org/loaders/css-loader/"},"css-loader"),": CSS 안에 ",r.createElement(n.code,null,"@import"),", ",r.createElement(n.code,null,"url()")," 문을 해석(resolve)해 불러온다. 단, 이 로더의 결과는 자동으로 번들링에 반영되지 않는다. ",r.createElement(n.code,null,"style-loader")," 등 다른 로더와 조합해서 써야 한다."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://webpack.js.org/loaders/style-loader/"},"style-loader"),": CSS를 ",r.createElement(n.code,null,"<style>"),"태그로 감싸서 DOM에 삽입한다.","\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"프로덕션 빌드라면 ",r.createElement(n.code,null,"style-loader")," 대신 ",r.createElement(n.a,{href:"https://webpack.js.org/plugins/mini-css-extract-plugin/"},"MiniCssExtractPlugin.loader"),"를 사용한다. 이 로더는 CSS를 ",r.createElement(n.code,null,"import"),"한 자바스크립트 파일과 맞춰서 여러 CSS 파일로 나누어 저장한다."),"\n"),"\n"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"*.sass"),", ",r.createElement(n.code,null,"*.scss")," 파일들은 아래 로더들이 순서대로 적용된다."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://github.com/webpack-contrib/sass-loader"},"sass-loader"),": SASS를 CSS로 변환한다."),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://www.npmjs.com/package/resolve-url-loader"},"resolve-url-loader"),": 분산되어 저장되어있던 SASS 파일들의 상대 경로 관련 이슈를 해결해준다."),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"postcss-loader")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"css-loader")),"\n",r.createElement(n.li,null,r.createElement(n.code,null,"style-loader"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"프로덕션 빌드라면 ",r.createElement(n.code,null,"style-loader")," 대신 ",r.createElement(n.code,null,"MiniCssExtractPlugin.loader"),"를 사용한다."),"\n"),"\n"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"sideEffect")," 옵션은 해당 파일이 다른 파일에도 영향을 주는지 알려주는 옵션이다. 만약 ",r.createElement(n.code,null,"true")," 값이면 해당 규칙에 의해 불려오는 파일은 트리 셰이킹Tree Shaking에 영향받지 않고 무조건 로드된다. 자세한 사항은 ",r.createElement(n.a,{href:"https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free"},"트리 셰이킹 문서"),"를 참고. (왜 ",r.createElement(n.code,null,".css"),"와 ",r.createElement(n.code,null,".scss"),", ",r.createElement(n.code,null,".sass")," 규칙에만 ",r.createElement(n.code,null,"sideEffect")," 옵션이 붙어있는지는 ",r.createElement(n.a,{href:"https://github.com/webpack/webpack/issues/6571"},"이 이슈"),"를 참고.)"),"\n",r.createElement(n.h4,null,"2.3.4. 기타 파일"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"2.2. 규칙의 조건"),"에서 살펴보았던 규칙들 중 아홉번째 규칙은 위 여덟 개의 규칙의 조건에 해당하지 않은 기타 파일들을 위한 규칙이며 ",r.createElement(n.code,null,"file-loader"),"를 사용한다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},"{\n  loader: require.resolve('file-loader'),\n  exclude: [/\\.(js|mjs|jsx|ts|tsx)$/, /\\.html$/, /\\.json$/],\n  options: {\n    name: 'static/media/[name].[hash:8].[ext]',\n  },\n},\n")),"\n",r.createElement(n.p,null,r.createElement(n.code,null,"file-loader"),"는 특별한 처리 없이 해당 파일을 ",r.createElement(n.code,null,"outputPath")," 로 복사한다."),"\n",r.createElement(n.p,null,"또한 자바스크립트 관련 파일은(",r.createElement(n.code,null,".js"),", ",r.createElement(n.code,null,".jsx"),", ",r.createElement(n.code,null,".mjs"),", ",r.createElement(n.code,null,".ts"),", ",r.createElement(n.code,null,".tsx"),") ",r.createElement(n.code,null,"exclude")," 조건에 포함되었는데, 이는 일반적인 자바스크립트 관련 파일들은 세번째 네번째 규칙에서 모두 처리되었을 것이며 처리되지 않은 파일들은 CSS 관련 로더가 런타임에 동적으로 만든 파일일 가능성이 높기 때문이다."),"\n",r.createElement(n.p,null,"더불이 ",r.createElement(n.code,null,".html"),"과 ",r.createElement(n.code,null,".json"),"도 제외되었는데 이 두 유형은 웹팩의 내장 로더가 처리하므로 별도의 설정이 필요 없기 때문이다."),"\n",r.createElement(n.h2,null,"3. 결론"),"\n",r.createElement(n.p,null,"CRA로 생성한 앱의 웹팩 ",r.createElement(n.code,null,"module")," 설정은 이미지 파일, 자바스크립트 관련 파일, 스타일시트 파일, 그리고 기타 파일을 위한 로더 설정이 되어 있음을 간단히 살펴보았다."),"\n",r.createElement(n.p,null,"어디까지나 훑어본 것이기 때문에 자바스크립트 관련 파일들에 관한 설정이나 스타일시트 파일들에 관한 설정을 자세히 살펴보지는 못했다. 이 설정들은 추후 다른 글을 통해 조금 더 자세히 살펴보도록 하겠다."))}var a,o,m=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?r.createElement(n,e,r.createElement(c,e)):c(e)},s=l(1880),u=l(1883),d=l(3723),E=l(1858),i=l(3904),p=l(891);const g=e=>{let{data:n,children:l}=e;const{title:t,date:c,tags:a,heroImage:o,heroImageAlt:m}=n.mdx.frontmatter,s=o?(0,d.c)(o):null;return r.createElement(E.Z,null,r.createElement("h1",null,t),r.createElement(h,null,a.map((e=>r.createElement("li",{key:e},r.createElement(u.rU,{to:"/tags/"+e},e))))),r.createElement("div",null,c),!!s&&r.createElement(d.G,{image:s,alt:null!=m?m:""}),r.createElement(b,null,l))},h=p.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: ","px;\n\n  margin: 0;\n  padding: 0;\n  list-style: none;\n\n  > li {\n    padding: ","px ","px\n      0px;\n    border-radius: 2px;\n\n    background-color: ",";\n    color: ",";\n\n    > a {\n      text-decoration: none;\n    }\n  }\n"])),(e=>e.theme.dimens.gutter),(e=>e.theme.dimens.thin),(e=>e.theme.dimens.gutter),(e=>e.theme.colors.tag),(e=>e.theme.colors.onTag)),b=p.ZP.div(o||(o=(0,s.Z)(["\n  word-break: keep-all;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p {\n    padding: 0;\n  }\n\n  h1 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h2 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h3 {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  ul,\n  ol,\n  table {\n    margin-top: ","px;\n    margin-bottom: ","px;\n  }\n\n  li > ul,\n  li > ol {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  blockquote {\n    position: relative;\n\n    margin-left: 0;\n    margin-right: 0;\n    padding: 16px 30px;\n    border-left: 1px solid ",";\n    border-left-width: 10px;\n\n    background-color: ",";\n\n    > :first-child {\n      margin-top: 0;\n    }\n    > :last-child {\n      margin-bottom: 0;\n    }\n    > ul,\n    > ol {\n      padding-left: 20px;\n    }\n  }\n\n  blockquote:before {\n    content: '\"';\n\n    position: absolute;\n    top: 15px;\n    left: 5px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n  blockquote:after {\n    content: '\"';\n\n    position: absolute;\n    bottom: -15px;\n    right: 10px;\n\n    font-size: 3rem;\n    color: ",";\n  }\n\n  code {\n    padding: ","px\n      ","px ","px;\n    border-radius: 2px;\n\n    font-size: 0.875em;\n\n    background-color: ",";\n    color: ",";\n  }\n\n  pre {\n    margin: ","px 0;\n    padding: ","px;\n\n    background-color: ",";\n    color: ",";\n    line-height: 140%;\n    overflow-x: auto;\n  }\n\n  pre > code {\n    padding: unset;\n    border-radius: unset;\n    background-color: unset;\n    color: unset;\n  }\n\n  table {\n    border-collapse: collapse;\n    td,\n    th {\n      border: 1px solid ",";\n      padding: ","px\n        ","px;\n    }\n  }\n"])),(e=>3.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>3*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>2.5*e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquote),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.colors.blockquoteBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.thin),(e=>e.theme.colors.code),(e=>e.theme.colors.onCode),(e=>e.theme.dimens.margin),(e=>e.theme.dimens.margin),(e=>e.theme.colors.codeblock),(e=>e.theme.colors.onCodeblock),(e=>e.theme.colors.tableBorder),(e=>e.theme.dimens.spacing),(e=>e.theme.dimens.gutter)),f=e=>{let{data:n}=e;return r.createElement(i.Z,{title:n.mdx.frontmatter.title})};function x(e){return r.createElement(g,e,r.createElement(m,e))}}}]);
//# sourceMappingURL=component---src-pages-posts-mdx-frontmatter-slug-tsx-content-file-path-users-kangseong-workspace-private-ricalelog-posts-210527-cra-webpack-2-module-index-mdx-4f5460d0a99e06b7c4f4.js.map