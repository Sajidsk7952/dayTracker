import React, { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
// import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BsMeta } from "react-icons/bs";
import authService from "../../firebase/authService";
import { FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice";
const SocialAuth = () => {
  const dispatch = useDispatch();
    const googleAuthHandler=async()=>{
        const result = await authService.googleAuthHandler();
        console.log(result);
        if (result) {
          dispatch(login({...result}));
        }
    }
    const metaAuthHandler = async()=>{
      const result = await authService.facebookAuthHandler();
      console.log(result);
      if (result) {
        dispatch(login({...result}));
      }
    }
    // const twitterAuthHandler = ()=>{}
  return (
    <Fragment>
      <div className="">
        <button className="flex justify-center items-center border-2 border-black px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full rounded-xl" onClick={googleAuthHandler}>
          <FcGoogle className="mr-3" />
          Continue with Google
        </button>
        <button className="flex justify-center items-center border-2 border-black  px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full rounded-xl" onClick={metaAuthHandler}>
          <BsMeta className="mr-3" />
          continue with meta
        </button>
        {/* <button className="flex justify-center items-center border-2 border-black  px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full" onClick={twitterAuthHandler}>
          <FaTwitter className="mr-3" />
          sign In using Twitter
        </button> */}
      </div>
    </Fragment>
  );
};

export default SocialAuth;
