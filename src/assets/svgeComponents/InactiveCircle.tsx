import { SVGProps } from "react";

export const InactiveCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 368 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="184"
        cy="184"
        r="179"
        className="stroke-shape-alt stroke-[1px]"
      />
      <g filter="url(#layer_blur)">
        <circle
          cx="184"
          cy="184"
          r="179"
          className="stroke-shape-alt stroke-[1px]"
        />
      </g>
      <defs>
        <filter
          id="layer_blur"
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
          <feGaussianBlur stdDeviation="2" result="layer_blur" />
        </filter>
      </defs>
    </svg>
  );
};
