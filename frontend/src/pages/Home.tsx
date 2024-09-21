import HomeBody from "@/components/HomeBody"
import Navbar from "../components/Navbar"
import FeatureSection from "@/components/FeatureSection"
import UserReviews from "@/components/Reviews"
import LandingFooter from "@/components/LandingFooter"

const Home = () => {
  return (
    <div className=" w-full overflow-hidden h-full flex flex-col">
      <Navbar/>
      <HomeBody />
      <FeatureSection />
      <UserReviews />
      <LandingFooter />
    </div>
  )
}

export default Home
