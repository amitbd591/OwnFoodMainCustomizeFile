import React from "react";

import { useNavigate } from "react-router-dom";
import { Two_one, Uber_image, Four_two } from "../../Database/ImgData";
const FoodCatGallery = () => {
  const navigate = useNavigate();

  return (
    <section className=' FoodCatGallery section mt-5'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3  '>
            <div className='card'>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
              </div>
              <div className='row mt-1 card_product'>
                {Four_two.map((item, index) => {
                  return (
                    <div
                      className='col-md-6 card_navigate '
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className='img_animation'>
                        <img src={item.item_image} className='img-fluid ' />
                      </div>
                      <p className='text-center' style={{ fontWeight: "bold" }}>
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className='col-md-12'>
                <a
                  href='#'
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className='see_more'
                  style={{ marginRight: 15 }}
                >
                  See more
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-3  '>
            <div className='card'>
              <div className='card-header sf_top_card'>
                <h3 className='mt-1 sf_top_name'> Top Food Category</h3>
              </div>
              <div className='row mt-1 card_product'>
                {Four_two.map((item, index) => {
                  return (
                    <div
                      className='col-md-6  card_navigate'
                      onClick={() => {
                        navigate("productdetails");
                      }}
                    >
                      <div className='img_animation'>
                        <img src={item.item_image} className='img-fluid ' />
                      </div>
                      <p className='text-center' style={{ fontWeight: "bold" }}>
                        {" "}
                        {item.item_name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className='col-md-12'>
                <a
                  href='#'
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className='see_more'
                  style={{ marginRight: 15 }}
                >
                  See more
                </a>
              </div>
            </div>
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
                  <div className='img_animation'>
                    <img src={Two_one[0].item_image} className='img-fluid' />
                  </div>
                  <p className='mt-3' style={{ fontWeight: "bold" }}>
                    {Two_one[0].item_name}
                  </p>
                </div>
              </div>
              <div className='col-md-12'>
                <a
                  href='#'
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className='see_more'
                  style={{ marginRight: 10 }}
                >
                  See more
                </a>
              </div>
            </div>
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
                  <div className='img_animation'>
                    <img src={Two_one[1].item_image} className='img-fluid' />
                  </div>

                  <p className='mt-3' style={{ fontWeight: "bold" }}>
                    {Two_one[1].item_name}
                  </p>
                </div>
              </div>
              <div className='col-md-12'>
                <a
                  href='#'
                  onClick={() => {
                    navigate("shoppingpage");
                  }}
                  className='see_more'
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCatGallery;