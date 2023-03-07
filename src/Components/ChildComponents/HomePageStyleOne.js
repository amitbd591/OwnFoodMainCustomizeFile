import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetFoodByCategoryAPI } from "../../API/CategoryAPI";

const HomePageStyleOne = (data) => {
  const Style1 = data?.data.filter((item) => item.sectionStyle === "Style1");
  console.log(Style1[0]?.sectionCategories1[0]?.value);
  let catId = Style1[0]?.sectionCategories1[0]?.value;

  useEffect(() => {
    GetFoodByCategoryAPI(catId);
  }, []);

  let allFoodByCategoryList = useSelector(
    (state) => state.category.allFoodByCategoryList
  );
  let myNewData = allFoodByCategoryList[0]?.data;
  console.log(myNewData[0]?.foodImage);
  return (
    <section className='Recipe_Gallery section py-2 '>
      <div className='top__gallery'>
        <Container>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide_inner'>
                <div className='header_text'>
                  <h2>{Style1[0]?.sectionTitle1}</h2>
                </div>
                <Row>
                  <Col xs={12}>
                    <div className='topBar'>
                      <Link to={"/ShoppingDetails"}>
                        <div className='imgFile'>
                          <div>
                            <img
                              className=''
                              style={{ height: "331px", width: "670px" }}
                              src={
                                myNewData === []
                                  ? myNewData[0]?.foodImage
                                  : null
                              }
                              alt=''
                            />
                          </div>
                          <div className='overlay__text'>
                            <div className='inner__body'>
                              <div>
                                {/* <h3>{myNewData[0]?.foodName}</h3> */}
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Harum repellat dignissimos
                                  repellendus, esse iusto voluptas.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className='buttonBar d-flex justify-content-between'>
                      <div className='imgFile fastImg'>
                        <div>
                          <img
                            className=''
                            style={{ height: "143px", width: "210px" }}
                            src={"/Assets/Img/Recipe/imgHub_1_2.png"}
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>Chana Masala</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='imgFile secondImg'>
                        <div>
                          <img
                            className=''
                            style={{ height: "143px", width: "210px" }}
                            src={"/Assets/Img/Recipe/imgHub_1_3.png"}
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>Fish Curry</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='imgFile thirdImg'>
                        <div>
                          <img
                            className=''
                            style={{ height: "143px", width: "210px" }}
                            src={"/Assets/Img/Recipe/imgHub_1_4.png"}
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>Chicken Tikka Masala</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className='rightSide'>
              <div className='rightSide_inner'>
                <div className='header_text'>
                  <h2>{"item?.sectionTitle2"}</h2>
                </div>
                <div className=''>
                  <Row className='g-2'>
                    <Col xs={8}>
                      <div className='leftBar'>
                        <div className='imgFile'>
                          <div>
                            <img
                              className=''
                              style={{
                                height: "481px",
                                width: "460px",
                                overflow: "hidden",
                              }}
                              src={"/Assets/Img/Recipe/imgHub_2_4.png"}
                              alt=''
                            />
                          </div>
                          <div className='overlay__text'>
                            <div className='inner__body'>
                              <div>
                                <h3>Ramen</h3>
                                <p>
                                  Lorem ipsum dolor, sit amet consectetur
                                  adipisicing elit. Harum repellat dignissimos
                                  repellendus, esse iusto voluptas.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className='rightBar '>
                        <Row>
                          <Col xs={12}>
                            <div className='imgFile firstImg'>
                              <div>
                                <img
                                  className=''
                                  style={{
                                    height: "157px",
                                    width: "100%",
                                    overflow: "hidden",
                                  }}
                                  src={"/Assets/Img/Recipe/imgHub_2_2.png"}
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>Tempura</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className='imgFile secondImg'>
                              <div>
                                <img
                                  className=''
                                  style={{
                                    height: "157px",
                                    width: "100%",
                                    overflow: "hidden",
                                  }}
                                  src={"/Assets/Img/Recipe/imgHub_2_3.png"}
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>Kushiyaki </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <div className='imgFile thirdImg'>
                              <div>
                                <img
                                  className=''
                                  style={{
                                    height: "157px",
                                    width: "100%",
                                    overflow: "hidden",
                                  }}
                                  src={"/Assets/Img/Recipe/imgHub_2_1.png"}
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>Takoyaki</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HomePageStyleOne;
