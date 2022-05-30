import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle " />
      <div class="  drawer-content flex flex-col items-center pagecontainer  ">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl text-center mb-16 mt-10 font-bold text-black">
          Welcome to Dashboard a;djfdalskjfl
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay "></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-slate-500 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <>
            <li className="text-white ">
              <a to="/dashboard">My Orders</a>
            </li>
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
