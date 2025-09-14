import { useLocation } from "@tanstack/react-router";

export const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <footer className="flex flex-col text-center font-light items-center h-[15rem] justify-center text-sm bg-cream">
      <p>Designed & developed by Karita</p>
      <p>Built with React, TypeScript & Tailwind</p>

      {isHomePage && (
        <div className="text-xs flex gap-[0.2rem] text-sm flex-wrap justify-center mt-[0.8rem]">
          <p>About me icon made by</p>
          <a
            href="https://www.flaticon.com/authors/bomsymbols"
            title="BomSymbols"
            className="text-accent"
            target="_blank"
          >
            BomSymbols
          </a>
          <p>from</p>
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className="text-accent"
            target="_blank"
          >
            www.flaticon.com
          </a>
        </div>
      )}
    </footer>
  );
};
