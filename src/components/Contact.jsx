// import React, { useEffect, useRef } from "react";
// import video from "../images/contactvideo.mp4";
// import ShimmerButton from "./ui/shimmer-button";
// import Particles from "./ui/particles";
// import { useState } from "react";
// import ShineBorder from "./ui/shine-border";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import Spinner from "./Spinner";
// import { motion } from "framer-motion";
// import ReCAPTCHA from "react-google-recaptcha";
// import { MdMessage } from "react-icons/md";
// import Map from "./Map";
// export const Contact = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
//   return (
//     <>
//       <div
//         id="contact"
//         className="xl:h-auto z-50 h-auto w-screen flex-row-reverse  max-w-90vw  md:max-w-[90vw] m-auto p- block md:flex"
//       >
//         <Video />
//         <Form />
//       </div>
//     </>
//   );
// };


// const Form = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMsg] = useState("");
//   const [recaptchaResponse, setRecaptcharesponse] = useState("");
//   const reset = useRef()
//   const [loading, setLoading] = useState(false);


//   const handleRecaptchaChange = (token) => {
//   //  console.log(token);
//    setRecaptcharesponse(token)
   
//   }
  


//   const handleForm = async (e) => {
//     e.preventDefault();
//     const formdata = {
//       name,
//       email,
//       phone,
//       message,
//       recaptchaResponse
    
//     };
//     // console.log(formdata);

//     if (valid()) {
//       setLoading(true);
//       try {
//         const response = await axios.post(
//           "https://website-seven-khaki-57.vercel.app/api/contact",
//           // "https://website-9egw.onrender.com/api/contact",
//           formdata,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         // console.log(response);
        
//         toast.success(response.data.message);
//         clear();
//       } 
     
//       catch (error) {
//           // console.log(error);
//           if (error?.response?.status === 429) {
//             toast.error("Too many requests. Try after 15 minutes");
//           } else if(error?.response?.status === 400) {
//             const errorMessage = error?.response?.data?.message;
//             toast.error(errorMessage);
//           }
//           else if(error?.response?.status === 500){
//             const errorMessage = error?.response?.data?.message;
//             toast.error(errorMessage);
//           }
//           else {
//            toast.error("An unexpected error occurred! try again")
//           }
//         }
//        finally {
//         setLoading(false);
//       }
//     }
//   };

//   function valid() {
//     if (name) {
//       if (/\d/.test(name)) {
//         toast.error("name can't contain numbers.");
//         return false;
//       }
//     }
//     if (phone) {
//       if (phone.length > 11) {
//         toast.error("Invalid mobile number");
//         return false;
//       } else if (phone.length == 11 && !phone.startsWith("0")) {
//         toast.error("Invalid mobile number");
//         return false;
//       }
//     }
//     return true;
//   }
//   function clear() {
//     setTimeout(() => {
//       setName("");
//       setEmail("");
//       setPhone("");
//       setMsg("");
//       reset.current.reset()
//     }, 1000);
//   }
//   return (
//     <>
//       <ToastContainer />
      

//       <div className=" md:w-1/2 w-full flex justify-center h-[100vh] items-center pb-2  lg:border-2 lg:border-l-0 border-violet-500 rounded-3xl">
// {/* 
//       <div className="flex justify-center  z-0 lg:border-2 pb-20  border-violet-500   sm:border-violet- lg:absolute left-0   rounded-r-[3vmin] items-center text-white  w-full md:w-1/2 h-[100vh] bg-yellow- flex-col sm:h-auto md:h-screen p-2"> */}
//         <Particles className="z-40" />
//         <div className="text flex justify-center items-center flex-col">
//         </div>

      
//         <form
//           className="flex justify-center items-center   max-[800px]:w-[70vw] flex-col  h-[70vh] max-[1000px]:h-auto  md:w-[30vw] p-0  md:p-7"
//           onSubmit={handleForm}
//         >
//           <h1 className="text-3xl m-2 text-center font-bold text-white font-poppins mb-3 mt-10 tracking-wider">
//             Contact Us
//           </h1>
         
//           <div className="email mt-3 w-full  flex flex-col justify-center items-center">
//             <div className="email  gap-2">
//               <input
//                 type="text"
//                 id="ipt1"
//                 value={name}
//                 required
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//                 className="w-[302px] text-white sm:w-[30vw] h-[60px] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//               />
//             </div>
//           </div>

        

//           <div className="email mt-3 w-full flex justify-center items-center">
//             <div className="email  flex flex-col gap-2">
//               <input
//                 type="email"
//                 id="ipt2"
//                 value={email}
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email"
//                 className="w-[302px] text-white sm:w-[30vw] h-[60px] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//               />
//             </div>
//           </div>

         

//           <div className="email mt-3 w-full flex justify-center items-center">
//             <div className="email  flex flex-col gap-2">
//               <input
//                 type="number"
//                 id="ipt3"
//                 value={phone}
//                 required
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Enter phone number"
//                 className="w-[302px] text-white sm:w-[30vw] h-[60px] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//               />
//             </div>
//           </div>

        

//           <div className="email mt-3 w-full flex justify-center items-center">
//             <div className="email  flex flex-col gap-2">
//               <textarea
//                 type="number"
//                 id="ipt4"
//                 required
//                 value={message}
//                 onChange={(e) => setMsg(e.target.value)}
//                 placeholder="Enter your message"
//                 className="w-[302px] text-white sm:w-[30vw] h-36 p-2 bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//               />
//             </div>
//           </div>

//           <div className="block gap-2 mt-4">
//             <div className="flex justify-center items-center mt-3 z-50">
//               <ReCAPTCHA
//                 sitekey="6Ldq7wErAAAAAKiaKfx5znCYkSXxs7Tkqdr40Ks6"
//                 onChange={handleRecaptchaChange}
//                 className="cursor-pointer "
//                 ref={reset}
//               />
//             </div>
//           </div>


//           {loading ? (
//             <Spinner />
//           ) : (
//             <button className="" type="submit">
//               <ShineBorder
//                 borderRadius={4}
//                 borderWidth={0.5}
//                 duration={3}
//                 color={["#ffffff", "#3B0B59"]}
//                 className="mt-8 text-white text-2xl   hover:scale-110 font-jetbrains rounded-2xl  transition-all ease-in-out duration-1000  cursor-pointer tracking-wider font-bold"
//               >
//                 Submit
//               </ShineBorder>
//             </button>
//           )}
//         </form>
//         <Particles className="z-40" />
//       </div> 
//     </>
//   );
// };



// const Video = () => {
//   return (
//     <div className="flex justify-centre  relative items-center flex-col w-auto md:w-1/2 bg-green- h-auto md:h-[100vh]">
//       {/* <video
//         className="w-full z-40 lg:mb-28 mb-10 border- border-white  h-auto md:h-[60vh]"
//         autoPlay
//         loop
//         src={video}
//       ></video>
//       <motion.div className="text-white font-poppins lg:text-3xl hidden lg:block text-center text-2xl relative z-40 bottom-28 text-bold">
//         <div className="m-2 mb-4 animate-su font-bold">
//           We Value Building Strong Relationships
//         </div>
//         <div className="m-2 mb-4 font-bold animate-su">
//           Stay in Touch with us
//         </div>
        

//       </motion.div> */}
//       <Map/>
// {/* 
//       <div className="cont text-white border-2 flex justify-center items-center  w-[35vw] h-[30vh] rounded-2xl border-white">
//         <div className="head"></div>
//         <div className="c flex justify-center items-center font-bold gap-2 flex-col">
//           <p>Any Help Enquiry</p>
//           <div className="line text-left w-[100%] border-b-2 border-white"></div>
//           <p>Cloudcomputing@akgec.ac.in</p>
//           <p> 3rd Floor, CSIT Block</p>
//           <p>  Ajay Kumar garg engineering college</p>
//           <p> +8707074420 </p>
          
//         </div>
//       </div> */}
//        {/* <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-br from-[#1a1a1a] to-[#222] p-6 gap-6">
    
//       <div className="bg-[#161D29] text-white border border-gray-300 rounded-2xl p-6 w-full max-w-md shadow-xl">
//         <h2 className="text-xl font-bold mb-2">Any Help Enquiry</h2>
//         <div className="border-b border-gray-500 mb-3"></div>
//         <p>Cloudcomputing@akgec.ac.in</p>
//         <p>3rd Floor, CSIT Block</p>
//         <p>Ajay Kumar Garg Engineering College</p>
//         <p>+8707074420</p>
//       </div>
//     </div> */}
//     <div className="flex flex-col justify-center items-center   md:w-[35vw] bg-gradient-to-br from-black via-[#121212] to-[#1a1a1a] p-6 gap-6">
//   <div className="bg-[#161D29] text-white border border-gray-700 rounded-2xl p-8 w-full  shadow-2xl transition-all duration-300 hover:scale-[1.02]">
//     <h2 className="lg:text-2xl text-xl font-semibold text-white mb-4 text-center tracking-wide">Need Help?</h2>
//     <div className="border-b border-gray-600 mb-4"></div>
//     <div className="space-y-2 text-gray-300 text-center text-sm sm:text-base font-medium leading-relaxed">
//       <p><span className="text-white text-md font-semibold">Email:</span> cloudcomputing@akgec.ac.in</p>
//       <p><span className="text-white text-md font-semibold ">Address:</span> 3rd Floor, CSIT Block</p>
//       <p>Ajay Kumar Garg Engineering College</p>
//       <p><span className="text-white font-semibold">Phone:</span> +8707074420, +8433428790</p>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };
