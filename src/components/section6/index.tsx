import Button from "../button"
import Macbook from "../../assets/Macbook.png"
import geometricFigure from "../../assets/mobile/geometric-figures-mobile/Ellipse 2.png"
import geometricFigure1 from "../../assets/web/geometric-figures/figure7.png"
import Arrow from "../../assets/arrow-right-2.svg"
import ArrowHover from "../../assets/arrow-right-3.svg"

const Section6 = () => {
    return (
        <section className="w-full bg-colorButton px-4 py-12 flex flex-col gap-16 relative
        lg:p-16 lg:gap-12 lg:bg-colorSection xl:gap-20 xl:p-20">
            <div className="absolute left-0 bottom-0 lg:hidden">
                <img src={geometricFigure} alt="decorative shape in purple in the shape of a semicircle"/>
            </div>

            <div className="flex flex-col gap-4 text-center lg:text-start lg:flex-row lg:gap-[120px]
            xl:gap-[210px] 2xl:gap-[240px]">

                <div className="hidden absolute right-0 top-0 lg:block">
                    <img src={geometricFigure1} alt="decorative shape in purple in the shape of a semicircle" className="lg:h-[260px] xl:h-[310px] 2xl:h-auto"/>
                </div>

                <div className="flex flex-col gap-6 lg:w-[549px] xl:ml-[140px] 2xl:w-[849px] 2xl:ml-[240px]">
                    <p className="text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium
                    lg:text-sm lg:leading-5 2xl:text-[20px] 2xl:leading-[22px]">Get the Sun to power your home</p>
                    <h1 className="text-colorPrimary text-[32px] leading-[35.2px] font-bold
                    lg:text-4xl lg:leading-[41.6px] 2xl:text-[56px] 2xl:leading-[61.6px]">All the power that you need for your house is now available</h1>
                </div>

                <div className="z-10">
                    <div className="flex flex-col pt-[40px] gap-4 items-center">
                        <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow={Arrow} arrowHover={ArrowHover}/>
                        <p className="text-[16px] leading-[22.4px] font-normal text-colorPrimary
                        lg:text-sm lg:leading-5 lg:text-center 2xl:text-[18px] 2xl:leading-[28.8px] 2xl:text-center">Egestas fringilla aliquam leo</p>
                    </div>
                </div>
            </div>

            <div className="z-10 flex items-center justify-center">
                <img src={Macbook} alt="notebook with screen showing website layout" className="lg:w-[808px] 2xl:w-auto"/>
            </div>
        </section>
    )
}

export default Section6