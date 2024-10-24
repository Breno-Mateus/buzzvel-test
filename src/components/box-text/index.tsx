import { BoxTextProps } from "./types"

const BoxText = ({title1, text1, title2, text2} : BoxTextProps) => {
    return(
        <div className="flex gap-12">
            <div className="
            flex flex-col gap-4 mt-20
            md:gap-12">
                <p className="text-[24px] leading-[26.4px] font-bold">{title1}</p>
                <p className="text-[18px] leading-[28.8px] font-normal">{text1}</p>
            </div>

            <div className="
            flex flex-col gap-4 mt-20
            md:gap-12">
                <p className="text-[24px] leading-[26.4px] font-bold">{title2}</p>
                <p className="text-[18px] leading-[28.8px] font-normal">{text2}</p>
            </div>
        </div>
    )
}

export default BoxText