import Mobile from "../../assets/mobile/Phone.png"
import Figura4 from "../../assets/mobile/geometric-figures-mobile/Rectangle 16.png"
import BoxText from "../box-text"

const Section3 = () => {
    return (
        <section className="w-full px-4 py-12 gap-16 flex flex-col relative">

            <div className="flex flex-col h-[154px] gap-6 text-center text-textColor">
                <p className="text-textColorOther text-[16px] leading-[17.6px] font-medium">Services</p>
                <h1 className="text-[32px] leading-[35.2px] font-bold">Personalized services</h1>
                <p className="text-[16px] leading-[22.4px] font-normal">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
            </div>

            <div className="gap-12 flex flex-col items-center justify-center text-center">
                <BoxText title1="Et mauris" text1="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." title2="Eget sit" text2="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."/>

                <BoxText title1="Imperdiet pellentesque" text1="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." title2="Non libero" text2="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."/>

                <div className="absolute left-0 bottom-20 -z-10">
                    <img src={Figura4}/>
                </div>                
            </div>
            
            <div className="flex items-center justify-center">
                <img src={Mobile} />               
            </div>
        </section>
    )
}

export default Section3