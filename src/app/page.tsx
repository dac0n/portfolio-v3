"use client";
import Image from "next/image";
import { RotatingCircleIcon } from "@/assets/svgeComponents/RotatingCircle";
import { useMouse } from "@/hooks/useMouse";
import { useWindowSize } from "@/hooks/useWindowSize";
import { createRef, useState, useEffect, useLayoutEffect } from "react";
import LinedButton from "@/components/lined-button/LinedBtn";
import { ComponentOrientation } from "@/components/utils/enums";
import { Frame } from "@/components/frame/Frame";
import TransitionLink, { navigate } from "@/components/utils/TransitionLink";
import { useRouter } from "next/navigation";
import { MenuBtn } from "@/components/menu-btn/MenuBtn";

export default function Home() {
  const router = useRouter();
  const interactiveWindowRef = createRef<HTMLElement>();

  const { innerWidth, innerHeight } = useWindowSize();
  const { x, y } = useMouse(interactiveWindowRef, 60);

  const rotationDegree =
    x === 0 || y === 0
      ? 0
      : Math.atan2(y - innerHeight / 2, x - innerWidth / 2) * (180 / Math.PI);

  const [showContent, setShowContent] = useState(false);

  useLayoutEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <main ref={interactiveWindowRef} className="h-full bg-black text-gray-50">
      <div
        className={`flex h-full w-full ${
          showContent
            ? "opacity-100 transition-opacity duration-1000"
            : "opacity-0"
        }`}
      >
        <Frame isGroup={true} onClick={() => navigate(router, "/projects")}>
          <LinedButton>Projects </LinedButton>
        </Frame>

        <Frame isGroup={false} className="flex max-w-[50vh] flex-col">
          <Frame
            isGroup={true}
            className="z-10"
            onClick={() => navigate(router, "/get-in-touch")}
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Get in touch
            </LinedButton>
          </Frame>

          <Frame className="pointer-events-none relative z-0 h-auto">
            <RotatingCircleIcon
              style={{
                transform: `rotate(${rotationDegree}deg)`,
              }}
            />
          </Frame>

          <Frame
            isGroup={true}
            className="z-10"
            onClick={() => navigate(router, "/tech-stack")}
          >
            <LinedButton orientation={ComponentOrientation.Vertical}>
              Tech stack
            </LinedButton>
          </Frame>
        </Frame>

        <Frame isGroup={true} onClick={() => navigate(router, "/about")}>
          <LinedButton>About me </LinedButton>
        </Frame>
      </div>
    </main>
  );
}
