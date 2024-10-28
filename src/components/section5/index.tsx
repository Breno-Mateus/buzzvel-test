import Button from "../button"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"
import Card from "../card"
import { useRef, useState } from "react"
import { cardsData } from "../../data/card-data"
import { useCarouselScroll } from "../../hooks/useCarouselScroll/useCarouselScroll"
import Arrow from "../../assets/arrow-right-2.svg"
import ArrowHover from "../../assets/arrow-right-3.svg"

const Section5 = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const scrollRef = useRef<HTMLDivElement>(null)

    const { scrollLeft, scrollRight } = useCarouselScroll(scrollRef, activeIndex, setActiveIndex, cardsData)

    return (
        <section className="w-full bg-colorButton px-4 py-12 flex flex-col gap-16 md:items-center
        lg:p-20 lg:gap-20 lg:items-start">
            <div className="flex flex-col items-center gap-6 text-center text-colorPrimary lg:flex-row lg:justify-between lg:w-full">
                <div className="flex flex-col gap-6 lg:text-start lg:w-[514px] lg:gap-3 2xl:w-[814px]">
                    <p className="text-colorButtonSecondary text-[16px] leading-[17.6px] font-medium
                    lg:text-sm lg:leading-5 2xl:text-[20px] 2xl:leading-[22px]">Join other Sun harvesters</p>
                    <h1 className="text-[32px] leading-[35.2px] font-bold lg:text-4xl lg:leading-[41.6px] 2xl:text-[56px] 2xl:leading-[61.6px] 2xl:font-extrabold">Make something awesome</h1>
                    <p className="text-[16px] leading-[22.4px] font-normal lg:text-sm lg:leading-5
                    2xl:text-[20px] 2xl:leading-[36px]">Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.</p>
                </div>

                <Button borderColor="border-colorButtonSecondary" backgroundHover="hover:bg-colorButtonSecondary" textColor="text-colorButtonSecondary" textColorHover="hover:text-textColorHoverButton" arrow={Arrow} arrowHover={ArrowHover}/>
            </div>

            <div ref={scrollRef} className="flex items-center gap-6 overflow-x-scroll custom-scrollbar md:w-[350px] lg:w-full 2xl:justify-start">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id}
                        text={card.text}
                        name={card.name}
                        consumption={card.consumption}
                        urlImage={card.urlImage}
                        className={`transition-all duration-300 ${
                            index === activeIndex ? "lg:h-[320px] xl:h-[390px] 2xl:h-[490px]" : ""
                        }`}
                    />
                ))}
            </div>

            <div className="flex items-center justify-center gap-6 lg:justify-start">
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary p-3 hover:bg-colorSection" onClick={scrollLeft}> <img src={ArrowLeft} alt="yellow left arrow"/> </button>
                <button className="w-12 h-12 rounded-[100px] border-2 border-colorButtonSecondary p-3 hover:bg-colorSection" onClick={scrollRight}> <img src={ArrowRight} alt="yellow right arrow"/> </button>
            </div>
        </section>
    )
}

export default Section5