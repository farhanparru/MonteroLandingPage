// components/HeroSection.js
import React, { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import beachVideo from "../../assets/videos/14216244_1920_1080_24fps.mp4";
import Navbar from "./Navbar";
import EmailSignupModal from "./EmailSignupModal"; // Import the modal component

export default function HeroSection() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'reserve' or 'notify'

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
        {/* Enhanced Video Background with loading state */}
        <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 bg-black ${
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
          {/* Improved gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10 py-20 md:py-0 max-w-6xl">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              A Watch That <span className="text-amber-400">Connects</span> You to
              the World.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-gray-200"
            >
              Inspired by iconic beaches, designed for the bold traveler
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl mb-8 md:mb-10 max-w-md mx-auto md:mx-0 text-gray-300 font-light"
            >
              Experience the world through our beach-inspired GMT watch that
              captures the rhythm of the tides
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              {/* Primary CTA - Most important action */}
              <button 
                onClick={() => openModal('reserve')}
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reserve Your Spot on Kickstarter
              </button>

              {/* Secondary CTA - Alternative action */}
              <button 
                onClick={() => openModal('notify')}
                className="border-2 border-white hover:bg-white/10 font-medium px-8 py-4 rounded-full transition-all duration-300"
              >
                Be the First to Know
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="text-center">
            <div className="text-sm mb-2 text-gray-300">Scroll to discover</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Email Signup Modal */}
      <EmailSignupModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        modalType={modalType}
      />

    
    </>
  );
}