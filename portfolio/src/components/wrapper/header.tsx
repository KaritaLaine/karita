import Settings from "../../assets/settings.png";

// TODO: highlight active page
export const Header = () => {
  return (
    <div className="flex gap-[3rem] w-full text-3xl font-semibold justify-end items-center pt-[3rem] pr-[5rem]">
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
  );
};
