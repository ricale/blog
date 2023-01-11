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
      <Content>{children}</Content>
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

const Content = styled.div`
  word-break: keep-all;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding: 0;
  }

  h1 {
    margin-top: ${(p) => p.theme.dimens.margin * 3.5}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h2 {
    margin-top: ${(p) => p.theme.dimens.margin * 3}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h3 {
    margin-top: ${(p) => p.theme.dimens.margin * 2.5}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  ul,
  ol {
    margin-top: ${(p) => p.theme.dimens.margin}px;
    margin-bottom: ${(p) => p.theme.dimens.margin}px;
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  blockquote {
    position: relative;

    margin-left: 0;
    margin-right: 0;
    padding: 16px 30px;
    border-left: 1px solid ${(p) => p.theme.colors.blockquoteBorder};
    border-left-width: 10px;

    background-color: ${(p) => p.theme.colors.blockquote};

    > :first-child {
      margin-top: 0;
    }
    > :last-child {
      margin-bottom: 0;
    }
    > ul,
    > ol {
      padding-left: 20px;
    }
  }

  blockquote:before {
    content: '"';

    position: absolute;
    top: 15px;
    left: 5px;

    font-size: 3rem;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }
  blockquote:after {
    content: '"';

    position: absolute;
    bottom: -15px;
    right: 10px;

    font-size: 3rem;
    color: ${(p) => p.theme.colors.blockquoteBorder};
  }

  code {
    padding: ${(p) => p.theme.dimens.spacing}px
      ${(p) => p.theme.dimens.spacing}px ${(p) => p.theme.dimens.thin}px;
    border-radius: 2px;

    font-size: 0.875em;

    background-color: ${(p) => p.theme.colors.code};
    color: ${(p) => p.theme.colors.onCode};
  }

  pre {
    margin: ${(p) => p.theme.dimens.margin}px 0;
    padding: ${(p) => p.theme.dimens.margin}px;

    background-color: ${(p) => p.theme.colors.codeblock};
    color: ${(p) => p.theme.colors.onCodeblock};
    line-height: 140%;
    overflow-x: auto;
  }

  pre > code {
    padding: unset;
    border-radius: unset;
    background-color: unset;
    color: unset;
  }
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
