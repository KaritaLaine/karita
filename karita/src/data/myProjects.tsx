import nda from "../assets/nda.svg"
import projectGate from "../assets/project-gate.svg"
import restaurantFinder from "../assets/restaurant-finder.svg"
import studyPals from "../assets/study-pals.svg"

export const myProjects = [
  {
    name: "Project Gate",
    technologies: ["React", "Chakra UI", "TypeScript", "TanStack Router"],
    description:
      "Worked on an internal theFIRMA project (2024-2025) creating a hub for software engineering students and teachers to manage study path related information and project applications.",
    image: projectGate,
  },
  {
    name: "NDA project",
    technologies: ["React Native", "Nativewind", "Expo", "TypeScript"],
    description:
      "Took part in an NDA customer project developing a responsive mobile application for Android and iOS.",
    image: nda,
  },
  {
    name: "Restaurant finder",
    technologies: ["Figma"],
    description:
      "Designed a restaurant finder app as part of a UI & UX design course.",
    image: restaurantFinder,
  },
  {
    name: "Study pals",
    technologies: ["Django", "JavaScript", "HTML", "CSS"],
    description:
      "Took part in designing and building a website prototype where students can find and connect with others to study together.",
    image: studyPals,
  },
]
