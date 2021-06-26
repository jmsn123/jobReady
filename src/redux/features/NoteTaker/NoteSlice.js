import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Notes",
  initialState: { notes: [] },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(...state.notes, action.payload);
    },
    removeNote: (state, action) => {
      const item = state.notes.filter((item) => item.id !== action.payload.id);
      return item;
    },
    getNotes: (state, action) => {
      return action.payload;
    },
  },
});

export const { addNote, removeNote, getNotes } = slice.actions;
export default slice.reducer;
