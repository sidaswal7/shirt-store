import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import ShirtContext from "../../store/shirt-context";

const ShirtItem = (props) => {
    const cartCtx = useContext(CartContext);
    const shirtCtx = useContext(ShirtContext)

    const addtoCartHandler = (id,size)=>{
        cartCtx.addShirt({
            id,
            shirtName: props.shirtName,
            price:props.price,
            quantity:1,
            size

        })
        shirtCtx.buyShirt(id,size)

    }

  return (
    <div className="flex justify-evenly items-center mb-4">
      <h1 className="basis-1/6">{props.shirtName}</h1>
      <p className="basis-1/6">{props.description}</p>
      <h4 className="basis-1/6 pl-4">${props.price}</h4>
      <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1" onClick={()=>addtoCartHandler(props.id,'largeSize')}>
        Buy ({props.largeSize})
      </button>
      <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1 ml-3" onClick={()=>addtoCartHandler(props.id,'medSize')}>
        Buy({props.medSize})
      </button>
      <button className="basis-1/6 bg-green-600 hover:bg-green-700 rounded shadow-sm text-white py-1 ml-3" onClick={()=>addtoCartHandler(props.id,'smallSize')}>
        Buy({props.smallSize})
      </button>
    </div>
  );
};

export default ShirtItem;
