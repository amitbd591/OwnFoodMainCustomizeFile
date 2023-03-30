import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecipeFeature = () => {
  return (
    <div className='RecipeFeature'>
      <Container>
        <div className='inner-bg'>
          <Row>
            <Col>
              <div>
                <div className='titleIntro'>
                  <h3>Recipes</h3>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <div className='leftSide'>
                <div className='wrapper'>
                  <div className='img-file'>
                    <img
                      src='https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_mushroom_and_04696_16x9.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className='rightSide'>
                <div className='wrapper'>
                  <div className='inner'>
                    <div className='recipe-title'>
                      <Link to={"/SingleRecipeFood/:id"}>
                        <h2>Easy and cheap one pots</h2>
                      </Link>
                      <div className='text-file'>
                        <p>
                          Short on time and cash? These one pot recipes will
                          make life a little bit easier. Look for delicious Puy
                          lentils for this pork and pulse stew. Serve with
                          cooked green leafy vegetables, or warmed, crusty
                          bread.
                        </p>
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
                              <strong>By</strong>{" "}
                              <Link to={"/"}>Dr Rupy Aujla</Link>
                            </p>
                            <p>From Thrifty Cooking in the Doctor’s Kitchen</p>
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
      </Container>

      <div className='allRecipeCatItem'>
        <Container>
          <Row>
            {[...Array(4)].map((item, index) => (
              <Col xs={3} key={index}>
                <div className='single-recipe-cat-items'>
                  <div className='imgFile'>
                    <img
                      className='img-fluid'
                      src='https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/creamy_mushroom_pasta_41818_16x9.jpg'
                      alt=''
                    />
                  </div>
                  <div className='textFile'>
                    <Link to={"/"}>
                      <h3>Veggie mulligatawny soup</h3>
                    </Link>
                    <p>By Alex Johan</p>
                    <p className='mt-1'>
                      <strong>From:</strong> Thrifty Cooking in the Doctor’s
                      Kitchen
                    </p>
                    <div className='img-overlay'>
                      <img
                        src='https://ichef.bbci.co.uk/food/ic/food_1x1_72/chefs/rupy_aujla_1x1.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RecipeFeature;
