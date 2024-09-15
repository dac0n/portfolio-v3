//@ts-check

import type { PluginAPI, Config } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");

export const colors = {
  navyBlue: "#6B728E",
  white: "#FFFFFF",
  darkBlue: "#001417",
  black: "#000000",
  neonBlue: "#00FFFF",
  olive: "#AA8410",
  selectiveYellow: "#FFB800",
  lightGray: "#D7D7D7",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/svgeComponents/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s",
      },
      fontFamily: {
        chakraPetch: ["var(--font-chakraPetch)"],
        exo2: ["var(--font-exo2)"],
      },
      colors: {
        ...colors,
      },
      cursor: {
        default: "url('/cursor_default.svg'), default",
        pointer: "url('/cursor_active.svg'), pointer",
      },
      textShadow: {
        sm: "0 0 2px var(--tw-shadow-color)",
        DEFAULT: "0 0 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          // put the default values of any config you want themed
          // just as if you were to extend tailwind's theme like normal https://tailwindcss.com/docs/theme#extending-the-default-theme
          colors: {
            menuBtn: {
              text: {
                inactive: colors.white,
                active: colors.black,
                hovered: colors.neonBlue,
              },
              outline: {
                inactive: colors.white,
                active: colors.white,
                hovered: colors.neonBlue,
              },
              bg: {
                inactive: colors.black,
                active: colors.neonBlue,
                hovered: colors.black,
              },
            },
            formBtn: {
              text: {
                inactive: colors.neonBlue,
                active: colors.neonBlue,
                hovered: colors.neonBlue,
              },
              outline: {
                inactive: colors.neonBlue,
                active: colors.neonBlue,
                hovered: colors.neonBlue,
              },
              bg: {
                inactive: colors.darkBlue,
                active: colors.darkBlue,
                hovered: colors.darkBlue,
              },
            },
            downloadResumeBtn: {
              text: {
                inactive: colors.darkBlue,
                active: colors.olive,
                hovered: colors.white,
              },
              outline: {
                inactive: colors.darkBlue,
                active: colors.olive,
                hovered: colors.white,
              },
              bg: {
                inactive: colors.darkBlue,
                active: colors.olive,
                hovered: colors.white,
              },
            },
            projectIconOutline: {
              inactive: colors.navyBlue,
              active: colors.neonBlue,
              hovered: colors.white,
            },
            shape: {
              main: colors.neonBlue,
              alt: colors.white,
            },
            icons: {
              processor: {
                gradientColor1: colors.olive,
                gradientColor2: colors.selectiveYellow,
              },
            },
            hovered: colors.white,
            nonInteractive: colors.white,
            inactive: colors.navyBlue,
            active: colors.neonBlue,
            bgColor: colors.black,
          },
          animation: {
            "fade-in": "fade-in 1s ease-out",
          },
          keyframes: {
            "fade-in": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          },
        },
      },
    }),
    plugin(function ({
      matchUtilities,
      theme,
    }: {
      matchUtilities: PluginAPI["matchUtilities"];
      theme: PluginAPI["theme"];
    }) {
      matchUtilities(
        {
          textShadow: (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};

export default config;
