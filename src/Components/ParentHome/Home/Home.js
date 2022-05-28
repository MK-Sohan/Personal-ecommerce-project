import React from "react";
import Banner from "../Banner/Banner";
import Carusel from "../carusel/Carusel";
import ShopeCatagory from "../ShopebyCatagory/ShopeCatagory";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      {/* <Banner></Banner> */}
      <ShopeCatagory></ShopeCatagory>
    </div>
  );
};

export default Home;
