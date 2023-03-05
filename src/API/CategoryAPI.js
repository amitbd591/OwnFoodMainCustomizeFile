import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast } from "../Helper/FormHelper";
import { setCategoryList } from "../Redux/State-slice/CategorySlice";
import store from "../Redux/Store/Store";

// get-banners API

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
