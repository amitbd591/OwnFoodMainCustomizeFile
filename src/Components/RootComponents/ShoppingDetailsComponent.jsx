import React from "react";
import ShoppingDetails from "../ChildComponents/ShoppingDetails";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const ShoppingDetailsComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <ShoppingDetails />
      <Footer />
    </>
  );
};

export default ShoppingDetailsComponent;
