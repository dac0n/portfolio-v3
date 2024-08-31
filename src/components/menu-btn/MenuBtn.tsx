import React from "react";
import { CornerIcon, CornerProps } from "@/assets/svgeComponents/Corner";
import { ClassName, StrictOmit } from "../utils/types";
import { Frame } from "../frame/Frame";
import { twMerge } from "tailwind-merge";

type MenuBtnProps = {
  leftCorner: StrictOmit<CornerProps, "isActive">;
  rightCorner: StrictOmit<CornerProps, "isActive">;
  isActive?: boolean;
  flipText?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: ClassName;
};

export const MenuBtn = ({
  leftCorner,
  rightCorner,
  isActive = false,
  flipText = false,
  children,
  onClick,
  className,
}: MenuBtnProps) => {
  return (
    <Frame
      className={twMerge(
        `ease-in-outfocus:ring-2 group flex h-16 w-min flex-row bg-clip-border transition-colors duration-300`,
        className,
      )}
      onClick={onClick}
    >
      <Frame className="z-0">
        <CornerIcon {...leftCorner} isActive={isActive} />
      </Frame>
      <Frame
        className={`z-10 mx-[-2px] border-b-[1px] border-l-0 border-r-0 border-t-[1px] ${isActive ? "border-menuBtn-outline-active" : "border-menuBtn-outline-inactive group-hover:border-menuBtn-outline-hovered"}`}
      >
        <Frame
          className={`${flipText ? "rotate-180" : ""} ${isActive ? "bg-menuBtn-bg-active text-menuBtn-text-active" : "bg-menuBtn-bg-inactive text-menuBtn-text-inactive group-hover:bg-menuBtn-text-inactive group-hover:text-menuBtn-text-hovered"} text-nowrap text-center text-4xl leading-normal transition-colors duration-300 ease-in-out`}
        >
          {children}
        </Frame>
      </Frame>
      <Frame className="z-0">
        <CornerIcon {...rightCorner} isActive={isActive} />
      </Frame>
    </Frame>
  );
};
//  focus:outline-none
//  focus:ring-active
