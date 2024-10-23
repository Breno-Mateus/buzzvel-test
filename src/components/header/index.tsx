import Figura1 from "../../assets/geometric figures/figure11.png"
import Worker from "../../assets/Mask masked.png"

const Header = () => {
    return (
        <header className="pb-8 w-full h-[365px]">
            <div className="text-textColor flex flex-col justify-between h-[56px] py-2 px-4">
                
                <div className="h-[36px] w-[81px]">
                    <h3 className="text-[32px] leading-[35.2px] font-bold">soller</h3>
                </div>

                <div>
                    {/* add button */}
                </div>
            </div>

            <div className="w-[307.31px] h-[333px] ml-[67.69px]">
                <img src={Figura1} className="w-[307.31px] h-[333px] absolute top-0 right-0 object-contain z-10"/>
                <img src={Worker} className="w-[307.31px] h-[333px] absolute top-0 right-0 object-contain z-10"/>
            </div>
        </header>
    )
}

export default Header