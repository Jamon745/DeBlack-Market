import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Pages/Products/Products';
import TopProducts from './Components/Pages/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscibe from './Components/Subscribe/Subscibe';
import Testimonal from './Components/Testimonials/Testimonal';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import Login from './Components/Account/Login';
import SignUp from './Components/Account/SignUp';
import Home from './Components/Pages/Home/Home'
import Foods from './Components/Pages/Foods/Foods';
import Cars from './Components/Pages/Categories/Cars/Cars'

function App() {
  const [orderPopup, setOrderPopup] = useState(false); 

  const handleOrderPopup = (e) => {
    e.preventDefault();
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
      delay: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Router>
       <Link> <Navbar handleOrderPopup={handleOrderPopup} /></Link>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
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
          <Route path='/cars' element={<Cars />}/>
          {/* <Route path='/laptops' element={<Laptops />}/> */}
          <Route path='/' element={<SignUp />}/>
          <Route path='/foods' element={<Foods handleOrderPopup={handleOrderPopup} />}/>
          <Route path='/cars' element={<Cars handleOrderPopup={handleOrderPopup} />}/>
        </Routes>
      </Router>
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Testimonal />
      <Footer />
    </div>
    
  );
}

export default App;
