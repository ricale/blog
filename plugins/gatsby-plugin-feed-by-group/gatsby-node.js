// NOTE: ricale
// It's based on https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed

const fs = require("fs-extra");
const path = require("path");
const RSS = require("rss");

const publicPath = `./public`;

const defaultOptions = {
  generator: `GatsbyJS`,
  setup: ({
    query: {
      site: { siteMetadata },
    },
    ...rest
  }) => {
    return {
      ...siteMetadata,
      ...rest,
    };
  },
};

const runQuery = (handler, query) =>
  handler(query).then((r) => {
    if (r.errors) {
      console.error(r.errors.join(", "));
      throw new Error(r.errors.join(`, `));
    }

    return r.data;
  });

exports.onPostBuild = async ({ graphql, reporter }, pluginOptions) => {
  const options = {
    ...defaultOptions,
    ...pluginOptions,
  };

  const baseQuery = await runQuery(graphql, options.query);

  for (const { ...feed } of options.feeds) {
    if (feed.query) {
      feed.query = await runQuery(graphql, feed.query).then((result) => ({
        ...baseQuery,
        ...result,
      }));
    }

    const { setup, ...locals } = {
      ...options,
      ...feed,
    };

    if (!feed.serialize || typeof feed.serialize !== `function`) {
      reporter.warn(
        `You did not pass in a valid serialize function. Your feed will not be generated.`
      );
      continue;
    }

    const serializedArray = await feed.serialize(locals);
    const feedOptions = setup(locals);
    for (const { fieldValue, items } of serializedArray) {
      const rssFeed = items.reduce((merged, item) => {
        merged.item(item);
        return merged;
      }, new RSS(feedOptions));
      const outputPath = path.join(publicPath, feed.output({ fieldValue }));
      const outputDir = path.dirname(outputPath);
      if (!(await fs.pathExists(outputDir))) {
        await fs.mkdirp(outputDir);
      }
      await fs.writeFile(outputPath, rssFeed.xml());
    }
  }
};
