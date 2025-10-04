import React, { useState, useEffect, useCallback, useRef } from "react";
import ProfileCard from "./ProfileCard";

// A helper function to prevent the resize event from firing too often
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function Carousel({
  items,
  autoSlide = true,
  interval = 4000,
}) {
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    // 👇 FIX: Reduced width to allow 3 cards in a 1152px container
    const SINGLE_CARD_WIDTH = 440; // (1152px / 3 = 384px)

    const updateVisibleCount = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const newVisibleCount = Math.floor(containerWidth / SINGLE_CARD_WIDTH);
        setVisibleCount(Math.max(1, newVisibleCount));
      }
    };

    const debouncedUpdate = debounce(updateVisibleCount, 250);
    updateVisibleCount();
    window.addEventListener("resize", debouncedUpdate);
    return () => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  useEffect(() => {
    setCurrent(0);
  }, [visibleCount]);

  // Minor cleanup: Removed redundant Math.ceil
  const nextSlide = useCallback(() => {
    setCurrent((prev) =>
      prev >= items.length - visibleCount ? 0 : prev + 1
    );
  }, [items.length, visibleCount]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - visibleCount : prev - 1
    );
  };

  useEffect(() => {
    if (!autoSlide || paused) return;
    const slide = setInterval(nextSlide, interval);
    return () => clearInterval(slide);
  }, [paused, autoSlide, interval, nextSlide]);

  return (
    <div className="flex flex-col gap-8 w-full mx-auto">
      <div className="text-4xl md:text-5xl font-bold w-full text-center mb-4 text-[#F77039] underline text-shadow-xl text-shadow-[#F77039]">
        Guest Lectures
      </div>

      <div
        ref={carouselRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 w-full justify-around"
          style={{
            transform: `translateX(-${current * (100 / visibleCount)}%)`,
          }}
        >

          {items.map((item, idx) => (
            <div
              key={idx}
              className="pb-10  flex justify-around pt-5 hover:scale-105 shadow-xl  transition-transform transform duration-200 "
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
                <ProfileCard
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center transition-all duration-300 hover:bg-white/20"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;

