import { Footer } from "./footer"
import { Header } from "./header"

interface Props {
  children: React.ReactNode
  pageHeader: string
}

export const Wrapper = ({ children, pageHeader }: Props) => {
  return (
    <div className="h-100vh flex flex-col">
      <Header pageHeader={pageHeader} />
      <div className="flex align-center justify-center pb-[4rem] bg-cream flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}
