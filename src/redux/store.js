import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { add, remove } from "./features/cart/cartSlice";
import productReducer, { fetchItem } from "./features/product/productSlice";
import User from "./features/user/userSlice";
import noteTaker from "./features/NoteTaker/NoteSlice";
const store = configureStore({
  reducer: { cart: cartReducer, product: productReducer, User, noteTaker },
});
export default store;
export { add, remove, fetchItem, User };
