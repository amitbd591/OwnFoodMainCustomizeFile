import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Two_one, Uber_image, Four_two } from "../../Database/ImgData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
const FoodCatGallery = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    slidesToScroll: 1,
  };

  return (
    <section className=' FoodCatGallery section mt-5'>
      <div className='container-fluid'>
        <div className='row g-3'>
          <div className='col-md-3  '>
            <div className='card'>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
              </div>
              <div className='row mt-1 g-2  card_product'>
                {Four_two.map((item, index) => {
                  return (
                    <div
                      className='col-md-6 card_navigate '
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className='img_animation'>
                        <img src={item.item_image} className='img-fluid ' />
                      </div>
                      <p className='text-center' style={{ fontWeight: "bold" }}>
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className='col-md-12'>
                <Link
                  to={"/ShoppingDetails"}
                  className='see_more'
                  style={{ marginRight: 15 }}
                >
                  See more
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-3  '>
            <div className='card'>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
              </div>
              <div className='row mt-1  g-2 card_product'>
                {Four_two.map((item, index) => {
                  return (
                    <div
                      className='col-md-6  card_navigate'
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className='img_animation'>
                        <img src={item.item_image} className='img-fluid ' />
                      </div>
                      <p className='text-center' style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className='col-md-12'>
                <Link
                  to={"/ShoppingDetails"}
                  className='see_more'
                  style={{ marginRight: 15 }}
                >
                  See more
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-3  '>
            <Slider {...settings}>
              <div className='card '>
                <div className='card-header sf_top_card'>
                  <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
                </div>
                <div className='row mt-1 single_product_card'>
                  <div
                    className='single_product_card_navigation'
                    onClick={() => {
                      navigate("productdetails");
                    }}
                  >
                    <div className='img_animation'>
                      <img src={Two_one[0].item_image} className='img-fluid' />
                    </div>
                    <p className='mt-3' style={{ fontWeight: "bold" }}>
                      {Two_one[0].item_name}
                    </p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <Link
                    to={"/ShoppingDetails"}
                    className='see_more'
                    style={{ marginRight: 15 }}
                  >
                    See more
                  </Link>
                </div>
              </div>
              <div className='card '>
                <div className='card-header sf_top_card'>
                  <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
                </div>
                <div className='row mt-1 single_product_card'>
                  <div
                    className='single_product_card_navigation'
                    onClick={() => {
                      navigate("productdetails");
                    }}
                  >
                    <div className='img_animation'>
                      <img src={Two_one[0].item_image} className='img-fluid' />
                    </div>
                    <p className='mt-3' style={{ fontWeight: "bold" }}>
                      {Two_one[0].item_name}
                    </p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <Link
                    to={"/ShoppingDetails"}
                    className='see_more'
                    style={{ marginRight: 15 }}
                  >
                    See more
                  </Link>
                </div>
              </div>
              <div className='card '>
                <div className='card-header sf_top_card'>
                  <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
                </div>
                <div className='row mt-1 single_product_card'>
                  <div
                    className='single_product_card_navigation'
                    onClick={() => {
                      navigate("productdetails");
                    }}
                  >
                    <div className='img_animation'>
                      <img src={Two_one[0].item_image} className='img-fluid' />
                    </div>
                    <p className='mt-3' style={{ fontWeight: "bold" }}>
                      {Two_one[0].item_name}
                    </p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <Link
                    to={"/ShoppingDetails"}
                    className='see_more'
                    style={{ marginRight: 15 }}
                  >
                    See more
                  </Link>
                </div>
              </div>
              <div className='card '>
                <div className='card-header sf_top_card'>
                  <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
                </div>
                <div className='row mt-1 single_product_card'>
                  <div
                    className='single_product_card_navigation'
                    onClick={() => {
                      navigate("productdetails");
                    }}
                  >
                    <div className='img_animation'>
                      <img src={Two_one[0].item_image} className='img-fluid' />
                    </div>
                    <p className='mt-3' style={{ fontWeight: "bold" }}>
                      {Two_one[0].item_name}
                    </p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <Link
                    to={"/ShoppingDetails"}
                    className='see_more'
                    style={{ marginRight: 15 }}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </Slider>
          </div>

          <div className='col-md-3  '>
            <div className='card '>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
              </div>
              <div className='row mt-1 single_product_card'>
                <div
                  className='single_product_card_navigation'
                  onClick={() => {
                    navigate("productdetails");
                  }}
                >
                  <div className='img_animation'>
                    <img src={Two_one[1].item_image} className='img-fluid' />
                  </div>

                  <p className='mt-3' style={{ fontWeight: "bold" }}>
                    {Two_one[1].item_name}
                  </p>
                </div>
              </div>
              <div className='col-md-12'>
                <Link
                  to={"/ShoppingDetails"}
                  className='see_more'
                  style={{ marginRight: 15 }}
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCatGallery;
