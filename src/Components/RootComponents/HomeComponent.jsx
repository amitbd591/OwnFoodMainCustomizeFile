import React, { useEffect } from "react";
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

  // return (
  //   <section>
  //     <Header />
  //     <div className='Space__For__Header'></div>
  //     <CountryBaseFoodCategories />
  //     <CardSlider />
  //     {/* <CountryBaseFoodCategories /> */}
  //     <EarnMoney />

  //     {/* <Recipe_Gallery data={HomePageList} /> */}
  //     {/* <OpenAccountInfo /> */}
  //     {/* <Circle /> */}

  //     {Style1 === true ? <HomePageStyleOne data={HomePageList} /> : null}
  //     {Style2 === true ? <HomePageStyleTwo data={HomePageList} /> : null}

  //     {/* <HomePageStyleTwo /> */}
  //     <Circle_2 />

  //     {Style4 === true ? <OrderFoodCat data={HomePageList} /> : null}
  //     {/* <OrderFoodCat /> */}

  //     {/* {Style5 === true ? <HowWeDo data={HomePageList} /> : null} */}
  //     {/* <HowWeDo /> */}
  //     {/* <RecipeBook /> */}
  //     <Receipebook_layoutTwo />

  //     {Style5 === true ? <FoodCatGallery data={HomePageList} /> : null}
  //     {/* <FoodCatGallery /> */}
  //     <InstantFood title={"Instant"} />
  //     <BrowseByKitchen />
  //     <FoodNameCategory />
  //     <CenterSlider />
  //     <ProfileFoodGallery />
  //     <Dairy />
  //     <Map />
  //     <Footer />
  //   </section>
  // );
  return (
    <section>
      <Header />
      <div className='Space__For__Header'></div>
      <CountryBaseFoodCategories />
      <CardSlider />
      {/* <CountryBaseFoodCategories /> */}
      <EarnMoney />

      {/* <Recipe_Gallery data={HomePageList} /> */}
      {/* <OpenAccountInfo /> */}
      {/* <Circle /> */}

      {HomePageList.map((item, index) => {
        if (item.sectionStyle === "Style1") {
          return <HomePageStyleOne key={index} data={item} />;
        }
        if (item.sectionStyle === "Style2") {
          return <HomePageStyleTwo key={index} data={item} />;
        }
        if (item.sectionStyle === "Style3") {
          return <Circle_2 key={index} data={item} />;
        }
        if (item.sectionStyle === "Style4") {
          return <OrderFoodCat key={index} data={item} />;
        }
        if (item.sectionStyle === "Style5") {
          return <FoodCatGallery key={index} data={item} />;
        }
        if (item.sectionStyle === "Style6") {
          return <BrowseByKitchen key={index} data={item} />;
        }

        if (item.sectionStyle === "Style7") {
          return <HowWeDo key={index} data={item} />;
        }
        if (item.sectionStyle === "Style9") {
          return <FoodNameCategory key={index} data={item} />;
        }
        if (item.sectionStyle === "Style10") {
          return <Dairy key={index} data={item} />;
        }
        if (item.sectionStyle === "Style11") {
          return <Receipebook_layoutTwo key={index} data={item} />;
        }

        return <></>;
      })}

      {/* <Receipebook_layoutTwo /> */}
      {/* <InstantFood title={"Instant"} /> */}
      {/* <BrowseByKitchen /> */}
      {/* <FoodNameCategory /> */}
      {/* <CenterSlider /> */}
      {/* <ProfileFoodGallery /> */}
      {/* <Dairy /> */}
      <Map />
      <Footer />
    </section>
  );
};

export default HomeComponent;
