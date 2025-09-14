import AboutMeIcon from "../../assets/about-me.svg";
import DownArrow from "../../assets/down-arrow.png";
import { Wrapper } from "../../components/wrapper/wrapper";

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

        <div className="mt-[15rem] max-w-[68rem] text-align-left flex flex-wrap justify-space-between">
          <div className="flex items-center justify-center gap-[5rem]">
            <img src={AboutMeIcon} alt="about me icon" className="w-[18rem]" />
            <div className="w-[90%]">
              <p className="text-4xl font-semibold mb-[2rem]"> About me </p>

              <p className="text-2xl">
                I’m a third-year engineering student who enjoys building
                frontends for websites and applications. I started my journey in
                2021 at a vocational school where I was first introduced to
                front-end development, and I soon continued exploring it at{" "}
                <span className="font-semibold text-accent">
                  <a href="https://www.turkuamk.fi/en/" target="_blank">
                    Turku AMK
                  </a>
                </span>
                .
                <br />
                <br />
                Currently I’m working on projects at{" "}
                <span className="font-semibold text-accent">
                  <a href="https://thefirma.fi/" target="_blank">
                    theFIRMA
                  </a>
                </span>{" "}
                where I’ve further gained experience in building responsive
                websites and mobile applications. As of now, I’ve been working
                with technologies such as:
                <br />
                <br />
                <span className="font-semibold text-accent">
                  <a href="https://react.dev/" target="_blank">
                    React
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://reactnative.dev/" target="_blank">
                    React Native
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://angular.dev/" target="_blank">
                    Angular
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a
                    href="https://developer.mozilla.org/docs/Web/JavaScript"
                    target="_blank"
                  >
                    JavaScript
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://www.typescriptlang.org/" target="_blank">
                    TypeScript
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a
                    href="https://developer.mozilla.org/docs/Web/HTML"
                    target="_blank"
                  >
                    HTML
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a
                    href="https://developer.mozilla.org/docs/Web/CSS"
                    target="_blank"
                  >
                    CSS
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://chakra-ui.com/" target="_blank">
                    Chakra UI
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://tailwindcss.com/" target="_blank">
                    Tailwind
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://www.nativewind.dev/" target="_blank">
                    Nativewind
                  </a>
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  <a href="https://www.python.org/" target="_blank">
                    Python
                  </a>
                </span>{" "}
                and{" "}
                <span className="font-semibold text-accent">
                  <a href="https://www.djangoproject.com/" target="_blank">
                    Django
                  </a>
                </span>
                .
                <br />
                <br />
                Don’t hesitate to reach out to me via{" "}
                <span className="font-semibold text-accent">
                  <a href="mailto:karitalainee@gmail.com">e-mail</a>
                </span>
                ! :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
