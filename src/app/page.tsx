"use client";
import { RotatingCircleIcon } from "@/assets/svgeComponents/RotatingCircle";
import { useMouse } from "@/hooks/useMouse";
import { useWindowSize } from "@/hooks/useWindowSize";
import { createRef, useState, useLayoutEffect } from "react";
import LinedButton from "@/components/lined-button/LinedBtn";
import { ComponentOrientation } from "@/components/utils/enums";
import { Frame } from "@/components/frame/Frame";
import { useNavigation } from "@/hooks/useNavigation";

export default function Home() {
  const { navigate } = useNavigation();
  const interactiveWindowRef = createRef<HTMLElement>();

  const { innerWidth, innerHeight } = useWindowSize();
  const { x, y } = useMouse(interactiveWindowRef, 60);

  const rotationDegree =
    x === 0 || y === 0
      ? 0
      : Math.atan2(y - innerHeight / 2, x - innerWidth / 2) * (180 / Math.PI);

  return (
    <main ref={interactiveWindowRef} className="h-full w-full text-gray-50">
      <div className="flex h-full w-full">
        <Frame
          className="cursor-pointer"
          isGroup={true}
          onClick={() => navigate("/projects")}
        >
          <LinedButton>Projects </LinedButton>
        </Frame>

        <Frame isGroup={false} className="flex max-w-[50vh] flex-col">
          <Frame
            isGroup={true}
            className="z-10 cursor-pointer"
            onClick={() => navigate("/get-in-touch")}
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Get in touch
            </LinedButton>
          </Frame>

          <Frame className="pointer-events-none relative z-0 h-auto">
            <Frame className="text-p[2em] absolute flex h-[56%] w-3/4 flex-col flex-nowrap justify-between font-chakraPetch font-semibold text-nonInteractive">
              <div>Hi! It’s Daniel.</div>
              <div>A full-stack web dev.</div>
            </Frame>
            <RotatingCircleIcon
              style={{
                transform: `rotate(${rotationDegree}deg)`,
              }}
            />
          </Frame>

          <Frame
            isGroup={true}
            className="z-10 cursor-pointer"
            onClick={() => navigate("/tech-stack")}
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Tech stack
            </LinedButton>
          </Frame>
        </Frame>

        <Frame
          className="cursor-pointer"
          isGroup={true}
          onClick={() => navigate("/about")}
        >
          <LinedButton>About me </LinedButton>
        </Frame>
      </div>
    </main>
  );
}
