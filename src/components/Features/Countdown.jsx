/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailSignupModal from "../HeroSection/EmailSignupModal";

export default function Countdown() {
  // Set launch date to September 1, 2025
  const [launchDate] = useState(new Date('2025-09-01T00:00:00'));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isLaunchTime, setIsLaunchTime] = useState(false);
  
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
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      // Check if we've reached launch time
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsLaunchTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [launchDate]);

  const openModal = (type) => {
    setModalType(type);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-sans mb-4 tracking-tight bg-gradient-to-r from-blue-600 bg-clip-text text-transparent">
          MONTERO
        </h2>
        <p className="text-xl text-gray-300 font-times">
          Launching September 2025 • Be The First To Know
        </p>
      </motion.div>

      {/* Countdown Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
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
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white bg-opacity-10 backdrop-blur-md rounded-xl md:rounded-2xl shadow-xl border border-white border-opacity-20 flex items-center justify-center mb-3">
              <AnimatePresence mode="wait">
                <motion.span
                  key={unit.value}
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <div className="absolute -inset-1 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 opacity-0 blur transition duration-300"></div>
            </div>
            <span className="text-sm md:text-base font-semibold tracking-wider text-gray-300 font-times">
              {unit.label}
            </span>
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
        <p className="font-times md:text-xl text-gray-400 leading-relaxed mb-8">
          Discover the elegance of time with Montero – where precision engineering meets exquisite craftsmanship. 
          Our inaugural collection redefines luxury watchmaking with Swiss movements, premium materials, 
          and timeless design. Join the exclusive waitlist for early access and special launch offers.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 text-white rounded-full text-base font-semibold shadow-lg"
            onClick={() => openModal('notify')}
          >
            Notify Me on Launch
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border-2 from-blue-600 rounded-full text-base font-semibold shadow-lg"
            onClick={() => openModal('reserve')}
          >
            Reserve Your Watch
          </motion.button>
        </div>
        
        {/* Launch Message */}
        {isLaunchTime && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-4 bg-green-900 bg-opacity-30 rounded-lg border border-green-500"
          >
            <p className="text-green-300 font-medium font-times">
              🎉 The Montero collection is now available! Limited pieces remaining.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Email Signup Modal */}
      <EmailSignupModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        modalType={modalType}
      />


    
    </div>
  );
}