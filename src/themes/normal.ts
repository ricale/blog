const base = 16;

const colors = {
  background: "black",
  onBackground: "white",

  blockquoteBorder: "#666666",
  blockquote: "#1a1a1a",
  onBlockquote: "white",

  code: "#333333",
  onCode: "#DDDDDD",

  tag: "#222222",
  onTag: "skyblue",

  tableBorder: "white",
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
