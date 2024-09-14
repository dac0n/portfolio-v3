"use client";
import { Divider } from "@/assets/svgeComponents/Divider";
import { TextFrame } from "@/assets/svgeComponents/TextFrame";
import { Frame } from "@/components/frame/Frame";
import ProjectIcons from "@/components/projectIcons/ProjectIcons";
import { PROJECT_NAMES } from "@/components/utils/constants";
import { projects } from "@/data/projectsInfo";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PROJECT_NAMES | null>(
    null,
  );
  return (
    <main className="flex h-screen w-screen flex-col px-12 font-chakraPetch">
      <Frame className="flex h-auto flex-col py-12 pt-24">
        <Frame className="flex flex-col gap-9">
          <div className="text-center text-[40px] leading-[60px] text-nonInteractive shadow-nonInteractive textShadow">
            Pick a project:
          </div>
          <Frame className="flex flex-row gap-5">
            <ProjectIcons
              projects={Object.values(PROJECT_NAMES)}
              isActive={(project) => project === selectedProject}
              onClick={(project) =>
                setSelectedProject(project === selectedProject ? null : project)
              }
            />
          </Frame>
        </Frame>
      </Frame>
      <Frame className="flex h-full w-full flex-row justify-between">
        <Frame className="flex flex-col">
          <TextFrame
            className="h-[383px] w-[800px] overflow-scroll text-[10px]"
            textStyle="text-active"
          >
            {selectedProject && (
              <>
                <div>Project name: {selectedProject}</div>
                <div>
                  Duration of involvement: {projects[selectedProject].duration}
                </div>
                {projects[selectedProject].description.map((line, index) => (
                  <div key={`description-${index}`} className="font-light">
                    {line}
                  </div>
                ))}
              </>
            )}
          </TextFrame>
          <div className="flex h-auto w-full flex-col gap-3">
            <div className="text-[24px] font-light text-active">Used tech:</div>
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
          </div>
        </Frame>
        <Frame className="h-full w-full"></Frame>
      </Frame>
    </main>
  );
}
