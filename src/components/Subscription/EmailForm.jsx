import React, { useState } from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
import bannerImage from '../../assets/images/ChatGPT Image Aug 17, 2025, 11_47_50 PM.png'; // Replace with your image path

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#9fc8e6] to-montero-blue text-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl flex flex-col lg:flex-row">
          {/* Banner Image Section - Right Side */}
          <div className="lg:w-1/2 hidden lg:block relative">
            <img 
              src={bannerImage} 
              alt="Montero Limited Edition Watch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-serif font-light mb-2 text-white">Limited Edition</h3>
                <p className="text-gray-300">Only 500 pieces worldwide</p>
              </div>
            </div>
          </div>

          {/* Form Section - Left Side */}
          <div className="lg:w-1/2 p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-light mb-4 font-serif tracking-wide text-gray-900">
                Join the Exclusive Waitlist
              </h2>
              <p className="text-lg text-gray-700 max-w-lg mx-auto">
                Be the first to access our limited edition launch and receive{' '}
                <span className="font-medium text-gray-900">early bird pricing</span>.
              </p>
            </div>

            {isSuccess ? (
              <div className="bg-green-100 border border-green-300 rounded-xl p-6 text-center mb-8 animate-fadeIn">
                <h3 className="text-xl font-medium mb-2 text-green-800">Thank you!</h3>
                <p className="text-green-700">You've been added to our waitlist. We'll notify you at launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <FiUser className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-montero-blue focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-montero-blue focus:border-transparent placeholder-gray-400 text-gray-900 transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2
                    bg-gradient-to-r from-montero-blue to-montero-dark-blue text-black
                    ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-lg'}
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Notify Me at Launch'
                  )}
                </button>
              </form>
            )}

            <p className="text-center text-sm text-gray-500 mt-8">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}