import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between px-12 py-4 border-b border-black">
        <div>
            <p className=" font-bold text-2xl font-serif">Medium</p>
        </div>
        <div className=" gap-6 text-md flex items-center">
            <div>
                <Link to={"/about"}>
                    Our story
                </Link>
            </div>
            <div>
                <Link to={'/signin'}>
                    Sign In
                </Link>
            </div>
            <div >
                <Link to={'/signup'}>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get Started</button>
                </Link>
            </div>
        </div>
      </nav>
  )
}

export default Navbar
