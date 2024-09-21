import { Link } from "react-router-dom"
import { Button } from "./ui/button"
const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-4 md:px-12 py-4 border-b border-black">
        <div>
            <p className="font-bold text-2xl md:text-3xl font-serif">Medium</p>
        </div>
        <div className="gap-2 text-sm md:text-base flex flex-row items-center">
            <div className=" hidden sm:block">
                <a href='#features' className="inline-flex items-center hover:bg-gray-100 rounded-lg border border-transparent px-0 md:px-4 py-0 md:py-2 text-base transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">
                    Features
                </a>
            </div>
            <div className=" hidden sm:block">
                <a href="#reviews" className="inline-flex items-center hover:bg-gray-100 rounded-lg border border-transparent px-0 md:px-4 py-0 md:py-2 text-base transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">
                    Reviews
                </a>
            </div>
            <div>
                <Link to="/about" className="inline-flex items-center hover:bg-gray-100 rounded-lg border border-transparent px-0 md:px-4 py-0 md:py-2 text-base transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">
                    Our Story
                </Link>
            </div>
            <div className=" hidden sm:block">
                <Link to='/signin' className="inline-flex items-center hover:bg-gray-100 rounded-lg border border-transparent px-4 py-2 text-base transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium text-gray-700">
                    Sign In
                </Link>
            </div>
            <div >
                <Link to='/signup'>
                    <Button size='sm'>Get Started</Button>
                </Link>
            </div>
        </div>
      </nav>
  )
}

export default Navbar
