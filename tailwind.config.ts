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
  metalWhite: "#CDCDCD",
  ivory: "#FFFFF0",
  beige: "#F5F5DC",
  wood: "#DEB887",
  darkWood: "#8B5A2B",
  warmGray: "#D3D3D3",
  darkBeige: "#D2B48C",
  sienna: "#A0522D",
  peru: "#CD853F",
  chocolate: "#D2691E",
  darkKhaki: "#BDB76B",
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
        baiJamjuree: ["var(--font-baiJamjuree)"],
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
            formEl: {
              formText: {
                inactive: colors.neonBlue,
              },
              placeholder: {
                inactive: colors.metalWhite,
              },
              btnText: {
                inactive: colors.neonBlue,
                active: colors.neonBlue,
                hovered: colors.neonBlue,
              },
              outline: {
                inactive: colors.navyBlue,
                active: colors.neonBlue,
                hovered: colors.neonBlue,
              },
              bg: {
                inactive: colors.darkBlue,
                active: colors.darkBlue,
                hovered: colors.black,
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
      themes: [
        {
          name: "light-theme",
          extend: {
            colors: {
              menuBtn: {
                text: {
                  inactive: colors.sienna,
                  active: colors.ivory,
                  hovered: colors.chocolate,
                },
                outline: {
                  inactive: colors.sienna,
                  active: colors.sienna,
                  hovered: colors.chocolate,
                },
                bg: {
                  inactive: colors.beige,
                  active: colors.peru,
                  hovered: colors.beige,
                },
              },
              formEl: {
                formText: {
                  inactive: colors.sienna,
                },
                placeholder: {
                  inactive: colors.warmGray,
                },
                btnText: {
                  inactive: colors.sienna,
                  active: colors.sienna,
                  hovered: colors.sienna,
                },
                outline: {
                  inactive: colors.darkKhaki,
                  active: colors.peru,
                  hovered: colors.peru,
                },
                bg: {
                  inactive: colors.ivory,
                  active: colors.ivory,
                  hovered: colors.beige,
                },
              },
              projectIconOutline: {
                inactive: colors.darkKhaki,
                active: colors.peru,
                hovered: colors.chocolate,
              },
              shape: {
                main: colors.peru,
                alt: colors.sienna,
              },
              icons: {
                processor: {
                  gradientColor1: colors.darkBeige,
                  gradientColor2: colors.selectiveYellow,
                },
              },
              hovered: colors.chocolate,
              nonInteractive: colors.sienna,
              inactive: colors.darkKhaki,
              active: colors.peru,
              bgColor: colors.ivory,
            },
          },
        },
      ],
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
