// import React from 'react'

import NotesGrid from "../notes/FilterActions"
import StatsSection from "../notes/StatsSection"
import Navbar from "../layout/Navbar"
import Footer from "../landing/Footer"
import FadeUp from "../common/FadeUp"

const MainWorkspace = () => {
  return (
   <>
   <Navbar />

   <div className="px-4 sm:px-6 lg:px-8">
   <FadeUp>
     <StatsSection />
   </FadeUp>

   <FadeUp>
     <NotesGrid />
   </FadeUp>
   </div>
  
  
   <Footer />
   </>
  )
}

export default MainWorkspace