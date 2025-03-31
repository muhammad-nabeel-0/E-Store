import React, { useState } from 'react'
import Title from '../components/Title'
import PlaceOrderForm from '../components/PlaceOrderForm'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  const [method,setMethod] = useState("cod")
  return (
    <div className='flex justify-between flex-col sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* ------------------ Left Side ------------------------- */}
     <PlaceOrderForm/>
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
        <div className='flex justify-end my-10'>
              <button className='bg-black px-8 py-3 text-white text-sm'>PLACE ORDER</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default PlaceOrder
