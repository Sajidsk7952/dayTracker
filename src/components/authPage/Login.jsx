import React, { useState } from "react";
import { gifs } from "../../assests/gifs";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import {login,logout} from '../../store/AuthSlice';
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const authData = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [type, setType] = useState("password");
  const { handleSubmit, register } = useForm();
  const submitHandler = (data) => {
    console.log(data);
    dispatch(login(data));
    console.log(authData);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-evenly w-full fixed top-0">
      <div className="flex-1">
        <img src={gifs.login} alt="login gif" />
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
              defaultValue=""
              {...register("login_email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "please enter valid email",
                },
              })}
            />
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
                {...register("login_password",{
                  required: {
                    value: true,
                    message: "please enter an valid password"
                  }
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
          </div>
          <div className="w-[80%]">
            <button className="text-center px-6 py-3 bg-orange-500 hover:bg-orange-700 text-white text-[20px] rounded-lg auth_but">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
