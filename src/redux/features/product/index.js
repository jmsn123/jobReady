import React from "react";
import { useSelector } from "react-redux";
import productSlice from "./productSlice";
function Product() {
  const Product = useSelector((state) => state.state);
  return (
    <div>
      {productSlice.maps((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default Product;
