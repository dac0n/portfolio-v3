import { ClassName } from "@/components/utils/types";
import { twMerge } from "tailwind-merge";

const paths = {
  bulge:
    "M13.5 48V47.7929L13.6464 47.6464L17.5 43.7929V20.2071L13.6464 16.3536L13.5 16.2071V16V0.5H0.5V63.5H13.5V48Z",
  corner: "M0.5 63.5V0.5H1.79289L17.5 16.2071V63.5H0.5Z",
  notch:
    "M4.5 43.6589V43.8672L4.35217 44.0138L0.5 47.8362V63.5H17.5V0.5H0.5V15.6677L4.35217 19.49L4.5 19.6367V19.845V43.6589Z",
  square: "M0.5 63.5H17.5V0.5H0.5V63.5Z",
  triangle: "M2 63.5H0.5L0.5 0.5L1.79289 0.5L63.5 62.2071V63.5L2 63.5Z",
};

type CornerType = keyof typeof paths;

export type CornerProps = {
  cornerType: CornerType;
  invertedY?: boolean;
  invertedX?: boolean;
  isActive?: boolean;
  className?: ClassName;
};

export const CornerIcon = ({
  cornerType,
  invertedY = false,
  invertedX = false,
  isActive = false,
  className,
}: CornerProps) => {
  const width = cornerType === "triangle" ? "w-[64px]" : "w-[18px]";
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={`scale(${invertedX ? -1 : 1}, ${invertedY ? -1 : 1})`}
      className={`h-full ${width}`}
    >
      <path
        d={paths[cornerType]}
        className={twMerge(
          `${
            isActive
              ? "fill-menuBtn-bg-active stroke-menuBtn-outline-active"
              : "fill-menuBtn-bg-inactive stroke-menuBtn-outline-inactive group-hover/button:fill-menuBtn-bg-hovered group-hover/button:stroke-menuBtn-outline-hovered"
          }`,
          className,
        )} // transition-colors duration-300 ease-in
      />
    </svg>
  );
};
