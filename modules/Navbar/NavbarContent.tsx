
import { Button } from "@/components"
import { WebsiteLogo } from "@/public/images"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface DataType {
  id: number,
  content: string,
  path:string
}


const NavbarContent:FC<{data : DataType[]}> = ({data:navbarData}) => {
  return (
    <div className="py-4 w-full fixed bg-white">
  <div className="container flex items-center justify-between">
  <div className="flex items-center gap-12">
   <Image src={WebsiteLogo} alt="website logo" loading="eager" className="pt-2"/>
      <ul className="flex  items-center gap-8">
      {navbarData.map(item => <Link className="text-[#191919] font-semibold" key={item.id} href={item.path}>{item.content}</Link>  )}
  
      </ul>
   </div>
      <Button content="Book a Meeting" extraStyle="text-sm"/>
  </div>
    </div>
  )
}

export default NavbarContent


