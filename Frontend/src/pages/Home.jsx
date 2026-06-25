import HeroSection from "../landing/HeroSection"
import Features from "../landing/Features"
import Footer from "../landing/Footer"
import HowItWorks from "../landing/HowitWorks"
import FadeUp from "../common/FadeUp"
import Navbar from "../layout/Navbar"



const Home = () => {
  return (
    <div className="min-h-screen bg-black">
     <Navbar />

     <div className="px-4 sm:px-6 lg:px-8">
     <FadeUp>
     <HeroSection />
     </FadeUp>

   <FadeUp>
     <HowItWorks />
     </FadeUp>

     <FadeUp>
     <Features />
     </FadeUp>
     </div>

     <Footer />
    </div>
  )
}

export default Home

