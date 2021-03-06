import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast } from "react-toastify";

const DeleteuserModal = ({ refetch, deleteuser }) => {
  const handleDeleteuser = (email) => {
    fetch(`https://frozen-taiga-15313.herokuapp.com/userdelete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.error("User Removed");
        console.log(data);
      });
  };

  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="user-delete-modal" class="modal-toggle" />
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
            <label for="user-delete-modal" class="btn">
              cancle
            </label>
            <label
              onClick={() => handleDeleteuser(deleteuser?.email)}
              for="user-delete-modal"
              class="btn  btn-error text-gray-700"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteuserModal;
