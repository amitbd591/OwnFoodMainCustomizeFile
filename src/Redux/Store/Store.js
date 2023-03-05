import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../State-slice/BannerSlice";
import homePageReducer from "../State-slice/HomePageSlice";
import categoryReducer from "../State-slice/CategorySlice";
const store = configureStore({
  reducer: {
    banner: bannerReducer,
    homePage: homePageReducer,
    category: categoryReducer,
  },
});

export default store;
