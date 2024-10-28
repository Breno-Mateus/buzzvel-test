import Headset from "../../assets/web/headset.png"
import Button from "../button"
import { MenuHamburgerProps } from "./type"
import { Link } from "react-scroll"
import Arrow from "../../assets/arrow-right-1.svg"
import ArrowHover from "../../assets/arrow-right-2.svg"

const MenuHamburguer = ({onClick} : MenuHamburgerProps) => {
    return (
        <div className="flex flex-col items-center justify-between h-screen py-20 z-[1000] text-xl leading-6 font-medium tracking-[0.5px] text-textColor bg-colorPrimary">
            <div className="flex flex-col gap-8">
                <Link to="Products" smooth={true} duration={500} onClick={onClick}><a className="cursor-pointer">Products</a></Link>
                <Link to="Solutions" smooth={true} duration={500} onClick={onClick}><a className="cursor-pointer">Solutions</a></Link>
                <Link to="Services" smooth={true} duration={500} onClick={onClick}><a className="cursor-pointer">Services</a></Link>
                <Link to="Configure" smooth={true} duration={500} onClick={onClick}><a className="cursor-pointer">Configure</a></Link>
            </div>

            <div className="px-2 py-3 flex flex-col items-center justify-center gap-8">
                <div className="flex gap-4">
                    <img src={Headset} alt="blue headset" className="h-6 w-6"/>
                    <p className="text-textColorSecondary text-xl leading-6 font-medium tracking-[0.5px]">555 818 282</p>
                </div>
        
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>
        </div>
    )
}

export default MenuHamburguer