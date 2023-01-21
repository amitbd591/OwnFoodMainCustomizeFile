import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Recipe_Gallery = () => {
  return (
    <section className='Recipe_Gallery section '>
      <Container>
        {/* Top Gallery */}
        <div className='top__gallery'>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide_inner'>
                <div className='header_text'>
                  <h2>Indian Dishes</h2>
                </div>
                <div className='topBar'>
                  <Link to={"/ShoppingDetails"}>
                    <div className='imgFile'>
                      <div>
                        <img
                          className='img-fluid'
                          src={"/Assets/Img/Recipe/imgHub_1_1.png"}
                          alt=''
                        />
                      </div>
                      <div className='overlay__text'>
                        <div className='inner__body'>
                          <div>
                            <h3>Butter Chicken</h3>
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
                <div className='buttonBar d-flex justify-content-between'>
                  <div className='imgFile fastImg'>
                    <div>
                      <img
                        className='img-fluid'
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
                        className='img-fluid'
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
                        className='img-fluid'
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
              </div>
            </Col>
            <Col lg={6} className='rightSide'>
              <div className='rightSide_inner'>
                <div className='header_text'>
                  <h2>Japanese Dish</h2>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='leftBar'>
                    <div className='imgFile'>
                      <div>
                        <img
                          className='img-fluidp'
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
                  <div className='rightBar '>
                    <div className='imgFile firstImg'>
                      <div>
                        <img
                          className='img-fluidp'
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
                    <div className='imgFile secondImg'>
                      <div>
                        <img
                          className='img-fluidp'
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
                    <div className='imgFile thirdImg'>
                      <div>
                        <img
                          className='img-fluidp'
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
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* Bottom Gallery */}
        <div className='bottom__gallery'>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide__inner'>
                <div className='header_text'>
                  <h2>Thailand Foods</h2>
                </div>
                <div className='d-flex'>
                  <div className='leftBar  pe-2'>
                    <div className='imgFile  firstImg'>
                      <div>
                        <img
                          className='img-fluid'
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
                          className='img-fluid'
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
                          className='img-fluid'
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
                          className='img-fluid'
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
                          className='img-fluid'
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
                  <h2>Gooey Country Ribs</h2>
                </div>
                <div className='topBar'>
                  <div className='imgFile firstImg'>
                    <div>
                      <img
                        className='img-fluid '
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
                        className='img-fluid'
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
                        className='img-fluid'
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
                        className='img-fluid'
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
                        className='img-fluid'
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

export default Recipe_Gallery;
