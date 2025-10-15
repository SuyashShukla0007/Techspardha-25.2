import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../navbar/navbar' // Import the Navbar component
import './hero.css'
function Hero() {
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    function onError(e) {
      console.error('Hero video failed to load', e)
      setVideoError(true)
    }

    function onCanPlay() {
      console.info('Hero video can play')
      setVideoError(false)
    }

    v.addEventListener('error', onError)
    v.addEventListener('canplay', onCanPlay)

    return () => {
      v.removeEventListener('error', onError)
      v.removeEventListener('canplay', onCanPlay)
    }
  }, [])

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden text-white"
      aria-label="Hero section with background video"
    >
      {/* Navbar - Added here with absolute positioning and high z-index */}
      <div className="absolute top-0 left-0 w-full z-[1000]">
        <Navbar />
      </div>
      
      
          {/* Background GIF */}
      {!videoError ? ( // Use videoError instead of gifError
        <img
          src="/videos/hero_video.gif" // Replace with the correct path to your GIF
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-all duration-300 ease-in-out"
          onError={() => setVideoError(true)} // Handle GIF loading errors
          aria-hidden="true"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-poster.jpg')" }} // Fallback image
          role="img"
          aria-label="Hero fallback background"
        >
          <div className="rounded-md bg-black/45 px-4 py-2 text-white">
            GIF unavailable
          </div>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex max-w-[1100px] flex-col items-center justify-center gap-4 px-4 text-center md:pt-20">
        {/* <div className="slush-box"> */}
          <p className="neon-orange-text text-5xl md:text-8xl text-center text-primary font-gta mb-10 ">
            Techspardha
          </p>
        {/* </div> */}
        <p className="neon-text text-5xl md:text-7xl text-center font-gta mb-10">
          Transcending Paradigms
          </p>      
        </div>
    </section>
  )
}

export default Hero
