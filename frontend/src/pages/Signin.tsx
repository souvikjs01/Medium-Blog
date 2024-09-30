
import AuthSignin from "@/components/AuthSignin"
import Quote from "../components/Quote"


const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <AuthSignin />
      </div>
      <div className="hidden md:block">
        <Quote type='signin'/>
      </div>
    </div>
  )
}

export default Signin


// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM0N2NlYTM2LTJhZWQtNDM0Mi1hNjNjLWQ4NDZkN2JmMWY5ZSJ9.xPa8PkOiplD_gPBBMxyD_rCXT6Uh_nBly_n9FZjVAxA"
// email: john1@gmail.com
// pass: john@1