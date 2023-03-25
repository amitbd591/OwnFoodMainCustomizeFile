import React from "react";
import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaRegStar, FaStar, FaTheRedYeti } from "react-icons/fa";
import { GiOpenedFoodCan } from "react-icons/gi";
import Rating from "react-rating";

const FilterCategory = () => {
  const [cuisinesShow, setCuisinesShow] = useState(false);
  const [dietaryShow, setDietaryShow] = useState(false);
  const [proteinShow, setProteinShow] = useState(false);
  const [moreFilters, setMoreFilters] = useState(false);
  const [rate, setRate] = useState(2);
  const [price, setPrice] = useState(10);

  return (
    <div className='filterCategory'>
      <Container>
        <Row>
          <Col xs={12}>
            <button
              onClick={() => setCuisinesShow(true)}
              className='me-2 myBtn'
            >
              All cuisines
            </button>
            <button onClick={() => setDietaryShow(true)} className='me-2 myBtn'>
              Dietary
            </button>
            <button onClick={() => setProteinShow(true)} className='me-2 myBtn'>
              Protein
            </button>
            <button onClick={() => setMoreFilters(true)} className='me-2 myBtn'>
              More Filters
            </button>
            <Modal
              size='lg'
              show={cuisinesShow}
              onHide={() => setCuisinesShow(false)}
              aria-labelledby='example-modal-sizes-title-sm'
              className='filterCategoryModal'
            >
              <Modal.Header closeButton>
                <Modal.Title id='example-modal-sizes-title-sm'>
                  All cuisines
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='allCuisines'>
                  <Row>
                    {[...Array(20)].map((item, index) => (
                      <Col lg={2}>
                        <div className='wrapper'>
                          <div className='imgFile'>
                            <img
                              src='https://cdn.shef.com/static/media/All-Cuisine-Icon_Globe_200x200px_Colour-HOVER.9cf42dfb.svg'
                              alt=''
                            />
                          </div>
                          <div className='textFile'>
                            <p>All cuisines</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              size='lg'
              show={dietaryShow}
              onHide={() => setDietaryShow(false)}
              aria-labelledby='example-modal-sizes-title-lg'
              className='filterCategoryModal'
            >
              <Modal.Header closeButton>
                <Modal.Title id='example-modal-sizes-title-lg'>
                  Dietary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='dietary '>
                  <Row>
                    {[...Array(5)].map((item, index) => (
                      <Col lg={2}>
                        <div className='wrapper'>
                          <div className='imgFile'>
                            <FaTheRedYeti />
                          </div>
                          <div className='textFile'>
                            <p>Vegetarian</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              size='lg'
              show={proteinShow}
              onHide={() => setProteinShow(false)}
              aria-labelledby='example-modal-sizes-title-lg'
              className='filterCategoryModal'
            >
              <Modal.Header closeButton>
                <Modal.Title id='example-modal-sizes-title-lg'>
                  Dietary
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='dietary '>
                  <Row>
                    {[...Array(5)].map((item, index) => (
                      <Col lg={2}>
                        <div className='wrapper'>
                          <div className='imgFile'>
                            <GiOpenedFoodCan />
                          </div>
                          <div className='textFile'>
                            <p>Chicken</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Modal.Body>
            </Modal>
            <Modal
              size='lg'
              show={moreFilters}
              onHide={() => setMoreFilters(false)}
              aria-labelledby='example-modal-sizes-title-lg'
              className='filterCategoryModal'
            >
              <Modal.Header closeButton>
                <Modal.Title id='example-modal-sizes-title-lg'>
                  More Filters
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className='dietary '>
                  <Row>
                    <Col lg={4}>
                      <div className='wrapperOne'>
                        <p className='textHeader'>Dish rating</p>
                        <Rating
                          className='rating'
                          emptySymbol={<FaRegStar />}
                          fullSymbol={<FaStar />}
                          initialRating={rate}
                          onClick={(e) => setRate(e)}
                        />
                        <p className='py-2'>Rating Range: {rate} Star</p>
                      </div>

                      <div className='wrapperOne'>
                        <p className='textHeader'>Filter By Price</p>
                        <input
                          type='range'
                          defaultValue={price}
                          min='10'
                          max='1000'
                          onChange={(event) => setPrice(event.target.value)}
                        />
                        <p className='py-2'>Price Range: {price} $</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterCategory;
