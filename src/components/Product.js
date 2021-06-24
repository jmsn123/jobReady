import React from "react";
import { useSelector, useDispatch } from "react-redux";
import store, { add, fetchItem, remove } from "../redux/store";

function Product() {
  const products = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();
  return (
    <div>
      fds
      {products.map((item) => (
        <div>
          {item.title}
          {item.price}
          <button onClick={() => dispatch(add(item))}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Product;
