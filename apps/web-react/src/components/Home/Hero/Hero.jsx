import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from "../navbar/navbar";
import "./hero.css";

const SECTION_HEIGHT = 700;

const Button = ({ text, redirect }) => {
  return (
    <a
      href={redirect}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center bg-[#3a220c] text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-mono tracking-wide hover:bg-[#482d1a] transition-colors duration-300 ease-in-out rounded-md w-full sm:w-auto"
    >
      <span className="relative z-10">{text}</span>

      {/* Decorative Corners */}
      <span className="absolute top-0 left-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute top-0 left-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute top-0 right-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute top-0 right-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute bottom-0 left-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute bottom-0 left-0 w-[0.8px] h-3 bg-orange-600"></span>

      <span className="absolute bottom-0 right-0 w-3 h-[0.8px] bg-orange-600"></span>
      <span className="absolute bottom-0 right-0 w-[0.8px] h-3 bg-orange-600"></span>
    </a>
  );
};
const Hero = () => {
  const videoRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const handleError = () => setHasError(true);
    const handleCanPlay = () => setHasError(false);

    v.addEventListener("error", handleError);
    v.addEventListener("canplay", handleCanPlay);

    return () => {
      v.removeEventListener("error", handleError);
      v.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [50, 100], [1, 0]); // Dynamically control opacity


  return (
    <>
      {/* === HERO SECTION === */}
     <section className="relative w-full min-h-screen bg-zinc-950 overflow-hidden">
  {/* Navbar */}
  <div className="fixed top-0 left-0 w-full z-[1000]">
    <Navbar />
  </div>

  {/* Sticky text limited to hero section */}
  

  {/* Scrolling video */}
  <ReactLenis root options={{ lerp: 0.02 }}>
    <div className="relative min-h-screen sm:h-[100vh] flex flex-col items-center justify-center">
  <motion.div
    className="fixed top-0 left-0 w-full flex flex-col items-center justify-center h-screen text-center text-white px-4 sm:px-8"
    style={{ opacity }}
  >
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-gta text-primary mb-3 sm:mb-5 md:mb-6 drop-shadow-lg leading-[1.1]">
      Techspardha
    </h1>
    <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-gta text-white drop-shadow-lg leading-[1.2]">
      Transcending Paradigms
    </p>
  </motion.div>
</div>

    <ScrollExpand />
  </ReactLenis>
</section>

    </>
  );
};

// --- Scroll Expand Animation ---
const ScrollExpand = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1000], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const scale = useTransform(scrollY, [0, 800], [1, 2.1]);
  const opacity = useTransform(scrollY, [0, 1000], [1, 0.5]);

  return (
    <motion.div
      className="relative rounded-2xl z-10 top-0 h-[50vh] sm:min-h-screen w-full overflow-hidden -mt-60 sm:-mt-80"
      // class="relative rounded-2xl z-10 top-0 h-[50vh] w-full overflow-hidden -mt-60 sm:-mt-80"
      style={{ clipPath, scale }}
    >
      <img
        src="/videos/hero_video.gif"
        alt="Expanding Visual"
        className="absolute inset-0 w-full object-cover rounded-2xl"
      />
    </motion.div>
  );
};

export default Hero;
