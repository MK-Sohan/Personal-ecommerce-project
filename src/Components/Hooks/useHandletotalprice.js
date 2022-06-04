import React, { useState } from "react";

const useHandletotalprice = () => {
  const [tcarts, setCarts] = useState([]);

  function totalprice(product) {
    const newcart = [...tcarts, product];
    setCarts(newcart);
  }
  let totalprices = 0;
  for (const cartprice of tcarts) {
    totalprices = totalprices + cartprice.price;
  }
  return { totalprice, totalprices, tcarts };
};

export default useHandletotalprice;
