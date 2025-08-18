import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    quote: "The most beautiful GMT watch I've ever seen. The beach inspiration makes it truly unique - it's like wearing a piece of my favorite coastal destinations.",
    author: "Alex Rivera",
    role: "Watch Collector & Travel Blogger",
    rating: 5
  },
  {
    id: 2,
    quote: "Perfect companion for my international travels. The world time function is incredibly useful, and the Swiss movement keeps impeccable time across time zones.",
    author: "Sophie Chen",
    role: "Frequent Flyer (100k+ miles/year)",
    rating: 5
  },
  {
    id: 3,
    quote: "The craftsmanship exceeds expectations. You can feel the quality in every detail - from the bezel action to the way it catches light differently at various beaches.",
    author: "James Wilson",
    role: "Luxury Goods Expert",
    rating: 5
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-montero-blue font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl font-light mt-4 font-serif tracking-wide">
            Voices from Our Early Adopters
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-montero-blue text-3xl mb-4 opacity-20">
                <FaQuoteLeft />
              </div>
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center text-gray-500 font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            * All testimonials from verified beta testers and early supporters
          </p>
        </div>
      </div>
    </section>
  );
}