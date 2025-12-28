import { useLocation } from "@tanstack/react-router"
import { LinkText } from "../linkText"

export const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <footer className="flex flex-col text-center font-light items-center h-[15rem] justify-center bg-cream pt-[2rem] text-sm md:text-base">
      <p>Designed & developed by Karita Laine</p>
      <p>Built with React, TypeScript & Tailwind CSS</p>
      <p className="mt-[1rem]">
        Contact me at{" "}
        <LinkText
          link="mailto:karita.laine@edu.turkuamk.fi"
          name="karita.laine@edu.turkuamk.fi"
        />
      </p>

      {isHomePage && (
        <div className="text-xs text-gray-400 mt-[2rem] md:flex hidden">
          <p>
            About me icon made by{" "}
            <span>
              <a href="https://www.flaticon.com/authors/bomsymbols">
                BomSymbols
              </a>
            </span>{" "}
            from{" "}
            <span>
              <a href="https://www.flaticon.com/">Flaticon</a>
            </span>
          </p>
        </div>
      )}
    </footer>
  )
}
