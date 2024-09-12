import { SVGProps } from "react";

export const RotatingCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <path
          className="stroke-shape-main"
          strokeWidth="14"
          d="M327.549 316.877a172.998 172.998 0 0 1-272.844-22.971A173 173 0 0 1 335.39 92.305"
        />
      </g>
      <path
        className="stroke-shape-main"
        strokeWidth="14"
        d="M327.549 316.877a172.998 172.998 0 0 1-272.844-22.971A173 173 0 0 1 335.39 92.305"
      />
      <g filter="url(#b)">
        <path
          className="stroke-shape-alt"
          strokeWidth="2"
          d="M335 92.616a172.504 172.504 0 0 1-7.82 223.923"
        />
      </g>
      <path
        className="stroke-shape-alt"
        strokeWidth="2"
        d="M335 92.616a172.504 172.504 0 0 1-7.82 223.923"
      />
      <path
        className="stroke-shape-alt"
        d="M360.914 183.668c-3.021 1.952-8.208 7.519-7.918 8.53.077.222 3.966-1.951 8.683-4.82l8.577-5.215-3.068-.279c-3.014-.274-3.13-.242-6.274 1.784ZM354.284 193.215c-2.164 1.43-2.386 1.796-2.716 3.95-.44 2.872.203 6.657 1.548 9.477l1.066 2.11 1.368-8.569c.719-4.689 1.252-8.538 1.191-8.5-.109-.01-1.219.702-2.457 1.532ZM355.978 208.273c-.343 2.239-.266 2.46 1.735 4.269 2.913 2.749 4.736 3.9 8.665 5.457 1.882.771 3.461 1.343 3.474 1.258.013-.084-3.025-3.101-6.746-6.738l-6.766-6.611-.362 2.365Z"
      />
      <circle cx="200" cy="200" r="18" className="fill-shape-alt" />
      <g filter="url(#blur)">
        <circle cx="200" cy="200" r="18" className="fill-shape-alt" />
      </g>
      <path
        className="stroke-shape-alt"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M224.937 232a85.887 85.887 0 0 1-5.46-18.246m5.46-46.754a85.887 85.887 0 0 0-5.46 18.246"
      />
      <path
        className="stroke-shape-alt"
        d="M224.951 167h.855M224.951 232h.855M225.75 167l5.703 5.699m-9.125 3.419 5.533 2.491m-5.533 42.558 4.742-1.96m-7.023-5.477 5.703-1.116m-5.703-27.378 5.703 1.15m-.137 45.705 5.84-4.684M207.5 189.807l12.547-4.561M199.501 184.995l22.827-8.872M198.501 212.986l23.828 8.751M207.5 209.193l12.547 4.561"
      />
      <path
        className="stroke-shape-alt"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M225.75 232a86.09 86.09 0 0 1-6.844-32.5 86.09 86.09 0 0 1 6.844-32.5"
      />
      <path
        className="stroke-shape-alt"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M230.946 218.823a15.203 15.203 0 0 1-2.316 4.054c-2.994-5.853-4.021-16.685-4.021-16.685l39.922-6.122-39.922-6.122s1.027-10.833 4.021-16.685a15.203 15.203 0 0 1 2.316 4.054"
      />
      <path
        className="stroke-shape-alt"
        d="m236.586 196.079 3.992 7.412m4.563-.57 2.281-5.131m4.562.57 1.141 3.421m3.992-.57.57-2.281"
      />
      <path
        className="stroke-shape-alt"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m224.724 206.342 7.186-6.729-7.186-5.815"
      />
      <defs>
        <filter
          id="a"
          width="360.869"
          height="400"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_184_1711"
            stdDeviation="10"
          />
        </filter>
        <filter
          id="b"
          width="55.057"
          height="233.221"
          x="322.443"
          y="87.994"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_184_1711"
            stdDeviation="2"
          />
        </filter>
        <filter
          id="blur"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          width="100%"
          height="100%"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
    </svg>
  );
};
