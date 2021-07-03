import { createSlice } from "@reduxjs/toolkit";
import { phones, cart, _getPhones } from "../../../Utils/data";
const getItemIndex = (state, idToFind) => {
  const ids = state.map((item) => item.id);
  return ids.indexOf(idToFind);
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cart,
  reducers: {
    add: (state, action) => {
      let addedToCart = false;
      state.push({ ...action.payload });
    },
    remove: (state, action) => {
      const item = state.filter((item) => item.id !== action.payload.id);
      console.log(item);
      return item;
    },
  },
});
export default cartSlice.reducer;

export const { add, remove } = cartSlice.actions;
