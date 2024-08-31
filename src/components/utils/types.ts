import { HTMLProps, ReactElement } from "react";

import {} from "tailwindcss-themer";
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type ClassName = HTMLProps<HTMLElement>["className"];

export type Color = RGB | RGBA | HEX;

export type StrictOmit<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never;
