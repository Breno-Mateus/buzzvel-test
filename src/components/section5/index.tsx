import Button from "../button"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"
import Card from "../card"


const Section5 = () => {
    return (
        <section className="
        w-full bg-colorButton px-4 py-12 flex flex-col gap-16
        md:p-20 md:gap-20">

            <div className="
            flex flex-col items-center gap-6 text-center text-colorPrimary
            md:flex-row md:justify-between">
                <div className="
                flex flex-col gap-6 
                md:text-start md:w-[814px]">
                    <p className="
                    text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium
                    md:text-[20px] md:leading-[22px]">Join other Sun harvesters</p>
                    <h1 className="
                    text-[32px] leading-[35.2px] font-bold
                    md:text-[56px] md:leading-[61.6px] md:font-extrabold">Make something awesome</h1>
                    <p className="
                    text-[16px] leading-[22.4px] font-normal
                    md:text-[20px] md:leading-[36px]">Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>

                <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow="src/assets/arrow-right-2.svg" arrowHover="src/assets/arrow-right-3.svg"/>
            </div>

            <div className="
            flex flex-wrap items-center justify-center gap-6
            md:justify-start">
                <Card text="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." name="Courtney Henry" consumption="6KWh" urlImage="src/assets/user1.png"/>
            </div>

            <div className="
            flex items-center justify-center gap-6
            md:justify-start">
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary p-3 hover:bg-colorSection"> <img src={ArrowLeft}/> </button>
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary p-3 hover:bg-colorSection"> <img src={ArrowRight} /> </button>
            </div>
        </section>
    )
}

export default Section5