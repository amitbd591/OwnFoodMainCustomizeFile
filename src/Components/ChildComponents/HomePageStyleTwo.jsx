import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BaseURL } from "../../Helper/config";

const HomePageStyleTwo = (data) => {
  const [style1LeftData, setStyleLeft2Data] = useState([]);
  const [style1RightData, setStyle1RightData] = useState([]);
  const Style2 = data?.data?.filter((item) => item.sectionStyle === "Style2");

  // let style2_catId_1 = Style2[0]?.sectionCategories1[0]?.value;
  // let style2_catId_2 = Style2[1]?.sectionCategories1[2]?.value;

  // useEffect(() => {
  //   // For Style1 section Left Data
  //   axios
  //     .get(BaseURL + "/get-food-by-category/" + style2_catId_1)
  //     .then((res) => {
  //       setStyleLeft2Data(res.data.data);
  //     });

  //   // For Style2 section Right Data
  //   axios
  //     .get(BaseURL + "/get-food-by-category/" + style2_catId_2)
  //     .then((res) => {
  //       setStyle1RightData(res.data.data);
  //     });
  // }, []);

  // let newStyle1LeftData = style1LeftData[0]?.data;
  // let newStyle1RightData = style1RightData[0]?.data;

  console.log(Style2);

  return (
    <section className='Recipe_Gallery section pt-2 pb-5'>
      <Container>
        <div className='bottom__gallery'>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide__inner'>
                <div className='header_text'>
                  <h2>{"item?.sectionTitle1"}</h2>
                </div>
                <div className='d-flex'>
                  <div className='leftBar  pe-2'>
                    <div className='imgFile  firstImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "290" }}
                          src={"/Assets/Img/Recipe/imgHub_4_4.png"}
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Tom Yum Goong</h3>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum repellat dignissimos
                              repellendus, esse iusto voluptas.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='imgFile  secondImg'>
                      <div>
                        <img
                          className=''
                          style={{ height: "290" }}
                          src={"/Assets/Img/Recipe/imgHub_4_5.png"}
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Tom Kha Gai</h3>
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
                  <div className='rightBar'>
                    <div className='imgFile firstImg'>
                      <div>
                        <div></div>
                        <img
                          className=''
                          style={{ height: "193" }}
                          src={"/Assets/Img/Recipe/imgHub_4_1.png"}
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
                          style={{ height: "193" }}
                          src={"/Assets/Img/Recipe/imgHub_4_2.png"}
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
                          style={{ height: "193" }}
                          src={"/Assets/Img/Recipe/imgHub_4_3.png"}
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
                  <h2>{"item?.sectionTitle2"}</h2>
                </div>
                <div className='topBar'>
                  <div className='imgFile firstImg'>
                    <div>
                      <img
                        className=' '
                        style={{ height: "450px", overflow: "hidden" }}
                        src={"/Assets/Img/Recipe/imgHub_3_4.png"}
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
                        style={{ height: "450px", overflow: "hidden" }}
                        src={"/Assets/Img/Recipe/imgHub_3_5.png"}
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
                        style={{ height: "120px", width: "210px" }}
                        src={"/Assets/Img/Recipe/imgHub_3_1.png"}
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
                        style={{ height: "120px", width: "210px" }}
                        src={"/Assets/Img/Recipe/imgHub_3_2.png"}
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
                        style={{ height: "120px", width: "210px" }}
                        src={"/Assets/Img/Recipe/imgHub_3_3.png"}
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
