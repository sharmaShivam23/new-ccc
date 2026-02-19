// // import React from "react";
// // import { motion } from "framer-motion";
// // import img2 from "../images/img2.svg";
// // import sir from "../images/sir.svg";
// // import TypingAnimation from "./ui/typing-animation";
// // import { TextAnimate } from "./ui/text-animate";
// // import shikha from "../images/shikha2.svg";
// // import { FacultyData } from "../data/Faculty";

// // const Faculty = () => {
// //   return (
// //     <div className="sm:max-w-[90vw]  flex-col gap-20 sm:mb-28 lg:mb-3 mt-20 sm:mt-0 m-auto w-full text-white lg:h-screen flex justify-center items-center h-auto bg-green-">

// // {/* <div className="flex justify-center max-[450px]:w-[90vw] py-9 rounded-3xl flex-col   b items-center border- p-1 sm:p-  border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto lg:h-auto"> */}
// //       <TextAnimate
// //         animation="fadeIn"
// //         by="word"
// //         startOnView={true}
// //         className="text-white text-center mb-3  text-2xl sm:text-4xl sm:mt-7 md:text-6xl mt-2 font-poppins font-bold"
// //         duration={2}
// //       >
// //         Our Faculties 
// //       </TextAnimate>
// //       <div className="flex flex-wrap  justify-evenly gap-72 items-center">
// //   {FacultyData.map((item, index) => (
// //     <motion.div
// //       key={item.name || index}
// //       initial={{ rotateY: 90, opacity: 0 }}
// //       whileInView={{ rotateY: 0, opacity: 1 }}
// //       transition={{ duration: 1, ease: "easeIn" }}
// //       className="sm:h-[60vh] h-[50vh] max-[300px]:w-[250px] max-[400px]:w-[350px]  sm:w-[400px] bg-neutral-800 border-2 border-white rounded-2xl shadow-lg hover:shadow-white/20 transition-shadow duration-300 flex flex-col justify-center items-center p-6"
// //     >
// //       <img
// //         src={item.img}
// //         alt={item.name}
// //         className="h-32 sm:h-48 object-cover rounded-full border-4 border-white shadow-md"
// //       />
// //       <div className="text-center mt-4">
// //         <p className="text-lg sm:text-xl font-semibold text-white">{item.name}</p>
// //         <h1 className="text-md sm:text-lg font-medium text-gray-300">{item.deptt}</h1>
// //         <p className="sm:text-lg text-xs text-gray-400 mt-3 leading-relaxed px-2">
// //           {item.description}
// //         </p>
// //       </div>
// //     </motion.div>
// //   ))}
// // </div>

      
// //     </div>
// //     // </div>
    
// //   );
// // };

// // export default Faculty;


// import React from "react";
// import { motion } from "framer-motion";
// import img2 from "../images/img2.svg";
// import sir from "../images/sir.svg";
// import TypingAnimation from "./ui/typing-animation";
// import { TextAnimate } from "./ui/text-animate";
// import shikha from "../images/shikha2.svg";

// const Faculty = () => {
//   return (
//     <div className="sm:max-w-[90vw] sm:mb-28 lg:mb-3 mt-20  sm:mt-0 m-auto w-full text-white lg:h-screen flex justify-center items-center h-auto bg-green-">
//       <div className="flex justify-center max-[450px]:w-[90vw] pb-10 rounded-3xl flex-col   bg-neutral-800 items-center border-2 p-5 border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto">
//         <TextAnimate
//           animation="fadeIn"
//           by="word"
//           startOnView={true}
//           className="text-white text-center  text-2xl sm:text-5xl sm:mt-7 md:text-6xl mt-2 font-poppins font-bold"
//           duration={2}
//         >
//           Our Faculty
//         </TextAnimate>

//         <div className="flex justify-evenly rounded-3xl sm:gap-10 flex-col lg:flex-row items-center p-3 sm:p- pt-0 mt-3 border-white w-auto sm:w-[70vw] xl:w-[80vw]   h-auto lg:h-[50vh]">
//           <motion.div
//             initial={{ rotateY: 90, opacity: 0 }}
//             whileInView={{ rotateY: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeIn" }}
//             className="pht lg:w-3/6 w-full flex-col h-full flex justify-center items-center"
//           >
             
//             <img
//               src={sir}
//               className="sm:h-64  h-32 max-[450px]:h-40  object-contain"
//               alt=""
//             />
//              <div className="conte text-center mt-4">
//               <h1 className="sm:text-2xl text-lg font-[550] text-white">
//                 Assistant Professor. IT Dept
//               </h1>
//               <p className="sm:text-xl text-md sm:mt-3 font-[500] text-white">
//                 Mr. Santosh Kumar Mishra
//               </p>
//             </div>

//             <div className="p sm:text-lg pb-2 text-xs sm:p-4 font-[500]  text-center">
//             Santosh Mishra, Assistant Professor in IT department. having <br/> 15 years of teaching and 3 years of industry experience as <br/> Java software developer.
//             </div>
//           </motion.div>

//           {/* // */}
//           <motion.div
//             initial={{ rotateY: 90, opacity: 0 }}
//             whileInView={{ rotateY: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeIn" }}
//             className="pht lg:w-3/6 w-full h-full flex-col flex justify-center items-center bg-red-"
//           >
           
//             <img
//               src={shikha}
//               className="sm:h-64 mt-4 h-32  max-[450px]:h-40 rounded- object-cover"
//               alt=""
//             />
//               <div className="conte text-center mt-4">
//               <h1 className="sm:text-2xl text-lg font-[550] text-white">
//                 Assistant Professor. IT Dept
//               </h1>
//               <p className="sm:text-xl  text-md sm:mt-3 font-[500] text-white">
//               Ms. Shikha Agarwal
//               </p>
//             </div>

            
//             <div className="p sm:text-lg pb-2 text-xs sm:p-4 font-[500]  text-center">
//             Santosh Mishra, Assistant Professor in IT department. having <br/> 15 years of teaching and 3 years of industry experience as <br/> Java software developer.
//             </div>
      
//           </motion.div>

         
//         </div>

//         {/* <div className="p sm:text-lg pb-2 text-xs sm:p-4 font-[500] max-w-[70vw] text-center">Prof. Santosh Sir and Prof. Shikha Ma’am from the IT Department serve as the guiding pillars of the Cloud Computing Cell. Their continuous support and mentorship play a crucial role in the growth of the society. They are dedicated to helping students explore cloud technologies and grow in their respective fields.</div> */}
//       </div>
//     </div>
//   );
// };

// export default Faculty;



import React from "react";
import { motion } from "framer-motion";
import img2 from "../images/img2.svg";
import sir from "../images/sir.svg";
import TypingAnimation from "./ui/typing-animation";
import { TextAnimate } from "./ui/text-animate";
import shikha from "../images/shikha2.svg";

const Faculty = () => {
  return (
    <div className="sm:max-w-[90vw]  lg:mb-3 mb- mt-20 sm:mt-0 m-auto w-full text-white flex justify-center items-center h-auto bg-green-">
      <div className="flex flex-col justify-center max-[450px]:w-[90vw] items-center pb-10 rounded-3xl bg-neutral-800 border-2 p-5 border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto">
      {/* flex justify-center max-[450px]:w-[90vw] pb-10 rounded-3xl flex-col   bg-neutral-800 items-center border-2 p-5 border-white w-[80vw] sm:w-[70vw] xl:w-[80vw] h-auto */}
        {/* Heading */}
        <TextAnimate
          animation="fadeIn"
          by="word"
          startOnView={true}
          className="text-white text-center text-2xl sm:text-5xl md:text-6xl font-poppins font-bold mt-4"
          duration={2}
        >
          Our Faculty
        </TextAnimate>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center rounded-3xl gap-10 p-3 sm:p-6 w-full mt-5">

          {/* Card 1 */}
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-col justify-center items-center w-full lg:w-1/2"
          >
            <img
              src={sir}
              className="h-32 sm:h-48 md:h-56 max-[450px]:h-40 object-contain"
              alt="Santosh Sir"
            />
            <div className="text-center mt-4">
              <p className=" text-lg sm:text-2xl sm:mt-3 font-[500]">
                Mr. Santosh Kumar Mishra
              </p>
              <h1 className="text-md sm:text-xl font-[550]">
                Assistant Professor, IT Dept
              </h1>
            </div>
            <div className="p-2 sm:p-4 text-xs sm:text-lg font-[500] text-center">
              Santosh Mishra, Assistant Professor in IT department, having
              15 years of teaching and 3 years of industry experience as
              a Java software developer.
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="flex flex-col justify-center items-center w-full lg:w-1/2"
          >
            <img
              src={shikha}
              className="h-32 sm:h-48 md:h-56 mt-4 max-[450px]:h-40 object-cover rounded-md"
              alt="Shikha Ma'am"
            />
            <div className="text-center mt-4">
              <p className="text-lg sm:text-2xl sm:mt-3 font-[500]">
                Ms. Shikha Agarwal
              </p>
              <h1 className=" text-md sm:text-xl font-[550]">
                Assistant Professor, IT Dept
              </h1>
            </div>
            <div className="p-2 sm:p-4 text-xs sm:text-lg font-[500] text-center">
              Shikha Agarwal, Assistant Professor in IT department, passionate
              about teaching and guiding students in Cloud Computing and IT fields and 
              strong skills in DSA.
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Faculty;
