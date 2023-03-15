import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
const BrowseByKitchen = ({ data }) => {
  const [foodData, setFoodData] = useState([]);
  let y = [];
  data?.sectionCategories1?.map((x) => y.push(x.value));
  let postBody = y;
  useEffect(() => {
    axios
      .post(BaseURL + "/get-seller-with-food-details", { _id: postBody })
      .then((res) => {
        setFoodData(res.data.data);
      });
  }, []);

  console.log(foodData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  return (
    <section className='BrowseByKitchen section  bg-img shadow-lg'>
      <Container className='  bg-transparent_color'>
        <div className='row '>
          <div className='col-12'>
            <div className='section-heading'>
              <div class='title-area text-center'>
                <span class='sub-title'></span>
                <h2 class='sec-title'>
                  <span className='sf_init_title'> Browse by </span>{" "}
                  <span class=' sf_text-theme'>Seller</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
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
                {foodData?.map((item, index) => (
                  <Link to={"/SellerProfile"} key={index}>
                    <div
                      className='brand-wrap slick-slide slick-cloned mt-3 '
                      data-slick-index='-5'
                      aria-hidden='true'
                      tabIndex='-1'
                    >
                      <div className='brand-media'>
                        <img src={item?.sellerProfilePhoto} alt='brand' />
                        <div className='brand-overlay'></div>
                      </div>
                      <div className='brand-meta'>
                        <h4 className='sf_title_color_brand'>
                          {item?.kitchenName}
                        </h4>
                        <p className='text-dark'>{item?.foodData[0]?.count}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrowseByKitchen;
