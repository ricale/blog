const util = require("mdast-util-toc");

const defaultPrefs = {
  tight: true,
  fromHeading: 1,
  toHeading: 6,
  className: "toc",
  ordered: false,
};

const transformer = (markdownAST, pluginOptions) => {
  const prefs = { ...defaultPrefs };

  const tocMarkdownAST = {
    ...markdownAST,
    children: [],
  };

  markdownAST.children.forEach((node) => {
    if (node.type === "heading" && node.depth >= prefs.fromHeading) {
      tocMarkdownAST.children.push(node);
    }
  });

  const result = util(tocMarkdownAST, {
    maxDepth: prefs.toHeading,
    tight: prefs.tight,
    ordered: prefs.ordered,
    skip: Array.isArray(prefs.exclude)
      ? prefs.exclude.join("|")
      : prefs.exclude,
  });

  if (result.map) {
    markdownAST.children = [
      {
        type: "parent",
        children: [
          {
            type: "heading",
            depth: 3,
            children: [{ type: "text", value: "목차" }],
          },
          result.map,
        ],
        data: {
          hProperties: { className: "toc" },
        },
      },
      ...markdownAST.children,
    ];
  }

  return markdownAST;
};

module.exports = ({ markdownAST, markdownNode }, pluginOptions) => {
  const type = markdownNode?.internal?.type;
  return transformer(markdownAST, {
    mdx: type && type.toLowerCase() === "mdx",
    ...pluginOptions,
  });
};
