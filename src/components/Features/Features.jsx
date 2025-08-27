import React from 'react';
import { FiGlobe, FiClock, FiWatch, FiAward } from 'react-icons/fi';
import { FaUmbrellaBeach } from 'react-icons/fa';

// Importing placeholder images - you'll replace these with your actual images
import GMTFunctionImage from '../../assets/images/19197584.jpg';
import BeachInspiredImage from '../../assets/images/miami-south-beach-sunrise-with-lifeguard-tower-usa.jpg';
import SwissMovementImage from '../../assets/images/beautiful-shot-house-near-lake-with-mount-ojstrica-bled-slovenia (1).jpg';
import LimitedEditionImage from '../../assets/images/43822.jpg';

export default function Features() {
  const features = [
    {
      image: GMTFunctionImage,
      title: 'GMT Function',
      description: 'Track multiple time zones simultaneously with precision'
    },
    {
      image: BeachInspiredImage,
      title: 'Beach-Inspired',
      description: 'World time zones tied to iconic coastal destinations'
    },
    {
      image: SwissMovementImage,
      title: 'Swiss Movement',
      description: 'Certified chronometer with 72-hour power reserve'
    },
    {
      image: LimitedEditionImage,
      title: 'Limited Edition',
      description: 'Only 500 numbered pieces worldwide'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#9fc8e6] to-[#f4f4f4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-sm uppercase tracking-widest text-montero-blue/80 font-instrument mb-4 block">
            Engineering Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6 font-instrument leading-tight">
            Designed for <span className="italic">Discerning</span> Travelers
          </h2>
          <div className="w-24 h-0.5 bg-montero-blue mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-instrument leading-relaxed px-4">
            Where Swiss precision meets coastal elegance in a timepiece that transcends borders
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 md:p-8 rounded-none hover:rounded-lg transition-all duration-500 shadow-sm hover:shadow-lg text-center border border-gray-100 hover:border-montero-blue/10 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8f5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 md:mb-8 flex items-center justify-center overflow-hidden rounded-full bg-[#f8f5f0] group-hover:bg-white transition-colors duration-500">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 font-instrument text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-instrument leading-relaxed text-sm md:text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}