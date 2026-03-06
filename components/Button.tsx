
import { RightArrow } from "@/public/icons"
import { FC } from "react"

interface ButtonType {
    content:string,
    extraStyle?:string
}

const Button:FC<ButtonType> = ({content,extraStyle}) => {
  return (
    <button className={`flex font-semibold items-center gap-2.5 px-5 py-1 text-white cursor-pointer bg-[#2E4FD7] ${extraStyle}`}>
        {content}
        <RightArrow/>
    </button>
  )
}

export default Button