"use client";
import React, { useState } from "react";
import { Frame } from "../frame/Frame";
import { AppRoute } from "../utils/enums";
import { MenuBtn } from "../menu-btn/MenuBtn";
import { ThemeSwitchIcon } from "@/assets/svgeComponents/ThemeSwitch";
import { HomeIcon } from "@/assets/svgeComponents/Home";
import { useRouter, usePathname } from "next/navigation";
import { navigate } from "../utils/TransitionLink";
import { hoverable } from "../utils/helperFunctions";
import { ClassName } from "../utils/types";

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
    angle: ClassName;
  };
} = {
  "/about": {
    angle: "rotate-45",
    flip: ["/projects", "/tech-stack"],
  },
  "/get-in-touch": {
    angle: "-rotate-45",
    flip: [],
  },
  "/projects": {
    angle: "rotate-[-135deg]",
    flip: [],
  },
  "/tech-stack": {
    angle: "rotate-[135deg]",
    flip: [],
  },
};

type NavMenuProps = {
  appRoute: MenuLocation;
  //activeBtn: keyof MenuButtons;
};

export const NavMenu = ({}: NavMenuProps) => {
  const router = useRouter();
  const currentPath = usePathname() as MenuLocation;
  const [activeBtn, switchActiveBtn] = useState<keyof MenuBtns>("leftLong");

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

  const handlePress = (buttonName: keyof MenuBtns) => {
    switchActiveBtn(buttonName);
    const button = menuLayout[buttonName];
    if ("route" in button) {
      navigate(router, button.route);
    } else {
      button.onClick();
    }
  };

  return (
    <Frame
      className={`flex h-80 w-[318px] flex-col ${navMenuTransforms[currentPath].angle}`}
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
                className={`absolute right-[1px] top-[1px] h-32 w-32 items-start justify-end ${hoverable(activeBtn === "homeIcon", "bg")}`}
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
          <Frame className="relative h-48 w-16">
            <MenuBtn
              className="absolute left-1/2 top-1/2 h-16 w-48 origin-center -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
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
        <Frame className="relative ml-[-1px] h-64 w-16">
          <MenuBtn
            className="absolute left-1/2 top-1/2 h-16 w-64 origin-center -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
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
  );
};
