import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import dev from "../EventsImg/dev.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { motion } from "framer-motion";
import spocc22 from "../EventsImg/spocc22.jpg";
import spocc23 from "../EventsImg/spocc23.jpg";
import graphiconp from "../EventsImg/graphiconp.jpg";
import hackerrank from "../EventsImg/hackerrank.svg";
import hackerp from "../EventsImg/hackerp.jpg";
import nimbusp from "../EventsImg/nimbusp.jpg";

import { Link } from "react-router-dom";
import nimbuss from "../EventsImg2/nimbuss.svg";
import cloud1s from "../EventsImg2/cloud1s.svg";
import devs1 from "../EventsImg2/devs1.svg";
import graphs1 from "../EventsImg2/graphs1.svg";
import reacts from "../EventsImg2/reacts.svg";
import techs from "../EventsImg2/techs.svg";
import { Data } from "@/data/Data";

export const Events = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="flex justify-center items-center flex-col">
      <EventCarousel />
      <EventImages />
    </div>
  );
};

const EventCarousel = () => {
  return (
    <div className="sm:h-[80vh] relative   sm:mb-20 mb-3 h-[60vh]  w-screen m-auto  flex justify-center  text-center">
      <div className="container mx-auto h-[47rem]    sm:w-[90vw] w-[350px]  sm:h-[40rem] p-[2rem] ">
        <motion.h1
          initial={{ y: -50, backdropFilter: "brightness(70%)", opacity: 0 }}
          whileInView={{ y: 0, backdropFilter: "brightness(100%)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
          className="text-white text-center text-2xl sm:text-5xl mb-20 md:text-6xl font-rubik  font-bold"
        >
          Events
        </motion.h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          // pagination={{
          //   el: ".swiper-pagination",
          //   clickable: true,
          // }}
          navigation={{
            nextEl: ".forward",
            prevEl: ".backward",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            stopOnHover: true,
          }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper relative lg:w-[90%]   xl:w-[100%] mb-10   p-5 h-[30%] sm:h-[80%]"
        >
          <SwiperSlide>
            <img
              src={dev}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={spocc22}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={hackerp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={nimbusp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={spocc23}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={graphiconp}
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              alt="devimg4"
            />
          </SwiperSlide>

           <div className="absolute  bottom-52  left-0 right-0 flex justify-between   px-4 z-50 ">
            <div className="backward text-white text-3xl z-50 transform rotate-180 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
            <div className="forward text-white text-3xl z-50 cursor-pointer">
              <IoMdArrowRoundForward />
            </div>
          </div> 
          {/* <div className="swiper-pagination w-[15rem] mx-auto mt-10 z-50"></div> */}
        </Swiper>
      </div>
    </div>
  );
};

const EventImages = () => {
  return (
    // <div className="text-white text-4xl flex flex-wrap justify-center gap-4  md:mt-12 items-center max-w-[90vw] h-auto">
    //   <motion.div initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 3, type: "spring" }}
    //     className="flex relative justify-center items-center">

    //       <Link to="/Devclash">
    //     <img src={devs1} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
    //     </Link>
    //   </motion.div>
    //   <motion.div initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 3, type: "spring" }}
    //     className="flex relative justify-center items-center">
    //        <Link to="/ECloud">
    //     <img src={cloud1s} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
    //     </Link>
    //   </motion.div>
    //   <motion.div initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 3, type: "spring" }}
    //     className="flex relative justify-center items-center">
    //       <Link to="/Ereacticons">
    //     <img src={reacts} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
    //     </Link>
    //   </motion.div>
    //   <motion.div initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 3, type: "spring" }}
    //     className="flex relative justify-center items-center">
    //        <Link to="/Nimbus">
    //     <img src={nimbuss} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
    //     </Link>
    //   </motion.div>
    //   <motion.div initial={{ scale: 0 }}
    //     whileInView={{ scale: 1 }}
    //     transition={{ duration: 3, type: "spring" }}
    //     className="flex relative justify-center items-center">
    //        <Link to="/Techbuzz">
    //     <img src={techs} className="sm:w-[35vw] w-[70vw] cursor-pointer sm:m-8 m-4 animate-bounce" alt="" />
    //     </Link>
    //   </motion.div>
    // </div>
    // <div className="cards">
    //   <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
    //     {/* Top Section - Image and Text */}
    //     <div className="p-4">
    //       <img
    //         src="https://via.placeholder.com/300"
    //         alt="Card Image"
    //         className="w-full h-48 object-cover rounded-xl mb-4"
    //       />
    //       <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
    //       <p className="mt-2 text-gray-600 text-sm">
    //         This is a short description or content that goes inside the card.
    //         You can update this with real info.
    //       </p>
    //     </div>

    //     {/* Bottom Section - Optional (e.g., links, buttons) */}
    //     <div className="px-4 pb-4">
    //       <button className="mt-4 w-full bg-[#6E45AC] text-white py-2 rounded-lg hover:bg-[#573b95] transition duration-200">
    //         Learn More
    //       </button>
    //     </div>
    //   </div>
    // </div>
//      <div className="parent mt-28 flex flex-wrap  justify-center gap-36 max-w-[90vw] m-auto pb-10 items-center">

//       {Data.map((item , index) => (

//   <Link to={item.link}>
//     <div key={index} className="w-[384px] relative h-[480px] bg-[#1a1a1a] border border-[#2e2e2e] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//   {/* Top Highlighted Section */}
//   <div className="h-48 w-full flex items-center justify-center bg-gradient-to-r from-[#6E45AC] to-[#66E0CE] text-white text-3xl font-extrabold tracking-wide relative">
//     <span className="backdrop-blur-sm bg-white/10 px-6 py-2 rounded-xl shadow-md">
//       {/* 🚀 Highlighted Title */}
//       {item.name}
//     </span>
//   </div>

//   {/* Content */}
//   <div className="p-5">
//     <h2 className="text-2xl font-bold text-white mb-2">{item.date}</h2>
//     <p className="text-md text-gray-300">
//       {/* This is a short description. It looks clean and minimal, perfect for dark mode lovers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fugit et soluta aperiam iste est obcaecati quis animi debitis quod. */}
//       {item.content}
//     </p>
//    <div className="btn flex justify-center items-center">
//     <button className="mt-6 w-[200px] flex justify-center items-center bg-gradient-to-r absolute bottom-8 left-0 right-0 from-[#6E45AC] to-[#66E0CE] text-white py-2 rounded-xl hover:brightness-110 transition duration-300">
//       Learn More
//     </button>
//     </div>
//   </div>
// </div>
// </Link>
// ))}


// </div>
<div className="parent mt-28 flex flex-wrap justify-center gap-20 max-w-[90vw] m-auto pb-10 items-center">
  {Data.map((item, index) => (
      <div className="sm:w-[384px] w-[300px] max-[300px]:w-[250px] h-[460px] relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl  hover:shadow-[0_6px_20px_rgba(110,69,172,0.3)] hover:scale-[1.025] transition-all duration-500 group overflow-hidden">

        
        <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-[#6E45AC]/80 to-slate-50/80 backdrop-blur-md relative">
          <span className="text-white text-xl sm:text-3xl font-extrabold px-6 py-2 rounded-xl border border-white/20 shadow-inner bg-white/10 backdrop-blur-lg">
            {item.name}
          </span>
          <div className="absolute inset-0 bg-white/5 rounded-t-2xl z-[-1]" />
        </div>

    
        <div className="p-6">
          <h2 className="text-lg font-semibold text-[#e2e2e2]  tracking-wide mb-2">{item.date}</h2>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            {item.content}
          </p>
        </div>

      
        <Link to={item.link} key={index}>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <button className="bg-[#1f1f1f] border border-[#6E45AC] px-6 py-2 text-white rounded-xl shadow-md hover:bg-[#6E45AC]/90 hover:scale-105 transition-all duration-300 font-medium tracking-wide">
            Learn More
          </button>
        </div>
        </Link>
      </div>
      
  ))}
</div>


  );
};
