import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BaseURL } from "../../Helper/config";

const HomePageStyleOne = (data) => {
  const [style1LeftData, setStyleLeft2Data] = useState([]);
  const [style1RightData, setStyle1RightData] = useState([]);

  let style1_catId_1 = data?.data?.sectionCategories1[0]?.value;
  let style1_catId_2 = data?.data?.sectionCategories2[0]?.value;
  // debugger;

  useEffect(() => {
    // For Style1 section Left Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style1_catId_1 + "/" + 5)
      .then((res) => {
        setStyleLeft2Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style1_catId_2 + "/" + 5)
      .then((res) => {
        setStyle1RightData(res.data.data);
      });
  }, []);

  let newStyle1LeftData = style1LeftData[0]?.data;
  let newStyle1RightData = style1RightData[0]?.data;

  return (
    <section className='Recipe_Gallery section py-2 '>
      <div className='top__gallery'>
        <Container>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide_inner'>
                <div className='header_text'>
                  {/* <h2>{data.length > 0 ? data[0]?.sectionTitle1 : null}</h2> */}
                  <h2>{data?.data?.sectionTitle1} </h2>
                </div>
                <Row>
                  <Col xs={12}>
                    <div className='topBar'>
                      <Link to={"/ShoppingDetails"}>
                        <div className='imgFile'>
                          <div>
                            <img
                              className=''
                              style={{
                                height: "340px",
                                width: "670px",
                                objectFit: "cover",
                              }}
                              src={
                                newStyle1LeftData === undefined
                                  ? null
                                  : newStyle1LeftData[0]?.foodImage
                              }
                              alt=''
                            />
                          </div>
                          <div
                            className='overlay__text'
                            style={{
                              height: "340px",
                            }}
                          >
                            <div className='inner__body'>
                              <div className='d-flex justify-content-center'>
                                <div>
                                  <h3>
                                    {newStyle1LeftData === undefined
                                      ? null
                                      : newStyle1LeftData[0]?.foodName}
                                  </h3>
                                  <p>
                                    {newStyle1LeftData === undefined
                                      ? null
                                      : newStyle1LeftData[0]
                                          ?.foodAdditionalInfo}
                                  </p>
                                </div>
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
                            style={{
                              height: "143px",
                              width: "210px",
                              objectFit: "cover",
                            }}
                            src={
                              newStyle1LeftData === undefined
                                ? null
                                : newStyle1LeftData[1]?.foodImage
                            }
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>
                                {newStyle1LeftData === undefined
                                  ? null
                                  : newStyle1LeftData[1]?.foodName}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='imgFile secondImg'>
                        <div>
                          <img
                            className=''
                            style={{
                              height: "143px",
                              width: "210px",
                              objectFit: "cover",
                            }}
                            src={
                              newStyle1LeftData === undefined
                                ? null
                                : newStyle1LeftData[2]?.foodImage
                            }
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>
                                {newStyle1LeftData === undefined
                                  ? null
                                  : newStyle1LeftData[2]?.foodName}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='imgFile thirdImg'>
                        <div>
                          <img
                            className=''
                            style={{
                              height: "143px",
                              width: "210px",
                              objectFit: "cover",
                            }}
                            src={
                              newStyle1LeftData === undefined
                                ? null
                                : newStyle1LeftData[3]?.foodImage
                            }
                            alt=''
                          />
                        </div>
                        <div className='overlay__text'>
                          <div className='inner__body'>
                            <div>
                              <h3>
                                {newStyle1LeftData === undefined
                                  ? null
                                  : newStyle1LeftData[3]?.foodName}
                              </h3>
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
                  <h2>{data?.data?.sectionTitle2} </h2>
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
                                objectFit: "cover",
                              }}
                              src={
                                newStyle1RightData === undefined
                                  ? null
                                  : newStyle1RightData[0]?.foodImage
                              }
                              alt=''
                            />
                          </div>
                          <div className='overlay__text'>
                            <div className='inner__body'>
                              <div>
                                <h3>
                                  {newStyle1RightData === undefined
                                    ? null
                                    : newStyle1RightData[0]?.foodName}
                                </h3>
                                <p>
                                  {newStyle1RightData === undefined
                                    ? null
                                    : newStyle1RightData[0]?.foodAdditionalInfo}
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
                                    objectFit: "cover",
                                  }}
                                  src={
                                    newStyle1RightData === undefined
                                      ? null
                                      : newStyle1RightData[1]?.foodImage
                                  }
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>
                                      {newStyle1RightData === undefined
                                        ? null
                                        : newStyle1RightData[1]?.foodName}
                                    </h3>
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
                                    objectFit: "cover",
                                  }}
                                  src={
                                    newStyle1RightData === undefined
                                      ? null
                                      : newStyle1RightData[2]?.foodImage
                                  }
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>
                                      {newStyle1RightData === undefined
                                        ? null
                                        : newStyle1RightData[2]?.foodName}
                                    </h3>
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
                                    objectFit: "cover",
                                  }}
                                  src={
                                    newStyle1RightData === undefined
                                      ? null
                                      : newStyle1RightData[3]?.foodImage
                                  }
                                  alt=''
                                />
                              </div>
                              <div className='overlay__text'>
                                <div className='inner__body'>
                                  <div>
                                    <h3>
                                      {newStyle1RightData === undefined
                                        ? null
                                        : newStyle1RightData[3]?.foodName}
                                    </h3>
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
