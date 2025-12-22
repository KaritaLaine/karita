import { useLocation } from "@tanstack/react-router"
import { LinkText } from "../linkText"

export const Footer = () => {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <footer className="flex flex-col text-center font-light items-center h-[15rem] justify-center bg-cream">
      <p>Designed & developed by Karita</p>
      <p>
        Built with <LinkText link="https://react.dev/" name="React" />,{" "}
        <LinkText link="https://www.typescriptlang.org/" name="TypeScript" /> &{" "}
        <LinkText link="https://tailwindcss.com/" name="Tailwind CSS" />
      </p>

      {isHomePage && (
        <div className="text-sm flex flex-wrap justify-center mt-[1.2rem]">
          <p>
            About me icon made by{" "}
            <LinkText
              link="https://www.flaticon.com/authors/bomsymbols"
              name="BomSymbols"
            />{" "}
            from <LinkText link="https://www.flaticon.com/" name="Flaticon" />
          </p>
        </div>
      )}
    </footer>
  )
}
