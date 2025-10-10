import React, { useEffect, useRef, useState } from "react";

const contentBlocks = [
  {
    title: "Hands-On Learning Experience",
    description:
      "Emphasize that your courses are crafted by industry experts to ensure high-quality, up-to-date content.",
    iconColor: "text-orange-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4M4 10l8 4 8-4M4 14l8 4 8-4M4 18l8 4 8-4"
        />
      </svg>
    ),
    key: "hands-on",
  },
  {
    title: "Apply: Build, Play, Create",
    description:
      "Bring ideas to life in CodeHelp's Apply, Build projects, play in boot playgrounds—all in your browser.",
    iconColor: "text-orange-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    key: "apply",
  },
  {
    title: "Community Driven Growth",
    description:
      "Learn, share, and grow with a supportive community of thousands of fellow coders and mentors.",
    iconColor: "text-orange-400",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h-5m-5 0h5m5 0h-5m5 0h-5M3 10a7 7 0 1114 0c0 3.314-3.134 6-7 6s-7-2.686-7-6zm-3 8h18M5 10a5 5 0 0110 0c0 2.21-2.239 4-5 4s-5-1.79-5-4z"
        />
      </svg>
    ),
    key: "community",
  },
];

// Double the content blocks for infinite scroll effect
const allContentBlocks = [
  ...contentBlocks,
  ...contentBlocks.map((b) => ({ ...b, key: b.key + "-clone1" })),
];

const AboutUs = () => {
  const carouselContainerRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [isGlowActive, setIsGlowActive] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  // Auto-scroll logic
  useEffect(() => {
    const container = carouselContainerRef.current;
    const wrapper = contentWrapperRef.current;
    if (!container || !wrapper) return;

    const originals = wrapper.querySelectorAll('[data-original-block="true"]');
    if (!originals.length) return;

    let totalHeight = 0;
    originals.forEach((block) => (totalHeight += block.offsetHeight));

    let y = 0;
    const speed = 0.4;
    let raf;

    const loop = () => {
      if (!isCarouselHovered) {
        y += speed;
        if (y >= totalHeight) {
          y = 0;
          container.scrollTop = 0;
        }
        container.scrollTop = y;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isCarouselHovered]);

  // Glow effect
  useEffect(() => {
    const handleMove = (e) => {
      setGlowPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="relative overflow-hidden min-h-screen text-white bg-[#05070B]"
      onMouseEnter={() => setIsGlowActive(true)}
      onMouseLeave={() => setIsGlowActive(false)}
    >
      {/* Glow Overlay (Orange version) */}
      <div
        className={`absolute inset-0 z-0 pointer-events-none transition-all duration-700 ease-in-out ${
          isGlowActive ? "opacity-100 scale-105" : "opacity-0 scale-100"
        }`}
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(239, 92, 18, 0.95), rgba(58, 41, 25, 0.05) 60%)`,
          filter: "blur(120px) brightness(1.5)",
          mixBlendMode: "screen",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center py-16 px-6 md:px-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
          <p className="text-orange-500 text-lg font-semibold tracking-wider uppercase">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tighter">
            Empowering Coders, <br className="hidden md:block" /> Enabling Dreams
          </h1>
          <p className="text-gray-400 text-lg max-w-lg lg:mx-0 mx-auto">
            Unveil the essence of <strong>CodeHelp</strong>: a community-driven
            platform dedicated to empowering coders of all levels. Discover who
            we are and how we're shaping the future of coding education.
          </p>
          <button className="w-fit bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg mt-4 mx-auto lg:mx-0 hover:shadow-[0_0_25px_5px_rgba(255,140,0,0.4)] transform hover:scale-[1.03] active:scale-[0.97]">
            Let's Connect
          </button>
        </div>

        {/* Right Carousel */}
        <div
          ref={carouselContainerRef}
          className="w-full lg:w-1/2 h-[450px] relative mt-12 lg:mt-0 overflow-y-hidden rounded-2xl bg-[#0A0D14]/50 backdrop-blur-md border border-[#1f2937]/60 shadow-[0_0_40px_rgba(255,140,0,0.08)]"
          onMouseEnter={() => setIsCarouselHovered(true)}
          onMouseLeave={() => setIsCarouselHovered(false)}
        >
          {/* Top/Bottom Gradient Fade */}
          <div className="absolute top-0 left-0 w-full h-1/4 z-30 bg-gradient-to-b from-[#05070B] to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/4 z-30 bg-gradient-to-t from-[#05070B] to-transparent pointer-events-none"></div>

          {/* Cards */}
          <div ref={contentWrapperRef} className="flex flex-col min-h-full relative z-10">
            {allContentBlocks.map((block, index) => (
              <div
                key={block.key}
                data-original-block={index < contentBlocks.length ? "true" : "false"}
                className={`w-full p-6 md:p-8 flex items-start gap-6 bg-transparent rounded-xl transition-all duration-500 hover:bg-[#1a0e07]/60 hover:shadow-[0_0_30px_rgba(255,140,0,0.2)] ${
                  index < contentBlocks.length - 1 || index >= contentBlocks.length
                    ? "border-b border-[#1f2937]/70"
                    : ""
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/10">
                  <span className={block.iconColor}>{block.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {block.title}
                  </h3>
                  <p className="text-gray-400 text-base">{block.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
