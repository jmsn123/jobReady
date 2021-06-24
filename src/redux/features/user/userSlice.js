import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
const { loginSuccess, logoutSuccess } = userSlice.actions;
// actions technically
export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const res = await api.post("/api/auth/login", { username, password });
      dispatch(loginSuccess({ username }));
    } catch (e) {
      return console.error(e.message);
    }
  };
export const logiut = () => (dispatch) => {
  try {
    const res = await api.post("/api/auth/logout");
    return dispatch(logoutSuccess);
  } catch (e) {
    return console.error(e.message);
  }
};
