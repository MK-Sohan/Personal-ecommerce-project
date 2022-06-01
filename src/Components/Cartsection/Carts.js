import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Share/Loading";
import OrderDeleteModal from "./OrderDeleteModal";
import SingleCarts from "./SingleCarts";

const Carts = () => {
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const [orderdelete, setOrderdelete] = useState(null);

  const {
    data: carts,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch(`http://localhost:5000/carts/${user.email}`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="overflow-x-auto mt-5 lg:w-3/4  h-screen mx-auto mb-20">
        <table class="table w-full ">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>

              <th>Quantity</th>
              <th>Price</th>
              {/* <th>Add to Favorite</th> */}
              <th>Pay</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {carts?.map((cart) => (
              <SingleCarts
                key={cart._id}
                cart={cart}
                refetch={refetch}
                setOrderdelete={setOrderdelete}
              ></SingleCarts>
            ))}
          </tbody>
        </table>

        <OrderDeleteModal
          refetch={refetch}
          orderdelete={orderdelete}
        ></OrderDeleteModal>
      </div>
      <div className="ml-64 mb-9 ">
        <h1 className="text-4xl font-bold">Cart Total : </h1>
      </div>
    </div>
  );
};

export default Carts;
