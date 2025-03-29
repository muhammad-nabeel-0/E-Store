import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import RelatedProduct from '../components/RelatedProduct'
const Product = () => {
  const {id} = useParams()
  const {products,currency} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image,setImage] = useState("")
  const [select,setSelect] = useState('')
  const fetchData = ()=>{
    products.map((item)=>{
      if(item._id === id){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchData()
  },[productData])
  
  return productData ? (
    <div className='border-t-2 transition-opacity duration-500 opacity-100 ease-in pt-10'>
      {/*----------------------- Product Data--------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* --------------------Product images--------------- */}
        <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
          <div className='w-full sm:w-[19%] overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal flex sm:flex-col '> 
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} className='w-[24%] sm:w-full mb-3 flex-shrink-0 cursor-pointer' key={index} alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full  h-auto' src={image} alt="" />
          </div>
        </div>
        {/* -----------------------------Product info------------------------ */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className='pl-2'> (122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 sm:w-4/5 text-gray-500'>{productData.description}</p>
          <div className='my-5 flex flex-col gap-4'>
            <p className='text-lg font-light'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSelect(item)} className={`border bg-gray-100 px-4 py-2 ${item === select ?"border-orange-500":""}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button className='bg-black px-8 text-sm active:bg-gray-700 py-3 mt-5 text-white'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='flex flex-col gap-1 text-sm text-gray-400 mt-5'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
        {/* -----------------------------Product description Section--------------------- */}
        <div className='mt-20'>
          <div className='flex'>
            <b className='px-5 py-3 border text-sm'>Description</b>
            <p className='px-5 py-3 border text-sm'>Reviews (122)</p>
          </div>
          <div className='p-6 flex flex-col gap-4 text-sm text-gray-500 border'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>

          </div>
          {/* ---------------------Related Product-------------- */}
          <RelatedProduct  category={productData.category} subCategory={productData.subCategory}/>
        </div>
    </div>
  ):<div className='flex items-center justify-center pt-20'>
    <h1 className='text-xl sm:text-4xl text-center'>Product Not Found</h1>

  </div>
}

export default Product
