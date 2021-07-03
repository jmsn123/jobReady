import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhones } from "./cartSlice";
function Cart() {
  const cart = useSelector((state) => state.phones);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(getPhones())}
        >
          GetPhones
        </button>
        <span>{cart}</span>
      </div>
    </div>
  );
}

export default Cart;
