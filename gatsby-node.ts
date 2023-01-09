import { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/Tags.tsx");

  const result = await graphql(`
    {
      postsRemark: allMdx(sort: { frontmatter: { date: DESC } }, limit: 2000) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tags = (result as any).data.tagsGroup.group;

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagTemplate,
      context: { tag: tag.fieldValue },
    });
  });
};
