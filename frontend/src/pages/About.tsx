import { Link } from "react-router-dom"
import Footer from "../components/Footer"


const About = () => {
  return (
    <div className=" bg-black opacity-90">
      <nav className="flex justify-between px-12 py-4 border-b border-white text-white">
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
      <div className=" px-12 py-16 font-serif text-white w-full">
        <div className=" text-6xl font-semibold pt-6">
            <p>Everyone has a</p>
            <p>story to tell.</p>
        </div>
        <div className=" text-xl pt-16 w-[60%] leading-8">
            <p>
                Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
            </p>
        </div>
        <div className=" text-xl pt-16 w-[60%] leading-8">
            <p>We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>
        </div>
        <div className=" text-xl pt-16 w-[60%] leading-8">
            <p className="opacity-70">Ultimately, our goal is to deepen our collective</p>
            <p className=" opacity-70">understanding of the world through the power of writing.</p>
        </div>
        <div className=" text-xl pt-16 w-[60%] leading-8">
            <p>Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>
        </div>
        <div className=" text-xl pt-16 w-[60%] leading-8">
            <p>
                Instead of selling ads or selling your data, we’re supported by a growing community of <span className="underline underline-offset-1">Medium members</span> who align with our mission. If you’re new here, <span className="underline underline-offset-1 ">start exploring.</span> Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then <span className="underline underline-offset-1 ">share your own story.</span>
            </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
