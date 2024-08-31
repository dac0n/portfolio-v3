"use client";
import React, { useState } from "react";
import { Frame } from "../frame/Frame";
import { AppRoute } from "../utils/enums";
import { MenuBtn } from "../menu-btn/MenuBtn";
import { ThemeSwitchIcon } from "@/assets/svgeComponents/ThemeSwitch";
import { HomeIcon } from "@/assets/svgeComponents/Home";
import { useRouter, usePathname } from "next/navigation";
import { navigate } from "../utils/TransitionLink";

type MenuLocation = Exclude<AppRoute, "/">;

type MenuBtnBASE = {};

type MenuNavBtn = {
  name: string;
  route: AppRoute;
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

type NavMenuProps = {
  // appRoute: MenuLocation;
  //activeBtn: keyof MenuButtons;
};

export const NavMenu = ({}: NavMenuProps) => {
  const router = useRouter();
  const currentPath = usePathname() as MenuLocation;
  const [activeBtn, switchActiveBtn] = useState<keyof MenuBtns>("leftLong");

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
    <Frame className="flex flex-col">
      <Frame className="">
        <MenuBtn
          leftCorner={{ cornerType: "square" }}
          rightCorner={{ cornerType: "corner" }}
          isActive={activeBtn === "leftLong"}
          onClick={() => handlePress("leftLong")}
        >
          {menuLayout.leftLong.name}
        </MenuBtn>
      </Frame>
      <Frame className="flex flex-row">
        <Frame className="flex flex-col">
          <MenuBtn
            leftCorner={{
              cornerType: "corner",
              invertedX: true,
              invertedY: true,
            }}
            rightCorner={{ cornerType: "square" }}
            isActive={activeBtn === "leftShort"}
            onClick={() => handlePress("leftShort")}
          >
            {menuLayout.leftShort.name}
          </MenuBtn>
          <HomeIcon onClick={() => handlePress("homeIcon")} />
        </Frame>
        <Frame className="flex flex-col">
          <ThemeSwitchIcon onClick={() => handlePress("themeSwitchIcon")} />
          <Frame className="">
            <MenuBtn
              leftCorner={{
                cornerType: "square",
              }}
              rightCorner={{
                cornerType: "triangle",
                invertedY: true,
              }}
              isActive={activeBtn === "rightShort"}
              onClick={() => handlePress("rightShort")}
            >
              {menuLayout.rightShort.name}
            </MenuBtn>
          </Frame>
        </Frame>
        <Frame className="">
          <MenuBtn
            leftCorner={{ cornerType: "square" }}
            rightCorner={{ cornerType: "square" }}
            isActive={activeBtn === "rightLong"}
            onClick={() => handlePress("rightLong")}
          >
            {menuLayout.rightLong.name}
          </MenuBtn>
        </Frame>
      </Frame>
    </Frame>
  );
};
