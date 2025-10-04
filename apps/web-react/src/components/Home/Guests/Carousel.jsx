import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import ProfileCard from "./ProfileCard";

// (Debounce function remains the same)
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
  const carouselRef = useRef(null);

  // 1. CREATE A NEW ARRAY WITH CLONED SLIDES AT THE START AND END
  const loopedItems = useMemo(() => {
    if (items.length > 0) {
      const startClones = items.slice(items.length - visibleCount);
      const endClones = items.slice(0, visibleCount);
      return [...startClones, ...items, ...endClones];
    }
    return [];
  }, [items, visibleCount]);

  // 2. START AT THE FIRST 'REAL' SLIDE (AFTER THE START CLONES)
  const [current, setCurrent] = useState(visibleCount);
  
  // 3. ADD STATE TO MANAGE TRANSITIONS FOR THE 'SILENT JUMP'
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const SINGLE_CARD_WIDTH = 440;
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

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // 4. HANDLE THE 'SILENT JUMP' AFTER THE TRANSITION TO A CLONE ENDS
  const handleTransitionEnd = () => {
    if (current >= items.length + visibleCount) {
      setIsTransitioning(false); // Disable transition
      setCurrent(visibleCount); // Jump to the first real slide
    }
    if (current <= visibleCount - 1) {
      setIsTransitioning(false); // Disable transition
      setCurrent(items.length + visibleCount - 1); // Jump to the last real slide
    }
  };

  // 5. RE-ENABLE TRANSITIONS AFTER A SILENT JUMP
  useEffect(() => {
    if (!isTransitioning) {
      // A tiny delay to allow React to update the DOM before re-enabling the transition
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

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
          className="flex w-full"
          onTransitionEnd={handleTransitionEnd} // Attach the transition end handler
          style={{
            // Use the new array length for the total width
            width: `${(100 * loopedItems.length) / visibleCount}%`, 
            // The transition is now controlled by state
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
            transform: `translateX(-${(current * 100) / loopedItems.length}%)`,
          }}
        >
          {loopedItems.map((item, idx) => (
            <div
              key={idx}
              className="box-border p-2" // Cleaned up layout classes
              style={{ flex: `0 0 ${100 / loopedItems.length}%` }}
            >
              <div className="h-full transform transition-transform duration-200 hover:scale-105 w-full flex justify-around">
                <ProfileCard
                  name={item.name}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              </div>
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

