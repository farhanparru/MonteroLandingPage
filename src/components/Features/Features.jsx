import React from 'react';
// Importing placeholder images - you'll replace these with your actual images
import DualTimePrecisionImage from '../../assets/images/WhatsApp Image 2025-08-28 at 09.24.05_1dfd7460.jpg';
import WorldInspiredDesignImage from '../../assets/images/nasa-vhSz50AaFAs-unsplash.jpg';
import BuilttoLastImage from '../../assets/images/WhatsApp Image 2025-08-28 at 09.24.11_587f7715.jpg';
import LimitedCollectorsEditionImage from '../../assets/images/pexels-rachel-claire-7263401.jpg';

export default function Features() {
  const features = [
    {
      image: DualTimePrecisionImage,
      title: 'Dual-Time Precision',
      description: 'Seiko GMT Movement Track two time zones at once with a reliable Seiko NH34 automatic GMT movement, enhanced for smoother performance and long-term durability.'
    },
    {
      image: WorldInspiredDesignImage,
      title: 'World-Inspired Design',
      description: 'Eight Iconic Beach Timezones The bezel is marked with time offsets for 8 famous beaches around the world, blending functionality with travel passion and emotional connection.'
    },
    {
      image: BuilttoLastImage,
      title: 'Built to Last',
      description: '3-Year International Warranty Crafted for durability and confidence, your watch is covered with a free 3-year global warranty. Just deliver it to our store, and we’ll take care of the rest.'
    },
    {
      image: LimitedCollectorsEditionImage,
      title: 'Limited Collector’s Edition',
      description: 'Crafted in strictly limited numbers, Montero is not mass-produced. The first edition will include at least 300 individually numbered timepieces, reserved exclusively for Kickstarter backers. Once the campaign ends and the pieces are gone — they’re gone forever.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#9fc8e6] to-[#f4f4f4]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-sm uppercase tracking-widest text-montero-blue/80 font-[Inter] mb-4 block">
            Engineering Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-[Inter] font-bold text-gray-900 mb-6 leading-snug">
            Designed for <span>Discerning</span> Travelers
          </h2>
          <div className="w-24 h-0.5 bg-montero-blue mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-instrument leading-relaxed px-4">
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
                <div className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-6 md:mb-8 flex items-center justify-center overflow-hidden rounded-full bg-[#f8f5f0] group-hover:bg-white transition-colors duration-500">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 font-[Inter] font-semibold text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-[Inter] leading-relaxed">
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
