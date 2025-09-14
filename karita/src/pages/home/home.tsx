import AboutMeIcon from "../../assets/about-me.svg";
import DownArrow from "../../assets/down-arrow.png";
import { Wrapper } from "../../components/wrapper/wrapper";

export const Home = () => {
  const technologies = [
    { name: "React", url: "https://react.dev/" },
    { name: "React Native", url: "https://reactnative.dev/" },
    { name: "Angular", url: "https://angular.dev/" },
    { name: "Vue", url: "https://vuejs.org/" },
    {
      name: "JavaScript",
      url: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    { name: "TypeScript", url: "https://www.typescriptlang.org/" },
    { name: "HTML", url: "https://developer.mozilla.org/docs/Web/HTML" },
    { name: "CSS", url: "https://developer.mozilla.org/docs/Web/CSS" },
    { name: "Chakra UI", url: "https://chakra-ui.com/" },
    { name: "Tailwind", url: "https://tailwindcss.com/" },
    { name: "Nativewind", url: "https://www.nativewind.dev/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "Django", url: "https://www.djangoproject.com/" },
  ];

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
              <p className="text-5xl font-semibold mb-[2rem]"> About me </p>

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
                {/* Listing out all technologies */}
                {technologies.map((tech, i) => (
                  <span key={tech.name}>
                    <a
                      href={tech.url}
                      target="_blank"
                      className="font-semibold text-accent"
                    >
                      {tech.name}
                    </a>

                    {i < technologies.length - 2
                      ? ", "
                      : i === technologies.length - 2
                        ? " and "
                        : "."}
                  </span>
                ))}
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
