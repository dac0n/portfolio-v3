"use client";
import React, { useEffect, useState } from "react";
import { Frame } from "../frame/Frame";
import { AppRoute } from "../utils/enums";
import { MenuBtn } from "../menu-btn/MenuBtn";
import { ThemeSwitchIcon } from "@/assets/svgeComponents/ThemeSwitch";
import { HomeIcon } from "@/assets/svgeComponents/Home";
import { useRouter, usePathname } from "next/navigation";
import { navigate } from "../utils/TransitionLink";
import {
  extractAngle,
  hoverable,
  rotatedRectangleBoundingBox,
} from "../utils/helperFunctions";
import { AngleClassName, ClassName } from "../utils/types";
import { ClassNameValue } from "tailwind-merge";

type MenuLocation = Exclude<AppRoute, "/">;

type MenuNavBtn = {
  name: string;
  route: MenuLocation;
};

type MenuUtilBtn = {
  name?: string;
  onClick: () => void;
};

type MenuNavBtns = {
  leftLong: MenuNavBtn;
  leftShort: MenuNavBtn;
  rightLong: MenuNavBtn;
  rightShort: MenuNavBtn;
};

type MenuUtilBtns = {
  themeSwitchIcon: MenuUtilBtn;
  homeIcon: MenuUtilBtn;
};

type MenuBtns = MenuNavBtns & MenuUtilBtns;

const navButton: {
  [key in MenuLocation]: MenuNavBtn;
} = {
  "/about": {
    name: "About me",
    route: "/about",
  },
  "/get-in-touch": {
    name: "Get in touch",
    route: "/get-in-touch",
  },
  "/projects": {
    name: "Projects",
    route: "/projects",
  },
  "/tech-stack": {
    name: "Tech stack",
    route: "/tech-stack",
  },
};

const menuNavBtnsLayout: {
  [key in MenuLocation]: MenuNavBtns;
} = {
  "/about": {
    leftLong: navButton["/about"],
    rightLong: navButton["/tech-stack"],
    leftShort: navButton["/get-in-touch"],
    rightShort: navButton["/projects"],
  },
  "/get-in-touch": {
    leftLong: navButton["/get-in-touch"],
    rightLong: navButton["/about"],
    leftShort: navButton["/projects"],
    rightShort: navButton["/tech-stack"],
  },
  "/projects": {
    leftLong: navButton["/projects"],
    rightLong: navButton["/get-in-touch"],
    leftShort: navButton["/tech-stack"],
    rightShort: navButton["/about"],
  },
  "/tech-stack": {
    leftLong: navButton["/tech-stack"],
    rightLong: navButton["/projects"],
    leftShort: navButton["/about"],
    rightShort: navButton["/get-in-touch"],
  },
};

const navMenuTransforms: {
  [key in MenuLocation]: {
    flip: MenuLocation[];
    rotateClass: AngleClassName;
    offset: `${"top" | "left" | "bottom" | "right"}-[${number}px]` | "";
  };
} = {
  "/about": {
    rotateClass: "rotate-45",
    flip: ["/projects", "/tech-stack"],
    offset: "left-[45px]",
  },
  "/get-in-touch": {
    rotateClass: "-rotate-45",
    flip: [],
    offset: "bottom-[45px]",
  },
  "/projects": {
    rotateClass: "rotate-[-135deg]",
    flip: ["/projects", "/tech-stack"],
    offset: "right-[45px]",
  },
  "/tech-stack": {
    rotateClass: "rotate-[135deg]",
    flip: ["/about", "/get-in-touch", "/projects", "/tech-stack"],
    offset: "top-[45px]",
  },
};

type NavMenuProps = {
  //activeBtn: keyof MenuButtons;
  className?: ClassName;
};

export const NavMenu = ({ className }: NavMenuProps) => {
  const router = useRouter();
  const currentPath = usePathname() as MenuLocation;
  const [activeBtn, setActiveBtn] = useState<keyof MenuBtns>("leftLong");
  const isButtonTextFlipped = (button: MenuNavBtn) =>
    navMenuTransforms[currentPath].flip.includes(button.route);

  const menuLayout: MenuBtns = {
    ...menuNavBtnsLayout[currentPath],
    homeIcon: {
      onClick: () => {
        navigate(router, "/");
      },
    },
    themeSwitchIcon: {
      onClick: () => {},
    },
  };

  useEffect(() => {
    setActiveBtn("leftLong");
  }, [currentPath]);

  const handlePress = (buttonName: keyof MenuBtns) => {
    const button = menuLayout[buttonName];
    if ("route" in button) {
      navigate(router, button.route);
    } else {
      button.onClick();
    }
  };

  const { width, height } = rotatedRectangleBoundingBox(
    318,
    319,
    extractAngle(navMenuTransforms[currentPath].rotateClass),
  );

  return (
    <Frame
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Frame
        className={`relative h-[319px] w-[318px] flex-col ${navMenuTransforms[currentPath].rotateClass} ${navMenuTransforms[currentPath].offset}`}
        style={{
          clipPath:
            "polygon(0 0, 80.8% 0, 100% 19.2%, 100% 100%, 79.7% 100%, 0 20.5%)",
          shapeOutside:
            "polygon(0 0, 80.8% 0, 100% 19.2%, 100% 100%, 79.7% 100%, 0 20.5%)",
        }}
      >
        <Frame className="w-full">
          <MenuBtn
            leftCorner={{ cornerType: "square" }}
            rightCorner={{ cornerType: "triangle" }}
            isActive={activeBtn === "leftLong"}
            onClick={() => handlePress("leftLong")}
            flipText={isButtonTextFlipped(menuLayout.leftLong)}
          >
            {menuLayout.leftLong.name}
          </MenuBtn>
        </Frame>
        <Frame className="mt-[-1px] flex flex-row justify-start">
          <Frame className="mr-[-1px] flex h-64 w-48 flex-col justify-start">
            <MenuBtn
              leftCorner={{
                cornerType: "triangle",
                invertedX: true,
                invertedY: true,
              }}
              rightCorner={{ cornerType: "square" }}
              isActive={activeBtn === "leftShort"}
              onClick={() => handlePress("leftShort")}
              className="w-full"
              flipText={isButtonTextFlipped(menuLayout.leftShort)}
            >
              {menuLayout.leftShort.name}
            </MenuBtn>
            <Frame className="group/button mt-[-1px] h-[131px] w-full justify-end">
              <div
                className={`relative h-[131px] w-[131px] ${hoverable(activeBtn === "homeIcon", "bg", "outline")}`}
                style={{
                  clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                }}
              >
                <Frame
                  className={`absolute right-[1px] top-[1px] h-[127.5px] w-[127.5px] items-start justify-end ${hoverable(activeBtn === "homeIcon", "bg")}`}
                  style={{
                    clipPath: "inherit",
                  }}
                >
                  <HomeIcon
                    className="mr-4 mt-4 h-11 w-11 rotate-45"
                    onClick={() => handlePress("homeIcon")}
                  />
                </Frame>
              </div>
            </Frame>
          </Frame>
          <Frame className="flex h-64 w-16 flex-col justify-normal">
            <div className="group/button mb-[-1px]">
              <Frame
                className={`relative h-16 w-16 ${hoverable(activeBtn === "themeSwitchIcon", "bg", "outline")}`}
              >
                <Frame
                  className={`absolute left-[1px] top-[1px] h-[62px] w-[62px] ${hoverable(activeBtn === "themeSwitchIcon", "bg")}`}
                >
                  <ThemeSwitchIcon
                    className="h-11 w-11 rotate-45"
                    onClick={() => handlePress("themeSwitchIcon")}
                  />
                </Frame>
              </Frame>
            </div>
            <Frame className="relative h-[192px] w-16">
              <MenuBtn
                className="absolute left-1/2 top-1/2 h-16 w-[192px] origin-center -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
                leftCorner={{
                  cornerType: "square",
                }}
                rightCorner={{
                  cornerType: "triangle",
                  invertedY: true,
                }}
                isActive={activeBtn === "rightShort"}
                onClick={() => handlePress("rightShort")}
                flipText={isButtonTextFlipped(menuLayout.rightShort)}
              >
                {menuLayout.rightShort.name}
              </MenuBtn>
            </Frame>
          </Frame>
          <Frame className="relative ml-[-1px] flex h-[256px] w-16 items-start justify-start">
            <Frame className="relative h-[255px] w-16">
              <MenuBtn
                className="absolute left-1/2 top-1/2 h-16 w-[255px] origin-center -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
                leftCorner={{ cornerType: "square" }}
                rightCorner={{ cornerType: "square" }}
                isActive={activeBtn === "rightLong"}
                onClick={() => handlePress("rightLong")}
                flipText={isButtonTextFlipped(menuLayout.rightLong)}
              >
                {menuLayout.rightLong.name}
              </MenuBtn>
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </Frame>
  );
};
