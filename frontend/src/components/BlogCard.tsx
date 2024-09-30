import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import getTime from "@/lib/getTime";
// import { DotsVerticalIcon } from "@radix-ui/react-icons";
interface BlogcardProps {
    authorName: string;
    title: string;
    content: string;
    created_at: string;
    id: string;
}
const BlogCard = ({
    id,
    authorName,
    title,
    content,
    created_at
}: BlogcardProps) => {
  const [timeAgo, setTimeEgo] = useState<string>("");
  useEffect(() => {
    const time = getTime(created_at);
    setTimeEgo(time);
  }, [])

  const localTime = new Date(created_at).toLocaleDateString();
  
  return (
    <Link to={`/blog/${id}`}>
      <div className=" cursor-pointer pt-2 bg-slate-100 rounded-2xl m-6 py-4 px-4">
        <div className=" flex items-center pt-2">
          <div className="flex justify-center items-center">
            <Avatar name={authorName} size={'small'}/>
          </div>
          <div className=" font-extralight pl-2">
            {authorName}
          </div>
          <div className="flex justify-center items-center pl-2">
            <div className=" h-1 w-1 rounded-full bg-slate-400"></div>
          </div>
          <div className=" pl-2 font-thin text-slate-500 text-sm">
            {localTime}
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          {title}
        </div>
        <div className="text-md font-normal text-gray-500 pt-1">
          {content.length >= 50 ? content.slice(0,50) + "..." : content}
        </div>
        <div className=" text-slate-400 text-sm pt-4 pb-2 font-thin">
          {/* {`${Math.ceil(content.length/100)} minutes(s)`} */}
          {timeAgo}
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
