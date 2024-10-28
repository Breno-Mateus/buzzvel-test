import { BoxTextProps } from "./types"

const BoxText = ({title1, text1, title2, text2} : BoxTextProps) => {
    return(
        <div className="flex gap-12">
            <div className="flex flex-col gap-4 mt-20 2xl:gap-12">
                <p className="text-[24px] leading-[26.4px] font-bold lg:text-base lg:leading-4 2xl:text-[24px] 2xl:leading-[26.4px]">{title1}</p>
                <p className="text-[18px] leading-[28.8px] font-normal lg:text-sm lg:leading-5
                2xl:text-[18px] 2xl:leading-[28.8px]">{text1}</p>
            </div>

            <div className="flex flex-col gap-4 mt-20 2xl:gap-12">
                <p className="text-[24px] leading-[26.4px] font-bold lg:text-base lg:leading-4
                2xl:text-[24px] 2xl:leading-[26.4px]">{title2}</p>
                <p className="text-[18px] leading-[28.8px] font-normal lg:text-sm lg:leading-5
                2xl:text-[18px] 2xl:leading-[28.8px]">{text2}</p>
            </div>
        </div>
    )
}

export default BoxText