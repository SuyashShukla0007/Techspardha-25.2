import React from 'react'
import EventContainer from '../components/Events/EventContainer'
import Footer from '../components/Global/Footer/footer.jsx'
import Navbar from '../components/Home/navbar/navbar.jsx'
function Events() {
  return (
    <div>
      <Navbar/>
      <EventContainer/>
      <Footer/>
    </div>
  )
}

export default Events