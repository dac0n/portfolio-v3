"use client";

import { TechLogo } from "@/assets/svgeComponents/TechLogo";
import { TextFrame } from "@/assets/svgeComponents/TextFrame";
import { Frame } from "@/components/frame/Frame";
import LinedButton from "@/components/lined-button/LinedBtn";
import { techCatalog, TechName } from "@/components/utils/constants";
import { ComponentOrientation } from "@/components/utils/enums";
import { useState } from "react";

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<keyof typeof TechName | null>(
    null,
  );
  const [hoveredTech, setHoveredTech] = useState<keyof typeof TechName | null>(
    null,
  );

  const InteractiveIcon = ({
    type,
    inRightColumn = false,
  }: {
    type: keyof typeof TechName;
    inRightColumn?: boolean;
  }) => {
    return (
      <LinedButton
        textStyle="px-0 mx-[-4px]"
        showLeftLine={inRightColumn}
        showRightLine={!inRightColumn}
        onMouseEnter={() => setHoveredTech(type)}
        onMouseLeave={() => setHoveredTech(null)}
        onClick={() => setActiveTech(type)}
        isHovered={hoveredTech === type}
        isActive={activeTech === type}
      >
        <TechLogo
          type={type}
          className="w-[120px]"
          isHovered={hoveredTech === type}
          isActive={activeTech === type}
        />
      </LinedButton>
    );
  };

  const InteractiveText = ({
    type,
    inRightColumn = false,
  }: {
    type: keyof typeof TechName;
    inRightColumn?: boolean;
  }) => (
    <LinedButton
      textStyle={`tech-${type} px-0 text-[20px] leading-[40px] h-[40px] font-exo2 ${
        inRightColumn ? "ml-[10px]" : "mr-[10px]"
      }`}
      showLeftLine={inRightColumn}
      showRightLine={!inRightColumn}
      onMouseEnter={() => setHoveredTech(type)}
      onMouseLeave={() => setHoveredTech(null)}
      onClick={() => setActiveTech(type)}
      isHovered={hoveredTech === type}
      isActive={activeTech === type}
    >
      {TechName[type]}
    </LinedButton>
  );

  return (
    <main className="mt-[220px] flex h-screen w-screen flex-col items-center justify-start overflow-scroll">
      <Frame className="flex h-[800px] w-full">
        <Frame className="w-fit">
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex flex-row justify-between">
              <Frame className="flex flex-col">
                <InteractiveIcon type="React" />
                <InteractiveText type="CSS" />
                <InteractiveIcon type="Typescript" />
                <InteractiveText type="Flutter" />
                <InteractiveIcon type="Tailwind" />
                <InteractiveText type="Vite" />
                <InteractiveIcon type="Figma" />
              </Frame>
              <Frame className="flex flex-col">
                <InteractiveText type="React" inRightColumn={true} />
                <InteractiveIcon type="CSS" inRightColumn={true} />
                <InteractiveText type="Typescript" inRightColumn={true} />
                <InteractiveIcon type="Flutter" inRightColumn={true} />
                <InteractiveText type="Tailwind" inRightColumn={true} />
                <InteractiveIcon type="Vite" inRightColumn={true} />
                <InteractiveText type="Figma" inRightColumn={true} />
              </Frame>
            </Frame>
            <Frame className="flex h-[60px] justify-end font-exo2 text-[40px] font-semibold text-inactive">
              Front end
            </Frame>
          </Frame>
          <div className="ml-[20px] flex h-full">
            <div
              className={
                "h-full w-[2px] bg-gradient-to-b from-active to-inactive"
              }
            />
            <div className="relative right-[1px] h-full w-[2px] bg-gradient-to-b from-active to-inactive blur-sm" />
          </div>
        </Frame>
        <Frame className="flex h-fit w-full max-w-[700px] flex-col items-start justify-start p-12">
          <TextFrame className="text-active">
            {!activeTech ? (
              "Select a technology to display info"
            ) : (
              <div className="flex flex-col gap-2">
                <div className="font-exo2 text-xs font-semibold">
                  {`${techCatalog[TechName[activeTech]].type}: ${techCatalog[TechName[activeTech]].texts.title}`}
                </div>
                <div className="font-exo2 text-xs font-semibold">
                  {"Years of experience: " +
                    techCatalog[TechName[activeTech]].texts.yoe}
                </div>
                <div className="whitespace-pre-wrap font-exo2 text-xs font-extralight">
                  {techCatalog[TechName[activeTech]].texts.description}
                </div>
              </div>
            )}
          </TextFrame>
        </Frame>
        <Frame className="w-fit">
          <div className="mr-[20px] flex h-full">
            <div
              className={
                "h-full w-[2px] bg-gradient-to-b from-active to-inactive"
              }
            />
            <div className="relative right-[1px] h-full w-[2px] bg-gradient-to-b from-active to-inactive blur-sm" />
          </div>
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex flex-row justify-between">
              <Frame className="flex flex-col">
                <InteractiveText type="Firebase" />
                <InteractiveIcon type="NextJS" />
                <InteractiveText type="MongoDB" />
                <InteractiveIcon type="GoogleCloud" />
                <InteractiveText type="OneSignal" />
              </Frame>
              <Frame className="flex flex-col">
                <InteractiveIcon type="Firebase" inRightColumn={true} />
                <InteractiveText type="NextJS" inRightColumn={true} />
                <InteractiveIcon type="MongoDB" inRightColumn={true} />
                <InteractiveText type="GoogleCloud" inRightColumn={true} />
                <InteractiveIcon type="OneSignal" inRightColumn={true} />
              </Frame>
            </Frame>
            <Frame className="flex h-[60px] justify-start font-exo2 text-[40px] font-semibold text-inactive">
              Back end
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </main>
  );
}
