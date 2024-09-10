import React, { HTMLProps, ReactNode } from "react";
import { ComponentOrientation } from "../utils/enums";
import { ClassName } from "../utils/types";
import { twMerge } from "tailwind-merge";

type LineButtonProps = {
  orientation?: ComponentOrientation;
  children?: ReactNode;
  isActive?: boolean;
  className?: ClassName;
  textStyle?: ClassName;
  showLeftLine?: boolean;
  showRightLine?: boolean;
};

const LinedButton = ({
  orientation = ComponentOrientation.Horizontal,
  children,
  isActive,
  className,
  textStyle,
  showLeftLine = true,
  showRightLine = true,
}: LineButtonProps) => {
  const isHorizontal = orientation === ComponentOrientation.Horizontal;

  return (
    <div
      className={twMerge(
        `flex ${
          isHorizontal ? "w-full flex-row" : "h-full flex-col"
        } relative items-center justify-center`,
        className,
      )}
    >
      {showLeftLine && (
        <div className={`${isHorizontal ? "w-full" : "flex h-full"}`}>
          <div
            className={`${isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]"} ${
              isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"
            } origin-center transition-colors duration-300 ease-in-out`}
          />
          <div
            className={`${isHorizontal ? "bottom-[1px] h-[1px] w-full" : "right-[1px] h-full w-[1px]"} ${
              isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"
            } relative blur-sm transition-colors duration-300 ease-in-out`}
          />
        </div>
      )}
      <div
        className={`${
          isActive ? "text-active" : "text-inactive group-hover:text-hovered"
        } ${twMerge(`${children && "px-5"} text-nowrap text-4xl leading-normal`, textStyle)} z-10 transition-colors duration-300 ease-in-out`}
      >
        {children && children}
      </div>
      {showRightLine && (
        <div className={`${isHorizontal ? "w-full" : "flex h-full"}`}>
          <div
            className={`${isHorizontal ? "h-[1px] w-full" : "h-full w-[1px]"} ${
              isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"
            } origin-center transition-colors duration-300 ease-in-out`}
          />
          <div
            className={`${isHorizontal ? "bottom-[1px] h-[1px] w-full" : "right-[1px] h-full w-[1px]"} ${
              isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"
            } relative blur-sm transition-colors duration-300 ease-in-out`}
          />
        </div>
      )}
    </div>
  );
};

export default LinedButton;
