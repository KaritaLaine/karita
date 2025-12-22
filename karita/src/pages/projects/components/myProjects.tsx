import { myProjects } from "../../../data/myProjects"
import type { Project } from "../../../types/project"

export const MyProjects = () => {
  const projects = myProjects as Project[]
  return (
    <div className="gap-[8rem] flex flex-col max-w-[90%]">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col align-center justify-center gap-[2rem] duration-200 md:flex-row md:gap-[5%]"
        >
          <img
            src={project.image}
            alt={project.name}
            className="max-w-[30rem] w-full rounded-xl border-2 border-[#D9D9D9] shadow-md"
          />

          <div className="w-[30rem] flex flex-col gap-[1rem] text-lg">
            <h1 className="text-3xl font-semibold">{project.name}</h1>

            <div className="flex flex-row gap-[1rem] bg-[#D9D9D980] p-[0.5rem] rounded-xl px-[1rem] mb-[2%] w-full">
              <p className="text-sm font-medium">
                {project.technologies.join(", ")}
              </p>
            </div>

            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
