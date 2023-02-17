// NOTE: ricale
// It's based on https://github.com/signalwerk/gatsby-remark-table-of-contents

const util = require("mdast-util-toc");

const defaultPrefs = {
  tight: true,
  fromHeading: 1,
  toHeading: 6,
  className: "toc",
  ordered: false,
};

const transformer = (markdownAST /*, pluginOptions*/) => {
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
        children: markdownAST.children,
        data: {
          hProperties: { className: "md" },
        },
      },
      {
        type: "parent",
        children: [
          {
            type: "paragraph",
            children: [{ type: "text", value: "목차" }],
          },
          result.map,
        ],
        data: {
          hProperties: { className: "toc" },
        },
      },
    ];
  }

  return markdownAST;
};

module.exports = ({ markdownAST }, pluginOptions) => {
  return transformer(markdownAST, pluginOptions);
};
