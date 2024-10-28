import Headset from "../../assets/web/headset.png"

const MenuHamburguer = () => {
    return (
        <div className="flex flex-col items-center gap-6 backdrop-blur-md h-screen pt-20 z-[1000] text-xl leading-6 font-medium tracking-[0.5px] text-textColor ">
            <a className="cursor-pointer">Products</a>
            <a className="cursor-pointer">Solutions</a>
            <a className="cursor-pointer">Services</a>
            <a className="cursor-pointer">Configure</a>

            <div className="px-2 py-3 flex  items-center justify-center gap-4">
                <img src={Headset} alt="blue headset" className="h-6 w-6"/>
                <p className="
                text-textColorSecondary text-xl leading-6 font-medium tracking-[0.5px]">555 818 282</p>
            </div>
        </div>
    )
}

export default MenuHamburguer