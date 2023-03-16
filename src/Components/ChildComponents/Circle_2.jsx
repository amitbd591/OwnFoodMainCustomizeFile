import React, { useEffect, useState } from "react";
import ShoppingPopUp from "../Common/ShoppingPopUp";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
const Circle_2 = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [catId, setCatId] = useState([]);

  console.log(catId);
  useEffect(() => {
    axios.get(BaseURL + "/get-circle-type-food").then((res) => {
      setCatId(res.data.data);
    });

    // axios.get(BaseURL + "/get-food-by-category/" + newID).then((res) => {
    //   // setCircleData(res.data.data);
    // });
  }, []);

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
    <section className=' Circle_2 shadow-lg pt-3'>
      <Container className=' wrap_Upper'>
        <div className='title-area text-center '>
          <span className='sf_sub-title '></span>
          <h2 className='sec-title'>
            {/* <span className='sf_init_title'> Browse Food by</span>{" "}
            <span class=' sf_text-theme'>Categories</span> */}
            {data?.sectionTitle1}
          </h2>
        </div>

        <div className='pb-3 '>
          <div className='row   '>
            <Slider {...settings}>
              {catId.map((item, index) => {
                if (item?.circleCategoryID?.length !== 0) {
                  return (
                    <div
                      className='col-4 d-flex align-items-center justify-content-center'
                      key={index}
                    >
                      <div className='upper'>
                        <div className='try'></div>

                        <div className='main'>
                          <div className='name'>Biryani</div>

                          <div
                            className='imguppertwo '
                            style={{ backgroundColor: `${item.bg}` }}
                          >
                            <h3>{item?.circleType}</h3>
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
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item?.circleSellerID?.length !== 0) {
                  return (
                    <div
                      className='col-4 d-flex align-items-center justify-content-center'
                      key={index}
                    >
                      <div className='upper'>
                        <div className='try'></div>

                        <div className='main'>
                          <div className='name'>Biryani</div>

                          <div
                            className='imguppertwo '
                            style={{ backgroundColor: `${item.bg}` }}
                          >
                            <h3>{item?.circleType}</h3>
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
                        </div>
                      </div>
                    </div>
                  );
                }
                if (item?.circleCountryID?.length !== 0) {
                  return (
                    <div
                      className='col-4 d-flex align-items-center justify-content-center'
                      key={index}
                    >
                      <div className='upper'>
                        <div className='try'></div>

                        <div className='main'>
                          <div className='name'>Biryani</div>

                          <div
                            className='imguppertwo '
                            style={{ backgroundColor: `${item.bg}` }}
                          >
                            <h3>{item?.circleType}</h3>
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
                        </div>
                      </div>
                    </div>
                  );
                }
                return <>lllllllllllllllllll</>;
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Circle_2;
