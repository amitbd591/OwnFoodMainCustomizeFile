import React from "react";
import InstantFood from "../ChildComponents/InstantFood";
import ProductsDetails from "../ChildComponents/ProductsDetails";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ProductsDetailsComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <ProductsDetails />
      <InstantFood title={"Related"} />
      <Footer />
    </>
  );
};

export default ProductsDetailsComponent;
