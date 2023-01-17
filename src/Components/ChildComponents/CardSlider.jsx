import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProductCardData from "../../Database/ProductCardData";

const CardSlider = () => {
  const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <div className='carousel-arrow-left '>
          <AiOutlineArrowLeft
            className='text-white text-bold p-1 mt-1'
            size={45}
          />
        </div>
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <div className='carousel-arrow-right'>
          <AiOutlineArrowRight
            className='text-white text-bold p-1 mt-1'
            size={45}
          />
        </div>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <section className='cardSlider mt-5'>
      <Container>
        <Row>
          <Col>
            <Slider
              {...settings}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
            >
              {ProductCardData.map((item, index) => (
                <div className='cardSlider_body' key={index}>
                  <div
                    className={item.bgColor + " cardSlider_body_inner d-flex"}
                  >
                    <div className='textFile '>
                      <h4>{item.title}</h4>
                      <Link to={"/"}>{item.btn}</Link>
                    </div>
                    <div className='imgFile '>
                      <img className='img-fluid' src={item.img} alt='' />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardSlider;
