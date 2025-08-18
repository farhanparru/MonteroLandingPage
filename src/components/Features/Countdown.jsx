/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Countdown() {
  // Dynamic launch date
  const [launchDate, setLaunchDate] = useState(new Date('2025-12-31T00:00:00'));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate time left
  function calculateTimeLeft() {
    const difference = launchDate - new Date();
    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60))
    };
  }

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  // Optional: Action when countdown reaches zero
  useEffect(() => {
    if (
      timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0
    ) {
      console.log("Launch time reached!");
      // Trigger any action here (modal, redirect, enable button)
    }
  }, [timeLeft]);

  return (
    <div className="max-w-4xl mx-auto text-center px-6 py-12 relative">
      {/* Animated Glowing Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="text-5xl md:text-6xl font-bold mb-12 tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        COMING SOON
      </motion.h2>

      {/* Countdown Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { value: timeLeft.days, label: 'DAYS' },
          { value: timeLeft.hours, label: 'HOURS' },
          { value: timeLeft.minutes, label: 'MINUTES' },
          { value: timeLeft.seconds, label: 'SECONDS' }
        ].map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-xl border border-white border-opacity-20 flex items-center justify-center mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={unit.value}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            </div>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-lg md:text-xl font-semibold tracking-wider text-gray-300"
            >
              {unit.label}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Description Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="max-w-2xl mx-auto"
      >
        <motion.p 
          whileHover={{ x: 5 }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
        >
         Discover the elegance of time with Montero – the official destination for luxury watches. Our curated collection combines precision, craftsmanship, and timeless design. Stay tuned for our official launch and be the first to explore the world of Montero – where every second counts..
        </motion.p>
        
        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Notify Me on Launch
        </motion.button>
      </motion.div>
    </div>
  );
}
