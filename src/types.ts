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

export type PostSource = {
  frontmatter: PostFrontmatter;
};

export type Post = PostSource["frontmatter"];

export type SeriesSource = {
  fieldValue: string;
  totalCount: number;
  edges: {
    node: {
      frontmatter: Omit<PostFrontmatter, "slug" | "tags"> & {
        originalDate: string;
      };
    };
  }[];
};

export type TagSource = {
  fieldValue: string;
  totalCount: number;
};

export type Series = Pick<SeriesSource, "fieldValue" | "totalCount"> &
  SeriesSource["edges"][0]["node"];

export type SiteMetadata = {
  title: string;
  author: string;
  siteUrl: string;
  description: string;
};
