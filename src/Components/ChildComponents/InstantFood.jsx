import React, { Component, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FoodItem } from "../../Database/ImgData";

const InstantFood = () => {
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
    <section
      className='InstantFood home-index-slider slider-arrow
      '
    >
      <div className='row  '>
        <div className='col'>
          <div className='section-heading mt-5'>
            <div className='title-area text-center'>
              <span className='sub-title'></span>
              <h2 className='sec-title'>
                Instant <span className=' sf_text-theme'>Food</span>
              </h2>
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
                    <i class='active icofont-star'></i>
                    <i class='active icofont-star'></i>
                    <i class='active icofont-star'></i>
                    <i class='active icofont-star'></i>
                    <i class='icofont-star'></i>
                    <a href='#' tabindex='-1'>
                      (3)
                    </a>
                  </div>
                  <h6 class='product-name'>
                    <a href='#' tabindex='-1'>
                      Chaowmin
                    </a>
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
          <div className='section-btn-25'>
            <span>show more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantFood;
