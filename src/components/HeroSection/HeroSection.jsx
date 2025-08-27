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
            {/* Headline - Fixed to exactly two lines */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bold mb-4 leading-tight tracking-tight font-instrument"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.1'
              }}
            >
              <span className="block">A Watch That Connects</span>
              <span className="block">You to the World</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-bold mb-6 text-gray-200 font-times"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                lineHeight: '1.2'
              }}
            >
              Inspired by iconic beaches, designed for the bold traveler
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8 md:mb-10 max-w-md mx-auto md:mx-0 text-gray-300 font-bold font-times"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: '1.4'
              }}
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
              <button
                onClick={() => openModal("reserve")}
                className="bg-gradient-to-r from-green-800 to-emerald-800 hover:from-green-700 hover:to-emerald-800 text-white font-bold px-6 py-3 rounded-lg text-base uppercase tracking-wider shadow-lg font-times"
              >
                Reserve Your Spot on Kickstarter
              </button>

              <button
                onClick={() => openModal("notify")}
                className="border-2 border-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg transition-all duration-300 font-times"
              >
                Be the First to Know
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
  )
}