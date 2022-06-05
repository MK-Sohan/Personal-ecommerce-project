import React from "react";
import BestsellingProducts from "../BestsellingProduct/BestsellingProducts";
import Carusel from "../carusel/Carusel";
import Reviews from "../Review/Reviews";
import ShopeCatagory from "../ShopebyCatagory/ShopeCatagory";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>

      <ShopeCatagory></ShopeCatagory>
      <BestsellingProducts></BestsellingProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
