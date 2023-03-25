import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseURL } from "../../Helper/config";

const SellerProfile = () => {
  let params = useParams();
  const [seller, setSeller] = useState([]);
  useEffect(() => {
    axios
      .get(BaseURL + "/get-single-public-become-seller/" + params.id)
      .then((res) => {
        setSeller(res.data.data?.[0]);
      });
  }, []);

  let totalSub = 0;

  for (let i = 0; i < seller?.foodReview?.length; i++) {
    totalSub = totalSub + seller?.foodReview?.[i].reviewStar;
  }

  let rate = totalSub / seller?.foodReview?.length;

  return (
    <div>
      <main className='SellerProfile body-content'>
        <div className='ms-content-wrapper'>
          <div className='ms-profile-overview'>
            <div
              className='ms-profile-cover'
              style={{ backgroundImage: 'url("/Assets/Img/b1.jpg")' }}
            >
              <img
                className='ms-profile-img'
                src={seller?.sellerProfilePhoto}
                alt='people'
              />
              <div className='ms-profile-user-info'>
                <h4 className='ms-profile-username text-white'>
                  {seller?.kitchenName}
                </h4>
                <h2 className='ms-profile-role'>{seller?.sellerNationality}</h2>
              </div>
            </div>

            <div className='tab-content'>
              <div className='tab-pane' id='tab1'></div>
              <div className='tab-pane' id='tab2'></div>
              <div className='tab-pane' id='tab3'></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-xl-9 col-md-12'>
              <div className='row'>
                <div className='col-12'>
                  <div className='ms-panel ms-panel-fh'>
                    <div className='ms-panel-body'>
                      <h4 className='fw-bold '>About Me</h4>
                      <hr />
                      <p>{seller?.aboutSeller}</p>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='ms-panel ms-panel-fh'>
                    <div className='ms-panel-body'>
                      <h5>Pick a delivery date</h5>
                      <hr />
                      <div className='row gap-1 mt-3'>
                        <div className='col-1 border pick-date'>
                          <div
                            className='d-flex flex-column
                           text-center'
                          >
                            <span className='fw-bold pick-day'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>

                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                        <div className='col-1 border'>
                          <div className='d-flex flex-column text-center'>
                            <span className='fw-bold'>SUN</span>
                            <span>Jan 26</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-md-12'>
              <div className='ms-panel ms-panel-fh'>
                <div className='ms-panel-body'>
                  <ul className='ms-profile-stats'>
                    <li>
                      <h3 className='ms-count'>{"120"}</h3>
                      <span>Total Delivery</span>
                    </li>
                    <li>
                      <h3 className='ms-count'>{rate}/5</h3>
                      <span>User Rating</span>
                    </li>
                  </ul>

                  <img src={"/Assets/Img/offer.png"} className='img-fluid' />
                </div>
              </div>
            </div>

            <div className='col-xl-3 col-md-12'>
              <div className='asidebar  bg-white shadow-lg'>
                <Link to={"/sellerprofile/allproduct"}> All Prodct</Link>
                <Link to={"/ba"}>Chickn</Link>
                <Link to={"/allprduct"}>Burger</Link>
                <Link to={"/allprouct"}>Burger</Link>
                <Link to={"/allprodct"}>Burger</Link>
                <Link to={"/allprodut"}>Burger</Link>
                <Link to={"/allproduc"}>Burger</Link>
              </div>
            </div>
            <div className='col-xl-9 col-md-12'>
              <div className='ms-panel pt-3'>{/* <AllProduct /> */}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerProfile;
