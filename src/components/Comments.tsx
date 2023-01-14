import React, { useEffect, useRef } from "react";

function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptTag = document.createElement("script");
    const attrs = {
      src: "https://utteranc.es/client.js",
      repo: "ricale/blog",
      "issue-term": "pathname",
      label: "utterances",
      theme: "github-dark",
      crossOrigin: "anonymous",
      async: "true",
    };
    Object.entries(attrs).forEach(([key, value]) => {
      scriptTag.setAttribute(key, value);
    });
    ref.current?.appendChild(scriptTag);
  }, []);

  return <div id="comments" ref={ref} />;
}

export default Comments;
