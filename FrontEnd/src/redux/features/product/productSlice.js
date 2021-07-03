import { createSlice } from "@reduxjs/toolkit";
import { phones } from "../../../Utils/data";

const productSlice = createSlice({
  name: "product",
  initialState: phones,
  reducers: {
    fetchItem: (state, action) => {
      return { ...state };
    },
  },
});

export const { fetchItem } = productSlice.actions;
export default productSlice.reducer;
