import React from "react";
import CardSlider from "../ChildComponents/CardSlider";
import Category from "../ChildComponents/Category";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import FilterCategory from "../Elements/FilterCategory";

const CategoryComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <CardSlider />
      <FilterCategory />

      <Category />
      <Footer />
    </>
  );
};

export default CategoryComponent;
