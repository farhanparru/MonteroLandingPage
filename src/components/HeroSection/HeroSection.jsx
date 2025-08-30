// components/HeroSection.js
import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import beachVideo from "../../assets/videos/14216244_1920_1080_24fps.mp4";
import Navbar from "./Navbar";
import EmailSignupModal from "./EmailSignupModal";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0  ${
              isVideoLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-1000`}
          ></div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={beachVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10 py-20 md:py-0 max-w-6xl">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            {/* Headline Section - Clear and Readable */}
            <motion.div 
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-2 md:mb-4" >
                <span className="block text-white drop-shadow-md">A Watch That</span>
                <span className="block text-white drop-shadow-md">Connects You</span>
              </h1>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-gray-200 font-light max-w-xl mx-auto md:mx-0 text-lg sm:text-xl md:text-2xl"
            >
              Inspired by iconic beaches, designed for the bold traveler. <br className="hidden sm:block" />
              Built for those who value precision, durability, and timeless
              beauty.
            </motion.h2>

            {/* Buttons with responsive text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() => openModal("reserve")}
                className="bg-gradient-to-r from-green-800 to-emerald-800 hover:from-green-700 hover:to-emerald-800 
               text-white font-bold px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base uppercase tracking-wider shadow-lg 
               border border-white transition duration-300"
              >
                <span className="sm:hidden">Reserve Now</span>
                <span className="hidden sm:inline">Reserve Your Spot on Kickstarter</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <EmailSignupModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        modalType={modalType}
      />
    </>
  );
}