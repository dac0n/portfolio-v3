import React, { useState } from "react";
import { PROJECT_NAMES, PROJECT_LOGO_SOURCES } from "../utils/constants";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ClassName } from "../utils/types";
import { ProjectIcon } from "@/assets/svgeComponents/ProjectIcon";

interface ProjectIconsProps {
  projects: PROJECT_NAMES[];
  onClick?: (project: PROJECT_NAMES) => void;
  isActive?: (project: PROJECT_NAMES) => boolean;
  className?: ClassName;
  iconClassName?: ClassName;
}

const ProjectIcons: React.FC<ProjectIconsProps> = ({
  projects,
  onClick,
  isActive,
  className,
  iconClassName,
}) => {
  return (
    <div className={twMerge("flex h-full w-full flex-row", className)}>
      {projects.map((project) => (
        <div
          key={project}
          className={twMerge(
            `"inline-block transition-colors duration-300 ${isActive?.(project) ? "border-projectIconOutline-active" : "border-projectIconOutline-inactive hover:border-projectIconOutline-hovered"} ${!!onClick && "cursor-pointer rounded-xl border-2 p-2"} "cursor-pointer"`,
            iconClassName,
          )}
          onClick={() => onClick?.(project)}
        >
          <ProjectIcon
            projectName={project}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectIcons;
