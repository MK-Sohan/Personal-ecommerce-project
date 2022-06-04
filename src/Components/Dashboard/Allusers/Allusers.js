import { deleteUser } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
import DeleteuserModal from "./DaleteUserModal/DeleteuserModal";
import SingleUsers from "./SingleUsers";

const Allusers = () => {
  const [deleteuser, setDeleteuser] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/alluser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className=" w-4/4 lg:w-3/4">
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make admin</th>
              <th>Remove user</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users?.map((user) => (
              <SingleUsers
                key={user._id}
                setDeleteuser={setDeleteuser}
                index
                user={user}
                refetch={refetch}
              ></SingleUsers>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteuserModal
        deleteuser={deleteuser}
        refetch={refetch}
      ></DeleteuserModal>
    </div>
  );
};

export default Allusers;
