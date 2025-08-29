import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "When does the campaign launch?",
      answer: "The Montero Kickstarter campaign is expected to launch very soon. Subscribe to our mailing list to be the first to know the exact launch date and access exclusive previews."
    },
    {
      question: "When will I receive my watch?",
      answer: "We plan to ship all Montero watches within 2 months after the Kickstarter campaign ends. You'll receive regular email updates throughout the process."
    },
    {
      question: "Is there a warranty? How can I use it?",
      answer: "Yes! Every Montero watch includes a free 2-year international warranty. If you ever experience an issue, simply bring or ship the watch to our store, and we'll handle the rest."
    },
    {
      question: "What movement is used in the watch?",
      answer: "We use the enhanced Seiko NH34A GMT automatic movement, known for its reliability, 41-hour power reserve, and independent GMT hand."
    },
    {
      question: "Will I get early-bird perks and exclusive benefits?",
      answer: `Absolutely. By registering and backing Montero early, you'll unlock early-bird pricing, exclusive Kickstarter rewards, and a place on our Preferred Customers List.
      
• Priority access to future Montero watch collections
• Special pricing on upcoming limited editions
• First invitations to collaborations and private campaigns
• Exclusive giveaways and member-only perks`
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[Inter] leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-[Inter] leading-relaxed">
            Here are some of our FAQs. If you have any other questions you'd like
            answered please feel free to email us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-lg"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 rounded-xl"
              >
                <span className="text-xl md:text-2xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-lg md:text-xl text-gray-600 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-14 text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-lg md:text-xl py-3 px-10 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
