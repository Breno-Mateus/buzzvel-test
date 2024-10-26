import Mobile from "../../assets/Mobile-App-Placeholder-mobile.png"
import Figura4 from "../../assets/mobile/geometric-figures-mobile/Rectangle 16.png"
import BoxText from "../box-text"
//figure web version
import Figure from "../../assets/geometric figures/figura4.png"
import web from "../../assets/Mobile-App-Placeholder-web.png"

const Section3 = () => {
    return (
        <section className="
        w-full px-4 py-12 gap-16 flex flex-col relative
        lg:flex-row
        2xl:flex-row 2xl:gap-[160px] 2xl:p-20">
            
            <div className="
            hidden absolute left-0 -z-10 top-10
            lg:block
            2xl:block">    
                <img src={Figure} className="
                lg:h-[600px]
                2xl:h-auto"/>
            </div>   

            <div className="
            hidden
            lg:block
            2xl:block">
                <img src={web} className="h-auto"/>               
            </div>

            <div className="
            lg:flex lg:flex-col
            2xl:flex 2xl:flex-col 2xl:h-[610px] 2xl:w-[1180px]">
                <div className="
                flex flex-col gap-6 text-center text-textColor
                lg:text-start lg:gap-3
                2xl:text-start 2xl:gap-6">
                    <p className="
                    text-textColorOther text-[16px] leading-[17.6px] font-medium
                    lg:text-sm lg:leading-5
                    2xl:text-[20px] 2xl:leading-[22px]">Services</p>
                    <h1 className="
                    text-[32px] leading-[35.2px] font-bold
                    lg:text-4xl lg:leading-[41.6px]
                    2xl:text-[56px] 2xl:leading-[61.6px] 2xl:font-extrabold">Personalized services</h1>
                    <p className="
                    text-[16px] leading-[22.4px] font-normal
                    lg:text-sm lg:leading-5
                    2xl:text-[20px] 2xl:leading-[36px]">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>

                <div className="
                gap-12 flex flex-col items-center justify-center text-center
                lg:text-start
                2xl:text-start">
                    <BoxText title1="Et mauris" text1="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." title2="Eget sit" text2="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."/>

                    <BoxText title1="Imperdiet pellentesque" text1="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." title2="Non libero" text2="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."/>

                    <div className="
                    absolute left-0 bottom-20 -z-10
                    lg:top-0 lg:hidden
                    2xl:top-0 2xl:hidden">
                        <img src={Figura4}/>
                    </div>                
                </div>

            </div>
            
            <div className="
            flex items-center justify-center
            lg:hidden
            2xl:hidden">
                <img src={Mobile} />               
            </div>
        </section>
    )
}

export default Section3