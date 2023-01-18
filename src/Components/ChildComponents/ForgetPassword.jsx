import React from "react";
import { HiOutlineMail } from "react-icons/hi";
const ForgetPassword = () => {
  return (
    <div class='ForgetPassword'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xl-5 col-lg-6 col-md-12 bg-color-23'>
            <div class='form-section'>
              <h3>Recover Your Password</h3>
              <div class='login-inner-form'>
                <form action='#' method='GET'>
                  <div class='form-group clearfix'>
                    <label for='first_field' class='form-label'>
                      Email address
                    </label>
                    <div class='form-box'>
                      <input
                        name='email'
                        type='email'
                        class='form-control'
                        id='first_field'
                        placeholder='Email Address'
                        aria-label='Email Address'
                      />
                      <i class='flaticon-mail-2'>
                        {" "}
                        <HiOutlineMail />
                      </i>
                    </div>
                  </div>
                  <div class='form-group mb-0'>
                    <button
                      type='submit'
                      class='btn btn-primary btn-lg btn-theme'
                    >
                      Send Me Email
                    </button>
                  </div>
                </form>
              </div>
              <p class='text-center'>
                Already a member?<a href='ForgotPassword.html'> Login here</a>
              </p>
            </div>
          </div>
          <div class='col-xl-7 col-lg-6 col-md-12 bg-img'>
            <div class='info'>
              <img src='Assets/Img/Logo.jpg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
