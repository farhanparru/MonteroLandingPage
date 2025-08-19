import React from "react";
import { motion } from "framer-motion";
import monteroLogo from "../../assets/images/logo.png";
import beachVideo from "../../assets/videos/14216244_1920_1080_24fps.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={beachVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10 py-20 md:py-0">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full mb-6 md:mb-8 max-w-xs mx-auto md:mx-0"
          >
            <img
              src={monteroLogo}
              alt="Montero"
              className="w-full h-auto max-h-12 md:max-h-16 object-contain"
              loading="eager"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            A Watch That Connects You to the World.
            <br />
            Inspired by iconic beaches, designed for the bold traveler
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg sm:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0"
          >
            Experience the world through our beach-inspired GMT watch that
            captures the rhythm of the tides
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <button className="border-2 border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium sm:font-bold text-sm sm:text-base">
              Notify Me at Launch
            </button>
            <button className="border-2 border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium sm:font-boldtext-sm sm:text-base">
              Join the Waitlist
            </button>
          </motion.div>
        </div>

        {/* Watch area (you can add a floating watch animation later) */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 px-4 sm:px-0">
          <div className="relative group">{/* Future watch animation */}</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
    </section>
  );
}
