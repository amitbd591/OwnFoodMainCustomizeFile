import React from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const BrowseByKitchen = () => {
  const profileKitchenImg = [
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit1.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit2.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit3.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit4.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit5.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit6.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit7.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit8.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit9.png",
    },
    {
      name: "Alex",
      img: "/Assets/Img/profileKitchenImg/profile-kit10.png",
    },
  ];

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
      <div className='container-fluid  bg-transparent_color'>
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
                {profileKitchenImg.map((item, index) => (
                  <Link to={"/SellerProfile"}>
                    <div
                      className='brand-wrap slick-slide slick-cloned mt-3 '
                      data-slick-index='-5'
                      aria-hidden='true'
                      tabIndex='-1'
                    >
                      <div className='brand-media'>
                        <img src={item.img} alt='brand' />
                        <div className='brand-overlay'></div>
                      </div>
                      <div className='brand-meta'>
                        <h4 className='sf_title_color_brand'>vegan lover</h4>
                        <p>(45 items)</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByKitchen;
