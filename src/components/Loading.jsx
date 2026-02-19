


import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {

 
    document.body.classList.add('no-scroll');
 

  const obj = [
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
    {
      domain: "App Development",
      name: "Raghav Agrawal",
      about: "Raghav Agrawal our fourth year member.",
    },
  ];

  return (
    <div className="h-auto sm:max-w-[90vw] w-full flex justify-center flex-col items-center py-8">
      <div className="flex justify-center items-center flex-wrap gap-7">
        {obj.map((details, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center"
          >
            <div className="relative w-[20rem] m-4 cursor-pointer h-[25rem] overflow-hidden bg-[#333] rounded-3xl">
              <div className="w-full h-full flex justify-center items-center flex-col">
                <div className="h-[208px] w-[208px] bg-[#444] rounded-full animate-pulse"></div>

             
                <div className="mt-6 text-center">
                  <p className="bg-[#444] w-[185px] h-[28px] mb-2 animate-pulse"></p>

                  
                  <p className="bg-[#444] w-[185px] h-[32px] mt-1 font-bold animate-pulse"></p>

                
                  <div className="w-full absolute bottom-0 left-0 h-3 bg-[#444] animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Loading;





// import React from 'react';
// import { motion } from 'framer-motion';
// bg-opacity-90 backdrop-blur-sm

 export const Loader = () => {
  return (
    <div className="absolute top-0 left-0 h-screen bg-opacity-90 backdrop-blur-sm bottom-0 w-full  flex items-center justify-center bg-[#161D29] ">
      <div className="text-center">
        <motion.div
          className="w-10 h-10 bg-white rounded-full mx-auto"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
  
        <motion.h1
          className="mt-8 text-xl sm:text-4xl font-bold text-white"
          animate={{
            textShadow: [
              "0px 0px 8px  #8a2be2",
              "0px 0px 16px  #8a2be2",
              "0px 0px 8px  #8a2be2"
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading, Please Wait...
        </motion.h1>

        <div className="flex mt-4 space-x-2 justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="w-4 h-4 bg-white rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// export default Loader;

