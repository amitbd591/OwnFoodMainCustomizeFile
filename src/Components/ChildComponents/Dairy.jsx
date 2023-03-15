import axios from "axios";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllFoodDiaryAPI } from "../../API/FoodDiaryAPI";
import { FoodItem } from "../../Database/ImgData";
import { BaseURL } from "../../Helper/config";

const Dairy = ({ data }) => {
  useEffect(() => {
    getAllFoodDiaryAPI();
  }, []);

  let allFoodDiaryList = useSelector(
    (state) => state.foodDiary.allFoodDiaryList
  );
  console.log(allFoodDiaryList);
  return (
    <section class='Dairy section blog-part'>
      <Container>
        <div class='row'>
          <div class='col-12'>
            <div className='headerText '>
              <div>
                <h2>
                  <span className='sf_init_title'>Foods</span>{" "}
                  <span className='sf_text-theme'>Dairy</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class='row mt-2'>
          {allFoodDiaryList.slice(0, 4).map((item) => (
            <div class='col-3'>
              <div class='blog-slider '>
                <div class='blog-card  shadow p-3 mb-5 bg-body rounded'>
                  <div class='blog-media'>
                    <a class='blog-img' href='#' tabIndex='-1'>
                      <img
                        src={item?.blogImage}
                        className='img-fluid'
                        alt='blog'
                      />
                    </a>
                  </div>
                  <div class='blog-content p-1'>
                    <div className='blog-meta d-flex align-items-center mt-3 mb-2'>
                      <FaCalendarAlt className='text-primary' />
                      <span className='ms-2 '>
                        <Moment format='YYYY/MM/DD'>{item?.createdDate}</Moment>
                      </span>
                    </div>
                    <h4 class='blog-title  '>
                      <a href='' tabIndex='-1'>
                        {item?.blogTitle}
                      </a>
                    </h4>
                    <p class='blog-desc'>
                      {item?.blogShortDesc.slice(0, 80)} ...
                    </p>
                    <div className='d-flex justify-content-between text-primary'>
                      <a
                        class='blog-btn text-decoration-none'
                        href='#'
                        tabIndex='-1'
                      >
                        <span>read more</span>
                        <i class='icofont-arrow-right'></i>
                      </a>
                      <a class='blog-btn text-decoration-none text-primary'>
                        <li>
                          <FaComments />
                          <span className='text-decoration-none'>
                            19 Comments
                          </span>
                        </li>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div class='row'>
        <div class='col-lg-12 text-center'>
          {/* <div class='section-btn-25'>
            <a href='' class='btn btn-primary'>
              <span>view all blog</span>
            </a>
          </div> */}
          <div className='d-flex justify-content-center'>
            <Link to={"/"}>
              <div className='custom__btn'>
                <button>View All Dairy</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dairy;
