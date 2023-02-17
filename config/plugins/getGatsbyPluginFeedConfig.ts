import { SiteMetadata, PostFrontmatter } from "../types";

type BaseSerializeParams = {
  query: {
    site: {
      siteMetadata: SiteMetadata & {
        site_url: string;
      };
      pathPrefix: string;
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

type BySeriesSerializeParams = {
  query: {
    site: {
      siteMetadata: SiteMetadata & {
        site_url: string;
      };
      pathPrefix: string;
    };
    allMdx: {
      group: {
        fieldValue: string;
        totalCount: number;
        edges: {
          node: {
            excerpt: string;
            frontmatter: Omit<PostFrontmatter, "tags"> & {
              originalDate: string;
            };
          };
        }[];
      }[];
    };
  };
};

type BySeriesOutputParams =
  BySeriesSerializeParams["query"]["allMdx"]["group"][0];

const getGatsbyPluginFeedConfig = (siteMetadata: SiteMetadata) => ({
  resolve: "gatsby-plugin-feed-by-group",
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
      {
        query: `
          {
            allMdx(limit: 2000, filter: { frontmatter: { date: { ne: "" } } }) {
              group(field: { frontmatter: { series: SELECT } }) {
                fieldValue
                edges {
                  node {
                    excerpt
                    frontmatter {
                      title
                      slug
                      originalDate: date
                      date(formatString: "YYYY. M. D.")
                    }
                  }
                }
              }
            }
          }
        `,
        serialize: ({ query: { site, allMdx } }: BySeriesSerializeParams) => {
          const result = allMdx.group.map((grp) => ({
            fieldValue: grp.fieldValue,
            items: grp.edges
              .sort((a, b) =>
                b.node.frontmatter.originalDate.localeCompare(
                  a.node.frontmatter.originalDate
                )
              )
              .map(({ node }) => ({
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
              })),
          }));
          return result;
        },
        output: (group: BySeriesOutputParams) =>
          `/series/${group.fieldValue}/rss.xml`,
        title: `${siteMetadata.title} by ${siteMetadata.author}`,
      },
    ],
  },
});

export default getGatsbyPluginFeedConfig;
