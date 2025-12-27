import { IconButton } from "../../components/iconButton"
import { Wrapper } from "../../components/wrapper/wrapper"
import { AboutMe } from "./components/aboutMe"
import DownArrow from "/assets/down-arrow.svg"

export const Home = () => {
  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("about-me-header")
    aboutMeElement?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Wrapper pageHeader="Hi, I'm Karita">
      <div className="flex flex-col justify-center items-center py-[4%]">
        <IconButton
          icon={DownArrow}
          alt="down arrow"
          onClick={scrollToAboutMe}
          size="h-[0.9rem] w-[1.6rem]"
          hidden="hidden md:flex"
        />

        <AboutMe />
      </div>
    </Wrapper>
  )
}
