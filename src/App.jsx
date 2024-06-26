import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscibe from './Components/Subscribe/Subscibe';
import Testimonal from './Components/Testimonials/Testimonal';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import Login from './Components/Account/Login';
import SignUp from './Components/Account/SignUp';
import Home from './Components/Home/Home';

function App() {
  const [orderPopup, setOrderPopup] = useState(false); 

  const handleOrderPopup = (e) => {
    e.preventDefault();
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar handleOrderPopup={handleOrderPopup} />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/topProducts" element={<TopProducts handleOrderPopup={handleOrderPopup} />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/subscribe" element={<Subscibe />} />
          <Route path="/testimonials" element={<Testimonal />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signUp' element={<SignUp />}/>
        </Routes>
      </Router>
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Testimonal />
      <Footer />
    </div>
    
  );
}

export default App;
