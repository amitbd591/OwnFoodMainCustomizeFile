import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const BrowseByKitchen = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
    autoplaySpeed: 3000,
    slidesToShow: 6,
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
                  <span class=' sf_text-theme'>Kitchen</span>
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
                <div
                  className='brand-wrap slick-slide slick-cloned mt-3 '
                  data-slick-index='-5'
                  aria-hidden='true'
                  tabIndex='-1'
                  onClick={() => {
                    navigate("sellerprofle");
                  }}
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/01.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>vegan lover</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='-4'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/02.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>organic foody</h4>
                    <p>(45 items)</p>
                  </div>
                </div>
                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='-3'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/03.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>ecomart limited</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='-2'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/04.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>fresh fortune</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='-1'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/05.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>econature</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-current slick-active mt-3'
                  data-slick-index='0'
                  aria-hidden='false'
                  tabIndex='0'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/06.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>natural greeny</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-active mt-3'
                  data-slick-index='1'
                  aria-hidden='false'
                  tabIndex='0'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/01.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>vegan lover</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-active mt-3'
                  data-slick-index='2'
                  aria-hidden='false'
                  tabIndex='0'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/02.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>organic foody</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-active mt-3'
                  data-slick-index='3'
                  aria-hidden='false'
                  tabIndex='0'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/03.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>ecomart limited</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-active mt-3'
                  data-slick-index='4'
                  aria-hidden='false'
                  tabIndex='0'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/04.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>fresh fortune</h4>
                    <p>(45 items)</p>
                  </div>
                </div>
                <div
                  className='brand-wrap slick-slide mt-3'
                  data-slick-index='5'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/05.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>econature</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='6'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/06.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>natural greeny</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='7'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/01.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>vegan lover</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='8'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/02.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>organic foody</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='9'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/03.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>ecomart limited</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='10'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/04.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>fresh fortune</h4>
                    <p>(45 items)</p>
                  </div>
                </div>

                <div
                  className='brand-wrap slick-slide slick-cloned mt-3'
                  data-slick-index='11'
                  aria-hidden='true'
                  tabIndex='-1'
                >
                  <div className='brand-media'>
                    <img src='/Assets/Img/brand/05.jpg' alt='brand' />
                    <div className='brand-overlay'></div>
                  </div>
                  <div className='brand-meta'>
                    <h4 className='sf_title_color_brand'>econature</h4>
                    <p>(45 items)</p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByKitchen;
