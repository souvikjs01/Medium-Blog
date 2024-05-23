import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    content: string;
    title: string;
    id: string;
    author: {
        name: string;
    }
}

export const useBlog = ({id}: {id: string}) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
       axios.get(`${BACKEND_URL}/api/v1/blog/post/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
       })
       .then((res) => {
        setBlog(res.data.response);
        setLoading(false);
       })
    }, []);

    return ({
        loading,
        blog
    })
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
       axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
       })
       .then((res) => {
        setBlogs(res.data.response);
        setLoading(false);
       })
    }, []);

    return ({
        loading,
        blogs
    })
}