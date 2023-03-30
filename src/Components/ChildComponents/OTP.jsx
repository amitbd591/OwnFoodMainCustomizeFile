import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReactCodeInput from "react-code-input";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../Helper/config";
import { ErrorToast } from "../../Helper/FormHelper";

const OTP = () => {
  let navigate = useNavigate();
  let [data, setData] = useState("");
  let email = localStorage.getItem("forgetEmail")
    ? JSON.parse(localStorage.getItem("forgetEmail"))
    : "";

  const submitOTP = () => {
    axios
      .post(
        BaseURL + "/verify-otp-service-forget-password/" + email + "/" + data
      )
      .then((res) => {
        if (res.status === 200 && res.data.status === "Success") {
          localStorage.setItem("OTP", JSON.stringify(data));
          navigate("/Reset-Password");
        } else {
          ErrorToast("OTP Code Does Not Match!");
        }
      });
  };

  return (
    <div className='otp d-flex justify-content-center align-items-center '>
      <div class='card py-5 px-3 border'>
        <h5 class='m-0'>Mobile phone verification</h5>
        <span class='mobile-text text-dark'>
          Enter the code we just send on your email{" "}
          <b class='text-danger text-lowercase'>{email}</b>
        </span>
        <div class='d-flex flex-row mt-5'>
          <ReactCodeInput type='text' fields={6} onChange={(e) => setData(e)} />
        </div>
        <div class='text-center mt-5'>
          <button
            className='btn btn-primary font-weight-bold mb-2 cursor'
            onClick={submitOTP}
          >
            Submit
          </button>

          <span class='d-block mobile-text text-dark'>
            Don't receive the code? send again{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OTP;
