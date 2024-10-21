import Logo from "../../assets/Logo Container.png"

const Footer = () => {
    return (
        <footer className="h-[95px] px-20 py-[31.5px] flex items-center justify-between text-textColor">
            <div className="flex items-center gap-6">
                <div>
                    <img src={Logo} />
                </div>

                <div>
                    <p className="text-base leading-[22.4px] font-normal">@ 2023 Soller, Inc. All rights reserved.</p>
                </div>
            </div>

            <div className="flex gap-6 text-base leading-[22.4px] font-normal">
                <p>Terms</p>
                <p>Privacy</p>
                <p>Support</p>
            </div>
        </footer>
    )
}

export default Footer