// NOTE: ricale
// It's based on https://github.com/DSchau/gatsby-remark-code-titles

const visit = require("unist-util-visit");
const qs = require("query-string");

module.exports = function gatsbyRemarkCodeTitles({ markdownAST }) {
  visit(markdownAST, "code", (node, index, parent) => {
    const [language, params] = (node.lang || "").split(":");
    const options = qs.parse(params);
    const { title, hideCopyButton, ...rest } = options;
    if (!language || (!title && hideCopyButton)) {
      return;
    }

    parent.children.splice(index, 1, {
      type: "parent",
      children: [
        ...(!title
          ? []
          : [
              {
                type: "parent",
                children: [{ type: "text", value: title }],
                data: {
                  hProperties: { className: "codeblock-title" },
                },
              },
            ]),
        node,
        ...(hideCopyButton
          ? []
          : [
              {
                type: "html",
                value: `<button class='codeblock-copy-button'>복사</button>`,
              },
            ]),
      ],
      data: {
        hProperties: { className: "codeblock-container" },
      },
    });

    let newQuery = "";
    if (Object.keys(rest).length) {
      newQuery =
        `:` +
        Object.keys(rest)
          .map((key) => `${key}=${rest[key]}`)
          .join("&");
    }

    node.lang = language + newQuery;
  });

  return markdownAST;
};
