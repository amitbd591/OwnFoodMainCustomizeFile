import React from "react";
import CardSlider from "../ChildComponents/CardSlider";
import Category from "../ChildComponents/Category";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const CategoryComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <CardSlider />
      <Category />
      <Footer />
    </>
  );
};

export default CategoryComponent;
