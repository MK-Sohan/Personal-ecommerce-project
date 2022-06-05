import { faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SingleManageProduct = ({ product, refetch, setDeleteproducts }) => {
  return (
    <div class="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[450px] h-[270px]" src={product.image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{product.productname}</h2>
        <p>$ {product.price}</p>
        <p> {product.description}</p>
        <div class="card-actions justify-end">
          <label
            onClick={() => setDeleteproducts(product)}
            for="product-dalete-modal"
            class="btn btn-error text-white"
          >
            <FontAwesomeIcon className="mr-2" icon={faTrash}></FontAwesomeIcon>{" "}
            Delete
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleManageProduct;
