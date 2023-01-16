import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLoginPage from "./Pages/CustomerLoginPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/CustomerLogin' element={<CustomerLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
