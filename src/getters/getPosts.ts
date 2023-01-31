import { Post, PostSource } from "../types";

function getPosts(source: PostSource[]): Post[] {
  return source.map((item) => ({ ...item.frontmatter }));
}

export default getPosts;
