import { useEffect, useState } from "react";
import { Blog } from "../hooks"
import Appbar from "./Appbar"
import getTime from "@/lib/getTime";


const BlogDetails = ({blog}: {blog: Blog}) => {
    const [timeAgo, setTimeEgo] = useState<string>("");
    useEffect(() => {
        const time = getTime(blog.created_at);
        setTimeEgo(time);
      }, [])
    
  return (
    <div >
        <Appbar />
        <div className=" max-w-screen-lg mx-auto ">
            <div className="flex">
                <div className="w-[70%] flex flex-col p-10">
                    <div className=" text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className=" text-slate-500 pt-2">
                        Post on {timeAgo}
                    </div>
                    <div className=" pt-2">
                        {blog.content}
                    </div>
                </div>
                <div className=" w-[30%] flex flex-col p-10">
                    <p>Author</p>
                    <div className=" text-xl font-bold flex">
                        <div className=" h-6 w-6 rounded-full bg-slate-400 flex justify-center items-center text-sm text-black font-medium">{blog.author.name[0].toUpperCase()}</div>
                        <div className=" pl-2"><p>{blog.author.name || "Anonymous"}</p></div>
                    </div>
                    <div className=" pt-2 text-slate-500">
                        Random catch phrase about the author's ability to grab the user's attention
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails
