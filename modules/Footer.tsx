import { Button } from "@/components"
import { FooterLogo } from "@/public/images"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="py-[70px] bg-[#052825]">
      <div className="container flex flex-col gap-[33px]">
      <Image src={FooterLogo} alt="footerlogo" width={108} height={24}/>
   <div className="flex items-start justify-between ">
   <div className="w-[423px] flex flex-col gap-[6] ">
    <h4 className="text-white font-semibold text-lg">About Tweakful</h4>
    <p className="text-white">Tweakful is HubSpot Theme Based On Engagement Design Framework, designed & developed by Openthrive.</p>
 <Button content="Button Text" extraStyle="bg-transparent font-normal! px-0! mt-2"/>
   </div>
   <div>
    <ul className="w-[549px] flex flex-wrap gap-[22px] justify-end space-y-2 text-white">
      <li className="cursor-pointer">Contact</li>
      <li className="cursor-pointer">Career</li>
      <li className="cursor-pointer">Privacy Plocy</li>
      <li className="cursor-pointer">Terms Of Services</li>
      <li className="cursor-pointer">GDPR</li>
      <li className="cursor-pointer">FAQs</li>
      <li className="cursor-pointer">Blog</li>
      <li className="cursor-pointer">Capabilities</li>
      <li className="cursor-pointer">Resources</li>
      <li className="cursor-pointer">Partnership  Integration</li>
    </ul>
   </div>

   </div>
   <div className="w-full border border-[#ffffff15] "></div>
  
  <div className="flex items-center justify-between">
    <h4 className="w-[387px] text-sm text-white">B2B website and engagement design solution that transform
    marketing and sales performance like never before.</h4>
    <p className="text-sm text-white">© 2015-2020 Openthrive. All right reserved.</p>
  </div>
      </div>
    </div>
  )
}

export default Footer