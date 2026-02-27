import React, { useEffect, useState } from "react";
import video from "../images/contactvideo.mp4";
import ShimmerButton from "./ui/shimmer-button";
import Particles from "./ui/particles";
import ShineBorder from "./ui/shine-border";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { MdMessage } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Map from "./Map";

// Import image
import image1 from "/image.webp";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export const Contact4 = () => {
  // FIX: Added [] so this only runs ONCE on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email });

    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setEmailError("");
  };

  return (
    <>
      <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden ">
        <div className="relative z-10">
          {/* --- Hero Section --- */}
          <div
            className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative z-10 border-2 border-white px-8 py-3 animate-drop rounded-md">
              <h1 className="text-2xl md:text-4xl font-bold tracking-widest ">
                CONTACT US
              </h1>
            </div>
          </div>

          {/* --- Info Section --- */}
          <div className="max-w-6xl mx-auto px-4 py-16 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Particles quantity={190} size={1} color="#ffffff" className="w-full h-full" />
            </div>
            <h2 className="text-center text-violet-500 text-2xl font-serif mb-12 italic relative z-10">
              Get in touch with us !
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <div className="flex flex-col items-center space-y-4">
                <Phone className="text-violet-500 w-8 h-8" />
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400 text-sm">
                  Phone - 8707074420
                  <br />
                  Phone - 8433428790
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 border-x-0 md:border-x border-gray-700 px-4">
                <MapPin className="text-violet-500 w-8 h-8" />
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-400 text-sm italic text-center">
                  3rd Floor, CSIT Block
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <Mail className="text-violet-500 w-8 h-8" />
                <h3 className="text-xl font-semibold">E-mail</h3>
                <p className="text-gray-400 text-sm">
                  cloudcomputing@akgec.ac.in
                </p>
              </div>
            </div>

            {/* --- Contact Form --- */}
            <div className="mt-12 sm:mt-16 md:mt-20 
                w-full 
                max-w-xl md:max-w-2xl 
                mx-auto 
                relative z-10 
                px-4 sm:px-6">

  <p className="text-center text-xs sm:text-sm md:text-base 
                font-semibold mb-6 sm:mb-8 
                tracking-wider leading-relaxed">
    IF YOU GOT ANY QUESTIONS
    <br className="hidden sm:block" />
    PLEASE DO NOT HESITATE TO SEND US A MESSAGE
  </p>

  <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleInputChange}
      className="w-full bg-[#2d3238] p-3 sm:p-4 
                 rounded-lg border border-gray-700 
                 text-white placeholder-gray-500 
                 focus:outline-none focus:border-violet-500 
                 focus:ring-2 focus:ring-violet-500/50 
                 text-sm sm:text-base"
    />

    <div>
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleEmailChange}
        className={`w-full bg-[#2d3238] p-3 sm:p-4 
                   rounded-lg border text-white 
                   placeholder-gray-500 
                   focus:outline-none focus:ring-2 
                   focus:ring-violet-500/50 
                   text-sm sm:text-base 
                   ${emailError
                     ? "border-red-500 focus:border-red-500"
                     : "border-gray-700 focus:border-violet-500"}`}
      />
      {emailError && (
        <p className="text-red-500 text-xs mt-2">{emailError}</p>
      )}
    </div>

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleInputChange}
      className="w-full bg-[#2d3238] p-3 sm:p-4 
                 rounded-lg border border-gray-700 
                 text-white placeholder-gray-500 
                 focus:outline-none focus:border-violet-500 
                 focus:ring-2 focus:ring-violet-500/50 
                 text-sm sm:text-base"
    />

    <textarea
      name="message"
      rows="4"
      placeholder="Message"
      value={formData.message}
      onChange={handleInputChange}
      className="w-full bg-[#2d3238] p-3 sm:p-4 
                 rounded-lg border border-gray-700 
                 text-white placeholder-gray-500 
                 focus:outline-none focus:border-violet-500 
                 focus:ring-2 focus:ring-violet-500/50 
                 resize-none text-sm sm:text-base"
    ></textarea>

    <div className="flex justify-center mt-6 sm:mt-8">
      <button
        type="submit"
        className="w-full sm:w-auto 
                   bg-[#a97ad4] hover:bg-[#9c6ac4] 
                   text-black font-bold 
                   py-3 px-6 sm:px-12 
                   transition-all duration-300 
                   transform hover:scale-105 active:scale-95 
                   rounded-lg"
      >
        SEND MESSAGE →
      </button>
    </div>

  </form>
</div>
          </div>

          {/* --- Social Links & Map Section --- */}
          <div className="py-10 text-center relative z-10">
            <h2 className="text-violet-500 text-xl font-serif mb-6 italic">
              Connect with us !
            </h2>
            <div className="flex justify-center space-x-4 mb-12">
              <Facebook className="w-6 h-6 text-violet-500 cursor-pointer hover:text-violet-400 hover:scale-125 transition-all duration-300" 
               />
              <Linkedin className="w-6 h-6 text-violet-500 cursor-pointer hover:text-violet-400 hover:scale-125 transition-all duration-300" />
              <Twitter className="w-6 h-6 text-violet-500 cursor-pointer hover:text-violet-400 hover:scale-125 transition-all duration-300" />
              {/* Instagram Link Added Here */}
  <a
    href="https://www.instagram.com/ccc_akgec/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-6 h-6 text-violet-500 cursor-pointer hover:text-violet-400 hover:scale-125 transition-all duration-300" />
  </a>
            </div>

            <div className="w-full flex items-center justify-center overflow-hidden py-4">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact4;