import Button from "../button"
import User1 from "../../assets/user1.png"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"


const Section5 = () => {
    return (
        <section className="h-[1046px] w-full bg-colorButton p-20 flex flex-col gap-20">
            <div className="flex items-center justify-between mr-[40px]">
                <div className="text-colorPrimary w-[814px] h-[188px] flex flex-col gap-6">
                    <p className="text-colorButtonSecondary text-xl leading-[22px] font-medium">Join other Sun harvesters</p>
                    <h1 className="text-[56px] leading-[61.6px] font-extrabold">Make something awesome</h1>
                    <p className="text-[20px] leading-[36px] font-medium">Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>

                <div>
                    <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow="src/assets/arrow-right-2.svg" arrowHover="src/assets/arrow-right-3.svg"/>
                </div>
            </div>

            <div>
                <div className="w-[364px] h-[442px] flex flex-col border-[1px] rounded-[10px] bg-colorPrimary p-8">
                    <div className="mt-[80px] text-textColor">
                        <p className="text-[18px] leading-[28.8px] font-normal">Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.</p>
                        
                        <div className="flex mt-[38px] gap-4">
                            <img src={User1}/>

                            <div className="flex flex-col">
                                <p className="text-[18px] leading-[28.8px] font-normal">Rwanda Melflor</p>
                                <p className="text-base leading-[22.4px] font-normal text-colorTextSecondary">zerowaste.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w[120px] h-[48px] flex gap-6">
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary flex items-center justify-center hover:bg-colorSection"> <img src={ArrowLeft}/> </button>
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary flex items-center justify-center hover:bg-colorSection"> <img src={ArrowRight} /> </button>
            </div>
        </section>
    )
}

export default Section5