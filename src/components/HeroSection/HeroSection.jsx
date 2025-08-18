import React, { useEffect } from "react";
import monteroLogo from "../../assets/images/be-inbox-67f41b1ebe323-1-1.png";
import beachVideo from "../../assets/videos/14216244_1920_1080_24fps.mp4";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  useEffect(() => {
    // 3D text animation for headline only
    const headline = document.querySelector(".hero-headline");
    if (headline) {
      const chars = headline.textContent.split("");
      headline.textContent = "";

      chars.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.transformOrigin = "50% 50%";
        span.style.perspective = "1000px";
        headline.appendChild(span);

        // Initial state
        gsap.set(span, {
          opacity: 0,
          y: 50,
          rotationX: 90,
          filter: "blur(5px)",
        });

        // Animate in
        gsap.to(span, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          filter: "blur(0px)",
          duration: 0.8,
          delay: index * 0.05,
          ease: "back.out(1.7)",
        });
      });

      // Continuous subtle animation for headline
      gsap.to(".hero-headline span", {
        y: -5,
        rotationX: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // CTA button animation
    gsap.from(".hero-cta", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1.5,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white px-4">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={beachVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center relative z-10 py-20 md:py-0">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          {/* Logo */}
          <div className="w-full mb-6 md:mb-8 max-w-xs mx-auto md:mx-0">
            <img
              src={monteroLogo}
              alt="Montero"
              className="w-full h-auto max-h-12 md:max-h-16 object-contain"
              loading="eager"
            />
          </div>

          {/* 3D Animated Headline */}
          <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A New Kind
            <br /> of Time is
            <br /> Coming
          </h1>

          <p className="text-lg sm:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0 opacity-0 animate-fadeIn delay-1000">
            Experience the world through our beach-inspired GMT watch that
            captures the rhythm of the tides
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button className="hero-cta border-2 border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium sm:font-bold hover:bg-white hover:text-montero-blue transition duration-300 hover:scale-105 text-sm sm:text-base">
              Notify Me at Launch
            </button>
            <button className="hero-cta border-2 border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-medium sm:font-bold hover:bg-white hover:text-montero-blue transition duration-300 hover:scale-105 text-sm sm:text-base">
              Join the Waitlist
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative mt-10 md:mt-0 px-4 sm:px-0">
          {/* Watch floating animation */}
          <div className="relative group">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center">
              <span className="text-white text-sm sm:text-lg text-center px-2">
                Watch 3D Render Coming Soon
              </span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-montero-blue rounded-xl opacity-0 group-hover:opacity-20 blur-md transition duration-500"></div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-white text-montero-blue px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg font-bold animate-pulse text-xs sm:text-sm">
            Limited Edition
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce opacity-0 animate-fadeIn delay-1500">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}