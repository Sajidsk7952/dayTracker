import React from "react";
import { assests } from "../../assests";
import { useNavigate } from "react-router-dom";
// import app from "../../firebase/firebaseConfig";
const Hero = () => {
  // console.log(app);
  // console.log(authService.auth);
  const navigate = useNavigate();
  return (
    <div className="px-6 py-4 flex justify-evenly items-center  sm:flex-row flex-col">
      <div className="flex-1">
        <div className="py-6">
          <h1 className="font-bold tracking-wide text-[30px] capitalize ">
            Seize the Day with Day Tracker,
          </h1>
          <h1 className="font-bold tracking-wider text-[30px] capitalize bg-gradient-to-r from-amber-500 via-orange-600 to-pink-500 bg-clip-text text-transparent">
            The Ultimate Task Management App
          </h1>
        </div>
        <p className="w-[80%] text-[18px]">
          Ready to supercharge your productivity and conquer your day? Join now
          and take control of your tasks like never before. Say goodbye to
          forgotten details. <span className="hidden md:inline">With our user-friendly interface, powerful
          features, and seamless organization, you'll be unstoppable. Embrace
          efficiency and join our app today to unlock your full potential and
          achieve your goals with ease.</span> Let's make every day a successful one
          together!
        </p>
        <div className="mb-10 sm:mb-4">
            <button className="bg-gradient-to-r from-amber-500 to-pink-500 text-white text-[18px] glow rounded-lg px-6 py-4 mt-10 capitalize hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 duration-200" onClick={()=>{navigate('/auth')}}>Join Now for free</button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-600 px-1 py-1 cursor-pointer duration-75">
        <img src={assests.background} alt="background" className="rounded-xl object-contain"/>
      </div>
    </div>
  );
};

export default Hero;
