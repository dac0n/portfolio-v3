import { Frame } from "@/components/frame/Frame";
import { ClassName } from "@/components/utils/types";
import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type HiTechFrameProps = {
  textStyle?: ClassName;
  className?: ClassName;
} & SVGProps<SVGSVGElement>;

export const HiTechFrame = ({
  textStyle,
  className,
  ...rest
}: HiTechFrameProps) => {
  return (
    <div className={twMerge("relative h-0 w-full pb-[69.186%]", className)}>
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 344 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M282 9H282.207L282.354 8.85355L286.207 5H323.793L339.5 20.7071V218.293L323.793 234H292.207L288.354 230.146L288.207 230H288H56H55.7929L55.6464 230.146L51.7929 234H20.2071L4.5 218.293V119.717L8.34197 116.115L8.5 115.967V115.75V49V48.7834L8.34197 48.6352L4.5 45.0334V20.7071L20.2071 5H209.793L213.646 8.85355L213.793 9H214H282Z"
          className="stroke-shape-main"
        />
        <g filter="url(#filter0_f_868_2253)">
          <path
            d="M282 8.5H282.207L282.354 8.35355L286.207 4.5H323.793L339.5 20.2071V217.793L323.793 233.5H292.207L288.354 229.646L288.207 229.5H288H56H55.7929L55.6464 229.646L51.7929 233.5H20.2071L4.5 217.793V119.217L8.34197 115.615L8.5 115.467V115.25V48.5V48.2834L8.34197 48.1352L4.5 44.5334V20.2071L20.2071 4.5H209.793L213.646 8.35355L213.793 8.5H214H282Z"
            className="stroke-shape-main"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_868_2253"
            x="0"
            y="0"
            width="100%"
            height="100%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
      </svg>
      <div
        className={twMerge(
          "absolute left-0 top-0 h-full w-full overflow-hidden p-9",
          textStyle,
        )}
      >
        <div className="h-full w-full overflow-auto">{rest.children}</div>
      </div>
    </div>
  );
};
