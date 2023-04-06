import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CheckOut = () => {
  let [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(
      localStorage.getItem("checkOut")
        ? JSON.parse(localStorage.getItem("checkOut"))
        : ""
    );
  }, []);
  return (
    <section className='checkOut'>
      <Container>
        <div className='inner'>
          <Row>
            <Col lg={7}>
              <div className='leftWrapper'>
                <h3 className='sellerName'>Seller Name: Alex Kitchen</h3>
                <div className='introDelivery'>
                  <h4>Delivery details</h4>
                  <p>Berlin</p>
                </div>
                <div className='introDelivery'>
                  <h4>Delivery estimate</h4>
                  <div className='Priority'>
                    <div className='p-inner'>
                      <div>
                        <p>Priority</p>
                        <p>10—20 min • Delivered directly to you</p>
                      </div>
                      <div>
                        <p>$20</p>
                      </div>
                    </div>
                    <div className='p-inner'>
                      <div>
                        <p>Priority</p>
                        <p>10—20 min</p>
                      </div>
                      <div>
                        <p>$13</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='introDelivery'>
                  <h4>Payment</h4>
                  <div className='Priority'>
                    <div className='p-inner'>
                      <p>Add payment method</p>
                      <button>Edit</button>
                    </div>
                    <div className='p-inner'>
                      <p>Add promo code</p>
                      <input type='text' />
                    </div>
                  </div>
                </div>
                <div className='introDelivery'>
                  <h4>Order summary</h4>
                  <div className='Priority'>
                    <div className='p-inner-single'>
                      <p>Total Items: {cart?.length}</p>
                    </div>
                    <div className='p-inner-items'>
                      <ul>
                        {cart?.map((item, index) => (
                          <li key={index}>
                            <div>
                              <span>{index + 1}</span>{" "}
                              <strong>{item?.foodName}</strong>
                            </div>
                            <div className='img-inner'>
                              <div className='img-file'>
                                <img src={item?.foodImage} alt='' />
                              </div>
                              <div>
                                <button>${item?.foodPrice}</button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className='inner'>
                <div className='rightWrapper'>
                  <div className='introDelivery'>
                    <h4>Order total : {cart?.length}</h4>
                  </div>
                  <div className='order-intro-list'>
                    <ul>
                      <li>
                        <span>Subtotal:</span> <span>$550</span>
                      </li>
                      <li>
                        <span>Delivery Fee:</span> <span>$50</span>
                      </li>
                      <li>
                        <span>Small order fee:</span> <span>$350</span>
                      </li>
                      <li>
                        <span>Taxes:</span> <span>$50</span>
                      </li>
                    </ul>
                  </div>
                  <div className='total'>
                    <p>Total:</p>
                    <span>$300</span>
                  </div>
                  <div className='trams'>
                    <p>
                      <strong>Terms:</strong> All prices incl. VAT. For your
                      order the Uber Eats additional conditions apply
                    </p>
                    <p>
                      Information about the processing of your data is available
                      in our privacy notice
                    </p>
                    <p>
                      If you’re not around when the delivery person arrives,
                      they’ll leave your order at the door. By placing your
                      order, you agree to take full responsibility for it once
                      it’s delivered. Orders containing alcohol or other
                      restricted items may not be eligible for leave at door and
                      will be returned to the store if you are not available.
                    </p>
                    <p>
                      You are entitled to the statutory rights of cancellation.
                      You can find more information about these or their
                      exclusion in the Uber Eats Additional Terms and the offers
                      of the partners.
                    </p>
                  </div>
                  <div className='payment-btn'>
                    <button>Continue To Payment</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
