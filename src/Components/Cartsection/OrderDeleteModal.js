import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderDeleteModal = ({ orderdelete, refetch }) => {
  const HandleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => refetch());
  };

  return (
    <div>
      <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are You Shure You Want to Delete this item?
          </h3>
          <p class="py-4">
            If you delete this item you will not able to get it back
          </p>
          <div class="modal-action">
            <label for="order-delete-modal" class="btn">
              Cancel
            </label>
            <label
              onClick={() => HandleDelete(orderdelete._id)}
              for="order-delete-modal"
              class="btn btn-error"
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className="mr-2 text-white"
              ></FontAwesomeIcon>{" "}
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
