import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state);
  console.log(items);
  const total = items.cart.reduce((a, b) => Math.round(a + b.price), 0);
  console.log(total);
  return (
    <>
      <div className="pt-2 pb-2" style={{ backgroundColor: "black" }}>
        <h4 className="text-center" style={{ color: "white" }}>
          Total items : {items.cart.length}, Total Amount : {total}
        </h4>
      </div>
    </>
  );
};

export default Cart;
