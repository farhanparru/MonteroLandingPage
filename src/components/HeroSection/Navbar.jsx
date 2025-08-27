import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import monteroLogo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "features", "design", "specs", "story", "faq"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-b from-gray-900 to-black backdrop-blur-md py-2 shadow-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo with responsive sizing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer ml-2 md:ml-6"
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={monteroLogo} 
              alt="Montero Luxury Watches" 
              className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {[
              { id: "features", label: "FEATURES" },
              { id: "design", label: "DESIGN" },
              { id: "specs", label: "SPECS" },
              { id: "story", label: "STORY" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 tracking-wider relative ${
                  activeSection === item.id
                    ? "text-amber-400"
                    : "text-gray-200 hover:text-white"
                }`}
                style={{ 
                  letterSpacing: '0.15em',
                  fontSize: '0.95rem'
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 w-8 bg-amber-400 rounded-full"
                    layoutId="activeSection"
                  />
                )}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(180, 83, 9, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-800 to-emerald-800 hover:from-green-700 hover:to-emerald-800 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg uppercase tracking-wider"
              style={{ fontSize: '0.95rem', letterSpacing: '0.1em' }}
            >
              Pre-order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-60 mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-2.5"
                  : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm my-2 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-2.5"
                  : "translate-y-1"
              }`}
            ></span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg z-50 md:hidden shadow-2xl border-l border-gray-800"
            >
              <div className="flex flex-col h-full pt-24 pb-10 px-6">
                <div className="absolute top-6 right-6">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center text-white text-3xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    &times;
                  </motion.button>
                </div>
                
                <div className="flex-1 flex flex-col space-y-4">
                  {[
                    { id: "home", label: "HOME" },
                    { id: "features", label: "FEATURES" },
                    { id: "design", label: "DESIGN" },
                    { id: "specs", label: "SPECIFICATIONS" },
                    { id: "story", label: "OUR STORY" },
                    { id: "faq", label: "FAQ" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileTap={{ scale: 0.95 }}
                      className={`text-left text-xl font-bold py-4 px-5 rounded-xl transition-all duration-300 uppercase tracking-wider flex items-center ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-amber-500/20 to-amber-700/20 text-amber-400 border-l-4 border-amber-500"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                      style={{ letterSpacing: '0.1em' }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {activeSection === item.id && (
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      )}
                      {item.label}
                    </motion.button>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-gray-800">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-800 to-emerald-800 hover:from-green-700 hover:to-emerald-800 text-white font-bold px-5 py-4 rounded-xl text-lg mb-4 uppercase tracking-wider shadow-lg"
                    style={{ letterSpacing: '0.1em' }}
                    onClick={() => {
                      scrollToSection("home");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Pre-order Now
                  </motion.button>
                  
                  <p className="text-center text-amber-300 text-sm font-medium">
                    Limited early bird rewards available!
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;