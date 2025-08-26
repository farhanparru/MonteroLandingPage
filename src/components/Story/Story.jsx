import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import watchImage from '../../assets/images/ChatGPT Image Aug 20, 2025, 04_24_56 AM.png';

// Import beach images
import IbizaBeach from '../../assets/beaches/IbizaBeach.jpg';
import BoraBoraBeach from '../../assets/beaches/BoraBoraBeach.jpg';
import BaliBeach from '../../assets/beaches/BaliBeach.jpg';
import JumeirahBeach from '../../assets/beaches/JumeirahBeach.jpg'
import PatongBeach from '../../assets/beaches/PatongBeach.jpg'
import MadeiraBeach from '../../assets/beaches/MadeiraBeach.jpg'
import CubaCabanaBeach from '../../assets/beaches/CubaCabanaBeach.jpg'
import MiamiBeach from '../../assets/beaches/MiamiBeach.jpg'

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

// Beach data with Google Maps URLs and images
const beachData = [
  { 
    name: 'Ibiza Beach', 
    description: 'White Island, Spain',
    mapsUrl: 'https://maps.app.goo.gl/RU2g9Uf6W4FtgHDS8',
    image: IbizaBeach
  },
  { 
    name: 'Jumeirah Beach', 
    description: 'Dubai, UAE',
    mapsUrl: 'https://maps.app.goo.gl/FBvYRpVNoL3Vjkvk6',
    image: JumeirahBeach
  },
  { 
    name: 'Patong Beach', 
    description: 'Phuket, Thailand',
    mapsUrl: 'https://maps.app.goo.gl/quYniGS1Gq2v4W267',
    image: PatongBeach
  },
  { 
    name: 'Bali Beach', 
    description: 'Island of Gods, Indonesia',
    mapsUrl: 'https://maps.app.goo.gl/qQjDvy4mW1LUCDt69',
    image: BaliBeach
  },
  { 
    name: 'Madeira Beach', 
    description: 'Portugal',
    mapsUrl: 'https://maps.app.goo.gl/8TA4QJ4uNnbs2ggC6',
    image: MadeiraBeach
  },
  { 
    name: 'Cuba Cabana Beach', 
    description: 'Havana, Cuba',
    mapsUrl: 'https://maps.app.goo.gl/XAFR3n68J1LkNox46',
    image: CubaCabanaBeach
  },
  { 
    name: 'Miami Beach', 
    description: 'Florida, USA',
    mapsUrl: 'https://maps.app.goo.gl/56bfz8CnXjEhPdbcA',
    image: MiamiBeach
  },
  { 
    name: 'Bora Bora Beach', 
    description: 'French Polynesia',
    mapsUrl: 'https://maps.app.goo.gl/X3D438vaoigFV8PT9',
    image: BoraBoraBeach
  }
];

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

  const openGoogleMaps = (url) => {
    window.open(url, '_blank');
  };

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
              {/* Product Story */}
              <div className="bg-white/80 p-6 rounded-xl border border-montero-blue/20 mb-6">
                <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans italic mb-4">
                  Meet Montero, a world-time watch crafted for dreamers, explorers, and lovers of the sea.
                </p>
                <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans italic mb-4">
                  Inspired by 8 of the world's most iconic beaches, each with its unique time zone, this watch tells more than time — it tells a story.
                </p>
                <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans italic mb-4">
                  From the shores of Ibiza to the sands of Bora Bora, Montero connects your wrist to the spirit of adventure.
                </p>
                <p className="story-paragraph text-lg leading-relaxed text-gray-700 font-sans italic">
                  It's not just about where you are — it's about where you're meant to be.
                </p>
              </div>
              
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
              <button className="px-8 py-3 bg-montero-blue text-black rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
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

        <div className="mt-20 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-serif text-center mb-12">Inspired by 8 Iconic Beaches Around the World</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beachData.map((beach, index) => (
              <div 
                key={index} 
                className="beach-item text-center cursor-pointer relative group"
                onClick={() => openGoogleMaps(beach.mapsUrl)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md h-48 mb-4 group-hover:shadow-xl transition-all duration-300">
                  {/* Beach image */}
                  <img 
                    src={beach.image} 
                    alt={`${beach.name} Beach`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Beach name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white font-medium text-sm">{beach.name}</p>
                    <p className="text-white/80 text-xs">{beach.description}</p>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-montero-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                
                  
                  {/* Click instruction */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 text-white text-xs py-1 px-2 rounded-full">
                      Click to view on Google Maps
                    </div>
                  </div>
                </div>
                
                <p className="font-medium text-gray-800 group-hover:text-montero-blue transition-colors duration-300">
                  {beach.name}
                </p>
              </div>
            ))}
          </div>
          
          {/* Note about the maps */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>Click on any beach to view its location directly in Google Maps</p>
          </div>
        </div>
      </div>
    </section>
  );
}