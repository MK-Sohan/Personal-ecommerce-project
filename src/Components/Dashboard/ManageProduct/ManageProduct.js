import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
import DeleteProductmodal from "./DeleteProductmodal";
import SingleManageProduct from "./SingleManageProduct";

const ManageProduct = () => {
  //   const [products, setProducts] = useState([]);

  const [sesrch, setSesrch] = useState("");
  const [deleteproduct, setDeleteproducts] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("manage", () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(products);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto ">
        <div className="flex justify-center mt-10">
          <input
            onChange={(e) => setSesrch(e.target.value)}
            type="text"
            placeholder="Search "
            class="input input-bordered  input-info w-full max-w-xs"
          />
        </div>
        <div className=" py-6 lg:px-20 md:px-6 px-4">
          <div className=" flex justify-between items-center"></div>
          <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {products
              .filter((product) =>
                product.productname.toLowerCase().includes(sesrch)
              )
              .map((product) => (
                <SingleManageProduct
                  key={product._id}
                  product={product}
                  refetch={refetch}
                  setDeleteproducts={setDeleteproducts}
                ></SingleManageProduct>
              ))}
          </div>
          {/* key={product._id}
                  product={product}
                  refetch={refetch} */}
          {/* <div className=" flex justify-center items-center">
            <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
              Load More
            </button>
          </div> */}
        </div>
      </div>
      <DeleteProductmodal
        refetch={refetch}
        deleteproduct={deleteproduct}
      ></DeleteProductmodal>
    </div>
  );
};

export default ManageProduct;
