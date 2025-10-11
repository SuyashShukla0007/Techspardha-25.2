import React, { useRef, useState, useEffect } from 'react'
import './Hero.css'
import Navbar from '../navbar/navbar'


function Hero() {
	const videoRef = useRef(null)
	const [videoError, setVideoError] = useState(false)

	useEffect(() => {
		const v = videoRef.current
		if (!v) return

		// debug: show what src the video element is trying to load
		console.debug('Hero video element currentSrc (initial):', v.currentSrc)

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
		<section className="hero" aria-label="Hero section with background video">
			<video
				ref={videoRef}
				className="hero__video"
				// poster="/photos/image1.png"
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				aria-hidden="true"
			>
				{/* Expected to be placed in apps/web-react/public as /video1.mp4 */}
				<source src="/videos/video2.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Fallback shown when the video fails to load */}
			{videoError && (
				<div className="hero__fallback" role="img" aria-label="Hero fallback background">
					{/* Uses the poster image as a background via CSS */}
					<div className="hero__fallback__inner">Video unavailable</div>
				</div>
			)}
            
			<div className="hero__overlay" />
            
			<div className="hero__content">
    			{/* <h1 className="hero__title">Techspardha — Build. Compete. Celebrate.</h1>
				<p className="hero__subtitle">Join the hackathon, showcase your skills, and win exciting prizes.</p> */}
				<img className="" src="/photos/image1.png" alt="img1" />
				<img className="" src="/photos/image4.png" alt="img4" />
			</div>


		</section>
	)
}

export default Hero