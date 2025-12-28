import { IconButton } from "../../components/iconButton"
import { Wrapper } from "../../components/wrapper/wrapper"
import { AboutMe } from "./components/aboutMe"

export const Home = () => {
  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("about-me-header")
    aboutMeElement?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Wrapper pageHeader="Hi, I'm Karita">
      <div className="flex flex-col justify-center items-center md:pt-[4rem]">
        <IconButton
          icon="/assets/down-arrow.svg"
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
