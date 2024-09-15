/* eslint-disable @next/next/no-img-element */
"use client";
import { Divider } from "@/assets/svgeComponents/Divider";
import { TextFrame } from "@/assets/svgeComponents/TextFrame";
import { Frame } from "@/components/frame/Frame";
import ProjectIcons from "@/components/projectIcons/ProjectIcons";
import {
  IMAGE_LOGO_SOURCES,
  PROJECT_NAMES,
  PROJECT_PREVIEW_LAYOUTS,
} from "@/components/utils/constants";
import { projects } from "@/data/projectsInfo";
import { useState } from "react";
import Image from "next/image";
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PROJECT_NAMES | null>(
    null,
  );
  return (
    <main className="hide-scrollbar flex flex-grow items-center justify-center overflow-scroll font-chakraPetch">
      <Frame className="h-[800px] w-[1200px] flex-col justify-start gap-[36px]">
        <Frame className="h-[193px] flex-col justify-start gap-[36px]">
          <div className="h-[60px] text-center text-[40px] text-nonInteractive shadow-nonInteractive textShadow">
            Pick a project:
          </div>
          <ProjectIcons
            projects={Object.values(PROJECT_NAMES)}
            isActive={(project) => project === selectedProject}
            onClick={(project) =>
              setSelectedProject(project === selectedProject ? null : project)
            }
            className="h-[64px] justify-center gap-[20px]"
            iconClassName="w-[160px]"
          />
        </Frame>
        {selectedProject && (
          <Frame className="animate-fade-in flex-row justify-between object-cover">
            <Frame className={`w-[48%] flex-col justify-start gap-[22px]`}>
              <TextFrame className="flex h-[470px] text-[10px]">
                {
                  <div className="flex flex-col gap-1 text-[20px] font-light text-active">
                    <div className="font-medium">
                      Project name: {selectedProject}
                    </div>
                    <div className="font-medium">
                      Duration of involvement:{" "}
                      {projects[selectedProject].duration}
                    </div>
                    {projects[selectedProject].description.map(
                      (line, index) => (
                        <div
                          key={`description-${index}`}
                          className="font-light"
                        >
                          {line}
                        </div>
                      ),
                    )}
                  </div>
                }
              </TextFrame>
              <Frame className="h-auto flex-col items-start">
                <div className="text-[24px] font-light text-active">
                  Used tech:
                </div>
                <div className="flex h-auto w-full flex-col gap-[18px]">
                  <Divider />
                  <div className="flex w-full flex-row flex-wrap gap-[1em]">
                    {selectedProject &&
                      projects[selectedProject].usedTech.map((tech, index) => (
                        <div
                          key={`tech-${index}`}
                          className="text-[24px] font-light leading-[1.1em] text-nonInteractive"
                        >
                          {tech}
                        </div>
                      ))}
                  </div>
                </div>
              </Frame>
            </Frame>
            <Frame
              className={`w-[48%] overflow-hidden object-cover ${PROJECT_PREVIEW_LAYOUTS[selectedProject].className}`}
            >
              {IMAGE_LOGO_SOURCES[selectedProject].map((src) => (
                <Frame
                  key={`project-${src}`}
                  className="w-auto overflow-hidden"
                >
                  <Image
                    width={0}
                    height={0}
                    unoptimized
                    priority
                    className={"flex h-full w-auto object-contain"}
                    src={src}
                    alt={`project-${src}`}
                  />
                </Frame>
              ))}
            </Frame>
          </Frame>
        )}
      </Frame>
    </main>
  );
}
