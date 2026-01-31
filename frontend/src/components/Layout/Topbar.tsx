import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"
import { TbBrandMeta } from "react-icons/tb"


const Topbar = () => {
  return (
    <div className="bg-green-500">
        <div className="container mx-auto flex justify-center lg:justify-between items-center py-3 px-4 "> 
          <div className="hidden lg:flex items-center gap-x-4 ">
            <a href="#" className="hover:text-gray-300"><TbBrandMeta className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300"><IoLogoInstagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-gray-300"><RiTwitterXLine className="h-5 w-5" /></a>
          </div>
          <div className="text-sm text-center ">
           <span>We ship worldwide - Fast and reliable shopping</span>
          </div>
          <div className="hidden lg:flex text-sm">
             <a href="tel:+8801943747529" className="hover:text-gray-300">+88 01943747529</a>
          </div>
        </div>
    </div>
  )
}

export default Topbar