import * as React from "react";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import styled from "../themes";

type PostImageProps = {
  data?: ImageDataLike;
  alt?: string;
};
function PostImage({ data, alt: _alt }: PostImageProps) {
  const image = data ? getImage(data) : null;
  const alt = data ? _alt ?? "PostImage" : "by ricale";
  return (
    <Container>
      {image ? (
        <GatsbyImage image={image} alt={alt} />
      ) : (
        <StaticImage src="../images/defaultThumbnail.jpeg" alt={alt} />
      )}
      <p>{alt}</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  & > p {
    position: absolute;
    right: 4px;
    top: calc(100% - 4px);

    font-size: 0.625rem;
    color: #aaaaaa;
  }
`;

export default PostImage;
