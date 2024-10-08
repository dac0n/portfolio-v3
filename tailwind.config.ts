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
  // Updated professional green and sky palette
  crisp: "#FFFFFF",
  cloud: "#F8FAFC", // Lighter
  mist: "#EDF2F7", // Lighter
  frost: "#CBD5E0", // Darker
  sage: "#CAD9C8",
  mint: "#96da8e",
  leaf: "#8BAB8D",
  forest: "#5E8C61",
  pine: "#3A6B3D",
  sky: "#B8D8E8",
  azure: "#7CACCF",
  charcoal: "#4A5568", // New darker color for better contrast
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
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1300px",
        // => @media (min-width: 1300px) { ... }
      },
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
              polygonFrame: {
                outline: colors.white,
              },
              default: colors.white,
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
                  inactive: colors.forest,
                  active: colors.crisp,
                  hovered: colors.pine,
                },
                outline: {
                  inactive: colors.leaf,
                  active: colors.forest,
                  hovered: colors.pine,
                },
                bg: {
                  inactive: colors.cloud,
                  active: colors.mint,
                  hovered: colors.mist,
                },
              },
              formEl: {
                formText: {
                  inactive: colors.forest,
                },
                placeholder: {
                  inactive: colors.charcoal, // Darker for better visibility
                },
                btnText: {
                  inactive: colors.forest,
                  active: colors.crisp,
                  hovered: colors.pine,
                },
                outline: {
                  inactive: colors.leaf,
                  active: colors.forest,
                  hovered: colors.pine,
                },
                bg: {
                  inactive: colors.crisp,
                  active: colors.cloud,
                  hovered: colors.mist,
                },
              },
              projectIconOutline: {
                inactive: colors.leaf,
                active: colors.forest,
                hovered: colors.pine,
              },
              shape: {
                main: colors.mint,
                alt: colors.sky,
              },
              icons: {
                processor: {
                  gradientColor1: colors.sage,
                  gradientColor2: colors.azure,
                },
                polygonFrame: {
                  outline: colors.leaf,
                },
                default: colors.forest,
              },
              hovered: colors.pine,
              nonInteractive: colors.charcoal, // Darker for better visibility
              inactive: colors.leaf,
              active: colors.forest,
              bgColor: colors.crisp,
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
