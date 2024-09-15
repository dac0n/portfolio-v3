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
    <main className="flex h-screen w-screen justify-start overflow-hidden font-chakraPetch">
      <Frame className="flex-col justify-start gap-9 px-12 py-24">
        <Frame className="h-auto flex-col">
          <Frame className="flex-col gap-9">
            <div className="text-center text-[40px] leading-[60px] text-nonInteractive shadow-nonInteractive textShadow">
              Pick a project:
            </div>
            <Frame className="flex-row gap-5">
              <ProjectIcons
                projects={Object.values(PROJECT_NAMES)}
                isActive={(project) => project === selectedProject}
                onClick={(project) =>
                  setSelectedProject(
                    project === selectedProject ? null : project,
                  )
                }
              />
            </Frame>
          </Frame>
        </Frame>
        {selectedProject && (
          <Frame className="animate-fade-in flex-row justify-between overflow-hidden object-cover">
            <Frame className={`w-[48%] flex-col justify-start gap-9`}>
              <TextFrame
                className="flex overflow-scroll text-[10px]"
                textStyle="text-active"
              >
                {
                  <>
                    <div>Project name: {selectedProject}</div>
                    <div>
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
                  </>
                }
              </TextFrame>
              <Frame className="h-auto flex-col items-start">
                <div className="text-[24px] font-light text-active">
                  Used tech:
                </div>
                <div className="h-auto w-full">
                  <Divider />
                  <div className="flex w-full flex-row flex-wrap gap-6">
                    {selectedProject &&
                      projects[selectedProject].usedTech.map((tech, index) => (
                        <div
                          key={`tech-${index}`}
                          className="text-[24px] font-light text-nonInteractive"
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
                  <img
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
