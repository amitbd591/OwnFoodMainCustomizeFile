import React from "react";
import ProductsDetails from "../ChildComponents/ProductsDetails";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ProductsDetailsComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <ProductsDetails />
      <Footer />
    </>
  );
};

export default ProductsDetailsComponent;
