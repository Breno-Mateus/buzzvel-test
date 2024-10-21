import Button from "../button"
import User1 from "../../assets/user1.png"

const Section1 = () => {
    return (
        <section className="h-[812px] flex p-20 w-full gap-20">
            <div className="flex flex-col text-textColor gap-32">
                <div className="w-[600px] h-[348px] flex flex-col gap-6">
                    <h1 className="text-[72px] font-extrabold leading-[79.2px]">Get the Sun to Power Your Home</h1>
                    <p className="text-2xl leading-[38.4px]">Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.</p>
                    <Button background="bg-transparent" backgroundHover="bg-colorButton" textColor="text-colorButton" textColorHover="text-colorButtonSecondary" arrow="src/assets/arrow-right-1.svg" arrowHover="src/assets/arrow-right-2.svg"/>
                </div>

                <div className="flex flex-col gap-4 h-[138px] w-[600px] text-lg leading-[28.8px] font-normal">
                    <p>“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”</p>

                    <div className="flex gap-4">
                        <img src={User1}/>
                        <div className="flex flex-col">
                            <p>Rwanda Melflor</p>
                            <p className="text-base leading-[22.4px]">zerowaste.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[760px] h-[732px]">

            </div>
        </section>
    )
}

export default Section1