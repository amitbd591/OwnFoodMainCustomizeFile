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

  // const Style5 = data?.data?.filter((item) => item.sectionStyle === "Style5");

  let style5_catId_1 = data?.data?.sectionCategories1[0]?.value;
  let style5_catId_2 = data?.data?.sectionCategories2[0]?.value;
  let style5_catId_3 = data?.data?.sectionCategories3[0]?.value;
  let style5_catId_4 = data?.data?.sectionCategories4[0]?.value;

  useEffect(() => {
    // For Style1 section Left Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_1 + "/" + 5)
      .then((res) => {
        setStyle5_one_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_2 + "/" + 5)
      .then((res) => {
        setStyle5_two_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_3 + "/" + 5)
      .then((res) => {
        setStyle5_three_Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style5_catId_4 + "/" + 5)
      .then((res) => {
        setStyle5_four_Data(res.data.data);
      });
  }, []);

  let newStyle5_one_Data = style5_one_Data[0]?.data;
  let newStyle5_two_Data = style5_two_Data[0]?.data;
  let newStyle5_three_Data = style5_three_Data[0]?.data;
  let newStyle5_four_Data = style5_four_Data[0]?.data;
  // debugger;
  const settings = {
    infinite: true,
    speed: 500,

    autoplay: false,
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
                  {data?.data?.sectionTitle1}
                </h3>
              </div>
              <div className='row mt-1 g-2  card_product'>
                {newStyle5_one_Data === undefined &&
                newStyle5_one_Data?.length !== 0 ? null : (
                  <>
                    {newStyle5_one_Data.slice(0, 4).map((item, index) => {
                      return (
                        <div
                          className='col-md-6 card_navigate '
                          onClick={() => {
                            navigate("productdetails");
                          }}
                          key={index}
                        >
                          <div className='img_animation'>
                            <img src={item?.foodImage} className='img-fluid ' />
                          </div>
                          <p
                            className='text-center'
                            style={{ fontWeight: "bold" }}
                          >
                            {item?.foodName}
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
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
                  {data?.data?.sectionTitle2}
                </h3>
              </div>
              <div className='row mt-1  g-2 card_product'>
                {newStyle5_two_Data === undefined &&
                newStyle5_two_Data?.length !== 0 ? null : (
                  <>
                    {newStyle5_two_Data.slice(0, 4).map((item, index) => {
                      return (
                        <div
                          className='col-md-6  card_navigate'
                          onClick={() => {
                            navigate("productdetails");
                          }}
                          key={index}
                        >
                          <div className='img_animation'>
                            <img
                              src={item?.foodImage}
                              className='img-fluid '
                              alt=''
                            />
                          </div>
                          <p
                            className='text-center'
                            style={{ fontWeight: "bold" }}
                          >
                            {" "}
                            {item?.foodName}
                          </p>
                        </div>
                      );
                    })}
                  </>
                )}
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
            {newStyle5_three_Data === undefined ? null : (
              <>
                <Slider {...settings}>
                  {newStyle5_three_Data.map((item, index) => (
                    <div className='card single__inner__left' key={index}>
                      <div className='card-header sf_top_card'>
                        <h3 className='mt-1 sf_top_name'>
                          {" "}
                          {data?.data?.sectionTitle3}
                        </h3>
                      </div>
                      <div className='row mt-1 single_product_card'>
                        <div
                          className='single_product_card_navigation'
                          onClick={() => {
                            navigate("productdetails");
                          }}
                        >
                          <div className='img_animation leftSide'>
                            <img
                              src={item?.foodImage}
                              className='img-fluid'
                              alt=''
                            />
                          </div>
                          <p className='mt-3' style={{ fontWeight: "bold" }}>
                            {item?.sellerName}
                          </p>
                        </div>
                        <div className='profileImg'>
                          <img src={item?.sellerImage} alt='' />
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
                  ))}
                </Slider>
              </>
            )}
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
                  <div className='img_animation rightSide'>
                    <img
                      src={
                        newStyle5_four_Data === undefined
                          ? null
                          : newStyle5_four_Data[0]?.foodImage
                      }
                      className='img-fluid'
                      alt=''
                    />
                  </div>

                  <p className='mt-3' style={{ fontWeight: "bold" }}>
                    {newStyle5_four_Data === undefined
                      ? null
                      : newStyle5_four_Data[0]?.foodName}
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
