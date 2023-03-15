import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast } from "../Helper/FormHelper";
import { setAllFoodDiaryList } from "../Redux/State-slice/FoodDiarySlice";
import store from "../Redux/Store/Store";

// get-banners API

export const getAllFoodDiaryAPI = async () => {
  try {
    let URL = BaseURL + "/get-food-diary";
    let res = await axios.get(URL);

    if (res.status === 200 && res.data["status"] === "Success") {
      store.dispatch(setAllFoodDiaryList(res.data.data));
      return true;
    } else {
      ErrorToast("Something went wrong! getAllBlogAPI -1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong! getAllBlogAPI -2");
    return false;
  }
};
