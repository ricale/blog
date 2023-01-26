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

  if (!prefs.className.match(/^[ a-zA-Z0-9_-]*$/)) {
    prefs.className = defaultPrefs.className;
  }

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
    markdownAST.children = [result.map, ...markdownAST.children];
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
