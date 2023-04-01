import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AllRecipeCategory from "../ChildComponents/AllRecipeCategory";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const AllRecipeCategoryComponent = () => {
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
              <Col xs={8}>
                <h2 className='header-intro'>Category Name</h2>
                <p className='des'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid debitis sequi soluta repellendus totam harum dolorem
                  laudantium dignissimos placeat explicabo!
                </p>
              </Col>
            </Row>
            <Row>
              {[...Array(16)].map((item, index) => (
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
                      <Link to={"/SingleRecipeCategoryAllFood/:id"}>
                        <h3>Apple crumble</h3>
                      </Link>
                      <p>14 recipes</p>
                      <span>DISH</span>
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

export default AllRecipeCategoryComponent;
