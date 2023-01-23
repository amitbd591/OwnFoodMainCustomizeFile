import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='Footer footer-part '>
      <Container>
        <div className='row py-5'>
          <div className='col-sm-6 col-xl-4'>
            <div className='footer-widget'>
              <a className='footer-logo ' href='#'>
                <img
                  src='/Assets/Img/Logo_footer.png'
                  className='img-fluid'
                  alt='logo'
                />
              </a>
              <p className='footer-desc '>
                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
              </p>
              <ul className=' d-flex gap-2 mt-3 justify-content-start ps-0 footer-social '>
                <li>
                  <a href='#'>
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-6 col-xl-2'>
            <div className='footer-widget'>
              <h3 className='footer-title'>Information</h3>
              <div className='footer-links'>
                <ul>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#'>Wishlist</a>
                  </li>
                  <li>
                    <a href='#'>Portfolio</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Frequently</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-sm-6 col-xl-3'>
            <div className='footer-widget'>
              <h3 className='footer-title'>Categories</h3>
              <div className='footer-links'>
                <div className='row '>
                  <div className='col-6'>
                    <ul>
                      <li>
                        <a href='#'>Popular Kitchen</a>
                      </li>
                      <li>
                        <a href='#'>Instant Food</a>
                      </li>
                      <li>
                        <a href='#'>Pre-Order Food</a>
                      </li>
                      <li>
                        <a href='#'>Wish Order</a>
                      </li>
                      <li>
                        <a href='#'>Catering Food</a>
                      </li>
                      <li>
                        <a href='#'>Find us in this State</a>
                      </li>
                      <li>
                        <a href='#'>All Categories</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-5'>
                    <ul>
                      <li>
                        <a href='#'>Location</a>
                      </li>
                      <li>
                        <a href='#'>Affiliates</a>
                      </li>
                      <li>
                        <a href='#'>Contact</a>
                      </li>
                      <li>
                        <a href='#'>Carrer</a>
                      </li>
                      <li>
                        <a href='#'>Faq</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-xl-3'>
            <div className='footer-widget'>
              <h3 className='footer-title ms-0'>Download App</h3>
              <p className='footer-desc'>
                Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                autem obcaecati minus ducimus totam reprehenderit
                exercitationem!
              </p>
              <div className='row mt-3'>
                <div className='col-5 gap-1 cash'>
                  <a href='#'>
                    <img
                      src='/Assets/Img/google-store.png'
                      className='img-fluid'
                      alt='google'
                    />
                  </a>
                </div>
                <div className='col-5 gap-1 cash'>
                  <a href='#'>
                    <img
                      src='/Assets/Img/app-store.png'
                      className='img-fluid'
                      alt='app'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <hr className='bottomhr' />
      <div className='row footer_bottom'>
        <div className='col-12'>
          <div className=''>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <p className='footer-copytext'>
                  © All Copyrights Reserved by <a href='#'>OwnFood</a>
                </p>
              </div>
              <div className='footer-card d-flex gap-1'>
                <a href='#'>
                  <img
                    src='/Assets/Img/payment/jpg/01.jpg'
                    className='img-fluid rounded footer__pay__img'
                    alt='payment'
                  />
                </a>
                <a href='#'>
                  <img
                    src='/Assets/Img/payment/jpg/02.jpg'
                    className='img-fluid rounded footer__pay__img'
                    alt='payment'
                  />
                </a>
                <a href='#'>
                  <img
                    src='/Assets/Img/payment/jpg/03.jpg'
                    className='img-fluid rounded footer__pay__img'
                    alt='payment'
                  />
                </a>
                <a href='#'>
                  <img
                    src='/Assets/Img/payment/jpg/04.jpg'
                    className='img-fluid rounded footer__pay__img'
                    alt='payment'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
