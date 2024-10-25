import Button from "../button"
import Macbook from "../../assets/Macbook.png"
import Figure from "../../assets/mobile/geometric-figures-mobile/Ellipse 2.png"
import Figure1 from "../../assets/geometric figures/figure7.png"
import Arrow from "../../assets/arrow-right-2.svg"
import ArrowHover from "../../assets/arrow-right-3.svg"

const Section6 = () => {
    return (
        <section className="
        w-full bg-colorSection px-4 py-12 flex flex-col gap-16 relative
        2xl:p-20 2xl:gap-20">

            <div className="
            absolute left-0 bottom-0
            2xl:hidden">
                <img src={Figure} />
            </div>

            <div className="
            flex flex-col gap-4 text-center
            2xl:text-start 2xl:gap-[240px] 2xl:flex-row">

                <div className="
                hidden absolute right-0 top-0
                2xl:block">
                    <img src={Figure1} />
                </div>

                <div className="
                flex flex-col gap-6
                2xl:w-[849px] 2xl:ml-[240px]">
                    <p className="
                    text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium
                    2xl:text-[20px] 2xl:leading-[22px]">Get the Sun to power your home</p>
                    <h1 className="
                    text-colorPrimary text-[32px] leading-[35.2px] font-bold
                    2xl:text-[56px] 2xl:leading-[61.6px]">All the power that you need for your house is now available</h1>
                </div>

                <div className="">
                    <div className="flex flex-col pt-[40px] gap-4 items-center">
                        <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow={Arrow} arrowHover={ArrowHover}/>
                        <p className="
                        text-[16px] leading-[22.4px] font-normal text-colorPrimary z-10
                        2xl:text-[18px] 2xl:leading-[28.8px] 2xl:text-center">Egestas fringilla aliquam leo</p>
                    </div>
                </div>
            </div>

            <div className="z-10 flex items-center justify-center">
                <img src={Macbook}/>
            </div>
        </section>
    )
}

export default Section6