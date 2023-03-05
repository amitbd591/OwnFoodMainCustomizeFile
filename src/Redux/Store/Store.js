import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../State-slice/BannerSlice";
import homePageReducer from "../State-slice/HomePageSlice";
const store = configureStore({
  reducer: {
    banner: bannerReducer,
    homePage: homePageReducer,
  },
});

export default store;
