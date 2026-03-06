import { getRequest } from "@/services"
import BenefitContent from "./BenefitContent"

const Benefit = async () => {
  const data = await getRequest("/benefit-data")
  return <BenefitContent data={data}/>
}

export default Benefit