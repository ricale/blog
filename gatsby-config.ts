import type { GatsbyConfig } from "gatsby";

const isDevelopment = process.env.NODE_ENV === "development";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "tech blog",
    author: "ricale",
    siteUrl: "https://ricale.kr/blog/",
    description: "기술 블로그 by ricale",
  },
  pathPrefix: "/blog",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              backgroundColor: "none",
            },
          },
        ],
      },
    },
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
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

export default config;
