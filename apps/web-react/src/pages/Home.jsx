
import Gallery from '../components/Home/Gallery/Gallery'
import Carousel from '../components/Home/Guests/Carousel'
import Event from '../components/Home/Event/Event'
import CountdownTimer from '../components/Home/Timer/CountdownTimer.jsx'
import FAQ from '../components/Home/FAQ/FAQ.jsx'

import AboutUs from '../components/Home/AboutUs/AboutUs.jsx' 

import Footer from '../components/Global/Footer/footer.jsx';
import Sponsors from '../components/Home/Sponsors/Sponsors.jsx'
import SocietyMarquee from '../components/Home/SocietyMarquee/SocietyMarquee.jsx'
import Hero from '../components/Home/Hero/Hero.jsx'
function Home() {
  return (
    <div className='bg-black w-full overflow-x-hidden'>
      <Hero/>
      <CountdownTimer />
      <SocietyMarquee />
      <AboutUs /> 
      <Sponsors />
      <Event />
      <Carousel /> 
      <FAQ />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home 