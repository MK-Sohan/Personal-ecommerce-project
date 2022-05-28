import React, { useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";

function StandardNavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center sticky top-0 h-20 px-6 justify-between  bg-[#ffc532] text-white  z-50">
      <div className="h-8">
        <img
          src="https://gustui.s3.amazonaws.com/Gust+Logo+White.png"
          className="h-full"
        />
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
          to="/dashboard"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faDashboard} className=" mr-2" />
          Dashboard
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
          to="/blog"
          className="no-underline px-2 mr-3 text-gray-700 font-bold
          text-xl hover:text-white"
        >
          <FontAwesomeIcon icon={faBlog} className=" mr-2" />
          Blogs
        </Link>
      </div>
      <div className="items-center hidden lg:flex">
        <Button
          onClick={handlelogin}
          className=" text-gray-800  bg-transparent bottom-1 border-gray-700 hover:bg-white hover:text-black"
          text="Login"
          size="sm"
        />{" "}
        <span className="px-4 caret-black text-black">|</span>
        <Button
          onClick={handleRegister}
          className="text-gray-800 bg-transparent bottom-1 border-green-600 hover:bg-green-600 hover:text-white"
          text="Register"
          size="sm"
        />
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="ml-6 text-2xl cursor-pointer text-gray-700"
        />
        <Avatar
          size="base"
          image="https://gustui.s3.amazonaws.com/avatar.png"
          status="offline"
          className="ml-6 cursor-pointer "
        />
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
              to="/dashboard"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faDashboard} className=" mr-2 mt-6 " />
              Dashboard
            </Link>
            <Link
              to="/products"
              className="no-underline px-2 mr-3 text-gray-200 font-bold
          text-xl hover:text-white"
            >
              <FontAwesomeIcon icon={faBox} className=" mr-2 mt-6 " />
              Products
            </Link>
            <div className="flex">
              <Button
                onClick={handlelogin}
                className=" text-gray-200 bg-transparent bottom-1 border-gray-200 mt-6 hover:bg-white hover:text-black"
                text="Login"
                size="sm"
              />{" "}
              <span className="px-4 mt-5 text-3xl text-white caret-black ">
                |
              </span>
              <Button
                onClick={handleRegister}
                className=" text-gray-200 bg-transparent bottom-1 mt-6  border-green-600 hover:bg-green-600 hover:text-white"
                text="Register"
                size="sm"
              />
            </div>
            <div className="my-5  flex justify-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="text-2xl mx-2 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl mx-2 cursor-pointer"
              />
            </div>
            <Avatar
              size="lg"
              image="https://gustui.s3.amazonaws.com/avatar.png"
              status="offline"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardNavMenu;
