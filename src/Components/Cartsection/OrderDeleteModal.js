import React from "react";
import { faTrashCan, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const OrderDeleteModal = ({ orderdelete, refetch }) => {
  const HandleDelete = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };

  return (
    <div>
      <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <FontAwesomeIcon
            className="h-16 text-red-700 ml-48 py-5 "
            icon={faWarning}
          ></FontAwesomeIcon>
          <h3 class="font-bold text-lg text-2xl text-red-700 text-center">
            Are You Shure You Want to Delete this item?
          </h3>

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
