import BoxText from "../box-text"
import Figura5 from "../../assets/geometric figures/figure5.png"
import Figura6 from "../../assets/geometric figures/figure6.png"
import Mobile from "../../assets/Mobile-App-Placeholder-2.png"

const Section4 = () => {
    return (
        <section className="h-[1060px] w-full p-20 flex gap-40 relative">
            <div className="w-[1180px] h-[610px] flex flex-col gap-12 text-textColor">
                <div className="flex flex-col h-[152px] gap-6">
                    <p className="text-textColorOther text-xl leading-[22px] font-medium">System features</p>
                    <h1 className="text-[56px] leading-[61.6px] font-extrabold">Powerful features</h1>
                    <p className="text-[20px] leading-[36px] font-medium">Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.</p>
                </div>

                <BoxText title1="Erat sit" text1="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis." title2="Ullamcorper arcu" text2="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."/>

                <BoxText title1="Et pellentesque" text1="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate." title2="Amet egestas" text2="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis."/>               
            </div>

            <div>
                <img src={Mobile} />
            </div>

            <div className="absolute right-0 top-0 -z-10">
                <img src={Figura5} />
            </div>

            <div className="absolute right-[60px] top-[655px]">
                <img src={Figura6} />
            </div>
        </section>
    )
}

export default Section4