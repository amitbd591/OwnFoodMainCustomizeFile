import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";
import SellerProfilePage from "./Pages/SellerProfilePage";
import CountryCategoryPage from "./Pages/CountryCategoryPage";
import CustomerLoginPage from "./Pages/CustomerLoginPage";
import CustomerRegistrationPage from "./Pages/CustomerRegistrationPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import CategoryPage from "./Pages/CategoryPage";
import FaqPage from "./Pages/FaqPage";
import { Toaster } from "react-hot-toast";
import AllRecipeCategoryPage from "./Pages/AllRecipeCategoryPage";
function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ScrollToTop smooth color='#6f00ff' />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route
          exact
          path='/ProductsDetails'
          element={<ProductsDetailsPage />}
        />
        <Route
          exact
          path='/SellerProfile/:id'
          element={<SellerProfilePage />}
        />
        <Route exact path='/Category/:id/:limit' element={<CategoryPage />} />
        <Route
          exact
          path='/AllRecipeCategory'
          element={<AllRecipeCategoryPage />}
        />
        <Route exact path='/Faq' element={<FaqPage />} />
        <Route
          exact
          path='/CountryCategory'
          element={<CountryCategoryPage />}
        />
        <Route
          exact
          path='/CustomerRegistration'
          element={<CustomerRegistrationPage />}
        />
        <Route exact path='/CustomerLogin' element={<CustomerLoginPage />} />
        <Route exact path='/ForgetPassword' element={<ForgetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
