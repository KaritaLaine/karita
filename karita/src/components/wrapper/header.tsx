import { Link, useLocation } from "@tanstack/react-router"
import Wave from "react-wavify"
import Settings from "../../assets/settings.png"
import { IconButton } from "../iconButton"

export const Header = () => {
  const location = useLocation()
  const currentPath = location.pathname
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ]

  return (
    <header>
      {/* Navigation buttons */}
      <div className="flex gap-[8rem] w-full text-3xl font-semibold justify-end items-center pt-[3rem] pr-[5rem] flex-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:scale-110 duration-200 ${
              currentPath === link.path ? "text-link" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* TODO: open settings menu */}
        <IconButton
          icon={Settings}
          alt="open settings icon"
          onClick={() => {}}
          size="w-[1.6rem] h-[1.6rem]"
        />
      </div>

      {/* Heading texts on wavy background */}
      {currentPath === "/" ? (
        <div className="flex justify-center items-center h-[50rem] flex-col gap-[1.5rem]">
          <h1 className="text-[4rem] font-bold text-center">Hi, I'm Karita</h1>
          <h1 className="text-[2.5rem] font-normal text-center">
            a front-end developer & university student
          </h1>
        </div>
      ) : (
        <div className="flex h-[20rem] justify-center items-center ">
          <h1 className="text-[4rem] font-bold text-center mt-[6rem]">
            Projects
          </h1>
        </div>
      )}

      <Wave
        fill="#fff1e6"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 50,
          speed: 0.15,
          points: 3,
        }}
      />
    </header>
  )
}
