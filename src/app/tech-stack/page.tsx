"use client";

import { Divider } from "@/assets/svgeComponents/Divider";
import { TechLogo } from "@/assets/svgeComponents/TechLogo";
import { HiTechFrame } from "@/assets/svgeComponents/HiTechFrame";
import { Frame } from "@/components/frame/Frame";
import LinedButton from "@/components/lined-button/LinedBtn";
import ProjectIcons from "@/components/projectIcons/ProjectIcons";
import {
  techCatalog,
  TECH_NAMES,
  TECHNOLOGY_TYPES,
  TechType,
  PROJECT_LOGO_SOURCES,
} from "@/components/utils/constants";
import { useState } from "react";

const ColumnTitle = ({
  column,
  isActive,
}: {
  column: "right" | "left";
  isActive: boolean;
}) => {
  return (
    <Frame
      className={`mt-6 flex h-[60px] textShadow ${column === "left" ? "justify-end" : "justify-start"} font-exo2 text-[40px] font-semibold uppercase ${isActive ? "text-active shadow-active" : "text-inactive shadow-inactive"}`}
    >
      {column === "left" ? "Front end" : "Back end"}
    </Frame>
  );
};

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<keyof typeof TECH_NAMES | null>(
    null,
  );
  const [hoveredTech, setHoveredTech] = useState<
    keyof typeof TECH_NAMES | null
  >(null);

  const activeTechInfo = activeTech && techCatalog[TECH_NAMES[activeTech]];
  const leftColumnActive =
    activeTech &&
    TECHNOLOGY_TYPES[TECH_NAMES[activeTech]] === TechType.Frontend;
  const rightColumnActive =
    activeTech && TECHNOLOGY_TYPES[TECH_NAMES[activeTech]] === TechType.Backend;

  const InteractiveIcon = ({
    type,
    inRightColumn = false,
  }: {
    type: keyof typeof TECH_NAMES;
    inRightColumn?: boolean;
  }) => {
    return (
      <LinedButton
        key={`logo-${type}`}
        textStyle="px-0 mx-[-4px]"
        showLeftLine={inRightColumn}
        showRightLine={!inRightColumn}
        onMouseEnter={() => setHoveredTech(type)}
        onMouseLeave={() => setHoveredTech(null)}
        onClick={() => setActiveTech(activeTech !== type ? type : null)}
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
    type: keyof typeof TECH_NAMES;
    inRightColumn?: boolean;
  }) => (
    <LinedButton
      key={`title-${type}`}
      textStyle={`tech-${type} px-0 text-[20px] leading-[40px] h-[40px] font-exo2 ${
        inRightColumn ? "ml-[10px]" : "mr-[10px]"
      }`}
      showLeftLine={inRightColumn}
      showRightLine={!inRightColumn}
      onMouseEnter={() => setHoveredTech(type)}
      onMouseLeave={() => setHoveredTech(null)}
      onClick={() => setActiveTech(activeTech !== type ? type : null)}
      isHovered={hoveredTech === type}
      isActive={activeTech === type}
    >
      {TECH_NAMES[type]}
    </LinedButton>
  );

  return (
    <main className="scale flex flex-grow flex-col items-center justify-start">
      <Frame className="-mt-10 flex h-auto w-full scale-90">
        <Frame className="w-fit">
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex h-auto flex-row justify-between">
              <Frame className="flex h-auto flex-col items-start">
                <InteractiveIcon type="React" />
                <InteractiveText type="CSS" />
                <InteractiveIcon type="Typescript" />
                <InteractiveText type="Flutter" />
                <InteractiveIcon type="Tailwind" />
                <InteractiveText type="Vite" />
                <InteractiveIcon type="Figma" />
              </Frame>
              <Frame className="flex h-auto flex-col items-start">
                <InteractiveText type="React" inRightColumn={true} />
                <InteractiveIcon type="CSS" inRightColumn={true} />
                <InteractiveText type="Typescript" inRightColumn={true} />
                <InteractiveIcon type="Flutter" inRightColumn={true} />
                <InteractiveText type="Tailwind" inRightColumn={true} />
                <InteractiveIcon type="Vite" inRightColumn={true} />
                <InteractiveText type="Figma" inRightColumn={true} />
              </Frame>
            </Frame>
            <ColumnTitle column="left" isActive={!!leftColumnActive} />
          </Frame>
          <div className="ml-[20px] flex h-[100%]">
            <div
              className={`h-full w-[2px] ${leftColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"}`}
            />
            <div
              className={`relative right-[1px] h-full w-[2px] ${leftColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"} blur-sm`}
            />
          </div>
        </Frame>
        <Frame className="flex w-full max-w-[700px] flex-col items-start justify-start gap-[2em] p-[4%]">
          <HiTechFrame className="text-active">
            {!activeTech ? (
              <div className="text-shadow font-chakraPetch text-xl font-extralight shadow-active">
                Select a technology to display info..
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="font-exo2 text-xl font-semibold">
                  {`${techCatalog[TECH_NAMES[activeTech]].type}: ${techCatalog[TECH_NAMES[activeTech]].texts.title}`}
                </div>
                <div className="font-exo2 text-xl font-semibold">
                  {"Years of experience: " +
                    techCatalog[TECH_NAMES[activeTech]].texts.yoe}
                </div>
                <div className="font-exo2 text-xl font-extralight">
                  {techCatalog[TECH_NAMES[activeTech]].texts.description.map(
                    (line, index) => (
                      <div key={`description-${index}`}>{line}</div>
                    ),
                  )}
                </div>
              </div>
            )}
          </HiTechFrame>
          <div className="flex w-full flex-col">
            <Divider />
            <div className="flex h-14 flex-row justify-between gap-2">
              <Frame className="w-auto">
                <div className="flex items-start text-nowrap font-exo2 text-[24px] font-semibold text-inactive shadow-inactive">
                  Used at projects:
                </div>
              </Frame>

              <div className="flex flex-grow flex-row flex-wrap justify-center gap-2">
                {activeTechInfo && (
                  <ProjectIcons projects={activeTechInfo.usedAtProjects} />
                )}
              </div>
            </div>
          </div>
        </Frame>
        <Frame className="w-fit">
          <div className="mr-[20px] flex h-full">
            <div
              className={`h-full w-[2px] ${rightColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"}`}
            />
            <div
              className={`relative right-[1px] h-full w-[2px] ${rightColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"} blur-sm`}
            />
          </div>
          <Frame className="flex w-[260px] flex-col justify-between">
            <Frame className="flex h-full flex-row justify-between">
              <Frame className="flex h-auto flex-col items-start">
                <InteractiveText type="Firebase" />
                <InteractiveIcon type="NextJS" />
                <InteractiveText type="MongoDB" />
                <InteractiveIcon type="GoogleCloud" />
                <InteractiveText type="OneSignal" />
              </Frame>
              <Frame className="flex h-auto flex-col items-start">
                <InteractiveIcon type="Firebase" inRightColumn={true} />
                <InteractiveText type="NextJS" inRightColumn={true} />
                <InteractiveIcon type="MongoDB" inRightColumn={true} />
                <InteractiveText type="GoogleCloud" inRightColumn={true} />
                <InteractiveIcon type="OneSignal" inRightColumn={true} />
              </Frame>
            </Frame>
            <ColumnTitle column="right" isActive={!!rightColumnActive} />
          </Frame>
        </Frame>
      </Frame>
    </main>
  );
}
