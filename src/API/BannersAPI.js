import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast } from "../Helper/FormHelper";
import { setBannerList } from "../Redux/State-slice/BannerSlice";
import store from "../Redux/Store/Store";

// get-banners API

export const getBannersAPI = async () => {
  try {
    let URL = BaseURL + "/get-banners";
    let res = await axios.get(URL);

    if (res.status === 200 && res.data["status"] === "Success") {
      store.dispatch(setBannerList(res.data.data));
      return true;
    } else {
      console.log("Something went wrong!-1");
      return false;
    }
  } catch (e) {
    console.log("Something went wrong!-2");
    return false;
  }
};
