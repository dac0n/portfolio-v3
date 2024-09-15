import { AngleClassName, ClassName } from "./types";

// for menu button elements
export const hoverableBtn = (
  isActive: boolean,
  type: "bg" | "outline" | "text",
  color?: "bg" | "outline" | "text",
): ClassName => {
  const _color = color ?? type;
  if (type === "bg") {
    if (_color === "bg") {
      return isActive
        ? "bg-menuBtn-bg-active"
        : "bg-menuBtn-bg-inactive group-hover/button:z-30 group-hover/button:bg-menuBtn-bg-hovered";
    } else if (_color === "outline") {
      return isActive
        ? "bg-menuBtn-outline-active"
        : "bg-menuBtn-outline-inactive group-hover/button:z-30 group-hover/button:bg-menuBtn-outline-hovered";
    } else if (_color === "text") {
      return isActive
        ? "bg-menuBtn-text-active"
        : "bg-menuBtn-text-inactive group-hover/button:z-30 group-hover/button:bg-menuBtn-text-hovered";
    }
  } else if (type === "outline") {
    if (_color === "bg") {
      return isActive
        ? "outline outline-menuBtn-bg-active"
        : "outline outline-menuBtn-bg-inactive group-hover/button:z-30 group-hover/button:outline-menuBtn-bg-hovered";
    } else if (_color === "outline") {
      return isActive
        ? "outline outline-menuBtn-outline-active"
        : "outline outline-menuBtn-outline-inactive group-hover/button:z-30 group-hover/button:outline-menuBtn-outline-hovered";
    } else if (_color === "text") {
      return isActive
        ? "outline outline-menuBtn-text-active"
        : "outline outline-menuBtn-text-inactive group-hover/button:z-30 group-hover/button:outline-menuBtn-text-hovered";
    }
  } else if (type === "text") {
    if (_color === "bg") {
      return isActive
        ? "text-menuBtn-bg-active"
        : "text-menuBtn-bg-inactive group-hover/button:z-30 group-hover/button:text-menuBtn-bg-hovered";
    } else if (_color === "outline") {
      return isActive
        ? "text-menuBtn-outline-active"
        : "text-menuBtn-outline-inactive group-hover/button:z-30 group-hover/button:text-menuBtn-outline-hovered";
    } else if (_color === "text") {
      return isActive
        ? "text-menuBtn-text-active"
        : "text-menuBtn-text-inactive group-hover/button:z-30 group-hover/button:text-menuBtn-text-hovered";
    }
  }
};

export function rotatedRectangleBoundingBox(
  width: number,
  height: number,
  angleDegrees: number,
) {
  // Convert angle to radians
  const angleRadians = (Math.PI / 180) * angleDegrees;

  // Calculate the width and height of the bounding box
  const cosTheta = Math.abs(Math.cos(angleRadians));
  const sinTheta = Math.abs(Math.sin(angleRadians));

  const boundingBoxWidth = width * cosTheta + height * sinTheta;
  const boundingBoxHeight = width * sinTheta + height * cosTheta;
  return {
    width: boundingBoxWidth,
    height: boundingBoxHeight,
  };
}

export function extractAngle(className: AngleClassName): number {
  const match = className.match(/-?\d+\.?\d*/);
  if (!match)
    throw new Error(
      "Failed to extract angle from class at extractAngle invocation, helperFunctions.ts",
    );
  return Number(match?.[0]);
}
