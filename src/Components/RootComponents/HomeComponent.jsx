import React from "react";
import ClientTop from "../ChildComponents/ClientTop";
import CardSlider from "../ChildComponents/CardSlider";
import Header from "../Common/Header";
import CountryBaseFoodCategories from "../ChildComponents/CountryBaseFoodCategories";
import EarnMoney from "../ChildComponents/EarnMoney";
import Recipe_Gallery from "../ChildComponents/Recipe_Gallery";
import Circle from "../ChildComponents/Circle";
import OrderFoodCat from "../ChildComponents/OrderFoodCat";
import OpenAccountInfo from "../ChildComponents/OpenAccountInfo";
import FoodCatGallery from "../ChildComponents/FoodCatGallery";
import InstantFood from "../ChildComponents/InstantFood";
import BrowseByKitchen from "../ChildComponents/BrowseByKitchen";
import FoodNameCategory from "../ChildComponents/FoodNameCategory";
import Map from "../ChildComponents/Map";
import Dairy from "../ChildComponents/Dairy";
import Footer from "../Common/Footer";

const HomeComponent = () => {
  return (
    <section>
      <Header />
      <ClientTop />
      <CardSlider />
      <CountryBaseFoodCategories />
      <EarnMoney />
      <Recipe_Gallery />
      <OpenAccountInfo />
      <Circle />
      <OrderFoodCat />
      <FoodCatGallery />
      <InstantFood />
      <BrowseByKitchen />
      <FoodNameCategory />
      <Dairy />
      <Map />
      <Footer />
    </section>
  );
};

export default HomeComponent;
