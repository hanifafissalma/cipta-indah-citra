import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

interface LayoutProps {
    children: ReactNode
}
const LayoutDefault: FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <>
            <Navbar />
            <div className="mx-auto bg-white">
                {props.children}
            </div>
            <Footer />
        </>
    )
}
export default LayoutDefault