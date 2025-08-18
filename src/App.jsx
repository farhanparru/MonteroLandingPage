import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import Features from './components/Features/Features'
import Story from './components/Story/Story'
import Gallery from './components/Gallery/Gallery'
import EmailForm from './components/Subscription/EmailForm'
import Testimonials from './components/Testimonials/Testimonials'
import Countdown from './components/Features/Countdown'
import SocialLinks from './components/Footer/SocialLinks'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <Story/>
      <Gallery/>
      <EmailForm/>
      <Testimonials/>
      <Countdown/>
      <SocialLinks/>
      <Footer/>
    </div>
  )
}

export default App
