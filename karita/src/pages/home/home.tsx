import DownArrow from "../../assets/down-arrow.png"
import { IconButton } from "../../components/iconButton"
import { Wrapper } from "../../components/wrapper/wrapper"
import { AboutMe } from "./components/aboutMe"

export const Home = () => {
  // Scroll down to the about me section when down arrow is clicked
  const scrollToAboutMe = () => {
    const aboutMeElement = document.getElementById("about-me-header")
    aboutMeElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center">
        <IconButton
          icon={DownArrow}
          alt="down arrow"
          onClick={scrollToAboutMe}
          size="h-[0.9rem] w-[1.6rem]"
        />

        <AboutMe />
      </div>
    </Wrapper>
  )
}
