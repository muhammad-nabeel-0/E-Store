import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import PlaceOrderForm from '../components/PlaceOrderForm'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState("cod")
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex justify-between flex-col sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ------------------ Left Side ------------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[488px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY "} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input required type="text" name='firstName' className='border border-gray-300 
          rounded py-1.5 px-3.5 w-full' placeholder='First Name' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          required placeholder='Last Name' />
        </div>
        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Email' />
        <input type="Text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          required placeholder='Zipcode' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
          required placeholder='Country' />
        </div>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
        required placeholder='Phone' />
      </div>
      {/* ------------------- Right Side ------------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          <div className='flex gap-3 flex-col sm:flex-row'>
            <div onClick={()=>setMethod("strip")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "strip" ?"bg-green-400":""}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod("razor")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razor" ?"bg-green-400":""}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod("cod")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ?"bg-green-400":""}`}></p>
              <p className=' mx-4 font-medium text-sm text-gray-500' alt="">CASH ON DELIVERY</p>
            </div>
        </div>
        <div className='w-full text-end mt-8'>
              <button type='submit' onClick={()=> navigate("/orders")} 
              className='bg-black px-16 py-3 text-white text-sm active:bg-gray-800 transition-all'>PLACE ORDER</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}
export default PlaceOrder
