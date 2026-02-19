// import React, { useState, useRef } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios";
// import { Toaster, toast } from "react-hot-toast";
// import { Loader } from "./Loading";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Particles from "./ui/particles";
// import Meteors from "./ui/meteors";
// import { ImCross } from "react-icons/im";
// import html2canvas from "html2canvas";
// import Confetti from "./ui/confetti";
// import Success from "./Success";
// import OtpInput from "react-otp-input";
// import ParticlesBackground from "./ui/TsParticles";

// const RegisterOpen = () => {
//   const reset = useRef("");
//   const [loading, setLoading] = useState(false);
//   const [otploading, setOtpLoading] = useState(false);
//   const [QRCode, setQRCode] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [showEmail, setShowEmail] = useState(false);

//   // const [fileName, setFileName] = useState("Payment Screenshot");

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
//     section: "",
//     gender: "",
//     residence: "",
//     recaptchaValue: "",
//     transactionID: "",
//     otp: "",
//     // file: null,
//   });

//   const VerifyOtp = async () => {
//     const toastID = toast.loading("Please wait...");
//     setOtpLoading(true);
  
//     try {
//       const response = await axios.post(
//         // "http://localhost:5000/api/register/otp",
//         "https://registerbackend-4dz1.onrender.com/api/register/otp",
//         {
//           email: formData.email,
//           otp: formData.otp,
//         },
//         {
//           withCredentials: true,  
//         }
//       );
//       // console.log(response);
      
  
//     toast.success(response?.data?.message, {id : toastID})
  
//     } catch (err) {
//       // console.log(err);
      
//       toast.error(err?.response?.data?.message, {id : toastID})
//     } finally {
//       setOtpLoading(false);
//     }
//   };
  

//   const handleRecaptchaChange = (token) => {
//     // console.log(token);

//     setFormData((prev) => ({ ...prev, recaptchaValue: token }));
//   };

//   // const handleFileChange = (e) => {
//   //   setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
//   //   const file = event.target.files[0];
//   //   if (file) {
//   //     setFileName(file.name);
//   //   }
//   // };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     if (name === "studentNumber" && value.length >= 5) {
//       const threeDigitCode = value.slice(2, 5);
//       const twoDigitCode = value.slice(2, 4);

//       let branch = "";
//       if (branchMap[threeDigitCode]) {
//         branch = branchMap[threeDigitCode];
//       } else if (branchMap[twoDigitCode]) {
//         branch = branchMap[twoDigitCode];
//       }

//       setFormData((prev) => ({ ...prev, branch }));
//     }
//   };

//   const handleForm = async (e) => {
//     localStorage.setItem("registeredName", formData.name);
//     e.preventDefault();
//     // console.log(formData);
//     if (!valid()) return;
//     setLoading(true);
//     try {
//       const formDataToSend = new FormData();
//       Object.entries(formData).forEach(([key, value]) =>
//         formDataToSend.append(key, value)
//       );

//       const response = await axios.post(
//         "https://registerbackend-4dz1.onrender.com/api/register/signUp",
        
//         // "https://register-backend-rouge.vercel.app/api/register/signUp",
//         // "http://localhost:5000/api/register/signUp",
//         formDataToSend,
//         {
//           withCredentials: true,
//         }
//       );
//       if (response?.data?.success === true) {
//         setSuccess(true);
//       }
//       // console.log(response);

//       toast.success(response?.data?.message);
//       clearField();
//     } catch (error) {
//       // console.log(error);

//       if (error?.response) {
//         const errorMessage =
//           error?.response?.data?.message || "An unexpected error occurred";

//         if (error?.response?.status === 429) {
//           toast.error("Too many requests. Try again after 15 minutes");
//         } else if (error?.response?.status === 400) {
//           toast.error(errorMessage);
//         } else if (error?.response?.status === 500) {
//           toast.error(errorMessage);
//         } else {
//           toast.error(errorMessage);
//         }
//       } else {
//         toast.error("An unexpected error occurred. Please try again");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const valid = () => {
//     //     const nameParts = formData.name.trim().split(" ");
//     // if(formData.name){
//     // if (nameParts.length === 1) {
//     //   toast.error("Last name is required after space");
//     //   return false;
//     // }
//     // }

//     if (formData.name) {
//       if (!/^[a-zA-Z\s]*$/i.test(formData.name)) {
//         toast.error("Invalid Student Name");
//         return false;
//       }
//     }

//     if (formData.studentNumber) {
//       if (
//         !(
//           formData.studentNumber.startsWith("24") &&
//           (formData.studentNumber.length === 7 ||
//             formData.studentNumber.length === 8)
//         )
//       ) {
//         toast.error("Invalid Student Number");
//         return false;
//       }
//     }

//     if (formData.email && formData.studentNumber) {
//       const emailRegex = new RegExp(
//         `^[a-zA-Z]{2,20}${formData.studentNumber}@akgec\\.ac\\.in$`
//       );
//       if (!emailRegex.test(formData.email)) {
//         toast.error("Invalid Student Email");
//         return false;
//       }
//     }

//     // if (formData.studentNumber) {
//     //   if (
//     //     !/^(24)(00|10|1[123]|15[34]|16[49]|31|40|15)([0-9]{3,8})$/.test(
//     //       formData.studentNumber
//     //     )
//     //   ) {
//     //     toast.error("Invalid Student Number");
//     //     return false;
//     //   }
//     // }

//     if (formData.phoneNumber) {
//       if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
//         toast.error("Invalid Phone Number");
//         return false;
//       }
//     }

//     if (formData.transactionID) {
//       if (
//         formData.transactionID.length < 5 ||
//         formData.transactionID.length > 25
//       ) {
//         toast.error("Invalid Transaction ID");
//         return false;
//       }
//     }

//     // const code = formData.studentNumber.slice(2, 5);
//     // const expectedBranch = branchMap[code];
//     // if (expectedBranch && expectedBranch !== formData.branch) {
//     //   toast.error(
//     //     `Student Number doesn't match selected branch. Did you mean ${expectedBranch}?`
//     //   );
//     //   return false;
//     // }

//     return true;
//   };

//   const handleVerify = () => {
//     if(!formData.email){
//       toast.error("Please enter your email id to verify");
//       return false
//     }
//     if (!valid()) return;
//     setShowEmail(true);
//     VerifyOtp();
//   };

//   const clearField = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phoneNumber: "",
//       studentNumber: "",
//       branch: "",
//       section: "",
//       gender: "",
//       residence: "",
//       recaptchaValue: "",
//       transactionID: "",
//       // file: null,
//     });

//     // setFileName("payment Screenshot");
//     if (reset.current) {
//       reset.current.reset();
//     }
//   };
//   const captureRef = useRef();
//   const handleScreenshot = () => {
//     html2canvas(captureRef.current).then((canvas) => {
//       const link = document.createElement("a");
//       link.download = "QRcode.png";
//       link.href = canvas.toDataURL();
//       link.click();
//     });
//   };

//   return (
//     <div className={`signup z-50 ${!showEmail ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""}  overflow-hidden pb-10  w-full sm:max-w-[92vw] m-auto  bg-black gap-1 sm:px-5 p-1.5 flex text-white justify-center items-center sm:py-7  sm:flex-row flex-col`}>
//       {/* <ParticlesBackground/> */}
//       <Toaster />
//       {!success ? (
//         <>
//           <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24  lg:flex w-full  mt-3 ">
//             <img
//               src="/post4.png"
//               className="object-cover sm:mb-10   h-full w-full"
//               alt=""
//             />
//           </div>

//           <div className="right  sm:w-[800px]   w-full overflow-x-hidden  sm:px-14">
//             <form onSubmit={handleForm} className="sm:mt-2   w-full space-y-5">
//               <div className="fields shad w-full flex bg-[#000814]   border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
//                 {/* <div className="fields w-full flex bg-[#000814] border-white rounded-2xl  shadow-[0_10px_20px_rgba(255,255,255,0.6)] sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4 max-[350px]:p-4 p-3 flex-col gap-3"> */}

//                 <div className="flex justify-between mt-3 sm:mt-5 items-center flex-col">
//                   <p className="text-3xl font-poppins text-white text-center font-bold  flex justify-center items-center">
//                     Registration Form
//                   </p>
//                   <p className="head2 text-lg font-bold text-[#AFB2BF] mt-0 mb-2 flex justify-center items-center">
//                     NIMBUS 2.0
//                   </p>
//                 </div>

//                 <div className="name">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Enter Name"
//                     className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                 </div>

//                 <div className="studentNumber">
//                   <input
//                     type="number"
//                     name="studentNumber"
//                     value={formData.studentNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter Student Number"
//                     className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                 </div>

//                 <div className="email relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="Enter College Email Id"
//                     className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                 </div>

//                 {showEmail && (
//                   <div className="absolute bg-black bg-opacity-70 backdrop-blur-sm h-[100%] inset-0 z-50 mt-[500px] sm:mt-0 flex items-center justify-center">
//                     <div className="relative flex flex-col gap-2 items-center w-full sm:w-[90%] md:w-[60%] lg:w-[40%] bg-[#1a1f2e] border border-gray-600 p-6 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] mx-4">
//                       <button
//                         className="absolute top-3 right-3 text-white hover:text-red-500 text-xl"
//                         onClick={() => setShowEmail(false)}
//                         aria-label="Close"
//                       >
//                         <ImCross />
//                       </button>

//                       <div className="text-2xl sm:text-3xl font-bold text-white text-center">
//                         Verify OTP
//                       </div>

//                       <div className="p sm:text-sm  text-xs text-[#CBD5E1] text-center px-2">
//                         We've sent a One-Time Password (OTP) to your registered
//                         email address. Please check your inbox and enter the OTP
//                         in the field below to proceed. You have 5 minutes to enter a otp.
//                       </div>

//                       {/* <input
//                         type="number"
//                         name="otp"
//                         value={formData.otp}
//                         onChange={handleInputChange}
//                         placeholder="Enter OTP here"
//                         className="w-full h-[50px] mt-8 px-4 rounded-xl bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] placeholder:text-[#6c7383] placeholder:font-semibold font-semibold border border-[#2c3344] focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
//                       /> */}
//                       <div className="otp flex  justify-center items-center gap-2 mt-4">
//                         <OtpInput
//                           value={formData.otp}
//                           // onChange={handleInputChange}
//                           onChange={(otp) => setFormData((prev) => ({ ...prev, otp }))}
//                           name = "otp"
//                           numInputs={5}
//                           renderInput={(props) => (
//                             <input
//                               {...props}
//                               placeholder="-"
//                               className="hadow-[0px_1px_2px_rgba(255,255,255,0.6)] h-[80px] bg-white text-black font-bold rounded-lg m-2"
//                             />
//                           )}
//                           className=" w-56 sm:w-96 bg-white m-4"
//                           inputStyle={{
//                             // width: "3.2rem",
//                             // height: "3.2rem",
//                             width: 'clamp(2.4rem, 10vw, 3.2rem)',
//                             height: 'clamp(2.8rem, 12vw, 3.2rem)',
//                             fontSize: '1.25rem',
//                           }}
//                           shouldAutoFocus
//                         />
//                       </div>
//                       <div className="w-full flex justify-end">
//                         <div
//                           onClick={() => VerifyOtp()} // replace with your function
//                           className="text-violet-500 cursor-pointer mr-4 hover:text-violet-400 text-lg font-semibold transition"
//                         >
//                           Resend OTP
//                         </div>
//                       </div>

//                       <div className="pa w-full flex lg:flex-row flex-col gap-4">
//                         {/* recaptcha */}
//                         <div className="block gap-2 mt-4  cursor-pointer w-full">
//                           <div className="flex justify-center  items-center  z-50">
//                             <ReCAPTCHA
//                               sitekey="6Le3-QArAAAAADn9ym4vDs6qMQN3DpD0yZe183m-"
//                               onChange={handleRecaptchaChange}
//                               className="cursor-pointer "
//                               ref={reset}
//                             />
//                           </div>
//                         </div>

//                         <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-4  items-center">
//                           <motion.button
//                             whileHover={{
//                               scale: 1,
//                               boxShadow: "0px 0px 10px #8a2be2",
//                             }}
//                             transition={{ duration: 0.3 }}
//                             className="bg-violet-600 hover:bg-violet-800 lg:h-[74px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
//                           >
//                             {loading ? (
//                               <div className="flex justify-center items-center space-x-2">
//                                 <div className="w-4 h-4 bg-white rounded-full animate-bounce4"></div>
//                                 <div className="w-4 h-4 bg-white rounded-full animate-bounce5 animation-delay-200"></div>
//                                 <div className="w-4 h-4 bg-white rounded-full animate-bounce6 animation-delay-400"></div>
//                               </div>
//                             ) : (
//                               "Submit"
//                             )}
//                           </motion.button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

              

//                 {/* branch , section */}
//                 <div className="two flex-col sm:flex-row flex gap-4 w-full">
//                   <div className="section w-full sm:w-1/2">
//                     <select
//                       name="section"
//                       value={formData.section}
//                       onChange={handleInputChange}
//                       className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                     >
//                       <option value="section">Sections</option>
//                       <option value="1">S1</option>
//                       <option value="2">S2</option>
//                       <option value="3">S3</option>
//                       <option value="4">S4</option>
//                       <option value="5">S5</option>
//                       <option value="6">S6</option>
//                       <option value="7">S7</option>
//                       <option value="8">S8</option>
//                       <option value="9">S9</option>
//                       <option value="10">S10</option>
//                       <option value="11">S11</option>
//                       <option value="12">S12</option>
//                       <option value="13">S13</option>
//                       <option value="14">S14</option>
//                       <option value="15">S15</option>
//                       <option value="16">S16</option>
//                       <option value="17">S17</option>
//                       <option value="18">S18</option>
//                       <option value="19">S19</option>
//                       <option value="20">S20</option>
//                     </select>
//                   </div>

//                   <div className="section w-full sm:w-1/2">
//                     <select
//                       name="branch"
//                       value={formData.branch}
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
//                   </div>
//                 </div>

//                 {/* phoneNumber */}
//                 <div className="phoneNumber">
//                   <input
//                     type="number"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter Phone Number"
//                     className=" h-[54px] w-full bg-[#161D29]   text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                   />
//                 </div>

//                 {/* gender */}
//                 <div className="gender">
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
//                 </div>

//                 {/* residence */}
//                 <div className="residence">
//                   <select
//                     name="residence"
//                     value={formData.residence}
//                     onChange={handleInputChange}
//                     className="h-[54px]  w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)] flex justify-center items-center"
//                   >
//                     <option value="">Select Residence</option>
//                     <option value="Hosteller">Hosteller</option>
//                     <option value="DayScholar">DayScholar</option>
//                   </select>
//                 </div>

//                 <div className="f sm:flex gap-3">
//                   <div
//                     onClick={() => setQRCode(true)}
//                     className="transactionID cursor-pointer w-full   sm:w-1/2"
//                   >
//                     <span
//                       type="transactionID"
//                       name="transactionID"
//                       value={formData.transactionID}
//                       onChange={handleInputChange}
//                       placeholder="Pay ₹100"
//                       className=" h-[54px] w-full bg-violet-700 hover:bg-[#1f2738] flex justify-start items-center text-white font-bold placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                     >
//                       Pay ₹100
//                     </span>
//                   </div>
//                   <div className="transactionID mt-4 sm:mt-0 sm:w-1/2 w-full">
//                     <input
//                       type="transactionID"
//                       name="transactionID"
//                       value={formData.transactionID}
//                       onChange={handleInputChange}
//                       placeholder="Enter Transaction ID"
//                       className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
//                     />
//                   </div>
//                 </div>

//                 {QRCode && (
//                   // <div className=" flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
//                   <div className="absolute  inset-0 z-50 pb-8 -translate-x-1/2 sm:mt-0  -translate-y-1/2 top-[50%] left-[50%] flex items-center justify-center bg-black bg-opacity-70 h-[100%]  w-full backdrop-blur-sm">
//                     <div className="bg-white p-8 mt-[800px] sm:mt-0 rounded-2xl w-[88vw] sm:w-[500px] shadow-2xl  text-center relative">
//                       {/* Close Button */}
//                       <button
//                         className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
//                         onClick={() => setQRCode(false)}
//                         aria-label="Close"
//                       >
//                         <ImCross />
//                       </button>

//                       <h3 className="text-black mb-4 text-xl sm:text-3xl font-bold">
//                         Proceed to Payment
//                       </h3>
//                       <p className="text-gray-600 mb-6 text-xs sm:text-sm">
//                         Please scan the QR code below using any UPI app to pay
//                         ₹100. After the payment is completed, enter your
//                         Transaction ID in the registration form to complete the
//                         process.
//                       </p>

//                       <div className="flex flex-col gap-2 text-black text-sm sm:text-base font-medium mb-6">
//                         <p>1. Scan the QR code</p>
//                         <p>2. Pay ₹100 as the registration fee</p>
//                         <p>3. Enter the Transaction ID in the form</p>
//                       </div>

//                       <img
//                         ref={captureRef}
//                         src="QR.jpg"
//                         alt="QR Code"
//                         className="mx-auto h-56 w-auto object-contain rounded-lg border border-gray-300"
//                       />
//                       <p
//                         onClick={handleScreenshot}
//                         className="text-indigo-800 mt-1 italic underline cursor-pointer font-bold"
//                       >
//                         Download QR Code
//                       </p>

//                       <div className="p text-lg text-black mt-4 mb-4 font-bold">
//                         Or
//                       </div>

//                       <div className="p text-black text-md sm:text-xl font-semibold">
//                         Go for Offline Payment (no need to add transactionID)
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div className="pa w-full flex lg:flex-row flex-col gap-4">
//                   <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-4  items-center">
//                     <motion.div
//                       whileHover={{
//                         scale: 1,
//                         boxShadow: "0px 0px 10px #8a2be2",
//                       }}
//                       onClick={handleVerify}
//                       transition={{ duration: 0.3 }}
//                       className="bg-violet-600 cursor-pointer flex justify-center items-center hover:bg-violet-800 lg:h-[55px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
//                     >
//                       Verify Email Id
//                     </motion.div>
//                   </div>
//                 </div>

//                 {/* //button */}
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



// export default RegisterOpen;





import React, { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Loader } from "./Loading";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "./ui/particles";
import Meteors from "./ui/meteors";
import { ImCross } from "react-icons/im";
import html2canvas from "html2canvas";
import Confetti from "./ui/confetti";
import Success from "./Success";
import OtpInput from "react-otp-input";
const RegisterOpen = () => {
  const reset = useRef("");
  const [loading, setLoading] = useState(false);
  const [otploading, setOtpLoading] = useState(false);
  const [QRCode, setQRCode] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  // const [fileName, setFileName] = useState("Payment Screenshot");

  const branchMap = {
    10: "CSE(core)",
    11: "CSIT",
    12: "CS",
    13: "IT",
    164: "AIML",
    154: "CSE(DS)",
    153: "CSE(AIML)",
    169: "CSE(H)",
    20: "EN",
    31: "ECE",
    40: "ME",
    "00": "CE",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    studentNumber: "",
    branch: "",
    section: "",
    gender: "",
    residence: "",
    recaptchaValue: "",
    transactionID: "",
    otp: "",
    // file: null,
  });

  const VerifyOtp = async () => {
    const toastID = toast.loading("Please wait...");
    setOtpLoading(true);
  
    try {
      const response = await axios.post(
        // "http://localhost:5000/api/register/otp",
        "https://registerbackend-4dz1.onrender.com/api/register/otp",
        {
          email: formData.email,
          otp: formData.otp,
        },
        {
          withCredentials: true,  
        }
      );
      // console.log(response);
      
  
    toast.success(response?.data?.message, {id : toastID})
  
    } catch (err) {
      // console.log(err);
      
      toast.error(err?.response?.data?.message, {id : toastID})
    } finally {
      setOtpLoading(false);
    }
  };
  

  const handleRecaptchaChange = (token) => {
    // console.log(token);

    setFormData((prev) => ({ ...prev, recaptchaValue: token }));
  };

  // const handleFileChange = (e) => {
  //   setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFileName(file.name);
  //   }
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "studentNumber" && value.length >= 5) {
      const threeDigitCode = value.slice(2, 5);
      const twoDigitCode = value.slice(2, 4);

      let branch = "";
      if (branchMap[threeDigitCode]) {
        branch = branchMap[threeDigitCode];
      } else if (branchMap[twoDigitCode]) {
        branch = branchMap[twoDigitCode];
      }

      setFormData((prev) => ({ ...prev, branch }));
    }
  };

  const handleForm = async (e) => {
    localStorage.setItem("registeredName", formData.name);
    e.preventDefault();
    // console.log(formData);
    if (!valid()) return;
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        formDataToSend.append(key, value)
      );

      const response = await axios.post(
        "https://registerbackend-4dz1.onrender.com/api/register/signUp",
        
        // "https://register-backend-rouge.vercel.app/api/register/signUp",
        // "http://localhost:5000/api/register/signUp",
        formDataToSend,
        {
          withCredentials: true,
        }
      );
      if (response?.data?.success === true) {
        setSuccess(true);
      }
      // console.log(response);

      toast.success(response?.data?.message);
      clearField();
    } catch (error) {
      // console.log(error);

      if (error?.response) {
        const errorMessage =
          error?.response?.data?.message || "An unexpected error occurred";

        if (error?.response?.status === 429) {
          toast.error("Too many requests. Try again after 15 minutes");
        } else if (error?.response?.status === 400) {
          toast.error(errorMessage);
        } else if (error?.response?.status === 500) {
          toast.error(errorMessage);
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error("An unexpected error occurred. Please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const valid = () => {
    //     const nameParts = formData.name.trim().split(" ");
    // if(formData.name){
    // if (nameParts.length === 1) {
    //   toast.error("Last name is required after space");
    //   return false;
    // }
    // }

    if(!formData.name || !formData.studentNumber || !formData.email || !formData.phoneNumber || !formData.transactionID){
      toast.error("Please fill all the fields");
      return false
    }

    if (formData.name) {
      if (!/^[a-zA-Z\s]*$/i.test(formData.name)) {
        toast.error("Invalid Student Name");
        return false;
      }
    }

    if (formData.studentNumber) {
      if (
        !(
          formData.studentNumber.startsWith("24") &&
          (formData.studentNumber.length === 7 ||
            formData.studentNumber.length === 8)
        )
      ) {
        toast.error("Invalid Student Number");
        return false;
      }
    }

    if (formData.email && formData.studentNumber) {
      const emailRegex = new RegExp(
        `^[a-zA-Z]{2,20}${formData.studentNumber}@akgec\\.ac\\.in$`
      );
      if (!emailRegex.test(formData.email)) {
        toast.error("Invalid Student Email");
        return false;
      }
    }

    // if (formData.studentNumber) {
    //   if (
    //     !/^(24)(00|10|1[123]|15[34]|16[49]|31|40|15)([0-9]{3,8})$/.test(
    //       formData.studentNumber
    //     )
    //   ) {
    //     toast.error("Invalid Student Number");
    //     return false;
    //   }
    // }

    if (formData.phoneNumber) {
      if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
        toast.error("Invalid Phone Number");
        return false;
      }
    }

    if (formData.transactionID) {
      if (
        formData.transactionID.length < 5 ||
        formData.transactionID.length > 25
      ) {
        toast.error("Invalid Transaction ID");
        return false;
      }
    }

    // const code = formData.studentNumber.slice(2, 5);
    // const expectedBranch = branchMap[code];
    // if (expectedBranch && expectedBranch !== formData.branch) {
    //   toast.error(
    //     `Student Number doesn't match selected branch. Did you mean ${expectedBranch}?`
    //   );
    //   return false;
    // }

    return true;
  };

  const handleVerify = () => {
    if(!formData.email){
      toast.error("Please enter your email id to verify");
      return false
    }
    if (!valid()) return;
    setShowEmail(true);
    VerifyOtp();
  };

  const clearField = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      studentNumber: "",
      branch: "",
      section: "",
      gender: "",
      residence: "",
      recaptchaValue: "",
      transactionID: "",
      // file: null,
    });

    // setFileName("payment Screenshot");
    if (reset.current) {
      reset.current.reset();
    }
  };
  const captureRef = useRef();
  const handleScreenshot = () => {
    html2canvas(captureRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "QRcode.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className={`signup z-50 ${!showEmail ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""}  overflow-hidden pb-10  w-full sm:max-w-[92vw] m-auto  bg-black gap-1 sm:px-5 p-1.5 flex text-white justify-center items-center sm:py-7  sm:flex-row flex-col`}>
      <Toaster />
      {!success ? (
        <>
          <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24  lg:flex w-full  mt-3 ">
            <img
              src="/post4.png"
              className="object-cover sm:mb-10   h-full w-full"
              alt=""
            />
          </div>

          <div className="right  sm:w-[800px]   w-full overflow-x-hidden  sm:px-14">
            <form onSubmit={handleForm} className="sm:mt-2   w-full space-y-5">
              <div className="fields shad w-full flex bg-[#000814]   border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
                {/* <div className="fields w-full flex bg-[#000814] border-white rounded-2xl  shadow-[0_10px_20px_rgba(255,255,255,0.6)] sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4 max-[350px]:p-4 p-3 flex-col gap-3"> */}

                <div className="flex justify-between mt-3 sm:mt-5 items-center flex-col">
                  <p className="text-3xl font-poppins text-white text-center font-bold  flex justify-center items-center">
                    Registration Form
                  </p>
                  <p className="head2 text-lg font-bold text-[#AFB2BF] mt-0 mb-2 flex justify-center items-center">
                    NIMBUS 2.0
                  </p>
                </div>

                <div className="name">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Name"
                    className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                </div>

                <div className="studentNumber">
                  <input
                    type="number"
                    name="studentNumber"
                    value={formData.studentNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Student Number"
                    className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                </div>

                <div className="email relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter College Email Id"
                    className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                </div>

                {showEmail && (
                  <div className="absolute bg-black bg-opacity-70 backdrop-blur-sm h-[100%] inset-0 z-50 mt-[500px] sm:mt-0 flex items-center justify-center">
                    <div className="relative flex flex-col gap-2 items-center w-full sm:w-[90%] md:w-[60%] lg:w-[40%] bg-[#1a1f2e] border border-gray-600 p-6 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] mx-4">
                      <button
                        className="absolute top-3 right-3 text-white hover:text-red-500 text-xl"
                        onClick={() => setShowEmail(false)}
                        aria-label="Close"
                      >
                        <ImCross />
                      </button>

                      <div className="text-2xl sm:text-3xl font-bold text-white text-center">
                        Verify OTP
                      </div>

                      <div className="p sm:text-sm  text-xs text-[#CBD5E1] text-center px-2">
                        We've sent a One-Time Password (OTP) to your registered
                        email address. Please check your inbox and enter the OTP
                        in the field below to proceed. You have 5 minutes to enter a otp.
                      </div>

                     
                      <div className="otp flex  justify-center items-center gap-2 mt-4">
                        <OtpInput
                          value={formData.otp}
                          // onChange={handleInputChange}
                          onChange={(otp) => setFormData((prev) => ({ ...prev, otp }))}
                          name = "otp"
                          numInputs={5}
                          renderInput={(props) => (
                            <input
                              {...props}
                              placeholder="-"
                              className="hadow-[0px_1px_2px_rgba(255,255,255,0.6)] h-[80px] bg-white text-black font-bold rounded-lg m-2"
                            />
                          )}
                          className=" w-56 sm:w-96 bg-white m-4"
                          inputStyle={{
                            // width: "3.2rem",
                            // height: "3.2rem",
                            width: 'clamp(2.4rem, 10vw, 3.2rem)',
                            height: 'clamp(2.8rem, 12vw, 3.2rem)',
                            fontSize: '1.25rem',
                          }}
                          shouldAutoFocus
                        />
                      </div>
                      <div className="w-full flex justify-end">
                        <div
                          onClick={() => VerifyOtp()} // replace with your function
                          className="text-violet-500 cursor-pointer mr-4 hover:text-violet-400 text-lg font-semibold transition"
                        >
                          Resend OTP
                        </div>
                      </div>

                      <div className="pa w-full flex lg:flex-row flex-col gap-4">
                        {/* recaptcha */}
                        <div className="block gap-2 mt-4  cursor-pointer w-full">
                          <div className="flex justify-center  items-center  z-50">
                            <ReCAPTCHA
                              sitekey="6Le3-QArAAAAADn9ym4vDs6qMQN3DpD0yZe183m-"
                              onChange={handleRecaptchaChange}
                              className="cursor-pointer "
                              ref={reset}
                            />
                          </div>
                        </div>

                        <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-4  items-center">
                          <motion.button
                            whileHover={{
                              scale: 1,
                              boxShadow: "0px 0px 10px #8a2be2",
                            }}
                            transition={{ duration: 0.3 }}
                            className="bg-violet-600 hover:bg-violet-800 lg:h-[74px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
                          >
                            {loading ? (
                              <div className="flex justify-center items-center space-x-2">
                                <div className="w-4 h-4 bg-white rounded-full animate-bounce4"></div>
                                <div className="w-4 h-4 bg-white rounded-full animate-bounce5 animation-delay-200"></div>
                                <div className="w-4 h-4 bg-white rounded-full animate-bounce6 animation-delay-400"></div>
                              </div>
                            ) : (
                              "Submit"
                            )}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              

                {/* branch , section */}
                <div className="two flex-col sm:flex-row flex gap-4 w-full">
                  <div className="section w-full sm:w-1/2">
                    <select
                      name="section"
                      value={formData.section}
                      onChange={handleInputChange}
                      className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                    >
                      <option value="section">Sections</option>
                      <option value="1">S1</option>
                      <option value="2">S2</option>
                      <option value="3">S3</option>
                      <option value="4">S4</option>
                      <option value="5">S5</option>
                      <option value="6">S6</option>
                      <option value="7">S7</option>
                      <option value="8">S8</option>
                      <option value="9">S9</option>
                      <option value="10">S10</option>
                      <option value="11">S11</option>
                      <option value="12">S12</option>
                      <option value="13">S13</option>
                      <option value="14">S14</option>
                      <option value="15">S15</option>
                      <option value="16">S16</option>
                      <option value="17">S17</option>
                      <option value="18">S18</option>
                      <option value="19">S19</option>
                      <option value="20">S20</option>
                    </select>
                  </div>

                  <div className="section w-full sm:w-1/2">
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="h-[54px] w-full  text-[#AFB2BF] bg-[#161D29] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                    >
                      <option value="">Branch</option>
                      <option value="CSE(core)">CSE</option>
                      <option value="CSE(AIML)">CSE(AIML)</option>
                      <option value="CSE(DS)">CSE(DS)</option>
                      <option value="CSE(H)">CSE(Hindi)</option>
                      <option value="CS">CS</option>
                      <option value="IT">IT</option>
                      <option value="CSIT">CSIT</option>
                      <option value="AIML">AIML</option>
                      <option value="ECE">ECE</option>
                      <option value="EN">EN</option>
                      <option value="ME">ME</option>
                      <option value="CE">CE</option>
                    </select>
                  </div>
                </div>

                {/* phoneNumber */}
                <div className="phoneNumber">
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    className=" h-[54px] w-full bg-[#161D29]   text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                </div>

                {/* gender */}
                <div className="gender">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* residence */}
                <div className="residence">
                  <select
                    name="residence"
                    value={formData.residence}
                    onChange={handleInputChange}
                    className="h-[54px]  w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)] flex justify-center items-center"
                  >
                    <option value="">Select Residence</option>
                    <option value="Hosteller">Hosteller</option>
                    <option value="DayScholar">DayScholar</option>
                  </select>
                </div>

                <div className="f sm:flex gap-3">
                  <div
                    onClick={() => setQRCode(true)}
                    className="transactionID cursor-pointer w-full   sm:w-1/2"
                  >
                    <span
                      type="transactionID"
                      name="transactionID"
                      value={formData.transactionID}
                      onChange={handleInputChange}
                      placeholder="Pay ₹100"
                      className=" h-[54px] w-full bg-violet-700 hover:bg-[#1f2738] flex justify-start items-center text-white font-bold placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                    >
                      Pay ₹100
                    </span>
                  </div>
                  <div className="transactionID mt-4 sm:mt-0 sm:w-1/2 w-full">
                    <input
                      type="transactionID"
                      name="transactionID"
                      value={formData.transactionID}
                      onChange={handleInputChange}
                      placeholder="Enter Transaction ID"
                      className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                    />
                  </div>
                </div>

                {QRCode && (
                  // <div className=" flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
                  <div className="absolute  inset-0 z-50 pb-8 -translate-x-1/2 sm:mt-0  -translate-y-1/2 top-[50%] left-[50%] flex items-center justify-center bg-black bg-opacity-70 h-[100%]  w-full backdrop-blur-sm">
                    <div className="bg-white p-8 mt-[800px] sm:mt-0 rounded-2xl w-[88vw] sm:w-[500px] shadow-2xl  text-center relative">
                      {/* Close Button */}
                      <button
                        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                        onClick={() => setQRCode(false)}
                        aria-label="Close"
                      >
                        <ImCross />
                      </button>

                      <h3 className="text-black mb-4 text-xl sm:text-3xl font-bold">
                        Proceed to Payment
                      </h3>
                      <p className="text-gray-600 mb-6 text-xs sm:text-sm">
                        Please scan the QR code below using any UPI app to pay
                        ₹100. After the payment is completed, enter your
                        Transaction ID in the registration form to complete the
                        process.
                      </p>

                      <div className="flex flex-col gap-2 text-black text-sm sm:text-base font-medium mb-6">
                        <p>1. Scan the QR code</p>
                        <p>2. Pay ₹100 as the registration fee</p>
                        <p>3. Enter the Transaction ID in the form</p>
                      </div>

                      <img
                        ref={captureRef}
                        src="/qr2.jpg"
                        alt="QR Code"
                        className="mx-auto h-56 w-auto object-contain rounded-lg border border-gray-300"
                      />
                      <p
                        onClick={handleScreenshot}
                        className="text-indigo-800 mt-1 italic underline cursor-pointer font-bold"
                      >
                        Download QR Code
                      </p>

                      <div className="p text-lg text-black mt-4 mb-4 font-bold">
                        Or
                      </div>

                      <div className="p text-black text-md sm:text-xl font-semibold">
                        Go for Offline Payment (no need to add transactionID)
                      </div>
                    </div>
                  </div>
                )}

                <div className="pa w-full flex lg:flex-row flex-col gap-4">
                  <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-4  items-center">
                    <motion.div
                      whileHover={{
                        scale: 1,
                        boxShadow: "0px 0px 10px #8a2be2",
                      }}
                      onClick={handleVerify}
                      transition={{ duration: 0.3 }}
                      className="bg-violet-600 cursor-pointer flex justify-center items-center hover:bg-violet-800 lg:h-[55px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
                    >
                      Verify Email Id
                    </motion.div>
                  </div>
                </div>

                {/* //button */}
              </div>
            </form>
          </div>
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default RegisterOpen;