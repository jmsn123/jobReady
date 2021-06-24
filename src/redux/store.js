import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { add, remove } from "./features/cart/cartSlice";
import productReducer, { fetchItem } from "./features/product/productSlice";
const store = configureStore({
  reducer: { cart: cartReducer, product: productReducer },
});
export default store;
export { add, remove, fetchItem };
