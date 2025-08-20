import React from 'react';

const Story = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Meet <span className="text-blue-600">Montero</span>, a world-time watch crafted for dreamers
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Inspired by 8 of the world's most iconic beaches, each with its unique time zone, this watch tells more than time — it tells a story.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              From the shores of Ibiza to the sands of Bora Bora, Montero connects your wrist to the spirit of adventure.
            </p>
            
            <p className="text-xl font-medium text-gray-900 italic">
              It's not just about where you are — it's about where you're meant to be.
            </p>
            
            <div className="pt-6">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Discover the Collection
              </button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Watch face */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-800 rounded-full flex items-center justify-center">
                  {/* Watch details */}
                  <div className="w-56 h-56 rounded-full border-2 border-blue-300 border-opacity-50 flex flex-col items-center justify-center relative">
                    {/* Watch markers */}
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-2 bg-blue-200"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-26.5rem)`
                        }}
                      ></div>
                    ))}
                    
                    {/* Watch hands */}
                    <div className="absolute w-1 h-8 bg-red-500 rounded-full transform -translate-y-4"></div>
                    <div className="absolute w-0.5 h-12 bg-blue-200 rounded-full transform -translate-y-6"></div>
                    
                    {/* Center point */}
                    <div className="w-3 h-3 bg-red-500 rounded-full z-10"></div>
                    
                    {/* Beach names */}
                    <div className="absolute text-xs text-blue-100 font-medium" style={{ top: '10%' }}>Ibiza</div>
                    <div className="absolute text-xs text-blue-100 font-medium" style={{ right: '10%', top: '45%' }}>Bora Bora</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">GMT+1</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">GMT-10</span>
              </div>
            </div>
          </div>
        </div>
        
     
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Story;