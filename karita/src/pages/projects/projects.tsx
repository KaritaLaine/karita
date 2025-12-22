import { Wrapper } from "../../components/wrapper/wrapper"
import { MyProjects } from "./components/myProjects"

export const Projects = () => {
  return (
    <Wrapper pageHeader="Projects">
      <div className="flex flex-col justify-center items-center">
        <MyProjects />
      </div>
    </Wrapper>
  )
}
