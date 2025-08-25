import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-50">
      <h3 className="text-2xl font-bold mb-8">OUR SOCIAL MEDIA</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/montero.watch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center mb-3">
            <FaInstagram size={32} className="text-pink-600" />
          </div>
          <p className="text-3xl font-bold mb-1">550K</p>
          <p className="text-gray-600">carbonate</p>
        </a>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/share/1B9B4SX9vG/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center mb-3">
            <FaFacebook size={32} className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold mb-1">160K</p>
          <p className="text-gray-600">sureme</p>
        </a>

        {/* YouTube */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-center mb-3">
            <FaYoutube size={32} className="text-red-600" />
          </div>
          <p className="text-3xl font-bold mb-1">1.4M</p>
          <p className="text-gray-600">volume</p>
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;