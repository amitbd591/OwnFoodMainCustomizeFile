import { createSlice } from "@reduxjs/toolkit";
export const FoodDiarySlice = createSlice({
  name: "FoodDiary",
  initialState: {
    allFoodDiaryList: [],
  },
  reducers: {
    setAllFoodDiaryList: (state, action) => {
      state.allFoodDiaryList = action.payload;
    },
  },
});
export const { setAllFoodDiaryList } = FoodDiarySlice.actions;
export default FoodDiarySlice.reducer;
