import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import ShirtContext from "../../store/shirt-context";


const Cart = (props) => {
    const shirtCtx = useContext(ShirtContext);
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
        {shirtCtx.shirts.map((item)=>{
            return(
                <CartItems
                    shirtName={item.shirtName}
                    price={item.price}
                    size = {item.size}
                    quantity={item.quantity}
                />
            )
        })}
      </ul>
      <footer>
        <div className="flex justify-center">
          <h2 className="font-medium mt-4 text-xl">
            Total: $
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
