import React from 'react';
import { FiGlobe, FiClock, FiWatch, FiAward } from 'react-icons/fi';
import { FaUmbrellaBeach } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FiGlobe className="w-full h-full" />,
      title: 'GMT Function',
      description: 'Track multiple time zones simultaneously with precision'
    },
    {
      icon: <FaUmbrellaBeach className="w-full h-full" />,
      title: 'Beach-Inspired',
      description: 'World time zones tied to iconic coastal destinations'
    },
    {
      icon: <FiWatch className="w-full h-full" />,
      title: 'Swiss Movement',
      description: 'Certified chronometer with 72-hour power reserve'
    },
    {
      icon: <FiAward className="w-full h-full" />,
      title: 'Limited Edition',
      description: 'Only 500 numbered pieces worldwide'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#9fc8e6] to-[#f4f4f4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-montero-blue/80 font-medium mb-4 block">
            Engineering Excellence
          </span>
          <h2 className="text-5xl font-light text-gray-900 mb-6 font-serif leading-tight">
            Designed for <span className="italic">Discerning</span> Travelers
          </h2>
          <div className="w-24 h-0.5 bg-montero-blue mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Where Swiss precision meets coastal elegance in a timepiece that transcends borders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-none hover:rounded-lg transition-all duration-500 shadow-sm hover:shadow-lg text-center border border-gray-100 hover:border-montero-blue/10 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f8f5f0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center text-montero-blue bg-[#f8f5f0] rounded-full group-hover:bg-white transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 font-serif text-gray-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-sans leading-relaxed text-[15px]">
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