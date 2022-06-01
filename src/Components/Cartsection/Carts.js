import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleCarts from "./SingleCarts";

const Carts = () => {
  const [show, setShow] = useState(false);
  const [carts, setCsrts] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/carts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCsrts(data));
  }, []);

  return (
    <div class="overflow-x-auto w-full h-screen mb-20">
      <table class="table w-full ">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            {/* <th>Add to Favorite</th> */}
            <th>Pay</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {carts?.map((cart) => (
            <SingleCarts key={cart._id} cart={cart}></SingleCarts>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Carts;
