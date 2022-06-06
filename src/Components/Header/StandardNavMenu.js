import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faBell,
  faBars,
  faTimes,
  faDashboard,
  faHome,
  faBox,
  faBlog,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import "./nav.css";
import logo from "./3536452.png";
function StandardNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const email = user?.email;
    fetch(`https://frozen-taiga-15313.herokuapp.com/carts/${email}`, {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [carts]);

  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const logout = () => {
    signOut(auth);
  };

  const handleGotocart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex items-center sticky top-0 h-20 px-6 justify-between  bg-[#ffc532] text-white  z-50">
      <div className="h-60">
        <img src={logo} className="h-60 w-60" />
      </div>
      <div className="flex-1 justify-center items-center hidden lg:flex">
        <Link
          to="/"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faHome} className=" mr-2" />
          Home
        </Link>

        <Link
          to="/products"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faBox} className=" mr-2" />
          Products
        </Link>
        <Link
          to="/dashboard"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faDashboard} className=" mr-2" />
          Dashboard
        </Link>
        <Link
          to="/blog"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faBlog} className=" mr-2" />
          Blogs
        </Link>
      </div>
      <div className="items-center hidden lg:flex">
        {user ? (
          <Button
            onClick={logout}
            className=" text-black bg-red-600 bottom-1 border-0 hover:bg-white hover:text-black"
            text="Sign out"
            size="sm"
          />
        ) : (
          <Button
            onClick={handlelogin}
            className=" text-black bg-transparent bottom-1   hover:bg-white hover:text-black"
            text="Log in"
            size="sm"
          />
        )}
        <span className="px-4 caret-black text-black">|</span>
        <Button
          onClick={handleRegister}
          className="text-black bg-transparent bottom-1 border-0 hover:bg-green-600   "
          text="Register"
          size="sm"
        />
        <FontAwesomeIcon
          onClick={handleGotocart}
          icon={faCartShopping}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
        <div class="badge badge-sm mb-9">{carts.length}</div>
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
        {user ? (
          <Avatar
            className="ml-3"
            size="base"
            image={user?.image}
            status="online"
          />
        ) : (
          <Avatar
            className="ml-3"
            size="base"
            image={user?.image}
            status="busy"
          />
        )}
      </div>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-black text-3xl cursor-pointer lg:hidden"
      />
      {mobileOpen && (
        <div className=" absolute bg-slate-600 top-full left-0 flex flex-col w-full pb-8 lg:hidden">
          <div className="flex-1 flex flex-col items-center text-xl">
            <Link
              to="/"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faHome} className=" mr-2 mt-6 " />
              Home
            </Link>

            <Link
              to="/products"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faBox} className=" mr-2 mt-6 " />
              Products
            </Link>
            <Link
              to="/dashboard"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faDashboard} className=" mr-2 mt-6 " />
              Dashboard
            </Link>
            <div className="flex">
              {user ? (
                <Button
                  onClick={logout}
                  className=" text-gray-200 bg-red-500 border-0 bottom-1
                    mt-6 hover:bg-white hover:text-black"
                  text="Sign Out"
                  size="sm"
                />
              ) : (
                <Button
                  onClick={handlelogin}
                  className=" text-gray-200 bg-transparent bottom-1 border-gray-200 mt-6 hover:bg-white hover:text-black"
                  text="Login"
                  size="sm"
                />
              )}{" "}
              <span className="px-4 mt-5 text-3xl text-white caret-black ">
                |
              </span>
              <Button
                onClick={handleRegister}
                className=" text-black bg-transparent bottom-1 mt-6  border-green-600 hover:bg-green-600 hover:text-white"
                text="Register"
                size="sm"
              />
            </div>
            <div className="my-5  flex justify-center">
              <FontAwesomeIcon
                onClick={handleGotocart}
                icon={faCartShopping}
                className="text-2xl mx-2 cursor-pointer"
              />
              <div class="badge badge-sm ">{carts.length}</div>
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl mx-2 cursor-pointer mb-3"
              />
            </div>
            {user ? (
              <Avatar
                className="ml-3"
                size="base"
                image={user?.image}
                status="online"
              />
            ) : (
              <Avatar
                className="ml-3"
                size="base"
                image={user?.image}
                status="busy"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardNavMenu;
