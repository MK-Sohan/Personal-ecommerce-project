import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductDetails = () => {
  const { productid } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/productdetail/${productid}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [productid]);

  return [detail, setDetail];
};

export default useProductDetails;
