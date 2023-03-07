import React, { useEffect } from "react";
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
import ProfileFoodGallery from "../ChildComponents/ProfileFoodGallery";
import { getHomePageSections } from "../../API/HomePageSectionAPI";
import { useSelector } from "react-redux";
import HomePageStyleOne from "../ChildComponents/HomePageStyleOne";
import HomePageStyleTwo from "../ChildComponents/HomePageStyleTwo";

const HomeComponent = () => {
  useEffect(() => {
    getHomePageSections();
  }, []);

  let HomePageList = useSelector((state) => state.homePage.homePageList);

  for (let i = 0; i < HomePageList.length; i++) {
    if (HomePageList[i]?.sectionStyle === "Style1") {
      var Style1 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style2") {
      var Style2 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style3") {
      var Style3 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style4") {
      var Style4 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style5") {
      var Style5 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style6") {
      var Style6 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style7") {
      var Style7 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style8") {
      var Style8 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style9") {
      var Style9 = true;
    }
    if (HomePageList[i]?.sectionStyle === "Style10") {
      var Style10 = true;
    }
  }

  return (
    <section>
      <Header />
      <div className='Space__For__Header'></div>
      <ClientTop />
      <CardSlider />
      {/* <CountryBaseFoodCategories /> */}
      <EarnMoney />

      {/* <Recipe_Gallery data={HomePageList} /> */}
      {/* <OpenAccountInfo /> */}
      {/* <Circle /> */}

      {/* {HomePageList?.data.map((item, index) => {})} */}

      {Style1 === true ? <HomePageStyleOne data={HomePageList} /> : null}
      {Style2 === true ? <HomePageStyleTwo /> : null}

      <HomePageStyleTwo />
      <Circle_2 />

      {Style4 === true ? <OrderFoodCat data={HomePageList} /> : null}
      {/* <OrderFoodCat /> */}

      {Style5 === true ? <HowWeDo data={HomePageList} /> : null}
      {/* <HowWeDo /> */}
      {/* <RecipeBook /> */}
      <Receipebook_layoutTwo />

      {Style6 === true ? <FoodCatGallery /> : null}
      {/* <FoodCatGallery /> */}
      <InstantFood title={"Instant"} />
      <BrowseByKitchen />
      <FoodNameCategory />
      <CenterSlider />
      <ProfileFoodGallery />
      <Dairy />
      <Map />
      <Footer />
    </section>
  );
};

export default HomeComponent;
