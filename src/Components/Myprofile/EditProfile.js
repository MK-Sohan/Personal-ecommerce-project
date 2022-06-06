import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const EditProfile = () => {
  const [sidebar, setsidebar] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const email = user?.email;
    console.log(email);
    console.log(data.city, data.phone);
    const info = {
      qualification: data.qualification,
      city: data.city,
      phone: data.phone,
      email: email,
    };
    fetch(`https://frozen-taiga-15313.herokuapp.com/profile/${email}`, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        toast("Your Profile Updted");
        navigate("/dashboard");
      });
  };
  return (
    <div className="h-full  w-full  px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
          >
            Update your Profile
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Educational Qralification
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("qualification", {
                  required: {
                    value: true,
                    message: "Qualification is Required",
                  },
                })}
              />
              <label className="label">
                {errors.qualification?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.qualification.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                City/District
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("city", {
                  required: {
                    value: true,
                    message: "City is Required",
                  },
                })}
              />
              <label className="label">
                {errors.city?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.city.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Phone
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="number"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone is Required",
                  },
                })}
              />
              <label className="label">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
