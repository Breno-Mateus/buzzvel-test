import { useState } from "react"
import { ButtonProps } from "./type"

const Button = ({borderColor, backgroundHover, arrow, arrowHover, textColor, textColorHover} : ButtonProps) => {

    const [icon, setIcon] = useState(`${arrow}`)

    const handleMouseEnter = () => {
        setIcon(`${arrowHover}`)
    }
    
    const handleMouseLeave = () => {
        setIcon(`${arrow}`)
    }

    return (
        <button className={
            `bg-transparent ${borderColor} ${textColor} ${textColorHover} ${backgroundHover} rounded-[100px] border-2 w-[306px] h-16 flex items-center justify-center px-6 py-5 z-[1000] gap-6
            lg:w-[166px] lg:h-8 lg:px-4 lg:py-3 lg:gap-2`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="
            text-2xl leading-[24px] font-bold tracking-[0.5px]
            lg:text-xs lg:leading-5">Request a Quote</p>
            <img src={icon} className="lg:h-4 lg:w-4"/>
        </button>
    )
}

export default Button