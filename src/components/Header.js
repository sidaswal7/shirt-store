import React, { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import CartContext from "../store/cart-context";

const Header = () => {

    const cartCtx = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = ()=>{
        setShowCart(true);
    }
    const hideCartHandler = ()=>{
        setShowCart(false);
    }
  return (
    <header>
        {showCart && <Cart onHideCart={hideCartHandler}/>}
      <h1 className="font-bold text-center text-green-700 text-2xl mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 py-3">
        ShirtStore.com
      </h1>
      <div className="flex justify-center items-center ">
        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded shadow-md" onClick={showCartHandler}>
          CART
          <span className="ml-2">{cartCtx.shirts.reduce((sum,item)=>sum+ item.quantity,0)}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
