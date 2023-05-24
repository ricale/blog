const getGatsbyPluginMdxConfig = () => ({
  resolve: "gatsby-plugin-mdx",
  options: {
    mdxOptions: {
      remarkPlugins: [require("remark-gfm")],
    },
    gatsbyRemarkPlugins: [
      "gatsby-remark-codeblock",
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
          maxWidth: 600,
          quality: 80,
          backgroundColor: "none",
          showCaptions: true,
        },
      },
      "gatsby-remark-copy-linked-files",
    ],
  },
});

export default getGatsbyPluginMdxConfig;
