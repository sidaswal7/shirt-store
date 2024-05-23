import React from "react";

const CartItems = (props) => {
  return (
    <li>
      <div className="flex justify-between">
        <h2 className="basis-1/3 font-medium">{props.shirtName}</h2>
        <h2 className="basis-1/3 font-medium">{props.size}</h2>
        <div className="basis-1/3 flex font-medium">
          <span className="mr-10">x {props.quantity}</span>
          <span>${props.price}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
