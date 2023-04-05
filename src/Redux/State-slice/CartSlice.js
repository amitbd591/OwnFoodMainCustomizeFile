import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "cart",
  // initialState: {
  //   allCartList: [],
  //   count: 3,
  //   totalItem: 0,
  //   subTotalAmount: 0,
  // },
  initialState: [],
  reducers: {
    setCartList: (state, action) => {
      state.allCartList = action.payload;
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.foodQty++;
      } else {
        state.push({ ...newItem, foodQty: 1 });
      }
    },
  },
});
export const { addItem, setCartList } = CartSlice.actions;
export default CartSlice.reducer;
