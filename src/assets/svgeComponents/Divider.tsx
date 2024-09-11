import { SVGProps } from "react";

type DividerProps = {} & SVGProps<SVGSVGElement>;

export const Divider = ({ ...rest }: DividerProps) => {
  return (
    <svg
      width="575"
      height="13"
      viewBox="0 0 575 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g filter="url(#filter0_f_174_870)">
        <path d="M4 4H91.2308V5H87.8757L83.3007 9H4V4Z" fill="#00FFFF" />
      </g>
      <path d="M4 4H91.2308V5H87.8757L83.3007 9H4V4Z" fill="#00FFFF" />
      <g filter="url(#filter1_f_174_870)">
        <path d="M91.2305 4H571V5H91.2305V4Z" fill="#00FFFF" />
      </g>
      <path d="M91.2305 4H571V5H91.2305V4Z" fill="#00FFFF" />
      <defs>
        <filter
          id="filter0_f_174_870"
          x="0"
          y="0"
          width="95.2305"
          height="13"
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
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_174_870"
          />
        </filter>
        <filter
          id="filter1_f_174_870"
          x="87.2305"
          y="0"
          width="487.769"
          height="9"
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
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_174_870"
          />
        </filter>
      </defs>
    </svg>
  );
};
