import { Link, useLocation } from "@tanstack/react-router";
import Wave from "react-wavify";
import Settings from "../../assets/settings.png";
import { IconButton } from "../icon-button";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <header>
      {/* Navigation buttons */}
      <div className="flex gap-[3rem] w-full text-3xl font-semibold justify-end items-center pt-[3rem] pr-[5rem] flex-wrap">
        <Link
          to="/"
          className={`hover:scale-105 ${isHomePage ? "text-accent" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`hover:scale-105 ${!isHomePage ? "text-accent" : ""}`}
        >
          Projects
        </Link>

        {/* TODO: open settings menu */}
        <IconButton
          icon={Settings}
          alt="open settings icon"
          onClick={() => {}}
          size="w-[1.6rem] h-[1.6rem]"
        />
      </div>

      {/* Heading texts on wavy background */}
      {isHomePage ? (
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
  );
};
