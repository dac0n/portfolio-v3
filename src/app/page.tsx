"use client";
import { RotatingCircleIcon } from "@/assets/svgeComponents/RotatingCircle";
import { useMouse } from "@/hooks/useMouse";
import { useWindowSize } from "@/hooks/useWindowSize";
import { createRef, useState, useLayoutEffect } from "react";
import LinedButton from "@/components/lined-button/LinedBtn";
import { ComponentOrientation } from "@/components/utils/enums";
import { Frame } from "@/components/frame/Frame";
import { useNavigation } from "@/hooks/useNavigation";
import Link from "next/link";
import TransitionLink from "@/components/utils/TransitionLink";

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
        <TransitionLink
          href="/projects"
          className="group flex h-full w-full items-center justify-center"
        >
          <LinedButton>Projects</LinedButton>
        </TransitionLink>
        <Frame isGroup={false} className="flex max-w-[50vh] flex-col">
          <TransitionLink
            href="/get-in-touch"
            className="group flex h-full w-full items-center justify-center"
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Get in touch
            </LinedButton>
          </TransitionLink>

          <Frame className="pointer-events-none relative z-0 h-auto">
            <Frame className="absolute flex h-[56%] w-3/4 flex-col flex-nowrap justify-between font-chakraPetch text-[2em] font-semibold text-nonInteractive">
              <div>Hi! It’s Daniel.</div>
              <div>A full-stack web dev.</div>
            </Frame>
            <RotatingCircleIcon
              style={{
                transform: `rotate(${rotationDegree}deg)`,
              }}
            />
          </Frame>

          <TransitionLink
            href="/tech-stack"
            className="group flex h-full w-full items-center justify-center"
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Tech stack
            </LinedButton>
          </TransitionLink>
        </Frame>

        <TransitionLink
          href="/about"
          className="group flex h-full w-full items-center justify-center"
        >
          <LinedButton>About me </LinedButton>
        </TransitionLink>
      </div>
    </main>
  );
}
