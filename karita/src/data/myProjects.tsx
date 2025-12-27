import nda from "../assets/nda.svg"
import projectGate from "../assets/project-gate.svg"
import restaurantFinder from "../assets/restaurant-finder.svg"

export const myProjects = [
  {
    name: "Project Gate",
    technologies: ["React", "Chakra UI", "TypeScript", "TanStack Router"],
    description:
      "Frontend developer on an internal theFIRMA project developing a website for students and teachers to manage study path information and project applications.",
    image: projectGate,
  },
  {
    name: "NDA project",
    technologies: ["React Native", "Nativewind", "Expo", "TypeScript"],
    description:
      "Frontend developer on a team that built a responsive mobile app prototype for a customer project on Android and iOS.",
    image: nda,
  },
  {
    name: "Restaurant finder",
    technologies: ["Figma"],
    description:
      "Designed a restaurant finder application for a UI/UX design course.",
    image: restaurantFinder,
  },
]
