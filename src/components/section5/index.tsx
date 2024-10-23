import Button from "../button"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"
import Card from "../card"


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

            <div className="flex flex-wrap gap-6">
                <Card text="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." name="Courtney Henry" consumption="6KWh" urlImage="src/assets/user1.png"/>
                <Card text="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." name="Courtney Henry" consumption="6KWh" urlImage="src/assets/user1.png"/>
                <Card text="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." name="Courtney Henry" consumption="6KWh" urlImage="src/assets/user1.png"/>
                <Card text="Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet." name="Courtney Henry" consumption="6KWh" urlImage="src/assets/user1.png"/>
            </div>

            <div className="w[120px] h-[48px] flex gap-6">
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary flex items-center justify-center hover:bg-colorSection"> <img src={ArrowLeft}/> </button>
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary flex items-center justify-center hover:bg-colorSection"> <img src={ArrowRight} /> </button>
            </div>
        </section>
    )
}

export default Section5