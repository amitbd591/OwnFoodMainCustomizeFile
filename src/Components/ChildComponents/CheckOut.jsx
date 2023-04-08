import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getToken } from "../../Helper/SessionHelper";
import axios from "axios";
import { BaseURL } from "../../Helper/config";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
const CheckOut = () => {
  const location = useLocation();
  let [cart, setCart] = useState([]);
  let navigate = useNavigate();

  let Token = getToken();
  useEffect(() => {
    setCart(
      localStorage.getItem("checkOut")
        ? JSON.parse(localStorage.getItem("checkOut"))
        : []
    );
  }, [cart]);

  const payment = () => {
    let postBody = {};
    if (cart?.length !== 0) {
      postBody.orderDeliveryAddressID = "63e8c354f4e215d144fe500a";
      postBody.orderBillingAddressID = "63e8c354f4e215d144fe500a";
      postBody.orderStatusID = "63e760ba7dfb72bf9f7d3083";
      postBody.customerID = "64047404a6737555dd713749";
      postBody.sellerID = "6427d85e4916b8f65ca9a092";
      postBody.orderNumber = "12";
      postBody.OrderLabel = "WISH";
      postBody.orderNotes = "gtff";
      postBody.orderTotalAmount = 1250;
      postBody.orderItems = cart;
    } else {
      toast.error("Please Add Some Food!", {
        position: "bottom-center",
      });
    }

    if (getToken()) {
      axios
        .post(BaseURL + "/create-orders", postBody, {
          headers: {
            token: Token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {
            toast.success("Order Place successful!", {
              position: "bottom-center",
            });
            localStorage.removeItem("checkOut");
          }
        });
    } else {
      localStorage.setItem("prevPath", location.pathname);
      navigate("/CustomerLogin");
    }
  };
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
                      <button>
                        <label for='Payment'>Choose a car:</label>
                        <select nameName='Payment' id='Payment'>
                          <option value='volvo'>Cash On Delivery</option>
                          <option value='saab' selected>
                            Paypal
                          </option>
                        </select>
                      </button>
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
                      {cart?.length > 0 ? (
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
                      ) : (
                        <p>No Order Found</p>
                      )}
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
                    <button onClick={() => payment()}>
                      Continue To Payment
                    </button>
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
