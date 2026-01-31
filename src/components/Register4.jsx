import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

// 1. Removed SplashScreen Import
import { SplashScreen } from './SplashScreen';
import { FormInput, FormSelect } from './FormComponents';
import GlowingCursor from './GlowingCursor';
import { InteractiveBackground } from './InteractiveBackground';
import { LeftSideContent } from './LeftSideContent';
import { flickerStyles } from './AnimationStyles';  

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/10 to-transparent rounded-[20px] -z-10 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(-50px)" }} />
      <div style={{ transform: "translateZ(30px)", width: "100%", height: "100%" }}>{children}</div>
    </motion.div>
  );
};

const API_URL = import.meta.env.VITE_API_URL;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const branches = ['CSE', 'CSE (AIML)', 'CSE (DS)', 'AIML', 'CS', 'CS (H)', 'IT', 'CSIT', 'ECE', 'EEE', 'Civil', 'Mechanical'];
const genders = ['Male', 'Female'];
const residences = ['Day Scholar', 'Hosteller'];

const registrationSchema = z.object({
  name: z.string().trim().nonempty("Name is required").min(3, 'Min 3 chars').max(50).regex(/^[A-Za-z ]+$/, 'Letters only'),
  studentNumber: z.string().trim().nonempty("Required").refine(val => /^[0-9]*$/.test(val), "Numbers only").refine(val => val.startsWith('24'), "Must start with 24").refine(val => val.length >= 7 && val.length <= 9, "7-9 digits"),
  email: z.string().trim().nonempty("Required").toLowerCase().email("Invalid email").endsWith("@akgec.ac.in", "Must be @akgec.ac.in").regex(/^[a-z.]{3,}[0-9]+@akgec\.ac\.in$/, "Format: name + std no + @akgec.ac.in"),
  gender: z.enum(genders, { required_error: 'Select gender' }),
  branch: z.enum(branches, { required_error: 'Select branch' }),
  phone: z.string().trim().nonempty("Required").refine(val => /^[0-9]*$/.test(val), "Numbers only").refine(val => /^[6-9]/.test(val), "Start with 6-9").refine(val => val.length === 10, "10 digits"),
  unstopId: z.string().trim().nonempty("Required").max(20).refine(val => /^[a-zA-Z]/.test(val), "Start with letter"),
  residence: z.enum(residences, { required_error: 'Select residence' }),
}).superRefine((data, ctx) => {
  const emailLocalPart = data.email.split('@')[0];
  const emailNumberMatch = emailLocalPart.match(/(\d+)$/);
  if (emailNumberMatch) {
    if (emailNumberMatch[0] !== data.studentNumber) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Email student no. doesn't match Student No. field", path: ["email"] });
    }
  }
});

export default function Register4() {
  const [isLoading, setIsLoading] = useState(false);
  
  // 2. Add state to hold data while waiting for captcha
  const [pendingData, setPendingData] = useState(null); 
  const [captchaToken, setCaptchaToken] = useState(null);
  
  const recaptchaRef = useRef(null);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, watch, trigger, formState: { errors }, reset } = useForm({
    resolver: zodResolver(registrationSchema), mode: 'onChange',
  });

  const watchedStudentNumber = watch("studentNumber");
  const watchedEmail = watch("email");

  useEffect(() => { if (watchedEmail) trigger("email"); }, [watchedStudentNumber, trigger]);

  // 3. Initial Submit: Just save data and trigger Captcha
  const onSubmit = (data) => {
    setIsLoading(true);
    setPendingData(data); // Save the form data
    recaptchaRef.current.execute(); // Trigger the invisible captcha
  };

  // 4. Effect: Watches for Captcha Token + Pending Data to trigger final API call
  useEffect(() => {
    const submitFinalData = async () => {
      if (captchaToken && pendingData) {
        try {
          await axios.post(API_URL, { ...pendingData, captchaToken }, { headers: { 'Content-Type': 'application/json' } });
          toast.success("Registration Successful!");
          reset();
          setCaptchaToken(null);
          setPendingData(null);
          recaptchaRef.current?.reset();
          setTimeout(() => navigate('/success4'), 1500);
        } catch (error) {
          toast.error(error.response?.data?.message || 'Registration failed');
          setCaptchaToken(null);
          recaptchaRef.current?.reset();
        } finally {
          setIsLoading(false);
        }
      }
    };

    submitFinalData();
  }, [captchaToken, pendingData]); // Run this when either changes

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans bg-[#000000] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <style>{flickerStyles}</style>
      <GlowingCursor />
      <InteractiveBackground />
      <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      {/* 5. Removed SplashScreen Component and condition */}
      
      <div className="relative z-10 flex flex-col w-full items-center justify-center p-4 lg:p-10 pb-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 w-[89vw] h-auto lg:min-h-[70vh] gap-10 lg:gap-16 mt-0">

          <div className="w-full h-auto lg:h-screen order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="w-full h-full">
              <LeftSideContent />
            </motion.div>
          </div>

          <div className="w-full h-[750px] lg:h-screen order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="relative w-full h-full">
              <div className="h-full w-full">
                <TiltCard>
                  <div className="relative rounded-[20px] p-[1px] bg-transparent h-full flex flex-col animate-flicker-card border border-[#00aaff]/30 ">
                    
                    <div className="bg-black/60 backdrop-blur-xl rounded-[19px] p-6 lg:p-12 relative flex-grow flex flex-col h-full overflow-hidden">
                      
                      <div className="text-center mb-3 flex-shrink-0">
                        <h2 className="text-xl lg:text-2xl font-bold text-white tracking-wide drop-shadow-md">REGISTRATION FORM</h2>
                        <p className="text-[#00aaff] text-sm lg:text-lg font-medium tracking-widest uppercase opacity-80">Event Name</p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 grid-rows-8 gap-y-6 w-full h-full flex-grow">
                          
                          <FormInput name="name" type="text" placeholder="Enter Name" register={register} error={errors.name} />
                          <FormInput name="studentNumber" type="text" placeholder="Enter Student Number" register={register} error={errors.studentNumber} />
                          <FormInput name="email" type="email" placeholder="Enter College Email Id" register={register} error={errors.email} />
                          
                          <div className="grid grid-cols-2 gap-4 w-full h-full"> 
                             <FormSelect name="gender" placeholder="Select Gender" setValue={setValue} watch={watch} error={errors.gender} options={genders} />
                             <FormSelect name="branch" placeholder="Branch" setValue={setValue} watch={watch} error={errors.branch} options={branches} />
                          </div>
                          
                          <FormInput name="phone" type="tel" placeholder="Enter Phone Number" register={register} error={errors.phone} />
                          <FormInput name="unstopId" type="text" placeholder="Enter Unstop Id or (NaN)" register={register} error={errors.unstopId} />
                          <FormSelect name="residence" placeholder="Select Residence" setValue={setValue} watch={watch} error={errors.residence} options={residences} />
                        
                          <div className="w-full h-full flex items-center justify-center">
                             <motion.button
                               whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 100, 255, 0.9)" }}
                               whileTap={{ scale: 0.98 }}
                               type="submit"
                               disabled={isLoading}
                               className="w-full h-full bg-[#004488] hover:bg-[#0055aa] border border-blue-400/30 text-white rounded-lg font-bold tracking-wider shadow-[0_0_20px_rgba(0,100,255,0.4)] transition-all uppercase text-lg lg:text-xl"
                             >
                               {isLoading ? 'Processing...' : 'Register'}
                             </motion.button>
                          </div>
                      </form>

                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          </div>

        </div>
        <div className="hidden">
           <ReCAPTCHA 
              ref={recaptchaRef} 
              sitekey={RECAPTCHA_SITE_KEY} 
              onChange={(token) => setCaptchaToken(token)} // This now triggers the useEffect
              theme="dark" 
              size="invisible" 
           />
        </div>
      </div>
    </div>
  );
}