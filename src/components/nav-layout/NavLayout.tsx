"use client";
import React from "react";
import { AppRoute } from "@/components/utils/enums";
import { usePathname } from "next/navigation";
import { NavMenu } from "../nav-menu/NavMenu";
import { Arc } from "@/assets/svgeComponents/Arc";
import { getLayoutTransforms, routeToSideMap } from "../app-layout/helpers";

const NavLayout = () => {
  const currentPath = usePathname() as AppRoute;
  if (currentPath === "/") return <></>; // todo - rewrite to allow many exceptions processed automatically
  const {
    navLayoutContainerTransforms,
    navMenuTransforms,
    circleShapeTransforms,
  } = getLayoutTransforms(currentPath);
  if (
    !navLayoutContainerTransforms ||
    !circleShapeTransforms ||
    !circleShapeTransforms
  ) {
    console.error(
      `Route layout is not specified for ${!navLayoutContainerTransforms ? "outer div" : !circleShapeTransforms ? "circle shape" : "navigation menu"}. Layout will not be rendered for route ${currentPath}`,
    );
    return <></>;
  }

  return (
    <div
      className={`${navLayoutContainerTransforms} pointer-events-none flex-shrink-0`}
    >
      <NavMenu
        className={`pointer-events-auto absolute ${navMenuTransforms} z-0`}
      />
      <Arc
        side={routeToSideMap[currentPath]}
        className={`relative ${circleShapeTransforms}`}
      />
    </div>
  );
};

export default NavLayout;
