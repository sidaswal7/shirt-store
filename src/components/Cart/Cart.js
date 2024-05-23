import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import CartContext from "../../store/cart-context";

function sizeTable(sizeKey){
  switch(sizeKey){
    case "largeSize": return "L";
    case "medSize": return "M";
    default: return "S"
  }
}

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
  return (
    <Modal>
      <header className="flex justify-between px-7 mb-4">
        <h2 className="text-2xl text-blue-700 font-semibold">CART</h2>
        <button
          onClick={props.onHideCart}
          className="text-black font-semibold text-2xl"
        >
          X
        </button>
      </header>
      <ul>
        {cartCtx.shirts.map((item)=>{
            return(
                <CartItems
                    key={item.id}
                    shirtName={item.shirtName}
                    price={item.price}
                    size = {sizeTable(item.size)}
                    quantity={item.quantity}
                />
            )
        })}
      </ul>
      <footer>
        <div className="flex justify-center">
          <h2 className="font-medium mt-4 text-xl">
            Total: ${cartCtx.shirts.reduce((sum,item)=>sum+item.quantity*item.price,0)}
          </h2>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-600 p-4 py-2 hover:bg-green-700 text-white rounded mt-4 font-bold text-xl">
            Purchase
          </button>
        </div>
      </footer>
    </Modal>
  );
};

export default Cart;
