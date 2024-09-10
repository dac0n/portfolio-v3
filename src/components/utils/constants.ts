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

export enum LogoSource {
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
  name: TechName;
  icon: string;
  description: {
    title: string;
    yoe: number;
    description: string;
  };
};

export const techCatalog = {
  [TechName.React]: {
    name: TechName.React,
    icon: LogoSource.React,
    description: {
      title: "React",
      yoe: 1,
      description:
        "React is a JavaScript library for building user interfaces.",
    },
  },
  [TechName.Typescript]: {
    name: TechName.Typescript,
    icon: LogoSource.Typescript,
    description: {
      title: "Typescript",
      yoe: 1,
      description:
        "Typescript is a superset of JavaScript that adds static typing and other features.",
    },
  },
  [TechName.Flutter]: {
    name: TechName.Flutter,
    icon: LogoSource.Flutter,
    description: {
      title: "Flutter",
      yoe: 1,
      description:
        "Flutter is a framework for building cross-platform applications in Dart.",
    },
  },
  [TechName.Tailwind]: {
    name: TechName.Tailwind,
    icon: LogoSource.Tailwind,
    description: {
      title: "Tailwind",
      yoe: 1,
      description:
        "Tailwind is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
  },
  [TechName.Vite]: {
    name: TechName.Vite,
    icon: LogoSource.Vite,
    description: {
      title: "Vite",
      yoe: 1,
      description:
        "Vite is a build tool that aims to provide a faster development experience.",
    },
  },
  [TechName.Figma]: {
    name: TechName.Figma,
    icon: LogoSource.Figma,
    description: {
      title: "Figma",
      yoe: 1,
      description: "Figma is a vector graphics editor and prototyping tool.",
    },
  },
  [TechName.Firebase]: {
    name: TechName.Firebase,
    icon: LogoSource.Firebase,
    description: {
      title: "Firebase",
      yoe: 1,
      description:
        "Firebase is a platform for developing mobile and web applications.",
    },
  },
  [TechName.NextJS]: {
    name: TechName.NextJS,
    icon: LogoSource.NextJS,
    description: {
      title: "NextJS",
      yoe: 1,
      description:
        "NextJS is a React framework for building server-rendered applications.",
    },
  },
  [TechName.MongoDB]: {
    name: TechName.MongoDB,
    icon: LogoSource.MongoDB,
    description: {
      title: "MongoDB",
      yoe: 1,
      description: "MongoDB is a NoSQL database program.",
    },
  },
  [TechName.GoogleCloud]: {
    name: TechName.GoogleCloud,
    icon: LogoSource.GoogleCloud,
    description: {
      title: "Google Cloud",
      yoe: 1,
      description: "Google Cloud is a suite of cloud computing services.",
    },
  },
  [TechName.OneSignal]: {
    name: TechName.OneSignal,
    icon: LogoSource.OneSignal,
    description: {
      title: "1Signal",
      yoe: 1,
      description: "1Signal is a mobile push notification service.",
    },
  },
  [TechName.CSS]: {
    name: TechName.CSS,
    icon: LogoSource.CSS,
    description: {
      title: "CSS",
      yoe: 1,
      description:
        "CSS is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
    },
  },
};
