import { Button } from "@/components"
import Image from "next/image"
import { FC } from "react"

interface ClosingType {
    title: string,
    description: string,
    images: Array<{id:number,content:string}>
}


const ClosingContent:FC<{data:ClosingType}> = ({data}) => {
  return (
    <div className="bg-[#E7EBFC] py-[103px]">
      <div className="container flex flex-col items-center justify-center gap-6">
        <h2 className="text-[52px] text-[#191919] font-bold text-center leading-[62px] w-[920px]">{data.title}</h2>
        <p className="text-[#1E1E1E] text-lg  text-center w-[826px]">{data.description}</p>
        <Button content="Book a Meeting" extraStyle="py-[15px] px-[25px] mt-10"/>
        <div className="w-full border border-[#B4B4B4] my-6"></div>
        <ul className="flex items-center gap-[30px]">
          {data.images.map(item => <Image className="border  " key={item.id} src={item.content} alt="closing-brand-icon" width={160} height={160}/> )}
        </ul>
      </div>
    </div>
  )
}

export default ClosingContent