import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import watchImage from '../../assets/images/ChatGPT Image Aug 20, 2025, 04_24_56 AM.png'; // Replace with your actual image

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Story() {
  useEffect(() => {
    // Auto-typing animation for paragraphs
    const paragraphs = document.querySelectorAll('.story-paragraph');
    
    paragraphs.forEach((para, index) => {
      const originalText = para.textContent;
      para.textContent = '';
      
      gsap.to(para, {
        duration: originalText.length * 0.03,
        delay: index * 1.5,
        text: originalText,
        ease: "none"
      });
    });

    // Subtle continuous animation
    gsap.to(".watch-image", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animate decorative elements
    gsap.from(".decorative-circle", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      stagger: 0.3,
      ease: "back.out(1.7)"
    });

    // Animate the title
    gsap.from(".section-title", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-montero-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-montero-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-light mb-8 font-serif tracking-wide section-title">
              More Than a Watch<br />
              <span className="font-medium text-montero-blue">A Journey Through Time</span>
            </h2>
            
            <div className="space-y-6">
              <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans">
                Montero was born from countless hours spent on beaches around the world, watching the tides change and the sun set over different horizons.
              </p>
              <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans">
                Each time zone in our GMT complication represents a special coastal destination, connecting you to those moments no matter where you are.
              </p>
              <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans">
                This limited edition timepiece is our tribute to the explorers, the dreamers, and those who measure time not in hours, but in experiences.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-montero-blue text-black rounded-full font-mediumtransition-colors duration-300 shadow-md hover:shadow-lg">
                Back on Kickstarter
              </button>
              <button className="px-8 py-3 border border-montero-blue text-montero-blue rounded-full font-medium hover:bg-montero-blue/10 transition-colors duration-300">
                Explore Features
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="watch-image relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={watchImage} 
                alt="Montero Watch on beach" 
                className="w-full h-auto object-cover rounded-2xl transform transition-all duration-500 hover:scale-105"
              />
              {/* Water reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-montero-blue/30 rounded-full decorative-circle"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-montero-blue/20 rounded-full decorative-circle"></div>
            
            {/* Floating tagline */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg rotate-90 origin-center hidden lg:block">
              <p className="text-sm font-medium text-montero-blue whitespace-nowrap">8 Time Zones • 8 Beaches</p>
            </div>
          </div>
        </div>

        {/* Beach inspiration section */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-serif text-center mb-12">Inspired by 8 Iconic Beaches Around the World</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Ibiza', 'Bora Bora', 'Maldives', 'Bali', 'Copacabana', 'Santorini', 'Maui', 'Seychelles'].map((beach, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-montero-blue/10 flex items-center justify-center mb-3 group-hover:bg-montero-blue/20 transition-colors duration-300">
                  <span className="text-montero-blue font-medium">{index + 1}</span>
                </div>
                <p className="font-medium text-gray-800">{beach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}