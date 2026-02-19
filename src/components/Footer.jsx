import React from "react";
import Meteors from "./ui/meteors";
import Orbit2 from "./ui/Orbit2";
import ShimmerButton from "./ui/shimmer-button";
import CCC from "../images/CCC.png";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sm:h-screen h-[120vh] w-screen bg-black overflow-hidden relative">
      <Meteors />
      <Orbit2 className=""></Orbit2>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <Meteors />
        <p className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-rubik">
          Be part of the future of
        </p>
        <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-rubik">
          Cloud Computing
        </p>
        <p className="text-white mt-4 text-sm md:text-lg font-poppins">
          Empowering students to innovate, collaborate, and lead in the world of
          technology.
          <br /> Let's have a look on the quiz click on start now to start
        </p>
        {/* <a className="z-50" href="https://new-cccc.vercel.app/"> */}
        {/* <Link className="z-50" to="/Register" >
        <div className="text-white z-50 text-xl md:text-xl mt-4 font-bold">
          <ShimmerButton className="cursor-pointer hover:scale-125 font-jetbrains font-bold transition-all ease-in-out duration-1000 delay-0">
            Register Now
          </ShimmerButton>
        </div>
        </Link> */}
        {/* </a> */}
      </div>

      <div className="flex text-xl text-white text-center font-bold absolute bottom-24 left-20 max-[400px]:left-10">
        <img
          src={CCC}
          className="h-10 mr-4 mb-2 hidden sm:block   animate-bounce"
          alt="CCC/image"
        />
        <p className="text-xs mt-3 lg:mt-1 lg:text-lg hidden sm:block font-poppins">
          Cloud Computing Cell
        </p>
      </div>

      <div className="flex text-2xl text-white justify-center  items-center text-center font-bold absolute bottom-28 left-0 right-0">
        <img
          src={CCC}
          className="h-10 mr-4 mb-2 block sm:hidden   animate-bounce"
          alt="CCC/image"
        />
        <p className="text-xl  lg:mt-1 lg:text-lg block sm:hidden font-rubik">
          Cloud Computing Cell
        </p>
      </div>

      <div className="border-[1px] border-gray-800 w-full absolute bottom-20"></div>

      <div className="icons text-white z-40 sm:text-5xl text-3xl gap-10 mt-2 absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-evenly items-center">
        <a href="https://www.facebook.com/ccc.akgec"><FaFacebook className="hover:scale-125 cursor-pointer z-50 transition-all ease-in-out duration-1000 delay-0" />
        </a>
        <a href="https://www.linkedin.com/company/cloud-computing-cell-akgec/">
        <FaLinkedin className="hover:scale-125 cursor-pointer z-50 transition-all ease-in-out duration-1000 delay-0" />
        </a>
        <a href="https://www.instagram.com/ccc_akgec?igsh=YzljYTk1ODg3Zg==">
        <FaSquareInstagram className="hover:scale-125 cursor-pointer z-50 transition-all ease-in-out duration-1000 delay-0" /></a>
      </div>

      <div className="nav absolute z-50 sm:bottom-24 hidden sm:block  bottom-14 right-14 sm:right-24">
        <ul className="text-white cursor-pointer sm:text-lg lg:text-xl font-poppins text-center text-xs flex justify-evenly items-center gap-4 mb-4 font-bold">
          <li className="relative group mt-10">
            <Link
              to="/"
              className="transition-all  ease-in-out duration-300 text-white"
            >
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group mt-10">
            <Link
              to="/Events"
              className="transition-all ease-in-out duration-300 text-white"
            >
              Events
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group mt-10">
            <Link
              to="/Team"
              className="transition-all ease-in-out duration-300 text-white"
            >
              Team
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group mt-10">
            <Link
              to="/Contact"
              className="transition-all ease-in-out duration-300 text-white"
            >
              Contact
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group mt-10">
            <Link
              to="/Register"
              className="transition-all ease-in-out duration-300 text-white"
            >
              Register
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-white transition-all ease-in-out duration-500 group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      <div className="text-white mt-9  text-center font-albert  sm:mt-4 absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-sm md:text-lg py-4">
        <p>
          Crafted with passion by Team -
          <span className="mx-2 font-extrabold text-violet-800">
            Cloud Computing
          </span>
        </p>
        <p className="font-poppins">cloudcomputing@akgec.ac.in</p>
      </div>
    </div>
  );
};

export default Footer;
