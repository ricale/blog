import * as React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import styled from "../../themes";
import MdxContent from "../../components/MdxContent";
import Comments from "../../components/Comments";
import SameSeriesPosts from "../../components/SameSeriesPosts";
import TagList from "../../components/TagList";
import { PostFrontmatter } from "../../types";

type PostDetailPageData = {
  mdx: {
    frontmatter: PostFrontmatter;
    sameSeriesPosts:
      | null
      | {
          frontmatter: Pick<PostFrontmatter, "title" | "slug">;
        }[];
    excerpt: string;
  };
};
function PostDetailPage({ data, children }: PageProps<PostDetailPageData>) {
  const { frontmatter, sameSeriesPosts } = data.mdx;
  const { title, slug, date, tags, series, heroImage, heroImageAlt } =
    frontmatter;
  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Layout>
      <Header>
        <h1>{title}</h1>
        <WrittenDate>{date}</WrittenDate>

        <TagList tags={tags} />
      </Header>

      <SameSeriesPosts name={series} data={sameSeriesPosts} current={slug} />

      {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}
      <PostContent>{children}</PostContent>
      <Comments />
    </Layout>
  );
}

const Header = styled.div`
  margin: 60px 0 72px;
  padding: 0 24px;

  & > h1 {
    font-size: 2.5rem;
    word-break: keep-all;
    margin: 0;
  }
`;

const ThumbnailImage = styled(GatsbyImage)`
  margin-bottom: 16px;
`;

const WrittenDate = styled.div`
  margin: 16px 0;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.dimens.gutter}px;

  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    padding: ${(p) => p.theme.dimens.spacing}px
      ${(p) => p.theme.dimens.gutter}px;
    border-radius: 2px;

    background-color: ${(p) => p.theme.colors.tag};
    color: ${(p) => p.theme.colors.onTag};

    > a {
      text-decoration: none;
    }
  }
`;

const PostContent = styled(MdxContent)`
  margin-bottom: 60px;
`;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date(formatString: "YYYY. M. D.")
        tags
        series
        heroImageAlt
        heroImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        previewContent
      }
      sameSeriesPosts {
        frontmatter {
          title
          slug
        }
      }
      excerpt
    }
  }
`;

export const Head = ({ data }: HeadProps<PostDetailPageData>) => {
  const {
    frontmatter: { title, slug, tags, heroImage, previewContent },
    excerpt,
  } = data.mdx;
  const image = heroImage ? getImage(heroImage) : null;

  return (
    <Seo
      title={title}
      description={previewContent ?? excerpt}
      path={`posts/${slug}`}
      thumbnail={image?.images?.fallback?.src}
      keywords={tags}
      ogType="article"
    />
  );
};

export default PostDetailPage;