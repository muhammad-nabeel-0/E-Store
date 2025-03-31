import React from 'react'
import Title from '../components/Title'

const PlaceOrderForm = () => {
  return (
    <div className='flex flex-col gap-4 w-full sm:max-w-[488px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY "} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='First Name' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Last Name' />
        </div>
        <input type="email" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Email' />
        <input type="Text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Street' />
        <div className='flex gap-3'>
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='City' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Zipcode' />
          <input type="text" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Country' />
        </div>
        <input type="number" className='border border-gray-300 rounded py-1.5 px-3.5 w-full' required placeholder='Phone' />
      </div>
  )
}

export default PlaceOrderForm
