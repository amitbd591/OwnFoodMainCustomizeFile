import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Recipe_Gallery = () => {
  return (
    <section className='Recipe_Gallery section '>
      <Container fluid>
        {/* Top Gallery */}
        <div className='top__gallery'>
          <Row>
            <Col lg={6} className='leftSide'>
              <div className='leftSide_inner'>
                <div className='header_text'>
                  <h2>Down Home Ribs</h2>
                </div>
                <div className='topBar'>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_1_1.png"}
                      alt=''
                    />
                  </div>
                </div>
                <div className='buttonBar d-flex justify-content-between'>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_1_2.png"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_1_3.png"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_1_4.png"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className='rightSide'>
              <div className='rightSide_inner'>
                <div className='header_text'>
                  <h2>Barbecued Drumsticks</h2>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='leftBar pe-4'>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_2_4.png"}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='rightBar '>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_2_2.png"}
                        alt=''
                      />
                    </div>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_2_3.png"}
                        alt=''
                      />
                    </div>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_2_1.png"}
                        alt=''
                      />
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
                  <h2>Classic Fried Chicken</h2>
                </div>
                <div className='d-flex'>
                  <div className='leftBar  pe-4'>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_4_4.png"}
                        alt=''
                      />
                    </div>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_4_5.png"}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='rightBar'>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_4_1.png"}
                        alt=''
                      />
                    </div>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_4_2.png"}
                        alt=''
                      />
                    </div>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src={"/Assets/Img/Recipe/imgHub_4_3.png"}
                        alt=''
                      />
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
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_3_4.png"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_3_5.png"}
                      alt=''
                    />
                  </div>
                </div>
                <div className='bottomBar '>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_3_1.png"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_3_1.png"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/Recipe/imgHub_3_3.png"}
                      alt=''
                    />
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
