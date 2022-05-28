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

function App() {
  return (
    <div className="  ">
      <StandardNavMenu></StandardNavMenu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/women"
          element={<WomensCollection></WomensCollection>}
        ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
