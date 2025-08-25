import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Montero Logo" className="h-16 sm:h-20 filter brightness-110" />
             
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Precision crafted timepieces blending traditional watchmaking with contemporary design for the modern era.
            </p>
            
            {/* Social Media Links with Large Icons */}
            <div className="flex space-x-5 pt-4">
              <a 
                href="https://www.facebook.com/share/1B9B4SX9vG/?mibextid=wwXIfr" 
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/montero.watch" 
                className="text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Collections
            </h4>
            <ul className="space-y-3">
              {['Automatic Series','Chronograph','Diver\'s Watches','Limited Editions','Custom Designs'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-px bg-amber-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {['Contact Us','FAQs','Shipping Policy','Returns & Exchanges','Warranty'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-2 h-px bg-amber-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-0.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Luxury Avenue, Geneva, Switzerland
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +41 22 345 6789
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@monterowatches.com
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 relative mb-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-gray-500 text-xs sm:text-sm order-2 md:order-1">
            &copy; {new Date().getFullYear()} Montero Watches. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs sm:text-sm order-1 md:order-2 mb-4 md:mb-0">
            {['Privacy Policy','Terms of Service','Cookie Policy','Accessibility'].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-gray-500 hover:text-amber-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-0.5 after:bg-gray-500 last:after:content-none"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-xs sm:text-sm flex items-center order-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Crafted with precision in Switzerland
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;