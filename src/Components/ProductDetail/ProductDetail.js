import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productid } = useParams();

  return (
    <div>
      <h1>this is products detail page{productid}</h1>
    </div>
  );
};

export default ProductDetail;
