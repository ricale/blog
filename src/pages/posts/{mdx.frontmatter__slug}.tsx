import * as React from "react";
import { graphql, HeadProps, Link, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import styled from "../../themes";
import MdxContent from "../../components/MdxContent";
import NearbySeriesPostLinks from "../../components/NearbySeriesPostLinks";
import Comments from "../../components/Comments";
import SameSeriesPosts from "../../components/SameSeriesPosts";
import { PostFrontmatter } from "../../types";
import highlightCurrentHeading from "../../utils/highlightCurrentHeading";
import ScrollToEndButton from "../../components/ScrollToEndButton";

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
  const ref = React.useRef<HTMLDivElement>();
  const { frontmatter, sameSeriesPosts } = data.mdx;
  const { title, slug, date, series } = frontmatter;

  React.useEffect(() => {
    const headingElements = ref.current?.querySelectorAll<HTMLElement>(
      ".md h1, .md h2, .md h3, .md h4, .md h5, .md h6"
    );

    const observer = new IntersectionObserver(
      () => highlightCurrentHeading(ref, headingElements),
      { rootMargin: "0px 0px -90% 0px", threshold: [0, 1.0] }
    );

    headingElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Header>
        <h1>
          <Link to={`/posts/${slug}`}>{title}</Link>
        </h1>
        <WrittenDate>{date}</WrittenDate>
      </Header>

      <SameSeriesPosts name={series} data={sameSeriesPosts} current={slug} />

      <PostContent ref={ref as React.RefObject<HTMLDivElement>}>
        {children}
      </PostContent>

      <NearbySeriesPostLinks data={sameSeriesPosts} current={slug} />

      <ScrollToEndButton />

      <Comments />
    </Layout>
  );
}

const Header = styled.div`
  margin: 72px 0 84px;
  padding: 0 32px;

  & > h1 {
    font-size: 2.5rem;
    word-break: keep-all;
    margin: 0;

    > a {
      color: ${(p) => p.theme.colors.onBackground};
    }
  }
`;

const WrittenDate = styled.div`
  margin-left: 2px;
`;

const PostContent = styled(MdxContent)`
  margin-bottom: 120px;
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
