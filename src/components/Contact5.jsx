import React, { useEffect, useState, useRef } from "react";
import Particles from "./ui/particles";
import { motion, AnimatePresence } from "framer-motion";
import Map from "./Map";
import image1 from "/image.webp";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Phone,
  MapPin,
  Mail,
  CheckCircle,
} from "lucide-react";

export const Contact5 = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  const text = "SEND A MESSAGE";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState("");
  const resetRecaptcha = useRef();

  const handleRecaptchaChange = (token) => {
    setRecaptchaResponse(token);
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (/\d/.test(formData.name)) {
      toast.error("Name can't contain numbers.");
      tempErrors.name = "Name can't contain numbers";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.trim().length < 10) tempErrors.message = "Message too short";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      const { [name]: _, ...rest } = errors;
      setErrors(rest);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recaptchaResponse) {
      toast.error("Please verify reCAPTCHA");
      return;
    }

    if (validate()) {
      setIsLoading(true);
      
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject, // Fallback: API requires phone field
        message: "Subject: " + formData.subject + " | Message: " + formData.message,
        recaptchaResponse
      };

      try {
        const response = await axios.post(
          "https://contact-ccc-backend.vercel.app/api/contact",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );
        
        toast.success(response?.data?.message || "Message sent successfully!");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
        if (resetRecaptcha.current) resetRecaptcha.current.reset();
        setRecaptchaResponse("");
      } catch (error) {
        console.error("Submission Error:", error);
        if (error?.response?.status === 429) {
          toast.error("Too many requests. Try after 15 minutes");
        } else if (error?.response?.data?.message) {
          // Fallback to exact message returned by API validation failure
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message || "An unexpected error occurred!");
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative w-full bg-black text-white font-sans overflow-hidden">
      <ToastContainer theme="dark" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles quantity={190} size={1} color="#ffffff" />
      </div>
      <div className="relative z-10">

        
          <div
            className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black to-transparent"></div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative z-10 border-2 border-white px-8 py-3 rounded-md"
            >
              <h1 className="text-2xl md:text-4xl font-bold tracking-widest uppercase">
                Contact Us
              </h1>
            </motion.div>
          </div>

          {/* Info */}
          <div className="max-w-6xl mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
            {[
              { icon: Phone, title: "Phone", detail: "8707074420" },
              { icon: MapPin, title: "Address", detail: "3rd Floor, CSIT Block" },
              { icon: Mail, title: "E-mail", detail: "cloudcomputing@akgec.ac.in" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <item.icon className="text-violet-500 w-8 h-8" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>

     
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 max-w-2xl mx-auto relative z-10 px-4"
          >

          
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl md:text-3xl font-bold tracking-widest uppercase 
                bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 
                text-transparent bg-clip-text flex justify-center items-center gap-1"
              >
                {displayText}
                <span className="animate-pulse text-violet-400">|</span>
              </motion.h2>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "140px" }}
                transition={{ duration: 0.8 }}
                className="h-[3px] mx-auto mt-3 rounded-full 
                bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
              />

              <p className="text-gray-500 text-sm mt-4">
                We'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="relative group">
                  <motion.input
                    whileHover={{ y: -3 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-[#1a1d21] p-4 rounded-lg border transition-all duration-300 
                    ${errors.name 
                      ? 'border-red-500' 
                      : 'border-gray-800 group-hover:border-violet-400 focus:border-violet-500 focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]'} 
                    outline-none`}
                  />
                  {errors.name && <span className="text-red-500 text-xs absolute -bottom-4 left-1">{errors.name}</span>}
                </div>

                <div className="relative group">
                  <motion.input
                    whileHover={{ y: -3 }}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-[#1a1d21] p-4 rounded-lg border transition-all duration-300 
                    ${errors.email 
                      ? 'border-red-500' 
                      : 'border-gray-800 group-hover:border-violet-400 focus:border-violet-500 focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]'} 
                    outline-none`}
                  />
                  {errors.email && <span className="text-red-500 text-xs absolute -bottom-4 left-1">{errors.email}</span>}
                </div>
              </div>

              <div className="relative group">
                <motion.input
                  whileHover={{ y: -3 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full bg-[#1a1d21] p-4 rounded-lg border transition-all duration-300 
                  ${errors.subject 
                    ? 'border-red-500' 
                    : 'border-gray-800 group-hover:border-violet-400 focus:border-violet-500 focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]'} 
                  outline-none`}
                />
                {errors.subject && <span className="text-red-500 text-xs absolute -bottom-4 left-1">{errors.subject}</span>}
              </div>

              <div className="relative group">
                <motion.textarea
                  whileHover={{ y: -3 }}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  name="message"
                  rows="4"
                  placeholder="Tell us something..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-[#1a1d21] p-4 rounded-lg border transition-all duration-300 resize-none
                  ${errors.message 
                    ? 'border-red-500' 
                    : 'border-gray-800 group-hover:border-violet-400 focus:border-violet-500 focus:shadow-[0_0_12px_rgba(139,92,246,0.6)]'} 
                  outline-none`}
                />
                {errors.message && <span className="text-red-500 text-xs absolute -bottom-4 left-1">{errors.message}</span>}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex justify-center items-center w-full mt-3">
                  <ReCAPTCHA
                    sitekey="6LfJXpYsAAAAAE7KujCEkjxaNeN3FfJQASPP4tlI"
                    onChange={handleRecaptchaChange}
                    theme="dark"
                    ref={resetRecaptcha}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full md:w-auto text-white font-bold py-4 px-16 rounded-xl shadow-lg transition-all 
                  ${isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-500 shadow-violet-500/20"}`}
                >
                  {isLoading ? "SENDING..." : "SEND MESSAGE →"}
                </motion.button>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-400 font-medium"
                    >
                      <CheckCircle size={18} /> Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>
        </div>

       
        <div className="py-10 text-center bg-black relative">
          <div className="w-full grayscale hover:grayscale-0 transition-all duration-700">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact5;