import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Montero Logo" className="h-16 sm:h-20" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision crafted timepieces blending traditional watchmaking with contemporary design for the modern era.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 pb-1 border-b border-gray-700">
              Collections
            </h4>
            <ul className="space-y-2">
              {['Automatic Series','Chronograph','Diver\'s Watches','Limited Editions','Custom Designs'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 pb-1 border-b border-gray-700">
              Customer Service
            </h4>
            <ul className="space-y-2">
              {['Contact Us','FAQs','Shipping Policy','Returns & Exchanges','Warranty'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Montero Watches. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            {['Privacy Policy','Terms of Service','Cookie Policy','Accessibility'].map((item, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-amber-400 transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
            Crafted with precision in Switzerland
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
