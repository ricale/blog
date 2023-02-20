const getGatsbyPluginMdxConfig = () => ({
  resolve: "gatsby-plugin-mdx",
  options: {
    mdxOptions: {
      remarkPlugins: [require("remark-gfm")],
    },
    gatsbyRemarkPlugins: [
      "gatsby-remark-codeblock-titles",
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
          showCaptions: true,
        },
      },
    ],
  },
});

export default getGatsbyPluginMdxConfig;
