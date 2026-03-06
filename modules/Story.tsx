import { MoreIcon, RightArrowBlue } from "@/public/icons"
import { LogitechIcon, StoryImg } from "@/public/images"
import Image from "next/image"

const Story = () => {
  return (
    <div className="bg-[#E7EBFC] flex items-center justify-end gap-[47px] py-[119px] my-[115px]">
        <div className="w-[568px] flex flex-col gap-8">
            <h2 className="text-[#191919] font-bold text-[42px]">Success Story</h2>
            <p className="text-[#1E1E1E] text-[42px] leading-[52px]">Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to streamline the lending process</p>
            <div  className="flex flex-col gap-[30px]">
               <div>
               <Image src={LogitechIcon} width={104} height={31} alt="story-icon"/>
               <button className="text-[#2E4FD7] font-semibold flex items-center gap-2.5">Read Complete Case Study <span className="mt-0.5"><RightArrowBlue/></span> </button>
               </div>
               <MoreIcon/>
            </div>
        </div>
   <Image src={StoryImg} width={380} height={420} alt="story-poster-image"/>
    </div>
  )
}

export default Story