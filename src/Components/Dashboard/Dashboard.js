import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faEdit,
  faPersonRifle,
  faUser,
  faUsers,
  faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useAdmin(user);
  console.log(admin);

  return (
    <div class="drawer drawer-mobile bg-gradient-to-tl from-green-400 to-indigo-900   ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle " />

      <div class="  drawer-content flex flex-col items-center pagecontainer  ">
        <div className="mr-[330px] mt-3">
          <label for="my-drawer-2" class=" drawer-button text-black  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-center mb-16 mt-10 font-bold text-white ">
          Welcome to Dashboard{" "}
          <span className="text-red-300">{user?.displayName}</span>
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side shadow-2xl shadow-slate-900">
        <label for="my-drawer-2" class="drawer-overlay "></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content ">
          {/* <!-- Sidebar content here --> */}

          <>
            <li className="text-black hover:bg-green-400 border-2 mt-3 hover:text-white">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> My Profile
              </Link>
            </li>
            {!admin && (
              <li className="text-black hover:bg-green-400 border-2 mt-3 hover:text-white">
                <Link to="/dashboard/review">
                  {" "}
                  <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> My Reviews
                </Link>
              </li>
            )}
            {admin && (
              <>
                <li className="text-black hover:bg-green-400 border-2 mt-3 hover:text-white">
                  {admin && (
                    <Link to="/dashboard/allusers">
                      {" "}
                      <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> All
                      Users
                    </Link>
                  )}
                </li>
                <li className="text-black hover:bg-green-400 border-2  mt-3 hover:text-white ">
                  {admin && (
                    <Link to="/dashboard/addproduct">
                      {" "}
                      <FontAwesomeIcon
                        icon={faProductHunt}
                      ></FontAwesomeIcon>{" "}
                      Add Product
                    </Link>
                  )}
                </li>
                <li className="text-black hover:bg-green-400 border-2  mt-3 hover:text-white ">
                  {admin && (
                    <Link to="/dashboard/manageproduct">
                      {" "}
                      <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Manage
                      Products
                    </Link>
                  )}
                </li>
              </>
            )}
            {/* <li className="text-white">
              <Link to="/dashboard/addreview">Add A Review</Link>
            </li>
            <li className="text-white">
              <Link to="/dashboard/myprofile"> My Profile</Link>
            </li> */}
          </>

          {/* <>
            <li className="text-white">
              <Link to="/dashboard/myprofile">> My Profile</Link>
            </li>
            <li className="text-white">
              <Link to="/dashboard/users">> All Users</Link>
            </li>
            <li className="text-white">
              <Link to="/dashboard/addproduct"> Add Product</Link>
            </li>
            <li className="text-white">
              <Link to="/dashboard/allproduct">Manage Products</Link>
            </li>
            <li className="text-white">
              <Link to="/dashboard/manageorder">Manage Orders</Link>
            </li>
          </> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
