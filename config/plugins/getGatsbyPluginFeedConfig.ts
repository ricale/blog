import { SiteMetadata } from "../types";

type BaseSerializeParams = {
  query: {
    site: {
      siteMetadata: SiteMetadata;
    };
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
          slug: string;
          date: string;
          previewContent: string;
        };
        excerpt: string;
      }[];
    };
  };
};

const getGatsbyPluginFeedConfig = (siteMetadata: SiteMetadata) => ({
  resolve: "gatsby-plugin-feed",
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            author
            siteUrl
            description
          }
        }
      }
    `,
    feeds: [
      {
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
        serialize: ({ query: { site, allMdx } }: BaseSerializeParams) => {
          return allMdx.nodes.map((node) => ({
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
        output: "/rss.xml",
        title: `${siteMetadata.title} by ${siteMetadata.author}`,
      },
    ],
  },
});

export default getGatsbyPluginFeedConfig;
