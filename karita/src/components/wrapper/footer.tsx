import { useLocation } from "@tanstack/react-router";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <footer className="flex flex-col text-center font-light items-center h-[15rem] justify-center text-sm bg-cream">
      <p>Designed & developed by Karita</p>
      <p>
        Built with{" "}
        <span className="text-accent">
          <a href="https://react.dev/" target="_blank">
            React
          </a>
        </span>
        ,{" "}
        <span className="text-accent">
          <a href="https://www.typescriptlang.org/" target="_blank">
            TypeScript
          </a>
        </span>{" "}
        &{" "}
        <span className="text-accent">
          <a href="https://tailwindcss.com/" target="_blank">
            Tailwind
          </a>
        </span>
      </p>

      {isHomePage && (
        <div className="text-xs flex flex-wrap justify-center mt-[0.8rem]">
          <p>
            About me icon made by{" "}
            <span className="text-accent">
              <a
                href="https://www.flaticon.com/authors/bomsymbols"
                target="_blank"
              >
                BomSymbols{" "}
              </a>
            </span>
            from{" "}
            <span className="text-accent">
              <a href="https://www.flaticon.com/" target="_blank">
                www.flaticon.com
              </a>
            </span>
          </p>
        </div>
      )}
    </footer>
  );
};
