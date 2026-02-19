
import ParticlesBackground from "./ParticlesBg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Particles from "./ui/particles";

const RegisterClose = () => {
  return (
    <>
    <ParticlesBackground/>
    <div className="max-w-[90vw] m-auto h-screen flex flex-col justify-center items-center text-center bg-black relative overflow-hidden">
     
      <div className="absolute inset-0 pointer-events-none z-[-1]">
        <div className="size-full animate-pulse opacity-20 bg-gradient-to-r from-violet-500 to-black blur-[120px]"></div>
      </div>

     
      <div className="border-2 border-violet-500 rounded-xl p-10 shadow-[0px_0px_20px_#8a2be2] backdrop-blur-md bg-white/10">
       
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-9xl font-bold text-white drop-shadow-[0_0_20px_#8a2be2]"
        >
          404
        </motion.h1>

       
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl mt-7 text-gray-300 px-6  md:px-20"
        >
          Oops! Registration is now closed. Stay tuned for updates!
        </motion.p>

        <Particles className=""/>
        <Link to="/" className="mt-6 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #8a2be2" }}
            transition={{ duration: 0.3 }}
            className="bg-violet-600 hover:bg-violet-800 mt-5 transition-all text-white px-6 py-3 rounded-md text-lg font-semibold border border-violet-500 shadow-md"
          >
            Back to Home
          </motion.button>
        </Link>
        
      </div>
    </div>
    </>
  );
};

export default RegisterClose;
