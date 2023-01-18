import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { FoodItem } from "../../Database/ImgData";
import ShoppingPopUp from "../Common/ShoppingPopUp";
const OrderFoodCat = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='OrderFoodCat'>
      <div className='container-fluid'>
        <div className='row '>
          <div className='col-md-8 shadow pt-2 rounded pb-2'>
            <div class='card'>
              <header class='ps-4 pt-2'>
                <h3>Order Foods by Categories</h3>
              </header>
              <span></span>
              <div class='card-body searchform show-hide-content'>
                <div class='d-flex flex-wrap'>
                  {[...Array(4)].map((item, index) => (
                    <div className='col-md-3  product-card-center'>
                      <div className='col shadow '>
                        <div className='product-card'>
                          <div className='product-media'>
                            <div className='product-label'>
                              <label className='label-text rate'>4.8</label>
                            </div>
                            <button className='product-wish wish'>
                              <i className='fas fa-heart'></i>
                            </button>
                            <a className='product-image' href='#'>
                              <div className='img_animation'>
                                <img
                                  src={FoodItem[1].item_image}
                                  alt='product'
                                />
                              </div>
                            </a>
                            <div className='product-widget'>
                              <span
                                title='Product View'
                                className='fas fa-eye'
                                data-bs-toggle='modal'
                                data-bs-target='#product-view'
                                onClick={() => {
                                  setShow(true);
                                }}
                              ></span>
                            </div>
                          </div>
                          <div className='product-content'>
                            <div className='product-rating'>
                              <span>
                                {" "}
                                <FaStar />
                              </span>
                              <span>
                                {" "}
                                <FaStar />
                              </span>
                              <span>
                                {" "}
                                <FaStar />
                              </span>
                              <span>
                                {" "}
                                <FaStar />
                              </span>
                              <span>
                                {" "}
                                <FaStar />
                              </span>
                              <a href='#'>(3)</a>
                            </div>
                            <h6 className='product-name'>
                              <Link to={"/ProductsDetails"}>
                                fresh green chilis
                              </Link>
                            </h6>
                            <h6 className='product-price'>
                              <del>$34</del>
                              <span>
                                $28 <small>/piece</small>
                              </span>
                            </h6>
                            <button className='product-add' title='Add to Cart'>
                              <i className='fas fa-shopping-basket'></i>
                              <span>add</span>
                            </button>
                            <div className='product-action'>
                              <button
                                className='action-minus'
                                title='Quantity Minus'
                              >
                                <i className='icofont-minus'></i>
                              </button>
                              <input
                                className='action-input'
                                title='Quantity Number'
                                type='text'
                                name='quantity'
                                value='1'
                              />
                              <button
                                className='action-plus'
                                title='Quantity Plus'
                              >
                                <i className='icofont-plus'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className='col-md-12'>
                    <Link
                      to={"/ShoppingDetails"}
                      className='see_more_1'
                      style={{ marginRight: 15 }}
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 pt-2 pb-2 ps-2 shadow rounded '>
            <div class='card'>
              <header class='ps-5 pt-2'>
                {" "}
                <h3>Buy Categories</h3>
              </header>
              <span></span>
              <div class='card-body searchform show-hide-content'>
                <div class='d-flex flex-wrap '>
                  <div className='col-md-6  '>
                    <div
                      className='sf_product-card shadow'
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      <div className='sf_product-media'>
                        <div className='sf_product-label'>
                          <label className='label-text rate'>4.8</label>
                        </div>
                        <button className='sf_product-wish wish'>
                          <i className='fas fa-heart'></i>
                        </button>
                        <a className='sf_product-image' href='#'>
                          <div className='img_animation'>
                            <img src={FoodItem[0].item_image} alt='product' />
                          </div>
                        </a>
                        <div className='sf_product-widget'>
                          <a
                            title='Product View'
                            href='#'
                            className='fas fa-eye'
                            data-bs-toggle='modal'
                            data-bs-target='#product-view'
                            onClick={() => {
                              setShow(true);
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 sf_product_card_upper'>
                    <div
                      className='sf_product-card'
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      <div className='sf_product-media'>
                        <div className='sf_product-label'>
                          <label className='label-text rate'>4.8</label>
                        </div>
                        <button className='sf_product-wish wish'>
                          <i className='fas fa-heart'></i>
                        </button>
                        <a className='sf_product-image' href='#'>
                          <div className='img_animation'>
                            <img src={FoodItem[2].item_image} alt='product' />
                          </div>
                        </a>
                        <div className='sf_product-widget'>
                          <a
                            title='Product View'
                            href='#'
                            className='fas fa-eye'
                            data-bs-toggle='modal'
                            data-bs-target='#product-view'
                            onClick={() => {
                              setShow(true);
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6  '>
                    <div
                      className='sf_product-card shadow'
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      <div className='sf_product-media'>
                        <div className='sf_product-label'>
                          <label className='label-text rate'>4.8</label>
                        </div>
                        <button className='sf_product-wish wish'>
                          <i className='fas fa-heart'></i>
                        </button>
                        <a className='sf_product-image' href='#'>
                          <div className='img_animation'>
                            <img src={FoodItem[0].item_image} alt='product' />
                          </div>
                        </a>
                        <div className='sf_product-widget'>
                          <a
                            title='Product View'
                            href='#'
                            className='fas fa-eye'
                            data-bs-toggle='modal'
                            data-bs-target='#product-view'
                            onClick={() => {
                              setShow(true);
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 sf_product_card_upper'>
                    <div
                      className='sf_product-card'
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      <div className='sf_product-media'>
                        <div className='sf_product-label'>
                          <label className='label-text rate'>4.8</label>
                        </div>
                        <button className='sf_product-wish wish'>
                          <i className='fas fa-heart'></i>
                        </button>
                        <a className='sf_product-image' href='#'>
                          <div className='img_animation'>
                            <img src={FoodItem[2].item_image} alt='product' />
                          </div>
                        </a>
                        <div className='sf_product-widget'>
                          <a
                            title='Product View'
                            href='#'
                            className='fas fa-eye'
                            data-bs-toggle='modal'
                            data-bs-target='#product-view'
                            onClick={() => {
                              setShow(true);
                            }}
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-12 mt-3'>
                    <Link
                      to={"/ShoppingDetails"}
                      className='see_more_2'
                      style={{ marginRight: 15 }}
                    >
                      See more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show === true ? (
        <ShoppingPopUp show={show} handleClose={handleClose} />
      ) : (
        ""
      )}
    </section>
  );
};

export default OrderFoodCat;
