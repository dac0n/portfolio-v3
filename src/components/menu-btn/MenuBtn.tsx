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
  const cornerOutline = ""; /* `outline-offset-[-1px] outline ${
    isActive
      ? "outline-menuBtn-outline-active"
      : " outline-menuBtn-outline-inactive group-hover/button:outline-menuBtn-outline-hovered"
  }`; */

  return (
    <Frame
      className={twMerge(
        `group/button flex h-[64px] w-full flex-row transition-colors hover:z-30`,
        className,
      )}
      onClick={onClick}
    >
      <Frame className={`z-0 h-full w-auto`}>
        <CornerIcon
          {...leftCorner}
          isActive={isActive}
          className={cornerOutline}
        />
      </Frame>
      <Frame className={`z-10 mx-[-2px]`}>
        <Frame
          className={`${
            isActive
              ? "border-menuBtn-outline-active"
              : "border-menuBtn-outline-inactive group-hover/button:border-menuBtn-outline-hovered"
          } spacing box-border border border-b-[1px] border-l-0 border-r-0 border-t-[1px] font-chakraPetch text-base font-semibold uppercase ${flipText ? "rotate-180" : ""} ${isActive ? "bg-menuBtn-bg-active text-menuBtn-text-active" : "bg-menuBtn-bg-inactive text-menuBtn-text-inactive group-hover/button:bg-menuBtn-bg-hovered group-hover/button:text-menuBtn-text-hovered"} text-nowrap text-center transition-colors duration-300 ease-in-out`}
        >
          {children}
        </Frame>
      </Frame>
      <Frame className={`z-0 h-full w-auto ${cornerOutline}`}>
        <CornerIcon {...rightCorner} isActive={isActive} />
      </Frame>
    </Frame>
  );
};
