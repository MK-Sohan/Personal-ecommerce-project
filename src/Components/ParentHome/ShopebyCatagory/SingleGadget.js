import React from "react";
import { useNavigate } from "react-router-dom";

const SingleGadget = ({ gadget }) => {
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate("/aboutproduct/" + id);
  };

  return (
    <div>
      <div className=" relative  h-[450px] mt-12">
        <div className=" relative group ">
          <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <img
            className=" h-[370px] w-full"
            src={gadget.image}
            alt="A girl Posing Img"
          />
          <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
            <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full hover:bg-green-600 hover:text-white">
              Add to bag
            </button>
            <button
              onClick={() => handleDetails(gadget._id)}
              className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:bg-orange-400  hover:border-0"
            >
              Quick View
            </button>
          </div>
        </div>
        <p className=" px-3 font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
          {gadget.productname}
        </p>
        <p className=" px-3 font-semibold text-xl leading-5 text-gray-800 mt-4">
          $ {gadget.price}
        </p>
        <p className="mt-2  px-3 font-normal text-base  text-gray-600 ">
          2 colours
        </p>
      </div>
    </div>
  );
};

export default SingleGadget;
