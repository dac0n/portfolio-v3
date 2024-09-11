import dedent from "dedent";

export enum TechName {
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

export enum ProjectName {
  HBT = "Habitlabs",
  Cosafe = "Cosafe",
  Coyards = "Coyards",
  OneTouch = "1Touch",
  Current = "This website",
  Matrixsoftlabs = "Matrixsoftlabs",
}

export enum ProjectLogoSource {
  HBT = "/Hbt.svg",
  Cosafe = "/Cosafe.svg",
  Coyards = "/Coyards.svg",
  OneTouch = "/1Touch.svg",
  Current = "/Current.svg",
  Matrixsoftlabs = "/Matrixsoftlabs.svg",
}

export enum TechLogoSource {
  React = "/React.svg",
  Typescript = "/Typescript.svg",
  Flutter = "/Flutter.svg",
  Tailwind = "/Tailwind.svg",
  Vite = "/Vite.svg",
  Figma = "/Figma.svg",
  Firebase = "/Firebase.svg",
  NextJS = "/NextJS.svg",
  MongoDB = "/MongoDB.svg",
  GoogleCloud = "/GoogleCloud.svg",
  OneSignal = "/1Signal.svg",
  CSS = "/CSS.svg",
}

type TechInfo = {
  [key in TechName]: {
    type: "Tool" | "Framework" | "Library" | "Language";
    name: TechName;
    icon: string;
    texts: {
      title: string;
      yoe: number;
      description: string[];
    };
    usedAtProjects: ProjectName[];
  };
};

export const techCatalog: TechInfo = {
  [TechName.React]: {
    type: "Library",
    name: TechName.React,
    icon: TechLogoSource.React,
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
      ProjectName.Cosafe,
      ProjectName.Coyards,
      ProjectName.OneTouch,
      ProjectName.HBT,
    ],
  },
  [TechName.Typescript]: {
    type: "Language",
    name: TechName.Typescript,
    icon: TechLogoSource.Typescript,
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
      ProjectName.Cosafe,
      ProjectName.Coyards,
      ProjectName.HBT,
      ProjectName.Current,
    ],
  },
  [TechName.Flutter]: {
    type: "Framework",
    name: TechName.Flutter,
    icon: TechLogoSource.Flutter,
    texts: {
      title: "Flutter",
      yoe: 1,
      description: [
        "Changed and updated mobile app, written in Flutter, by client requirements.",
        "Worked on performance issues, design improvements and refactoring of user-to-user communication related features",
        "Embraced OOP principles of Dart and it's statically-typed approach by providing missing types to incomplete interfaces to detect and fix existing errors.",
      ],
    },
    usedAtProjects: [ProjectName.OneTouch],
  },
  [TechName.Tailwind]: {
    type: "Framework",
    name: TechName.Tailwind,
    icon: TechLogoSource.Tailwind,
    texts: {
      title: "Tailwind",
      yoe: 1,
      description: [
        "Learned to update my knowledge of modern frameworks and technologies.",
        "Using tailwindcss-themer and powerful utilities of that framework, i'm working on this website, with easy-to-read codebase, high performance due to optimal amount of JS and a modern-looking design.",
      ],
    },
    usedAtProjects: [ProjectName.Current],
  },
  [TechName.Vite]: {
    type: "Tool",
    name: TechName.Vite,
    icon: TechLogoSource.Vite,
    texts: {
      title: "Vite",
      yoe: 1,
      description: [
        "Used to quickly develop initial startup samples, and show working prototype to the client.",
        "Did whole setup (resulting in a production-ready app), optimized assets, integrated enforced eslint rule-checking.",
      ],
    },
    usedAtProjects: [ProjectName.HBT],
  },
  [TechName.Figma]: {
    type: "Tool",
    name: TechName.Figma,
    icon: TechLogoSource.Figma,
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
      ProjectName.HBT,
      ProjectName.Coyards,
      ProjectName.Cosafe,
      ProjectName.Current,
    ],
  },
  [TechName.Firebase]: {
    type: "Tool",
    name: TechName.Firebase,
    icon: TechLogoSource.Firebase,
    texts: {
      title: "Firebase",
      yoe: 1,
      description: [
        "Used to analyze performance and add optimizations to app-server communication.",
        "Reduced the number of database queries by at least 3 times, supporting a user base of 20 000, by optimizing database queries, which also reduced operational costs of back-end.",
      ],
    },
    usedAtProjects: [ProjectName.OneTouch],
  },
  [TechName.NextJS]: {
    type: "Framework",
    name: TechName.NextJS,
    icon: TechLogoSource.NextJS,
    texts: {
      title: "NextJS",
      yoe: 1,
      description: [
        "Learned to update my knowledge of modern frameworks and technologies. Applied this knowledge to create a website which supports server-side-rendering and a back-end integration (the latter is currently WIP).",
      ],
    },
    usedAtProjects: [ProjectName.Current],
  },
  [TechName.MongoDB]: {
    type: "Tool",
    name: TechName.MongoDB,
    icon: TechLogoSource.MongoDB,
    texts: {
      title: "MongoDB",
      yoe: 1,
      description: [
        "Completed a Python course, which included MongoDB integration for blockchain implementation. Used and modified existing implementation on the very first project, to dynamically display the data provided by the back-end on a web application.",
      ],
    },
    usedAtProjects: [ProjectName.OneTouch],
  },
  [TechName.GoogleCloud]: {
    type: "Tool",
    name: TechName.GoogleCloud,
    icon: TechLogoSource.GoogleCloud,
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
      ProjectName.Coyards,
      ProjectName.OneTouch,
      ProjectName.Current,
    ],
  },
  [TechName.OneSignal]: {
    type: "Tool",
    name: TechName.OneSignal,
    icon: TechLogoSource.OneSignal,
    texts: {
      title: "1Signal",
      yoe: 1,
      description: [
        "Used for critical emergency messaging app to ensure that users can quickly communicate with each other without making it a burden for a back-end.",
        "Implemented signal capture & processing, with live updates and notifications, on front-end.",
      ],
    },
    usedAtProjects: [ProjectName.Coyards],
  },
  [TechName.CSS]: {
    type: "Language",
    name: TechName.CSS,
    icon: TechLogoSource.CSS,
    texts: {
      title: "CSS",
      yoe: 4,
      description: [
        "Used SASS, SCSS, CSS components and Tailwind in connection with Javascript to create interactive and accessible designs. Constantly learning about new supported features, such as has selector or Transitions API, which are also used for this website.",
      ],
    },
    usedAtProjects: [
      ProjectName.Cosafe,
      ProjectName.Coyards,
      ProjectName.HBT,
      ProjectName.OneTouch,
      ProjectName.Current,
    ],
  },
};
