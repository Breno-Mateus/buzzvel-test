import { useState } from "react"
import { ButtonProps } from "./type"

const Button = ({background, backgroundHover, arrow, arrowHover, textColor, textColorHover} : ButtonProps) => {

    const [icon, setIcon] = useState(`${arrow}`)

    const handleMouseEnter = () => {
        setIcon(`${arrowHover}`)
    }
    
    const handleMouseLeave = () => {
        setIcon(`${arrow}`)
    }

    return (
        <button className={`${background} hover:${backgroundHover} ${textColor} hover:${textColorHover} rounded-[100px] border-2 border-colorButton w-[306px] h-16 flex items-center justify-center px-6 py-5`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p className="px-6">Request a Quote</p>
            <img src={icon} />
        </button>
    )
}

export default Button