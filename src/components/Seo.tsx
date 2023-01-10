import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

type SeoProps = {
  title?: string;
};
const Seo = ({ title }: SeoProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;
  return <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>;
};

export default Seo;
