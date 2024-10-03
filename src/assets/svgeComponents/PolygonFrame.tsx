import { Frame } from "@/components/frame/Frame";
import { ClassName } from "@/components/utils/types";
import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

type PolygonFrameProps = {
  textStyle?: ClassName;
  className?: ClassName;
} & SVGProps<SVGSVGElement>;

export const PolygonFrame = ({
  textStyle,
  className,
  ...rest
}: PolygonFrameProps) => {
  return (
    <svg
      className={twMerge("h-full w-full overflow-hidden", className)}
      fill="none"
      {...rest}
    >
      <svg
        viewBox="0 0 636 341"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.518368 231.235V8.51837H565.48L635.482 126.168V340.482H358.412H81.0868L0.518368 231.235Z"
          className="bg-bgColor"
          stroke="url(#paint0_linear_326_1238)"
          strokeWidth="1.03674"
        />
        <defs>
          <linearGradient
            id="paint0_linear_326_1238"
            x1="491.322"
            y1="304.317"
            x2="-35.6694"
            y2="217.776"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              style={{
                stopOpacity: 0,
                stopColor: "rgb(var(--colors-icons-polygonFrame-outline))",
              }}
            />
            <stop
              offset="1"
              style={{
                stopColor: "rgb(var(--colors-icons-polygonFrame-outline))",
              }}
            />
          </linearGradient>
        </defs>
      </svg>
      <foreignObject
        y={20}
        width="100%"
        height="323px"
        className={twMerge("overflow-hidden px-11 py-8 pl-20", className)}
      >
        <div
          className={twMerge(
            "flex h-full overflow-scroll text-left",
            textStyle,
          )}
        >
          {rest.children}
        </div>
      </foreignObject>
    </svg>
  );
};
