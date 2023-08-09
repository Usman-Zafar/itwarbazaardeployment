import "./App.css";
//import { Signin } from "./Component/SigninComponent";
import { SignUp } from "./Component/SignupComponent";
import { Signin } from "./Component/SigninComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CustomerHeader } from "./Component/CustomerComponent/HeaderComponent";
// import { CustomerFooter } from "./Component/CustomerComponent/FooterCoponent";
// import { ProductPage } from "./Component/SellerComponent/CreateProduct/CreateProduct";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route exact path="/" element={<ProductPage />} /> */}
          {/* <Route exact path="/sellerproducts" element={<SellerProductPage />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/createproduct" element={<CreateProduct />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
