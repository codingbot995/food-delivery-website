import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';

const App = () => {
  const[showLogin, setshowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      
      <BrowserRouter>
      <Navbar  setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer/>
    </>
  );
};

export default App;