import { ClassName } from "./types";

// for button elements
export const hoverable = (
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
