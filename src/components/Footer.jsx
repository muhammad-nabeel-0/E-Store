import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div>

    <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm relative'>
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
       
    </div>
    <div>
            <hr  />
            <p className='py-5 text-center text-sm'>Copyright 2024@ nabeel.dev - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
