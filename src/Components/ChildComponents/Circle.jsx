import React, { useState } from "react";
import ShoppingPopUp from "../Common/ShoppingPopUp";

const Circle = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className=' Circle mt-5 shadow-lg'>
      <div className='container-fluid wrap_Upper  shadow-lg '>
        <div className='title-area text-center '>
          <span className='sf_sub-title '></span>
          <h2 className='sec-title'>
            <span className='sf_init_title'> Browse Food by</span>{" "}
            <span class=' sf_text-theme'>Categories</span>
          </h2>
        </div>
        <div className=' mt-3'>
          <div className='row   '>
            {[...Array(3)].map((item, index) => (
              <div className='col-4 d-flex align-items-center justify-content-center'>
                <div className='upper'>
                  <div className='try'></div>

                  <div className='main'>
                    <div className='name'>Biryani</div>

                    <div className='imguppertwo '>
                      <h3>My Food</h3>
                    </div>

                    <div className='imgupperone '>
                      <i></i>
                    </div>

                    <div className='img0 '>
                      <i class='fa-solid fa-plus fa-2xl plus  '></i>
                    </div>
                    <img
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
                    />
                  </div>
                </div>
              </div>
            ))}

            {show === true ? (
              <ShoppingPopUp show={show} handleClose={handleClose} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Circle;
