const base = 16;

const colors = {
  background: "black",
  onBackground: "white",

  codeblock: "#111111",
  onCodeblock: "white",

  blockquoteBorder: "#666666",
  blockquote: "#111111",
  onBlockquote: "white",

  code: "#333333",
  onCode: "#DDDDDD",

  tag: "#111111",
  onTag: "skyblue",
};

const normal = {
  dimens: {
    bigMargin: base * 2,
    margin: base * 1,
    gutter: base * 0.5,
    spacing: base * 0.25,
    thin: base * 0.125,
  },
  colors,
};

export default normal;
export type RicalelogTheme = typeof normal;
