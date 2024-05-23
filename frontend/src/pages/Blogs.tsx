import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import Skeleton from "../components/Skeleton";
import { useBlogs } from "../hooks"

 
const Blogs = () => {
    const {loading, blogs} = useBlogs();
    if(loading === true){
        return (
            <div>
                <Skeleton/>
            </div>
        )
    }

  return (
    <div>
        <Appbar/>
        <div className=" max-w-screen-sm mx-auto pt-4">
            {blogs.map(blog => (<BlogCard
                id={blog.id} 
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={'2nd may 2024'} 
            />))}
        </div>
    </div>
  )
}

export default Blogs
