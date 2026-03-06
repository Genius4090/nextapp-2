import { getRequest } from "@/services"
import ClosingContent from "./ClosingContent"

const Closing = async () => {
  const data = await getRequest("/closing-data")  
  return <ClosingContent data={data}/>
}

export default Closing