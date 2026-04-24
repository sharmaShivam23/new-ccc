import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
// framer-motion removed — was imported but never used (bundle bloat)
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

import dev from "../EventsImg/dev.png";
import spocc22 from "../EventsImg/spocc22.jpg";
import spocc23 from "../EventsImg/spocc23.jpg";
import graphiconp from "../EventsImg/graphiconp.jpg";
import hackerp from "../EventsImg/hackerp.jpg";
import nimbusp from "../EventsImg/nimbusp.jpg";
import nimbus20 from "../EventsImg/nimbus20.png";
import nimbus30 from "../EventsImg/nimbus3000.svg";

// nimbus20 & nimbus30 loaded as string paths to avoid bundling 38MB into JS
// const nimbus20 = 'https://22cxpfdx1j.ucarecd.net/ab00e69c-6125-4f40-86eb-6d243175d874/nimbus20.png';
// const nimbus30 = 'https://22cxpfdx1j.ucarecd.net/fff636ef-96cb-4a28-b9b0-5de0aa8f9811/nimbus30.jpeg';


// nimbuss / devs1 were exact duplicates of nimbusp / dev — removed
import cloud1s from "../EventsImg/CLOUDSPLORE.png";
import graphs1 from "../EventsImg/graphicon1.png";
import reacts from "../EventsImg/react-ion.png";
import techs from "../EventsImg/techbuzz.jpeg";


import { Data } from "@/data/Data";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

// Map each event name to its SVG logo
const eventLogos = {
  DEVCLASH: dev,        // was devs1 (duplicate of dev)
  CLOUDSPLORE: cloud1s,
  "REACT-ION": reacts,
  NIMBUS: nimbusp,       // was nimbuss (duplicate of nimbusp)
  NIMBUS20: nimbus20,
  NIMBUS30: nimbus30,
  TECHBUZZ: techs,
  GRAPHICON: graphs1,
};

// Gradient map per event
const eventGradients = {
  DEVCLASH: "from-[#6E45AC] to-[#a855f7]",
  CLOUDSPLORE: "from-[#0ea5e9] to-[#38bdf8]",
  "REACT-ION": "from-[#06b6d4] to-[#66E0CE]",
  NIMBUS: "from-[#8b5cf6] to-[#6E45AC]",
  TECHBUZZ: "from-[#f59e0b] to-[#ef4444]",
  GRAPHICON: "from-[#10b981] to-[#059669]",
  NIMBUS20: "from-[#8b5cf6] to-[#6E45AC]",
  NIMBUS30: "from-[#8b5cf6] to-[#6E45AC]",
};

export const Events4 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ── Swiper Carousel ── */}
      <div className="relative sm:min-h-[80vh] min-h-[60vh] w-screen flex justify-center items-start pt-8 sm:pt-16 pb-8 overflow-hidden">
        <div className="container mx-auto sm:w-[90vw] w-[350px] sm:h-[40rem] h-[47rem] p-8">
          <h1 className="text-white text-center text-2xl sm:text-5xl md:text-6xl font-rubik font-bold mb-12 animate-fade-in">
            Events
          </h1>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 200, modifier: 2.5 }}
            navigation={{ nextEl: ".forward", prevEl: ".backward", clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              700: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="relative lg:w-[90%] xl:w-[100%] mb-10 p-5 h-[30%] sm:h-[80%]"
          >
            {[dev, spocc22, hackerp, nimbusp, spocc23, graphiconp, nimbus20, nimbus30].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  loading="eager"          // ← eager on ALL slides: browser never evicts them
                  fetchpriority={i === 0 ? 'high' : 'low'}
                  decoding="async"
                  className="w-full h-full object-cover border-4 border-white rounded-3xl"
                  alt={`event-${i}`}
                />
              </SwiperSlide>
            ))}

            <div className="absolute bottom-52 left-0 right-0 flex justify-between px-4 z-50">
              <div className="backward text-white text-3xl z-50 transform rotate-180 cursor-pointer">
                <IoMdArrowRoundForward />
              </div>
              <div className="forward text-white text-3xl z-50 cursor-pointer">
                <IoMdArrowRoundForward />
              </div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* ── ScrollStack Cards ── */}
      <div className="w-full mt-4">
        <ScrollStack useWindowScroll={true}>
          {Data.map((item, index) => {
            const logo = eventLogos[item.name];
            const gradient = eventGradients[item.name] || "from-[#6E45AC] to-[#66E0CE]";

            return (
              <ScrollStackItem
                key={index}
                itemClassName={`bg-gradient-to-br ${gradient} text-white flex flex-col sm:flex-row gap-6 items-center`}
              >
                {/* Left — Logo */}
                {logo && (
                  <div className="flex-shrink-0 w-40 h-40 sm:w-52 sm:h-52 bg-white/10 rounded-2xl flex items-center justify-center p-3 border border-white/20">
                    <img
                      src={logo}
                      alt={item.name}
                      loading="eager"        // ← eager: no mid-scroll layout shift / ResizeObserver reflow
                      decoding="async"
                      width="160"
                      height="160"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Right — Content */}
                <div className="flex flex-col flex-1 gap-3">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">{item.name}</h2>
                    <p className="text-sm sm:text-base font-light opacity-80 mt-1">{item.date}</p>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 line-clamp-3">{item.content}</p>
                  <Link to={item.link}>
                    <button className="mt-2 self-start px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/40 rounded-xl font-semibold text-sm tracking-wide transition-transform duration-200 hover:scale-105">
                      Learn More →
                    </button>
                  </Link>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </div>
  );
};