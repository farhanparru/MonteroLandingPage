import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import monterologo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="font-['Inter'] bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src={monterologo}
                alt="Montero Logo"
                className="h-10 md:h-16 w-auto object-contain filter brightness-110 transition-all duration-300"
              />
            </div>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-xs">
              Precision crafted timepieces blending traditional watchmaking with
              contemporary design for the modern era.
            </p>

            {/* Social Media Links with React Icons */}
            <div className="flex space-x-5 pt-4">
              <a
                href="https://www.facebook.com/share/1B9B4SX9vG/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/montero.watch"
                className="text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xl font-semibold mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Collections
            </h4>
            <ul className="space-y-3">
              {[
                'Automatic Series',
                'Chronograph',
                "Diver's Watches",
                'Limited Editions',
                'Custom Designs',
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-xl flex items-center group"
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
            <h4 className="text-xl font-semibold mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Customer Service
            </h4>
            <ul className="space-y-3">
              {[
                'Contact Us',
                'FAQs',
                'Shipping Policy',
                'Returns & Exchanges',
                'Warranty',
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-xl flex items-center group"
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
            <h4 className="text-xl font-[Inter] mb-5 pb-2 relative inline-block border-b-2 border-amber-400">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300 text-xl">
              <p className="flex items-start">
                <FaMapMarkerAlt className="h-6 w-6 mr-3 mt-1 text-amber-400" />
            Al Khor Street, Moza Plaza 1, Shop No. 5, Dubai, United Arab Emirates
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="h-6 w-6 mr-3 text-amber-400" />
                +971 42671124
              </p>
              <p className="flex items-center">
                <FaEnvelope className="h-6 w-6 mr-3 text-amber-400" />
                Sales@montres.ae
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
          <div className="text-gray-500 text-xl md:text-base order-2 md:order-1">
            &copy; {new Date().getFullYear()} Montero Watches. All rights
            reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-sm md:text-base order-1 md:order-2 mb-4 md:mb-0">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
              'Accessibility',
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-500 hover:text-amber-400 transition-colors duration-300 relative after:content-[''] after:absolute after:-right-3 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-0.5 after:bg-gray-500 last:after:content-none"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-gray-500 text-sm flex items-center order-3">
            <FaMapMarkerAlt className="h-4 w-4 mr-1" />
            Crafted with precision in Dubai
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
