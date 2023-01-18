import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
const CustomerLogin = () => {
  return (
    <div class='CustomerLogin'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xl-5 col-lg-6 col-md-12 bg-color-23'>
            <div class='form-section'>
              <h3>Sign Into Your Account</h3>
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
                      <i class='HiOutlineMail'>
                        <HiOutlineMail />
                      </i>
                    </div>
                  </div>
                  <div class='form-group clearfix'>
                    <label for='second_field' class='form-label'>
                      Password
                    </label>
                    <div class='form-box'>
                      <input
                        name='password'
                        type='password'
                        class='form-control'
                        autocomplete='off'
                        id='second_field'
                        placeholder='Password'
                        aria-label='Password'
                      />
                      <i class='RiLockPasswordFill'>
                        {" "}
                        <RiLockPasswordFill />
                      </i>
                    </div>
                  </div>
                  <div class='checkbox form-group clearfix'>
                    <div class='form-check float-start'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        id='rememberme'
                      />
                      <label class='form-check-label' for='rememberme'>
                        Remember me
                      </label>
                    </div>
                    <a
                      href='forgot-password-23.html'
                      class='link-light float-end forgot-password'
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div class='form-group clearfix mb-0'>
                    <button
                      type='submit'
                      class='btn btn-primary btn-lg btn-theme'
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <p class='text-center'>
                Don't have an account?
                <a href='register-23.html'> Register here</a>
              </p>
            </div>
          </div>
          <div class='col-xl-7 col-lg-6 col-md-12 bg-img'>
            <div class='info'>
              <img src='/Assets/Img/login__logo_1.jpeg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
