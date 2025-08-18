import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import watchImage from '../../assets/images/Snapshot - 1-2.jpg'; // Replace with your actual image

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
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-4xl font-light mb-8 font-serif tracking-wide">
              More Than a Watch<br />
              <span className="font-medium">A Journey Through Time</span>
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
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="watch-image relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={watchImage} 
                alt="Montero Watch on beach" 
                className="w-full h-auto object-cover rounded-xl transform transition-all duration-500 hover:scale-105"
              />
              {/* Water reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-montero-blue/30 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 border-2 border-montero-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}