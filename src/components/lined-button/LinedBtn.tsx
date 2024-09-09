import React, { HTMLProps, ReactNode } from "react";
import { ComponentOrientation } from "../utils/enums";
import { ClassName } from "../utils/types";
import { twMerge } from "tailwind-merge";

type LineButtonProps = {
  orientation?: ComponentOrientation;
  children?: ReactNode;
  isActive?: boolean;
  className?: ClassName;
};

const LinedButton = ({
  orientation = ComponentOrientation.Horizontal,
  children,
  isActive,
  className,
}: LineButtonProps) => {
  const isHorizontal = orientation === ComponentOrientation.Horizontal;

  return (
    <div
      className={twMerge(
        `flex ${
          isHorizontal ? "w-full flex-row" : "h-full flex-col"
        } items-center justify-center`,
        className,
      )}
    >
      <div
        className={`${isHorizontal ? "h-[1.5px] w-full" : "h-full w-[1.5px]"} ${isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"} transition-colors duration-300 ease-in-out`}
      />
      <div
        className={`${isActive ? "text-active" : "text-inactive group-hover:text-hovered"} text-nowrap ${children && "px-5"} text-4xl leading-normal transition-colors duration-300 ease-in-out`}
      >
        {children && children}
      </div>
      <div
        className={`${isHorizontal ? "h-[1.5px] w-full" : "h-full w-[1.5px]"} ${isActive ? "bg-active" : "bg-inactive group-hover:bg-hovered"} transition-colors duration-300 ease-in-out`}
      />
    </div>
  );
};

export default LinedButton;
