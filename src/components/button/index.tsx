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
            `bg-transparent ${borderColor} ${textColor} ${textColorHover} ${backgroundHover} rounded-[100px] border-2 w-[306px] h-16 flex items-center justify-center px-6 py-5 gap-6
            lg:w-[166px] lg:h-8 lg:px-4 lg:py-4 lg:gap-2
            2xl:w-[306px] 2xl:h-16 2xl:px-6 2xl:py-5 2xl:gap-6`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="
            text-2xl leading-[24px] font-bold tracking-[0.5px]
            lg:text-xs lg:leading-5
            2xl:text-2xl 2xl:leading-[24px]">Request a Quote</p>
            <img src={icon} alt="arrow" className="
            lg:h-4 lg:w-4
            2xl:h-6 2xl:w-6"/>
        </button>
    )
}

export default Button