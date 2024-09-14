import { CSSProperties, SVGProps } from "react";
import Image from "next/image";
import { Frame } from "@/components/frame/Frame";
import { TECH_LOGO_SOURCES, TECH_NAMES } from "@/components/utils/constants";
import { twMerge } from "tailwind-merge";

type TechLogoProps = SVGProps<SVGSVGElement> & {
  type: keyof typeof TECH_NAMES;
  frameStyle?: CSSProperties;
  isHovered?: boolean;
  isActive?: boolean;
};

export const TechLogo = ({
  type,
  frameStyle,
  isActive,
  isHovered,
  ...rest
}: TechLogoProps) => {
  return (
    <svg
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
      role="img"
      aria-label={type}
    >
      <path
        d="M91.1887 19.3275V19.8275H91.6887H92.4846C97.8323 19.8275 102.183 24.1776 102.183 29.5233V92.4845C102.183 97.8323 97.8321 102.183 92.4846 102.183H91.6887H91.1887V102.683V106.148C91.1887 107.637 89.9816 108.844 88.4926 108.844C87.0035 108.844 85.7965 107.637 85.7965 106.148V102.683V102.183H85.2965H80.6939H80.1939V102.683V106.148C80.1939 107.637 78.9868 108.844 77.4978 108.844C76.0087 108.844 74.8017 107.637 74.8017 106.148V102.683V102.183H74.3017H69.6991H69.1991V102.683V106.148C69.1991 107.637 67.992 108.844 66.503 108.844C65.0139 108.844 63.8069 107.637 63.8069 106.148V102.683V102.183H63.3069H58.7043H58.2043V102.683V106.148C58.2043 107.637 56.9972 108.844 55.5082 108.844C54.0191 108.844 52.812 107.637 52.812 106.148V102.683V102.183H52.312H47.7095H47.2095V102.683V106.148C47.2095 107.637 46.0024 108.844 44.5134 108.844C43.0243 108.844 41.8172 107.637 41.8172 106.148V102.683V102.183H41.3172H36.7147H36.2147V102.683V106.148C36.2147 107.637 35.0076 108.844 33.5186 108.844C32.0295 108.844 30.8224 107.637 30.8224 106.148V102.683V102.183H30.3224H29.5234C24.1777 102.183 19.8276 97.8322 19.8276 92.4845V29.5233C19.8276 24.1775 24.1775 19.8275 29.5234 19.8275H30.3224H30.8224V19.3275V15.8597C30.8224 14.3707 32.0295 13.1636 33.5186 13.1636C35.0076 13.1636 36.2147 14.3707 36.2147 15.8597V19.3275V19.8275H36.7147H41.3172H41.8172V19.3275V15.8597C41.8172 14.3707 43.0243 13.1636 44.5134 13.1636C46.0024 13.1636 47.2095 14.3707 47.2095 15.8597V19.3275V19.8275H47.7095H52.312H52.812V19.3275V15.8597C52.812 14.3707 54.0191 13.1636 55.5082 13.1636C56.9972 13.1636 58.2043 14.3707 58.2043 15.8597V19.3275V19.8275H58.7043H63.3069H63.8069V19.3275V15.8597C63.8069 14.3707 65.0139 13.1636 66.503 13.1636C67.992 13.1636 69.1991 14.3707 69.1991 15.8597V19.3275V19.8275H69.6991H74.3017H74.8017V19.3275V15.8597C74.8017 14.3707 76.0087 13.1636 77.4978 13.1636C78.9868 13.1636 80.1939 14.3707 80.1939 15.8597V19.3275V19.8275H80.6939H85.2965H85.7965V19.3275V15.8597C85.7965 14.3707 87.0035 13.1636 88.4926 13.1636C89.9816 13.1636 91.1887 14.3707 91.1887 15.8597V19.3275ZM92.4846 96.7912C94.8596 96.7912 96.7913 94.8596 96.7913 92.4845V29.5233C96.7913 27.1495 94.8592 25.22 92.4846 25.22H29.5234C27.15 25.22 25.2201 27.1499 25.2201 29.5233V92.4845C25.2201 94.8592 27.1496 96.7912 29.5234 96.7912H92.4846Z"
        stroke="url(#processorOutline)"
      />
      <g filter="url(#outlineBlur)">
        <rect
          x="4.5"
          y="4.5"
          width="113"
          height="113"
          rx="4.5"
          className={
            isActive
              ? "stroke-active"
              : isHovered
                ? "stroke-hovered"
                : "stroke-inactive"
          }
          style={frameStyle}
        />
      </g>
      <rect
        x="4.5"
        y="4.5"
        width="113"
        height="113"
        rx="4.5"
        className={`${
          isActive
            ? "stroke-active"
            : isHovered
              ? "stroke-hovered"
              : "stroke-inactive"
        } duration-300 ease-in-out`}
        style={frameStyle}
      />
      <foreignObject x="26" y="26" width="70" height="70">
        <Frame className="flex items-center">
          <Image
            width={54}
            height={54}
            src={TECH_LOGO_SOURCES[type]}
            alt={`${type}-icon.svg`}
          />
        </Frame>
      </foreignObject>

      <defs>
        <filter
          id="outlineBlur"
          x="0"
          y="0"
          width="122"
          height="122"
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
            result="effect1_foregroundBlur_832_2286"
          />
        </filter>
        <linearGradient
          id="processorOutline"
          x1="61.0056"
          y1="12.6636"
          x2="61.0056"
          y2="109.344"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            style={{
              stopColor: "rgb(var(--colors-icons-processor-gradientColor1))",
            }}
          />
          <stop
            offset="1"
            style={{
              stopColor: "rgb(var(--colors-icons-processor-gradientColor2))",
            }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
