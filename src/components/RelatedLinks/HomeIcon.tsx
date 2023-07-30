// https://www.svgrepo.com/svg/360500/home-f
import * as React from "react";

type HomeIconProps = {
  size?: number;
};
function HomeIcon({ size = 24 }: HomeIconProps) {
  return (
    <svg
      fill="currentColor"
      width={size}
      height={size}
      viewBox="-2 -1.5 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
    >
      <path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z" />
    </svg>
  );
}

export default HomeIcon;
