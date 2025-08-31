import DownArrow from "../../assets/down-arrow.png";
import { Wrapper } from "../../components/wrapper/wrapper";

export const Home = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center">
        <img
          src={DownArrow}
          alt="down arrow"
          className="h-[0.9rem] w-[1.6rem] cursor-pointer mt-[5rem] animate-bounce"
          style={{ animationDuration: "2s" }}
        />

        <div className="mt-[15rem] w-[50rem] text-align-left">
          <p className="text-4xl font-semibold"> About me </p>
        </div>
      </div>
    </Wrapper>
  );
};
