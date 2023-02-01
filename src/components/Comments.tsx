import React, { useEffect, useRef } from "react";

function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptTag = document.createElement("script");
    // NOTE: Utterances 를 위한 설정 코드.
    // const attrs = {
    //   src: "https://utteranc.es/client.js",
    //   repo: "ricale/blog",
    //   "issue-term": "pathname",
    //   label: "utterances",
    //   theme: "github-dark",
    //   crossOrigin: "anonymous",
    //   async: "true",
    // };
    const attrs = {
      src: "https://giscus.app/client.js",
      "data-repo": "ricale/blog",
      "data-repo-id": "R_kgDOIvqo5g",
      "data-category": "Giscus",
      "data-category-id": "DIC_kwDOIvqo5s4CT7fR",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "top",
      "data-theme": "dark",
      "data-lang": "ko",
      crossorigin: "anonymous",
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
