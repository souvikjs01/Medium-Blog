import AuthSignup from "@/components/AuthSignup"
import Quote from "../components/Quote"


const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <AuthSignup/>
      </div>
      <div className="hidden md:block">
        <Quote/>
      </div>
    </div>
  )
}

export default Signup
