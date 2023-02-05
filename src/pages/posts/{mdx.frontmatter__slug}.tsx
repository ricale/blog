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
  const ref = React.useRef<HTMLDivElement>();
  const { frontmatter, sameSeriesPosts } = data.mdx;
  const { title, slug, date, tags, series, heroImage, heroImageAlt } =
    frontmatter;
  const image = heroImage ? getImage(heroImage) : null;

  React.useEffect(() => {
    const headingElements = ref.current?.querySelectorAll<HTMLElement>(
      ".md h1, .md h2, .md h3, .md h4, .md h5, .mh h6"
    );

    console.log("headingElements", headingElements);

    const observer = new IntersectionObserver(
      (entries) => {
        const targets = entries.filter(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 1
        );

        console.log("targets", targets);

        if (targets.length === 0) {
          if (!headingElements) {
            return;
          }
          const scrollTop = document.documentElement.scrollTop;
          console.log("scrollTop", scrollTop);
          let el;
          for (let i = 0; i < headingElements.length; i++) {
            console.log(
              "headingElements[i].offsetTop",
              headingElements[i].offsetTop
            );
            if (headingElements[i].offsetTop > scrollTop) {
              el = headingElements[i - 1];
              break;
            }
          }
          console.log("el", el);
          if (el) {
            ref.current
              ?.querySelectorAll(".highlight")
              .forEach((element) => element.classList.remove("highlight"));

            console.log("addClass");
            el.classList.add("highlight");

            const targetId = el.getAttribute("id");
            const linkSelector = `.toc a[href='#${encodeURI(targetId ?? "")}']`;
            const linkElement = ref.current?.querySelector(linkSelector);
            linkElement?.classList.add("highlight");
          }
          return;
        }

        ref.current
          ?.querySelectorAll(".highlight")
          .forEach((element) => element.classList.remove("highlight"));

        targets.forEach((it) => {
          const targetId = it.target.getAttribute("id");
          const linkSelector = `.toc a[href='#${encodeURI(targetId ?? "")}']`;
          const linkElement = ref.current?.querySelector(linkSelector);
          linkElement?.classList.add("highlight");
        });
      },
      { threshold: 1.0 }
    );

    headingElements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Header>
        <h1>{title}</h1>
        <WrittenDate>{date}</WrittenDate>

        <TagList tags={tags} />
      </Header>

      <SameSeriesPosts name={series} data={sameSeriesPosts} current={slug} />

      {!!image && <ThumbnailImage image={image} alt={heroImageAlt ?? ""} />}

      <PostContent ref={ref as React.RefObject<HTMLDivElement>}>
        {children}
      </PostContent>
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
