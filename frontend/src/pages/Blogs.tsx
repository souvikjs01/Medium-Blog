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
        <div className=" max-w-screen-sm mx-auto">
            {blogs.map(blog => (<BlogCard
                key={blog.id}
                id={blog.id} 
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                created_at={blog.created_at} 
            />))}
        </div>
    </div>
  )
}

export default Blogs
