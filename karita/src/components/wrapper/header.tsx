import { Link, useLocation } from "@tanstack/react-router"
import { useState } from "react"
import Wave from "react-wavify"

interface Props {
  pageHeader: string
}

export const Header = ({ pageHeader }: Props) => {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname
  const isHomePage = currentPath === "/"
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
  ]

  return (
    <header
      className={`flex flex-col w-full overflow-hidden ${isHomePage ? "h-[45vh] md:h-[60vh] lg:h-[75vh]" : "h-[40vh]"}`}
    >
      {/* Navigation buttons */}
      <div className="lg:text-3xl md:text-2xl text-xl font-semibold">
        <div className="hidden sm:flex gap-[4%] w-full items-center pl-[4rem] md:pl-[5rem] lg:pl-[7rem] pt-[2%]">
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
        </div>

        {/* Hamburger menu for mobile users */}
        <div className="sm:hidden w-full flex bg-cream py-[3%] pl-[5%] relative">
          <button
            className="text-3xl font-bold"
            onClick={() => setOpenHamburgerMenu((prev) => !prev)}
          >
            ☰
          </button>

          {openHamburgerMenu && (
            <div className="absolute top-full left-0 bg-cream shadow-md flex flex-col w-full pb-[10%]">
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
        </div>
      </div>

      {/* Header and the wavy background */}
      <div className="flex w-full h-full flex-col items-center justify-center">
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-[90%] gap-[5%]">
          <h1 className="lg:text-[4rem] sm:text-[3rem] text-[2.5rem] font-semibold mt-[2rem]">
            {pageHeader}
          </h1>

          {isHomePage && (
            <h2 className="lg:text-[2.5rem] sm:text-[2rem] text-[1.5rem]">
              a front-end developer & university student
            </h2>
          )}
        </div>

        <Wave
          fill="#fff4eb"
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </header>
  )
}
