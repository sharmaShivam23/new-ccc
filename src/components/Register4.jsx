import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// --- IMPORTS ---
import { FormInput, FormSelect } from '../Resgistration/FormComponents';
import { InteractiveBackground } from '../Resgistration/InteractiveBackground';
import { LeftSideContent } from '../Resgistration/LeftSideContent';
import { flickerStyles } from '../Resgistration/AnimationStyles';
import GlowingCursor from '../Resgistration/GlowingCursor';
import Chatbot from '../Resgistration/Chatbot';
import PaymentModal from '../Resgistration/PaymentModal';
import OtpModal from '../Resgistration/OtpModal'; 
import Success4 from '../Resgistration/Success4';

// --- TILT CARD (Visual) ---
const TiltCard = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full h-full flex flex-col perspective-1000 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent rounded-[20px] -z-10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(-50px)" }} />
      <div style={{ transform: "translateZ(30px)", width: "100%", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

// --- CONFIGURATION ---
const API_URL = import.meta.env.VITE_API_URL;
const RECAPTCHA_SITE_KEY = '6LduMGAsAAAAAEEIZKVia0DJKJYf4Ga9a8NwcZI5'; 
const branches = ['CSE', 'CSE (AIML)', 'CSE (DS)', 'AIML', 'CS', 'CS (H)', 'IT', 'CSIT', 'ECE', 'EEE', 'Civil', 'Mechanical'];
const genders = ['Male', 'Female'];
const residences = ['Day Scholar', 'Hosteller'];

// --- SCHEMA ---
const registrationSchema = z.object({
  name: z.string().trim().nonempty("Name is required").min(3, 'MIN 3 CHARACTERS').max(50, 'Invalid Name').regex(/^[A-Za-z ]+$/, 'Invalid Name'),
  studentNumber: z.string().trim().nonempty("Required")
  .refine(val => /^(23|24|25)[0-9]{7,8}$/.test(val), 
  "Invalid Student Number"),
  email: z.string().trim().nonempty("Required").toLowerCase().email("Invalid Email").endsWith("@akgec.ac.in", "Invalid Email").regex(/^[a-z.]{3,}[0-9]+@akgec\.ac\.in$/, "Invalid Email"),
  gender: z.enum(genders, { required_error: 'Select gender' }),
  branch: z.enum(branches, { required_error: 'Select branch' }),
  phone: z.string().trim().nonempty("Required").regex(/^[6-9]\d{9}$/, "Invalid Phone Number"),
  unstopId: z.string().trim().nonempty("Required").min(3, "Invalid Unstop ID").max(50, "Invalid Unstop ID").regex(/^[a-zA-Z0-9._-]+$/, "Invalid Unstop ID"),
  residence: z.enum(residences, { required_error: 'Select residence' }),
}).superRefine((data, ctx) => {
  const emailLocalPart = data.email.split('@')[0];
  const emailNumberMatch = emailLocalPart.match(/(\d+)$/);
  if (emailNumberMatch) {
    if (emailNumberMatch[0] !== data.studentNumber) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Invalid Email", path: ["email"] });
    }
  }
});

export default function Register4() {
  const [isLoading, setIsLoading] = useState(false);
  
  // --- STATE FOR MODALS ---
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState(null);
  const [collectedOtp, setCollectedOtp] = useState(null); 
  const recaptchaRef = useRef(null);
  
  const { register, handleSubmit, setValue, watch, trigger, formState: { errors }, reset } = useForm({
    resolver: zodResolver(registrationSchema), mode: 'onChange',
  });

  const watchedEmail = watch("email");

  // --- STEP 1: INITIAL SUBMIT (SEND OTP) ---
  const onInitialSubmit = async (data) => {
    setIsLoading(true);
    setFormData(data); 

    try {
      const token = await recaptchaRef.current.executeAsync();
      if (!token) {
        toast.error("Captcha verification failed.");
        setIsLoading(false);
        return;
      }

      await axios.post(`${API_URL}/api/v1/send-otp`, { 
        email: data.email,
        name: data.name,
        studentNumber: data.studentNumber,
        recaptchaToken: token
      });

      toast.success("OTP Sent to your email!");
      setShowOtpModal(true); 
      recaptchaRef.current.reset();

    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to send OTP");
      recaptchaRef.current.reset();
    } finally {
      setIsLoading(false);
    }
  };

  // --- STEP 2: COLLECT OTP ---
  const handleCollectOtp = (otpCode) => {
    setCollectedOtp(otpCode);
    setShowOtpModal(false);     
    setShowPaymentModal(true);  
  };

  // --- STEP 3: FINAL SUBMIT (UPDATED WITH CAPTCHA) ---
  const handleFinalRegistration = async (transactionId) => {
    setIsLoading(true);
    try {
      // 1. Generate FRESH Captcha Token for final verify
      const token = await recaptchaRef.current.executeAsync();
      if (!token) {
        toast.error("Captcha verification failed. Please try again.");
        setIsLoading(false);
        return;
      }

      // 2. Combine EVERYTHING + Fresh Token
      const finalPayload = { 
        ...formData, 
        otp: collectedOtp,       
        transactionId: transactionId,
        captchaToken: token // <--- ADDED THIS
      };

      await axios.post(
        `${API_URL}/api/v1/register`, 
        finalPayload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      toast.success("Registration Successful!");
      reset();
      setShowPaymentModal(false);
      recaptchaRef.current.reset();
      setIsSuccess(true); 

    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      recaptchaRef.current.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans bg-[#000000] text-white selection:bg-violet-500/30 overflow-x-hidden">
      <style>{flickerStyles}</style>
      <GlowingCursor />
      <InteractiveBackground />
      <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Chatbot />
      
      <OtpModal 
        isOpen={showOtpModal}
        onClose={() => setShowOtpModal(false)}
        onVerify={handleCollectOtp} 
        email={formData?.email}
        isLoading={false} 
      />

      <PaymentModal 
        isOpen={showPaymentModal} 
        onClose={() => setShowPaymentModal(false)} 
        onSubmit={handleFinalRegistration} 
        isLoading={isLoading} 
      />

      <div className="relative z-10 flex flex-col w-full items-center justify-center p-4 lg:p-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[89vw] h-auto lg:max-h-[100vh] gap-10 lg:gap-6 ">
          
          <div className="w-full h-auto lg:h-[95vh] order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
              className="w-full h-full"
            >
              <LeftSideContent />
            </motion.div>
          </div>

          <div className="w-full h-[750px] lg:h-[95vh] order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 100 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} 
              className="relative w-full h-full"
            >
              <div className="h-full w-full overflow-visible">
                <TiltCard>
                  <div className="relative rounded-[20px] p-[1px] bg-transparent h-full flex flex-col animate-flicker-card border border-[#8b5cf6]/30 ">
                    <div className="bg-blur-xl rounded-[19px] p-6 lg:pr-8 lg:pl-8 relative flex-grow flex flex-col h-full overflow-hidden">
                      
                      <AnimatePresence mode="wait">
                        {!isSuccess ? (
                          <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full"
                          >
                             <div className="text-center lg:mb-3 mb-3 lg:m-0 flex-shrink-0">
                                <h2 className="text-xl lg:text-2xl font-bold text-white tracking-wide drop-shadow-2xl">REGISTRATION FORM</h2>
                                <p className="text-[#a78bfa] text-sm lg:text-lg font-medium tracking-widest uppercase opacity-80">NIMBUS 3.0</p>
                              </div>

                              <form onSubmit={handleSubmit(onInitialSubmit)} noValidate className="grid grid-cols-1 grid-rows-8 gap-y-6 w-full h-full flex-grow">
                                <FormInput name="name" type="text" placeholder="Enter Name" register={register} error={errors.name} />
                                <FormInput
                                  name="studentNumber"
                                  type="text"
                                  placeholder="Enter Student Number"
                                  register={register}
                                  error={errors.studentNumber}
                                  onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
                                />
                                <FormInput name="email" type="email" placeholder="Enter College Email Id" register={register} error={errors.email} />

                                <div className="grid grid-cols-2 gap-4 w-full h-full">
                                  <FormSelect name="gender" placeholder="Select Gender" setValue={setValue} watch={watch} error={errors.gender} options={genders} />
                                  <FormSelect name="branch" placeholder="Branch" setValue={setValue} watch={watch} error={errors.branch} options={branches} />
                                </div>

                                <FormInput
                                  name="phone"
                                  type="tel"
                                  placeholder="Enter Phone Number"
                                  register={register}
                                  error={errors.phone}
                                  onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
                                />
                                <FormInput name="unstopId" type="text" placeholder="Enter Unstop Id or (NaN)" register={register} error={errors.unstopId} />
                                <FormSelect name="residence" placeholder="Select Residence" setValue={setValue} watch={watch} error={errors.residence} options={residences} />

                                <div className="w-full h-full flex items-center justify-center">
                                  <motion.button
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(124, 58, 237, 0.9)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-full bg-[#5b21b6] hover:bg-[#6d28d9] border border-violet-400/30 text-white rounded-lg font-bold tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all uppercase text-lg lg:text-xl"
                                  >
                                    {isLoading ? 'Sending OTP...' : 'Next'}
                                  </motion.button>
                                </div>
                              </form>
                          </motion.div>
                        ) : (
                          <Success4 
                            transactionId={formData?.transactionId} 
                            onReset={() => {
                              setIsSuccess(false);
                              setFormData(null);
                            }} 
                          />
                        )}
                      </AnimatePresence>

                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          </div>
        </div>

        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} theme="dark" size="invisible" />
      </div>
    </div>
  );
}