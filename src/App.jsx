import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import Features from './components/Features/Features'
import Story from './components/Story/Story'

import EmailForm from './components/Subscription/EmailForm'
import Testimonials from './components/Testimonials/Testimonials'
import Countdown from './components/Features/Countdown'
import SocialLinks from './components/Footer/SocialLinks'
import Footer from './components/Footer/Footer'
import ProductPreviewLeft from './components/Productpreview/ProductPreviewLeft'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Story/>
    
      <Testimonials/>
      <Countdown/>
      <SocialLinks/>
      <Footer/>
    </div>
  )
}

export default App
