// import HeroSection from "./dashboard/HeroSection"
// import Features from "./Features"
// import Footer from "./Footer"
// import HowItWorks from "./HowitWorks"

// import Navbar from "./layout/Navbar"



// const App = () => {
//   return (
//     <div className="min-h-screen bg-black">

        


//      <Navbar />
//      <HeroSection />
//     <HowItWorks />
//      <Features />
//      <Footer />
//     </div>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainWorkspace from "./pages/MainWorkspace";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PreLoader from "./common/PreLoader";
import { useState,useEffect } from "react";

function App() {
   

  const {user}=useAuth();

 const [loading, setLoading] = useState(
  !sessionStorage.getItem("preloaderShown")
);

useEffect(() => {
  if (!loading) return;

  const timer = setTimeout(() => {
    sessionStorage.setItem("preloaderShown", "true");
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, [loading]);


if (loading) {
  return <PreLoader />;
}
 
  return (
    <>
     <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#18181b",
            color: "#fff",
            border: "1px solid #27272a",
          },
        }}
      />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/workspace" 
       element={
    user ? <MainWorkspace /> : <Navigate to="/" />
  }
       />
    </Routes>
    </>
  );
}

export default App;