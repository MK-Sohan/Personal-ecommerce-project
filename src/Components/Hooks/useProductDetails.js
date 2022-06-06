import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const { productid } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`https://frozen-taiga-15313.herokuapp.com/productdetail/${productid}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [productid]);

  return [detail, setDetail];
};

export default useProductDetails;
