import React, { useContext } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const {products,currency} = useContext(ShopContext)
  const newDate = new Date()
  const displayDate = newDate.toLocaleDateString()
  
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div className='py-4 border-t border-b text-gray-700 flex flex-col 
            sm:flex-row md:items-center sm:justify-between ' key={index}>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div>
                  <p className='text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>Date: <span className='text-gray-400'>{displayDate}</span></p>
                </div>
              </div>
              <div className='flex justify-between md:w-1/2'>
              <div className='flex gap-2 items-center'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'>Ready to ship</p>
              </div>
              <button className='border px-4 py-2 text-sm rounded-sm'>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
