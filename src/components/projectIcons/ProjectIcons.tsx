import React, { useState } from "react";
import { PROJECT_NAMES, PROJECT_LOGO_SOURCES } from "../utils/constants";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface ProjectIconsProps {
  projects: PROJECT_NAMES[];
  onClick?: (project: PROJECT_NAMES) => void;
  isActive?: (project: PROJECT_NAMES) => boolean;
}

const ProjectIcons: React.FC<ProjectIconsProps> = ({
  projects,
  onClick,
  isActive,
}) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project}
          className={`"inline-block transition-colors duration-300 ${isActive?.(project) ? "border-projectIconOutline-active" : "border-projectIconOutline-inactive hover:border-projectIconOutline-hovered"} ${!!onClick && "cursor-pointer rounded-xl border-2 p-2"} "cursor-pointer"`}
          onClick={() => onClick?.(project)}
        >
          <Image
            priority={true}
            height={51}
            width={0}
            alt={project}
            src={PROJECT_LOGO_SOURCES[project]}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </>
  );
};

export default ProjectIcons;
