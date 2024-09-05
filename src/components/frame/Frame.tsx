"use client";

import React, { ReactNode } from "react";
import { ClassName } from "../utils/types";
import { twMerge } from "tailwind-merge";

type FrameProps = {
  children?: ReactNode;
  className?: ClassName;
  isGroup?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  style?: React.CSSProperties;
};

export const Frame = ({
  children,
  className,
  isGroup = false,
  onClick,
  style,
}: FrameProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    onClick?.(e);
  };

  const FrameWrapper = onClick ? "button" : "div";

  return (
    <FrameWrapper
      className={twMerge(
        `${isGroup ? "group" : ""} flex h-full w-full items-center justify-center`,
        className,
      )}
      style={style}
      onClick={handleClick}
    >
      {children}
    </FrameWrapper>
  );
};
