import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleCarts from "./SingleCarts";

const Carts = () => {
  const [show, setShow] = useState(false);
  const [carts, setCsrts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCsrts(data));
  }, []);

  return (
    <>
      {carts?.map((cart) => (
        <SingleCarts key={cart._id} cart={cart}></SingleCarts>
      ))}
    </>
  );
};

export default Carts;
