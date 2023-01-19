import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsDetailsPage from "./Pages/ProductsDetailsPage";
import SellerProfilePage from "./Pages/SellerProfilePage";
import CountryCategoryPage from "./Pages/CountryCategoryPage";
import CustomerLoginPage from "./Pages/CustomerLoginPage";
import CustomerRegistrationPage from "./Pages/CustomerRegistrationPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route
          exact
          path='/ProductsDetails'
          element={<ProductsDetailsPage />}
        />
        <Route exact path='/SellerProfile' element={<SellerProfilePage />} />
        <Route exact path='/Category' element={<CategoryPage />} />
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
