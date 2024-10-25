import BoxText from "../box-text"
import Figura5 from "../../assets/mobile/geometric-figures-mobile/Rectangle 17.png"
import Mobile from "../../assets/mobile/Phone1.png"
//figure web
import Figure from "../../assets/geometric figures/figure5.png"
import WebPhone from "../../assets/Mobile-App-Placeholder-2-web.png"

const Section4 = () => {
    return (
        <section className="
        w-full px-4 py-12 gap-16 flex flex-col relative
        md:p-20 md:gap-[160px] md:flex-row">

            <div className=" hidden absolute right-0 bottom-[100px] -z-10
            md:block">
                <img src={Figure}/>
            </div>  

            <div className="md:flex md:flex-col md:w-[1180px] md:h-[610px]">
                <div className="
                flex flex-col gap-6 text-center text-textColor
                md:text-start">
                    <p className="
                    text-textColorOther text-[16px] leading-[17.6px] font-medium
                    md:text-[20px] md:leading-[22px]">Services</p>
                    <h1 className="
                    text-[32px] leading-[35.2px] font-bold
                    md:text-[56px] md:leading-[61.6px] md:font-extrabold">Personalized services</h1>
                    <p className="
                    text-[16px] leading-[22.4px] font-normal
                    md:text-[20px] md:leading-[36px]">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>

                <div className="
                gap-12 flex flex-col items-center justify-center text-center
                md:text-start md:items-start">
                    <BoxText title1="Et mauris" text1="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." title2="Eget sit" text2="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."/>

                    <BoxText title1="Imperdiet pellentesque" text1="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." title2="Non libero" text2="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."/>

                    <div className="absolute right-0 t bottom-20 -z-10
                    md:hidden">
                        <img src={Figura5}/>
                    </div>                
                </div>

            </div>
            
            <div className="flex items-center justify-center">
                <img src={Mobile} className="md:hidden"/>
                <img src={WebPhone} className="hidden md:block"/>              
            </div>
        </section>
    )
}

export default Section4