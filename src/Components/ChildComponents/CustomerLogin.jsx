import React, { useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { loginUsersAPI } from "../../API/UsersAPI";
import { ErrorToast, IsEmail, IsEmpty } from "../../Helper/FormHelper";
const CustomerLogin = () => {
  let emailRef,
    passRef = useRef();
  let navigate = useNavigate();
  const prevPath = localStorage.getItem("prevPath");
  console.log(navigate);
  const LoginSubmit = async (event) => {
    event.preventDefault();
    let email = emailRef.value;
    let userPassword = passRef.value;

    if (IsEmpty(userPassword)) {
      ErrorToast("Password Required !");
    } else if (IsEmail(email)) {
      ErrorToast("Email Required!");
    } else {
      let result = await loginUsersAPI(email, userPassword);
      if (result) {
        navigate(prevPath || "/");
        // navigate("/CustomerLogin");
      }
    }
  };

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
                        ref={(input) => (emailRef = input)}
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
                        ref={(input) => (passRef = input)}
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
                    <Link
                      to='/ForgetPassword'
                      class='link-light float-end forgot-password'
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <div class='form-group clearfix mb-0'>
                    <button
                      onClick={LoginSubmit}
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
                <Link to='/CustomerRegistration'> Register here</Link>
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
