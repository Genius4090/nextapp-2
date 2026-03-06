import { Button } from "@/components"
import Image from "next/image"
import { FC } from "react"

interface HeroType {
    title:string,
    description:string,
    quote:string,
    poster:string,
    images: Array<{id:number,image:string}>
}

const HeroContent:FC<{data: HeroType}> = ({data}) => {
  return (
    <div className="flex gap-[105px] py-[145px]">
        <div className="w-[635px] flex flex-col justify-between">
            <h1 className="text-[#191919] text-6xl font-bold capitalize leading-[70px]">{data.title}</h1>
         <div className="flex flex-col gap-[42px]">
         <h3 className="text-xl text-[#1E1E1E] w-[468px]">{data.description}</h3>
            <div className="flex gap-[21px] items-center">
              <Button content="Book a Meeting" extraStyle="py-[15px] px-[25px]"/>
              <p className="text-[#1E1E1E] w-[250px] font-semibold">{data.quote}</p>
            </div>
         </div>
            <div className="flex items-center gap-[27px]">
              {data.images.map(item => <Image key={item.id} width={130} height={31} src={item.image}  alt="hero-image" />)}
            </div>
        </div>
        <Image src={data.poster} width={460} height={548} alt="headline-poster"/>
    </div>
  )
}

export default HeroContent