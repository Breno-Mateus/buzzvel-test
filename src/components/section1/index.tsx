import Button from "../button"
import User from "../../assets/user3.png"
import Arrow from "../../assets/arrow-right-1.svg"
import ArrowHover from "../../assets/arrow-right-2.svg"

const Section1 = () => {
    return (
        <section className="
        w-full px-4 py-12 flex flex-col gap-16
        xl:p-20 xl:gap-20">

            <div className="
            flex flex-col items-center gap-6 text-textColor
            xl:w-[600px] xl:items-start">
                <h1 className="
                text-[40px] font-bold leading-[44px] text-center
                xl:text-[72px] xl:leading-[79.2px] xl:font-extrabold xl:text-start">Get the Sun to Power Your Home</h1>
                <p className="
                text-[18px] leading-[28.8px] font-normal text-center
                xl:text-[24px] xl:leading-[38.4px] xl:text-start">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>

            <div className="
            flex flex-col gap-4
            xl:w-[600px]">
                <p className="
                text-[16px] leading-[22.4px] font-normal
                xl:text-[18px] xl:leading-[28.8px]">“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>

                <div className="flex gap-4">
                    <img src={User}/>

                    <div className="flex flex-col">
                        <p className="text-[18px] leading-[28.8px] font-normal">Rwanda Melflor</p>
                        <p className="text-base leading-[22.4px] text-colorTextSecondary">zerowaste.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1