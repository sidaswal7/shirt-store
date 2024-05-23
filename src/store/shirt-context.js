import React, { createContext, useState, useEffect } from "react";

const ShirtContext = createContext({
    shirts:[],
    addShirt:() =>{},
    buyShirt: ()=>{}
})

export const ShirtContextProvider = (props)=>{

    const [shirts, setShirts] = useState([])

    const addShirtHandler = (item)=>{
       setShirts([...shirts,item])
    }

    const buyShirtHandler = (id, size)=>{
        const shirtArr = shirts.map((item)=>{
            if(item.id === id){
                let obj = {...item}
                obj[size] = (+obj[size]-1).toString()
                return obj
            }
            return item
        })
        setShirts(shirtArr)
    }

    const shirtContext = {
        shirts: shirts,
        addShirt: addShirtHandler,
        buyShirt: buyShirtHandler
    }
    useEffect(()=> async function(){
        try{
            const response = await fetch('https://shirt-app-6016c-default-rtdb.firebaseio.com/shirtData.json');
            if(!response.ok){
                throw new Error("Something went wrong!")
            }
            const data = await response.json();
            console.log(data);
            const loadedShirts = [];
            for(let key in data){
                loadedShirts.push({
                    id: key,
                    shirtName: data[key].enteredShirtName,
                    description: data[key].enteredDescription,
                    price: data[key].enteredPrice,
                    largeSize: data[key].enteredLargeSize,
                    medSize: data[key].enteredMedSize,
                    smallSize: data[key].enteredSmallSize
                })
            }
            setShirts(loadedShirts);

        } catch(error){
            console.log(error)
        }
        
    },[])
    return(
        <ShirtContext.Provider value={shirtContext}>
            {props.children}
        </ShirtContext.Provider>
    )
}
export default ShirtContext;