"use client";
import React from "react";
import { AppRoute } from "@/components/utils/enums";
import { usePathname } from "next/navigation";
import { ClassName } from "../utils/types";
import { NavMenu } from "../nav-menu/NavMenu";
import { Arc } from "@/assets/svgeComponents/Arc";

type CircleShapeLocation = Exclude<AppRoute, "/">;

type Side = "top" | "bottom" | "left" | "right";

const sideTransforms: {
  [key in Side]: {
    outerDiv: ClassName;
    navMenu: ClassName;
    circleShape: ClassName;
  };
} = {
  top: {
    // className: "-translate-x-[93%] -translate-y-[32%]",
    outerDiv: "w-screen h-[226px] bottom-0",
    navMenu: "top-0 left-1/2 -translate-x-1/2",
    circleShape: "w-[120%] h-full -top-[25px] left-1/2 -translate-x-1/2",
  },
  bottom: {
    outerDiv: "w-screen h-[226px] top-0",
    navMenu: "bottom-0 left-1/2 -translate-x-1/2",
    circleShape: "w-[120%] h-full -bottom-[25px] left-1/2 -translate-x-1/2",
  },
  left: {
    outerDiv: "h-screen w-[226px] right-0",
    navMenu: "left-0 top-1/2 -translate-y-1/2",
    circleShape: "w-full h-[120%] -left-[30px] top-1/2 -translate-y-1/2",
  },
  right: {
    outerDiv: "h-screen w-[226px] left-0",
    navMenu: "right-0 top-1/2 -translate-y-1/2",
    circleShape: "w-full h-[120%] -right-[30px] top-1/2 -translate-y-1/2",
  },
};

const routeToSideMap: {
  [key in CircleShapeLocation]: Side;
} = {
  "/about": "right",
  "/get-in-touch": "top",
  "/projects": "left",
  "/tech-stack": "bottom",
};

const NavLayout = () => {
  const currentPath = usePathname() as AppRoute;
  if (currentPath === "/") return <></>; // todo - rewrite to allow many exceptions processed automatically
  const outerDivTransforms =
    sideTransforms[routeToSideMap[currentPath]]?.outerDiv;
  const circleShapeTransforms =
    sideTransforms[routeToSideMap[currentPath]]?.circleShape;
  const navMenuTransforms =
    sideTransforms[routeToSideMap[currentPath]]?.navMenu;
  if (!outerDivTransforms || !circleShapeTransforms || !circleShapeTransforms) {
    console.error(
      `Route layout is not specified for ${!outerDivTransforms ? "outer div" : !circleShapeTransforms ? "circle shape" : "navigation menu"}. Layout will not be rendered for route ${currentPath}`,
    );
    return <></>;
  }

  return (
    <div className={`absolute ${outerDivTransforms} pointer-events-none`}>
      <NavMenu
        className={`pointer-events-auto absolute ${navMenuTransforms} z-0`}
      />
      {/* Circle shape */}
      <Arc
        side={routeToSideMap[currentPath]}
        className={`absolute ${circleShapeTransforms}`}
      />
    </div>
  );
};

export default NavLayout;
