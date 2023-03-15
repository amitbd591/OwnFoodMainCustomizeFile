import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast } from "../Helper/FormHelper";
import {
  setCategoryList,
  setFoodByCategoryList,
} from "../Redux/State-slice/CategorySlice";
import store from "../Redux/Store/Store";

// get category API

export const GetAllCategoryAPI = async () => {
  try {
    let URL = BaseURL + "/get-category";
    let res = await axios.get(URL);

    if (res.status === 200 && res.data["status"] === "Success") {
      store.dispatch(setCategoryList(res.data.data));
      return true;
    } else {
      ErrorToast("Something wrong! GetAllCategoryAPI -1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something wrong! GetAllCategoryAPI -2");
    return false;
  }
};

// get category API

export const GetFoodByCategoryAPI = async (catID, limit) => {
  try {
    let URL = BaseURL + "/get-food-by-category/" + catID + "/" + limit;
    let res = await axios.get(URL);

    if (res.status === 200 && res.data["status"] === "Success") {
      store.dispatch(setFoodByCategoryList(res.data.data));
      return true;
    } else {
      ErrorToast("Something wrong! GetFoodByCategoryAPI -1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something wrong! GetFoodByCategoryAPI -2");
    return false;
  }
};
