import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Story from "./components/Story/BeachesWorld";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Countdown from "./components/Features/Countdown";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Technology from "./components/HeroSection/Technology";
import FrequentlyAskedQuestions from "./components/Features/Frequentlyaskedquestions";
import ProductStory from "./components/Story/ProductStory";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // After loading finishes, show content after a brief transition
      setTimeout(() => setShowContent(true), 500);
    }, 4000); // Simulate 3 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className={`content-container ${showContent ? 'visible' : ''}`}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProductStory/>
                  <Story />
                  <Features />
                  <FrequentlyAskedQuestions/>
                  <Testimonials />
                  <Technology/>
                  <Countdown />
                </>
              }
            />
            <Route path="/story" element={<Story />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;