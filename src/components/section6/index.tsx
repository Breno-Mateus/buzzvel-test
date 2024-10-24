import Button from "../button"
import Macbook from "../../assets/Macbook.png"
import Figure from "../../assets/mobile/geometric-figures-mobile/Ellipse 2.png"
import Figure1 from "../../assets/geometric figures/figure7.png"

const Section6 = () => {
    return (
        <section className="
        w-full bg-colorSection px-4 py-12 flex flex-col gap-16 relative
        md:p-20 md:gap-20">

            <div className="
            absolute left-0 bottom-0
            md:hidden">
                <img src={Figure} />
            </div>

            <div className="
            flex flex-col gap-4 text-center
            md:text-start md:gap-[240px] md:flex-row">

                <div className="
                hidden absolute right-0 top-0
                md:block">
                    <img src={Figure1} />
                </div>

                <div className="
                flex flex-col gap-6
                md:w-[849px] md:ml-[240px]">
                    <p className="
                    text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium
                    md:text-[20px] md:leading-[22px]">Get the Sun to power your home</p>
                    <h1 className="
                    text-colorPrimary text-[32px] leading-[35.2px] font-bold
                    md:text-[56px] md:leading-[61.6px]">All the power that you need for your house is now available</h1>
                </div>

                <div className="">
                    <div className="flex flex-col pt-[40px] gap-4 items-center">
                        <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow="src/assets/arrow-right-2.svg" arrowHover="src/assets/arrow-right-3.svg"/>
                        <p className="
                        text-[16px] leading-[22.4px] font-normal text-colorPrimary z-10
                        md:text-[18px] md:leading-[28.8px] md:text-center">Egestas fringilla aliquam leo</p>
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