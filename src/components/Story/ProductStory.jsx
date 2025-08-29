import React from 'react';
import watchImage from '../../assets/images/ChatGPT Image Aug 20, 2025, 04_24_56 AM.png';

const ProductStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sand-50 to-gold-50 py-12 px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-[Inter]  tracking-wide">MONTERO</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-sand-400 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto font-[Inter] ">Where Time Meets the Tides</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            {/* Product Story */}
            <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-gold-300 mb-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-gold-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 bg-blue-200 rounded-full opacity-30"></div>
              
              <div className="space-y-6 relative z-10">
                <p className="text-lg leading-relaxed text-gray-800 mb-4 not-italic border-l-4 border-gold-500 pl-4">
                  Meet Montero, a world-time watch crafted for dreamers, explorers, and lovers of the sea.
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mb-4 not-italic border-l-4 border-gold-500 pl-4">
                  Inspired by 8 of the world's most iconic beaches, each with its unique time zone, this watch tells more than time — it tells a story.
                </p>
                <p className="text-lg leading-relaxed text-gray-800 mb-4 not-italic border-l-4 border-gold-500 pl-4">
                  From the shores of Ibiza to the sands of Bora Bora, Montero connects your wrist to the spirit of adventure.
                </p>
                <p className="text-lg leading-relaxed text-gray-800 not-italic border-l-4 border-gold-500 pl-4">
                  It's not just about where you are — it's about where you're meant to be.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 p-6 rounded-xl mb-8 shadow-lg">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Montero was born from countless hours spent on beaches around the world, watching the tides change and the sun set over different horizons.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Each time zone in our GMT complication represents a special coastal destination, connecting you to those moments no matter where you are.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                This limited edition timepiece is our tribute to the explorers, the dreamers, and those who measure time not in hours, but in experiences.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl hover:from-gold-600 hover:to-gold-700 flex items-center justify-center">
                <span>Back on Kickstarter</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              <button className="px-8 py-4 border-2 border-gold-500 text-gold-600 rounded-full font-medium hover:bg-gold-50 transition-colors duration-300 flex items-center justify-center">
                <span>Explore Features</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="watch-image relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 hover:shadow-3xl">
              <img 
                src={watchImage} 
                alt="Montero Watch on beach" 
                className="w-full h-auto object-cover rounded-2xl transform transition-all duration-500 hover:scale-105"
              />
              {/* UAE-inspired decorative frame */}
              <div className="absolute inset-0 border-4 border-gold-300 rounded-2xl pointer-events-none opacity-70"></div>
              {/* Water reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-80 animate-pulse delay-300"></div>
            </div>
            
            {/* Decorative Arabic pattern */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 C70 10, 90 30, 90 50 C90 70, 70 90, 50 90 C30 90, 10 70, 10 50 C10 30, 30 10, 50 10 Z" 
                  stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* UAE-inspired pattern divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>
        
        {/* Limited edition badge */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gold-500 text-black px-6 py-2 rounded-full text-sm font-medium shadow-md">
            Limited Edition • Only 500 Pieces Worldwide
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStory;