

import React from 'react';
import NumberTicker from './ui/number-ticker';
import { FaUserAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";

const Number = () => {
  return (
    <div className="w-full m-auto h-auto flex justify-center  text-xl sm:text-3xl font-bold items-center mt-10 sm:mt-28 mb-10  p-8">


      <div className="flex justify-around sm:gap-20 gap-10 font-poppins flex-col lg:flex-row w-full max-w-4xl">
     
        <div className="flex flex-col items-center">
          <div className="icon text-white mb-4 text-5xl"><FaUserAlt/></div>
          <div className="text-white mb-5 text-3xl">Followers</div>
          <div className="flex items-center">
            <NumberTicker
              value={1300}
              direction="up"
              delay={0.2}
              decimalPlaces={0}
              className="text-3xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>

      
        <div className="flex flex-col items-center">
         
             <div className="icon text-white mb-4 text-6xl"><FaPeopleGroup/></div>
          <div className="text-white mb-5 text-3xl">Members</div>
          <div className="flex items-center">
            <NumberTicker
              value={40}
              direction="up"
              delay={0.2}
              decimalPlaces={0}
              className="text-3xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>

       
        <div className="flex flex-col items-center">
          
             <div className="icon text-white mb-4 text-5xl"><FaTrophy/></div>
          <div className="text-white mb-5 text-3xl">Events</div>
          <div className="flex items-center">
            <NumberTicker
              value={30}
              direction="up"
              delay={0.2}
              decimalPlaces={0}
              className="text-3xl font-bold text-white"
            />
            <span className="text-white text-xl">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Number;
