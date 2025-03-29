import React, { useState } from 'react'

const NewsLetterBox = () => {
    const handleSubmit = (e)=>{
        const emailData = {
        email:value,
        }
        e.preventDefault()
        setValue("")
    }
    const [value,setValue] = useState("")
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-400'>Subscribe Now & Enjoy 20% Off – Exclusive Deals Just for You!</p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 mx-auto flex items-center justify-center gap-3 my-6 border pl-3'>
        <input type="email" className='w-full outline-none sm:flex-1' value={value} onChange={(e)=> setValue(e.target.value)} placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>

        </form>
    </div>
  )
}

export default NewsLetterBox
