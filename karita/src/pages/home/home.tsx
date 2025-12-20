import DownArrow from "../../assets/down-arrow.png"
import { Wrapper } from "../../components/wrapper/wrapper"
import { AboutMe } from "./components/aboutMe"

export const Home = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center">
        {/* TODO: use icon button component? */}
        <img
          src={DownArrow}
          alt="down arrow"
          className="h-[0.9rem] w-[1.6rem] cursor-pointer animate-bounce"
        />

        <AboutMe />
      </div>
    </Wrapper>
  )
}
