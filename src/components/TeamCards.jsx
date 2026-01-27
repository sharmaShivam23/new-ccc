import React, { act, useState,useCallback } from "react";
import shivamsharma from "../3yearImg/shivamsharma.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6"
import ShimmerButton from "./ui/shimmer-button";
import cardbg1 from "../images/cardbg1.svg";
import card2bg from "../images/card2bg.svg";
import card3bg from "../images/card3bg.svg"
import Loading from "./Loading";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { obj4 } from "@/data/4thyear";
// import { obj2 } from "@/data/2ndyear";
import {obj3} from "@/data/3rdyear";
import { obj5 } from "@/data/Alumni2";
import { obj2 } from "@/data/2ndyear";  

export const TeamCards = () => {
  const [activeYear, setActiveYear] = useState("four");
  const [data , setdata] = useState("")
  const [data2 , setdata2] = useState("")
  const [data3 , setdata3] = useState("")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const handleYearSelect = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="max-w-[90vw] m-auto z-50">
      <motion.h1
        initial={{ y: -50, backdropFilter: "brightness(70%)", opacity: 0 }}
        whileInView={{ y: 0, backdropFilter: "brightness(100%)", opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-white text-center text-2xl  sm:text-3xl md:text-5xl font-poppins  font-bold mb-6 mt-6"
      >
        OUR TEAM MEMBERS
      </motion.h1>
      <Buttons activeYear={activeYear} onSelectYear={handleYearSelect} />
      {activeYear === "Alumni" && <Alumni  setdata={setdata}  data={data} />}
      {activeYear === "four" && <FouthYear  setdata={setdata}  data={data} />}
      {activeYear === "three" && <ThirdYear  setdata2={setdata2} data2={data2}/>}
      {activeYear === "two" && <SecondYear setdata3={setdata3} data3={data3} activeYear={activeYear} />}
    </div>
  );
};

const Buttons = ({ onSelectYear, activeYear }) => {
  return (
    <div className="flex justify-evenly font-jetbrains z-50">
      <div className="max-w-[90vw] sm:mt-10 mt-5 text-xs sm:text-lg m-auto block sm:flex justify-evenly mb-6">
        <ShimmerButton
          shimmerColor={"#FFC080"}
          className={` sm:mt-0 ${
            activeYear === "Alumni"
              ? "scale-110 text-amber-500 font-extrabold"
              : ""
          }  mr-0 mb-5 sm:mb-0 sm:mr-16  transition-all ease-in-out duration-300`}
          onClick={() => onSelectYear("Alumni")}
        >
          Alumni
        </ShimmerButton>
        <ShimmerButton
          shimmerColor={"#6E45AC"}
          className={` sm:mt-0 ${
            activeYear === "four"
              ? "scale-110  text-[#6E45AC] font-extrabold"
              : ""
          }  mr-0 sm:mr-16 transition-all ease-in-out duration-300`}
          onClick={() => onSelectYear("four")}
        >
          4th Year
        </ShimmerButton>
        <ShimmerButton
          shimmerColor={"#66E0CE"}
          className={`mt-5 sm:mt-0  mr-0 sm:mr-16" ${
            activeYear === "three"
              ? "scale-110 text-[#66E0CE] font-extrabold"
              : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("three")}
        >
          3rd Year
        </ShimmerButton>
        <ShimmerButton
          shimmerColor={"#FFC080"}
          className={`mt-5 sm:mt-0  ${
            activeYear === "two"
              ? "scale-110 text-amber-500 font-extrabold"
              : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("two")}
        >
          2nd Year
        </ShimmerButton>
      </div>
    </div>
  );
};

const FouthYear = ({setdata,data}) => {


  return (
    <div className="h-auto sm:max-w-[90vw] z-50 w-full flex justify-center flex-col  items-center py-8">
        <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-[#6E45AC]">
          (Batch 2022-2026)
        </h1>


       
        <div className="flex justify-center items-center flex-wrap gap-7">
           {obj4.length === 0 ? (
            <p className="font-[550] text-white text-2xl ">No data found</p>
           ) : (
          obj4.map((details, index) => (
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[320px] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-[#6E45AC] bg-white rounded-2xl group">
              <div className="w-full img h-full  flex justify-center items-center flex-col   transition-all ">
                <img
                  src={details.profile}
                  alt={details.name}
                  className="h-[13rem] w-[13rem] object-cover scale-90 rounded-full border-2 border-[#6E45AC] shadow-2xl shadow-[#6E45AC]"
                />
                <div className="mt-6 text-center">
                  <p className="text-xl text-black">{details.domain}</p>
                  <p className="text-2xl font-bold text-black">
                    {details.name}
                  </p>
                  <img
                    src={card2bg}
                    className="w-full absolute bottom-0 left-0"
                    alt=""
                  />
                </div>
              </div>

              <div className="absolute content top-0 left-0 w-full h-full border-[#6E45AC] bg-[#6E45AC]  flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                <div className="tags text-5xl p-3  flex gap-3 text-black">
                  <a href={details.linkedin}>
                    <FaLinkedin />
                  </a>
                  <a href={details.github}>
                    <FaSquareGithub />
                  </a>
                  <a href={details.instagram}>
                    <FaSquareInstagram />
                  </a>
                </div>
                <p className="mb-4 text-black font-mono p-5 text-center">
                  {details.about}
                </p>
              </div>
            </div>
          </motion.div>
          ))
        )}
        </div>
    
    </div>
  );
};



const ThirdYear = ({data2,setdata2}) => {
  
  const [loading, setLoading] = useState(true);

  

  return (
    <>
      <ToastContainer />
      <div className="h-auto sm:max-w-[90vw] w-full z-50 flex justify-center flex-col   items-center py-8">
       
          <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-[#66E0CE]">
            (Batch 2023-2027)
          </h1>
       
          <div className="flex justify-center items-center flex-wrap gap-7">
             {obj3.length === 0 ? (
            <p className="font-[550] text-white text-2xl ">No data found</p>
           ) : (
          obj3.map((details, index) => (
            // {obj3.map((details, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                key={index}
                className="flex justify-center items-center"
              >
                <div className="relative w-[320px] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-[#66E0CE] bg-white rounded-2xl group">
                  <div className="w-full img h-full  flex justify-center items-center flex-col   transition-all ">
                    <img
                      src={details.profile}
                      alt={details.name}
                      className="h-[13rem] w-[13rem] object-cover scale-90 rounded-full border-2 border-[#66E0CE] shadow-2xl shadow-[#66E0CE]"
                    />
                    <div className="mt-6 text-center">
                      <p className="text-xl text-black">{details.domain}</p>
                      <p className="text-2xl font-bold text-black">
                        {details.name}
                      </p>
                      <img
                        src={card3bg}
                        className="w-full absolute bottom-0 left-0"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="absolute content top-0 left-0 w-full h-full border-[#66E0CE] bg-[#66E0CE]  flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                    <div className="tags text-5xl p-3  flex gap-3 text-black">
                      <a href={details.linkedin}>
                        <FaLinkedin />
                      </a>
                      <a href={details.github}>
                        <FaSquareGithub />
                      </a>
                      <a href={details.instagram}>
                        <FaSquareInstagram />
                      </a>
                    </div>
                    <p className="mb-4 text-black font-mono p-5 text-center">
                      {details.about}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
          </div>
        
      </div>
    </>
  );
};


const SecondYear = ({ activeYear , data3,setdata3 }) => {
  const [loading, setLoading] = useState(true);

  

    
    return (
    <>
      <ToastContainer />
      <div className="h-auto sm:max-w-[90vw] w-full z-50 flex justify-center flex-col  items-center py-8">
         
          <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-amber-500">
            (Batch 2021-2025)
          </h1>

        <p className="font-bold text-2xl text-white">{data3}</p>

       
          <div className="flex justify-center items-center flex-wrap gap-7">
             {obj5.length === 0 ? (
            <p className="font-[550] text-white text-2xl ">No data found</p>
           ) : (
          obj2.map((details, index) => (
              <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative w-[320px] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-amber-500 bg-white rounded-2xl group">
                <div className="w-full img h-full  flex justify-center items-center flex-col   transition-all ">
                  <img
                    src={details.profile}
                    alt={details.name}
                    className="h-[13rem] w-[13rem] object-cover scale-90 rounded-full border-2 border-amber-500 shadow-2xl shadow-amber-500"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-xl text-black">{details.domain}</p>
                    <p className="text-2xl font-bold text-black">
                      {details.name}
                    </p>
                    <img
                      src={cardbg1}
                      className="w-full absolute bottom-0 left-0 object-center"
                      alt=""
                    />
                  </div>
                </div>
  
                <div className="absolute content top-0 left-0 w-full h-full border-amber-500 bg-amber-500  flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                  <div className="tags text-5xl p-3  flex gap-3 text-black">
                    <a href={details.linkedin}>
                      <FaLinkedin />
                    </a>
                    <a href={details.github}>
                      <FaSquareGithub />
                    </a>
                    <a href={details.instagram}>
                      <FaSquareInstagram />
                    </a>
                  </div>
                  <p className="mb-4 text-black font-mono p-5 text-center">
                    {details.about}
                  </p>
                </div>
              </div>
            </motion.div>
            ))
          )}
          </div> 

        
        
      </div>
    </>
  );
};


const Alumni = ({ activeYear , data3,setdata3 }) => {
  const [loading, setLoading] = useState(true);

    
  return (
    <>
      <ToastContainer />
      <div className="h-auto sm:max-w-[90vw] w-full z-50 flex justify-center flex-col  items-center py-8">
         
          <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-amber-500">
            (Batch 2021-2025)
          </h1>

        <p className="font-bold text-2xl text-white">{data3}</p>

       
          <div className="flex justify-center items-center flex-wrap gap-7">
             {obj5.length === 0 ? (
            <p className="font-[550] text-white text-2xl ">No data found</p>
           ) : (
          obj5.map((details, index) => (
              <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative w-[320px] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-amber-500 bg-white rounded-2xl group">
                <div className="w-full img h-full  flex justify-center items-center flex-col   transition-all ">
                  <img
                    src={details.profile}
                    alt={details.name}
                    className="h-[13rem] w-[13rem] object-cover scale-90 rounded-full border-2 border-amber-500 shadow-2xl shadow-amber-500"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-xl text-black">{details.domain}</p>
                    <p className="text-2xl font-bold text-black">
                      {details.name}
                    </p>
                    <img
                      src={cardbg1}
                      className="w-full absolute bottom-0 left-0"
                      alt=""
                    />
                  </div>
                </div>
  
                <div className="absolute content top-0 left-0 w-full h-full border-amber-500 bg-amber-500  flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                  <div className="tags text-5xl p-3  flex gap-3 text-black">
                    <a href={details.linkedin}>
                      <FaLinkedin />
                    </a>
                    <a href={details.github}>
                      <FaSquareGithub />
                    </a>
                    <a href={details.instagram}>
                      <FaSquareInstagram />
                    </a>
                  </div>
                  <p className="mb-4 text-black font-mono p-5 text-center">
                    {details.about}
                  </p>
                </div>
              </div>
            </motion.div>
            ))
          )}
          </div> 

        
        
      </div>
    </>
  );
};
