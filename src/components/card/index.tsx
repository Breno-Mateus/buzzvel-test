import { CardProps } from "./type"

const Card = ({key, urlImage, text, name, consumption, className} : CardProps) => {
    return (
        <div className={`
        w-[343px] h-[442px] flex-none flex items-center justify-end border-[1px] rounded-[10px] bg-colorPrimary p-8 ${className}
        lg:w-[243px] lg:h-[342px]
        2xl:w-[343px] 2xl:h-[442px]`} key={key}>
            <div className="text-textColor">
                <p className="
                text-[16px] leading-[22.4px] font-normal
                lg:text-xs lg:leading-5
                2xl:text-[18px] 2xl:leading-[28.8px]">{text}</p>
                
                <div className="flex mt-[38px] gap-4">
                    <img src={urlImage} className="
                    lg:h-11 lg:w-11"/>

                    <div className="flex flex-col">
                        <p className="
                        text-[16px] leading-[22.4px] font-normal
                        lg:text-xs lg:leading-5
                        2xl:text-[18px] 2xl:leading-[28.8px]">{name}</p>
                        <p className="
                        text-[14px] leading-[19.6px] font-normal text-colorTextSecondary
                        lg:text-xs lg:leading-5
                        2xl:text-[16px] 2xl:leading-[22.4px]">{consumption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card