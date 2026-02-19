import React from "react";
import CCC from "../images/CCC.png";
import { motion } from "framer-motion";
import Particles from "./ui/particles";
import SparklesText from "./ui/sparkles-text";

const Splash = () => {
  return (
    <>
      <motion.div className="bg-black h-[100vh] w-screen relative flex justify-center items-center flex-col">
        <div className="ani z-40 bg-black text-3xl absolute bottom-0 text-white flex justify-center items-start">
          
        </div>
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          className="z-50"
        >
          <img src={CCC} alt="Logo" className="h-40 z-50" />
        </motion.div>

        <div className="text text-white font-bold text-2xl sm:text-3xl z-50 mt-6 flex">
          <motion.div
            
            initial={{ opacity: 0, backdropFilter: "brightness(70%)" }}
            whileInView={{ opacity: 1, backdropFilter: "brightness(100%)" }}
            transition={{
              duration: 2,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
          
            <SparklesText
              className="mr-4 sm:text-3xl text-2xl font-poppins"
              text={"CLOUD"}
            >
              CLOUD
            </SparklesText>
          </motion.div>

          <motion.div
           initial={{ opacity: 0, backdropFilter: "brightness(70%)" }}
           whileInView={{ opacity: 1, backdropFilter: "brightness(100%)" }}
          
            transition={{
              duration: 2,
              delay: 1,
              type: "spring",
              stiffness: 100,
            }}
          >
    
            <SparklesText
              className="mr-4 sm:text-3xl text-2xl font-poppins"
              text={"COMPUTING"}
            >
              COMPUTING
            </SparklesText>
          </motion.div>

          <motion.div
 initial={{ opacity: 0, backdropFilter: "brightness(70%)" }}
whileInView={{ opacity: 1, backdropFilter: "brightness(100%)" }}
            transition={{
              duration: 2,
              delay: 1.5,
              type: "spring",
              stiffness: 100,
            }}
          >
      
            <SparklesText
              className="mr-4 sm:text-3xl text-2xl font-poppins"
              text={"CELL"}
            >
              CELL
            </SparklesText>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Splash;
