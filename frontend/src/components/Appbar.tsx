import { userNameState } from "@/atoms/atoms"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { PostSchema, PostType } from "@/validation/postValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { ImSpinner } from "react-icons/im";
import { useToast } from "@/hooks/use-toast";


const Appbar = () => {
  const name = useRecoilValue(userNameState);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()
  useEffect(() => {
    if (name) {
      localStorage.setItem('name', name);
    }
  }, [name]);
  const storedName = localStorage.getItem('name') || 'Anonymous';
  const firstLetter = storedName[0];
  const navigate = useNavigate();
  const form = useForm<PostType>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
        title: "",
        content: "",
    },
  })
  const onSubmit = async (data: PostType) => { 
    try {
      const title = data.title;
      const content = data.content;
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
        title,
        content
      }, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      form.reset()  
      setOpen(false);
      setLoading(false);      
      toast({
        title: "Blog posted successfully",
      })
      navigate(`/blog/${res.data.id}`)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <nav className="flex justify-between items-center w-full px-4 md:px-12 py-4 border-b border-black">
      <div>
        <p className="font-bold text-2xl md:text-3xl font-serif">Medium</p>
      </div>
        <div className="flex flex-row items-center justify-center space-x-8">
          <div>            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <img src="/post.png" alt="post" className=" h-6 w-6"/>
              </DialogTrigger>
              <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                  <DialogHeader>
                    <DialogTitle>Create your blog</DialogTitle>
                    <DialogDescription>
                      Write your blog here and Click submit when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-4' >                      
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Enter blog title" {...field} />
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea rows={8} placeholder="Blog Description" {...field} />
                            </FormControl>
                              <FormMessage/>
                          </FormItem>
                        )}
                      />
                      <Button type='submit' className=" w-full">{loading ? <ImSpinner className=" animate-spin" size={20} /> : 'Post'}</Button>
                    </form>
                  </Form>
             </DialogContent>
            </Dialog>
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-200 flex justify-center items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                  <p className=" text-xl font-semibold p-4">{firstLetter.toUpperCase()}</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" border px-4 py-2 font-semibold cursor-pointer">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() =>{
                      localStorage.removeItem('token');
                      localStorage.removeItem('name');
                      navigate('/');
                    }}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
    </nav>


    // <div className="border-b border-black flex justify-between px-10 py-4">
    //   <Link to={'/'}>
    //     <div>
    //       <p className=" font-bold text-2xl font-serif">Medium</p>
    //     </div>
    //   </Link>
      
    //   <div className=" flex justify-center items-center">
    //     <Link to={'/publish'}> 
    //       <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-1 text-center me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New</button>
    //     </Link>
    //     <Avatar size={'big'}/>
    //   </div>
    // </div>
  )
}

export default Appbar
