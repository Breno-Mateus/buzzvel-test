import Desktop from "../../assets/Desktop.png"
import Elipse1 from "../../assets/geometric figures/figure2.png"
import Elipse2 from "../../assets/geometric figures/figure3.png"

const Section2 = () => {
    return (
        <section className="relative flex flex-col items-center h-[1282px] text-textColor text-center gap-20 p-20 w-full">
            <div className="w-[900px] h-[188px] flex flex-col gap-6">
                <p className="text-textColorOther text-xl leading-[22px] font-medium">No more waste</p>
                <h1 className="text-[56px] leading-[61.6px] font-extrabold">Pick the Sun</h1>
                <p className="text-[20px] leading-[36px] font-medium">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            </div>

            <div className="absolute mt-[110px] w-full h-[800px] -z-10 flex">
                <img src={Elipse1} className="absolute top-0 left-0"
                />
                <img src={Elipse2} className="absolute bottom-0 right-0"
                />
            </div>

            <div>
                <img src={Desktop}/>
            </div>
        </section>
    )
}

export default Section2