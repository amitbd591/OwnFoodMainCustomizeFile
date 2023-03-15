import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BaseURL } from "../../Helper/config";

const HomePageStyleTwo = (data) => {
  const [style1LeftData, setStyleLeft2Data] = useState([]);
  const [style1RightData, setStyle1RightData] = useState([]);
  // const Style2 = data?.data?.filter((item) => item.sectionStyle === "Style2");

  let style2_catId_1 = data?.data?.sectionCategories1[0]?.value;
  let style2_catId_2 = data?.data?.sectionCategories2[0]?.value;

  useEffect(() => {
    // For Style1 section Left Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style2_catId_1 + "/" + 5)
      .then((res) => {
        setStyleLeft2Data(res.data.data);
      });

    // For Style2 section Right Data
    axios
      .get(BaseURL + "/get-food-by-category/" + style2_catId_2 + "/" + 5)
      .then((res) => {
        setStyle1RightData(res.data.data);
      });
  }, []);

  let newStyle2LeftData = style1LeftData[0]?.data;
  let newStyle1RightData = style1RightData[0]?.data;
  // debugger;
  return (
    <section className='Recipe_Gallery section pt-2 pb-5'>
      <Container>
        <div className='bottom__gallery'>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide__inner'>
                <div className='header_text'>
                  {/* <h2>{"item?.sectionTitle1"}</h2> */}
                  <h2>{data?.data?.sectionTitle1} </h2>
                </div>
                <div className='d-flex'>
                  <div className='leftBar  pe-2'>
                    <div className='imgFile  firstImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "290", objectFit: "cover" }}
                          src={
                            newStyle2LeftData === undefined
                              ? null
                              : newStyle2LeftData[0]?.foodImage
                          }
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>
                              {newStyle2LeftData === undefined
                                ? null
                                : newStyle2LeftData[0]?.foodName}
                            </h3>
                            <p>
                              {newStyle2LeftData === undefined
                                ? null
                                : newStyle2LeftData[0]?.foodAdditionalInfo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='imgFile  secondImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "290", objectFit: "cover" }}
                          src={
                            newStyle2LeftData === undefined
                              ? null
                              : newStyle2LeftData[1]?.foodImage
                          }
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>
                              {newStyle2LeftData === undefined
                                ? null
                                : newStyle2LeftData[1]?.foodName}
                            </h3>
                            <p>
                              {newStyle2LeftData === undefined
                                ? null
                                : newStyle2LeftData[1]?.foodAdditionalInfo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='rightBar'>
                    <div className='imgFile firstImg'>
                      <div>
                        <div></div>
                        <img
                          className=''
                          style={{ height: "193", objectFit: "cover" }}
                          src={
                            newStyle2LeftData === undefined
                              ? null
                              : newStyle2LeftData[2]?.foodImage
                          }
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Green Papaya Salad</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='imgFile secondImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "193", objectFit: "cover" }}
                          src={
                            newStyle2LeftData === undefined
                              ? null
                              : newStyle2LeftData[3]?.foodImage
                          }
                          alt=''
                        />
                      </div>

                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Spicy Salad</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='imgFile thirdImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "193", objectFit: "cover" }}
                          src={
                            newStyle2LeftData === undefined
                              ? null
                              : newStyle2LeftData[4]?.foodImage
                          }
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Khao Pad</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className='rightSide'>
              <div className='rightSide__inner'>
                <div className='header_text'>
                  <h2>{data?.data?.sectionTitle2} </h2>
                </div>
                <div className='topBar'>
                  <div className='imgFile firstImg'>
                    <div>
                      <img
                        className=' '
                        style={{
                          height: "450px",
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
                          <h3>Tom Yum Goong</h3>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Harum repellat dignissimos repellendus, esse
                            iusto voluptas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='imgFile secondImg'>
                    <div>
                      <img
                        className=''
                        style={{
                          height: "450px",
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
                          <h3>Tom Yum Goong</h3>
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Harum repellat dignissimos repellendus, esse
                            iusto voluptas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bottomBar '>
                  <div className='imgFile firstImg'>
                    <div>
                      <img
                        className=''
                        style={{
                          height: "120px",
                          width: "210px",
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
                          <h3>Tom Yum Goong</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='imgFile secondImg'>
                    <div>
                      <img
                        className=''
                        style={{
                          height: "120px",
                          width: "210px",
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
                          <h3>Tom Yum Goong</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='imgFile thirdImg'>
                    <div>
                      <img
                        className=''
                        style={{
                          height: "120px",
                          width: "210px",
                          objectFit: "cover",
                        }}
                        src={
                          newStyle1RightData === undefined
                            ? null
                            : newStyle1RightData[4]?.foodImage
                        }
                        alt=''
                      />
                    </div>
                    <div className='overlay__text'>
                      <div className='inner__body'>
                        <div>
                          <h3>Tom Yum Goong</h3>
                        </div>
                      </div>
                    </div>
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

export default HomePageStyleTwo;
