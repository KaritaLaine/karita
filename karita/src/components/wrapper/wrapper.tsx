import { Footer } from "./footer"
import { Header } from "./header"

interface Props {
  children: React.ReactNode
  pageHeader: string
}

export const Wrapper = ({ children, pageHeader }: Props) => {
  return (
    <div>
      <Header pageHeader={pageHeader} />
      <div className="flex align-center justify-center pb-[4rem] bg-cream">
        {children}
      </div>
      <Footer />
    </div>
  )
}
