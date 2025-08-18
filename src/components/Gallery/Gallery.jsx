import React, { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import montero1 from '../../assets/images/ChatGPT Image Aug 17, 2025, 11_54_26 PM.png';

const galleryItems = [
  {
    id: 1,
    title: 'Precision Dial Craftsmanship',
    description: 'Our sunburst dial with applied indices catches light like ocean reflections',
    category: 'dial',
    placeholder: montero1
  },
  {
    id: 2,
    title: 'Aerodynamic Case Design',
    description: '40mm stainless steel case with alternating brushed and polished surfaces',
    category: 'case',
    placeholder: montero1
  },
  {
    id: 3,
    title: 'Interchangeable Strap System',
    description: 'Quick-release straps in premium leather and recycled ocean nylon',
    category: 'straps',
    placeholder: montero1
  },
  {
    id: 4,
    title: 'Wrist Presence',
    description: 'Perfect 12.5mm profile balances elegance and durability',
    category: 'wrist-shot',
    placeholder: montero1
  }
];

export default function Gallery() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light font-serif tracking-wide mb-3">Montero Design Gallery</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Where Swiss precision meets coastal inspiration in every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container with Zoom Effect */}
              <div className="aspect-square bg-gray-50 overflow-hidden relative">
                <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)]"
                  style={{
                    transform: hoveredItem === item.id ? 'scale(1.1)' : 'scale(1)',
                    transitionDelay: hoveredItem === item.id ? '0ms' : '150ms'
                  }}
                >
                  <img
                    src={item.placeholder}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Text Overlay */}
              <div className="p-4 bg-white border-t border-gray-100">
                <span className="text-xs text-montero-blue font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif text-gray-900 mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {item.description}
                </p>
              </div>
              
              {/* Zoom Indicator */}
              <div className={`absolute top-3 right-3 bg-white/80 text-black p-1.5 rounded-full transition-all duration-300 shadow-sm ${
                hoveredItem === item.id ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
              }`}>
              
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <button className="text-sm border border-montero-blue text-montero-blue px-6 py-2 rounded-full font-medium hover:bg-montero-blue hover:text-white transition-all duration-300 hover:shadow-md">
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
}