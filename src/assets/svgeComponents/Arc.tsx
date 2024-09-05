import { ClassName } from "@/components/utils/types";

const sidePaths = {
  right: {
    viewBox: "0 0 185 1088",
    path: "M28 24C110.645 179.036 157.485 356.048 157.485 544C157.485 731.952 110.645 908.964 28 1064",
  },
  left: {
    viewBox: "0 0 185 1088",
    path: "M157.485 24C74.8407 179.036 28 356.048 28 544C28 731.952 74.8406 908.964 157.485 1064",
  },
  bottom: {
    viewBox: "0 0 1420 292",
    path: "M1394.18 27C1205.8 175.439 968.037 264.006 709.589 264.006C451.142 264.006 213.38 175.439 25 27",
  },
  top: {
    viewBox: "0 0 1420 292",
    path: "M1394.18 265.006C1205.8 116.567 968.037 28 709.589 28C451.142 28 213.38 116.567 25 265.006",
  },
};

type ArcProps = {
  className?: ClassName;
  side: keyof typeof sidePaths;
};

export const Arc = ({ className, side }: ArcProps) => {
  const sideInfo = sidePaths[side];
  return (
    <svg
      preserveAspectRatio="none"
      className={className}
      viewBox={sideInfo.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={sideInfo.path} className="stroke-shape-main stroke-[16px]" />
      <g filter="url(#arc_blur)">
        <path d={sideInfo.path} className="stroke-shape-main stroke-[16px]" />
      </g>
      <defs>
        <filter
          id="arc_blur"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="10" result="foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};
