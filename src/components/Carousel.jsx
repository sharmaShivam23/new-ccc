// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import web from "../images/web.png";
// import ui from "../images/ui.png";
// import cloud from "../images/cloud.png";
// import app from "../images/app.png";
// import { motion } from "framer-motion";

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     pauseOnHover: false,
//     beforeChange: (current, next) => {
//       setCurrentSlide(next);
//     },
//   };

//   const data = [
//     {
//       img: web,
//       domain: "Web Development",
//       details:
//         "Web development is at the heart of creating online presence for individuals, businesses, and organizations alike. Web developers use various technologies, such as HTML, CSS, JavaScript, and backend frameworks like Node.js, Ruby on Rails, and Django, to craft websites that are not only functional but also visually appealing.",
//       // from: "#0D7377",
//       // to: "#32E0C4",
//       from: "#000000",
//       to: "#000000",
//       // from: "#ffaa40",
//       // to: "#9c40ff",
//       height: "[55vh]",
//     },
//     {
//       img: app,
//       domain: "Mobile App Development",
//       details:
//         "Mobile app development has revolutionized how we interact with technology. With millions of mobile devices worldwide, the demand for mobile apps continues to grow. Mobile app developers create applications for platforms like iOS and Android, allowing users to engage with services, content, and functionality on-the-go.",
//       // from: "#00BFBF",
//       // to: "#1E10FF",
//       from: "#000000",
//       to: "#000000",
//       height: "[55vh]",
//     },
//     {
//       img: ui,
//       domain: "UI/UX Design",
//       details:
//         "UI/UX design is vital for creating products that users love to interact with. It focuses on both the visual design (UI) and the overall experience (UX) users have when engaging with a product. The goal is to make products visually appealing, easy to navigate, and effective in helping users accomplish their tasks.",
//       // from: "#8A2BE2",
//       // to: "#7B90EE",
//       from: "#000000",
//       to: "#000000",
//       height: "[800px]",
//     },
//     {
//       img: cloud,
//       domain: "Cloud Computing",
//       details:
//         "Cloud computing is changing how businesses function and provide services. It enables companies to store data and run applications on remote servers rather than relying on traditional on-site infrastructure. The cloud provides scalable, affordable, and adaptable solutions that help businesses manage and process data more effectively. ",
//       // from: "#FF1493",
//       // to: "#FF6347",
//       from: "#000000",
//       to: "#000000",
//       height: "[800px]",
//     },
//   ];

//   return (
//     <>
//       <div className="max-w-[88vw]  m-auto   h-[100vh]  flex-col text-white flex justify-center items-center overflow-hidden">
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.1 }}
//           className="text-white text-center text-2xl sm:text-5xl font-poppins sm:mb-10 relative top-14 sm:top-7  md:text-6xl  font-bold"
//         >
//           Our Domains
//         </motion.h1>
//         <div className="h-auto psud border-2 border-violet-500  text-white sm:p-9 w-full min-[450px]:w-[80vw] sm:w-[70vw]  rounded-3xl xl:w-[80vw] mx-auto">
//         {/* <div className="max-w-[80vw] rounded-3xl m-auto  h-auto "> */}
//           <Slider {...settings}>
//             {data.map((card, index) => (
//            <React.Fragment key={index}>
//                 <div
//                   key={index}
//                   className="h-auto psud   text-white sm:p-9 w-full min-[450px]:w-[80vw] sm:w-[70vw]  rounded-3xl xl:w-[80vw] mx-auto "
//                   style={{
//                     background: `linear-gradient(to left, ${card.from}, ${card.to})`,
//                     zIndex: 100,
//                   }}
//                 >
//                   <div className="sm:flex block justify-center  items-center h-auto">
//                     <div className="sm:w-3/6 w-full h-[35vh] sm:h-full flex justify-center mt-0 sm:mt-6 items-center">
//                       <img
//                         src={card.img}
//                         alt=""
//                         className={`h-52 md:h-96 lg:h-[55vh]  animate-bounce`}
//                       />
//                     </div>

//                     <div className="sm:w-4/6 w-full h-[35vh] text-center flex flex-col justify-center items-center p-9">
//                       <p className="sm:text-4xl text-xl mb-2 sm:mb-7 mt-2 sm:mt-10 font-poppins font-bold  text-white">
//                         {card.domain}
//                       </p>
//                       <motion.p
//                         initial={{ opacity: 0, y: 500 }}
//                         animate={{
//                           opacity: currentSlide === index ? 1 : 0,
//                           y: currentSlide === index ? 0 : 100,
//                         }}
//                         transition={{ duration: 1, ease: "easeInOut" }}
//                         className="font-[400] text-center   font-poppins  max-[450px]:text-xs text-lg sm:text-xl lg:text-xl  mb-6 text-white shadow-none"
//                       >
//                         {card.details}
//                       </motion.p>
//                     </div>
//                   </div>
//                 </div>
//                 </React.Fragment>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       </>
//   );
// };

// export default Carousel;




import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from "../images/web.png";
import ui from "../images/ui.png";
import cloud from "../images/cloud.png";
import app from "../images/app.png";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const data = [
    {
      img: web,
      domain: "Web Development",
      details:
        "Web development is at the heart of creating online presence for individuals, businesses, and organizations alike. It encompasses everything from building simple static pages to complex dynamic websites and web applications that interact with databases and users in real-time. Web developers use various technologies, such as HTML, CSS, JavaScript, and backend frameworks like Node.js, Ruby on Rails, and Django, to craft websites that are not only functional but also visually appealing.",
      // from: "#0D7377",
      // to: "#32E0C4",
      from: "#000000",
      to: "#000000",
      // from: "#ffaa40",
      // to: "#9c40ff",
      height: "[55vh]",
    },
    {
      img: app,
      domain: "Mobile App Development",
      details:
        "Mobile app development has revolutionized how we interact with technology. With millions of mobile devices worldwide, the demand for mobile apps continues to grow. Mobile app developers create applications for platforms like iOS and Android, allowing users to engage with services, content, and functionality on-the-go. From social media platforms to banking apps and games, mobile apps have become an integral part of daily life.",
      // from: "#00BFBF",
      // to: "#1E10FF",
      from: "#000000",
      to: "#000000",
      height: "[55vh]",
    },
    {
      img: ui,
      domain: "UI/UX Design",
      details:
        "UI/UX design is vital for creating products that users love to interact with. It focuses on both the visual design (UI) and the overall experience (UX) users have when engaging with a product. The goal is to make products visually appealing, easy to navigate, and effective in helping users accomplish their tasks. Companies must prioritize UI/UX design to stay competitive, focusing on user-centered design, ensuring consistency, optimizing for mobile devices, simplifying navigation, enhancing performance, and making products accessible for all users.",
      // from: "#8A2BE2",
      // to: "#7B90EE",
      from: "#000000",
      to: "#000000",
      height: "[800px]",
    },
    {
      img: cloud,
      domain: "Cloud Computing",
      details:
        "Cloud computing is changing how businesses function and provide services. It enables companies to store data and run applications on remote servers rather than relying on traditional on-site infrastructure. The cloud provides scalable, affordable, and adaptable solutions that help businesses manage and process data more effectively. Additionally, cloud computing improves collaboration by allowing teams to access shared resources and collaborate effortlessly, no matter where they are located.",
      // from: "#FF1493",
      // to: "#FF6347",
      from: "#000000",
      to: "#000000",
      height: "[800px]",
    },
  ];

  return (
    <>
      <div className="max-w-[88vw]  m-auto  h-[100vh]  flex-col text-white flex justify-center items-center overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white text-center text-2xl sm:text-5xl font-poppins sm:mb-0 relative top-14 sm:top-7 mb-4 md:text-6xl  font-bold"
        >
          Our Domains
        </motion.h1>
        <div className="max-w-[90vw] m-auto  h-auto ">
          <Slider {...settings}>
            {data.map((card, index) => (
           <React.Fragment key={index}>
                <div
                  key={index}
                  className="flex w-[88vw] justify-center border-2 border-violet-600 items-center h-[80vh]"
                  style={{
                    background: `linear-gradient(to left, ${card.from}, ${card.to})`,
                    zIndex: 100,
                  }}
                >
                  <div className="sm:flex block justify-center  items-center h-auto">
                    <div className="sm:w-3/6 w-full h-[35vh] sm:h-full flex justify-center mt-0 sm:mt-6 items-center">
                      <img
                        src={card.img}
                        alt=""
                        className={`h-52 md:h-96 lg:h-[65vh]  animate-bounce`}
                      />
                    </div>

                    <div className="sm:w-4/6 w-full h-[35vh] text-center flex flex-col justify-center items-center p-9">
                      <p className="sm:text-4xl text-xl mb-2 sm:mb-7 mt-2 sm:mt-10 font-poppins font-bold  text-white">
                        {card.domain}
                      </p>
                      <motion.p
                        initial={{ opacity: 0, y: 500 }}
                        animate={{
                          opacity: currentSlide === index ? 1 : 0,
                          y: currentSlide === index ? 0 : 100,
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="font-[400] text-center   font-poppins  max-[450px]:text-xs text-lg sm:text-xl lg:text-xl  mb-6 text-white shadow-none"
                      >
                        {card.details}
                      </motion.p>
                    </div>
                  </div>
                </div>
                </React.Fragment>
            ))}
          </Slider>
        </div>
      </div>
      </>
  );
};

export default Carousel;
