import React from 'react'
import Gallery from '../components/Home/Gallery/Gallery'
import Carousel from '../components/Home/Guests/Carousel'
import Event from '../components/Home/Event/Event'
function Home() {
  const cards=[{name:'Salman Khan',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'},{name:'Shah Rukh Khan',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'},{name:'Amitabh Bacchan',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'},{name:'Deepika Padukone',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'},{name:'Ananya Pandey',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'},{name:'Saif Ali Khan',imageUrl:'https://staticimg.amarujala.com/assets/images/2017/06/07/shah-rukh-khan_1496836513.jpeg?w=414&dpr=1.0&q=80',description:'Salman Khan is a renowned actor in Bollywood Industry famous for his films like Bajrangi bhaijan,Tubelight etc.'}]
  return (
    <div className='bg-black w-full'>
      <Gallery/>
      <Carousel items={cards}/>
      <Event/>
    </div>
  )
}

export default Home
