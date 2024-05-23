import React, { useContext} from "react";
import ShirtItem from "./ShirtItem";
import ShirtContext from "../../store/shirt-context";


const ShirtDetail = ()=>{
    const shirtCtx = useContext(ShirtContext)
    return(
        <section className="border-2 border-green-600 py-4 mx-10 mb-5 p-10 rounded shadow-md">
            <h1 className="font-semibold text-xl text-center mb-8">Product Details</h1>
            {shirtCtx.shirts.map((item)=><ShirtItem
                key={item.id}
                id = {item.id}
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