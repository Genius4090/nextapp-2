interface ProcessType {
    id: number,
    title:string,
    description:string,
    isLine:boolean
}

const Process = () => {
    const ProcessList:ProcessType[] = [
        {
            id: 1,
            title:"Ideate",
            description:"Turn your idea from concept to MVP",
            isLine:true
        },
        {
            id: 2,
            title:"Design",
            description:"Sketch out the product to align the user needs",
            isLine:true
        },
        {
            id: 3,
            title:"Develop",
            description:"Convert the designs into a live application",
            isLine:true
        },
        {
            id: 4,
            title:"Deploy",
            description:"Launching the application to the market",
            isLine: false
        }
    ]
  return (
    <div className="py-[60px] flex flex-col gap-[52px]">
        <h2 className="text-[#18191F] text-[42px] font-bold">The process we follow </h2>
        <ul className="flex gap-[30px] items-center justify-center">
       {ProcessList.map(item => <li className="w-[255px] flex flex-col gap-4" key={item.id}>
         <div className="flex items-center gap-6">
            <div className="bg-[#2E4FD7] w-6 h-6 rounded-full"></div>
            {item.isLine && <div className="w-[183px] border border-dashed border-[#2e50d759]"></div>}
         </div>

     <div className="flex flex-col gap-1">
     <h3 className="text-[#18191F] font-bold text-2xl">{item.title}</h3>
     <p className="text-[#18191F]">{item.description}</p>
     </div>
        </li>)}
        </ul>
    </div>
  )
}

export default Process