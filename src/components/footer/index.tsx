import Logo from "../../assets/Logo-Container.png"

const Footer = () => {
    return (
        <footer className="px-4 py-6 flex flex-col items-center text-textColor gap-6 md:px-20 md:flex-row md:justify-between">

            <div className="flex flex-col items-center gap-6 md:flex-row">
                <div>
                    <img src={Logo} alt="logo soller"/>
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