import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import Verifyyy from './pages/Verifyyy'
import Profile from './pages/Profile'

const App = () => {
  const token = localStorage.getItem('token');

  return (
    
    // Full-page dark mode support
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen text-black transition-colors duration-300 bg-white  dark:bg-gray-900 dark:text-white">
      <ToastContainer />
      <Navbar />
      <SearchBar />

      {/* Page padding */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verifyyy />} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
