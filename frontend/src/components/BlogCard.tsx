import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogcardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}
const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogcardProps) => {

  return (
    <Link to={`/blog/${id}`}>
      <div className=" cursor-pointer pt-2">
        <div className=" flex">
        <div className="flex justify-center items-center">
          <Avatar name={authorName} size={'small'}/>
        </div>
        <div className=" font-extralight pl-2">
          {authorName}
        </div>
        <div className="flex justify-center items-center pl-2">
          <div className=" h-1 w-1 rounded-full bg-slate-400"></div>
        </div>
        <div className=" pl-2 font-thin text-slate-500">
          {publishedDate}
        </div>
        </div>
        <div className=" text-xl font-semibold pt-1">
          {title}
        </div>
        <div className="text-md font-thin">
          {content.length >= 50 ? content.slice(0,50) + "..." : content}
        </div>
        <div className=" text-slate-400 text-sm pt-4 pb-2 font-thin">
          {`${Math.ceil(content.length/100)} minutes(s)`}
        </div>
        <div className=" bg-slate-200 h-[1px] w-full"></div>
      </div>
    </Link>
  )
}

export default BlogCard
