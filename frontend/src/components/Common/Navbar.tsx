import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import CartDrawer from "../Layout/CartDrawer"
import { useState } from "react"


const Navbar = () => {
        const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* Left logo */}
            <div>
                <Link to='/' className="text-2xl font-medium">Wearify</Link>
            </div>
            {/* Center Navigation Link */}
            <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-madium uppercase">
                    Men
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-madium uppercase">
                    Woman
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-madium uppercase">
                   Top Wear
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-madium uppercase">
                   Bottom wear
                </Link>
            </div>
            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Link to='/profile' className="hover:text-black">
                <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 cursor-pointer" />
                <span className="absolute -top-1 bg-green-500 text-white text-xs rounded-full px-2 py-0.5">4</span>
            </button>
            {/* Search */}
            <SearchBar />
            <button className="md:hidden">
                <HiBars3BottomRight className="h-6 w-6 text-gray-700 cursor-pointer" />
            </button>
            </div>
           
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    )
}

export default Navbar