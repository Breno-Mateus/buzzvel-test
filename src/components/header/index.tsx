//Figure mobile
import geometricFigure from "../../assets/mobile/geometric-figures-mobile/figure11.png"
import Worker from "../../assets/mobile/worker-mobile.png"
//figure web
import Headset from "../../assets/web/headset.png"
import geometricFigure1 from "../../assets/web/geometric figures/figure1.png"
import workerWeb from "../../assets/web/worker-web.png"
//outhers
import Button from "../button"
import Arrow from "../../assets/arrow-right-1.svg"
import ArrowHover from "../../assets/arrow-right-2.svg"
import Hamburger from 'hamburger-react'
import { useState } from "react"
import MenuHamburguer from "../menu-hamburger"
import { Link } from "react-scroll"


const Header = () => {
    
    const [isOpen, setOpen] = useState(false)

    const handleMenuItemClick = () => {
        setTimeout(() => {setOpen(false)}, 200)
    }

    return (
        <header className="
        w-full h-[365px] pb-8 relative
        lg:flex lg:justify-between lg:p-4 lg:h-auto
        2xl:px-20 2xl:py-6 2xl:items-center 2xl:h-[112px]">

            <div className={`
            flex justify-between text-textColor h-[56px] py-2 px-4 ${isOpen && ("backdrop-blur-md")}
            lg:gap-[38px]`}>
                
                <div className="h-[36px] w-[81px]">
                    <h3 className="
                    text-[32px] leading-[35.2px] font-bold
                    lg:text-2xl
                    2xl:text-[32px]">soller</h3>
                </div>

                <div className="
                hidden text-base leading-6 font-medium tracking-[0.5px]
                lg:flex lg:items-center lg:gap-4">
                    <Link to="Products"><a className="
                    px-2 py-3 cursor-pointer
                    lg:text-xs lg:leading-4
                    2xl:text-base 2xl:leading-6">Products</a></Link>
                    <Link to="Solutions"><a className="
                    px-2 py-3 cursor-pointer
                    lg:text-xs lg:leading-4
                    2xl:text-base 2xl:leading-6">Solutions</a></Link>
                    <Link to="Services"><a className="
                    px-2 py-3 cursor-pointer
                    lg:text-xs lg:leading-4
                    2xl:text-base 2xl:leading-6">Services</a></Link>
                    <Link to="Configure"><a className="
                    px-2 py-3 cursor-pointer
                    lg:text-xs lg:leading-4
                    2xl:text-base 2xl:leading-6">Configure</a></Link>
                </div>

                <div className="lg:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>

            {isOpen && (
                <MenuHamburguer onClick={handleMenuItemClick}/>
            )} 

            <div className="
            hidden
            lg:flex lg:gap-4 lg:items-center">
                <div className="px-2 py-3 flex  items-center justify-center gap-4">
                    <img src={Headset} alt="blue headset" className="
                    h-6 w-6
                    lg:h-4 lg:w-4
                    2xl:h-6 2xl:w-6"/>
                    <p className="
                    text-textColorSecondary text-base leading-6 font-medium tracking-[0.5px]
                    lg:text-xs lg:leading-4
                    2xl:text-base 2xl:leading-6">555 818 282</p>
                </div>
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>

            <div className="w-[307.31px] h-[333px] ml-[67.69px] -z-10 absolute top-0 right-0 lg:hidden">
                <img src={geometricFigure} alt="Blue geometric figure in the shape of a circle"/>
                <img src={Worker} alt="worker installing solar panel" className="absolute top-0"/>
            </div>

            <div className="
            hidden
            lg:block lg:-z-10 lg:absolute lg:top-0 lg:right-0">
                <img src={geometricFigure1} alt="Blue geometric figure in the shape of a circle" className="
                lg:w-[395px] lg:h-[353px]
                2xl:w-auto 2xl:h-auto"/>
                <img src={workerWeb} alt="worker installing solar panel" className="absolute top-0"/>
            </div>
        </header>
    )
}

export default Header