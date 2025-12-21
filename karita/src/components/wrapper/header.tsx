import { Link, useLocation } from "@tanstack/react-router"
import { useState } from "react"
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
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ]

  return (
    <header
      className={`flex flex-col w-full overflow-hidden ${isHomePage ? "h-[40vh] sm:h-[60vh]" : "h-[30vh] sm:h-[40vh]"}`}
    >
      {/* Navigation buttons */}
      <div className="flex lg:text-3xl md:text-2xl text-xl font-semibold flex-wrap">
        <div className="hidden sm:flex gap-[4%] w-full justify-end items-center pr-[5%] pt-[2.5%]">
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
            size="lg:w-[1.6rem] lg:h-[1.6rem] sm:w-[1.2rem] sm:h-[1.2rem] w-[1.4rem] h-[1.4rem]"
          />
        </div>

        <div className="sm:hidden w-full flex bg-cream py-[3%] pl-[5%]">
          <button
            className="text-3xl font-bold"
            onClick={() => setOpenHamburgerMenu((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Hamburger menu for mobile users */}
      {openHamburgerMenu && (
        <div className="sm:hidden bg-cream pb-[5%]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${currentPath === link.path ? "text-link" : ""} text-l font-semibold`}
            >
              <div className="py-[3%] border-b border-[#e6e1e1] items-center w-full flex justify-center">
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Heading texts and a wavy background */}
      <div className="flex w-full h-full flex-col items-center justify-between">
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-[90%] gap-[5%]">
          <h1 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-bold mt-[5%]">
            {pageHeader}
          </h1>

          {isHomePage && (
            <h2 className="lg:text-[2.5rem] sm:text-[2rem] text-[1.5rem] font-normal">
              a front-end developer & university student
            </h2>
          )}
        </div>

        <Wave
          fill="#fff1e6"
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </header>
  )
}
