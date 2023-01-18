import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import {
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaPlayCircle,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const ProductsDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className='ProductsDetails'>
      <section class='inner-section'>
        <div class='container product_details'>
          <div class='row'>
            <div class='col-lg-6 leftSide'>
              <div class='image_slider'>
                <ImageGallery
                  useTranslate3D={false}
                  items={images}
                  showNav={false}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
              </div>
            </div>
            <div class='col-lg-6 rightSide'>
              <div class='details-content'>
                <h3 class='details-name'>Existing Product Name</h3>
                <div class='details-meta'>
                  <p>
                    SKU:<span>1234567</span>
                  </p>
                  <p>
                    BRAND:
                    <a href='#' className='ps-2'>
                      radhuni
                    </a>
                  </p>
                </div>
                <div class='details-rating'>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <Link href='#' className='ps-2'>
                    (3 reviews)
                  </Link>
                </div>
                <div className='details-price'>
                  <h2>
                    <del>$38.00</del>
                  </h2>
                  <span>
                    $24.00<small>/per kilo</small>
                  </span>
                </div>

                <p class='details-desc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit facere
                  harum natus amet soluta fuga consectetur alias veritatis
                  quisquam ab eligendi itaque eos maiores quibusdam.
                </p>
                <div class='details-list-group'>
                  <label class='details-list-title'>tags:</label>
                  <ul class='details-tag-list'>
                    <li>
                      <a href='#'>burger</a>
                    </li>
                    <li>
                      <a href='#'>ciken</a>
                    </li>
                    <li>
                      <a href='#'>chilis</a>
                    </li>
                  </ul>
                </div>
                <div class='details-list-group'>
                  <label class='details-list-title'>Share:</label>
                  <ul class='details-share-list'>
                    <li>
                      <FaFacebookF />
                    </li>
                    <li>
                      <FaTwitter />
                    </li>
                    <li>
                      <FaLinkedinIn />
                    </li>
                  </ul>
                  <div class='details-action-group'>
                    <button class='add__wish'>
                      <span>
                        <FaHeart />
                      </span>
                      <span>add to wish</span>
                    </button>
                  </div>
                </div>
                <div class='details-add-group'>
                  <button class='product-add' title='Add to Cart'>
                    <i class='fas fa-shopping-basket'></i>
                    <span>add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container className='product_details__review'>
          <Row>
            <Col lg={12}>
              <div className='inner__section'>
                <Tabs>
                  <TabList>
                    <Tab>Description</Tab>
                    <Tab>Specifications</Tab>
                    <Tab>Review(2)</Tab>
                  </TabList>

                  <TabPanel>
                    <div className='description__body'>
                      <Row>
                        <Col lg={6}>
                          <div>
                            <div className='des__text'>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Necessitatibus consequatur quo
                                optio alias eius, iste nihil illum totam, velit
                                provident enim temporibus at asperiores animi.
                                Modi laboriosam sequi iste, quidem facilis
                                soluta ab, commodi odit rerum pariatur eum
                                voluptatibus expedita porro eligendi fugiat
                                tempora, corporis id? Sequi eum fugit eius!
                              </p>
                            </div>
                            <div className='list__data'>
                              <ul>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Klitr ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6}>
                          <div className='img__file'>
                            <div className='img__body'>
                              <img
                                className='img-fluid'
                                src='/Assets/Img/blog/01.jpg'
                                alt=''
                              />
                              <span className='icon__section'>
                                <FaPlayCircle />
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='specifications__body'>
                      <Row>
                        <Col lg={12}>
                          <div className='inner__body'>
                            <Table striped bordered hover>
                              <thead>
                                <tr>
                                  <th>Product Code</th>
                                  <th>Weight</th>
                                  <th>Style</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='review__body'>
                      <Row>
                        <Col lg={12}>
                          <div className='inner__body'>
                            <div className='profile__user'>
                              <div className='imgFile'>
                                <img
                                  className='img-fluid'
                                  src='/Assets/Img/team/01.jpg'
                                  alt=''
                                />
                              </div>
                              <div className='textFile'>
                                <span>Alex Jhon</span>
                                <span>January 18, 2023</span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProductsDetails;
