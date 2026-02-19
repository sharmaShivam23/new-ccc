
import { motion } from "framer-motion";

const Recrutingno = ({messageclose}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md z-50">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="size-full  opacity-20 bg-gradient-to-r to-black blur-[120px]"></div>
      </div>

  
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="border-4 border-violet-500 rounded-2xl px-8 py-12 shadow-[0px_0px_20px_#8a2be2] backdrop-blur-md bg-white/10 sm:w-[40vw] w-[80vw] flex flex-col items-center justify-center relative"
      >
  
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold text-white drop-shadow-[0_0_20px_#8a2be2]"
        >
          🚀
        </motion.h1>

  
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-3xl text-white font-bold mt-4"
        >
          Sorry, we are not recruiting 
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl text-gray-300 font-semibold mt-2"
        >
          at the moment! Stay tuned.
        </motion.p>

        <div className="mt-5 z-50">
           <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #8a2be2" }}
            transition={{ duration: 0.3 }}
            className="bg-violet-600 hover:bg-violet-800 transition-all text-white px-6 py-3 rounded-md text-lg font-semibold border border-violet-500 shadow-md"
            onClick={messageclose}
          >
            Understood
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Recrutingno;
