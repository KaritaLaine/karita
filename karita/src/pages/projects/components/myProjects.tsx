import { myProjects } from "../../../data/myProjects"
import type { Project } from "../../../types/project"

export const MyProjects = () => {
  const projects = myProjects as Project[]
  return (
    <div className="flex flex-col gap-[5rem] mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center md:items-start gap-[2rem] md:flex-row md:gap-[6%] p-[2rem] rounded-xl w-full"
        >
          <h1 className="text-2xl md:hidden font-semibold">{project.name}</h1>
          <img
            src={project.image}
            alt={project.name}
            className="max-w-md rounded-xl border-2 border-[#D9D9D9] shadow-md flex-shrink-0 lg:w-full md:w-[50%] w-full"
          />

          <div className="flex flex-col gap-[1rem] w-full max-w-md md:text-lg md:max-w-lg">
            <h1 className="text-2xl hidden md:flex font-semibold">
              {project.name}
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start bg-[#D9D9D980] gap-2 p-[0.5rem] rounded-xl w-full">
              <p className="text-sm font-medium text-center md:text-left px-[1rem]">
                {project.technologies.join(", ")}
              </p>
            </div>

            <p className="text-justify md:text-left">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
