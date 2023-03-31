import * as React from "react";
import {
  GatsbyImage,
  getImage,
  ImageDataLike,
  StaticImage,
} from "gatsby-plugin-image";
import styled from "../themes";

type ThumbnailImageProps = {
  source: ImageDataLike | undefined;
  alt: string | undefined;
};
function ThumbnailImage({ source, alt }: ThumbnailImageProps) {
  const image = source ? getImage(source) : null;

  if (image) {
    return <Image image={image} alt={alt ?? ""} />;
  }

  return (
    <StaticImage
      src="../images/defaultThumbnail.jpeg"
      alt="default thumbnail"
      style={{ width: "100%", height: "100%" }}
      imgStyle={{ objectFit: "cover", objectPosition: "top left" }}
    />
  );
}

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ThumbnailImage;
