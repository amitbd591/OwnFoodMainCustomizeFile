import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleRecipeFood = () => {
  return (
    <div className='SingleRecipeFood'>
      <Container>
        <Row>
          <Col lg={7}>
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
          <Col lg={5}>
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
        <Row>
          <Col>
            <div>
              <div className='ingredients'>
                <h2>Ingredients</h2>
                <div>
                  <ul>
                    <li>2 tbsp olive oil</li>
                    <li>
                      400g/14oz sausages, ideally spicy sausages such as
                      Toulouse or Spanish-style pork
                    </li>
                    <li>1 onion, thinly sliced</li>
                    <li>400g chopped tomatoes with herbs</li>
                    <li>160g/5¾oz Puy lentils</li>
                    <li>1 chicken or pork stock cube</li>
                    <li>75ml/2½fl oz oz red wine, or extra stock</li>
                  </ul>
                </div>
                <hr />
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={8}>
            <div className='method'>
              <h2>Method</h2>
              <ul>
                <li>
                  Heat one tablespoon of the oil in a large, deep frying pan or
                  shallow casserole and fry the sausages over a medium heat for
                  6–8 minutes, or until lightly browned on all sides. Transfer
                  to a plate and return the pan to the heat.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleRecipeFood;
