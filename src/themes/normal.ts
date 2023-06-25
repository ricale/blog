const base = 16;

const colors = {
  background: "#060606",
  onBackground: "#ffffff",

  inactiveText: "#aaaaaa",

  headerText: "#dddddd",

  blockquoteBorder: "#666666",
  blockquote: "#1a1a1a",
  onBlockquote: "#ffffff",

  fixedToc: "#1a1a1a",
  onFixedToc: "#dddddd",

  code: "#333333",
  onCode: "#dddddd",

  codeblockHighlightBorder: "#999999",
  codeblockHighlight: "#444444",
  codeblockTitle: "#060606",
  codeblockTitleInMobile: "#666666",
  codeblockCopyButtonLabel: "#dddddd",

  headingBorder: "#222222",

  tag: "#222222",
  onTag: "skyblue",

  hr: "#333333",

  imageBorder: "#333333",
  imageCaptionText: "#aaaaaa",

  tableBorder: "#333333",

  postCardItem: "#333333",

  postListItemHover: "#666666",
  postListItemThumbnail: "#222222",
  postListItemSubtitleText: "#dddddd",

  seriesListItemThumbnail: "#222222",
  sereisListItemCount: "#b7b3cc99",
  seriesListItemCountText: "#ffff00",
  seriesListItemInfo: "#00000099",

  sameSereisPosts: "#1a1a1a",

  hoverSimplePostSeries: "#666666",

  nearbyPostLink: "#1a1a1a",
  onNearbyPostLink: "#ffffff",
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
