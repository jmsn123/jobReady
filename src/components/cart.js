import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { store, remove } from "../redux/store";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {products.length}
        {products.map((item) => (
          <div>
            {item.price}{" "}
            <button onClick={() => dispatch(remove(item))}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
