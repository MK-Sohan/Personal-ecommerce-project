import React from "react";
import { useForm } from "react-hook-form";

const Addproduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data.name);
    reset();
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
            Add Product
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product Name
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product Price
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product Image
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product description
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-green-600 py-4 w-full font-bold text-xl"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
