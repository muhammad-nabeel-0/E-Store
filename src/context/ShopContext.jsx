import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()

const ShopContextProvider = (props)=>{
    //  ------------------------------- variable & States ---------------------- 
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState("")
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems] = useState({})
    const navigate = useNavigate()

    // ------------------ addTocart Function --------------------------- 

    const addToCart = async(itemId,size)=>{
        if(!size){
            toast.error("Select Product Size!")
            return;
        }
        let cardData = structuredClone(cartItems)
        if(cardData[itemId]){
            if (cartItems[itemId][size]) {
                cardData[itemId][size]+= 1;
            }
            else{
                cardData[itemId][size] =1
            }
        }
        else{
            cardData[itemId] = {};
            cardData[itemId][size] = 1
        }
        setCartItems(cardData)
    }
    // -------------------------------- getCartCount Funcition -----------------------
    const getCartCount = ()=>{
        let totalCount = 0;
        for (const items in cartItems) {
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item]> 0){
                        totalCount+= cartItems[items][item]
                    }
                    
                } catch (error) {
                    console.log(error.message);
                }
            }
        }
        return totalCount;
    }
    //------------------------------------ getCartAmount Function ------------------------
    const getCartAmount =  ()=> {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
                for(const item in cartItems[items]){
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
            
        }
        return totalAmount;
    };
    
// ---------------------------- updateQuentity Functon ------------------------------
    const updatedQuentity = async(itemId,size,quentity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quentity;
        setCartItems(cartData)

    }
    // -------------------------- All vaiables and State&Function ----------------------------
    const value = {
        products,currency,delivery_fee,search,showSearch,setSearch,setShowSearch,addToCart,cartItems,getCartCount,updatedQuentity,getCartAmount,navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;