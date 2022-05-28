import React from "react";
import Banner from "../Banner/Banner";
import BestsellingProducts from "../BestsellingProduct/BestsellingProducts";
import Carusel from "../carusel/Carusel";
import ShopeCatagory from "../ShopebyCatagory/ShopeCatagory";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      {/* <Banner></Banner> */}
      <ShopeCatagory></ShopeCatagory>
      <BestsellingProducts></BestsellingProducts>
    </div>
  );
};

export default Home;
