// NOTE: ricale
// It's based on
// - https://github.com/DSchau/gatsby-remark-code-titles
// - https://github.com/iamskok/gatsby-remark-code-buttons

const visit = require("unist-util-visit");
const qs = require("query-string");
const { CONTAINER_CLASS, BUTTON_CLASS } = require("./constants");

const TITLE_CLASS = "codeblock-title";
const BUTTON_LABEL = "COPY";

function getLanguageAndParams(lang) {
  const haveBraces = lang.match(/\{[^}]+:[^}]+\}/g);
  if (!haveBraces) {
    return lang.split(":");
  }

  const lastItem = haveBraces[haveBraces.length - 1];
  const endOfLastItem = lang.indexOf(lastItem) + lastItem.length;
  const colonIndex = lang.indexOf(":", endOfLastItem);
  if (colonIndex === -1) {
    return [lang, ""];
  }
  return [lang.slice(0, colonIndex), lang.slice(colonIndex + 1)];
}

module.exports = function gatsbyRemarkCodeTitles({ markdownAST }) {
  visit(markdownAST, "code", (node, index, parent) => {
    const [language, params] = getLanguageAndParams(node.lang || "");
    const options = qs.parse(params);
    const { title, hideCopyButton, ...rest } = options;
    if (!language) {
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
                  hProperties: { className: TITLE_CLASS },
                },
              },
            ]),
        node,
        ...(hideCopyButton
          ? []
          : [
              {
                type: "parent",
                children: [{ type: "text", value: BUTTON_LABEL }],
                data: {
                  hName: "button",
                  hProperties: { className: BUTTON_CLASS },
                },
              },
            ]),
      ],
      data: {
        hProperties: { className: CONTAINER_CLASS },
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
