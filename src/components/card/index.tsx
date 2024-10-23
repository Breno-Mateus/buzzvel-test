import { CardProps } from "./type"

const Card = ({urlImage, text, name, consumption} : CardProps) => {
    return (
        <div className="w-[364px] h-[442px] flex flex-col border-[1px] rounded-[10px] bg-colorPrimary p-8">
            <div className="mt-[80px] text-textColor">
                <p className="text-[18px] leading-[28.8px] font-normal">{text}</p>
                
                <div className="flex mt-[38px] gap-4">
                    <img src={urlImage}/>

                    <div className="flex flex-col">
                        <p className="text-[18px] leading-[28.8px] font-normal">{name}</p>
                        <p className="text-base leading-[22.4px] font-normal text-colorTextSecondary">{consumption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card