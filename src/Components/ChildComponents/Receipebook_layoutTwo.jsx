import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { BaseURL } from "../../Helper/config";
const Receipebook_layoutTwo = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get(BaseURL + "/get-recipe").then((res) => {
      setData(res.data.data);
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Container className='Receipebook_layoutTwo'>
      <div class='title-area text-center pb-3'>
        <span class='sub-title'></span>
        <h2 class='sec-title'>
          <span className='sf_init_title'> Recipe </span>{" "}
          <span class=' sf_text-theme'>Book</span>
        </h2>
      </div>
      <div className='top__gallery'>
        {" "}
        {data.length !== undefined ? (
          <>
            <Slider {...settings}>
              {data?.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <>
                      <div className='leftSide'>
                        <div className='rightSide_inner w-100 h-100'>
                          <div className='d-flex justify-content-center w-100 h-100'>
                            <div className='leftBar w-100 h-100'>
                              <div className='imgFile w-100 h-100'>
                                <img
                                  className='img-fluid center_image '
                                  src={item?.recipeSteps?.[0]?.Photo}
                                  alt=''
                                />

                                <div className='sellerOverflowImg'>
                                  <img
                                    src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                    alt=''
                                  />
                                </div>
                                <div className='titleOverFlow'>
                                  <Link to={"/"}>
                                    <h2>Smitten Kitchen features delectable</h2>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className='rightSide'>
                        <div className='rightSide_inner w-100 h-100'>
                          <div className='d-flex justify-content-center w-100 h-100'>
                            <div className='rightBar h-100 w-50'>
                              <div className='imgFile w-100 h-100'>
                                <img
                                  className='img-fluid'
                                  src={item?.recipeSteps?.[2]?.Photo}
                                  alt=''
                                />
                              </div>
                              <div className='imgFile w-100 h-100'>
                                <img
                                  className='img-fluid'
                                  src={item?.recipeSteps?.[0]?.Photo}
                                  alt=''
                                />
                              </div>
                              <div className='imgFile  w-100 h-100'>
                                <img
                                  className='img-fluid'
                                  src={item?.recipeSteps?.[1]?.Photo}
                                  alt=''
                                />

                                <Link to={"/"} className='moreOverFlow'>
                                  More Items
                                </Link>
                              </div>
                            </div>
                            <div className='leftBar h-100'>
                              <div className='big_imgFileTwo h-100'>
                                <img
                                  className='img-fluid last_image'
                                  src={item?.recipeSteps?.[2]?.Photo}
                                  alt=''
                                />
                                <div className='sellerOverflowImg'>
                                  <img
                                    src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                    alt=''
                                  />
                                </div>
                                <div className='titleOverFlow'>
                                  <Link to={"/"}>
                                    <h2>Smitten Kitchen features delectable</h2>
                                  </Link>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </Slider>
          </>
        ) : null}
        {/* <div className='leftSide'>
            <div className='rightSide_inner'>
              <div className='d-flex justify-content-center'>
                <div className='leftBar '>
                  <div className='imgFile'>
                    <img
                      className='img-fluid center_image '
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='rightSide'>
            <div className='rightSide_inner'>
              <div className='d-flex justify-content-center'>
                <div className='rightBar '>
                  <div className='imgFile mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_3.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_4.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  '>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
                <div className='leftBar ps-2'>
                  <div className='big_imgFileTwo'>
                    <img
                      className='img-fluid last_image'
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='leftSide'>
            <div className='rightSide_inner'>
              <div className='d-flex justify-content-center'>
                <div className='leftBar '>
                  <div className='imgFile'>
                    <img
                      className='img-fluid center_image '
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        {/* </Slider> */}
      </div>
    </Container>
  );
};

export default Receipebook_layoutTwo;
