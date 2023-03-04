import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "../State-slice/BannerSlice";
const store = configureStore({
  reducer: {
    banner: bannerReducer,
  },
});

export default store;
