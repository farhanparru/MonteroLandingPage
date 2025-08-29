import React, { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Import beach images
import IbizaBeach from "../../assets/beaches/IbizaBeach.jpg";
import BoraBoraBeach from "../../assets/beaches/BoraBoraBeach.jpg";
import BaliBeach from "../../assets/beaches/BaliBeach.jpg";
import JumeirahBeach from "../../assets/beaches/JumeirahBeach.jpg";
import PatongBeach from "../../assets/beaches/PatongBeach.jpg";
import MadeiraBeach from "../../assets/beaches/MadeiraBeach.jpg";
import CubaCabanaBeach from "../../assets/beaches/CubaCabanaBeach.jpg";
import MiamiBeach from "../../assets/beaches/MiamiBeach.jpg";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

// Beach data with Google Maps URLs and images
const beachData = [
  {
    name: "Ibiza Beach",
    description: "White Island, Spain",
    mapsUrl: "https://maps.app.goo.gl/RU2g9Uf6W4FtgHDS8",
    image: IbizaBeach,
  },
  {
    name: "Jumeirah Beach",
    description: "Dubai, UAE",
    mapsUrl: "https://maps.app.goo.gl/FBvYRpVNoL3Vjkvk6",
    image: JumeirahBeach,
  },
  {
    name: "Patong Beach",
    description: "Phuket, Thailand",
    mapsUrl: "https://maps.app.goo.gl/quYniGS1Gq2v4W267",
    image: PatongBeach,
  },
  {
    name: "Bali Beach",
    description: "Island of Gods, Indonesia",
    mapsUrl: "https://maps.app.goo.gl/qQjDvy4mW1LUCDt69",
    image: BaliBeach,
  },
  {
    name: "Madeira Beach",
    description: "Portugal",
    mapsUrl: "https://maps.app.goo.gl/8TA4QJ4uNnbs2ggC6",
    image: MadeiraBeach,
  },
  {
    name: "Cuba Cabana Beach",
    description: "Havana, Cuba",
    mapsUrl: "https://maps.app.goo.gl/XAFR3n68J1LkNox46",
    image: CubaCabanaBeach,
  },
  {
    name: "Miami Beach",
    description: "Florida, USA",
    mapsUrl: "https://maps.app.goo.gl/56bfz8CnXjEhPdbcA",
    image: MiamiBeach,
  },
  {
    name: "Bora Bora Beach",
    description: "French Polynesia",
    mapsUrl: "https://maps.app.goo.gl/X3D438vaoigFV8PT9",
    image: BoraBoraBeach,
  },
];

export default function Story() {
  useEffect(() => {
    // Auto-typing animation for paragraphs
    const paragraphs = document.querySelectorAll(".story-paragraph");

    paragraphs.forEach((para, index) => {
      const originalText = para.textContent;
      para.textContent = "";

      gsap.to(para, {
        duration: originalText.length * 0.03,
        delay: index * 1.5,
        text: originalText,
        ease: "none",
      });
    });

    // Subtle continuous animation
    gsap.to(".watch-image", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate decorative elements
    gsap.from(".decorative-circle", {
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });

    // Animate the title
    gsap.from(".section-title", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  const openGoogleMaps = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-montero-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-montero-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10"></div>
        </div>

        <div className="mt-20 pt-10 border-t border-gray-200">
          <h3 className="text-2xl font-instrument text-center mb-12">
            Inspired by 8 Iconic Beaches Around the World
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beachData.map((beach, index) => (
              <div
                key={index}
                className="beach-item text-center cursor-pointer relative group"
                onClick={() => openGoogleMaps(beach.mapsUrl)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md h-48 mb-4 group-hover:shadow-xl transition-all duration-300">
                  {/* Beach image */}
                  <img
                    src={beach.image}
                    alt={`${beach.name} Beach`}
                    className="w-full h-full object-cover"
                  />

                  {/* Beach name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white font-medium text-sm">
                      {beach.name}
                    </p>
                    <p className="text-white/80 text-2xl">{beach.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-montero-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  {/* Click instruction */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/70 text-white text-xs py-1 px-2 rounded-full">
                      Click to view on Google Maps
                    </div>
                  </div>
                </div>

                <p className="font-medium text-gray-800 group-hover:text-montero-blue transition-colors duration-300">
                  {beach.name}
                </p>
              </div>
            ))}
          </div>

          {/* Note about the maps */}
          <div className="text-center mt-8 text-gray-500 text-sm">
            <p>
              Click on any beach to view its location directly in Google Maps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
