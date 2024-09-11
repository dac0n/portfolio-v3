"use client";

import { Divider } from "@/assets/svgeComponents/Divider";
import { TechLogo } from "@/assets/svgeComponents/TechLogo";
import { TextFrame } from "@/assets/svgeComponents/TextFrame";
import { Frame } from "@/components/frame/Frame";
import LinedButton from "@/components/lined-button/LinedBtn";
import {
  techCatalog,
  TECH_NAMES,
  TECHNOLOGY_TYPES,
  TechType,
  PROJECT_LOGO_SOURCES,
} from "@/components/utils/constants";
import { useState } from "react";

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
            <Frame
              className={`flex h-[60px] justify-end font-exo2 text-[40px] font-semibold uppercase ${leftColumnActive ? "text-active" : "text-inactive"}`}
            >
              Front end
            </Frame>
          </Frame>
          <div className="ml-[20px] flex h-full">
            <div
              className={`h-full w-[2px] ${leftColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"}`}
            />
            <div
              className={`relative right-[1px] h-full w-[2px] ${leftColumnActive ? "bg-active" : "bg-gradient-to-b from-active to-inactive"} blur-sm`}
            />
          </div>
        </Frame>
        <Frame className="flex h-fit w-full max-w-[700px] flex-col items-start justify-start gap-12 p-12">
          <TextFrame className="text-active">
            {!activeTech ? (
              <div className="font-chakraPetch">
                Select a technology to display info.
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="font-exo2 text-xs font-semibold">
                  {`${techCatalog[TECH_NAMES[activeTech]].type}: ${techCatalog[TECH_NAMES[activeTech]].texts.title}`}
                </div>
                <div className="font-exo2 text-xs font-semibold">
                  {"Years of experience: " +
                    techCatalog[TECH_NAMES[activeTech]].texts.yoe}
                </div>
                <div className="whitespace-pre-wrap font-exo2 text-xs font-extralight">
                  {techCatalog[TECH_NAMES[activeTech]].texts.description}
                </div>
              </div>
            )}
          </TextFrame>
          <div className="flex w-full flex-col">
            <Divider />
            <div className="flex flex-row justify-between">
              <div className="flex items-center text-nowrap font-exo2 text-[24px] font-semibold leading-[60px] text-inactive">
                Used at projects:
              </div>
              <div className="flex flex-grow flex-row flex-wrap justify-center gap-2">
                {activeTechInfo &&
                  activeTechInfo.usedAtProjects.map((tech) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className=""
                      key={tech}
                      alt={tech}
                      src={PROJECT_LOGO_SOURCES[tech]}
                    />
                  ))}
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
            <Frame
              className={`flex h-[60px] justify-start font-exo2 text-[40px] font-semibold uppercase ${rightColumnActive ? "text-active" : "text-inactive"}`}
            >
              Back end
            </Frame>
          </Frame>
        </Frame>
      </Frame>
    </main>
  );
}
