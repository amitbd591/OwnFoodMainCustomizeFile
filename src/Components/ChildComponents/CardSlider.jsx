import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProductCardData from "../../Database/ProductCardData";
import { getBannersAPI } from "../../API/BannersAPI";
import { useSelector } from "react-redux";

const CardSlider = () => {
  useEffect(() => {
    getBannersAPI().then((res) => {
      if (res === true) {
      }
    });
  }, []);

  let BannerList = useSelector((state) => state.banner.allBannerList);

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
    <section className='CardSlider'>
      <Container>
        <Row>
          <Col>
            <Slider
              {...settings}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
            >
              {BannerList.map((item, index) => (
                <div className='cardSlider_body' key={index}>
                  <div
                    className={
                      item.bannerBackgroundColor +
                      " cardSlider_body_inner d-flex"
                    }
                  >
                    <div className='textFile '>
                      <h4>{item.bannerTitle}</h4>
                      <Link to={`/${item.bannerButtonURL}`}>
                        {item.bannerButtonLabel}
                      </Link>
                    </div>
                    <div className='imgFile '>
                      <img
                        className='img-fluid'
                        src={item.bannerImage}
                        alt=''
                      />
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
