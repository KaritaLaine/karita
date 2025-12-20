import AboutMeIcon from "../../../assets/about-me.svg"
import { MyTechnologies } from "./myTechnologies"

export const AboutMe = () => {
  return (
    <div className="mt-[15rem] max-w-[68rem] flex flex-wrap justify-space-between">
      <div className="flex items-center justify-center gap-[5rem]">
        <img src={AboutMeIcon} alt="about me icon" className="w-[18rem]" />

        <div className="w-[90%] text-2xl gap-[2rem] flex flex-col">
          <p className="text-5xl font-semibold mb-[2rem]"> About me </p>
          <p>
            I’m a third-year engineering student who enjoys building frontends
            for websites and applications. I started exploring web development
            in 2021 at a vocational school, and after getting hooked on
            front-end I decided to continue my studies at{" "}
            <span className="text-accent font-semibold">
              <a href="https://www.turkuamk.fi/en/" target="_blank">
                Turku AMK
              </a>
            </span>
            .
          </p>

          <p>
            Currently I’m working on projects at{" "}
            <span className="text-accent font-semibold">
              <a href="https://thefirma.fi/" target="_blank">
                theFIRMA
              </a>
            </span>{" "}
            where I’ve gained a lot of experience in building responsive
            websites and mobile applications. As of today, I’ve been working
            with technologies such as:
          </p>

          <MyTechnologies />

          <p>
            Don’t hesitate to reach out to me via{" "}
            <span className="text-accent font-semibold">
              <a href="mailto:karitalainee@gmail.com">e-mail</a>
            </span>
            ! :)
          </p>
        </div>
      </div>
    </div>
  )
}
