import React, { useEffect, useState } from "react";
import ShirtItem from "./ShirtItem";


const ShirtDetail = ()=>{
    const [shirtData, setShirtData] = useState([]);
    async function detailsHandler(){
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
            setShirtData(loadedShirts);

        } catch(error){

        }
        
    }
    useEffect(()=>{
        detailsHandler()
    },[])
    return(
        <section className="border-2 border-green-600 py-4 mx-10 mb-5 p-10 rounded shadow-md">
            <h1 className="font-semibold text-xl text-center mb-8">Product Details</h1>
            {shirtData.map((item)=><ShirtItem
                key={item.id}
                shirtName={item.shirtName}
                description={item.description}
                price={item.price}
                largeSize={item.largeSize}
                medSize={item.medSize}
                smallSize={item.smallSize}
            />)}
        </section>
    )
}

export default ShirtDetail;