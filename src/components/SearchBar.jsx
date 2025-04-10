import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';
const SearchBar = () => {
    const {search,showSearch,setSearch,setShowSearch} = useContext(ShopContext);
    const [displayProduct,setDisplayProduct] = useState([])
    const [visible,setVisible] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        } else{
            setVisible(false)
        }
    },[location])
    const searchProduct = ()=>{
        setSearch(search)
    }
    useEffect(()=>{
        searchProduct()
    },[search])
  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='items-center justify-center inline-flex gap-3 border
        border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input type="text" className=' flex-1 outline-none bg-inherit text-sm' 
      placeholder='Search...' value={search} onChange={(e)=> setSearch(e.target.value)} />
      <img src={assets.search_icon} className='w-4' alt="" />
        </div>
      <img onClick={()=> setShowSearch(false)} src={assets.cross_icon} className='w-3 inline cursor-pointer' alt="" />
    </div>
  ):null
}
export default SearchBar
