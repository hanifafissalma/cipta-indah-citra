import { FC } from "react"

interface LayoutProps {
    color: string
}
const ArrowDropUp: FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill={props.color}
        >
            <path d="m280-400 200-200 200 200H280Z"/>
        </svg>
    )
}
export default ArrowDropUp