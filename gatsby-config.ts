import type { GatsbyConfig } from "gatsby";

import getGatsbyPluginFeedConfig from "./config/plugins/getGatsbyPluginFeedConfig";
import getGatsbyPluginMdxConfig from "./config/plugins/getGatsbyPluginMdxConfig";
import getGatsbyPluginSitemapConfig from "./config/plugins/getGatsbyPluginSitemapConfig";

const isDevelopment = process.env.NODE_ENV === "development";

const siteMetadata = {
  title: "techblog",
  author: "ricale",
  siteUrl: "https://ricale.kr/blog/",
  description: "기술 블로그 by ricale",
};

const config: GatsbyConfig = {
  siteMetadata,
  pathPrefix: "/blog",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  // NOTE: ricale
  // 10라인이 넘거나 타입 선언이 필요한 플러그인 설정은 별도의 파일로 분리
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        short_url: "/",
        background_color: "#000000",
        theme_color: "#87ceeb",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    getGatsbyPluginMdxConfig(),
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    ...(isDevelopment
      ? [
          {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "drafts",
              path: `${__dirname}/drafts`,
            },
          },
        ]
      : []),
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-SGJDRX2QGE"],
      },
    },
    getGatsbyPluginFeedConfig(siteMetadata),
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    getGatsbyPluginSitemapConfig(),
  ],
};

export default config;
