import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      {/* Watch-inspired circular elements */}
      <div className="absolute w-80 h-80 rounded-full border-2 border-amber-500/30 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-2 border-amber-500/20 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-amber-500/10"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
        {/* Lottie animation */}
        <div className="w-64 h-64 md:w-80 md:h-80 mb-8">
          <DotLottieReact
            src="https://lottie.host/c9f00573-75f2-4162-bfdd-9439bb96c319/kGkbeC8xi7.lottie"
            loop
            autoplay
          />
        </div>
        
        {/* Text content */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif tracking-wider">
          MONTERO
        </h1>
        <p className="text-amber-300 text-lg md:text-xl mb-8 max-w-md mx-auto font-light tracking-wide">
          Precision Crafted Timepieces
        </p>
        
        {/* Progress bar */}
        <div className="w-64 md:w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-3/4 animate-progress"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-400 text-sm md:text-base animate-pulse">
          Launching our Kickstarter campaign...
        </p>
      </div>
      
      {/* Watch details at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-6 text-gray-500 text-xs">
          <span>Swiss Movement</span>
          <span className="h-1 w-1 bg-amber-500 rounded-full"></span>
          <span>Sapphire Crystal</span>
          <span className="h-1 w-1 bg-amber-500 rounded-full"></span>
          <span>Water Resistant</span>
        </div>
      </div>
      
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 75%; }
        }
        .animate-progress {
          animation: progress 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;