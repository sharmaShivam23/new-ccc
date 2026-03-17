import React from "react";
import { motion } from "framer-motion";
// import cloud from "../images/cloud.svg";
import cloud from "../images/cloud.jpg";
import ShimmerButton from "./ui/shimmer-button";
import { useNavigate } from "react-router-dom";
import cl from "../images/cl.png"
// import cloud1 from "../images/cloud1.mp4"
// import cloud2 from "../images/cloud2.mp4"
// import cloud3 from "../images/cloud3.gif"

const About = () => {
  const navigate = useNavigate();
  const contact = () => {
    navigate("/Contact");
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="h-auto xl:h-screen p-8 w-screen sm:max-w-[80vw] sm:mb-28 lg:mb-3 flex  m-auto flex-col">
        <div className="flex justify-center items-center text-center text-white ">
          <motion.div
            initial={{ y: -50, backdropFilter: "brightness(40%)", opacity: 0 }}
            whileInView={{
              y: 0,
              backdropFilter: "brightness(100%)",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="head text-center relative   w-full flex flex-col justify-center items-center "
          >
            <p className="text-3xl md:text-4xl font-bold mt-6 font-poppins">
              CLOUD COMPUTING CELL
            </p>
            <p className="mt-2 text-xl md:text-2xl font-semibold font-poppins">
              Think
              <span className="ml-3 border-r-2 mr-3 border-white"></span>
              Develop
              <span className="ml-3 mr-3 border-r-2"></span>
              Deploy
            </p>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="lg:flex block justify-center gap-0   sm:gap-20 items-center">
          {/* left */}
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="left lg:w-5/12 m-3 w-full flex justify-center items-center"
            exit={{ x: -100 }}
          >
            {/* <video autoPlay 
        loop src={cloud3} className=""></video> */}

            <img src={cl} alt="" className=" w-[60vw] xl:h-[70vh] mt-3 animate-bounce3  object-cover sm:static" />
            {/* <img src={cloud} alt="" className=" w-full mt-3   object-cover sm:static" /> */}
            {/* <img src={cloud3} alt="" className=" w-full mt-3 xl:h-[60vh] md:h-[50vh] sm:h-[35vh] h-[30vh]  object-cover sm:static" /> */}
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ translateX: 100 }}
            whileInView={{ translateX: 0 }}
            exit={{ x: 100 }}
            transition={{ type: "spring", stiffness: 50 }}
            style={{ flex: 1 }}
            className="right lg:w-7/12 w-full text-white  flex-col p-2 mt-"
          >
            <h1 className="text-xl  lg:text-2xl font-poppins text-white underline  tracking-wide">
              About Us
            </h1>
            <p className="text-xl max-[400px]:text-xs sm:text-[23px]  font-poppins mt-6">
              The Cloud Computing Cell at Ajay Kumar Garg Engineering College,
              established in February 2016.
            </p>
            <p className="text-xl max-[400px]:text-xs sm:text-[23px] font-poppins mt-6">
              It Provides students with exposure to the latest cloud
              technologies, enhancing their skills for better placement and
              research opportunities.
            </p>
            <p className="text-xl max-[400px]:text-xs sm:text-[25p3] font-poppins mt-6">
              It offers a platform for managing and deploying cloud services,
              helping students stay competitive in the job market. The Cell is
              coordinated by Mr. Santosh Kumar Mishra and Ms. Shikha Agrawal from the IT Department, who guide students in their academic
              and professional development.
            </p>
            <div className="btn flex text-xl items-start gap-10 sm:gap-20 mt-8">
              {/* <a href="https://www.akgec.ac.in/rd/cloud-computing-cell/">
              <ShimmerButton className="font-bold text-xs max-[300px]:text-[7px] hover:scale-110 transition-all ease-in-out duration-1000  sm:text-lg font-bebas">
              Know More
              </ShimmerButton>
              <a/> */}
              <a href="https://www.akgec.ac.in/rd/cloud-computing-cell/">
                <ShimmerButton className="font-bold text-xs max-[300px]:text-[7px] hover:scale-110 transition-all ease-in-out duration-1000 sm:text-lg font-font-poppins">
                  Know More
                </ShimmerButton>
              </a>

              <ShimmerButton
                className="font-bold text-xs max-[300px]:text-[7px] hover:scale-110 transition-all ease-in-out duration-1000 sm:text-lg font-poppinss"
                onClick={contact}
              >
                Contact Us
              </ShimmerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;


