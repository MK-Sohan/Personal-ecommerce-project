import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const SingleCarts = ({ cart, refetch, setOrderdelete }) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <tr>
        <td>
          <div class="flex items-center space-x-3 ">
            <div class="avatar">
              <div class="w-44 rounded">
                <img src={cart.image} alt="Avatar " />
              </div>
            </div>
          </div>
        </td>
        <td>
          {cart.name}
          <br />
        </td>
        <td> {cart.quantity}</td>
        {/* <td>
          {" "}
          <div className="flex flex-row justify-between">
           

            <div className="flex">
              <span
                onClick={minusCount}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
              >
                -
              </span>
              <input
                id="counter"
                aria-label="input"
                className="border border-gray-300 h-full text-center w-14 pb-1"
                type="text"
                value={count}
                onChange={(e) => e.target.value}
              />
              <span
                onClick={addCount}
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
              >
                +
              </span>
            </div>
          </div>
        </td> */}

        <td>$ {cart.price}</td>

        <th>
          <button class="btn bg-emerald-600 border-0 btn-xs">
            {" "}
            <FontAwesomeIcon
              icon={faGratipay}
              className="mr-1"
            ></FontAwesomeIcon>{" "}
            Pay
          </button>
        </th>
        <th>
          <label
            onClick={() => setOrderdelete(cart)}
            for="order-delete-modal"
            class="btn btn-error btn-xs"
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              className="mr-2 text-white"
            ></FontAwesomeIcon>
            Remove
          </label>
        </th>
      </tr>
    </>
  );
};

export default SingleCarts;
