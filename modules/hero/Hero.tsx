import { getRequest } from "@/services"
import HeroContent from "./HeroContent"

const Hero = async () => {
    const data = await getRequest("/hero-data")
  return <HeroContent data={data}/>
}

export default Hero