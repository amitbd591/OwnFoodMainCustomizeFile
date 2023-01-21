import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Receipebook_layoutTwo = () => {
  return (
    <Container className='Receipebook_layoutTwo d-flex  mt-5'>
      <div className='top__gallery'>
        <Row>
          <Col lg={4} className='rightSide'>
            <div className='rightSide_inner'>
              <div className='d-flex '>
                <div className='leftBar pe-2'>
                  <div className='big_imgFileTwo'>
                    <img
                      className='img-fluid first_image'
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
                <div className='rightBar '>
                  <div className='imgFile mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_3.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_4.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  '>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} className='leftSide'>
            <div className='rightSide_inner'>
              <div className='d-flex '>
                <div className='leftBar '>
                  <div className='imgFile'>
                    <img
                      className='img-fluid center_image '
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} className='rightSide'>
            <div className='rightSide_inner'>
              <div className='d-flex '>
                <div className='rightBar '>
                  <div className='imgFile mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_3.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  mb-2'>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_4.jpeg"}
                      alt=''
                    />
                  </div>
                  <div className='imgFile  '>
                    <img
                      className='img-fluid'
                      src={"/Assets/Img/RecipeBook/RecipeBook_2.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
                <div className='leftBar ps-2'>
                  <div className='big_imgFileTwo'>
                    <img
                      className='img-fluid last_image'
                      src={"/Assets/Img/RecipeBook/RecipeBook_1.jpeg"}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Receipebook_layoutTwo;
