import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../State-slice/BannerSlice";
import homePageReducer from "../State-slice/HomePageSlice";
import categoryReducer from "../State-slice/CategorySlice";
import FoodDiaryReducer from "../State-slice/FoodDiarySlice";
const store = configureStore({
  reducer: {
    banner: bannerReducer,
    homePage: homePageReducer,
    category: categoryReducer,
    foodDiary: FoodDiaryReducer,
  },
});

export default store;
