import React, { ButtonHTMLAttributes } from "react";
import { CornerIcon, CornerProps } from "@/assets/svgeComponents/Corner";
import { ClassName, StrictOmit } from "../utils/types";
import { Frame } from "../frame/Frame";
import { twMerge } from "tailwind-merge";

export type MenuBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftCorner: StrictOmit<CornerProps, "isActive">;
  rightCorner: StrictOmit<CornerProps, "isActive">;
  isActive?: boolean;
  flipText?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: ClassName;
  cornersClassName?: ClassName;
  textContainerClassName?: ClassName;
};

export const MenuBtn = ({
  leftCorner,
  rightCorner,
  isActive = false,
  flipText = false,
  children,
  onClick,
  className,
  cornersClassName,
  textContainerClassName,
  ...rest
}: MenuBtnProps) => {
  return (
    <Frame
      className={twMerge(
        `group/button flex h-[64px] w-full cursor-pointer flex-row hover:z-30`, //transition-colors
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      <Frame className={`z-0 h-full w-auto`}>
        <CornerIcon
          {...leftCorner}
          isActive={isActive}
          className={cornersClassName}
        />
      </Frame>
      <Frame className={`z-10 mx-[-2px]`}>
        <Frame
          className={twMerge(
            `${
              isActive
                ? "border-menuBtn-outline-active"
                : "border-menuBtn-outline-inactive group-hover/button:border-menuBtn-outline-hovered"
            } spacing box-border border border-b-[1px] border-l-0 border-r-0 border-t-[1px] font-chakraPetch text-base font-semibold uppercase ${flipText ? "rotate-180" : ""} ${isActive ? "bg-menuBtn-bg-active text-menuBtn-text-active" : "bg-menuBtn-bg-inactive text-menuBtn-text-inactive group-hover/button:bg-menuBtn-bg-hovered group-hover/button:text-menuBtn-text-hovered"} text-nowrap text-center ${/*transition-colors duration-300 ease-in */ ""}`,
            textContainerClassName,
          )}
        >
          {children}
        </Frame>
      </Frame>
      <Frame className={`z-0 h-full w-auto`}>
        <CornerIcon
          {...rightCorner}
          isActive={isActive}
          className={cornersClassName}
        />
      </Frame>
    </Frame>
  );
};
