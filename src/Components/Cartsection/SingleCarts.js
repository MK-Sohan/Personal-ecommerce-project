import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faHeart,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
const SingleCarts = ({ cart }) => {
  // console.log(cart);

  return (
    <tr>
      <td>
        <div class="flex items-center space-x-3 ">
          <div class="avatar">
            <div class="mask mask-squircle w-32 h-32">
              <img src={cart.image} alt="Avatar " />
            </div>
          </div>
        </div>
      </td>
      <td>
        {cart.name}
        <br />
        {/* <span class="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span> */}
      </td>
      <td>$ {cart.price}</td>
      {/* <th>
        <button class="btn btn-success btn-xs">
          {" "}
          <FontAwesomeIcon
            icon={faHeart}
            className="mr-1 text-red-700"
          ></FontAwesomeIcon>{" "}
          Favorite
        </button>
      </th> */}
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
        <button class="btn btn-error btn-xs">
          {" "}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="mr-2 text-white"
          ></FontAwesomeIcon>{" "}
          Remove
        </button>
      </th>
    </tr>
  );
};

export default SingleCarts;
