'use client'

import About from "../Components/Homepage/About"
import Activities from "../Components/Homepage/Activities"
import TripCards from "../Components/Homepage/Cards"
import LogoCarousel from "../Components/Homepage/Curosal"
import TravelGallery from "../Components/Homepage/Articles"
import Landing from "../Components/Homepage/Landing"
import Navbar from "../Components/Homepage/Navbar"
import Season from "../Components/Homepage/Season"
import Whychoose from "../Components/Homepage/Whychoose"
import TravelArticles from "../Components/Homepage/Articles"
import Testimonials from "../Components/Homepage/Testimonials"
import DestinationSection from "../Components/Homepage/Destinations"
import Footer from "../Components/Homepage/Footer"
import Premium from "../Components/Homepage/Premium"
import Culturals from "../Components/Homepage/Cultural"
import BentoGallery from "../Components/Homepage/Gallary"

export default function Homepage(){
   return(
    <div className="overflow-x-hidden mx-auto">
         <div>
       <Landing/>
       <Culturals/>
       {/* <LogoCarousel/> */}
              <Activities/>
       <About/>
       <TripCards/>
      <Premium/>
      <BentoGallery/>
       <Whychoose/>
       <DestinationSection/>
       <Testimonials/>
       <TravelArticles/>

        
    </div>
    </div>
   )
}