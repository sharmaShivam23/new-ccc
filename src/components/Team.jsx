import React from "react";
import team from "../images/newTeam.jpg";
// import team from "../images/23team.png";
import { motion } from "framer-motion";
import InteractiveHoverButton from "./ui/interactive-hover-button";
import { useNavigate } from "react-router-dom";
import bgcards from "../images/bgcards.svg";
import black from '../images/black.jpeg'
import orbitbg from '../images/orbitbg.jpeg'

const Team = () => {
  const navigate = useNavigate();
  const teamcard = () => {
    navigate("/Team");
  };
  return (
    <div
      id="team"
      className="h-auto lg:h-screen mb-20 sm:mb-32 w-full mt-36 flex justify-center items-center   m-5">
      <div
     
        className="h-auto psud   text-white sm:p-9 w-full min-[450px]:w-[80vw] sm:w-[70vw] bg-neutral-800 border-2 shadow-xl border-white rounded-3xl xl:w-[80vw] mx-auto"
      >
        <motion.h1
          initial={{ y: -50, backdropFilter: "brightness(70%)", opacity: 0 }}
          whileInView={{ y: 0, backdropFilter: "brightness(100%)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-center text-2xl  sm:text-5xl mt-4 font-poppins sm:mb-10 mb-4 md:text-6xl  font-bold"
        >
          Who Are We
        </motion.h1>

        <section className="flex flex-col xl:flex-row justify-center items-center  lg:gap-16">
          <motion.div
            initial={{backdropFilter: "brightness(70%)", opacity: 0 }}
            whileInView={{backdropFilter: "brightness(100%)", opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2  flex justify-center items-center"
          >
            
            <img
              src={team}
              alt="Cloud Computing Cell Team"
              className="rounded-lg object-cover shadow-lg w-[85%] min-[450px]:w-[60%] sm:w-[85%]"
            />
          </motion.div>

          <motion.div
            initial={{ translateX: 100, opacity: 0, backdropFilter: "brightness(70%)" }}
            whileInView={{ translateX: 0, opacity: 1, backdropFilter: "brightness(100%)"}}
            transition={{ type: "spring", stiffness: 50, duration: 1 }}
            className="w-full px-2 xl:w-1/2 max-[900px]:p-5 max-[500px]:text-xs text-lg sm:text-xl lg:text-2xl font-serif text-center lg:text-left">
          
           
            <p className="font-poppins">
           We are a team with vibrant mix of individuals from diverse backgrounds, each bringing unique skills and a shared passion for technology.  we collaborate to explore and innovate in the fields of Web Development, Machine Learning, Cloud Computing, and UI/UX Design.We believe in supporting one another, sharing knowledge, and working together on real-world projects  With a strong focus on growth and collaboration, we aim to empower every member to reach their full potential in the ever-evolving tech landscape.


            </p>
          </motion.div>
        </section>
        <motion.div  className="flex justify-center items-center sm:mt-7">
          <InteractiveHoverButton
            onClick={teamcard}
            className="text-black text-xs sm:text-lg font-poppins  font-extrabold mb-2"
          >
            More
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </div>
  );
};



export default Team;
