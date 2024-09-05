"use client";
import React from "react";
import { AppRoute } from "@/components/utils/enums";
import { Frame } from "../frame/Frame";
import { usePathname } from "next/navigation";
import { ClassName } from "../utils/types";
import { NavMenu } from "../nav-menu/Nav-Menu";
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
  const currentPath = usePathname() as CircleShapeLocation;
  const outerDivTransforms =
    sideTransforms[routeToSideMap[currentPath]]?.outerDiv;
  const innerDivTransforms =
    sideTransforms[routeToSideMap[currentPath]]?.navMenu;
  if (!outerDivTransforms || !innerDivTransforms) {
    console.error(
      `Route layout is not specified for ${!outerDivTransforms ? "outer div" : "inner div"}. Layout will not be rendered for route ${currentPath}`,
    );
    return <></>;
  }

  return (
    <div
      className={`absolute ${sideTransforms[routeToSideMap[currentPath]].outerDiv} pointer-events-none`}
    >
      <NavMenu
        className={`pointer-events-auto absolute ${sideTransforms[routeToSideMap[currentPath]].navMenu} z-0`}
      />
      {/* Circle shape */}
      <Arc
        side={routeToSideMap[currentPath]}
        className={`absolute ${sideTransforms[routeToSideMap[currentPath]].circleShape}`}
      />
      {/*       <div
        className={`absolute h-[153vw] w-[153vw] rounded-full border-shape-main shadow-[inset_0_0_4px_6px,0_0_4px_6px] shadow-shape-main outline-shape-main ${sideTransforms[routeToSideMap[currentPath]].navMenu}`}
      /> */}
    </div>
  );
};

export default NavLayout;
