import { createContext, useState, useContext } from "react";
import { getProductById } from "../Data/products.js"; // Explicitly add .js

export const CartContext = createContext(null);

export default function CartProvider({children}) {
   const [cart, setCart] = useState([]);

    function addToCart(productID) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === productID);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === productID ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { id: productID, quantity: 1 }];
            }
        });
    }

    //take the new, filtered array and updates the application state    
    function removeFromCart(productID) {
        setCart(prevCart => prevCart.filter(item => item.id !== productID));
    }

    function getCartItemsWithProducts() {
        return cart
        .map(item => {
        const productData = getProductById(item.id);
        
        // If product data is missing, return null
        if (!productData) return null; 

        return {
            ...item,
            product: productData
        };
        })
        // Filter out any null entries so only valid items remain
        .filter(item => item !== null); 
    }


    function updateCartItemQuantity(productID, newQuantity) {
        if (newQuantity <= 0) {
            // 1. If quantity is 0 or less, use your existing remove function directly
            removeFromCart(productID);
        } else {
            // 2. Otherwise, update the array normally
            setCart(prevCart => 
            prevCart.map(item => 
                item.id === productID ? { ...item, quantity: newQuantity } : item
            )
            );
        }
    }


    function getCartTotal() {
       const fullItems = getCartItemsWithProducts(); 
  
        return fullItems.reduce(
        (acc, item) => acc + (
            (item.product?.price || 0) * (item.quantity || 0)), 0);
    }


    return (
        <CartContext.Provider 
            value={{cart, 
            addToCart, 
            removeFromCart, 
            getCartItemsWithProducts, 
            updateCartItemQuantity, 
            getCartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
        return useContext(CartContext);
}