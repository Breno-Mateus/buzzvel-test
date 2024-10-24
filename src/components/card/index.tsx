import { CardProps } from "./type"

const Card = ({urlImage, text, name, consumption} : CardProps) => {
    return (
        <div className="w-[364px] h-[442px] flex flex-col items-center justify-center border-[1px] rounded-[10px] bg-colorPrimary p-8">
            <div className="text-textColor">
                <p className="
                text-[16px] leading-[22.4px] font-normal
                md:text-[18px] md:leading-[28.8px]">{text}</p>
                
                <div className="flex mt-[38px] gap-4">
                    <img src={urlImage}/>

                    <div className="flex flex-col">
                        <p className="
                        text-[16px] leading-[22.4px] font-normal
                        md:text-[18px] md:leading-[28.8px]">{name}</p>
                        <p className="
                        text-[14px] leading-[19.6px] font-normal text-colorTextSecondary
                        md:text-[16px] md:leading-[22.4px]">{consumption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card