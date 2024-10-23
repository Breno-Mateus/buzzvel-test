import Button from "../button"
import Macbook from "../../assets/Macbook.png"
import Figure from "../../assets/mobile/geometric-figures-mobile/Ellipse 2.png"

const Section6 = () => {
    return (
        <section className="w-full bg-colorSection px-4 py-12 flex flex-col gap-16 relative">

            <div className="absolute left-0 bottom-0">
                <img src={Figure} />
            </div>

            <div className="flex flex-col gap-4 text-center">
                <div className="flex flex-col gap-6">
                    <p className="text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium">Get the Sun to power your home</p>
                    <h1 className="text-colorPrimary text-[32px] leading-[35.2px] font-bold">All the power that you need for your house is now available</h1>
                </div>

                <div className="">
                    <div className="flex flex-col pt-[40px] gap-4 items-center">
                        <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow="src/assets/arrow-right-2.svg" arrowHover="src/assets/arrow-right-3.svg"/>
                        <p className="text-[16px] leading-[22.4px] font-normal text-colorPrimary">Egestas fringilla aliquam leo</p>
                    </div>
                </div>
            </div>

            <div className="z-10">
                <img src={Macbook}/>
            </div>
        </section>
    )
}

export default Section6