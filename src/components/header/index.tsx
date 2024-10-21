import Headset from "../../assets/headset.png"
import Button from "../button"

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-20">
            <div className="text-textColor flex gap-38 items-center">
                <div>
                    <h3 className="text-32px leading-35.2px font-bold">soller</h3>
                </div>

                <div className="flex items-center gap-4 text-base font-medium tracking-0.5px">
                    <a>Products</a>
                    <a>Solutions</a>
                    <a>Services</a>
                    <a>Configure</a>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-textColorSecondary flex items-center px-2 py-3">
                    <img src={Headset}/>
                    <p className="text-base font-medium tracking-0.5px px-4">555 818 282</p>
                </div>

                <Button background="bg-transparent" backgroundHover="bg-colorButton" textColor="text-colorButton" textColorHover="text-colorButtonSecondary" arrow="src/assets/arrow-right-1.svg" arrowHover="src/assets/arrow-right-2.svg"/>
            </div>
        </header>
    )
}

export default Header