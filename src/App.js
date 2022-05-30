import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/ParentHome/Home/Home";
import StandardNavMenu from "./Components/Header/StandardNavMenu";
import Footer from "./Components/Share/Footer/Footer";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Products/Products";
import WomensCollection from "./Components/ParentHome/ShopebyCatagory/WomensCollection";
import Blogs from "./Components/Blogs/Blogs";
import MansCollection from "./Components/ParentHome/ShopebyCatagory/MansCollection";
import Allshoes from "./Components/ParentHome/ShopebyCatagory/Allshoes";
import Allgadgets from "./Components/ParentHome/ShopebyCatagory/Allgadgets";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Allreview from "./Components/ParentHome/Review/Allreview";

function App() {
  return (
    <div className="bg-white  ">
      <StandardNavMenu></StandardNavMenu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/women"
          element={<WomensCollection></WomensCollection>}
        ></Route>
        <Route path="/shoes" element={<Allshoes></Allshoes>}></Route>
        <Route
          path="/aboutproduct/:productid"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/gadget" element={<Allgadgets></Allgadgets>}></Route>
        <Route path="/review" element={<Allreview></Allreview>}></Route>
        <Route path="/man" element={<MansCollection></MansCollection>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
