import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { FoodItem } from "../../Database/ImgData";
import ShoppingPopUp from "../Common/ShoppingPopUp";
const OrderFoodCat = (HomePageList) => {
  const Style4 = HomePageList.data.filter(
    (item) => item.sectionStyle === "Style4"
  );
  const navigate = useNavigate();

  console.log(Style4);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <section className='OrderFoodCat'>
      <Container>
        {Style4?.map((item, index) => (
          <div className='row g-2' key={index}>
            <div className='col-8   '>
              <div class='shadow__inner p-2'>
                <header class='py-2'>
                  <h3>{item?.sectionTitle1}</h3>
                </header>

                <div class='card-bod  show-hide-content'>
                  <div class='row g-2'>
                    {FoodItem.slice(0, 4).map((item, index) => (
                      <div className='col-3  rounded '>
                        <div className='product-card'>
                          <div className='product-media'>
                            <div className='product-label'>
                              <label className='label-text rate'>4.8</label>
                            </div>
                            <button className='product-wish wish'>
                              <i className='fas fa-heart'></i>
                            </button>
                            <a className='product-image img-flui' href='#'>
                              <div className='img_animation'>
                                <img src={item.item_image} alt='product' />
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
            <div className='col-4  '>
              <div class='shadow__inner p-2'>
                <header className='py-2'>
                  {" "}
                  <h3>{item?.sectionTitle2}</h3>
                </header>
                <span></span>
                <div class='card-body searchform show-hide-content'>
                  <div className='row g-1'>
                    {FoodItem.slice(0, 4).map((item) => (
                      <div className='col-6  '>
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
                                <img src={item.item_image} alt='product' />
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
                    ))}
                    <div className='col-12 mt-3'>
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
        ))}
      </Container>
      {show === true ? (
        <ShoppingPopUp show={show} handleClose={handleClose} />
      ) : (
        ""
      )}
    </section>
  );
};

export default OrderFoodCat;
