import Image from "next/image"
import { FC } from "react"

interface BenefitType {
  posterTitle:string,
  benefitList: Array<{id:number,title:string,description:string,icon:string}>
}

const BenefitContent:FC<{data:BenefitType}> = ({data}) => {
  return (
    <div className="flex flex-col gap-[38px] py-[132px]">
      <h2 className="text-[#18191F] text-[52px] font-bold">{data.posterTitle}</h2>
    <ul className=" flex flex-wrap gap-12">
            {data.benefitList.map(item => 
            <div className="w-[540px] flex items-start gap-6" key={item.id}>
                <li className="p-6 flex items-center justify-center bg-[#E7EBFC] rounded-full" key={item.id}><Image width={38} height={38} src={item.icon} alt="benefit-icon"/></li>
                <div className="flex flex-col gap-1.75">
                <h2 className="text-[#191919] font-bold text-xl">{item.title}</h2>
                <p className="text-[#1E1E1E] font-semibold">{item.description}</p>
                </div>
            </div>)} 
      
        </ul>


    </div>
  )
}

export default BenefitContent