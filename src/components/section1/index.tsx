import Button from "../button"
import User from "../../assets/user3.png"
import Arrow from "../../assets/arrow-right-1.svg"
import ArrowHover from "../../assets/arrow-right-2.svg"

const Section1 = () => {
    return (
        <section id="Products" className="w-full px-4 py-12 flex flex-col gap-16 2xl:p-20 2xl:gap-20">
            <div className="flex flex-col items-center gap-6 text-textColor lg:w-[400px] lg:items-start lg:px-4 2xl:w-[600px]">
                <h1 className="text-[40px] font-bold leading-[44px] text-center lg:text-start lg:text-4xl 2xl:text-[72px] 2xl:leading-[79.2px] 2xl:font-extrabold 2xl:text-start">Get the Sun to Power Your Home</h1>
                <p className="text-[18px] leading-[28.8px] font-normal text-center lg:text-start lg:text-base lg:leading-6 2xl:text-[24px] 2xl:leading-[38.4px] 2xl:text-start">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>

            <div className="flex flex-col gap-4 lg:px-4 lg:w-[400px] 2xl:w-[600px]">
                <p className="text-[16px] leading-[22.4px] font-normal lg:text-start lg:text-sm lg:leading-6 2xl:text-[18px] 2xl:leading-[28.8px]">“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>

                <div className="flex gap-4">
                    <img src={User} alt="user image" className="lg:h-10 lg:w-10 2xl:h-16 2xl:w-16"/>

                    <div className="flex flex-col">
                        <p className="text-[18px] leading-[28.8px] font-normal lg:text-sm lg:leading-6 2xl:text-lg 2xl:leading-[28.8px]">Rwanda Melflor</p>
                        <p className="text-base leading-[22.4px] text-colorTextSecondary
                        lg:text-xs lg:leading-6 2xl:text-base 2xl:leading-[22.4px]">zerowaste.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1