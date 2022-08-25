import { useState } from "react";
import { useTheme } from 'next-themes'


import NavBar from "./Component/NavBar"
import HeroSection from "./Component/HeroSection"
import Description from "./Component/Description"
import TeamSection from "./Component/TeamSection"
import GroupList from "./Component/GroupList"
import Testimonials from "./Component/Testimonials"
import FaqComponent from "./Component/Faq"
import { useRouter } from 'next/router'
const Home = () => {
  const {theme,setTheme} = useTheme()

  return (
    <div >
    {/* <!-- Navbar --> */}
    <NavBar 
    isHomePage={true}
    />
    {/* <!-- Navbar --> */}
   <HeroSection />
   <Description />
   <TeamSection />
   <GroupList />
   <Testimonials />
   <FaqComponent />



    </div>
  )
}

export default Home
