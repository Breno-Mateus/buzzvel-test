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
        xl:p-20 xl:gap-20">
            
            <div className="absolute w-full mt-[151px] -z-10 flex">
                <img src={Elipse1} className="
                absolute top-0 left-0
                xl:hidden"
                />
                <img src={Elipse2} className="
                absolute right-0 top-20
                xl:hidden"
                />
                <img src={Elipse3} className="
                hidden 
                xl:block xl:absolute xl:top-0 xl:left-0"
                />
                <img src={Elipse4} className="
                hidden
                xl:block xl:absolute xl:right-0 xl:top-40"
                />
            </div>

            <div className="
            flex flex-col gap-6 text-center
            xl:w-[900px]">
                <p className="
                text-textColorOther text-[16px] leading-[17.6px] font-medium
                xl:text-[20px] xl:leading-[22px]">No more waste</p>
                <h1 className="
                text-[32px] leading-[35.2px] font-bold
                xl:text-[56px] xl:leading-[61.6px] xl:font-extrabold">Pick the Sun</h1>
                <p className="
                text-[16px] leading-[22.4px] font-normal
                xl:text-[20px] xl:leading-[36px]">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>

            <div>
                <img src={Desktop} className="
                xl:hidden"/>
                <img src={Desktop1} className="
                hidden
                xl:block"/>
            </div>
        </section>
    )
}

export default Section2