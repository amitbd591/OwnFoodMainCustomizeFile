import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllRecipeCategory from "../ChildComponents/AllRecipeCategory";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const SingleRecipeCategoryAllFoodComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <AllRecipeCategory />

      {/* Recipe Category All Items */}
      <div className='RecipeFeature p-0'>
        <div className='allRecipeCatItem'>
          <Container>
            <Row>
              <Col>
                <h2 className='header-intro'>View All Single Recipe Items.</h2>
              </Col>
            </Row>
            <Row>
              {[...Array(16)].map((item, index) => (
                <Col xs={3} key={index}>
                  <div className='single-recipe-cat-items '>
                    <div className='imgFile'>
                      <img
                        className='img-fluid'
                        src='https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/creamy_mushroom_pasta_41818_16x9.jpg'
                        alt=''
                      />
                    </div>
                    <div className='textFile'>
                      <Link to={"/SingleRecipeFood/:id"}>
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
      <Footer />
    </>
  );
};

export default SingleRecipeCategoryAllFoodComponent;
