"use client";
import { useEffect, useState } from "react";

export const useWindowSize = (fps = 60) => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: typeof window !== "undefined" ? window.innerWidth : 0,
    innerHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    devicePixelRatio:
      typeof window !== "undefined" ? window.devicePixelRatio : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      });
    };

    const interval = 1000 / fps;
    const timer = setInterval(() => {
      window.addEventListener("resize", handleResize);
    }, interval);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [fps]);

  return windowSize;
};
