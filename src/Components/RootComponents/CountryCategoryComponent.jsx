import React from "react";
import CardSlider from "../ChildComponents/CardSlider";
import Circle from "../ChildComponents/Circle";
import InstantFood from "../ChildComponents/InstantFood";
import OpenAccountInfo from "../ChildComponents/OpenAccountInfo";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const CountryCategoryComponent = () => {
  return (
    <>
      <Header />
      <div className='Space__For__Header'></div>
      <CardSlider />
      <InstantFood />
      <Circle />
      <OpenAccountInfo />
      <Footer />
    </>
  );
};

export default CountryCategoryComponent;
