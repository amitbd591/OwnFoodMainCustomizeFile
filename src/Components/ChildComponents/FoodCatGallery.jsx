import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Two_one, Uber_image, Four_two } from "../../Database/ImgData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
const FoodCatGallery = (data) => {
  const navigate = useNavigate();

  const [style5_one_Data, setStyle5_one_Data] = useState([]);
  const [style5_two_Data, setStyle5_two_Data] = useState([]);
  const [style5_three_Data, setStyle5_three_Data] = useState([]);
  const [style5_four_Data, setStyle5_four_Data] = useState([]);

  const Style5 = data?.data?.filter((item) => item.sectionStyle === "Style5");

  let style5_catId_1 = Style5[0]?.sectionCategories1[0]?.value;
  let style5_catId_2 = Style5[0]?.sectionCategories2[0]?.value;
  let style5_catId_3 = Style5[0]?.sectionCategories3[0]?.value;
  let style5_catId_4 = Style5[0]?.sectionCategories4[0]?.value;

  useEffect(() => {
    // For Style1 section Left Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_1)
      .then((res) => {
        setStyle5_one_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_2)
      .then((res) => {
        setStyle5_two_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_3)
      .then((res) => {
        setStyle5_three_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_4)
      .then((res) => {
        setStyle5_four_Data(res.data.data);
      });
  }, []);

  let newStyle5_one_Data = style5_one_Data[0]?.data;
  let newStyle5_two_Data = style5_two_Data[0]?.data;
  let newStyle5_three_Data = style5_three_Data[0]?.data;
  let newStyle5_four_Data = style5_four_Data[0]?.data;

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
    <Container className=' FoodCatGallery section'>
      <div className='container-fluid'>
        <div className='row g-3'>
          <div className='col-md-3  '>
            <div className='card'>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'>
                  {" "}
                  {Style5.length > 0 ? Style5[0]?.sectionTitle1 : null}
                </h3>
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
                <h3 className='mt-1 sf_top_name'>
                  {Style5.length > 0 ? Style5[0]?.sectionTitle2 : null}
                </h3>
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
              <div className='card single__inner__left'>
                <div className='card-header sf_top_card'>
                  <h3 className='mt-1 sf_top_name'>
                    {" "}
                    {Style5.length > 0 ? Style5[0]?.sectionTitle3 : null}
                  </h3>
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
                  <div className='profileImg'>
                    <img
                      src='/Assets/Img/profileKitchenImg/profile-kit1.png'
                      alt=''
                    />
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
              <div className='card single__inner__left'>
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
                  <div className='profileImg'>
                    <img
                      src='/Assets/Img/profileKitchenImg/profile-kit2.png'
                      alt=''
                    />
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
              <div className='card single__inner__left'>
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
                  <div className='profileImg'>
                    <img
                      src='/Assets/Img/profileKitchenImg/profile-kit3.png'
                      alt=''
                    />
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
              <div className='card single__inner__left'>
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
                  <div className='profileImg'>
                    <img
                      src='/Assets/Img/profileKitchenImg/profile-kit4.png'
                      alt=''
                    />
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
    </Container>
  );
};

export default FoodCatGallery;
