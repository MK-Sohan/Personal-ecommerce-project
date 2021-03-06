import { faTrash, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const DeleteProductmodal = ({ deleteproduct, refetch }) => {
  const handleDeleteproduct = (id) => {
    fetch(`https://frozen-taiga-15313.herokuapp.com/deleteproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.error("Product deleted");
      });
  };

  return (
    <div>
      <input type="checkbox" id="product-dalete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <FontAwesomeIcon
            className="h-16 text-red-700 ml-48 py-5 "
            icon={faWarning}
          ></FontAwesomeIcon>
          <h3 class="font-bold  text-xl text-red-700 text-center">
            Are You Shure You Want to Delete this item?
          </h3>
          <div class="modal-action">
            <label for="product-dalete-modal" class="btn btn-success">
              Cancel
            </label>
            <label
              onClick={() => handleDeleteproduct(deleteproduct._id)}
              for="product-dalete-modal"
              class="btn btn-error text-white"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTrash}
              ></FontAwesomeIcon>{" "}
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductmodal;
