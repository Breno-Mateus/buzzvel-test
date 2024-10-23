import Desktop from "../../assets/mobile/Desktop.png"
import Elipse1 from "../../assets/mobile/geometric-figures-mobile/Ellipse 14.png"
import Elipse2 from "../../assets/mobile/geometric-figures-mobile/Ellipse 15.png"

const Section2 = () => {
    return (
        <section className="flex flex-col items-center text-textColor text-center gap-16 px-4 py-12 w-full h-[604px]">
            
            <div className="absolute w-full mt-[151px] -z-10 flex">
                <img src={Elipse1} className="absolute top-0 left-0"
                />
                <img src={Elipse2} className="absolute right-0 top-20"
                />
            </div>

            <div className="flex flex-col gap-6">
                <p className="text-textColorOther text-[16px] leading-[17.6px] font-medium">No more waste</p>
                <h1 className="text-[32px] leading-[35.2px] font-bold">Pick the Sun</h1>
                <p className="text-[16px] leading-[22.4px] font-normal">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>

            <div>
                <img src={Desktop}/>
            </div>
        </section>
    )
}

export default Section2