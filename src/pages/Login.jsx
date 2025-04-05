import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState] = useState('Login')
  const submitHanlder = async (event)=>{
    event.preventDefault()
  }
  return (
    <form onSubmit={submitHanlder} className='flex items-center gap-4  
    flex-col w-[90%] sm:max-w-96 m-auto mt-14 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl prata-regular'>{currentState}</p>
        <hr className='border-none h-[2px] w-8 bg-gray-800' />
      </div>
      {currentState === "Login"?"":<input type="text" placeholder='Name' 
      required className='w-full px-3 py-2 border border-gray-800' />}
      
      <input type="email" placeholder='Email' required className='w-full px-3 py-2 border border-gray-800' />
      <input type="password" placeholder='Password' required className='w-full px-3 py-2 border border-gray-800' />
      <div className='flex justify-between mt-[-8px] w-full text-sm'>
        <p className='cursor-pointer'>Forget Your Password?</p>
        {
          currentState === "Login"
          ?<p className='cursor-pointer' onClick={()=>setCurrentState("Sign Up")} >Create Account</p>
          :<p className='cursor-pointer' onClick={()=>setCurrentState("Login")} >Login Here</p>
        }
      </div>
      <button type='submit' className='mt-4 bg-black text-white px-8 font-light py-2'>
        {currentState === "Login"?"Sign In":"Sign Up"}
        </button>
    </form>
  )
}
export default Login
