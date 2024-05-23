import React, { createContext, useState } from "react";

const ShirtContext = createContext({
    shirts:[],
    addShirt: ()=>{},
})

export const ShirtContextProvider = (props)=>{

    const [shirts, setShirts] = useState([]);

    const addShirtHandler = (shirtDetail) =>{
        setShirts((prev)=>[...prev,shirtDetail])
    }

    const shirtContext = {
        shirts:shirts,
        addShirt: addShirtHandler
    }
    return(
        <ShirtContext.Provider value={shirtContext}>
            {props.children}
        </ShirtContext.Provider>
    )
}


export default ShirtContext;