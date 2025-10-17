import Gallery from '../components/Home/Gallery/Gallery'
import Carousel from '../components/Home/Guests/Carousel'
import Event from '../components/Home/Event/Event'
import CountdownTimer from '../components/Home/Timer/CountdownTimer.jsx'
import FAQ from '../components/Home/FAQ/FAQ.jsx'
import AboutUs from '../components/Home/AboutUs/AboutUs.jsx'
import Footer from '../components/Global/Footer/footer.jsx'
import Sponsors from '../components/Home/Sponsors/Sponsors.jsx'
import SocietyMarquee from '../components/Home/SocietyMarquee/SocietyMarquee.jsx'
import Hero from '../components/Home/Hero/Hero.jsx'

// ✅ You can place it anywhere, e.g., src/components/PixelBlast.jsx
// import PixelBlast from '../components/PixelBlast.jsx'

function Home() {
  return (
    <div className="relative bg-black w-full overflow-x-hidden text-white">
      
      {/* Background PixelBlast */}
      {/* <div className="fixed inset-0 -z-10">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#ff7700"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div> */}

      {/* Foreground content */}
      <Hero />
      <CountdownTimer />
      <SocietyMarquee />
      <AboutUs />
      <Sponsors />
      <Event />
      <Carousel /> 
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
