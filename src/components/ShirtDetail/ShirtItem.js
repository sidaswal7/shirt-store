import React from "react";

const ShirtItem = (props) =>{
    return(
        <div className="flex justify-evenly items-center mb-4">
            <h1 className="basis-1/6">{props.shirtName}</h1>
            <p className="basis-1/6">{props.description}</p>
            <h4 className="basis-1/6 pl-4">${props.price}</h4>
            <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1">Buy ({props.largeSize})</button>
            <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1 ml-3">Buy({props.medSize})</button>
            <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1 ml-3">Buy({props.smallSize})</button>
        </div>
    )
}

export default ShirtItem;