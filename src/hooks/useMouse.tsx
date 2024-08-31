"use client";

import { useEffect, useState } from "react";

export const useMouse = (ref: React.RefObject<HTMLElement>, fps = 60) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateMouse = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top } = element.getBoundingClientRect();
      setPosition({ x: clientX - left, y: clientY - top });
    };

    const interval = 1000 / fps;
    element.addEventListener("mousemove", updateMouse);

    return () => {
      element.removeEventListener("mousemove", updateMouse);
    };
  }, [ref, fps]);

  return position;
};
