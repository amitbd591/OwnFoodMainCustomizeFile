import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    allCartList: [],
  },
  reducers: {
    setCartList: (state, action) => {
      state.allCartList = action.payload;
    },
  },
});
export const { setCartList } = CartSlice.actions;
export default CartSlice.reducer;
