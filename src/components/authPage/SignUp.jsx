import React, { useState } from "react";
import { gifs } from "../../assests/gifs";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import authService from "../../firebase/authService";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const { register, handleSubmit, formState, getValues } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    const {signup_email,signup_password,signup_confirmPassword} = data;
    console.log(signup_email,signup_password,signup_confirmPassword);
    const res = await authService.createAccount(signup_email,signup_password);
    // const user = authService.getAccount();
    // console.log(user);
    console.log(res);
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
              id="email" // Corrected typo here
              className="w-full sm:w-[80%] px-4 py-2 border-[2px] border-black"
              placeholder="enter your email"
              defaultValue=" "
              {...register("signup_email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p className="text-red-700 capitalize">
              {formState.errors.signup_email?.message}
            </p>
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="password" className="mb-2 text-[20px] capitalize">
              Password:{" "}
            </label>
            <div className="border-[2px] border-black w-full sm:w-[80%] flex justify-between">
              <input
                type={passwordType}
                name="password"
                id="password"
                className="w-[90%] px-4 py-2 outline-none border-none"
                placeholder="enter your password"
                defaultValue=""
                {...register("signup_password", {
                  required: {
                    value: true,
                    message: "Please enter a password",
                  },
                })}
              />
              <button
                className="w-[4%] pr-10"
                onClick={() => {
                  setPasswordType(passwordType === "password" ? "text" : "password");
                }}
              >
                {passwordType === "password" ? (
                  <IoEyeOutline className="text-[25px]" />
                ) : (
                  <IoEyeOffOutline className="text-[25px]" />
                )}
              </button>
            </div>
            <p className="text-red-700">{formState.errors.signup_password?.message}</p>
          </div>
          <div className="flex flex-col my-6">
            <label htmlFor="confirmPassword" className="mb-2 text-[20px] capitalize">
              Confirm Password:{" "}
            </label>
            <div className="border-[2px] border-black w-full sm:w-[80%] flex justify-between">
              <input
                type={confirmPasswordType}
                name="confirmPassword"
                id="confirmPassword"
                className="w-[90%] px-4 py-2 outline-none border-none"
                placeholder="confirm your password"
                defaultValue=""
                {...register("signup_confirmPassword", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  validate: (value) =>
                    value === getValues("signup_password") || "Passwords do not match",
                })}
              />
              <button
                className="w-[4%] pr-10"
                onClick={() => {
                  setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
                }}
              >
                {confirmPasswordType === "password" ? (
                  <IoEyeOutline className="text-[25px]" />
                ) : (
                  <IoEyeOffOutline className="text-[25px]" />
                )}
              </button>
            </div>
            <p className="text-red-700 capitalize">
              {formState.errors.signup_confirmPassword?.message}
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
