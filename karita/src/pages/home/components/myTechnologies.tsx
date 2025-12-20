import technologies from "../../../data/myTechnologies.json"
import type { Technology } from "../../../types/technology"

export const MyTechnologies = () => {
  const myTechnologies = technologies as Technology[]
  return (
    <div>
      {myTechnologies.map((tech, index) => (
        <span key={tech.name}>
          <a
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link font-semibold hover:text-linkHover duration-300"
          >
            {tech.name}
          </a>

          {/* Add commas between technologies and ", and" before the last one */}
          {index < myTechnologies.length - 2
            ? ", "
            : index === myTechnologies.length - 2
              ? ", and "
              : "."}
        </span>
      ))}
    </div>
  )
}
