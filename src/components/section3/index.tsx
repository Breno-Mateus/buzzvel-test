import Mobile from "../../assets/Mobile-App-Placeholder-1.png"
import Rectangle from "../../assets/Rectangle 15.png"
import Frame from "../../assets/Frame 4.png"
import BoxText from "../box-text"

const Section3 = () => {
    return (
        <section className="h-[1060px] w-full p-20 gap-[160px] flex relative">
            <div className="absolute left-0 top-0 mt-[27px] -z-10">
                <img src={Rectangle} />
            </div>
            
            <div>
                <img src={Mobile} />                
            </div>

            <div className="absolute left-0 top-0 mt-[360px] ml-[418px] -z-0">
                <img src={Frame} />
            </div>

            <div className="w-[1180px] h-[610px] flex flex-col gap-12 text-textColor mt-[145px]">
                <div className="flex flex-col h-[152px] gap-6">
                    <p className="text-textColorOther text-xl leading-[22px] font-medium">Services</p>
                    <h1 className="text-[56px] leading-[61.6px] font-extrabold">Personalized services</h1>
                    <p className="text-[20px] leading-[36px] font-medium">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>

                <BoxText title1="Et mauris" text1="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique." title2="Eget sit" text2="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."/>

                <BoxText title1="Imperdiet pellentesque" text1="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla." title2="Non libero" text2="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."/>               
            </div>
        </section>
    )
}

export default Section3