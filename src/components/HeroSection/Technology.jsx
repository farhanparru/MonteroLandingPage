import React from "react";
import MonteroLogo from '../../assets/images/be-inbox-67f41b1ebe323-1-1.png'

const Technology = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white text-center py-20">
      {/* Logo + Tagline */}
      <div className="mb-6">
        <img
          src={MonteroLogo} // Replace with your actual logo path
          alt="Montero Logo"
          className="mx-auto h-18 mb-2"
        />
      
      </div>

      {/* Title */}
      <h1
        className="font-[Inter]  font-semibold text-[48px] leading-[100%] tracking-normal text-black mb-4"
      >
        Made with swiss technology
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
        Praesent sagittis orci hendrerit dui fermentum, viverra sodales odio euismod.
        Curabitur viverra, sapien a rutrum vehicula, felis purus scelerisque massa,
        sit amet consequat nibh libero quis dui.
      </p>

      {/* Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition">
        Buy Now
      </button>
    </div>
  );
};

export default Technology;
