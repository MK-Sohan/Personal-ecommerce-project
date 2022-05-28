import React from "react";
import Banner from "../Banner/Banner";
import Carusel from "../carusel/Carusel";
import ShopeCatagory from "../ShopebyCatagory/ShopeCatagory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ShopeCatagory></ShopeCatagory>
      <Carusel></Carusel>
    </div>
  );
};

export default Home;
