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
import RequireAuth from "./Components/Authentication/RequireAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carts from "./Components/Cartsection/Carts";
import Myprofile from "./Components/Myprofile/Myprofile";
import Myreview from "./Components/Dashboard/Myreview";
import EditProfile from "./Components/Myprofile/EditProfile";
import Allusers from "./Components/Dashboard/Allusers/Allusers";
import Addproduct from "./Components/Dashboard/AddProduct/Addproduct";
import ManageProduct from "./Components/Dashboard/ManageProduct/ManageProduct";
function App() {
  return (
    <div className="bg-white  ">
      <StandardNavMenu></StandardNavMenu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/women"
          element={
            <RequireAuth>
              <WomensCollection></WomensCollection>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shoes"
          element={
            <RequireAuth>
              <Allshoes></Allshoes>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Carts></Carts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/aboutproduct/:productid"
          element={
            <RequireAuth>
              <ProductDetail></ProductDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/gadget"
          element={
            <RequireAuth>
              <Allgadgets></Allgadgets>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/review"
          element={
            <RequireAuth>
              <Allreview></Allreview>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/man"
          element={
            <RequireAuth>
              <MansCollection></MansCollection>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path="review" element={<Myreview></Myreview>}></Route>
          <Route path="allusers" element={<Allusers></Allusers>}></Route>
          <Route path="addproduct" element={<Addproduct></Addproduct>}></Route>
          <Route
            path="manageproduct"
            element={<ManageProduct></ManageProduct>}
          ></Route>
          <Route
            path="editprofile"
            element={<EditProfile></EditProfile>}
          ></Route>
        </Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
