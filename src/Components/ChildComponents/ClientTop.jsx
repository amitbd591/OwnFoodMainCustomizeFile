import React, { Component, useState } from "react";
import Slider from "react-slick";

import { Link, useNavigate } from "react-router-dom";
import { Uber_image } from "../../Database/ImgData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
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
    slidesToShow: 9,
    slidesToScroll: 1,
  };
  return (
    <section className='ClientTop sf_section brand-part '>
      <Container>
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
                  <div className='d-flex justify-content-center'>
                    <Link to={"/Category"} className='d-inline'>
                      <div
                        className='sf_brand-wrap slick-slide slick-cloned mt-3'
                        data-slick-index='-5'
                        aria-hidden='true'
                        tabIndex='-1'
                        style={{ width: 224 }}
                      >
                        <div className='sf_brand-media'>
                          <img src={item.item_image} alt='brand' />
                        </div>
                        <div className='brand-meta'>
                          <h4>vegan lover</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientTop;
