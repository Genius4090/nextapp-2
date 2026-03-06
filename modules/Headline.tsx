import { Button } from "@/components"
import { HeadLine1, HeadLine2, HeadLine3 } from "@/public/icons"
import { ReactNode } from "react"

interface HeadlineType {
    id:number,
    title:string,
    description:string,
    icon: ReactNode
}

const Headline = () => {
    const headLineList:HeadlineType[] = [
        {
            id:1,
            title: "First Benefit",
            description: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few ",
            icon : <HeadLine1/>
        },
        {
            id:2,
            title: "Second Benefit",
            description: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few",
            icon : <HeadLine2/>
        },
        {
            id:3,
            title: "Third Benefit",
            description: "Gorgeous, high-quality design system for mobile, tablet & desktop devices a few ",
            icon : <HeadLine3/>
        }
    ]

  return (
    <div className="flex items-center justify-between py-[130px]">
        <ul className="w-[410px] flex flex-col gap-12">
            {headLineList.map(item => <div className="flex items-start gap-6" key={item.id}>
                <li className="p-[15px] bg-[#E7EBFC] rounded-full" key={item.id}>{item.icon}</li>
                <div className="flex flex-col gap-1.75">
                <h2 className="text-[#191919] font-bold text-xl">{item.title}</h2>
                <p className="text-[#1E1E1E] font-semibold">{item.description}</p>
                </div>
            </div>)} 
      
        </ul>
        <div className="w-[540px] flex flex-col gap-4 items-start">
            <h2 className="font-bold text-[52px] leading-[62px] text-[#191919]">Headline of Modern and Digital Lending Platform Seconds</h2>
            <p className="text-xl text-[#1E1E1E]">Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy</p>
            <Button content="Learn More About" extraStyle="py-[15px] px-[25px] mt-4"/>
        </div>
    </div>
  )
}

export default Headline