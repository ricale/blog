// NOTE: ricale
// It's based on https://github.com/DSchau/gatsby-remark-code-titles

const visit = require("unist-util-visit");
const qs = require("query-string");

module.exports = function gatsbyRemarkCodeTitles({ markdownAST }) {
  visit(markdownAST, "code", (node, index, parent) => {
    const [language, params] = (node.lang || "").split(":");
    const options = qs.parse(params);
    const { title, ...rest } = options;
    if (!title || !language) {
      return;
    }

    let newQuery = "";
    if (Object.keys(rest).length) {
      newQuery =
        `:` +
        Object.keys(rest)
          .map((key) => `${key}=${rest[key]}`)
          .join("&");
    }

    parent.children.splice(index, 1, {
      type: "parent",
      children: [
        {
          type: "parent",
          children: [{ type: "text", value: title }],
          data: {
            hProperties: { className: "codeblock-title" },
          },
        },
        node,
      ],
      data: {
        hProperties: { className: "codeblock-container" },
      },
    });

    node.lang = language + newQuery;
  });

  return markdownAST;
};
