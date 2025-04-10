import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {assets} from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible,setVisible] = useState(false)
    const {setShowSearch,getCartCount} = useContext(ShopContext)
return (
    <div className='flex items-center justify-between py-5  border-t'>
    <Link to="/"><img src={assets.logo} className='w-3/5' alt="" /></Link>
      {/* navbar */}
    <ul className=' hidden  sm:flex gap-5 text-sm text-gray-700 font-medium '>
        <NavLink to="/" className="flex flex-col gap-1 items-center">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col gap-1 items-center">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
    </ul>
        <div className='flex items-center gap-6'>
            <NavLink to={"/collection"}>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className=' w-5 max-w-5 cursor-pointer' />
            </NavLink>
        <div className='relative group '>
            <Link to="/login" ><img src={assets.profile_icon} className='cursor-pointer w-5 max-w-5' alt="" /></Link>
            <div className='group-hover:block hidden absolute transition-all duration-300 dropdown-menu right-0 pt-4  '>
                <div className='flex flex-col gap-2 w-36 py-3 px-5
                bg-slate-100 text-gray-500 rounded transition-all duration-300'>
                    <p className='hover:text-black cursor-pointer'>My Profile</p>
                    <p className='hover:text-black cursor-pointer'>Orders</p>
                    <p className='hover:text-black cursor-pointer'>Login</p>
                </div>
            </div>
        </div>
        <Link to="/cart" className='relative'>
        <img src={assets.cart_icon} className='w-3 min-w-5' alt="" />
        <p className=' absolute right-[-5px] bottom-[-5px] w-4 text-center 
        leading-4 rounded-full bg-black text-white text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={()=> setVisible(true)} src={assets.menu_icon} 
        className='w-5 cursor-pointer max-w-5 sm:hidden' alt="" />
    </div>
    {/* mobile navbar design */}
    <div className={`absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-white 
        transition-all duration-500 ${visible ? "w-full":"w-0"}`}>
        <div className='flex flex-col text-gray-600 dropIcons'>
            <div onClick={()=> setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer '>
                <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
    </div>
    </div>
    )
}
export default Navbar
