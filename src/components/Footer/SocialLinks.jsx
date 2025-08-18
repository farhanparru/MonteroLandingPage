import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-50">
      <h3 className="text-2xl font-bold mb-8">OUR SOCIAL MEDIA</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {/* Instagram */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-3">
            <FaInstagram size={32} className="text-pink-600" />
          </div>
          <p className="text-3xl font-bold mb-1">550K</p>
          <p className="text-gray-600">carbonate</p>
        </div>

        {/* Facebook */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-3">
            <FaFacebook size={32} className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold mb-1">160K</p>
          <p className="text-gray-600">sureme</p>
        </div>

        {/* Twitter */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-3">
            <FaTwitter size={32} className="text-blue-400" />
          </div>
          <p className="text-3xl font-bold mb-1">55K</p>
          <p className="text-gray-600">compound</p>
        </div>

        {/* YouTube - Added since your screenshot shows 4 items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-3">
            <FaYoutube size={32} className="text-red-600" />
          </div>
          <p className="text-3xl font-bold mb-1">1.4M</p>
          <p className="text-gray-600">volume</p>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;