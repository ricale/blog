import * as React from "react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import styled from "../../themes";
import MdxContent from "../../components/MdxContent";

type PostDetailPageData = {
  mdx: {
    frontmatter: {
      title: string;
      slug: string;
      date: string;
      tags: string[];
      heroImage?: ImageDataLike;
      heroImageAlt?: string;
    };
    excerpt: string;
  };
};
const PostDetailPage = ({ data, children }: PageProps<PostDetailPageData>) => {
  const { title, date, tags, heroImage, heroImageAlt } = data.mdx.frontmatter;
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
      {!!image && <GatsbyImage image={image} alt={heroImageAlt ?? ""} />}
      <MdxContent>{children}</MdxContent>
    </Layout>
  );
};

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.dimens.gutter}px;

  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    padding: ${(p) => p.theme.dimens.thin}px ${(p) => p.theme.dimens.gutter}px
      0px;
    border-radius: 2px;

    background-color: ${(p) => p.theme.colors.tag};
    color: ${(p) => p.theme.colors.onTag};

    > a {
      text-decoration: none;
    }
  }
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "YYYY. M. D.")
        tags
        heroImageAlt
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
`;

export const Head = ({ data }: HeadProps<PostDetailPageData>) => {
  const {
    frontmatter: { title, slug, tags, heroImage },
    excerpt,
  } = data.mdx;
  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Seo
      title={title}
      description={excerpt}
      path={`posts/${slug}`}
      thumbnail={image?.images?.fallback?.src}
      keywords={tags}
      ogType="article"
    />
  );
};

export default PostDetailPage;
