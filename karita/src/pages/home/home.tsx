import DownArrow from "../../assets/down-arrow.png"
import { IconButton } from "../../components/icon-button"
import { Wrapper } from "../../components/wrapper/wrapper"
import { AboutMe } from "./components/aboutMe"

export const Home = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center">
        <IconButton
          icon={DownArrow}
          alt="down arrow"
          onClick={() => {}}
          size="h-[0.9rem] w-[1.6rem]"
          animation="animate-bounce"
        />

        <AboutMe />
      </div>
    </Wrapper>
  )
}
