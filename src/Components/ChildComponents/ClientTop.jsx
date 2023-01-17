import React, { Component, useState } from "react";
import Slider from "react-slick";

import { useNavigate } from "react-router-dom";
import { Uber_image } from "../../Database/ImgData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ClientTop = () => {
  const navigate = useNavigate();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    autoplaySpeed: 3000,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className='ClientTop sf_section brand-part '>
      <div className='container-fluid'>
        <div className='brand-slider slider-arrow slick-initialized slick-slider'>
          <div className='slick-list draggable '>
            <div
              className='slick-track'
              style={{
                opacity: 1,
                width: "100%",
                transform: `translate3d(${-1300}, ${0}, ${0}    )`,
              }}
            >
              <Slider {...settings}>
                {Uber_image.map((item) => (
                  <div
                    className='sf_brand-wrap slick-slide slick-cloned mt-3'
                    data-slick-index='-5'
                    aria-hidden='true'
                    tabIndex='-1'
                    style={{ width: 224 }}
                  >
                    <div className='sf_brand-media'>
                      <img src={item.item_image} alt='brand' />
                      <div
                        className='sf_brand-overlay'
                        onClick={() => {
                          navigate("shoppingpage");
                        }}
                      ></div>
                    </div>
                    <div className='brand-meta'>
                      <h4>vegan lover</h4>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTop;
