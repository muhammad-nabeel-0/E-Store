import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr,0.3fr] gap-14 my-10 mt-40 text-sm relative'>
        <div>
            <img src={assets.logo} className='w-32 mb-5' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Join our fashion community and unlock an exclusive 20% discount on your first purchase. Be the first to access new collections, special offers, and style inspiration. Don’t miss out—subscribe today and elevate your wardrobe for less!</p>
        </div> 
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-000-000-0000</li>
                <li>nabeelgaming786yt@gmail.com</li>
                <li>Githubs</li>
                <li>Facebook</li>
            </ul>
        </div>
      <div onClick={scrollToTop} className='"w-12 h-12 ml-5 rounded-xl bg-red-500 text-white flex items-center justify-center shadow-lg  
  transition-all duration-300 hover:bg-red-600 hover:scale-110 active:scale-90'>
        <Link onClick={scrollToTop} className='text-3xl scroll-smooth duration-300 top-0' href="/">&#x2B06;</Link>
      </div>
    </div>
  )
}

export default Footer
