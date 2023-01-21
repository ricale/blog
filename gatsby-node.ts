import { GatsbyNode } from "gatsby";
import path from "path";

type CreatePagesQueryData = {
  tagsGroup: {
    group: {
      fieldValue: string;
    }[];
  };
  seriesGroup: {
    group: {
      fieldValue: string;
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const result = await graphql<CreatePagesQueryData>(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
      seriesGroup: allMdx(limit: 2000) {
        group(field: { frontmatter: { series: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors || !result.data) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tagsTemplatePath = path.resolve(
    "src/templates/TagDetailPageTemplate.tsx"
  );
  const seriesTemplatePath = path.resolve(
    "src/templates/SeriesDetailPageTemplate.tsx"
  );

  const { tagsGroup, seriesGroup } = result.data;

  tagsGroup.group.forEach((tag) => {
    actions.createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: tagsTemplatePath,
      context: { tag: tag.fieldValue },
    });
  });

  seriesGroup.group.forEach((series) => {
    actions.createPage({
      path: `/series/${series.fieldValue}/`,
      component: seriesTemplatePath,
      context: { series: series.fieldValue },
    });
  });
};

export const createResolvers: GatsbyNode["createResolvers"] = ({
  createResolvers,
}) => {
  createResolvers({
    Mdx: {
      sameSeriesPosts: {
        type: ["Mdx"],
        // FIXME: ricale
        // 타입 적용
        // @ts-ignore
        resolve: async (source, args, context, info) => {
          if (!source.frontmatter.series) {
            return;
          }

          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: {
                frontmatter: {
                  series: {
                    eq: source.frontmatter.series,
                  },
                },
              },
            },
            type: "Mdx",
          });

          return [...entries].sort((a: any, b: any) =>
            a.frontmatter.date.localeCompare(b.frontmatter.date)
          );
        },
      },
    },
  });
};
