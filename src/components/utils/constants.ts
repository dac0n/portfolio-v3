export enum TECH_NAMES {
  React = "React",
  Typescript = "Typescript",
  Flutter = "Flutter",
  Tailwind = "Tailwind",
  Vite = "Vite",
  Figma = "Figma",
  Firebase = "Firebase",
  NextJS = "NextJS",
  MongoDB = "MongoDB",
  GoogleCloud = "Google Cloud",
  OneSignal = "1Signal",
  CSS = "CSS",
}

export enum TechType {
  Backend,
  Frontend,
}

export const TECHNOLOGY_TYPES = {
  [TECH_NAMES.CSS]: TechType.Frontend,
  [TECH_NAMES.Figma]: TechType.Frontend,
  [TECH_NAMES.Firebase]: TechType.Backend,
  [TECH_NAMES.Flutter]: TechType.Frontend,
  [TECH_NAMES.GoogleCloud]: TechType.Backend,
  [TECH_NAMES.MongoDB]: TechType.Backend,
  [TECH_NAMES.NextJS]: TechType.Backend,
  [TECH_NAMES.OneSignal]: TechType.Backend,
  [TECH_NAMES.React]: TechType.Frontend,
  [TECH_NAMES.Tailwind]: TechType.Frontend,
  [TECH_NAMES.Typescript]: TechType.Frontend,
  [TECH_NAMES.Vite]: TechType.Frontend,
};

export enum PROJECT_NAMES {
  HBT = "Habitlabs",
  Cosafe = "Cosafe",
  Coyards = "Coyards",
  OneTouch = "1Touch",
  Current = "This website",
  // Matrixsoftlabs = "Matrixsoftlabs",
}

export const PROJECT_LOGO_SOURCES = {
  [PROJECT_NAMES.HBT]: "/projectIcons/Hbt.svg",
  [PROJECT_NAMES.Cosafe]: "/projectIcons/Cosafe.svg",
  [PROJECT_NAMES.Coyards]: "/projectIcons/CoyardsDark.svg",
  [PROJECT_NAMES.OneTouch]: "/projectIcons/1Touch.svg",
  [PROJECT_NAMES.Current]: "/projectIcons/CurrentWebsite.svg",
  // [PROJECT_NAMES.Matrixsoftlabs]: "/projectIcons/Matrixsoftlabs.svg",
};

export const IMAGE_LOGO_SOURCES = {
  [PROJECT_NAMES.HBT]: [
    "/projectImages/Hbt-webapp.png",
    "/projectImages/Hbt-webapp-2.png",
  ],
  [PROJECT_NAMES.Cosafe]: [
    "/projectImages/Cosafe.png",
    "/projectImages/Cosafe-app.png",
  ],
  [PROJECT_NAMES.Coyards]: [
    "/projectImages/Coyards1.png",
    "/projectImages/Coyards2.png",
    "/projectImages/Coyards3.png",
  ],
  [PROJECT_NAMES.OneTouch]: [
    "/projectImages/OneTouch-website.png",
    "/projectImages/OneTouch-specapp.png",
  ],
  [PROJECT_NAMES.Current]: ["/projectIcons/CurrentWebsite.svg"], // todo: create something unique here instead
};

export const PROJECT_PREVIEW_LAYOUTS = {
  [PROJECT_NAMES.HBT]: {
    className: "flex-col gap-2",
  },
  [PROJECT_NAMES.Coyards]: {
    className: "flex-row",
  },
  [PROJECT_NAMES.Cosafe]: {
    className: "flex-col gap-2",
  },
  [PROJECT_NAMES.OneTouch]: {
    className: "flex-col gap-2",
  },
  [PROJECT_NAMES.Current]: {
    className: "flex-col gap-2",
  },
};

export enum TECH_LOGO_SOURCES {
  React = "/techIcons/React.svg",
  Typescript = "/techIcons/Typescript.svg",
  Flutter = "/techIcons/Flutter.svg",
  Tailwind = "/techIcons/Tailwind.svg",
  Vite = "/techIcons/Vite.svg",
  Figma = "/techIcons/Figma.svg",
  Firebase = "/techIcons/Firebase.svg",
  NextJS = "/techIcons/NextJS.svg",
  MongoDB = "/techIcons/MongoDB.svg",
  GoogleCloud = "/techIcons/GoogleCloud.svg",
  OneSignal = "/techIcons/1Signal.svg",
  CSS = "/techIcons/CSS.svg",
}

type TechInfo = {
  [key in TECH_NAMES]: {
    type: "Tool" | "Framework" | "Library" | "Language";
    name: TECH_NAMES;
    icon: string;
    texts: {
      title: string;
      yoe: number;
      description: string[];
    };
    usedAtProjects: PROJECT_NAMES[];
  };
};

export const techCatalog: TechInfo = {
  [TECH_NAMES.React]: {
    type: "Library",
    name: TECH_NAMES.React,
    icon: TECH_LOGO_SOURCES.React,
    texts: {
      title: "React",
      yoe: 3,
      description: [
        "Worked with both React and React Native to create interactive, accessible and smooth interfaces.",
        "Updated legacy codebases to support newer features, browser and React versions.",
        "Developed Coyards 2.0 almost from scratch, with global redesign where 80% of logic was replaced, and written initial prototype for HBT from zero.",
      ],
    },
    usedAtProjects: [
      PROJECT_NAMES.Cosafe,
      PROJECT_NAMES.Coyards,
      PROJECT_NAMES.OneTouch,
      PROJECT_NAMES.HBT,
    ],
  },
  [TECH_NAMES.Typescript]: {
    type: "Language",
    name: TECH_NAMES.Typescript,
    icon: TECH_LOGO_SOURCES.Typescript,
    texts: {
      title: "Typescript",
      yoe: 3,
      description: [
        "Enforced strict type checking in every project where it was possible. Used advanced features such as safe-guarding, mapped types and utilities",
        "Set up typings for API methods / implementations in two projects, ensuring that correct data types are provided and invalid API methods cannot be called.",
        "Worked in a non-static data environment, always being alert about non-correct values returned by DB by adding null-safety whenever possible.",
      ],
    },
    usedAtProjects: [
      PROJECT_NAMES.Cosafe,
      PROJECT_NAMES.Coyards,
      PROJECT_NAMES.HBT,
      PROJECT_NAMES.Current,
    ],
  },
  [TECH_NAMES.Flutter]: {
    type: "Framework",
    name: TECH_NAMES.Flutter,
    icon: TECH_LOGO_SOURCES.Flutter,
    texts: {
      title: "Flutter",
      yoe: 1,
      description: [
        "Changed and updated mobile app, written in Flutter, by client requirements.",
        "Worked on performance issues, design improvements and refactoring of user-to-user communication related features",
        "Embraced OOP principles of Dart and it's statically-typed approach by providing missing types to incomplete interfaces to detect and fix existing errors.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.OneTouch],
  },
  [TECH_NAMES.Tailwind]: {
    type: "Framework",
    name: TECH_NAMES.Tailwind,
    icon: TECH_LOGO_SOURCES.Tailwind,
    texts: {
      title: "Tailwind",
      yoe: 1,
      description: [
        "Learned to update my knowledge of modern frameworks and technologies.",
        "Using tailwindcss-themer and powerful utilities of Tailwind, i'm working on this website, with easy-to-read codebase, high performance due to optimal amount of JS and a modern-looking design.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.Current],
  },
  [TECH_NAMES.Vite]: {
    type: "Tool",
    name: TECH_NAMES.Vite,
    icon: TECH_LOGO_SOURCES.Vite,
    texts: {
      title: "Vite",
      yoe: 1,
      description: [
        "Used to quickly develop initial startup samples, and show working prototype to the client.",
        "Did whole setup (resulting in a production-ready app), optimized assets, integrated enforced eslint rule-checking.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.HBT],
  },
  [TECH_NAMES.Figma]: {
    type: "Tool",
    name: TECH_NAMES.Figma,
    icon: TECH_LOGO_SOURCES.Figma,
    texts: {
      title: "Figma",
      yoe: 2,
      description: [
        "Developed applications for web and mobile applications of 3 projects, using dev-ready Figma designs and developer mode.",
        "Checked layouts and suggested improvements while building.",

        "During last project (Habitlabs) used to create prototype versions of constructor-type component.",

        "Written full responsive design for this web page from zero, using Figma.",
      ],
    },
    usedAtProjects: [
      PROJECT_NAMES.HBT,
      PROJECT_NAMES.Coyards,
      PROJECT_NAMES.Cosafe,
      PROJECT_NAMES.Current,
    ],
  },
  [TECH_NAMES.Firebase]: {
    type: "Tool",
    name: TECH_NAMES.Firebase,
    icon: TECH_LOGO_SOURCES.Firebase,
    texts: {
      title: "Firebase",
      yoe: 1,
      description: [
        "Used to analyze performance and add optimizations to app-server communication.",
        "Reduced the number of database queries by at least 3 times, supporting a user base of 20 000, by optimizing database queries, which also reduced operational costs of back-end.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.OneTouch],
  },
  [TECH_NAMES.NextJS]: {
    type: "Framework",
    name: TECH_NAMES.NextJS,
    icon: TECH_LOGO_SOURCES.NextJS,
    texts: {
      title: "NextJS",
      yoe: 1,
      description: [
        "Learned to update my knowledge of modern frameworks and technologies. Applied this knowledge to create a website which supports server-side-rendering and a back-end integration (the latter is currently WIP).",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.Current],
  },
  [TECH_NAMES.MongoDB]: {
    type: "Tool",
    name: TECH_NAMES.MongoDB,
    icon: TECH_LOGO_SOURCES.MongoDB,
    texts: {
      title: "MongoDB",
      yoe: 1,
      description: [
        "Completed a Python course, which included MongoDB integration for blockchain implementation. Used and modified existing implementation on the very first project, to dynamically display the data provided by the back-end on a web application.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.OneTouch],
  },
  [TECH_NAMES.GoogleCloud]: {
    type: "Tool",
    name: TECH_NAMES.GoogleCloud,
    icon: TECH_LOGO_SOURCES.GoogleCloud,
    texts: {
      title: "Google Cloud",
      yoe: 1.5,
      description: [
        "Used Google Maps API for geolocation and location sharing between users of our apps.",
        "Implemented firebase auth to secure data visible to users of admind app.",
        "Currently working on Google Analytics integrations on portfolio website.",
      ],
    },
    usedAtProjects: [
      PROJECT_NAMES.Coyards,
      PROJECT_NAMES.OneTouch,
      PROJECT_NAMES.Current,
    ],
  },
  [TECH_NAMES.OneSignal]: {
    type: "Tool",
    name: TECH_NAMES.OneSignal,
    icon: TECH_LOGO_SOURCES.OneSignal,
    texts: {
      title: "1Signal",
      yoe: 1,
      description: [
        "Used for critical emergency messaging app to ensure that users can quickly communicate with each other without making it a burden for a back-end.",
        "Implemented signal capture & processing, with live updates and notifications, on front-end.",
      ],
    },
    usedAtProjects: [PROJECT_NAMES.Coyards],
  },
  [TECH_NAMES.CSS]: {
    type: "Language",
    name: TECH_NAMES.CSS,
    icon: TECH_LOGO_SOURCES.CSS,
    texts: {
      title: "CSS",
      yoe: 4,
      description: [
        "Used SASS, SCSS, CSS components and Tailwind in connection with Javascript to create interactive and accessible designs. Constantly learning about new supported features, such as has selector or Transitions API, which are also used for this website.",
      ],
    },
    usedAtProjects: [
      PROJECT_NAMES.Cosafe,
      PROJECT_NAMES.Coyards,
      PROJECT_NAMES.HBT,
      PROJECT_NAMES.OneTouch,
      PROJECT_NAMES.Current,
    ],
  },
};
