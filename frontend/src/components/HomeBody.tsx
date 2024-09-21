import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function HomeBody() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#f1f5f9] h-auto">
      <h1 className=" px-4 sm:px-8 mt-12 sm:mt-24 font-bold text-4xl sm:text-6xl text-[#0f172a] text-center">
        Publishing platform for Professional bloggers
      </h1>
      <p className=" text-gray-700 text-base mt-4 sm:mt-6 font-normal leading-7 text-center sm:text-xl lg:mx-auto lg:max-w-3xl xl:text-2xl xl:leading-9">Create beautiful, independent online publication by writing faster and better than you ever have before</p>
      <div className=" flex justify-center items-center mt-8">
        <Link to='/signin'>
          <Button size='lg' className=" animate-pulse">Post Your First Blog</Button>
        </Link>
      </div>
      <div className=" mt-8">
        <div className="flex shrink-0 justify-center -space-x-3 overflow-hidden">
          <img src="/user1.png" alt="us1" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user2.png" alt="us2" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user3.png" alt="us3" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user4.png" alt="us4" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user5.png" alt="us5" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user6.png" alt="us6" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user7.png" alt="us7" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user8.png" alt="us8" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user9.png" alt="us9" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
          <img src="/user10.png" alt="us10" className="inline-block h-10 w-10 rounded-full ring-2 ring-gray-100"/>
        </div>
        <p className=" p-4 text-center text-gray-700 font-normal text-base">Join <b>175+ creators, and new-age startups </b>
         and start publishing your content today</p>
      </div>
      <div >
        <img src="/med.png" alt="body" />        
      </div>
      <p className=" text-center font-medium text-xl text-gray-600">Trusted by 100+ startups</p>
      <p className="text-center mt-8 pt-8 font-bold text-2xl text-gray-700">Features</p>
    </div>
  )
}
