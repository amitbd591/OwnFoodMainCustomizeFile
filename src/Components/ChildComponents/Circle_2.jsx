import React, { useState } from "react";
import ShoppingPopUp from "../Common/ShoppingPopUp";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
const Circle_2 = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const color = [
    {
      bg: "#e11d48",
    },
    {
      bg: "#d946ef",
    },
    {
      bg: "#f97316",
    },
    {
      bg: "#78350f",
    },
    {
      bg: "#f59e0b",
    },
    {
      bg: "#bef264",
    },
  ];

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
    <section className=' Circle_2 shadow-lg'>
      <Container className=' wrap_Upper'>
        <div className='title-area text-center '>
          <span className='sf_sub-title '></span>
          <h2 className='sec-title'>
            <span className='sf_init_title'> Browse Food by</span>{" "}
            <span class=' sf_text-theme'>Categories</span>
          </h2>
        </div>

        <div className='pb-3 '>
          <div className='row   '>
            <Slider {...settings}>
              {color.map((item, index) => (
                <div className='col-4 d-flex align-items-center justify-content-center'>
                  <div className='upper'>
                    <div className='try'></div>

                    <div className='main'>
                      <div className='name'>Biryani</div>

                      <div
                        className='imguppertwo '
                        style={{ backgroundColor: `${item.bg}` }}
                      >
                        <h3>My Food</h3>
                      </div>

                      <div className='imgupperone '>
                        <i></i>
                      </div>

                      <div
                        className='img0 '
                        style={{ backgroundColor: `${item.bg}` }}
                      >
                        <i class='fa-solid fa-plus fa-2xl plus  '></i>
                      </div>

                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img1 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-1.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>
                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img2 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-2.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>
                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img3 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-3.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>
                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img4 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-4.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>
                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img5 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-5.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>
                      <Tooltip placement='top' overlay={"Custom Text"}>
                        <img
                          className='img6 img-fluid'
                          alt=''
                          src={"/Assets/Img/cuisine-6.jpg"}
                          onClick={() => {
                            setShow(true);
                          }}
                        />
                      </Tooltip>

                      {/* <img
                        className='img1 img-fluid'
                        src={"/Assets/Img/cuisine-2.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      />

                      <img
                        className='img2 img-fluid'
                        src={"/Assets/Img/cuisine-3.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                      <img
                        className='img3 img-fluid'
                        src={"/Assets/Img/cuisine-4.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                      <img
                        className='img4 img-fluid'
                        src={"/Assets/Img/cuisine-5.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                      <img
                        className='img5 img-fluid'
                        src={"/Assets/Img/cuisine-6.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      />
                      <img
                        className='img6 img-fluid'
                        src={"/Assets/Img/dish-caro1.jpg"}
                        onClick={() => {
                          setShow(true);
                        }}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}

              {show === true ? (
                <ShoppingPopUp show={show} handleClose={handleClose} />
              ) : (
                ""
              )}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Circle_2;
