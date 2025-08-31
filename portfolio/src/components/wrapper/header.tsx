import Wave from "react-wavify";
import Settings from "../../assets/settings.png";

// TODO: highlight active page
export const Header = () => {
  return (
    <div>
      <div className="flex gap-[3rem] w-full text-3xl font-semibold justify-end items-center pt-[3rem] pr-[5rem] flex-wrap">
        <a href="/"> About </a>
        <a href="/projects">Projects</a>

        {/* TODO: open settings menu */}
        {/* TODO: use icon button component? */}
        <img
          src={Settings}
          alt="open settings icon"
          className="w-[1.6rem] h-[1.6rem] mt-[0.3rem] cursor-pointer"
        />
      </div>

      <div className="flex justify-center items-center h-[50rem] flex-col gap-[1.5rem]">
        <h1 className="text-[64px] font-bold text-center">Hi, I'm Karita</h1>
        <h1 className="text-[40px] font-normal text-center">
          a front-end developer & university student
        </h1>
      </div>

      <Wave
        fill="#fff1e6"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.2,
          points: 3,
        }}
      />
    </div>
  );
};
