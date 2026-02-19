

import React from "react";
import { useState, useEffect } from "react";
import CCC from "../images/CCC.png";
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="z-50 ">
      <Sidebar />
      <ResNavbar />
      <Social />
      <GoToTop />
    </div>
  );
};

const Sidebar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const handle = () => {
    setOpen(true);
  };

  const handles = () => {
    setOpen(false);
  };

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const docHeight =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   const scrolled = (scrollTop / docHeight) * 100;
  //   setScrollWidth(scrolled);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <motion.nav
      layout
      onHoverStart={handle}
      onHoverEnd={handles}
      className={`z-50 fixed  top-0 h-[100vh] hidden cursor-pointer sm:block  border-r-2 shrink-0 border-violet-800 bg-zinc-800 p-3`}
      style={{ width: open ? "235px" : "" }}
    >
      <TitleSection open={open} />
      <div className="space-y-1">
        <Option
          to="/"
          Icon={FaHome}
          title="Home"
          selected={selected}
          setSelected={setSelected}
          open={open}
           text = "text-3xl"
        />
        <Option
          to="/Team"
          Icon={FaPeopleGroup}
          title="Team"
          selected={selected}
          setSelected={setSelected}
          open={open}
           text = "text-3xl"
        />
        <Option
          to="/Events"
          Icon={MdEmojiEvents}
          title="Events"
          selected={selected}
          setSelected={setSelected}
          open={open}
           text = "text-3xl"
        />

        <Option
          to="/Contact"
          Icon={FaPhoneVolume}
          title="Contact"
          selected={selected}
          setSelected={setSelected}
          open={open}
          text = "text-[27px]"
        />
        <Option
          to="/Register"
          Icon={GiAchievement}
          title="Register"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs="1"
           text = "text-3xl"
        />
      </div>
      {/* <div
        className={`fixed  ${open ? "left-[235px]" : "left-[70px]"} top-0 h-1 w-1 bg-violet-600 rounded-r-2xl`}
        style={{ height: `${scrollWidth}%` }}
      ></div> */}
      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ to, Icon, title, selected, setSelected, open, notifs,text }) => {
  return (
    <>
      <Link to={to}>
        <motion.button
          layout
          onClick={() => setSelected(title)}
          className={` z-50 relative flex h-16 w-full items-center hover:text-black text-white hover:bg-white rounded-md  transition-colors  
          `}
        >
          <motion.div
            layout
            className={`grid h-full ${text ? text : "text-3xl"} w-10 place-content-center`}
          >
            <Icon />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-lg ml-2 font-semibold"
            >
              {title}
            </motion.span>
          )}

          {notifs && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{ transform: "translateY(-50%)" }}
              className="absolute right-2  size-4 ronded bg-indigo-500 text-xs animate-bounce4 font-bold  text-white top-7"
            >
              {notifs}
            </motion.span>
          )}
        </motion.button>
      </Link>
    </>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className=" z-50 mb-3 border-b border-violet-600 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors ">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-white"
            >
              <span className="block text-xs font-bold ">
                Cloud Computing Cell
              </span>
              <span className="block text-xs text-slate-400 font-bold">
                Think Develop Deploy
              </span>
            </motion.div>
          )}
        </div>
        
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <>
      <motion.div layout>
        <img
          src={CCC}
          className={`h-12 z-50 ${open ? "animate-slideo" : ""}`}
          alt=""
        />
      </motion.div>
    </>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="text-white absolute bottom-0 left-0 right-0 border-t border-violet-600 transition-colors"
    >
      <div className="flex items-center p-2">
        <div className="grid size-10 place-center text-lg">
          <FaAnglesLeft
            className={` font-bold text-xl transition-transform mt-3 ${
              open && "rotate-180"
            }`}
          />
        </div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-lg font-bold  text-white"
          ></motion.span>
        )}
      </div>
    </motion.button>
  );
};





const ResNavbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const location = useLocation();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="block sm:hidden fixed left-0 w-full  bottom-0 right-0 z-50 border-t-2 border-violet-800">
      <div className="icons flex text-white bg-black h-16 justify-evenly items-center text-3xl">
        <img src={CCC} className="h-10" alt="" />
        <div className="border-r border-violet-600 h-16  pb-3 mt-3 mb-3"></div>
        <Link
          to="/"
          className={`flex justify-evenly items-center ${
            location.pathname === "/"
              ? "bg-white rounded-md h-10  w-10  text-black"
              : ""
          }`}
        >
          <FaHome />
        </Link>
        <Link
          to="/Team"
          className={`flex justify-evenly items-center ${
            location.pathname === "/Team"
              ? "bg-white rounded-md h-10  w-10  text-black"
              : ""
          }`}
        >
          <FaPeopleGroup />
        </Link>
        <Link
          to="/Events"
          className={`flex justify-evenly items-center ${
            location.pathname === "/Events"
              ? "bg-white rounded-md h-10  w-10  text-black"
              : ""
          }`}
        >
          <MdEmojiEvents />
        </Link>
        <Link
          to="/Contact"
          className={`flex justify-evenly items-center ${
            location.pathname === "/Contact"
              ? "bg-white rounded-md h-10  w-10  text-black"
              : ""
          }`}
        >
          <FaPhoneVolume className="text-2xl" />
        </Link>
        <Link
          to="/Register"
          className={`flex justify-evenly items-center ${
            location.pathname === "/Register"
              ? "bg-white rounded-md h-10  w-10  text-black"
              : ""
          }`}
        >
          <GiAchievement />
        </Link>
      </div>
      <div
        className={`fixed   bottom-16 w-1 h-1 left-0 bg-violet-600 rounded-r-2xl`}
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};

const Social = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white hidden  fixed w-16 h-[100vh] border-l-2 border-violet-700 mt-0 right-0 top-0 sm:flex justify-center items-center flex-col gap-10 text-4xl cursor-pointer z-50">
      <div
        className="fixed  right-[63px] top-0 h-1 w-1 bg-violet-600 rounded-r-2xl"
        style={{ height: `${scrollWidth}%` }}
      ></div>

      <div>
        <div className="flex justify-center items-center text-white flex-col gap-12">
          <a
            className="relative top   z-50 cursor-pointer delay-0"
            href="https://www.facebook.com/ccc.akgec"
          >
            <FaFacebook
            className="hover:text-blue-700 transition-all ease-in-out duration-1000 hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                
                isHovered ? "block" : "hidden"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Facebook
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className="relative top  hover:text-blue-900 hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href="https://www.linkedin.com/company/cloud-computing-cell-akgec/"
          >
            <FaLinkedin />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                
                 isHovered2 ? "block" : "hidden"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Linkedin
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className="relative top  hover:text-orange-700  hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href="https://www.instagram.com/ccc_akgec?igsh=YzljYTk1ODg3Zg=="
          >
            <FaSquareInstagram />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
                isHovered3 ? "block" : "hidden"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Instagram
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            className="relative top    hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href=""
          >
            <FaSquareXTwitter />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
               isHovered4 ? "block" : "hidden"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500  text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Twitter
            </div>
          </a>
          <a
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
            className="relative top hover:text-white hover:scale-110 transition-all ease-in-out duration-1000 z-50 cursor-pointer delay-0"
            href="https://github.com/cccAKGEC/CCC-Website.git"
          >
            <IoLogoGithub />
            <div
              className={`h-9 rounded-md w-24 absolute top-2  ${
               isHovered5 ? "block" : "hidden"
              } transition-all ease-in-out duration-1000  right-16 border-2 border-violet-500 0 text-sm flex justify-center items-center font-jetbrains font-bold`}
            >
              Github
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function GoToTop() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollTop = window.scrollY;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  

  return (
    <div
      onClick={top}
      className={`text-xl z-50  cursor-pointer   h-12 flex justify-center  items-center w-12  hover:scale-110 transition-all ease-in-out duration-2000 delay-0 rounded-full bg-slate-50 shadow-md hover:shadow-white text-black font-extrabold fixed sm:right-[80px] bottom-20 right-5 sm:bottom-5 ${
        scrollTop > 600 ? "flex" : "hidden"
      }`}
    >
      <FaAnglesLeft
        className={` font-bold rotate-90 text-xl transition duration-1000  ease-in-out`}
      />
    </div>
  );
}
