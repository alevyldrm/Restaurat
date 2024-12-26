import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import BgImage from './components/Image/2.jpg'
import Banner from './components/Banner/Banner'
import OurServices from './components/Ourservices/OurServices'

const bgStyle = {
  backroundImage: `url(${BgImage})`,
  backroundRepeat: "no-repeat",
  backroundSize: "cover",
  backroundPosition: "center"
}

function App() {
  return (
    <div style={bgStyle} className="overflow-x-hidden bg-gray-300">
      <div className='min-h-screen bg-white/50 backdrop-blur-3xl'>
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  )
}

export default App
