import React, { ComponentProps, HTMLProps, ReactNode } from "react";
import { ComponentOrientation } from "../utils/enums";
import { ClassName } from "../utils/types";
import { twMerge } from "tailwind-merge";

type LineButtonProps = ComponentProps<"div"> & {
  orientation?: ComponentOrientation;
  children?: ReactNode;
  isActive?: boolean;
  className?: ClassName;
  textStyle?: ClassName;
  isHovered?: boolean;
  showLeftLine?: boolean;
  showRightLine?: boolean;
};

const LinedButton = ({
  orientation = ComponentOrientation.Horizontal,
  children,
  isActive,
  className,
  isHovered,
  textStyle,
  showLeftLine = true,
  showRightLine = true,
  ...rest
}: LineButtonProps) => {
  const isHorizontal = orientation === ComponentOrientation.Horizontal;

  return (
    <div
      className={twMerge(
        `flex ${
          isHorizontal ? "w-full flex-row" : "h-full flex-col"
        } ${rest?.onClick && "cursor-pointer"} relative items-center justify-center`,
        className,
      )}
      {...rest}
    >
      {showLeftLine && (
        <div className={`${isHorizontal ? "w-full" : "flex h-full"}`}>
          <div
            className={`${isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]"} ${
              isActive
                ? "bg-active"
                : `${twMerge("bg-inactive group-hover:bg-hovered", isHovered ? "bg-hovered" : "")}`
            } origin-center transition-colors duration-300 ease-in-out`}
          />
          <div
            className={`${isHorizontal ? "bottom-[1px] h-[1px] w-full" : "right-[1px] h-full w-[1px]"} ${
              isActive
                ? "bg-active"
                : `${twMerge("bg-inactive group-hover:bg-hovered", isHovered ? "bg-hovered" : "")}`
            } relative blur-sm transition-colors duration-300 ease-in-out`}
          />
        </div>
      )}
      <div
        className={`${twMerge(
          `z-10 text-nowrap text-4xl leading-normal transition-colors duration-300 ease-in-out ${
            isActive
              ? "text-active shadow-active"
              : `${twMerge("text-inactive shadow-inactive group-hover:text-hovered group-hover:shadow-hovered", isHovered ? "text-hovered shadow-inactive" : "")}`
          } ${children && "px-5"} `,
          textStyle,
        )} text-shadow`}
      >
        {children && children}
      </div>
      {showRightLine && (
        <div className={`${isHorizontal ? "w-full" : "flex h-full"}`}>
          <div
            className={`${isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]"} ${
              isActive
                ? "bg-active"
                : `${twMerge("bg-inactive group-hover:bg-hovered", isHovered ? "bg-hovered" : "")}`
            } origin-center transition-colors duration-300 ease-in-out`}
          />
          <div
            className={`${isHorizontal ? "bottom-[1px] h-[1px] w-full" : "right-[1px] h-full w-[1px]"} ${
              isActive
                ? "bg-active"
                : `${twMerge("bg-inactive group-hover:bg-hovered", isHovered ? "bg-hovered" : "")}`
            } relative blur-sm transition-colors duration-300 ease-in-out`}
          />
        </div>
      )}
    </div>
  );
};

export default LinedButton;
