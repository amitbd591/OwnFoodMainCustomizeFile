import React from "react";
import AllRecipeCategory from "../ChildComponents/AllRecipeCategory";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const AllRecipeCategoryComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <AllRecipeCategory />
      <Footer />
    </>
  );
};

export default AllRecipeCategoryComponent;
