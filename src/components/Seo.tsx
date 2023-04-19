import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadata } from "../types";

type SeoQueryData = {
  site: {
    siteMetadata: SiteMetadata;
  };
};
type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  thumbnail?: string;
  keywords?: string[];
  ogType?: string;
};
function Seo({
  title,
  description,
  path,
  thumbnail,
  ogType,
  keywords,
}: SeoProps) {
  const data = useStaticQuery<SeoQueryData>(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          siteUrl
          description
        }
      }
    }
  `);

  const {
    siteMetadata: { title: siteTitle, author, siteUrl, description: siteDesc },
  } = data.site;

  const pageTitle = title
    ? `${title} | ${siteTitle}`
    : `${siteTitle} by ${author}`;
  const seoTitle = title ?? siteTitle;
  const desc = description || siteDesc;
  const pageUrl = `${siteUrl}${path ? `/${path}` : ""}`;
  const imageUrl = thumbnail ? `${siteUrl}${thumbnail}` : null;
  const keywordsString = keywords ? keywords.join(", ") : null;

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta name="author" content={author} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}

      {!!ogType && <meta property="og:type" content={ogType} />}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={pageUrl} />
      {!!imageUrl && <meta property="og:image" content={imageUrl} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:url" content={pageUrl} />
      {!!imageUrl && <meta property="twitter:image" content={imageUrl} />}

      <meta
        name="google-site-verification"
        content="Z24DuzLFxq0tVrtFhTxfPETtFXf9rOEG73-HpKk2Pgs"
      />
      <meta name="msvalidate.01" content="06C6843D272653A5EF82A3F39E712F62" />
    </>
  );
}

export default Seo;
