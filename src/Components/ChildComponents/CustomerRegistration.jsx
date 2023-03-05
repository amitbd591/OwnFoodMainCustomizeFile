import React, { useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { createUsersAPI } from "../../API/UsersAPI";
import { ErrorToast, IsEmail, IsEmpty } from "../../Helper/FormHelper";
const CustomerRegistration = () => {
  const [isChecked, setisChecked] = useState(false);
  let fullNameRef,
    emailRef,
    passRef = useRef();
  let navigate = useNavigate();

  const termsControl = (e) => {
    setisChecked(e.target.checked);
  };

  const RegistrationSubmit = async (event) => {
    event.preventDefault();
    let userFullName = fullNameRef.value;
    let email = emailRef.value;
    let userPassword = passRef.value;

    if (IsEmpty(userFullName)) {
      ErrorToast("Name Required !");
    } else if (IsEmpty(userPassword)) {
      ErrorToast("Password Required !");
    } else if (IsEmail(email)) {
      ErrorToast("Email Required!");
    } else if (isChecked === false) {
      ErrorToast("please Agree Terms Of Service!");
    } else {
      let result = await createUsersAPI(userFullName, email, userPassword);
      if (result) {
        navigate("/CustomerLogin");
      }
    }
  };
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
                        ref={(input) => (fullNameRef = input)}
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
                        ref={(input) => (emailRef = input)}
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
                        ref={(input) => (passRef = input)}
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
                          onClick={(e) => termsControl(e)}
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
                      onClick={RegistrationSubmit}
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
