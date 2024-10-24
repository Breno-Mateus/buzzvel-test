import Button from "../button"
import User1 from "../../assets/user1.png"

const Section1 = () => {
    return (
        <section className="
        w-full px-4 py-12 flex flex-col gap-16
        md:p-20 md:gap-20">

            <div className="
            flex flex-col items-center gap-6 text-textColor
            md:w-[600px] md:items-start">
                <h1 className="
                text-[40px] font-bold leading-[44px] text-center
                md:text-[72px] md:leading-[79.2px] md:font-extrabold md:text-start">Get the Sun to Power Your Home</h1>
                <p className="
                text-[18px] leading-[28.8px] font-normal text-center
                md:text-[24px] md:leading-[38.4px] md:text-start">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                <Button borderColor="border-colorButton" backgroundHover="hover:bg-colorButton" textColor="text-colorButton" textColorHover="hover:text-colorButtonSecondary" arrow="src/assets/arrow-right-1.svg" arrowHover="src/assets/arrow-right-2.svg"/>
            </div>

            <div className="
            flex flex-col gap-4
            md:w-[600px]">
                <p className="
                text-[16px] leading-[22.4px] font-normal
                md:text-[18px] md:leading-[28.8px]">“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>

                <div className="flex gap-4">
                    <img src={User1}/>

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