import { Footer } from "./footer";
import { Header } from "./header";

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="flex align-center justify-center py-[3rem] bg-cream">
        {children}
      </div>
      <Footer />
    </>
  );
};
