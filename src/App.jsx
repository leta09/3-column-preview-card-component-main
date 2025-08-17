import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './variables.css'
import './fonts.css'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
function App() {
  const [count, setCount] = useState(0)
    //const BASE_URL = import.meta.env.BASE_URL;
  return (
    <>
    <section className="cars">
      <Card image={import.meta.env.BASE_URL + "src/assets/images/icon-sedan.svg"} title="Sedans" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip."/>
      <Card image={import.meta.env.BASE_URL + "src/assets/images/icon-suvs.svg"} title="SUVs" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures."  />
      <Card image={import.meta.env.BASE_URL + "src/assets/images/icon-luxury.svg"} title="Luxury" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style." />
    </section>
    <Footer />
    </>
  )
}

export default App
