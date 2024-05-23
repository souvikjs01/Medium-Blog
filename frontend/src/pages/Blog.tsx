import { useParams } from "react-router-dom";
import Skeleton from "../components/Skeleton";
import { useBlog } from "../hooks"
import BlogDetails from "../components/BlogDetails";


const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });
  if(loading || !blog) {
    return (
      <div>
        <Skeleton/>
      </div>
    )
  }
  return (
    <div>
      <BlogDetails blog={blog}/>
    </div>
  )
}

export default Blog
