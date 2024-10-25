// src/hooks/useCarouselScroll.ts
import { RefObject, useEffect, useState } from "react"

export const useCarouselScroll = (
    scrollRef: RefObject<HTMLDivElement>,
    activeIndex: number,
    setActiveIndex: (index: number) => void,
    cardsData: { id: number; text: string; name: string; consumption: string; urlImage: string; }[]
) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        updateScreenSize()
        window.addEventListener("resize", updateScreenSize)

        return () => {
            window.removeEventListener("resize", updateScreenSize);
        }
    }, [])

    const scrollLeft = () => {
        if(isMobile){
            if(activeIndex === 0){
                scrollRef.current?.scrollBy({ left: 2202, behavior: "smooth" })
                setActiveIndex(cardsData.length - 1)
            } else {
                scrollRef.current?.scrollBy({ left: -367, behavior: "smooth" })
                setActiveIndex(activeIndex - 1)
            }
        } else {
            if (activeIndex === 0) {
                scrollRef.current?.scrollBy({ left: 734, behavior: "smooth" })
                setActiveIndex(cardsData.length - 1)
            } else if (activeIndex <= 2) {
                scrollRef.current?.scrollBy({ left: -367, behavior: "smooth" })
                setActiveIndex(activeIndex - 1)
            } else {
                setActiveIndex(activeIndex - 1)
            }
        }
    }

    const scrollRight = () => {
        if(isMobile){
            if(activeIndex === (cardsData.length - 1)){
                setActiveIndex(0)
                scrollRef.current?.scrollBy({ left: -2202, behavior: "smooth" })
            } else{
                setActiveIndex(activeIndex + 1)
                scrollRef.current?.scrollBy({ left: 367, behavior: "smooth" })
            }
        } else {
            if (activeIndex <= 2) {
                setActiveIndex(activeIndex + 1)
            } else if (activeIndex === cardsData.length - 1) {
                setActiveIndex(0)
                scrollRef.current?.scrollBy({ left: -2202, behavior: "smooth" })
            } else {
                setActiveIndex(activeIndex + 1)
                scrollRef.current?.scrollBy({ left: 367, behavior: "smooth" })
            }
        }
    }

    return { scrollLeft, scrollRight }
}
