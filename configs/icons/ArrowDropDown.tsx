import { FC } from "react"

interface LayoutProps {
    color: string
}
const ArrowDropDown: FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill={props.color}
        >
            <path d="M480-360 280-560h400L480-360Z"/>
        </svg>
    )
}
export default ArrowDropDown