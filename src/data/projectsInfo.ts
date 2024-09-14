import { PROJECT_NAMES } from "@/components/utils/constants";

export type ProjectInfo = {
  [key in PROJECT_NAMES]: {
    duration: string;
    description: string[];
    usedTech: string;
  };
};

export const projects = {
  [PROJECT_NAMES.HBT]: {
    duration: "3 months",
    description: [
      "HBT is a startup aiming to contribute to a healthy lifestyle with a personalized vitamin supplement packages delivery.",
      "To create a working prototype, I worked closely with both CEO's of the company, QA team and a designer.",
      "I've worked on product pages, authentication, connection to payment and delivery API's, email templates, learned to use Figma to provide insights on design for mobile app, and actively participated in project discussion.",
    ],
    usedTech: [
      "React",
      "Typescript",
      "CSS components",
      "openAPI",
      "Redux",
      "Stripe",
    ],
  },
  [PROJECT_NAMES.Cosafe]: {
    duration: "2 years",
    description: [
      "Cosafe is a critical communication platform for alerting, managing, and preventing incidents. The apps are used internally by the client organizations.",
      "I've worked on web and mobile app development using React, React.Native and Typescript as a main technologies.",
      "Improved UI and performance of messages, file upload, alarm sending and checklist features. Fixed bugs reported by clients.",
    ],
    usedTech: ["React", "Typescript", "React.Native", "Jest", "openAPI"],
  },
  [PROJECT_NAMES.Coyards]: {
    duration: "1.5 years",
    description: [
      "The app helps citizens with effective communication during emergency situations such as fire, robbery or school attacks. Project has a big scope and cooperated with governments of Sweden, Norway and other EU countries.",
      "Worked on a complete overhaul of an outdated app, using React.Native with Typescript as a main technology.",
      "While working in 3 languages in a multilingual team, i've written half the functionaliy of app from almost zero, reduced the number of database queries by at least 3 times, supporting a base of 20 000 users, added strong typization and null-safety almost everywhere.",
    ],
    usedTech: ["React Native", "Typescript", "React.Native", "Jest", "openAPI"],
  },

  [PROJECT_NAMES.OneTouch]: {
    duration: "1 year",
    description: [
      "1Touch is a marketplace where cliends find local beauty specialists and make online bookings for their services.",
      "I've worked on feature and UI updates for web app and 2 mobile apps. By optimizing internal search engine, i improved its performance by 3x and reduced its cost by 4x. I was also involved in back-end development, using Node.js, MongoDB and Firebase.",
      "The most notable challenge was to completely rewrite data streaming implementation to support new information accessibility policy and implement safe-guarding features to the app.",
    ],
    usedTech: ["React", "Node.js", "Flutter", "Mongo.DB", "Firebase"],
  },
  [PROJECT_NAMES.Current]: {
    duration: "2 months",
    description: [
      "The website you are looking right now is a practice for my newly acquired Tailwind and Next.js skills, as well as a way to showcase my portfolio and skills.",
      "After last job position, i've decided that i need to spend some dedicated time to improve my knowledge and learn more about modern React ecosystem.",
      "Project includes: Web Transitions API implementation; image / routes prefetching; server-side rendering; Mailchimp integration (WIP); customized theming (WIP); a design which i fully wrote by myself :)",
    ],
    usedTech: ["React", "Tailwind", "Next.js", "Mailchimp", "Typescript"],
  },
};
