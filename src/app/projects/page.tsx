/* eslint-disable @next/next/no-img-element */
"use client";
import { Divider } from "@/assets/svgeComponents/Divider";
import { HiTechFrame } from "@/assets/svgeComponents/HiTechFrame";
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
    <main className="flex flex-grow items-center justify-center overflow-scroll font-chakraPetch">
      <Frame className="desktop:justify-center desktop:gap-[4%] h-full max-h-[900px] w-full max-w-[1500px] flex-col justify-start gap-[2%] px-[100px]">
        <Frame className="desktop:h-[20%] h-[17%] flex-col justify-between">
          <div className="desktop:pt-0 desktop:text-[2.5rem] desktop:leading-[2.5rem] pt-3 text-center text-[2rem] leading-[2rem] text-nonInteractive shadow-nonInteractive textShadow">
            Pick a project:
          </div>
          <ProjectIcons
            projects={Object.values(PROJECT_NAMES)}
            isActive={(project) => project === selectedProject}
            onClick={(project) =>
              setSelectedProject(project === selectedProject ? null : project)
            }
            className="h-[40%] justify-center gap-[20px]"
            iconClassName="w-[15%]"
          />
        </Frame>
        <div className="flex h-[71%] max-h-[600px] w-full">
          {selectedProject && (
            <div className="w-full animate-fade-in flex-col object-cover">
              <Frame className="flex-row justify-between gap-[24px]">
                <Frame className={`w-[55%] flex-col justify-start gap-[12px]`}>
                  <HiTechFrame className="flex text-[10px]">
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
                  </HiTechFrame>
                  <div className="flex w-full flex-col items-start gap-[12px] text-[24px] font-light leading-[24px] text-active">
                    Used tech:
                    <Divider />
                  </div>
                  <div className="flex w-full flex-row flex-wrap items-start gap-[24px]">
                    {projects[selectedProject].usedTech.map((tech, index) => (
                      <div
                        key={`tech-${index}`}
                        className="gap-[24px] text-[24px] font-light leading-[1.1em] text-nonInteractive"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </Frame>
                <Frame
                  className={`h-full w-[48%] items-end gap-[1em] ${PROJECT_PREVIEW_LAYOUTS[selectedProject].className}`}
                >
                  {IMAGE_LOGO_SOURCES[selectedProject].map((src) => (
                    <Frame
                      key={`project-${src}`}
                      className="w-auto animate-fade-in overflow-hidden"
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
            </div>
          )}
        </div>
      </Frame>
    </main>
  );
}
