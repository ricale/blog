// https://www.svgrepo.com/svg/344342/rss-fill
import * as React from "react";

type RssIconProps = {
  size?: number;
};
function RssIcon({ size = 24 }: RssIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-1.5 -1.5 19 19"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  );
}

export default RssIcon;
