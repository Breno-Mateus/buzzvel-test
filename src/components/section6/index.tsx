import Button from "../button"
import Figure7 from "../../assets/geometric figures/figure7.png"
import Macbook from "../../assets/Macbook.png"

const Section6 = () => {
    return (
        <section className="h-[949px] w-full bg-colorSection p-20 flex flex-col items-center gap-20 relative">
            <div className="flex gap-[240px] items-center">
                <div className="flex flex-col gap-6 w-[894px] ml-[240px] z-10">
                    <p className="text-colorButtonSecondary text-xl leading-[22px] font-medium">Get the Sun to power your home</p>
                    <h1 className="text-colorPrimary text-[56px] leading-[61.6px] font-extrabold">All the power that you need for your house is now available</h1>
                </div>
                
                <div className="absolute right-0 top-0">
                    <img src={Figure7}/>
                </div>

                <div className="w-[306px] h-[149px]">
                    <div className="flex flex-col pt-[40px] gap-4 items-center">
                        <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow="src/assets/arrow-right-2.svg" arrowHover="src/assets/arrow-right-3.svg"/>
                        <p className="text-lg leading-[28.8px] text-colorPrimary z-10">Egestas fringilla aliquam leo</p>
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