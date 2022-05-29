import React, { useEffect, useState } from "react";
import SingleShoes from "./SingleShoes";

const Allshoes = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto ">
        <div className="  text-center lg:py-10 md:py-8 py-6">
          <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
            Shoes Collection Vol-1
          </p>
        </div>
        <div className=" py-6 lg:px-20 md:px-6 px-4">
          <hr className=" w-full bg-gray-200 my-6" />

          <div className=" flex justify-between items-center"></div>
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {shoes?.map((shoe) => (
              <SingleShoes key={shoe._id} shoe={shoe}></SingleShoes>
            ))}
          </div>
          <div className=" flex justify-center items-center">
            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allshoes;
