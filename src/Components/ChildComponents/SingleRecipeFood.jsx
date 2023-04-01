import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCheckSquare, FaHotjar, FaVideo } from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import { useState } from "react";
const SingleRecipeFood = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='SingleRecipeFood'>
      <Container>
        <Row>
          <Col lg={8}>
            <div className='wrapper-left'>
              <div className='title'>
                <h2>Easy sausage and lentil stew</h2>
              </div>
              <div className='img-file'>
                <img
                  className='img-fluid'
                  src='https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/sausage_and_lentil_stew_90967_16x9.jpg'
                  alt=''
                />
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className='wrapper-right'>
              <div className='preparation'>
                <div className='items'>
                  <p>Preparation time</p>
                  <h5>less than 30 mins</h5>
                </div>
                <div className='items'>
                  <p>Cooking time</p>
                  <h5>30 mins to 1 hour</h5>
                </div>
                <div className='items'>
                  <p>Serves</p>
                  <h5>Serves 4</h5>
                </div>
              </div>
              <div className='profile-info'>
                <div className='d-flex gap-3 align-items-center'>
                  <div className='img-file'>
                    <img
                      src='https://ichef.bbci.co.uk/food/ic/food_1x1_72/chefs/rupy_aujla_1x1.jpg'
                      alt=''
                    />
                  </div>
                  <div className='text-file'>
                    <div className='info'>
                      <p>
                        <strong>By</strong> <Link to={"/"}>Dr Rupy Aujla</Link>
                      </p>
                      <p>From Thrifty Cooking in the Doctor’s Kitchen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />

        {/* Design Two  */}
        <Row className='design-two'>
          <Col lg={6}>
            <div className='wrapper-left'>
              <div className='title'>
                <h2>Easy sausage and lentil stew</h2>
              </div>
              <div className='preparation-intro'>
                <div className='items'>
                  <h2>Preparation Time</h2>
                  <p>Less than 30 mins</p>
                </div>
                <div className='items'>
                  <h2>Cooking Time</h2>
                  <p>30 mins to 1 hour</p>
                </div>
                <div className='items'>
                  <h2>Serves</h2>
                  <p>Serves 4</p>
                </div>
              </div>
              <div className='img-file'>
                <img
                  className='img-fluid'
                  src='https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/sausage_and_lentil_stew_90967_16x9.jpg'
                  alt=''
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className='wrapper-right '>
              <div className='video-box'>
                <video controls>
                  <source
                    src='https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
                    type='video/mp4'
                  />
                </video>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div class='profile-info-block'>
              <div class='d-flex gap-3 align-items-center'>
                <div class='img-file'>
                  <img
                    src='https://ichef.bbci.co.uk/food/ic/food_1x1_72/chefs/rupy_aujla_1x1.jpg'
                    alt=''
                  />
                </div>
                <div class='text-file'>
                  <div class='info'>
                    <p>
                      <strong>By</strong> <a href='/'>Dr Rupy Aujla</a>
                    </p>
                    <p>From Thrifty Cooking in the Doctor’s Kitchen</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs={6}>
            <div className='protin'>
              <p>
                Look for delicious Puy lentils for this pork and pulse stew.
                Serve with cooked green leafy vegetables, or warmed, crusty
                bread.
              </p>
              <br />
              <p>
                Each serving provides 434 kcal, 27g protein, 29g carbohydrates
                (of which 7g sugars), 20g fat (of which 1g saturates), 7g fibre
                and 1.7g salt.
              </p>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <div className='ingredientsBody'>
              <div className='ingredients'>
                <h2>Ingredients</h2>
                <div>
                  <ul>
                    <li>
                      <FaCheckSquare />
                      <span>2 tbsp olive oil</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>
                        400g/14oz sausages, ideally spicy sausages such as
                        Toulouse or Spanish-style pork
                      </span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>1 onion, thinly sliced</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>400g chopped tomatoes with herbs</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>160g/5¾oz Puy lentils</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>1 chicken or pork stock cube</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>75ml/2½fl oz oz red wine, or extra stock</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='ingredients'>
                <h2>Shopping List</h2>
                <div>
                  <ul>
                    <li>
                      <FaCheckSquare />
                      <span>2 tbsp olive oil</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>
                        400g/14oz sausages, ideally spicy sausages such as
                        Toulouse or Spanish-style pork
                      </span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>1 onion, thinly sliced</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>400g chopped tomatoes with herbs</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>160g/5¾oz Puy lentils</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>1 chicken or pork stock cube</span>
                    </li>
                    <li>
                      <FaCheckSquare />
                      <span>75ml/2½fl oz oz red wine, or extra stock</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={7}>
            <div className='method'>
              <h2>Method</h2>
              <ul>
                {[...Array(5)].map((item, index) => (
                  <li key={index}>
                    <div className='inner'>
                      <div className='textFile'>
                        <p>
                          Heat one tablespoon of the oil in a large, deep frying
                          pan or shallow casserole and fry the sausages over a
                          medium heat for 6–8 minutes, or until lightly browned
                          on all sides. Transfer to a plate and return the pan
                          to the heat.
                        </p>
                      </div>
                      <div className='imgFile'>
                        {isOpen && (
                          <Lightbox
                            mainSrc={
                              "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_mushroom_and_04696_16x9.jpg"
                            }
                            onCloseRequest={() => {
                              setIsOpen(false);
                            }}
                          />
                        )}
                        <img
                          className='img-fluid'
                          onClick={() => {
                            setIsOpen(true);
                          }}
                          src={
                            "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_mushroom_and_04696_16x9.jpg"
                          }
                          alt=''
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col xs={5} className='recipeTips'>
            <div className='textBody'>
              <h2>
                <FaHotjar />
                <span>Recipe Tips</span>
              </h2>
              <div className='text'>
                <p>
                  Add half a teaspoon of crushed chilli flakes or a bay leaf if
                  you have them in your spice collection.
                </p>
                <br />
                <p>
                  In March 2022 this recipe was costed at an average of £3.82
                  (using standard sausages) when checking prices at four UK
                  supermarkets. This recipe is designed to be made in
                  conjunction with a low-cost store-cupboard, for more details
                  click here to see how our budget recipes were costed.
                </p>
                <br />
                <p>
                  In March 2022 this recipe was costed at an average of £3.82
                  (using standard sausages) when checking prices at four UK
                  supermarkets. This recipe is designed to be made in
                  conjunction with a low-cost store-cupboard, for more details
                  click here to see how our budget recipes were costed.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default SingleRecipeFood;
