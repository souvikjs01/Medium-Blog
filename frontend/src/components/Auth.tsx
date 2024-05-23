import { Link, useNavigate } from "react-router-dom"
import LableInput from "./LableInput"
import { SignupType } from "@souvik01/media-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"


const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        email: "",
        password: ""
    })
    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
            const jwt = response.data.token;
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (error) {
            
        }
    }
  return (
    <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className=" border-2 p-3 rounded bg-slate-50">
                <div className="text-2xl font-semibold text-center">
                    Create an account
                </div>
                <div className=" text-slate-400 text-sm">
                    {type === 'signup' ? (<p>Already have an account?<Link className=" underline p-1" to={"/signin"}>Signin</Link></p>) : (<p>Doesn't have an account?<Link className=" underline p-1" to={"/signup"}>Sign Up</Link></p>)}
                </div>
                {type === 'signup' && (<LableInput label="Name" placeholder="Alex Devine" type="text" onChange={(e) =>{
                    setPostInputs(c => ({
                        ...c,
                        name: e.target.value
                    }))
                }}/>)}
                <LableInput label="Email" placeholder="alex10@gmail.com" type="email" onChange={(e) =>{
                    setPostInputs(c => ({
                        ...c,
                        email: e.target.value
                    }))
                }}/>
                <LableInput label="Password" placeholder="Alex001" type="password" onChange={(e) =>{
                    setPostInputs(c => ({
                        ...c,
                        password: e.target.value
                    }))
                }}/>
                <button onClick={sendRequest} type="button" className=" w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
        </div>
    </div>
  )
}

export default Auth
