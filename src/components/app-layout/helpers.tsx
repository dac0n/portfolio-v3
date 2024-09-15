import { AppRoute } from "../utils/enums";
import { ClassName } from "../utils/types";

export const NAV_MENU_LOCATIONS = [
  "/about",
  "/get-in-touch",
  "/tech-stack",
  "/projects",
] as const;

export type NavMenuLocation = (typeof NAV_MENU_LOCATIONS)[number];

type Side = "top" | "bottom" | "left" | "right";

const sideScreenTransforms: {
  [key in Side]: {
    navLayoutContainer: ClassName;
    navMenu: ClassName;
    circleShape: ClassName;
    screenContainer: ClassName;
  };
} = {
  top: {
    // className: "-translate-x-[93%] -translate-y-[32%]",
    navLayoutContainer: "w-screen h-[226px] bottom-0",
    navMenu: "top-0 left-1/2 -translate-x-1/2",
    circleShape: "w-[120%] h-full -top-[25px] left-1/2 -translate-x-1/2",
    screenContainer: "flex gap-8 flex-col-reverse",
  },
  bottom: {
    navLayoutContainer: "w-screen h-[226px] top-0",
    navMenu: "bottom-0 left-1/2 -translate-x-1/2",
    circleShape: "w-[120%] h-full -bottom-[25px] left-1/2 -translate-x-1/2",
    screenContainer: "flex gap-8 flex-col",
  },
  left: {
    navLayoutContainer: "h-screen w-[226px] right-0",
    navMenu: "left-0 top-1/2 -translate-y-1/2",
    circleShape: "w-full h-[120%] -left-[30px] top-1/2 -translate-y-1/2",
    screenContainer: "flex gap-8 flex-row-reverse",
  },
  right: {
    navLayoutContainer: "h-screen w-[226px] left-0",
    navMenu: "right-0 top-1/2 -translate-y-1/2",
    circleShape: "w-full h-[120%] -right-[30px] top-1/2 -translate-y-1/2",
    screenContainer: "flex gap-8 flex-row",
  },
};

export const routeToSideMap: {
  [key in NavMenuLocation]: Side;
} = {
  "/about": "right",
  "/get-in-touch": "top",
  "/projects": "left",
  "/tech-stack": "bottom",
};

export const getLayoutTransforms = (path: AppRoute) => {
  if ((NAV_MENU_LOCATIONS as ReadonlyArray<string>).includes(path)) {
    const side = routeToSideMap[path as NavMenuLocation];
    return {
      navLayoutContainerTransforms:
        sideScreenTransforms[side].navLayoutContainer,
      navMenuTransforms: sideScreenTransforms[side].navMenu,
      circleShapeTransforms: sideScreenTransforms[side].circleShape,
      screenContainerTransforms: sideScreenTransforms[side].screenContainer,
    };
  } else {
    return {
      navLayoutContainerTransforms: null,
      navMenuTransforms: null,
      circleShapeTransforms: null,
      screenContainerTransforms: null,
    };
  }
};
