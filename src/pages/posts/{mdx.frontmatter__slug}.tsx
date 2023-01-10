import * as React from "react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import styled from "../../themes";

type PostDetailPageData = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
      heroImage?: ImageDataLike;
      heroImageAlt?: string;
      heroImageCreditLink?: string;
      heroImageCreditText?: string;
    };
  };
};
const PostDetailPage = ({ data, children }: PageProps<PostDetailPageData>) => {
  const { title, date, tags, heroImage } = data.mdx.frontmatter;
  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Layout>
      <h1>{title}</h1>
      <Tags>
        {tags.map((tag) => (
          <li key={tag}>
            <Link to={`/tags/${tag}`}>{tag}</Link>
          </li>
        ))}
      </Tags>
      <div>{date}</div>
      {!!image && (
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.heroImageAlt ?? ""}
        />
      )}
      {children}
    </Layout>
  );
};

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  gap: ${(p) => p.theme.dimens.gutter}px;

  margin: 0;
  padding: 0;
  list-style: none;
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY. M. D.")
        tags
        heroImageAlt
        heroImageCreditLink
        heroImageCreditText
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<PostDetailPageData>) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default PostDetailPage;
