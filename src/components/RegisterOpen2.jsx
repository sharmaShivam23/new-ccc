
// import React, { useState, useRef } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast";
// import { motion } from "framer-motion";
// import Success from "./Success";
// import { useEffect } from "react";
// import ParticlesBackground from "./ParticlesBg";
// import { apiConnect } from "@/APIhandler/apiconnect";
// import { register } from "@/APIhandler/apis";
// import { csrf } from "@/APIhandler/apis";
// import { useMediaQuery } from "react-responsive";
// const captcha = import.meta.env.VITE_API_CAPTCHA_KEY;
// const RegisterOpen2 = () => {
//   const reset = useRef("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [showEmail, setShowEmail] = useState(false);
//   // const [csrfToken, setCsrfToken] = useState("");
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const [errors, setErrors] = useState({}); //error
//   const nameRef = useRef(null);
//   const [errMsg , setErrMsg] = useState("")
// const studentNumberRef = useRef(null);
// const emailRef = useRef(null);
// const genderRef = useRef(null);
// const branchRef = useRef(null);
// const phoneRef = useRef(null);
// const residenceRef = useRef(null);


//   const branchMap = {
//     10: "CSE(core)",
//     11: "CSIT",
//     12: "CS",
//     13: "IT",
//     164: "AIML",
//     154: "CSE(DS)",
//     153: "CSE(AIML)",
//     169: "CSE(H)",
//     20: "EN",
//     31: "ECE",
//     40: "ME",
//     "00": "CE",
//   };

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     studentNumber: "",
//     branch: "",
//     unstopId: "",
//     gender: "",
//     residence: "",
//     recaptchaValue: "",
//   });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({ ...prev, [name]: value }));
//   //   setErrors((prev) => ({ ...prev, [name]: "" })); // clear inline error on change

//   //   if (name === "studentNumber" && value.length >= 5) {
//   //     const threeDigitCode = value.slice(2, 5);
//   //     const twoDigitCode = value.slice(2, 4);

//   //     let detectedBranch = "";
//   //     if (branchMap[threeDigitCode]) {
//   //       detectedBranch = branchMap[threeDigitCode];
//   //     } else if (branchMap[twoDigitCode]) {
//   //       detectedBranch = branchMap[twoDigitCode];
//   //     }

//   //     if (detectedBranch) {
//   //       setFormData((prev) => ({ ...prev, branch: detectedBranch }));
//   //     }
//   //   }
//   // };
//   const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));

//   let fieldError = "";
// if (name === "name") {
//   if (!value) {
//     fieldError = "Name is required";
//   } else if (value.length < 3) {
//     fieldError = "Name is too short";
//   } else if (!/^[a-zA-Z\s]*$/i.test(value)) {
//     fieldError = "Invalid student name";
//   }
// }


//   if (name === "studentNumber") {
//     if (!value) fieldError = "Student number is required";
//     else if (
//       !(
//         value.startsWith("24") &&
//         (value.length === 7 || value.length === 8)
//       )
//     )
//       fieldError = "Invalid student number";
//   }

//   if (name === "email" && formData.studentNumber) {
//     const emailRegex = new RegExp(
//       `^[a-zA-Z]{3,20}${formData.studentNumber}@akgec\\.ac\\.in$`
//     );
//     if (!value) fieldError = "Email is required";
//     else if (!emailRegex.test(value)) fieldError = "Invalid student email";
//   }

//   if (name === "phoneNumber") {
//     if (!value) fieldError = "Phone number is required";
//     else if (!/^[6-9]\d{9}$/.test(value))
//       fieldError = "Invalid phone number";
//   }

//   if (name === "gender" && !value) fieldError = "Gender is required";
//   if (name === "branch" && !value) fieldError = "Branch is required";
   
// if (name === "unstopId") {
//   if (value.length > 20) {
//     fieldError = "Unstop ID is too long";
//   } else if (!/^[a-zA-Z0-9._]{3,30}$/.test(value)) {
//     fieldError = "Unstop ID contains only numbers, letters, dot and underscore";
//   }
// }


//   if (name === "residence" && !value) fieldError = "Residence is required";

//   setErrors((prev) => ({ ...prev, [name]: fieldError }));

//   // branch auto-detect logic
//   if (name === "studentNumber" && value.length >= 5) {
//     const threeDigitCode = value.slice(2, 5);
//     const twoDigitCode = value.slice(2, 4);

//     let detectedBranch = "";
//     if (branchMap[threeDigitCode]) {
//       detectedBranch = branchMap[threeDigitCode];
//     } else if (branchMap[twoDigitCode]) {
//       detectedBranch = branchMap[twoDigitCode];
//     }

//     if (detectedBranch) {
//       setFormData((prev) => ({ ...prev, branch: detectedBranch }));
//       setErrors((prev) => ({ ...prev, branch: "" })); 
//     }
//   }
// };


  

//   const validateForm = () => {
//   let newErrors = {};

//   if (!formData.name) newErrors.name = "Name is required";
//   else if (!/^[a-zA-Z\s]*$/i.test(formData.name))
//     newErrors.name = "Invalid student name";

//   if (!formData.studentNumber)
//     newErrors.studentNumber = "Student number is required";
//   else if (
//     !(
//       formData.studentNumber.startsWith("24") &&
//       (formData.studentNumber.length === 7 ||
//         formData.studentNumber.length === 8)
//     )
//   )
//     newErrors.studentNumber = "Invalid student number";

//   if (!formData.email) newErrors.email = "Email is required";
//   else if (formData.email && formData.studentNumber) {
//     const emailRegex = new RegExp(
//       `^[a-zA-Z]{3,20}${formData.studentNumber}@akgec\\.ac\\.in$`
//     );
//     if (!emailRegex.test(formData.email))
//       newErrors.email = "Invalid student email";
//   }

//   if (!formData.gender) newErrors.gender = "Gender is required";
//   if (!formData.branch) newErrors.branch = "Branch is required";

//   if (!formData.phoneNumber)
//     newErrors.phoneNumber = "Phone number is required";
//   else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber))
//     newErrors.phoneNumber = "Invalid phone number";

 

//   if (!formData.residence) newErrors.residence = "Residence is required";

//   setErrors(newErrors);
//   if (Object.keys(newErrors).length > 0) {
//     const firstErrorField = Object.keys(newErrors)[0];
//     const refMap = {
//       name: nameRef,
//       studentNumber: studentNumberRef,
//       email: emailRef,
//       gender: genderRef,
//       branch: branchRef,
//       phoneNumber: phoneRef,
//       residence: residenceRef,
//     };
//     refMap[firstErrorField]?.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   }

//   return Object.keys(newErrors).length === 0;
// };


//   // useEffect(() => {
//   //   async function csrfFetching() {
//   //     try {
//   //       const r = await apiConnect("GET", csrf.CSRF_API);
//   //       console.log(r);
//   //       setCsrfToken(r?.data?.csrfToken);
//   //     } catch (err) {
//   //       // console.log(err);
//   //       toast.error("Security token- missing, refresh and try again");
//   //     }
//   //   }

//   //   csrfFetching();
//   // }, []);

//   const handleForm = async (e, recaptchaToken) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//   //   if (!csrfToken) {
//   //   toast.error("Security token missing, refresh and try again");
//   //   return;
//   // }

//   if (!reset.current) {
//     toast.error("reCAPTCHA not loaded");
//     return;
//   }
//     setLoading(true);

//     try {
//       const submissionData = {
//         ...formData,
//         recaptchaValue: recaptchaToken,
//       };

//       // console.log(submissionData);
      

//       const formDataToSend = new FormData();
//       Object.entries(submissionData).forEach(([key, value]) =>
//         formDataToSend.append(key, value)
//       );

//       // console.log("s",submissionData);

//       const headers = {
//         "Content-Type": "application/json",
//         // "X-CSRF-Token": csrfToken,
//       };

//       const response = await apiConnect(
//         "POST",
//         // "http://13.201.188.103:5000/api/register/Drive",
//         "http://13.204.54.204:5000/api/register/Drive",
//         // "https://drive-zzhh.onrender.com/api/register/Drive",
//         formDataToSend,
//         headers
//       );
//       // console.log(response);

//       if (response?.data?.success === true) {
//         setSuccess(true);
//         localStorage.setItem("registeredName", formData.name);
//         toast.success(response?.data?.message || "Registration successful!");
//         clearForm();
//       }
//     } catch (error) {
//       // console.log(error);

//       // console.error("Registration error:", error);
//       // toast.error(error?.response?.data?.message || "Registration failed");

//       let errorMessage = "An unexpected error occurred";

//       if (error?.response) {
//         const { status, data } = error.response;

//         switch (status) {
//           case 400:
//             errorMessage = data?.message || "Invalid request data";
//             break;
//           case 401:
//             errorMessage = "Authentication required";
//             break;
//           case 403:
//             errorMessage = "Access forbidden";
//             break;
//           case 429:
//             errorMessage =  data?.message || "Too many requests. Try again after 15 minutes";
//             break;
//           case 500:
//             errorMessage = "Server error. Please try again later";
//             break;
//           default:
//             errorMessage = data?.message || "Request failed";
//         }
//       } else if (error?.request) {
//         errorMessage = "Network error. Please check your connection";
//       }
//       toast.error(errorMessage);
//       setErrMsg(errorMessage)
//     } finally {
//       setLoading(false);
//     }
//   };

//   const clearForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phoneNumber: "",
//       studentNumber: "",
//       branch: "",
//       unstopId: "",
//       gender: "",
//       residence: "",
//       recaptchaValue: "",
//     });

//     // Reset reCAPTCHA
//     if (reset.current) {
//       reset.current.reset();
//     }
//   };

//   return (
//     <div
//       className={`signup z-50 ${
//         !showEmail ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""
//       }  overflow-hidden pb-10  w-full sm:max-w-[92vw] m-auto  bg-black gap-1 sm:px-5 p-1.5 flex text-white justify-center items-center sm:py-7  sm:flex-row flex-col`}
//     >
//       <ParticlesBackground />
//      <Toaster
//   position="top-center"
//   toastOptions={{
//     duration: 4000,
//     style: {
//       background: "rgba(30, 30, 30, 0.85)",
//       color: "#f9fafb", 
//       padding: "14px 22px",
//       fontSize: "15px",
//       fontWeight: 500,
//       borderRadius: "14px",
//       boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
//       backdropFilter: "blur(14px) saturate(180%)",
//       WebkitBackdropFilter: "blur(14px) saturate(180%)",
//       border: "1px solid rgba(255, 255, 255, 0.15)",
//       letterSpacing: "0.3px",
//     },
//     success: {
//       style: {
//         background: "rgba(16, 185, 129, 0.85)",
//         color: "#fff",
//       },
//       iconTheme: {
//         primary: "#ffffff",
//         secondary: "#10b981",
//       },
//     },
//     error: {
//       style: {
//         background: "rgba(239, 68, 68, 0.85)", 
//         color: "#fff",
//       },
//       iconTheme: {
//         primary: "#ffffff",
//         secondary: "#ef4444",
//       },
//     },
//     loading: {
//       style: {
//         background: "rgba(59, 130, 246, 0.85)", 
//         color: "#fff",
//       },
//     },
//   }}
// />


//       {!success ? (
//         <>
//           {/* <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24  lg:flex w-full  mt-3 ">
//             <img
//               src="/poster.png"
//               className="object-cover sm:mb-10"
//               alt=""
//             />
//           </div> */}
          
//           <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24 lg:flex w-full mt-3 justify-center relative">
//   {/* Ripple Wrapper */}
//   <div className="relative">
//     {/* Ripple background effect */}
//     <span className="absolute inset-0 rounded-3xl bg-violet-500/20 animate-rippleWave blur-xl"></span>

//     {/* Poster Image */}
//     <img
//       src="/poster.png"
//       className="object-cover sm:mb-10 w-full relative  z-10 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
//       alt="Poster"
//     />
//   </div>

//   {/* Animation styles */}
//   <style>
//     {`
//       @keyframes rippleWave {
//         0% {
//           transform: scale(0.95);
//           opacity: 0.6;
//         }
//         50% {
//           transform: scale(1.05);
//           opacity: 1;
//         }
//         100% {
//           transform: scale(0.95);
//           opacity: 0.6;
//         }
//       }
//       .animate-rippleWave {
//         animation: rippleWave 3s ease-in-out infinite;
//       }
//     `}
//   </style>
// </div>


//           <div className="right  sm:w-[800px]   w-full overflow-x-hidden  sm:px-14">
//             <form onSubmit={handleForm} className="sm:mt-2   w-full space-y-5">
//               <div className="fields shad w-full flex bg-transparent   border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
//                 <div className="flex justify-between mt-3 sm:mt-5 items-center flex-col">
//                   <p className="text-3xl font-poppins text-white text-center font-bold  flex justify-center items-center">
//                     Registration Form
//                   </p>
//                   <p className="head2 text-lg font-bold text-[#AFB2BF] mt-0 mb-2 flex justify-center items-center">
//                     SPOCC'25
//                   </p>
//                 </div>

//                 <div className="name">
//                   <input
//                     type="text"
//                     name="name"
//                      ref={nameRef}
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter Name"
//                     className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                   )}
//                 </div>

//                 <div className="studentNumber">
//                   <input
//                     type="number"
//                     name="studentNumber"
//                      ref={studentNumberRef}
//                     value={formData.studentNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter Student Number"
//                     className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                    {errors.studentNumber && (
//                     <p className="text-red-500 text-sm mt-1">{errors.studentNumber}</p>
//                   )}
//                 </div>

//                 <div className="email relative">
//                   <input
//                     type="email"
//                     name="email"
//                      ref={emailRef}
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter College Email Id"
//                     className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* branch , section */}
//                 <div className="two flex-col sm:flex-row flex gap-4 w-full">

//                                   {/* gender */}
//                 <div className="gender w-full sm:w-1/2">
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                      ref={genderRef}
//                     onChange={handleInputChange}
//                     className="h-[54px] w-full  bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                    {errors.gender && (
//                       <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
//                     )}
//                 </div>

//                   <div className="branch w-full sm:w-1/2">
//                     <select
//                       name="branch"
//                       value={formData.branch}
//                        ref={branchRef}
//                       onChange={handleInputChange}
//                       className="h-[54px] w-full  text-[#AFB2BF] bg-[#161D29] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                     >
//                       <option value="">Branch</option>
//                       <option value="CSE(core)">CSE</option>
//                       <option value="CSE(AIML)">CSE(AIML)</option>
//                       <option value="CSE(DS)">CSE(DS)</option>
//                       <option value="CSE(H)">CSE(Hindi)</option>
//                       <option value="CS">CS</option>
//                       <option value="IT">IT</option>
//                       <option value="CSIT">CSIT</option>
//                       <option value="AIML">AIML</option>
//                       <option value="ECE">ECE</option>
//                       <option value="EN">EN</option>
//                       <option value="ME">ME</option>
//                       <option value="CE">CE</option>
//                     </select>
//                     {errors.branch && (
//                       <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* phoneNumber */}
//                 <div className="phoneNumber">
//                   <input
//                     type="number"
//                     name="phoneNumber"
//                     ref={phoneRef}
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter Phone Number"
//                     className=" h-[54px] w-full bg-[#161D29]   text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                    {errors.phoneNumber && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.phoneNumber}
//                     </p>
//                   )}
//                 </div>

//                 {/* gender */}
//                 {/* <div className="gender">
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                   </select>
//                 </div> */}


//                  <div className="unstopId relative">
//                   <input
//                     type="text"
//                     name="unstopId"
//                     value={formData.unstopId}
//                     onChange={handleInputChange}
//                     placeholder="Enter Unstop Id or (NaN)"
//                     className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                 </div>
//                  {errors.unstopId && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.unstopId}
//                     </p>
//                   )}

//                 {/* residence */}
//                 <div className="residence">
//                   <select
//                     name="residence"
//                      ref={residenceRef}
//                     value={formData.residence}
//                     onChange={handleInputChange}
//                     className="h-[54px]  w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)] flex justify-center items-center"
//                   >
//                     <option value="">Select Residence</option>
//                     <option value="Hosteller">Hosteller</option>
//                     <option value="DayScholar">DayScholar</option>
//                   </select>
//                   {errors.residence && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.residence}
//                     </p>
//                   )}
//                 </div>


//                 <ReCAPTCHA
//                   sitekey="6LctyZYrAAAAANH0NNM_BRUiyRcyCoUMKhQ-4kis"
//                   size="invisible"
//                   badge="bottomright"
//                   ref={reset}
//                 />

//                 <div className="pa w-full flex lg:flex-row flex-col gap-4">
//                   <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-0  items-center">
//                     <motion.div
//                       whileHover={{
//                         scale: 1,
//                         boxShadow: "0px 0px 10px #8a2be2",
//                       }}
//                       onClick={async (e) => {
//                         e.preventDefault();

//                         try {
//                           const token = await reset.current.executeAsync();
//                           reset.current.reset();
//                           await handleForm(e, token);

//                         } catch (err) {
//                           toast.error("reCAPTCHA verification failed");
//                         }
//                       }}
//                       disabled={loading}
//                       transition={{ duration: 0.3 }}
//                       className={`${
//                         loading
//                           ? "opacity-50 cursor-not-allowed"
//                           : "cursor-pointer"
//                       } bg-violet-600 flex justify-center items-center hover:bg-violet-800 lg:h-[55px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md`}
//                     >
//                       {loading ? "Registering..." : "Register"}
//                     </motion.div>
                    
//                   </div>
                  
//                 </div>
//                  {errMsg && <div className="text-sm text-center text-red-500">{errMsg}</div>}
//               </div>
//             </form>
//           </div>
//         </>
//       ) : (
//         <Success />
//       )}
//     </div>
//   );
// };

// export default RegisterOpen2;




import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Hash, Mail, Phone, Briefcase, MapPin, 
  ChevronRight, CheckCircle2, AlertCircle, Loader2, 
  Zap, ShieldCheck, Globe, Cpu, ArrowRight, Activity,
  Lock, Terminal, Server, Radio
} from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

import SuccessTerminal from "./Success";
const BRANCH_MAP = {
  10: "CSE(core)", 11: "CSIT", 12: "CS", 13: "IT",
  164: "AIML", 154: "CSE(DS)", 153: "CSE(AIML)", 169: "CSE(H)",
  20: "EN", 31: "ECE", 40: "ME", "00": "CE",
};


const NeuralLinkBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let points = [];
    const mouse = { x: null, y: null, radius: 180 };
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      points = [];
      const count = Math.min(window.innerWidth / 15, 100);
      for (let i = 0; i < count; i++) {
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 0.5;
      points.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const dx = mouse.x - p.x; const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) { p.x += dx * 0.01; p.y += dy * 0.01; }
        points.slice(i + 1).forEach(p2 => {
          const d = Math.sqrt((p.x - p2.x)**2 + (p.y - p2.y)**2);
          if (d < 150) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          }
        });
        ctx.fillStyle = "rgba(139, 92, 246, 0.3)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI * 2); ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    window.addEventListener("resize", init);
    const mm = e => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("mousemove", mm);
    init(); animate();
    return () => { window.removeEventListener("resize", init); window.removeEventListener("mousemove", mm); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-[#020202]" />;
};


const GlitchText = ({ text, className }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+{}:<>?|1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((char, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1/3;
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return <span className={className}>{display}</span>;
};

// --- Success Component ---
const SuccessDisplay = ({ userData }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={{ opacity: 1, scale: 1 }} 
    className="w-full max-w-2xl p-1 p-[1px] bg-gradient-to-br from-violet-500/50 to-transparent rounded-[3rem] shadow-2xl z-10"
  >
    <div className="bg-[#050505] p-12 md:p-16 rounded-[3rem] text-center space-y-8 relative overflow-hidden backdrop-blur-3xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />
      
      <div className="relative inline-block">
         <motion.div 
           initial={{ scale: 0 }} 
           animate={{ scale: 1 }} 
           transition={{ type: "spring", damping: 12 }}
           className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(34,197,94,0.4)] mx-auto relative z-10"
         >
           <CheckCircle2 size={56} className="text-white" />
         </motion.div>
         <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }} 
            className="absolute inset-0 border-2 border-green-500 rounded-full" 
         />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-6xl font-black italic tracking-tighter leading-none text-white">ACCESS GRANTED</h2>
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
          <Radio size={12} className="text-violet-500 animate-pulse" />
          Transmission confirms registration for subject <span className="text-violet-500 font-black">{userData.name}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1">
              <p className="text-[10px] text-gray-500 uppercase font-black">Student No</p>
              <p className="text-sm text-white font-mono">{userData.studentNumber}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1">
              <p className="text-[10px] text-gray-500 uppercase font-black">Uplink Status</p>
              <p className="text-sm text-green-400 font-mono">ENCRYPTED</p>
          </div>
      </div>

      <div className="pt-6 border-t border-white/5 space-y-4">
          <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
            Subject is now registered for <GlitchText text="SPOCC'25" className="text-violet-400 font-black" />.
            Further directives will be transmitted to the authenticated college gateway.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 text-[10px] text-violet-500/60 font-black">
                <ShieldCheck size={14} /> SYSTEM_SECURED
            </div>
            <div className="flex items-center gap-2 text-[10px] text-violet-500/60 font-black">
                <Cpu size={14} /> CORE_INGESTED
            </div>
          </div>
      </div>
    </div>
  </motion.div>
);


const KineticInput = ({ icon: Icon, label, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative w-full group">
      <div className="flex justify-between items-center mb-1.5 px-1">
        <label className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 group-focus-within:text-violet-400 transition-colors">
          {label}
        </label>
        <AnimatePresence>
          {error && (
            <motion.span 
              initial={{ opacity: 0, x: 5 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0 }}
              className="text-[9px] text-red-500 font-bold tracking-widest flex items-center gap-1"
            >
              <AlertCircle size={10} /> {error}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/10 group-focus-within:border-violet-500/50 transition-colors duration-500">
        {isFocused && (
          <motion.div 
            initial={{ left: "-100%" }} 
            animate={{ left: "100%" }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[40px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent z-20 pointer-events-none"
          />
        )}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <Icon className={`w-4 h-4 transition-colors duration-300 ${isFocused ? 'text-violet-400' : 'text-gray-600'}`} />
        </div>
        <input 
          {...props} 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-[#0a0a0a] text-white py-4 pl-12 pr-4 outline-none transition-all duration-300 font-mono text-sm placeholder:text-gray-800`}
        />
        {/* Dynamic focus border logic handled by parent container */}
      </div>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phoneNumber: "", studentNumber: "",
    branch: "", unstopId: "", gender: "", residence: "",
  });
  const [errors, setErrors] = useState({});

  // Manual reCAPTCHA injection to bypass build resolution issues
  useEffect(() => {
    if (!document.querySelector('#recaptcha-script')) {
      const script = document.createElement("script");
      script.id = 'recaptcha-script';
      script.src = "https://www.google.com/recaptcha/api.js?render=6LctyZYrAAAAANH0NNM_BRUiyRcyCoUMKhQ-4kis";
      script.async = true;
      script.defer = true;
      script.onload = () => setCaptchaReady(true);
      document.body.appendChild(script);
    } else {
      setCaptchaReady(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value && !/^[a-zA-Z\s]*$/i.test(value)) return;
    if (name === "studentNumber" && value && !/^\d*$/.test(value)) return;
    if (name === "phoneNumber" && value && !/^\d*$/.test(value)) return;

    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      if (name === "studentNumber" && value.length >= 5) {
        const d3 = value.slice(2, 5);
        const d2 = value.slice(2, 4);
        const detected = BRANCH_MAP[d3] || BRANCH_MAP[d2];
        if (detected) {
          updated.branch = detected;
          setErrors(curr => ({ ...curr, branch: "" }));
        }
      }
      return updated;
    });
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name || formData.name.trim().length < 3) newErrors.name = "ID REJECTED";
    if (!formData.studentNumber || !formData.studentNumber.startsWith("24") || formData.studentNumber.length < 7 || formData.studentNumber.length > 8) {
      newErrors.studentNumber = "BATCH '24 ONLY";
    }
    const emailRegex = new RegExp(`^[a-zA-Z]{3,20}${formData.studentNumber}@akgec\\.ac\\.in$`);
    if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = "GATEWAY DENIED";
    if (!formData.phoneNumber || !/^[6-9]\d{9}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "COMMS ERROR";
    if (!formData.gender) newErrors.gender = "REQ";
    if (!formData.branch) newErrors.branch = "REQ";
    if (!formData.residence) newErrors.residence = "REQ";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("PROTOCOL ERROR: INPUT VALIDATION FAILED");
      return;
    }

    if (!captchaReady || !window.grecaptcha) {
      toast.error("SECURITY ERROR: VERIFIER NOT INITIALIZED");
      return;
    }

    setLoading(true);
    try {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute('6LctyZYrAAAAANH0NNM_BRUiyRcyCoUMKhQ-4kis', { action: 'submit' });
          if (!token) throw new Error("RECAPTCHA_FAIL");

          //  API Call Logic
          const submissionData = new FormData();
          Object.entries({ ...formData, recaptchaValue: token }).forEach(([k, v]) => submissionData.append(k, v));

          const response = await fetch("https://drive-zzhh.onrender.com/api/register/Drive", {
            method: "POST",
            body: submissionData, 
            headers: {
            
               "Accept": "application/json"
            }
          });

          const result = await response.json();

          if (result.success || response.status === 200) {
            toast.success("UPLINK COMPLETE");
            setSuccess(true);
          } else {
            throw new Error(result.message || "UPLINK_REJECTED");
          }
        } catch (err) {
          toast.error(err.message || "SERVER_CONNECTION_FAIL");
          setLoading(false);
        }
      });
    } catch (err) {
      toast.error("SYSTEM TIMEOUT");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-500/40 font-mono flex items-center justify-center p-4">
      <NeuralLinkBackground />
      <Toaster />
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            className="w-full max-w-6xl grid lg:grid-cols-12 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
          >
            {/* Sidebar Branding */}
            <div className="lg:col-span-5 p-12 bg-gradient-to-br from-violet-950/20 via-black to-black flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <Cpu size={120} className="text-violet-500" />
              </div>
              
              <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/30 text-violet-400 text-[10px] font-black uppercase tracking-widest">
                    <Radio size={12} className="animate-pulse" /> Uplink System Active
                  </div>
                  <h1 className="text-6xl font-black tracking-tighter italic leading-tight">
                    <GlitchText text="SPOCC'25" className="text-white" /> <br /> 
                    <span className="text-violet-500 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">INGRESS</span>
                  </h1>
                </div>

                <div className="space-y-8">
                  {[ 
                    { l: "SEC_KEY", v: "v3_ENCRYPTED", i: ShieldCheck }, 
                    { l: "TARGET_NODE", v: "B.TECH_1ST_YR", i: Zap }, 
                    { l: "COMM_PORT", v: "DRIVE_API_5000", i: Globe } 
                  ].map((it, idx) => (
                    <motion.div key={it.l} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + idx*0.1 }} className="flex gap-4 items-center">
                      <div className="p-2.5 rounded-xl bg-violet-500/5 border border-violet-500/20 text-violet-500"><it.i size={18} /></div>
                      <div>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">{it.l}</p>
                        <p className="text-xs text-white tracking-widest font-bold">{it.v}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-12 space-y-4">
                <div className="flex items-center gap-3 py-2 px-4 rounded-xl bg-white/5 border border-white/10 w-fit">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Server: Online</span>
                </div>
                <p className="text-[9px] text-gray-600 uppercase tracking-widest leading-relaxed max-w-[280px]">
                  NOTICE: SYSTEM DEPLOYS RIGID AUTHENTICATION PROTOCOLS. DATA TAMPERING LOGGED AUTOMATICALLY.
                </p>
              </div>
            </div>

            {/* Ingestion Form */}
            <div className="lg:col-span-7 p-8 lg:p-14 overflow-y-auto max-h-[90vh] bg-[#030303]/40">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <KineticInput label="Identity_Name" icon={User} name="name" value={formData.name} onChange={handleInputChange} placeholder="FULL NAME" error={errors.name} />
                  <KineticInput label="Credential_ID" icon={Hash} name="studentNumber" value={formData.studentNumber} onChange={handleInputChange} placeholder="24XXXXX" error={errors.studentNumber} />
                </div>
                <KineticInput label="Access_Gateway (College Email)" icon={Mail} name="email" value={formData.email} onChange={handleInputChange} placeholder="name24XXXXX@akgec.ac.in" error={errors.email} />
                <div className="grid md:grid-cols-2 gap-10">
                  <KineticInput label="Comms_Channel" icon={Phone} name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="10-DIGIT MOBILE" error={errors.phoneNumber} />
                  <KineticInput label="Unstop_Link" icon={Zap} name="unstopId" value={formData.unstopId} onChange={handleInputChange} placeholder="ID / NaN" error={errors.unstopId} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  {[
                    { n: "gender", l: "Biology", o: ["Male", "Female"] },
                    { n: "branch", l: "Department", o: Object.values(BRANCH_MAP) },
                    { n: "residence", l: "Location", o: ["Hosteller", "DayScholar"] }
                  ].map(sel => (
                    <div key={sel.n} className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 pl-1">{sel.l}</label>
                      <select 
                        name={sel.n} 
                        value={formData[sel.n]} 
                        onChange={handleInputChange} 
                        className={`w-full bg-[#0a0a0a] border ${errors[sel.n] ? 'border-red-900/50' : 'border-white/10'} p-4 rounded-xl text-[11px] text-gray-400 outline-none hover:bg-white/5 focus:border-violet-500/50 transition-all cursor-pointer`}
                      >
                        <option value="">SELECT</option>
                        {sel.o.map(opt => <option key={opt} value={opt} className="bg-[#0a0a0a]">{opt}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-dashed border-white/10">
                    <div className="p-2 rounded-lg bg-violet-500/10 text-violet-500"><Lock size={16}/></div>
                    <div className="text-[10px] text-gray-500 uppercase font-black leading-tight">
                        Encrypted Data Packet<br/>
                        <span className="text-gray-700">Protected by Google reCAPTCHA v3</span>
                    </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01, boxShadow: "0 0 50px rgba(139, 92, 246, 0.4)" }} 
                  whileTap={{ scale: 0.98 }} 
                  disabled={loading}
                  className="w-full bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-[0.4em] py-5 rounded-2xl transition-all flex items-center justify-center gap-4 group relative overflow-hidden disabled:opacity-50"
                >
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  {loading ? (
                    <div className="flex items-center gap-3">
                        <Loader2 className="animate-spin" size={20} />
                        <span>INGESTING...</span>
                    </div>
                  ) : (
                    <>INITIALIZE UPLINK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <SuccessDisplay userData={formData} />
        )}
      </AnimatePresence>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700;800&display=swap');
        body { background: #020202; font-family: 'JetBrains Mono', monospace; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 3px; } ::-webkit-scrollbar-track { background: #000; } ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }
        
        select {
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(139, 92, 246, 0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.5em;
        }

        .grecaptcha-badge { bottom: 25px !important; filter: grayscale(1) invert(1) brightness(0.5); }
      `}</style>
    </div>
  );
}