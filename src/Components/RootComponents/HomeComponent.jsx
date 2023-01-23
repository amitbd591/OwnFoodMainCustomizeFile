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
import Circle_2 from "../ChildComponents/Circle_2";
import HowWeDo from "../ChildComponents/HowWeDo";
import RecipeBook from "../ChildComponents/RecipeBook";
import Receipebook_layoutTwo from "../ChildComponents/Receipebook_layoutTwo";
import CenterSlider from "../ChildComponents/CenterSlider";

const HomeComponent = () => {
  return (
    <section>
      <Header />
      <div className='Space__For__Header'></div>
      <ClientTop />
      <CardSlider />
      <CountryBaseFoodCategories />
      <EarnMoney />
      <Recipe_Gallery />
      <OpenAccountInfo />
      {/* <Circle /> */}
      <Circle_2 />

      <OrderFoodCat />
      <HowWeDo />
      {/* <RecipeBook /> */}
      <Receipebook_layoutTwo />
      <FoodCatGallery />
      <InstantFood title={"Instant"} />
      <BrowseByKitchen />
      <FoodNameCategory />
      <CenterSlider />
      <Dairy />
      <Map />
      <Footer />
    </section>
  );
};

export default HomeComponent;
