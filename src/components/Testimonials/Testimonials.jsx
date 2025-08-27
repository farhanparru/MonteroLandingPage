import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// Sample images (replace with your actual image paths)
import brooklynImage from '../../assets/images/11660790-man-in-jacket.jpg';

const testimonials = [
  {
    id: 1,
    name: "Brooklyn Simmons",
    location: "Tajikistan",
    content: "Nostra agtent hendrerit libero primis sapien eu diam. Duis placerat mattis ipsum faucibus arcu consectetur erat. Nullam risus senectus vehicula fermentum ut? Potenti elit neque ad purus.",
    image: brooklynImage,
    rating: 5
  },
  {
    id: 2,
    name: "Cody Fisher",
    location: "Susan Arabba",
    content: "Nostra agtent hendrerit libero primis sapien eu diam. Duis placerat mattis ipsum faucibus arcu consectetur erat. Nullam risus senectus vehicula fermentum ut? Potenti elit neque ad purus; dapibus erat volutpat habitasse.",
    image: brooklynImage,
    rating: 4
  },
  {
    id: 3,
    name: "Eleanor Pena",
    location: "Iceland",
    content: "Nostra agtent hendrerit libero primis sapien eu diam. Duis placerat mattis ipsum faucibus arcu consectetur erat.",
    image: brooklynImage,
    rating: 5
  }
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
        
          <h2 className="text-3xl md:text-4xl font-light mt-4 font-serif tracking-wide font-instrument">
            Trusted by Collectors Worldwide
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-instrument">
            Hear from our valued customers who've experienced the luxury, service, and trust that define our brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg font-instrument">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 font-instrument">- {testimonial.location}</p>
                </div>
              </div>
              
              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />
              
              <div className="text-gray-700 mb-4 leading-relaxed">
                <FaQuoteLeft className="text-gray-300 text-xl mb-2" />
                <p className="text-gray-600 font-instrument">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}