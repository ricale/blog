import React, { useEffect, useRef } from "react";
import styled from "../themes";

let id = 1;

type EmgithubProps = {
  url: string;
};
function Emgithub({ url }: EmgithubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(id++);

  useEffect(() => {
    const scriptTag = document.createElement("script");
    const attrs = {
      src:
        `https://emgithub.com/embed-v2.js?target=${encodeURIComponent(url)}` +
        "&style=monokai-sublime" +
        "&type=code" +
        "&showLineNumbers=on" +
        "&showFileMeta=on" +
        "&showFullPath=on",
    };
    Object.entries(attrs).forEach(([key, value]) => {
      scriptTag.setAttribute(key, value);
    });
    containerRef.current?.appendChild(scriptTag);
  }, []);

  return <Container id={`emgithub${idRef.current}`} ref={containerRef} />;
}

const Container = styled.div`
  .emgithub-container table td {
    padding: 0;
  }
`;

export default Emgithub;
