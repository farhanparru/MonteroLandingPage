import React from "react";
import watchImage from "../../assets/images/ChatGPT Image Aug 19, 2025, 10_35_08 PM.png"; // replace with your image

const ProductPreviewLeft = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={watchImage}
            alt="Luxury GMT Watch"
            className="rounded-2xl shadow-lg w-[90%] md:w-[80%] hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ocean-Inspired Luxury
          </h2>
          <p className="text-gray-600 mb-6">
            A sleek GMT watch designed with precision engineering, inspired by
            the calm strength of the ocean. Built with a sapphire crystal,
            stainless steel case, and a ceramic bezel for timeless durability.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPreviewLeft;
