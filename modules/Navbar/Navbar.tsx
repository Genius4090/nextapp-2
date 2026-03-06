import { getRequest } from "@/services"
import NavbarContent from "./NavbarContent";

const Navbar = async () => {
   const data = await getRequest("/navbar-data")
  return <NavbarContent data={data} />
}

export default Navbar