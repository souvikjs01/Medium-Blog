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
import { SignUpSchema, SignUpType } from "@/validation/signupScema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/hooks/use-toast"
import { ImSpinner } from 'react-icons/im'
import { useState } from "react"

const AuthSignup = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { toast } = useToast()
    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    const onSubmit = (data: SignUpType) => {
        console.log(data);
        async function sendRequest(){
            try {
                setLoading(true)
                const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, data);
                const jwt = response.data.token;
                setLoading(false);
                toast({
                    title: "You have successfully signed up.",
                })
                localStorage.setItem("token", jwt);
                navigate("/signin")
            } catch (error) {
                console.log(error);
                                       
            }
        }
        sendRequest();      
    }
  return (
    <div className="h-screen flex justify-center items-center">
        <div className=" border px-6 pb-4 bg-slate-50 rounded">
                <h1 className=" py-4 text-xl font-bold">Create Account</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Alex" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
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
                        <Button type="submit" className=" w-full">{loading ? <ImSpinner size={20} className=" animate-spin"/> : "Sign Up"}</Button>
                        <p className=" text-sm text-gray-700">Already have an account? <Link to='/signin' className=" text-blue-500 underline">Signin</Link> </p>
                    </form>
                </Form>             
        </div>
    </div>
  )
}

export default AuthSignup