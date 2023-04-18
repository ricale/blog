import { SiteMetadata } from "../types";

type ResolveSiteUrlParams = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

type ResolvePagesParams = {
  allMdx: {
    nodes: {
      frontmatter: {
        slug: string;
        date: string;
      };
    }[];
  };
};

type SerializeParams = {
  path: string;
  lastmod: string;
};

const getGatsbyPluginSitemapConfig = () => ({
  resolve: "gatsby-plugin-sitemap",
  options: {
    query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      allMdx(
        filter: { frontmatter: { date: { ne: "" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            slug
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
    `,
    resolveSiteUrl: ({ site }: ResolveSiteUrlParams) =>
      site.siteMetadata.siteUrl,
    resolvePages: ({ allMdx: { nodes: mdxs } }: ResolvePagesParams) => {
      const posts = mdxs.map((mdx) => ({
        path: `/posts/${mdx.frontmatter.slug}/`,
        lastmod: mdx.frontmatter.date,
      }));

      return [
        ...posts,
        { path: "/", lastmod: posts[0].lastmod },
        { path: "/posts/", lastmod: posts[0].lastmod },
        { path: "/series/", lastmod: posts[0].lastmod },
        { path: "/tags/", lastmod: posts[0].lastmod },
      ];
    },
    serialize: ({ path, lastmod }: SerializeParams) => ({ url: path, lastmod }),
  },
});

export default getGatsbyPluginSitemapConfig;
