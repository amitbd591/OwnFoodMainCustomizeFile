import { createSlice } from "@reduxjs/toolkit";
export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    allCategoryList: [],
    allFoodByCategoryList: [],
  },
  reducers: {
    setCategoryList: (state, action) => {
      state.allCategoryList = action.payload;
    },
    setFoodByCategoryList: (state, action) => {
      state.allFoodByCategoryList = action.payload;
    },
  },
});
export const { setCategoryList, setFoodByCategoryList } = CategorySlice.actions;
export default CategorySlice.reducer;
