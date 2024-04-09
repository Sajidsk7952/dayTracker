import React, { useState } from "react";
import { gifs } from "../../assests/gifs";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const [type, setType] = useState("password");
  const { register, handleSubmit, formState, getValues } = useForm();
  const submitHandler = (data) => {

    console.log(data);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <div className="flex-1">
        <img src={gifs.signUp} alt="login gif" />
      </div>
      <div className="flex-1 sm:mt-10 mx-10 sm:mx-4">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col my-6">
            <label htmlFor="email" className="mb-2 text-[20px] capitalize">
              Email:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="emial"
              className="w-full sm:w-[80%] px-4 py-2 border-[2px] border-black"
              placeholder="enter your email"
              defaultValue=" "
              {...register("signup_email", {
                required: {
                  value: true,
                  message: "email is required",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "please enter valid email",
                },
              })}
            />
            <p className="text-red-700 capitalize">
              {formState.errors.email?.message}
            </p>
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="password" className="mb-2 text-[20px] capitalize">
              Password:{" "}
            </label>
            <div className="border-[2px] border-black w-full sm:w-[80%] flex justify-between">
              <input
                type={type}
                name="password"
                id="password"
                className="w-[90%] px-4 py-2 outline-none border-none"
                placeholder="enter your password"
                defaultValue=""
                {...register("signup_password", {
                  required: {
                    value: true,
                    message: "Please enter Password",
                  },
                })}
              />
              <button
                className="w-[4%] pr-10"
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
              >
                {type === "password" ? (
                  <IoEyeOutline className="text-[25px]" />
                ) : (
                  <IoEyeOffOutline className="text-[25px]" />
                )}
              </button>
            </div>
            <p className="text-red-700">{formState.errors.password?.message}</p>
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="confirmPassword" className="mb-2 text-[20px] capitalize">
              Confirm Password:{" "}
            </label>
            <div className="border-[2px] border-black w-full sm:w-[80%] flex justify-between">
              <input
                type={type}
                name="confirmPassword"
                id="confirmPassword"
                className="w-[90%] px-4 py-2 outline-none border-none"
                placeholder="confirm your password"
                defaultValue=""
                {...register("signup_confirmPassword", {
                  required: {
                    value: true,
                    message: "this is an required Field",
                  },
                  validate: (value) =>
                    value === getValues("password") || "passwords do not match",
                })}
              />
              <button
                className="w-[4%] pr-10"
                onClick={() => {
                  if (type === "password") {
                    setType("text");
                  } else {
                    setType("password");
                  }
                }}
              >
                {type === "password" ? (
                  <IoEyeOutline className="text-[25px]" />
                ) : (
                  <IoEyeOffOutline className="text-[25px]" />
                )}
              </button>
            </div>
            <p className="text-red-700 capitalize">
              {formState.errors.confirmPassword?.message}
            </p>
          </div>
          <div className="w-[80%]">
            <button
              type="submit"
              className="text-center px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white text-[20px] rounded-lg auth_but"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
