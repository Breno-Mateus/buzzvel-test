import Desktop from "../../assets/mobile/Desktop.png"
import Elipse1 from "../../assets/mobile/geometric-figures-mobile/Ellipse 14.png"
import Elipse2 from "../../assets/mobile/geometric-figures-mobile/Ellipse 15.png"
//figures web
import Desktop1 from "../../assets/Desktop.png"
import Elipse3 from "../../assets/geometric figures/figure2.png"
import Elipse4 from "../../assets/geometric figures/figure3.png"

const Section2 = () => {
    return (
        <section className="
        flex flex-col items-center text-textColor text-center gap-16 px-4 py-12 w-full
        md:p-20 md:gap-20">
            
            <div className="absolute w-full mt-[151px] -z-10 flex">
                <img src={Elipse1} className="
                absolute top-0 left-0
                md:hidden"
                />
                <img src={Elipse2} className="
                absolute right-0 top-20
                md:hidden"
                />
                <img src={Elipse3} className="
                hidden 
                md:block md:absolute md:top-0 md:left-0"
                />
                <img src={Elipse4} className="
                hidden
                md:block md:absolute md:right-0 md:top-40"
                />
            </div>

            <div className="
            flex flex-col gap-6 text-center
            md:w-[900px]">
                <p className="
                text-textColorOther text-[16px] leading-[17.6px] font-medium
                md:text-[20px] md:leading-[22px]">No more waste</p>
                <h1 className="
                text-[32px] leading-[35.2px] font-bold
                md:text-[56px] md:leading-[61.6px] md:font-extrabold">Pick the Sun</h1>
                <p className="
                text-[16px] leading-[22.4px] font-normal
                md:text-[20px] md:leading-[36px]">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>

            <div>
                <img src={Desktop} className="
                md:hidden"/>
                <img src={Desktop1} className="
                hidden
                md:block"/>
            </div>
        </section>
    )
}

export default Section2