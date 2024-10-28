import Desktop from "../../assets/mobile/Desktop-mobile.png"
import Elipse1 from "../../assets/mobile/geometric-figures-mobile/Ellipse 14.png"
import Elipse2 from "../../assets/mobile/geometric-figures-mobile/Ellipse 15.png"
import Desktop1 from "../../assets/web/Desktop-web.png"
import Elipse1Web from "../../assets/web/geometric-figures/figure2.png"
import Elipse2Web from "../../assets/web/geometric-figures/figure3.png"

const Section2 = () => {
    return (
        <section id="Solutions" className="flex flex-col items-center text-textColor text-center gap-16 px-4 py-12 w-full 2xl:p-20 2xl:gap-20">
            
            <div className="absolute w-full mt-[151px] -z-10 flex">
                <img src={Elipse1} alt="orange circle" className="absolute top-0 left-0 lg:hidden"
                />
                <img src={Elipse2} alt="purple circle" className="absolute right-0 top-20 lg:hidden"
                />
                <img src={Elipse1Web} alt="orange circle" className="hidden absolute top-0 left-0 lg:block lg:h-[421px] lg:w-[380px] 2xl:h-auto 2xl:w-auto"
                />
                <img src={Elipse2Web} alt="purple circle" className="hidden absolute right-0 top-40 lg:block lg:h-[377px] lg:top-20 2xl:h-auto 2xl:top-40"
                />
            </div>

            <div className="flex flex-col gap-6 text-center lg:mx-[26%] lg:gap-4 2xl:w-[900px] 2xl:gap-6">
                <p className="text-textColorOther text-[16px] leading-[17.6px] font-medium lg:text-sm lg:leading-5 2xl:text-[20px] 2xl:leading-[22px]">No more waste</p>
                <h1 className="text-[32px] leading-[35.2px] font-bold lg:text-4xl lg:leading-[41.6px] 2xl:text-[56px] 2xl:leading-[61.6px] 2xl:font-extrabold">Pick the Sun</h1>
                <p className="text-[16px] leading-[22.4px] font-normal lg:text-sm lg:leading-5 2xl:text-[20px] 2xl:leading-[36px]">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>

            <div className="lg:px-[10.41%] 2xl:px-0">
                <img src={Desktop} alt="website layout on a notebook" className="md:hidden"/>
                <img src={Desktop1} alt="website layout on a notebook" className="hidden md:block"/>
            </div>
        </section>
    )
}

export default Section2