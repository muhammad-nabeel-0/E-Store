import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
const {products} = useContext(ShopContext)
const [bestSeller,setBestSeller] = useState([]);
useEffect(()=>{
    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(1,6))
},[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Our Best Seller: A Perfect Blend of Style, Elegance, and Unmatched Comfort for Every Occasion.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {
            bestSeller.map((item,index)=>(
                <ProductItem key={index} name={item.name} price={item.price} image={item.image} id={item._id}  />
            ))
        }
        </div>
    </div>
  )
}

export default BestSeller
