import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { FoodItem } from "../../Database/ImgData";
import { Container } from "react-bootstrap";

const InstantFood = ({ title }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const settings = {
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    slidesToScroll: 1,
  };
  return (
    <Container
      className='InstantFood home-index-slider slider-arrow
      '
    >
      <div className='row  '>
        <div className='col'>
          <div className='section-heading'>
            <div className='headerText '>
              <div>
                <h2>
                  <span className='sf_init_title'>{title}</span>
                  <span className='sf_text-theme'> Foods</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "99%" }}>
        <Slider {...settings}>
          {FoodItem.map((item) => (
            <div className='wrapper'>
              <div class='product-card shadow'>
                <div class='product-media'>
                  <div class='product-label'>
                    <label class='label-text new'>new</label>
                  </div>
                  <button class='product-wish wish' tabindex='-1'>
                    <AiFillHeart />
                  </button>
                  <a class='product-image' tabindex='-1'>
                    <img
                      src={item.item_image}
                      className='img-fluid'
                      alt='product'
                    />
                  </a>
                  <div class='product-widget'>
                    <a
                      title='Product View'
                      href='#'
                      class='fas fa-eye'
                      data-bs-toggle='modal'
                      data-bs-target='#product-view'
                      tabindex='-1'
                    ></a>
                  </div>
                </div>
                <div class='product-content'>
                  <div class='product-rating'>
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
                    <a href='#' tabindex='-1'>
                      (3)
                    </a>
                  </div>
                  <h6 class='product-name'>
                    <Link to={"/ProductsDetails"} tabindex='-1'>
                      Chaowmin
                    </Link>
                  </h6>
                  <h6 class='product-price'>
                    <del>$34</del>
                    <span>
                      $28 <small>/piece</small>
                    </span>
                  </h6>
                  <button class='product-add' title='Add to Cart' tabindex='-1'>
                    <AiOutlineShopping />
                    <span>add</span>
                  </button>
                  <div class='product-action'>
                    <button class='button' title='Quantity Minus' tabindex='-1'>
                      <i class='icofont-minus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='row'>
        <div className='col'>
          <div className='d-flex justify-content-center'>
            <Link to={"/Category"}>
              <div className='custom__btn'>
                <button>Show More</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default InstantFood;
