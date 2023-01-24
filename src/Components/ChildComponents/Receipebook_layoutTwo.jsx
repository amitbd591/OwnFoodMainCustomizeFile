import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const Receipebook_layoutTwo = () => {
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
        <Slider {...settings}>
          <div className='rightSide'>
            <div className='rightSide_inner'>
              <div className='d-flex justify-content-center'>
                <div className='leftBar pe-2'>
                  <div className='big_imgFileTwo'>
                    <img
                      className='img-fluid first_image'
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
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
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Receipebook_layoutTwo;
