//Figure mobile
import Figura1 from "../../assets/geometric figures/figure11.png"
import Worker from "../../assets/Mask masked.png"
//figure web
import Fone from "../../assets/headset.png"
import Figure from "../../assets/geometric figures/figure1.png"
import workerWeb from "../../assets/work.png"
//outhers
import Button from "../button"
import Arrow from "../../assets/arrow-right-1.svg"
import ArrowHover from "../../assets/arrow-right-2.svg"

const Header = () => {
    return (
        <header className="
        w-full h-[365px] pb-8 relative
        md:px-20 md:py-6 md:flex md:items-center md:justify-between md:h-[112px]">

            <div className="
            text-textColor h-[56px] py-2 px-4
            md:flex md:gap-[38px]">
                
                <div className="h-[36px] w-[81px]">
                    <h3 className="text-[32px] leading-[35.2px] font-bold">soller</h3>
                </div>

                <div className="
                hidden text-base leading-6 font-medium tracking-[0.5px]
                md:flex md:items-center md:gap-4">
                    <a className="px-2 py-3">Products</a>
                    <a className="px-2 py-3">Solutions</a>
                    <a className="px-2 py-3">Services</a>
                    <a className="px-2 py-3">Configure</a>
                </div>
            </div>

            <div className="
            hidden
            md:flex md:gap-4">
                <div className="px-2 py-3 flex  items-center justify-center gap-4">
                    <img src={Fone} className="h-6 w-6"/>
                    <p className="text-textColorSecondary text-base leading-6 font-medium tracking-[0.5px]">555 818 282</p>
                </div>
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>

            <div className="w-[307.31px] h-[333px] ml-[67.69px] -z-10 absolute top-0 right-0 md:hidden">
                <img src={Figura1}/>
                <img src={Worker} className="absolute top-0"/>
            </div>

            <div className="hidden md:block md:-z-10 md:absolute md:top-0 md:right-0">
                <img src={Figure}/>
                <img src={workerWeb} className="absolute top-0"/>
            </div>
        </header>
    )
}

export default Header