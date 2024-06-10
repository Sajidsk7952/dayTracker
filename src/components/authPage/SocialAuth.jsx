import React, { Fragment } from "react";
import { FcGoogle } from "react-icons/fc";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { BsMeta } from "react-icons/bs";
import authService from "../../firebase/authService";
const SocialAuth = () => {
    const googleAuthHandler=async()=>{
        const result = await authService.googleAuthHandler();
        console.log(result);
    }
    const metaAuthHandler = ()=>{}
    const microsoftAuthHandler = ()=>{}
  return (
    <Fragment>
      <div className="">
        <button className="flex justify-center items-center border-2 border-black px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full" onClick={googleAuthHandler}>
          <FcGoogle className="mr-3" />
          Continue with Google
        </button>
        <button className="flex justify-center items-center border-2 border-black  px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full" onClick={metaAuthHandler}>
          <BsMeta className="mr-3" />
          continue with meta
        </button>
        <button className="flex justify-center items-center border-2 border-black  px-4 py-2 my-2 capitalize w-[50%] sm:w-[80%] ms:w-full" onClick={microsoftAuthHandler}>
          <TfiMicrosoftAlt className="mr-3" />
          sign In using Microsoft
        </button>
      </div>
    </Fragment>
  );
};

export default SocialAuth;
