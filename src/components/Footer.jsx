import React from "react";
// import { logo2 } from "../assets";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="relative top-[80px] bg-gray-100">
      <div className="flex items-start justify-around">
        <div className="m-8">
          {/* <img src={logo2} alt="logo" className="w-[100px] h-[100px]" /> */}
          <h1 className="text-[30px] font-bold text-orange-600">Day Tracker</h1>
          <p className="hidden sm:block text-[20px] font-semibold tracking-wide">
            Track your daily tasks and make a notes and track them tommorow
          </p>
          <p className="hidden sm:block text-[18px] font-normal">
            your suggestions are most valuable to me as a developer
          </p>
        </div>
        <div className="">
          <h1 className="capitalize font-semibold text-[25px] sm:text-[25px]">
            Drop your suggestions at
          </h1>
          <div className="flex  sm:flex-col items-baseline justify-center gap-2 mt-4">
            <a href="https://github.com/Sajidsk7952" target="blank">
              <IoLogoGithub className="inline text-[20px] mr-2" />
              <span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Github
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sajid-hussain-shaik-185554235/"
              target="blank"
            >
              <FaLinkedin className="inline text-[20px] mr-2" />
              <span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Linded In
              </span>
            </a>
            <a href="mailto:sksajidhussain2003@gmail.com" target="blank">
              <IoMail className="inline text-[20px] mr-2" />
              <span className="hidden sm:inline underline text-[16px] sm:text-[18px] text-slate-700">
                Mail me
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-[18px] text-center w-full text-white capitalize">
        made with ❤️ by sajid hussain
      </div>
    </footer>
  );
};

export default Footer;
