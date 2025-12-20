import { Link, useLocation } from "@tanstack/react-router"
import Wave from "react-wavify"
import Settings from "../../assets/settings.png"
import { IconButton } from "../iconButton"

interface Props {
  pageHeader: string
}

export const Header = ({ pageHeader }: Props) => {
  const location = useLocation()
  const currentPath = location.pathname
  const isHomePage = currentPath === "/"

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

      {/* Heading texts and a wavy background */}
      <div
        className={`flex justify-center ${isHomePage ? "h-[50rem]" : "h-[20rem]"} items-center flex-col gap-[1.5rem]`}
      >
        <h1 className="text-[4rem] font-bold text-center">{pageHeader}</h1>
        {isHomePage && (
          <h1 className="text-[2.5rem] font-normal text-center">
            a front-end developer & university student
          </h1>
        )}
      </div>

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
