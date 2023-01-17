import React from "react";
import ClientTop from "../ChildComponents/ClientTop";
import CardSlider from "../ChildComponents/CardSlider";
import Header from "../Common/Header";
import CountryBaseFoodCategories from "../ChildComponents/CountryBaseFoodCategories";
import EarnMoney from "../ChildComponents/EarnMoney";
import Recipe_Gallery from "../ChildComponents/Recipe_Gallery";
import Circle from "../ChildComponents/Circle";
import OrderFoodCat from "../ChildComponents/OrderFoodCat";

const HomeComponent = () => {
  return (
    <section>
      <Header />
      <ClientTop />
      <CardSlider />
      <CountryBaseFoodCategories />
      <EarnMoney />
      <Recipe_Gallery />
      <Circle />
      <OrderFoodCat />
    </section>
  );
};

export default HomeComponent;
