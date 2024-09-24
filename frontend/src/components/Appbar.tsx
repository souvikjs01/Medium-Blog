import { Link } from "react-router-dom"
import Avatar from "./Avatar"


const Appbar = () => {
  return (
    <nav className="flex justify-between w-full px-4 md:px-12 py-4 border-b border-black">
      <div>
        <p className="font-bold text-2xl md:text-3xl font-serif">Medium</p>
      </div>
        <div className="gap-2 text-sm md:text-base flex flex-row items-center">
            
        </div>
    </nav>


    // <div className="border-b border-black flex justify-between px-10 py-4">
    //   <Link to={'/'}>
    //     <div>
    //       <p className=" font-bold text-2xl font-serif">Medium</p>
    //     </div>
    //   </Link>
      
    //   <div className=" flex justify-center items-center">
    //     <Link to={'/publish'}> 
    //       <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
    //     </Link>
    //     <Avatar size={'big'}/>
    //   </div>
    // </div>
  )
}

export default Appbar
