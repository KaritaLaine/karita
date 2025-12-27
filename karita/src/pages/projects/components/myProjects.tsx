import { myProjects } from "../../../data/myProjects"
import type { Project } from "../../../types/project"

export const MyProjects = () => {
  const projects = myProjects as Project[]
  return (
    <div className="flex flex-col gap-[2rem] mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center md:items-start gap-[1.5rem] md:flex-row md:gap-[6%] p-[2rem] rounded-xl w-full"
        >
          <h1 className="text-3xl md:hidden font-semibold">{project.name}</h1>
          <img
            src={project.image}
            alt={project.name}
            className="max-w-md rounded-xl border-[0.5px] border-[#D9D9D9] shadow-md flex-shrink-0 lg:w-full md:w-[50%] w-full"
          />

          <div className="flex flex-col gap-[1.2rem] w-full max-w-md">
            <h1 className="text-3xl hidden md:flex font-semibold">
              {project.name}
            </h1>

            <div className="md:text-base text-sm md:justify-start bg-[#D9D9D980] gap-2 p-[0.4rem] rounded-xl w-full">
              <p className="mx-[0.8rem] font-medium text-center md:text-left">
                {project.technologies.join(", ")}
              </p>
            </div>

            <p className="text-lg text-justify md:text-left text-[#453939]">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
