import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomePageStyleTwo = () => {
  //   const Style1 = HomePageList?.data.filter(
  //     (item) => item.sectionStyle === "Style1"
  //   );

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
