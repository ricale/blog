import type { GatsbyConfig } from "gatsby";

const isDevelopment = process.env.NODE_ENV === "development";

const siteMetadata = {
  title: "tech blog",
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
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [require("remark-gfm")],
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-toc",
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
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                author
                siteUrl
                site_url: siteUrl
                description
              }
              pathPrefix
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: any) => {
              return allMdx.nodes.map((node: any) => ({
                ...node.frontmatter,
                description: node.frontmatter.previewContent ?? node.excerpt,
                url: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}/posts/${node.frontmatter.slug}`,
                custom_elements: [
                  {
                    "content:encoded":
                      node.frontmatter.previewContent ?? node.excerpt,
                  },
                ],
              }));
            },
            query: `
              {
                allMdx(
                  filter: { frontmatter: { date: { ne: "" } } }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    excerpt
                    frontmatter {
                      title
                      slug
                      date(formatString: "YYYY. M. D.")
                      previewContent
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: `${siteMetadata.title} by ${siteMetadata.author}`,
          },
        ],
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};

export default config;
