import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const CustomerRegistration = () => {
  return (
    <div class='CustomerRegistration'>
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-xl-5 col-lg-6 col-md-12 bg-color-23'>
            <div class='form-section'>
              <h3>Create An Cccount</h3>
              <div class='login-inner-form'>
                <form action='#' method='GET'>
                  <div class='form-group clearfix'>
                    <label for='third_field' class='form-label'>
                      Full Name
                    </label>
                    <div class='form-box'>
                      <input
                        name='name'
                        type='text'
                        class='form-control'
                        id='third_field'
                        placeholder='Full Name'
                        aria-label='Full Name'
                      />
                      <i class='flaticon-user'>
                        <AiOutlineUser />
                      </i>
                    </div>
                  </div>
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
                      <i class='flaticon-password'>
                        <RiLockPasswordFill />
                      </i>
                    </div>
                  </div>
                  <div class='form-group checkbox clearfix'>
                    <div class='clearfix float-start'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          id='rememberme'
                        />
                        <label class='form-check-label' for='rememberme'>
                          I agree to the terms of service
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class='form-group clearfix mb-0'>
                    <button
                      type='submit'
                      class='btn btn-primary btn-lg btn-theme'
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <p class='text-center'>
                Don't have an account?
                <Link to='/CustomerLogin'> Login here</Link>
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

export default CustomerRegistration;
