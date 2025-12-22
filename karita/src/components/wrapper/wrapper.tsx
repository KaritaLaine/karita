import { Footer } from "./footer"
import { Header } from "./header"

interface Props {
  children: React.ReactNode
  pageHeader: string
}

export const Wrapper = ({ children, pageHeader }: Props) => {
  return (
    <>
      <Header pageHeader={pageHeader} />
      <div className="flex align-center justify-center py-[3%] pb-[10%] bg-cream">
        {children}
      </div>
      <Footer />
    </>
  )
}
