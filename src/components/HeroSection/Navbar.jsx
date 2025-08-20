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
      const sections = ["home", "features", "design", "specs", "story"];
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
            ? "bg-black/95 backdrop-blur-md py-2 shadow-xl border-b border-gray-800"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img 
              src={monteroLogo} 
              alt="Montero Logo" 
              className="h-8 sm:h-17 md:h-17 w-auto object-contain filter brightness-0 invert"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {[
              { id: "features", label: "FEATURES" },
              { id: "design", label: "DESIGN" },
              { id: "specs", label: "SPECS" },
              { id: "story", label: "STORY" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -2 }}
                className={`px-5 py-3 rounded-lg text-sm font-bold transition-all duration-300 tracking-wider ${
                  activeSection === item.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
                style={{ fontSize: '0.95rem', letterSpacing: '0.1em' }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md uppercase tracking-wider"
              style={{ fontSize: '0.95rem', letterSpacing: '0.1em' }}
            >
              Pre-order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 relative z-60"
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-black/95 backdrop-blur-lg z-50 md:hidden shadow-2xl border-l border-gray-800"
            >
              <div className="flex flex-col h-full pt-24 pb-10 px-8">
                <div className="flex-1 flex flex-col space-y-6">
                  {[
                    { id: "features", label: "FEATURES" },
                    { id: "design", label: "DESIGN" },
                    { id: "specs", label: "SPECIFICATIONS" },
                    { id: "story", label: "OUR STORY" },
                  ].map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      whileTap={{ scale: 0.95 }}
                      className={`text-left text-2xl font-bold py-4 px-5 rounded-lg transition-all duration-300 uppercase tracking-wider ${
                        activeSection === item.id
                          ? "bg-amber-500 text-black"
                          : "text-white hover:bg-white/10"
                      }`}
                      style={{ letterSpacing: '0.1em' }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>
                
                <div className="pt-8 border-t border-gray-800">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-5 py-5 rounded-lg text-xl mb-4 uppercase tracking-wider"
                    style={{ letterSpacing: '0.1em' }}
                    onClick={() => {
                      scrollToSection("home");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Pre-order Now
                  </motion.button>
                  
                  <p className="text-center text-gray-400 text-sm">
                    Limited early bird pricing available
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