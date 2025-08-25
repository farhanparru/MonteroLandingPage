import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Story from "./components/Story/Story";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Countdown from "./components/Features/Countdown";
import SocialLinks from "./components/Footer/SocialLinks";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Story />
              <Features />
              <Testimonials />
              <Countdown />
             
            </>
          }
        />
        <Route path="/story" element={<Story />} />
      </Routes>
    <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
