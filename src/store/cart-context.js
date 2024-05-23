import React, { createContext, useState } from "react";

const CartContext = createContext({
    shirts:[],
    addShirt: ()=>{},
})

export const CartContextProvider = (props)=>{

    const [shirts, setShirts] = useState([]);

    const addShirtHandler = (shirtDetail) =>{
        const updatedData = shirts.map((shirt)=>{
            if(shirt.size === shirtDetail.size && shirt.id === shirtDetail.id){
                return{
                    ...shirt, quantity: shirt.quantity+1
                }
            }
            return shirt
        })
        if(!updatedData.find((shirt)=>shirt.size === shirtDetail.size && shirt.id === shirtDetail.id)){
            updatedData.push(shirtDetail)
        }
        setShirts(updatedData);
    }

    const cartContext = {
        shirts:shirts,
        addShirt: addShirtHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContext;