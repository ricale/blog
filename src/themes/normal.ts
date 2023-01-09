const base = 16;

const colors = {};

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
