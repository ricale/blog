import { SiteMetadata, PostFrontmatter } from "../types";

type BySeriesSerializeParams = {
  query: {
    site: {
      siteMetadata: SiteMetadata;
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

const getGatsbyPluginFeedByGroupConfig = (siteMetadata: SiteMetadata) => ({
  resolve: "gatsby-plugin-feed-by-group",
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

export default getGatsbyPluginFeedByGroupConfig;
