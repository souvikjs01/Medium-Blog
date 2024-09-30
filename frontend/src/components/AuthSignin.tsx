import { Link, useNavigate } from "react-router-dom"
// import { SignupType } from "@souvik01/media-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import {
    Form, 
    FormControl,
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "./ui/form"
import { Input } from "./ui/input"
import { zodResolver } from "@hookform/resolvers/zod" 
import { useToast } from "@/hooks/use-toast"
import { SignInSchema, SignInType } from "@/validation/signinSchema"
import { useState } from "react"
import { ImSpinner } from 'react-icons/im'
import { useSetRecoilState } from 'recoil';
import { userNameState, userEmailState } from '../atoms/atoms'

const AuthSignin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { toast } = useToast()
    const setName = useSetRecoilState(userNameState)
    const setEmail = useSetRecoilState(userEmailState)
    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: SignInType) => {
        async function sendRequest(){
            try {
                setLoading(true);
                console.log("hi therwe");                
                const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, data);
                const jwt = response.data.token;
                setName(response.data.user.name);
                setEmail(response.data.user.email);                
                setLoading(false);
                toast({
                    title: "You have successfully signed in",
                })
                localStorage.setItem("token", jwt);
                navigate("/blogs")
            } catch (error) {
                toast({
                    title: "User Not found",
                })
                setLoading(false);
                console.log(error);                     
            }
        }
        sendRequest();      
    }

  return (
    <div className="h-screen flex justify-center items-center">
        <div className=" border px-6 pb-4 bg-slate-50 rounded">
                <h1 className=" py-4 text-xl font-bold">Sign In</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="alex01@gmail.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="*********" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className=" w-full">{loading ? <ImSpinner size={20} className="animate-spin"/> : "Sign In"}</Button>
                        <p className=" text-sm text-gray-700">Don't have an account? <Link to='/signup' className=" text-blue-500 underline">Signup</Link> </p>
                    </form>
                </Form>
        </div>
    </div>
  )
}
export default AuthSignin