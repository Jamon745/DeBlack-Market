// import './App.css'
import { useEffect, useState } from 'react';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import AOS from 'aos';
import "aos/dist/aos.css"
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscibe from './Components/Subscribe/Subscibe';
import Testimonal from './Components/Testimonials/Testimonal';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';


function App() {
  const [orderPopup, setOrderPopup] = useState("false");

  const handleOrderPopup = (e) => {
    e.preventDefault()
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100
    })
    AOS.refresh()
  },[])



  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscibe />
        <Products />
        <Testimonal />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  )
}

export default App
