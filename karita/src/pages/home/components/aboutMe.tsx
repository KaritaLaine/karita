import AboutMeIcon from "../../../assets/about-me.svg"
import { LinkText } from "../../../components/linkText"
import { MyTechnologies } from "./myTechnologies"

export const AboutMe = () => {
  return (
    <div className="mt-[15%] max-w-[66rem] flex flex-wrap justify-space-between">
      <div className="flex items-center justify-center gap-[7%]">
        <img src={AboutMeIcon} alt="about me icon" className="w-[18rem]" />

        <div className="w-[90%] text-2xl gap-[2rem] flex flex-col">
          <p className="text-5xl font-semibold mb-[2rem]" id="about-me-header">
            About me
          </p>
          <p>
            I’m a third-year engineering student who enjoys building frontends
            for websites and applications. I started exploring web development
            in 2021 at a vocational school, and after getting hooked on
            front-end I decided to continue my studies at{" "}
            <LinkText link="https://www.turkuamk.fi/" name="TurkuAMK" />.
          </p>

          <p>
            Currently I’m working on projects at{" "}
            <LinkText link="https://thefirma.fi/?page_id=46" name="theFIRMA" />,
            where I’ve gained a lot of experience building responsive websites
            and mobile applications. As of today, I’ve been working with
            technologies such as:
          </p>

          <MyTechnologies />

          <p>
            Don’t hesitate to reach out to me via{" "}
            <LinkText
              link="mailto:karita.laine@edu.turkuamk.fi"
              name="e-mail"
            />
            ! :)
          </p>
        </div>
      </div>
    </div>
  )
}
