import { ImageDataLike } from "gatsby-plugin-image";

export type PostFrontmatter = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  series?: string;
  heroImage?: ImageDataLike;
  heroImageAlt?: string;
  previewContent?: string;
};

export type Post = {
  frontmatter: PostFrontmatter;
};

export type SiteMetadata = {
  title: string;
  author: string;
  siteUrl: string;
  description: string;
};

type TableOfPostContentsItem = {
  url: string;
  title: string;
  items?: TableOfPostContentsItem[];
};
export type TableOfPostContents = TableOfPostContentsItem[];
