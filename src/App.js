import React, { useState } from 'react';
import Navbar from './scenes/navbar';
import Hero from './scenes/hero'
import About  from './scenes/about'
import Services from './scenes/services'
import Testimonial from './scenes/testimonial'
import Download from './scenes/download'
import Footer from './scenes/footer'

function App() {
  const [selectedPage, setSelectedPage] = useState("home") 
  return (
    <div className='app'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero />
      <About/>
      <Services/>
      <Testimonial/>
      <Download />
      <Footer/>
    </div>
  );
}

export default App;
