import { createSlice } from "@reduxjs/toolkit";
export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    allCategoryList: [],
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.allCategoryList = action.payload;
    },
  },
});
export const { setCategoryList } = CategorySlice.actions;
export default CategorySlice.reducer;
