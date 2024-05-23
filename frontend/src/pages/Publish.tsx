import { ChangeEvent, useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
  return (
    <div>
        <Appbar/>
        <div className=" max-w-screen-lg mx-auto flex flex-col">
            <div className=" flex flex-col p-10">
                <textarea onChange={(e) =>{
                    setTitle(e.target.value)
                }} className="block p-1 w-[25%] h-8 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300" placeholder="Title"></textarea>
                <Texteditor onChange={(e) => {
                    setDesc(e.target.value)
                }}/>
                <div>
                <button onClick={async() => {
                    const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content: desc
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${res.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

const Texteditor = ({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) =>{

    return (
        <div className=" pt-4">
            <form>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                    <div className="bg-white rounded-b-lg ">
                        <textarea onChange={onChange} className="block w-full h-32 px-0 text-sm text-gray-800 bg-white border-0" placeholder="Write an article..." required ></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Publish
