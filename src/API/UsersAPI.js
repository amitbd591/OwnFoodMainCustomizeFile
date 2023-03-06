import axios from "axios";
import { BaseURL } from "../Helper/config";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { setEmail, setToken, setUserDetails } from "../Helper/SessionHelper";
import { setBannerList } from "../Redux/State-slice/BannerSlice";
import store from "../Redux/Store/Store";

// create Users API

export const createUsersAPI = async (userFullName, email, userPassword) => {
  try {
    let URL = BaseURL + "/create-users";
    let res = await axios.post(URL, { userFullName, email, userPassword });

    if (res.status === 200 && res.data["status"] === "Success") {
      store.dispatch(setBannerList(res.data.data));
      SuccessToast("Registration successfully!");
      return true;
    } else if (
      res.status === 200 &&
      res.data["status"] === "Fail" &&
      res.data.data.keyPattern["email"] === 1
    ) {
      ErrorToast("User Already Exists!");
      return false;
    } else {
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong! createUsersAPI -2");
    return false;
  }
};

// Login In User

export const loginUsersAPI = async (email, userPassword) => {
  try {
    let URL = BaseURL + "/login-users";
    let res = await axios.post(URL, { email, userPassword });

    if (res.status === 200 && res.data["status"] === "Success") {
      setToken(res.data["Token"]);
      setUserDetails(res.data["data"]);
      SuccessToast("Login successfully!");
      return true;
    } else if (res.status === 200 && res.data["status"] === "Unauthorized") {
      ErrorToast("User email or password dose not match!");
      return false;
    } else {
      ErrorToast("Something went wrong! loginUsersAPI -1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something went wrong! loginUsersAPI -2");
    return false;
  }
};

//! =================== Step One Recovery Verify Email ===================

// Step One Recovery Verify Email
export const RecoveryVerifyEmail = async (email) => {
  try {
    let URL = BaseURL + "/forget-password-verify-email/" + email;
    let res = await axios.post(URL);
    if (res.status === 200) {
      if (res.data["status"] === "Fail") {
        ErrorToast("No User Found");
        return false;
      } else {
        setEmail(email);
        SuccessToast(
          "A 6 Digit verification code has been sent to your email address. "
        );
        return true;
      }
    } else {
      ErrorToast("Something wrong RecoveryVerifyEmailAPI-1");
      return false;
    }
  } catch (e) {
    ErrorToast("Something wrong RecoveryVerifyEmailAPI-2");
    return false;
  }
};
